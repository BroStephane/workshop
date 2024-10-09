const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const MedecinsModel = require('./MedecinsModel');

const PatientsModel = sequelize.define('Patients', {
    id_patients: {
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
    date_naissance: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    sexe: {
        type: DataTypes.STRING(1),
    },
    adresse: {
        type: DataTypes.STRING(200),
    },
    telephone: {
        type: DataTypes.STRING(50),
    },
    groupe_sanguin: {
        type: DataTypes.STRING(50),
    },
    date_inscription: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_medecins: {
        type: DataTypes.INTEGER,
        references: {
            model: MedecinsModel,
            key: 'id_medecins',
        },
    },
}, {
    timestamps: false,
});

module.exports = PatientsModel;