'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id_patients: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      prenom: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      mail: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      mot_de_passe: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      date_naissance: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sexe: {
        type: Sequelize.STRING(1),
      },
      adresse: {
        type: Sequelize.STRING(200),
      },
      telephone: {
        type: Sequelize.STRING(50),
      },
      groupe_sanguin: {
        type: Sequelize.STRING(50),
      },
      date_inscription: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_medecins: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medecins',
          key: 'id_medecins',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  },
};