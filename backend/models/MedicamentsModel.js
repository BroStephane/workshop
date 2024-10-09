const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const MedicamentsModel = sequelize.define('Medicaments', {
    id_medicaments: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom_commercial: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nom_scientifique: {
        type: DataTypes.STRING(50),
    },
    dosage: {
        type: DataTypes.STRING(50),
    },
    forme: {
        type: DataTypes.STRING(50),
    },
    voie_administration: {
        type: DataTypes.STRING(50),
    },
    laboratoire: {
        type: DataTypes.STRING(100),
    },
    code_cis: {
        type: DataTypes.STRING(50),
    },
    description: {
        type: DataTypes.TEXT,
    },
    effets_secondaires: {
        type: DataTypes.TEXT,
    },
    traitement: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
});

module.exports = MedicamentsModel;