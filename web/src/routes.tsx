import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { useAuth } from './contexts/auth';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes()
{
    const { signed } = useAuth();

    if (signed) {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Landing}/>
                <Route path="/study" component={TeacherList}/>  
                <Route path="/give-classes" component={TeacherForm}/>
            </BrowserRouter>
        )
    } else{
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login}/>
                {/* <Route path="/study" component={LoginError}/> */}
                <Route path="/signup" component={SignUp}/>
                {/* <Route path="/give-classes" component={LoginError}/> */}
            </BrowserRouter>
        );
    }
}

export default Routes;