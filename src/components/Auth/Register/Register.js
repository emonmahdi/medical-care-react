import React from 'react';
import { Link } from 'react-router-dom';
import  * as FaIcons from "react-icons/fa";



import './register.css'


const Register = () => {
    return (
        <div className='register-page'>
            <form className='register-form shadow'>
                <h2 className='text-center '>Sign Up</h2>
                 <div className='mb-3'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name='name' className='form-control' />    
                </div>   
                 <div className='mb-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name='email' className='form-control' />    
                </div>   
                 <div className='mb-3'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' name='password' className='form-control' />    
                </div>   
                 <div className='mb-3'>
                    <label htmlFor="repassword">Confirm Password: </label>
                    <input type="password" id='repassword' name='repassword' className='form-control' />    
                </div>
                <div>
                    <button type='submit' className='btn btn-success'>Sign Up</button>    
                </div> 
                <div className='text-end my-3 '>
                    <span>Already Registered! <Link to='/login'>Login</Link> </span>
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

export default Register;