import React, { FormEvent, useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './style.css';

function Login() {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('access_token');

        console.log(token);

        if (token) {
            api.defaults.headers.common['Authorization'] = token;
            history.push('/study');
        }
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signed, user, signIn, handleToggleRemember } = useAuth();

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        
        const response = await signIn( email, password);
        console.log(response);

        
        // if(signed) history.push('/give-classes');
        // if(signed)  window.location.href = '/give-classes'
      }
 
    return (
        <div id="page-login">
            <div id="page-login-content">

                <div id="page-login-header" >
                    <PageHeader 
                        title="Sua forma de estudos online."
                        logo={true} 
                        >
                    </PageHeader>
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
                                    <Link to='/register' className="login-button">
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
                                    <Link to='/register' className="login-button">
                                       <label>Forgot my password</label>
                                    </Link>
                                </footer>
                                <button type="submit">Login</button>
                                <Link to="/forgot-password" className="teste-button">
                                    Forgot
                                </Link>
                                <Link to="/signin" className="teste-button">
                                    signin
                                </Link>
                                <Link to="/signup" className="teste-button">
                                    signup
                                </Link>
                            </form>
                        </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Login;