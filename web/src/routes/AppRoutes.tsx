import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import LoginError from '../pages/LoginError';
import Profile from '../pages/Profile';

const AppRoutes: React.FC = () => (
    <BrowserRouter  >
      <Switch>
<        Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/loginerror" component={LoginError}/>
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
);

export default AppRoutes;