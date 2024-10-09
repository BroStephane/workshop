const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const UnitesModel = sequelize.define('Unites', {
    id_unites: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    mesure: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = UnitesModel;