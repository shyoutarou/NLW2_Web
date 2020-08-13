import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/SignUp';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Autorizados: React.FC = () => (
    <BrowserRouter  >
        <Route path="/" exact component={Landing}/>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/study" component={TeacherList}/>  
        <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
);

export default Autorizados;