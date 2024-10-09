'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Historiques', [
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() - 7)), // il y a une semaine
        etat: true,
        titre: 'Prise de Doliprane 500mg',
        id_medicaments: 1,
        id_patients: 1,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() - 3)), // il y a trois jours
        etat: false,
        titre: 'Prise d\'Ibuprofène 400mg',
        id_medicaments: 2,
        id_patients: 2,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() - 1)), // hier
        etat: true,
        titre: 'Prise d\'Amoxicilline 1g',
        id_medicaments: 3,
        id_patients: 3,
      },
      {
        date_programme: new Date(), // aujourd'hui
        etat: false,
        titre: 'Prise de Ventoline 100µg',
        id_medicaments: 4,
        id_patients: 4,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 1)), // demain
        etat: false,
        titre: 'Prise de Levothyrox 100µg',
        id_medicaments: 5,
        id_patients: 5,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 3)), // dans trois jours
        etat: false,
        titre: 'Prise de Metformine 850mg',
        id_medicaments: 6,
        id_patients: 6,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 5)), // dans cinq jours
        etat: false,
        titre: 'Prise de Tahor 20mg',
        id_medicaments: 7,
        id_patients: 7,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 7)), // dans une semaine
        etat: false,
        titre: 'Prise de Xarelto 10mg',
        id_medicaments: 8,
        id_patients: 8,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 10)), // dans dix jours
        etat: false,
        titre: 'Prise de Plavix 75mg',
        id_medicaments: 9,
        id_patients: 9,
      },
      {
        date_programme: new Date(new Date().setDate(new Date().getDate() + 14)), // dans quatorze jours
        etat: false,
        titre: 'Prise d\'Ibuprofène 400mg',
        id_medicaments: 2,
        id_patients: 10,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Historiques', null, {});
  },
};