const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const MedecinsModel = sequelize.define('Medecins', {
    id_medecins: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    mot_de_passe: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    specialite: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    adresse: {
        type: DataTypes.STRING(255),
    },
    date_inscription: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = MedecinsModel;