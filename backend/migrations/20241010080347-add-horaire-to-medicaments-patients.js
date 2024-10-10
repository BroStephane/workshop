'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Medicaments_Patients', 'horaire', {
      type: Sequelize.DATE,
      allowNull: true, // Permettre NULL temporairement
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Medicaments_Patients', 'horaire');
  },
};