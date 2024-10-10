import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import './connexion.css';
import logo from '../assets/images/MyHealthSync.png';

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    // Identifiants en dur
    const emailValide = 'jean.dupont@example.com';
    const motDePasseValide = 'monmotdepasse123';

    const navigate = useNavigate(); // Initialiser useNavigate

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        console.log('Tentative de connexion avec :', email, motDePasse); // Debugging

        // Vérifie les identifiants en dur
        if (email === emailValide && motDePasse === motDePasseValide) {
            console.log('Connexion réussie');
            alert('Connexion réussie');
            navigate('/accueil'); // Redirige vers la page d'accueil
        } else {
            console.error('Erreur de connexion : identifiants invalides');
            alert('Connexion échouée, vérifiez vos identifiants.');
        }
    };

    return (
        <div className="connexion-container">
            <div className="logo-container">
                <img src={logo} alt="MyHealthSync Logo" className="logo" />
            </div>
            <h1>Bonjour !</h1>
            <div className="rectangle">
                <form className="connexion-formulaire" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="email"
                        placeholder="Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Met à jour l'état pour l'email
                        required
                    />
                    <input
                        type="password"
                        className="motDePasse"
                        placeholder="Mot de passe"
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)} // Met à jour l'état pour le mot de passe
                        required
                    />
                    <button type="submit" className="connexionBouton">Valider</button>
                </form>
            </div>
            <a href="/inscription"><button className="inscriptionBouton">S'inscrire</button></a> 
        </div>
    );
}

export default Connexion;
