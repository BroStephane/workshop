const express = require('express');
const router = express.Router();
const { ajouterHistoriqueMedicament } = require('../controllers/medicamentsController');

// Route pour ajouter un historique de prise de médicament
router.post('/historique', ajouterHistoriqueMedicament);

module.exports = router;