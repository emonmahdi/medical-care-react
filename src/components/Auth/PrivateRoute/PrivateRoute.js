import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <div className='text-center mt-5'> <Spinner className='text-center' animation="border" variant="dark" /></div>
    }

    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
    
};

export default PrivateRoute;