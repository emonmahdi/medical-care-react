import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Navigation from '../../Shared/Navigation/Navigation';


import './serviceDetails.css'

const ServiceDetails = () => {
    const {Title}  = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);

    const [getDetails, setGetDetails] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    }, []);

    useEffect(() => {
        const data = serviceDetails.find(single =>  single?.title === Title) 
        setGetDetails(data)
    }, [serviceDetails])


    return (
        <>
            <Navigation />
        <div className='serviceDetails-section'>  
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details-card">
                            <img src={getDetails?.img} className='' height='200px' width='200px' alt="" />
                            <h1>{Title}</h1>
                            <p>{getDetails?.desc}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="booking-form">
                            <h3 className='mb-4'>Book An Appointment <span className='text-success'>{Title}</span> </h3>
                            <form>
                                <div className='mb-2'>
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="email">Email: </label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="phone">Phone: </label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor="address">Address: </label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='my-4'>
                                    <button type='submit' className='btn btn-success d-block w-100'>Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default ServiceDetails;