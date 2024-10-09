'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Maladies', [
      {
        nom: 'Diabète de type 2',
        description: 'Trouble métabolique caractérisé par une hyperglycémie chronique.',
        type_maladie: 'Métabolique',
        gravite: 'Modérée',
        symptomes: 'Soif excessive, mictions fréquentes, fatigue.',
        facteurs_risque: 'Obésité, sédentarité, antécédents familiaux.',
        traitement_recommande: 'Régime alimentaire, exercice physique, médicaments antidiabétiques.',
      },
      {
        nom: 'Hypertension artérielle',
        description: 'Augmentation chronique de la pression sanguine dans les artères.',
        type_maladie: 'Cardiovasculaire',
        gravite: 'Sévère',
        symptomes: 'Céphalées, essoufflement, vertiges.',
        facteurs_risque: 'Alimentation riche en sel, obésité, consommation d\'alcool.',
        traitement_recommande: 'Réduction du sel, activité physique, antihypertenseurs.',
      },
      {
        nom: 'Asthme',
        description: 'Maladie inflammatoire chronique des voies respiratoires.',
        type_maladie: 'Respiratoire',
        gravite: 'Variable',
        symptomes: 'Dyspnée, sifflements, oppression thoracique.',
        facteurs_risque: 'Allergènes, pollution, tabagisme.',
        traitement_recommande: 'Bronchodilatateurs, corticoïdes inhalés.',
      },
      {
        nom: 'Insuffisance cardiaque',
        description: 'Incapacité du cœur à pomper suffisamment de sang pour répondre aux besoins de l\'organisme.',
        type_maladie: 'Cardiovasculaire',
        gravite: 'Sévère',
        symptomes: 'Fatigue, œdèmes, essoufflement.',
        facteurs_risque: 'Hypertension, diabète, infarctus du myocarde.',
        traitement_recommande: 'Diurétiques, bêtabloquants, modifications du mode de vie.',
      },
      {
        nom: 'Arthrose',
        description: 'Maladie dégénérative des articulations causant des douleurs et une raideur.',
        type_maladie: 'Rhumatologique',
        gravite: 'Modérée',
        symptomes: 'Douleur articulaire, raideur, diminution de l\'amplitude des mouvements.',
        facteurs_risque: 'Vieillissement, surpoids, traumatismes articulaires.',
        traitement_recommande: 'Antalgiques, physiothérapie, exercices articulaires.',
      },
      {
        nom: 'Bronchopneumopathie chronique obstructive (BPCO)',
        description: 'Maladie inflammatoire des poumons qui cause une obstruction chronique des voies aériennes.',
        type_maladie: 'Respiratoire',
        gravite: 'Sévère',
        symptomes: 'Toux chronique, expectorations, essoufflement.',
        facteurs_risque: 'Tabagisme, exposition à des substances irritantes.',
        traitement_recommande: 'Bronchodilatateurs, corticostéroïdes, oxygénothérapie.',
      },
      {
        nom: 'Hypercholestérolémie',
        description: 'Taux élevé de cholestérol dans le sang, augmentant le risque de maladies cardiovasculaires.',
        type_maladie: 'Métabolique',
        gravite: 'Modérée',
        symptomes: 'Aucun symptôme direct, découvert lors d\'analyses de sang.',
        facteurs_risque: 'Régime riche en graisses, obésité, antécédents familiaux.',
        traitement_recommande: 'Régime alimentaire, statines, activité physique.',
      },
      {
        nom: 'Sclérose en plaques',
        description: 'Maladie auto-immune affectant le système nerveux central.',
        type_maladie: 'Neurologique',
        gravite: 'Variable',
        symptomes: 'Fatigue, troubles de la vision, faiblesse musculaire.',
        facteurs_risque: 'Prédisposition génétique, facteurs environnementaux.',
        traitement_recommande: 'Corticostéroïdes, immunosuppresseurs, rééducation.',
      },
      {
        nom: 'Dépression',
        description: 'Trouble de l\'humeur caractérisé par une tristesse persistante et une perte d\'intérêt.',
        type_maladie: 'Psychiatrique',
        gravite: 'Modérée à sévère',
        symptomes: 'Tristesse, fatigue, troubles du sommeil.',
        facteurs_risque: 'Stress, antécédents familiaux, événements traumatisants.',
        traitement_recommande: 'Antidépresseurs, psychothérapie, soutien social.',
      },
      {
        nom: 'Maladie d\'Alzheimer',
        description: 'Maladie neurodégénérative causant une détérioration progressive de la mémoire et des fonctions cognitives.',
        type_maladie: 'Neurologique',
        gravite: 'Sévère',
        symptomes: 'Perte de mémoire, confusion, changements de comportement.',
        facteurs_risque: 'Âge avancé, antécédents familiaux.',
        traitement_recommande: 'Médicaments pour ralentir la progression, thérapies cognitives.',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Maladies', null, {});
  },
};