'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Historiques', {
      id_historiques: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date_programme: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      etat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      titre: {
        type: Sequelize.STRING(50),
      },
      id_medicaments: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicaments',
          key: 'id_medicaments',
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
    await queryInterface.dropTable('Historiques');
  },
};
