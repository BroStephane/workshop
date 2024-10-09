'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Medicaments_Patients', [
      {
        id_patients: 1,
        id_medicaments: 1,
      },
      {
        id_patients: 1,
        id_medicaments: 3,
      },
      {
        id_patients: 2,
        id_medicaments: 2,
      },
      {
        id_patients: 2,
        id_medicaments: 5,
      },
      {
        id_patients: 3,
        id_medicaments: 4,
      },
      {
        id_patients: 4,
        id_medicaments: 1,
      },
      {
        id_patients: 4,
        id_medicaments: 6,
      },
      {
        id_patients: 5,
        id_medicaments: 7,
      },
      {
        id_patients: 6,
        id_medicaments: 8,
      },
      {
        id_patients: 7,
        id_medicaments: 9,
      },
      {
        id_patients: 8,
        id_medicaments: 3,
      },
      {
        id_patients: 8,
        id_medicaments: 5,
      },
      {
        id_patients: 9,
        id_medicaments: 2,
      },
      {
        id_patients: 10,
        id_medicaments: 4,
      },
      {
        id_patients: 10,
        id_medicaments: 7,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Medicaments_Patients', null, {});
  },
};