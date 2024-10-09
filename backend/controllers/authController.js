// Fichier: controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PatientsModel = require('../models/PatientsModel');

// Fonction d'inscription
const inscription = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { nom, prenom, mail, mot_de_passe, date_naissance, sexe, adresse, telephone, groupe_sanguin, id_medecins } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const patientExiste = await PatientsModel.findOne({ where: { mail } });
        if (patientExiste) {
            return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

        // Créer un nouvel utilisateur
        const nouveauPatient = await PatientsModel.create({
            nom,
            prenom,
            mail,
            mot_de_passe: hashedPassword,
            date_naissance,
            sexe,
            adresse,
            telephone,
            groupe_sanguin,
            date_inscription: new Date(),
            id_medecins,
        });

        // Créer un token JWT
        const token = jwt.sign(
            { id_patients: nouveauPatient.id_patients, mail: nouveauPatient.mail },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Répondre avec les informations de l'utilisateur et le token
        res.status(201).json({
            message: 'Inscription réussie',
            patient: {
                id: nouveauPatient.id_patients,
                nom: nouveauPatient.nom,
                prenom: nouveauPatient.prenom,
                mail: nouveauPatient.mail,
            },
            token,
        });
    } catch (error) {
        console.error('Erreur lors de l\'inscription : ', error);
        res.status(500).json({
            message: 'Une erreur est survenue lors de l\'inscription.'
        });
    }
};

module.exports = { inscription };