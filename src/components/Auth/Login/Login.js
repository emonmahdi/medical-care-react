import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  * as FaIcons from "react-icons/fa";



import './login.css'
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {user, signInUsingGoogle, setUser, setError, setIsLoading,loginUser} =  useAuth();
    const [loginData, setLoginData] = useState({}) 

    const location = useLocation();
    const navigate = useNavigate();

    const redirect_url = location.state?.from || '/home'
    // console.log(redirect_url)

    const handleGoogleSignIn =() => {
        signInUsingGoogle()
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            navigate(redirect_url)
        }).catch(error => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }

    const handleChange = (e) => {
        const filed = e.target.name;
        const value = e.target.value;
        let newValue = { ...loginData }
        newValue[filed] = value;
        setLoginData(newValue);
        console.log(newValue);

    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, navigate, location)
    }
    return (
        <>
            <Navigation />
        
        <div className='login-page'>
            <form onSubmit={handleSubmit} className='login-form shadow'>
                <h2 className='text-center '>Sign In</h2>   
                 <div className='mb-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" onChange={handleChange} id='email' name='email' className='form-control' />    
                </div>   
                 <div className='mb-3'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={handleChange} id='password' name='password' className='form-control' />    
                </div>    
                <div>
                    <button type='submit' className='btn btn-success'>Sign In</button>    
                </div> 
                <div className='text-end my-3'>
                    <span>New User Registration! <Link to='/register'>Register</Link> </span>
                </div> 
                <div className='social-login-items mt-4'>
                    <span>Sign In With: </span>
                    <ul className='social-login'>
                        <li><FaIcons.FaFacebookSquare /></li>
                        <li onClick={handleGoogleSignIn}><FaIcons.FaGoogle /></li>
                        <li><FaIcons.FaTwitter /></li>
                    </ul>    
                </div> 
            </form>
        </div>
        </>
    );
};

export default Login;