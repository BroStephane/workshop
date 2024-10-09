const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PatientsModel = require('./PatientsModel');
const UnitesModel = require('./UnitesModel');

const SaisiesModel = sequelize.define('Saisies', {
    id_saisies: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    valeur: {
        type: DataTypes.DECIMAL(15, 3),
        allowNull: false,
    },
    id_unites: {
        type: DataTypes.INTEGER,
        references: {
            model: UnitesModel,
            key: 'id_unites',
        },
        allowNull: false,
    },
    id_patients: {
        type: DataTypes.INTEGER,
        references: {
            model: PatientsModel,
            key: 'id_patients',
        },
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = SaisiesModel;