import React from 'react';
import './accueil.css';
import logo from '../assets/images/MyHealthSync.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquarePlus, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'; // Si toutes sont solid


const Accueil = () => {
    return (
        <div className="accueil-container">
            <header className="logo-container">
                <a href="/accueil"><img src={logo} alt="MyHealthSync Logo" className="logo" /></a>
            </header>

            <body>
                <div className="accueil-header">
                    <h1>Bonjour Samuel !</h1>
                </div>
                <div className="graphique-container">
                    <div className='rectangleGraphique'>
                        <h1 className='titreGraphique'>Le graphique arrive...</h1>
                    </div>
                </div>
                <div className="medications-container">
                    <h2 className="titleCheckList">A prendre :</h2>
                    <div className="rectangle1">
                        <input type="checkbox" className="checkBox1" id="checkBox1" />
                        <label htmlFor="checkBox1" className="checkBoxLabel">
                            Ibuprofène 
                            <span className="checkmarkIcon"><i class="fa-regular fa-xmark"></i></span>
                        </label>
                        <p className="time1">10:00</p>
                    </div>
                    <div className="rectangle2">
                        <input type="checkbox" className="checkBox2" id="checkBox2" />
                        <label htmlFor="checkBox1" className="checkBoxLabel">
                            Doliprane
                            <span className="checkmarkIcon"><i class="fa-regular fa-xmark"></i></span>
                        </label>
                        <p className="time2">12:00</p>
                    </div>
                    <div className="rectangle3">
                        <input type="checkbox" className="checkBox3" id="checkBox3" />
                        <label htmlFor="checkBox1" className="checkBoxLabel">
                        Spasfon
                            <span className="checkmarkIcon"><i class="fa-regular fa-xmark"></i></span>
                        </label>
                        <p className="time3">14:00</p>
                    </div>
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

export default Accueil;
