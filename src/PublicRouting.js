import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './utility';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                restricted ? <Redirect to="/Dashbord" /> : <><Component {...props} /></>
                : restricted ? <Component {...props} /> : <Redirect to="/Login" />
        )} />
    );
};

export default PublicRoute;