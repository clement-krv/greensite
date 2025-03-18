document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById("articles-container");
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀ Mode Clair";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀ Mode Clair";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Mode Sombre";
        }
    });

    function chargerArticles() {
        let articles = JSON.parse(localStorage.getItem("articles") || "[]");

        if (!articles || articles.length === 0) {
            console.error("❌ Aucun article trouvé !");
            return;
        }

        afficherArticles(articles);
    }

    function afficherArticles(articles) {
        articlesContainer.innerHTML = "";

        articles.forEach((article, index) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");

            let imagePath = `../../${article.image.replace(".jpg", ".webp")}`;

            let imageTag = "";
            if (index < 5 && article.image) {
                imageTag = `<img data-src="${imagePath}" alt="${article.title}" class="lazyload">`;
            }

            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <p><strong>Écrit par :</strong> ${article.author || "Inconnu"} - <em>${article.date || "Non daté"}</em></p>
                ${imageTag}
            `;

            const tagsContainer = document.createElement("div");
            tagsContainer.classList.add("tags");

            if (article.tags) {
                article.tags.forEach(tag => {
                    const tagElement = document.createElement("span");
                    tagElement.classList.add("tag");
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
            }

            articleDiv.appendChild(tagsContainer);
            articlesContainer.appendChild(articleDiv);
        });

        activerLazyLoad();
    }

    function activerLazyLoad() {
        const images = document.querySelectorAll("img.lazyload");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    console.log("✅ Chargement de l'image :", img.dataset.src);
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    img.classList.remove("lazyload");
                    img.classList.add("article-image");
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "100px" });

        images.forEach(img => observer.observe(img));
    }

    chargerArticles();
});
