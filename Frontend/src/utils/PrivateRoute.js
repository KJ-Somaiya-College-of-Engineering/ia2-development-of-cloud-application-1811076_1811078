import React from 'react'
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...rest }) => 
{
    console.log("sdsdsdstoken");
    console.log(token);
    console.log(token!==null);
    console.log(token ? "1":"2");
    return ( 
    <Route {...rest} render={props => 
    (
        token ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>
    )}/>
);}

export default PrivateRoute;