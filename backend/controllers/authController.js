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

// Fonction de connexion
const connexion = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { mail, mot_de_passe } = req.body;

        // Vérifier si l'utilisateur existe
        const patient = await PatientsModel.findOne({ where: { mail } });
        if (!patient) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Vérifier le mot de passe
        const motDePasseValide = await bcrypt.compare(mot_de_passe, patient.mot_de_passe);
        if (!motDePasseValide) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Créer un token JWT
        const token = jwt.sign(
            { id_patients: patient.id_patients, mail: patient.mail },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Répondre avec les informations de l'utilisateur et le token
        res.status(200).json({
            message: 'Connexion réussie',
            patient: {
                id: patient.id_patients,
                nom: patient.nom,
                prenom: patient.prenom,
                mail: patient.mail,
            },
            token,
        });
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
};

module.exports = { inscription, connexion };