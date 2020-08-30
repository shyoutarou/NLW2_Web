import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';
import ForgotPassword from '../pages/ForgotPassword';
import ForgotPasswordSuccess from '../pages/ForgotPasswordSucces';
import ResetPassword from '../pages/ResetPassword';

const AuthRoutes: React.FC = () => (
    <BrowserRouter>
      <Switch>    
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" component={SignUp}/>
        <Route path='/signup-success' exact component={SignUpSuccess}  />
        <Route path="/reset-password/:id/:token" component={ResetPassword} />
        <Route path="/reset-password-success" exact component={ForgotPasswordSuccess} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path='/forgot-password-success' exact component={ForgotPasswordSuccess} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
);

export default AuthRoutes;