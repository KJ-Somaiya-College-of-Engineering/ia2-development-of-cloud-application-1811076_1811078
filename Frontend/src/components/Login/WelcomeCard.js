import React from 'react'
import {Link} from 'react-router-dom';

export default function WelcomeCard() {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p className="signInMessage">Sign In to continue using</p>
                    <span className="notesOnCloudSignIn">Notes On Cloud</span>
                    <div className="loginFooter">
                        <p className="signInMessage">Don't have an account?</p>
                        <Link to="/register" className="authFooterLink">
                            <span >Register</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
