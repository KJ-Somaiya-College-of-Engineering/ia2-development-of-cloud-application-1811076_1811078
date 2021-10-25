import React from 'react'

export default function WelcomeCard() {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p className="signInMessage">Sign In to continue using</p>
                    <span className="notesOnCloudSignIn">Notes On Cloud</span>
                </div>
            </div>
        </div>
    )
}
