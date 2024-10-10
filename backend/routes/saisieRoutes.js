const express = require('express');
const router = express.Router();
const { saisieManuelle } = require('../controllers/saisieController');

// Route pour la saisie manuelle des données
router.post('/saisie', saisieManuelle);

module.exports = router;