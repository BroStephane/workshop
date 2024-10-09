'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Maladies', {
      id_maladies: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      type_maladie: {
        type: Sequelize.STRING(50),
      },
      gravite: {
        type: Sequelize.STRING(50),
      },
      symptomes: {
        type: Sequelize.TEXT,
      },
      facteurs_risque: {
        type: Sequelize.TEXT,
      },
      traitement_recommande: {
        type: Sequelize.TEXT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Maladies');
  },
};