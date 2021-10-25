import React from 'react'
import Footer from '../../components/Footer/Footer';
import InfoCard from '../../components/Register/InfoCard';
import RegistrationForm from '../../components/Register/RegistrationForm';
import './Register.css'

export default function RegisterPage() {
    return (
        <div className="register-wrapper">
            <div class="registration-container" id="container">
                <RegistrationForm/>
                <InfoCard/>
            </div>
            <Footer/>
        </div>
    )
}