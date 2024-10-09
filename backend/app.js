const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Assurer que PORT est défini depuis l'environnement ou avoir une valeur par défaut
const PORT = process.env.PORT || 5000;


// Middleware de base pour parser le JSON
app.use(express.json());

// Connexion à la base de données MySQL hébergée chez OVH
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie');
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
    });

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});