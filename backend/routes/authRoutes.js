const express = require('express');
const router = express.Router();
const { inscription } = require('../controllers/authController');

// Route pour l'inscription
router.post('/inscription', inscription);

module.exports = router;