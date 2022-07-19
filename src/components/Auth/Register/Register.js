import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  * as FaIcons from "react-icons/fa";



import './register.css'
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import { useLocation } from 'react-router-dom';


const Register = () => {

    const {user, signInUsingGoogle, registerUser} =  useAuth();
    const [loginData, setLoginData] = useState({})    

    const navigate = useNavigate()
    

    const handleChange = (e) => {
        const filed = e.target.name;
        const value = e.target.value;
        let newValue = { ...loginData }
        newValue[filed] = value;
        setLoginData(newValue);
        // console.log(newValue);

    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginData.password !== loginData.repassword){ 
            alert('Your password did not match');
        }else{ 
            registerUser(loginData.name, loginData?.email, loginData?.password, navigate);
        }
    }  

    return (
        <>
            <Navigation />
        
        <div className='register-page'>
            <form onSubmit={handleSubmit} className='register-form shadow'>
                <h2 className='text-center '>Sign Up </h2>
                 <div className='mb-2'>
                    <label htmlFor="name">Name: </label>
                    <input onChange={handleChange} type="text" id='name' name='name' className='form-control' />    
                </div>   
                 <div className='mb-2'>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleChange} type="email" id='email' name='email' className='form-control' />    
                </div>   
                 <div className='mb-2'>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleChange} type="password" id='password' name='password' className='form-control' />    
                </div>   
                 <div className='mb-2'>
                    <label htmlFor="repassword">Confirm Password: </label>
                    <input onChange={handleChange} type="password" id='repassword' name='repassword' className='form-control' />    
                </div>
                <div>
                    <button  type='submit' className='btn btn-success'>Sign Up</button>    
                </div> 
                <div className='text-end my-2 '>
                    <span>Already Registered! <Link to='/login'>Login</Link> </span>
                </div> 
                <div className='social-login-items mt-2'>
                    <span>Sign In With: </span>
                    <ul className='social-login'>
                        <li><FaIcons.FaFacebookSquare /></li>
                        <li onClick={signInUsingGoogle}><FaIcons.FaGoogle /></li>
                        <li><FaIcons.FaTwitter /></li>
                    </ul>    
                </div> 
            </form>
        </div>
        </>
    );
};

export default Register;