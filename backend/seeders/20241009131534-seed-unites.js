'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Unites', [
      {
        mesure: 'Poids',
        type: 'kg',
      },
      {
        mesure: 'Taille',
        type: 'cm',
      },
      {
        mesure: 'Glycémie',
        type: 'mg/dL',
      },
      {
        mesure: 'Pression artérielle systolique',
        type: 'mmHg',
      },
      {
        mesure: 'Pression artérielle diastolique',
        type: 'mmHg',
      },
      {
        mesure: 'Cholestérol total',
        type: 'mg/dL',
      },
      {
        mesure: 'HDL Cholestérol',
        type: 'mg/dL',
      },
      {
        mesure: 'LDL Cholestérol',
        type: 'mg/dL',
      },
      {
        mesure: 'Triglycérides',
        type: 'mg/dL',
      },
      {
        mesure: 'Fréquence cardiaque',
        type: 'bpm',
      },
      {
        mesure: 'Température corporelle',
        type: '°C',
      },
      {
        mesure: 'Saturation en oxygène',
        type: '%',
      },
      {
        mesure: 'IMC',
        type: 'kg/m²',
      },
      {
        mesure: 'Tour de taille',
        type: 'cm',
      },
      {
        mesure: 'Tour de hanches',
        type: 'cm',
      },
      {
        mesure: 'Volume expiratoire maximal (VEMS)',
        type: 'L',
      },
      {
        mesure: 'Débit expiratoire de pointe (DEP)',
        type: 'L/min',
      },
      {
        mesure: 'Créatinine',
        type: 'mg/dL',
      },
      {
        mesure: 'Hémoglobine glyquée (HbA1c)',
        type: '%',
      },
      {
        mesure: 'Acide urique',
        type: 'mg/dL',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Unites', null, {});
  },
};