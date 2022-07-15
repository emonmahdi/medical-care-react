import React from 'react';
import { Link } from 'react-router-dom';
import  * as FaIcons from "react-icons/fa";



import './login.css'

const Login = () => {
    return (
        <div className='login-page'>
            <form className='login-form shadow'>
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
                        <li><FaIcons.FaGoogle /></li>
                        <li><FaIcons.FaTwitter /></li>
                    </ul>    
                </div> 
            </form>
        </div>
    );
};

export default Login;