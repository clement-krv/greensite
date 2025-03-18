const articles = [
    {
        "id": 1,
        "title": "Introduction au Green IT",
        "slug": "introduction-green-it",
        "content": "Le Green IT désigne un ensemble de pratiques visant à réduire l'empreinte environnementale du numérique. Cela passe par l'optimisation des logiciels, la gestion responsable des équipements et la réduction de la consommation énergétique.",
        "image": "public/assets/images/introduction-green-it.jpg",
        "date": "2025-03-17",
        "author": "Projet Green IT",
        "tags": ["Green IT", "Numérique Responsable", "Écologie"]
    },
    {
        "id": 2,
        "title": "Les impacts environnementaux du numérique",
        "slug": "impacts-numerique",
        "content": "Le numérique représente environ 4% des émissions mondiales de gaz à effet de serre. Les équipements informatiques, leur fabrication et leur consommation énergétique sont les principaux contributeurs à cette empreinte.",
        "image": "public/assets/images/impacts-numerique.jpg",
        "date": "2025-03-17",
        "author": "Projet Green IT",
        "tags": ["Empreinte Carbone", "Consommation Énergétique", "Environnement"]
    },
    {
        "id": 3,
        "title": "L'écoconception des services numériques",
        "slug": "ecoconception-services",
        "content": "L'écoconception consiste à intégrer des principes durables dès la conception des services numériques. Cela inclut la minimisation des requêtes, l'optimisation du code et l'utilisation d'hébergements éco-responsables.",
        "image": "public/assets/images/ecoconception.jpg",
        "date": "2025-03-17",
        "author": "Projet Green IT",
        "tags": ["Écoconception", "Optimisation", "Développement Durable"]
    },
    {
        "id": 4,
        "title": "L'optimisation des infrastructures et hébergements",
        "slug": "optimisation-infrastructure",
        "content": "Les datacenters consomment une grande quantité d'énergie. Utiliser des serveurs optimisés, la virtualisation et des énergies renouvelables peut significativement réduire leur impact environnemental.",
        "image": "public/assets/images/optimisation-infrastructure.jpg",
        "date": "2025-03-17",
        "author": "Projet Green IT",
        "tags": ["Datacenters", "Virtualisation", "Énergie Verte"]
    },
    {
        "id": 5,
        "title": "Les bonnes pratiques pour un numérique durable",
        "slug": "bonnes-pratiques-numerique",
        "content": "Supprimer les emails inutiles, optimiser les images, utiliser des moteurs de recherche écologiques, et favoriser les logiciels open-source sont autant d'actions à adopter pour un numérique plus durable.",
        "image": "public/assets/images/bonnes-pratiques.jpg",
        "date": "2025-03-17",
        "author": "Projet Green IT",
        "tags": ["Bonnes Pratiques", "Éco-gestes", "Sobriété Numérique"]
    }
];

// Initialisation des articles dans `localStorage` si vide
if (!localStorage.getItem("articles")) {
    localStorage.setItem("articles", JSON.stringify(articles));
}

// Exposer les articles pour le `main.js`
window.articlesData = articles;
