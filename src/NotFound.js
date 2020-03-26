import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './utility';
import Navigation from './navigation';


const PrivateRoute = ({...rest}) => {
    return (
        <>
        <Route exact path="/">
            isLogin() ? 
            <Redirect to="/Dashbord" /> 
            : <Redirect to="/Login" />
        </Route>
        <Route {...rest} render={props => (
            isLogin() ?
            <><Navigation/><h1>Page Not Found 404</h1></>
            : <Redirect to="/Login" />
            )} />
            </>
    );
};

export default PrivateRoute;