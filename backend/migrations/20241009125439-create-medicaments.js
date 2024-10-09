module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medicaments', {
      id_medicaments: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom_commercial: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nom_scientifique: {
        type: Sequelize.STRING(50),
      },
      dosage: {
        type: Sequelize.STRING(50),
      },
      forme: {
        type: Sequelize.STRING(50),
      },
      voie_administration: {
        type: Sequelize.STRING(50),
      },
      laboratoire: {
        type: Sequelize.STRING(100),
      },
      code_cis: {
        type: Sequelize.STRING(50),
      },
      description: {
        type: Sequelize.TEXT,
      },
      effets_secondaires: {
        type: Sequelize.TEXT,
      },
      traitement: {
        type: Sequelize.TEXT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Medicaments');
  },
};