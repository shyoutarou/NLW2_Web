import React, { FormEvent, useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';

import './style.css';
import PageAside from '../../components/PageAside';


interface ServerResponse {
    success: boolean;
    access_token: string;
  }

function Login() {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
        api.defaults.headers.common['Authorization'] = token;
        history.push('/study');
        }
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signed, signIn, handleToggleRemember } = useAuth();

    function handleLogin(e: FormEvent) {
        e.preventDefault();

        api.post<ServerResponse>('login', {
          email,
          password
            }).then(response => {
                const { data } = response;
                const { access_token } = data;

                // api.defaults.headers.common['Authorization'] = access_token;

                signIn( email, password, access_token);

                history.push('/give-classes');
            }).catch(() => alert('Erro no login!'));
      }
      
    return (
        <div id="page-login">
            <div id="page-login-content">

                <div id="page-login-header" >
                    <PageHeader 
                        title="Suaforma de estudos online."
                        logo={true} 
                        >
                    </PageHeader>
                </div>
                <div id="page-login-aside">
                    <PageAside 
                        title="Suaforma de estudos online."
                        voltar={true}
                        >
                    </PageAside>
                </div>


                {/* <div className="login-logo-container">
                    <div className="login-logo">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Your online study platform.</h2>
                    </div>
                </div> */}
                <div className="login-form">
                        <fieldset>
                            <form onSubmit={handleLogin}>
                                <header>
                                    <legend>Login</legend>
                                    <Link to='/signup' className="signup-button">
                                       <label>Sign Up</label>
                                    </Link>
                                </header>
                                <div className="input-container">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="example@youremail.com"
                                        value={email}
                                        label="E-mail"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        />
                                    <Input
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                        label="Senha"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        />
                                </div>
                                <footer>
                                    <div>
                                        <input onChange={handleToggleRemember} type="checkbox" name="remember"/>
                                        <label htmlFor="remember">Remember</label>
                                    </div>
                                    <Link to='/signup' className="signup-button">
                                       <label>Forgot my password</label>
                                    </Link>
                                </footer>
                                <button type="submit">Login</button>
                            </form>
                        </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Login;