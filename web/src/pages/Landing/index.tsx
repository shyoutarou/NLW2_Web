import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';
import studyicon from '../../assets/images/icons/study.svg';
import giveClassesicon from '../../assets/images/icons/give-classes.svg';
import purplehearticon from '../../assets/images/icons/purple-heart.svg';
import { useAuth } from '../../contexts/auth';

import api from '../../services/api';
import './styles.css';

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);
    const [userName, setUserName] = useState<string| undefined>('')
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total);
        });
        
        setUserName(user?.name);

        // api.get('login', {params: {email: user?.email, password: user?.password}}).then(response => {
        //     const { data } = response.data;

        //     setUserName(data.name);
        // })
      }, []);

    return (
        
        <div id="page-landing">
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
                <span className="logged-as">
                    Logged as {userName||'Guest'} 
                    <img src={purplehearticon} alt="Purple Heart"/>
                    <button onClick={handleSignOut}>sign out</button>
                </span>
            </div>
        </div> 
    );
  }

  export default Landing;