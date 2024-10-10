import React from 'react';
import './connexion.css';
import logo from '../assets/images/MyHealthSync.png';

const Connexion = () => {
    return (
        <div className="connexion-container">
            <div className="logo-container">
                <img src={logo} alt="MyHealthSync Logo" className="logo" />
            </div>
            <h1>Bonjour !</h1>
            <div className="rectangle">
                <form className="connexion-formulaire">
                    <input className="email" placeholder="Mail" required />
                    <input className="motDePasse" placeholder="Mot de passe" required />
                    <button type="submit" className="connexionBouton">Valider</button>
                </form>
            </div>
            <a href="/inscription"><button className="inscriptionBouton">S'inscrire</button></a> 
        </div>
    );
}

export default Connexion;
