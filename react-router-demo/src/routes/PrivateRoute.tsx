import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    const  isAuth  = !!sessionStorage.getItem("token") ;

    return  isAuth ? (<Route  path={props.path}  
                        exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/"  />);
};
export  default  PrivateRoute;

