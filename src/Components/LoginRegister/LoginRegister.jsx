

import axios from 'axios';
import React, { useState } from 'react';  // Added useState import
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function LoginRegister() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function register(event){
        event.preventDefault();
        setLoading(true);

        axios.post("https://fullstack-student-backend.onrender.com/api/auth", {firstName, lastName, email, password, phoneNumber})
        .then(res => {
            setLoading(false);  // Set loading to false once request is complete
            navigate("/Chizzyexchange/Login");
        }).catch(err => {
            setLoading(false);  // Set loading to false in case of error
            console.log(err);
        });
    }

    return (
        <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
            <div className='col-md-6 d-flex justify-content-center'>
                <form onSubmit={register}>
                    <div className='header-text mb-4'>
                        <h1>Create Account</h1>
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            placeholder='First Name' 
                            className='form-control form-control-lg bg-light fs-6' 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            placeholder='Last Name' 
                            className='form-control form-control-lg bg-light fs-6' 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            className='form-control form-control-lg bg-light fs-6' 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="password"   // Fixed typo here ("passord" to "password")
                            placeholder='Password' 
                            className='form-control form-control-lg bg-light fs-6' 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input 
                            type="tel"   // Fixed typo here ("numer" to "tel")
                            placeholder='Phone Number' 
                            className='form-control form-control-lg bg-light fs-6' 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginRegister;
