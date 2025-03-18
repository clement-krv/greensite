# 🌿 GreenSite - Site Web Éco-Conçu

**GreenSite** est un site web vitrine conçu avec une approche **Green IT**, visant à minimiser l'impact environnemental du numérique tout en assurant une expérience utilisateur fluide et optimisée.

## 📖 Table des Matières
1. [🚀 Technologies Utilisées et Justification](#-technologies-utilisées-et-justification)
2. [🔥 Fonctionnalités Implémentées](#-fonctionnalités-implémentées)
3. [⚖️ Compromis et Justifications](#️-compromis-et-justifications)
   - [1️⃣ Pas d'utilisation de frameworks](#1️⃣-pas-dutilisation-de-frameworks)
   - [2️⃣ Pas de base de données / Backend](#2️⃣-pas-de-base-de-données--backend)
   - [3️⃣ WebP vs AVIF : Pourquoi j’ai choisi WebP ?](#3️⃣-webp-vs-avif--pourquoi-jai-choisi-webp-)
4. [🌍 Hébergement et Mise en Production avec Green IT](#-hébergement-et-mise-en-production-avec-green-it)
   - [📌 Objectifs pour une mise en production Green IT](#📌-objectifs-pour-une-mise-en-production-green-it)
   - [✅ Solutions possibles](#✅-solutions-possibles)
   - [📌 Pourquoi pas un serveur classique ?](#📌-pourquoi-pas-un-serveur-classique-)
5. [❓ Pourquoi il n’y a pas de `.htaccess` dans ce projet ?](#-pourquoi-il-ny-a-pas-de-htaccess-dans-ce-projet-)
6. [🏗️ Installation et Déploiement](#️-installation-et-déploiement)
7. [📜 Licence](#-licence)
8. [👨‍💻 Auteur](#-auteur)


## 🚀 Technologies Utilisées et Justification

| Technologie | Raison du choix |
|------------|----------------|
| **HTML, CSS, JS natif** | Aucun framework pour limiter le poids des fichiers et réduire la consommation des ressources. |
| **LocalStorage** | Permet de stocker les articles côté client sans requêtes réseau inutiles. |
| **Lazy Loading** | Charge uniquement les images visibles à l’écran pour économiser de la bande passante. |
| **Format WebP** | Format d’image optimisé pour réduire le poids sans sacrifier la qualité. |
| **SEO Friendly** | Métadonnées optimisées pour les moteurs de recherche sans impact supplémentaire. |

## 🔥 Fonctionnalités Implémentées

✅ Site **100% statique** sans dépendances externes.  
✅ Système de gestion des articles via **LocalStorage** (CRUD).  
✅ **Mode sombre** persistant grâce à LocalStorage.  
✅ **Optimisation des performances** avec le **lazy loading des images**.  
✅ Respect des bonnes pratiques **SEO** (balises meta, sitemap.xml, robots.txt).  

---

## ⚖️ Compromis et Justifications

### 1️⃣ **Pas d'utilisation de frameworks**
📌 **Pourquoi ?**  
- Un framework comme React ou Vue ajouterait plusieurs **Ko de JS** inutiles.
- Une page statique **rend bien plus vite** et consomme moins d’énergie.

### 2️⃣ **Pas de base de données / Backend**
📌 **Pourquoi ?**  
- Utilisation de **LocalStorage** pour éviter des **requêtes HTTP inutiles**.
- Une API distante **consommerait plus de ressources serveur** et augmenterait l’empreinte carbone.

### 3️⃣ **WebP vs AVIF : Pourquoi j’ai choisi WebP ?**
📌 **Pourquoi pas AVIF ?**  
- AVIF offre une **meilleure compression** et une **qualité supérieure** à WebP.
- Cependant, **la compatibilité navigateur** est encore limitée.
- WebP est **plus universellement supporté** et garantit **une meilleure accessibilité**.
- J’ai fait le choix d’un **compromis entre performance et compatibilité**.

---

## 🌍 Hébergement et Mise en Production avec Green IT

### **📌 Objectifs pour une mise en production Green IT**
- **Minimiser les ressources serveur** → Choisir un hébergement statique.
- **Réduire la consommation énergétique** → Serveurs à énergie renouvelable.
- **Limiter l’impact du trafic réseau** → Compression et mise en cache efficace.

### **✅ Solutions possibles**
| Hébergeur | Avantages Green IT |
|-----------|--------------------|
| **[GitHub Pages](https://pages.github.com/)** | Gratuit, rapide, pas de serveur actif en continu. |
| **[Netlify](https://www.netlify.com/)** | CDN intégré, optimisation automatique des fichiers statiques. |
| **[Vercel](https://vercel.com/)** | Performances élevées, mise en cache agressive. |
| **[Infomaniak](https://www.infomaniak.com/fr/hebergement)** | Serveurs en Suisse alimentés par **100% d'énergie renouvelable**. |

### **📌 Pourquoi pas un serveur classique ?**
❌ Héberger sur un VPS ou un serveur dédié **consommerait inutilement de l’énergie**, car le site est **entièrement statique** et n’a **pas besoin de traitements backend**.

---

## ❓ Pourquoi il n’y a pas de `.htaccess` dans ce projet ?

📌 **Le fichier `.htaccess` est généralement utilisé pour :**  
- Gérer les **redirections et les règles de réécriture d’URL**.
- Appliquer des règles de **cache et de compression**.
- Protéger l’accès à certains fichiers ou répertoires.

📌 **Pourquoi je ne l’ai pas inclus ?**  
1. Ce projet est **100% statique** (HTML, CSS, JS) → **Pas besoin de règles Apache**.  
2. Il est prévu pour être **hébergé sur un CDN ou un service comme GitHub Pages / Netlify**, qui **ne supportent pas `.htaccess`**.  
3. Pour la mise en cache et l’optimisation, **Netlify et Vercel ont des configurations propres sans `.htaccess`**.  

📌 **Si je devais utiliser `.htaccess`**, ce serait uniquement pour :  
- Forcer la compression Gzip/Brotli.  
- Définir des en-têtes `Cache-Control`.  
- Faire des redirections propres.  

Comme ce projet est pensé **pour être hébergé sans serveur Apache/Nginx**, **je n’ai pas inclus `.htaccess`**.

---

## 🏗️ Installation et Déploiement

### **1️⃣ Télécharger le projet**
```sh
git clone https://github.com/mon-projet/greensite.git
cd greensite
```

### **2️⃣ Lancer en local (Pas besoin de serveur !)**

- Ouvrir simplement public/views/index.html dans un navigateur.

### **3️⃣ Déploiement sur GitHub Pages**

```sh
git add .
git commit -m "Déploiement GreenSite"
git push origin main
```

Puis activer GitHub Pages dans les paramètres du dépôt.

---

## 📜 Licence

Projet sous licence **MIT** – Utilisation libre et respect des principes Green IT encouragé ! 🌍

---

## 👨‍💻 Auteur

**Projet réalisé par [Clément Kerviche](https://www.linkedin.com/in/clément-kerviche-6b7a44262/)** dans une démarche Green IT et d’optimisation web.