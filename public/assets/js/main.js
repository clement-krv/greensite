document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.getElementById("articles-container");
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Vérifier si le mode sombre est activé
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀ Mode Clair";
    }

    // Gestion du bouton Dark Mode
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

    // 🔹 Vérifier si localStorage contient déjà des articles
    if (!localStorage.getItem("articles") || localStorage.getItem("articles") === "undefined") {
        console.log("📌 Initialisation de localStorage avec les articles de articles.js");
        localStorage.setItem("articles", JSON.stringify(window.articlesData)); // Stocker en JSON
    }

    // Récupérer les articles en s'assurant que `localStorage` n'est pas vide
    let articles = JSON.parse(localStorage.getItem("articles") || "[]");

    // Vérification que les articles sont bien récupérés
    if (!articles || articles.length === 0) {
        console.error("❌ Erreur : Aucun article trouvé !");
        return;
    }

    // Affichage des articles
    afficherArticles(articles);

    // Fonction pour afficher les articles dynamiquement
    function afficherArticles(articles) {
        articlesContainer.innerHTML = ""; // Nettoyer le container avant ajout

        articles.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");

            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <p><strong>Écrit par :</strong> ${article.author} - <em>${article.date}</em></p>
                <img src="" data-src="${article.image}" class="lazyload" alt="${article.title}">
                <p><strong>Tags:</strong> ${article.tags.join(", ")}</p>
                <a href="${article.slug}.html" class="btn">Lire plus</a>
            `;

            articlesContainer.appendChild(articleDiv);
        });

        activerLazyLoad();
    }

    // Fonction pour activer LazyLoad sur les images
    function activerLazyLoad() {
        const images = document.querySelectorAll("img.lazyload");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Charger l'image réelle
                    img.classList.remove("lazyload");
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "100px" });

        images.forEach(img => observer.observe(img));
    }
});
