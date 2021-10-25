import React from 'react'

const registerUser = async(userInfo) => {

}

export default function RegistrationForm() {
    return (
        <div class="form-container-register sign-up-container overlay-panel overlay-right">
        <form action="#" className="registrationForm">
            <h1 className="registerTitle">Create Account</h1>
            <input className="auth-input" type="text" placeholder="Name" />
            <input className="auth-input" type="email" placeholder="Email" />
            <input className="auth-input" type="password" placeholder="Password" />
            <button className="registerButton">Register</button>
        </form>
    </div>
    )
}