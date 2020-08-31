import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import PrivateRoute from '../routes/PrivateRoute';
import Profile from '../pages/Profile';

function AppRoutes() {
    return (
      <BrowserRouter >
        <Navbar  />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>  
            <PrivateRoute exact path="/profile/:name" component={Profile}  />          
          </Switch>   
        </div>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;