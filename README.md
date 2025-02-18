# 📌 API de gestion des livres avec Fastify & MongoDB

## 🚀 Modifications effectuées

### 🔹 1. Architecture améliorée
- Séparation des fichiers en **config/**, **models/**, **routes/** et **controllers/**
- Création d'un fichier **mongo.js** pour gérer la connexion MongoDB

### 🔹 2. Authentification sécurisée
- Ajout du module **fastify-jwt** pour gérer l'authentification
- Stockage des utilisateurs dans MongoDB au lieu de la mémoire

### 🔹 3. Gestion des livres (CRUD)
- Création du modèle **Book**
- Ajout des routes pour **ajouter, récupérer, modifier et supprimer** un livre

### 🔹 4. Sécurisation
- Utilisation de **HTTPS** et **JWT** pour protéger les endpoints
- Gestion des erreurs améliorée

### 📜 Installation & Exécution
```bash
npm install  # Installer les dépendances
node src/server.js  # Lancer le serveur
```

API fonctionnelle sur **http://localhost:3000** ✅
