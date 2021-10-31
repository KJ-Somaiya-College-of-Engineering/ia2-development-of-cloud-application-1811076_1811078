import React, {useState} from 'react'
import axios from 'axios';
import {API_BASE_ROUTE, REQUEST_HEADERS} from '../../config/serverConfig';

const BLANK_CREDENTIALS = {
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

export default function SignInForm() {
    const [creds, setCreds] = useState(BLANK_CREDENTIALS);
    const [error, setError] = useState(BLANK_ERROR);

    const loginUser = async(creds) => {
        const response = await axios.post(`${API_BASE_ROUTE}/auth/signin`, creds, {headers:REQUEST_HEADERS});

        if(response){
            return response;
        }
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(creds.email !== "" && creds.password !== ""){
                await loginUser(creds);
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

        setCreds(prev => {
            return {
                ...prev,
                [name]: value
                };
            });
        }
        
    return (
        <div className="form-container sign-in-container">
            <form className="signInForm" action="#" onSubmit={handleOnSubmit}>
                <h1 className="signinTitle">Sign In</h1>
                <input 
                    className="auth-input" 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    onChange={handleChange}
                    value={creds.email}
                    />
                <input 
                    className="auth-input" 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={creds.password}
                    />
                <button 
                    className="signinButton" 
                    type="submit">
                    Sign In
                </button>
                <div style={{visibility:error.isVisible?"visible":"hidden", padding:"5% 15%"}}>
                    <h4 style={errorMessageStyles}>{error.errorMessage}</h4>
                </div>
            </form>
            
        </div>
    )
}
