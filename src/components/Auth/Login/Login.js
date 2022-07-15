import React from 'react';
import { Link } from 'react-router-dom';
import  * as FaIcons from "react-icons/fa";



import './login.css'
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {user, signInUsingGoogle, setUser, setError, setIsLoading} =  useAuth();
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Navigation />
        
        <div className='login-page'>
            <form onSubmit={handleSubmit} className='login-form shadow'>
                <h2 className='text-center '>Sign In</h2>   
                 <div className='mb-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name='email' className='form-control' />    
                </div>   
                 <div className='mb-3'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' name='password' className='form-control' />    
                </div>    
                <div>
                    <button type='submit' className='btn btn-success'>Sign In</button>    
                </div> 
                <div className='text-end my-3 '>
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