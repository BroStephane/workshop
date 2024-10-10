const SaisiesModel = require('../models/SaisiesModel');

// Fonction pour la saisie manuelle des données
const saisieManuelle = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { valeur, id_unites, id_patients } = req.body;

        // Créer une nouvelle saisie
        const nouvelleSaisie = await SaisiesModel.create({
            valeur,
            id_unites,
            id_patients,
            recorded_at: new Date(),
        });

        // Répondre avec les informations de la saisie créée
        res.status(201).json({
            message: 'Saisie enregistrée avec succès',
            saisie: nouvelleSaisie,
        });
    } catch (error) {
        console.error('Erreur lors de la saisie des données :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la saisie des données.' });
    }
};

module.exports = { saisieManuelle };