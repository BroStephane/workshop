const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configurer la connexion à la base de données MySQL sur OVH
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie');
    })
    .catch((err) => {
        console.error('Erreur de connexion à la base de données :', err);
    });

module.exports = sequelize;
