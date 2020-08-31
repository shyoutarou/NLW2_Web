import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';
import studyicon from '../../assets/images/icons/study.svg';
import giveClassesicon from '../../assets/images/icons/give-classes.svg';
import purplehearticon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';
import './styles.css';
import LandingHeader from '../../components/LandingHeader';

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total);
        });
      }, []);

    return (

        <div id="page-landing">
            <LandingHeader />
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img 
                    src={landingimg} 
                    alt="Platarforma de estudos" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyicon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesicon} alt="Dar aulas"/>
                        Dar aula
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purplehearticon} alt="Coração"/>
                </span>

            </div>
        </div> 
    );
  }

  export default Landing;