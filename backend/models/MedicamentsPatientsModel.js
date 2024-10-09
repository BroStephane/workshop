const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PatientsModel = require('./PatientsModel');
const MedicamentsModel = require('./MedicamentsModel');

const MedicamentsPatientsModel = sequelize.define('Medicaments_Patients', {
    id_patients: {
        type: DataTypes.INTEGER,
        references: {
            model: PatientsModel,
            key: 'id_patients',
        },
        primaryKey: true,
    },
    id_medicaments: {
        type: DataTypes.INTEGER,
        references: {
            model: MedicamentsModel,
            key: 'id_medicaments',
        },
        primaryKey: true,
    },
}, {
    timestamps: false,
});

module.exports = MedicamentsPatientsModel;