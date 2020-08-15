import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LoginError from '../pages/LoginError';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Notify from '../pages/Notify';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        {/* <Route path="/success" component={Notify} /> */}
        <Route path="/loginerror" component={LoginError}/>
        <Route path="/signup" component={SignUp}/>
    </BrowserRouter>
);

export default AuthRoutes;