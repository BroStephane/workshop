'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medecins', {
      id_medecins: {
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
      specialite: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      adresse: {
        type: Sequelize.STRING(255),
      },
      date_inscription: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Medecins');
  },
};