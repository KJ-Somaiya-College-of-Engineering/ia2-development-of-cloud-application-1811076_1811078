import React from 'react'

export default function SignInForm() {
    return (
        <div className="form-container sign-in-container">
            <form className="signInForm" action="#">
                <h1 className="signinTitle">Sign In</h1>
                <input className="auth-input" type="email" placeholder="Email" />
                <input className="auth-input" type="password" placeholder="Password" />
                <button className="signinButton">Sign In</button>
            </form>
        </div>
    )
}
