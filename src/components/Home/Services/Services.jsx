import React, { useEffect, useState } from 'react';
import * as FcIcon  from "react-icons/fc";
import { Link } from 'react-router-dom'

import './services.css'



const Services = () => {
    const [services, setServices] = useState([]);
   

    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div id='services-section'>
            <div className="section-title"> 
                <h2>Choose our Any services what you need</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services && services.map((service) => {
                            const {id, title, img, icon, desc} = service;
                            return (
                                <div key={id} className='col-md-4'>
                                    <div className="single-service shadow mb-4 p-4 rounded">
                                         <img src={img} className='img-fluid' height='80px' width="80px" alt="" />
                                        <h4 className='my-4'>{title}</h4>
                                        <p>{desc}</p>
                                        <Link to={`/service/${title}`}> 
                                             <button className='btn btn-success'>Book an Appointment</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;