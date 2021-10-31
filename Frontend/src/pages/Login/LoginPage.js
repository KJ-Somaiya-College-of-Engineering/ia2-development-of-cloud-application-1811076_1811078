import React from 'react';
import Footer from '../../components/Footer/Footer';
import SignInForm from '../../components/Login/SignInForm';
import WelcomeCard from '../../components/Login/WelcomeCard';
import './Login.css';

export default function LoginPage(props) {
    return(
        <div className="login-wrapper">
            <div className="container" id="container">
                <SignInForm setToken={props.setToken}/>
                <WelcomeCard/>
            </div>
            <Footer/>
        </div>
    )
}