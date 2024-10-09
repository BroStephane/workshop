'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Saisies', [
      {
        valeur: 75.5,
        id_unites: 1, // Poids en kg
        id_patients: 1,
      },
      {
        valeur: 1.72,
        id_unites: 2, // Taille en m
        id_patients: 1,
      },
      {
        valeur: 120,
        id_unites: 3, // Tension systolique en mmHg
        id_patients: 2,
      },
      {
        valeur: 80,
        id_unites: 4, // Tension diastolique en mmHg
        id_patients: 2,
      },
      {
        valeur: 95,
        id_unites: 5, // Saturation en O2 en %
        id_patients: 3,
      },
      {
        valeur: 5.4,
        id_unites: 6, // Glycémie en mmol/L
        id_patients: 4,
      },
      {
        valeur: 37.1,
        id_unites: 7, // Température corporelle en °C
        id_patients: 5,
      },
      {
        valeur: 72,
        id_unites: 8, // Fréquence cardiaque en bpm
        id_patients: 6,
      },
      {
        valeur: 65,
        id_unites: 1, // Poids en kg
        id_patients: 7,
      },
      {
        valeur: 1.65,
        id_unites: 2, // Taille en m
        id_patients: 7,
      },
      {
        valeur: 110,
        id_unites: 3, // Tension systolique en mmHg
        id_patients: 8,
      },
      {
        valeur: 70,
        id_unites: 4, // Tension diastolique en mmHg
        id_patients: 8,
      },
      {
        valeur: 98,
        id_unites: 5, // Saturation en O2 en %
        id_patients: 9,
      },
      {
        valeur: 6.0,
        id_unites: 6, // Glycémie en mmol/L
        id_patients: 10,
      },
      {
        valeur: 36.8,
        id_unites: 7, // Température corporelle en °C
        id_patients: 10,
      },
      {
        valeur: 68,
        id_unites: 8, // Fréquence cardiaque en bpm
        id_patients: 10,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Saisies', null, {});
  },
};