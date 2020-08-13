import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LoginError from '../pages/LoginError';
import SignUp from '../pages/SignUp';

const NaoAutorizados: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/study" component={LoginError}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/give-classes" component={LoginError}/>
    </BrowserRouter>
);

export default NaoAutorizados;