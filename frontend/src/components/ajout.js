import React from 'react';
import './ajout.css';
import logo from '../assets/images/MyHealthSync.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquarePlus, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'; // Si toutes sont solid


const Ajout = () => {
    return (
        <div className="accueil-container">
            <header className="logo-container">
                <a href="/accueil"><img src={logo} alt="MyHealthSync Logo" className="logo" /></a>
            </header>

            <body>
                <div className='medicament-container'>
                    <h1>Ajouter un médicament</h1>
                    <div className='rectangleMedicament'>
                        <label htmlFor="medicamentNom">Nom</label>
                        <select id="medicamentNom" className="medicament-select">
                            <option value="">Sélectionner un médicament</option>
                            <option value="medicament1">Doliprane</option>
                            <option value="medicament2">Ibuprofène</option>
                            <option value="medicament3">Spasfon</option>
                        </select>
                        <label htmlFor="medicamentDate">Date</label>
                        <input type="date" id="medicamentDate" />
                        <button className='medicamentValider'>Valider</button>
                    </div>
                </div>
                
                <div className='rectangleDonnees'>
                    <label htmlFor="typeDonnees">Type de données</label>
                    <select id="typeDonnees" className="donnees-select">
                        <option value="">Sélectionner le type de données</option>
                        <option value="donneesType1">Type 1</option>
                        <option value="donneesType2">Type 2</option>
                        <option value="donneesType3">Type 3</option>
                    </select>
                    <button>Valider</button>
                </div>
            </body>
            
            <footer className="accueil-footer">
                <div className="rectangleBasDePage">
                <nav>
                    <a href="/accueil"><FontAwesomeIcon icon={faHouse} className='footer-icon'/></a>
                    <a href="/ajout"><FontAwesomeIcon icon={faSquarePlus} className='footer-icon'/></a>
                    <a href="#"><FontAwesomeIcon icon={faPaperPlane} className='footer-icon'/></a>
                    <a href="#"><FontAwesomeIcon icon={faUser} className='footer-icon'/></a>
                </nav>

                </div>
            </footer>
        </div>
    );
};

export default Ajout;
