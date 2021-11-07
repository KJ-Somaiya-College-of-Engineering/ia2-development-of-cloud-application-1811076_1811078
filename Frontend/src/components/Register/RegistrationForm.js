import React, {useState} from 'react'
import axios from 'axios';
import {API_BASE_ROUTE, REQUEST_HEADERS} from '../../config/serverConfig';
import { useHistory } from 'react-router-dom';
const BLANK_DETAILS = {
    name:"",
    email:"",
    password:""
};

const BLANK_ERROR = {
    errorMessage:"",
    isVisible: false
}

const errorMessageStyles = {
    textAlign: "center",
    backgroundColor:"#faafaa",
    width:"100%",
    padding: "5% 3%",
    borderRadius:"15px"
}

export default function RegistrationForm(props) {
    const history = useHistory();
    const [userDetails, setUserDetails] = useState(BLANK_DETAILS);
    const [error, setError] = useState(BLANK_ERROR);

    const registerUser = async(userInfo) => {
        const response = await axios.post(`${API_BASE_ROUTE}/auth/signup`, {...userInfo, joiningDate: new Date()}, {headers:REQUEST_HEADERS});
        console.log(response);
        if(response.status === 200 ){
            history.replace({pathname:`/login`, state:{email:userInfo.email}});
            return response;
        }
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(userDetails.name !== "" && userDetails.email !== "" && userDetails.password !== ""){
                await registerUser(userDetails);
            }

        }catch(err){
            if(err.response.status !== 200){
                setError({
                    errorMessage: err.response.data.message,
                    isVisible:true
                })
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(error.isVisible) setError(BLANK_ERROR);

        setUserDetails(prev => {
            return {
                ...prev,
                [name]: value
                };
            });
        }

    return (
        <div className="form-container-register sign-up-container overlay-panel overlay-right">
        <form action="#" className="registrationForm" onSubmit={handleOnSubmit}>
            <h1 className="registerTitle">Create Account</h1>
            <input 
                className="auth-input" 
                type="text" 
                name="name"
                placeholder="Name" 
                onChange={handleChange}
                value={userDetails.name}
                />
            <input 
                className="auth-input" 
                type="email" 
                name="email"
                placeholder="Email" 
                onChange={handleChange}
                value={userDetails.email}
                />
            <input 
                className="auth-input" 
                type="password"
                name="password"
                placeholder="Password" 
                onChange={handleChange}
                value={userDetails.password}
                />
            <button 
                className="registerButton" 
                type="submit">
                Register
            </button>
            <div style={{visibility:error.isVisible?"visible":"hidden", padding:"5% 15%"}}>
                <h4 style={errorMessageStyles}>{error.errorMessage}</h4>
            </div>
        </form>
    </div>
    )
}