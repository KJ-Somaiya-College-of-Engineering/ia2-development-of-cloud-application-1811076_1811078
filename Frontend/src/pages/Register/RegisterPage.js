import React from 'react'
import Footer from '../../components/Footer/Footer';
import InfoCard from '../../components/Register/InfoCard';
import RegistrationForm from '../../components/Register/RegistrationForm';
import './Register.css'

export default function RegisterPage(props) {
    return (
        <div className="register-wrapper">
            <div className="registration-container" id="container">
                <InfoCard/>
                <RegistrationForm setToken={props.setToken}/>
            </div>
            <Footer/>
        </div>
    )
}