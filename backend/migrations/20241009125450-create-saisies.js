'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Saisies', {
      id_saisies: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      valeur: {
        type: Sequelize.DECIMAL(15, 3),
        allowNull: false,
      },
      id_unites: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Unites',
          key: 'id_unites',
        },
        allowNull: false,
      },
      id_patients: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id_patients',
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Saisies');
  },
};