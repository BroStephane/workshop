const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const PatientsModel = require('./PatientsModel');
const MedicamentsModel = require('./MedicamentsModel');

const HistoriqueModel = sequelize.define('Historiques', {
    id_historiques: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date_programme: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    etat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    titre: {
        type: DataTypes.STRING(50),
    },
    id_medicaments: {
        type: DataTypes.INTEGER,
        references: {
            model: MedicamentsModel,
            key: 'id_medicaments',
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

module.exports = HistoriqueModel;
