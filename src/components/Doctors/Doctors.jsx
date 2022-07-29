import React from 'react';

import './doctors.css'
import doctor1 from '../../Assets/doctor1.png'
import doctor2 from '../../Assets/doctor2.png'
import doctor3 from '../../Assets/doctor3.png'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Doctors = () => {
    return (
        <>
            <Navigation />
        
        <div className='doctors-section'>
            <div className="container">
                <div className="doctors-title w-50">
                <h6 className="text-success">Our Doctors</h6>
                <h2>Meet Our Doctors</h2>
                <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                    corporis eos deserunt voluptates expedita repudiandae quaerat cumque
                    aperiam error magnam!
                </p>
                </div>
                <div className="row">
                     {/* Single Doctor */}
                    <div className="col-md-4 mt-4">
                        <div className="single-doctor text-center shadow p-3 ">
                            <div className="card p-2">
                                <img src={doctor1} className='img-fluid w-50 mx-auto' alt="doctor one" />
                                <h3 className='mt-2'>John Adams</h3>
                                <h6>Dentist</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis natus reprehenderit ducimus repellat labore quasi?</p>
                                <div className="social-link-doctor ">
                                    <i className='fa fa-facebook'> </i>
                                    <i className='fa fa-twitter'> </i>
                                    <i className='fa fa-instagram'> </i>
                                    <i className='fa fa-linkedin'> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* Single Doctor */}
                    <div className="col-md-4 mt-4">
                        <div className="single-doctor text-center shadow p-3 ">
                            <div className="card p-2">
                                <img src={doctor2} className='img-fluid w-50 mx-auto' alt="doctor one" />
                                <h3 className='mt-2'>John Adams</h3>
                                <h6>Dentist</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis natus reprehenderit ducimus repellat labore quasi?</p>
                                <div className="social-link-doctor ">
                                    <i className='fa fa-facebook'> </i>
                                    <i className='fa fa-twitter'> </i>
                                    <i className='fa fa-instagram'> </i>
                                    <i className='fa fa-linkedin'> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single Doctor */}
                    <div className="col-md-4 mt-4">
                        <div className="single-doctor text-center shadow p-3 ">
                            <div className="card p-2">
                                <img src={doctor3} className='img-fluid w-50 mx-auto' alt="doctor one" />
                                <h3 className='mt-2'>John Adams</h3>
                                <h6>Dentist</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis natus reprehenderit ducimus repellat labore quasi?</p>
                                <div className="social-link-doctor ">
                                    <i className='fa fa-facebook'> </i>
                                    <i className='fa fa-twitter'> </i>
                                    <i className='fa fa-instagram'> </i>
                                    <i className='fa fa-linkedin'> </i>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Doctors;