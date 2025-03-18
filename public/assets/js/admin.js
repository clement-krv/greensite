document.addEventListener("DOMContentLoaded", () => {
    const articleForm = document.getElementById("article-form");
    const articlesList = document.getElementById("articles-list");
    let articles = JSON.parse(localStorage.getItem("articles") || "[]");

    function afficherArticles() {
        articlesList.innerHTML = "";
        articles.forEach((article, index) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article-item");

            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p><strong>Slug:</strong> ${article.slug}</p>
                <p><strong>Auteur:</strong> ${article.author}</p>
                <p><strong>Date:</strong> ${article.date}</p>
                <p>${article.content}</p>
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <button class="edit-btn" data-index="${index}">✏ Modifier</button>
                <button class="delete-btn" data-index="${index}">🗑 Supprimer</button>
            `;

            articlesList.appendChild(articleDiv);
        });

        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", (e) => modifierArticle(e.target.dataset.index));
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", (e) => supprimerArticle(e.target.dataset.index));
        });
    }

    function getFormattedDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function ajouterOuModifierArticle(e) {
        e.preventDefault();
        const id = document.getElementById("article-id").value;
        const title = document.getElementById("title").value;
        const slug = document.getElementById("slug").value;
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;
        const date = getFormattedDate();

        const article = { title, slug, author, content, image, date };

        if (id === "") {
            articles.push(article);
        } else {
            articles[id] = article;
        }

        localStorage.setItem("articles", JSON.stringify(articles));
        articleForm.reset();
        document.getElementById("article-id").value = "";
        afficherArticles();
    }

    function modifierArticle(index) {
        const article = articles[index];
        document.getElementById("article-id").value = index;
        document.getElementById("title").value = article.title;
        document.getElementById("slug").value = article.slug;
        document.getElementById("author").value = article.author;
        document.getElementById("content").value = article.content;
        document.getElementById("image").value = article.image;
    }

    function supprimerArticle(index) {
        articles.splice(index, 1);
        localStorage.setItem("articles", JSON.stringify(articles));
        afficherArticles();
    }

    articleForm.addEventListener("submit", ajouterOuModifierArticle);
    afficherArticles();
});
