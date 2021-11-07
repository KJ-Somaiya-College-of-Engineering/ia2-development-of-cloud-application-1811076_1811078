import React from 'react'
import {Link} from 'react-router-dom';

export default function InfoCard() {
    return (
        <div className="overlay-container-registration">
            <div className="overlay-registration">
                <div className="overlay-panel-registration overlay-left-registration">
                    <h1>Hello, friend!</h1>
                    <p className="registerMessage">Create new account with</p>
                    <p> your email to start using</p>
                    <p className="notesOnCloudRegister">Notes On Cloud</p>
                    <div className="registerFooter">
                        <p className="signInMessage">Already have an account?</p>
                        <Link to="/login">
                            <span className="authFooterLink">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}