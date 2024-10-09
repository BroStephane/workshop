const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PatientsModel = require('./PatientsModel');
const MaladiesModel = require('./MaladiesModel');

const MaladiesPatientsModel = sequelize.define('Maladies_Patients', {
    id_patients: {
        type: DataTypes.INTEGER,
        references: {
            model: PatientsModel,
            key: 'id_patients',
        },
        primaryKey: true,
    },
    id_maladies: {
        type: DataTypes.INTEGER,
        references: {
            model: MaladiesModel,
            key: 'id_maladies',
        },
        primaryKey: true,
    },
}, {
    timestamps: false,
});

module.exports = MaladiesPatientsModel;