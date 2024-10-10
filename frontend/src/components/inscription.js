import React from 'react';
import './inscription.css';
import logo from '../assets/images/MyHealthSync.png';

const Inscription = () => {
    return (
        <div className="inscription-container">
            <div className="logo-container">
                <img src={logo} alt="MyHealthSync Logo" className="logo" />
            </div>
            <h1>Créer un compte</h1>
            <div className="rectangle">
                <form className="inscription-formulaire">
                    <input className="email" placeholder="Mail" required />
                    <input className="motDePasse" placeholder="Mot de passe" required />
                    <input className="motDePasse" placeholder="Confirmer le mot de passe" required />
                    <button type="submit" className="inscriptionBouton">S'inscrire</button>
                </form>
            </div>
            <a href="/connexion"><button className="connexionBouton">Déjà inscrit ? Se connecter</button></a> {/* Lien vers la page de connexion */}
        </div>
    );
}

export default Inscription;
