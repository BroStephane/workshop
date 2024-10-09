const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const MaladiesModel = sequelize.define('Maladies', {
    id_maladies: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    type_maladie: {
        type: DataTypes.STRING(50),
    },
    gravite: {
        type: DataTypes.STRING(50),
    },
    symptomes: {
        type: DataTypes.TEXT,
    },
    facteurs_risque: {
        type: DataTypes.TEXT,
    },
    traitement_recommande: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
});

module.exports = MaladiesModel;