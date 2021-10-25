import React from 'react';
import Footer from '../../components/Footer/Footer';
import SignInForm from '../../components/Login/SignInForm';
import WelcomeCard from '../../components/Login/WelcomeCard';
import './Login.css';

export default function LoginPage() {
    return(
        <div className="login-wrapper">
            <div className="container" id="container">
                <SignInForm/>
                <WelcomeCard/>
            </div>
            <Footer/>
        </div>
    )
}