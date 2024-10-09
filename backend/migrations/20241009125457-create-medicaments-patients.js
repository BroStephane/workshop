'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medicaments_Patients', {
      id_patients: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id_patients',
        },
        primaryKey: true,
      },
      id_medicaments: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicaments',
          key: 'id_medicaments',
        },
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Medicaments_Patients');
  },
};