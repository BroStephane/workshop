'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Maladies_Patients', [
      {
        id_patients: 1,
        id_maladies: 1,
      },
      {
        id_patients: 1,
        id_maladies: 3,
      },
      {
        id_patients: 2,
        id_maladies: 2,
      },
      {
        id_patients: 2,
        id_maladies: 4,
      },
      {
        id_patients: 3,
        id_maladies: 5,
      },
      {
        id_patients: 4,
        id_maladies: 1,
      },
      {
        id_patients: 4,
        id_maladies: 6,
      },
      {
        id_patients: 5,
        id_maladies: 7,
      },
      {
        id_patients: 6,
        id_maladies: 8,
      },
      {
        id_patients: 7,
        id_maladies: 9,
      },
      {
        id_patients: 8,
        id_maladies: 3,
      },
      {
        id_patients: 8,
        id_maladies: 5,
      },
      {
        id_patients: 9,
        id_maladies: 2,
      },
      {
        id_patients: 10,
        id_maladies: 4,
      },
      {
        id_patients: 10,
        id_maladies: 7,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Maladies_Patients', null, {});
  },
};