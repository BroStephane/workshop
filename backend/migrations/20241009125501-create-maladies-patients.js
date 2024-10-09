module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Maladies_Patients', {
      id_patients: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id_patients',
        },
        primaryKey: true,
      },
      id_maladies: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Maladies',
          key: 'id_maladies',
        },
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Maladies_Patients');
  },
};