// Fichier: models/MedicamentsPatientsModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const MedicamentsPatientsModel = sequelize.define('Medicaments_Patients', {
    id_patients: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Patients',
            key: 'id_patients',
        },
        primaryKey: true, // Définir comme clé primaire
    },
    id_medicaments: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Medicaments',
            key: 'id_medicaments',
        },
        primaryKey: true, // Définir comme clé primaire
    },
    horaire: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: false,
});

module.exports = MedicamentsPatientsModel;
