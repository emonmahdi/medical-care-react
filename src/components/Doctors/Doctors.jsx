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
                If someone has a doctoral or medical degree, ‘Dr. [Last name] is correct in email etiquette. If no name is supplied, ‘Dear Sir or Madam’ is always acceptable. If you know the gender of the recipient, alter this as appropriate.
                </p>
                </div>
                <div className="row">
                     {/* Single Doctor */}
                    <div className="col-md-4 mt-4">
                        <div className="single-doctor text-center shadow p-3 ">
                            <div className="card p-2">
                                <img src={doctor1} className='img-fluid w-50 mx-auto' alt="doctor one" />
                                <h3 className='mt-2'>Dr. Ahmad believes</h3>
                                <h6>Dentist</h6>
                                <p>Dr. Ahmad believes every patient deserves an individual, personal approach to fertility. She treats with a deep understanding of a patient’s goals and the best of medical science and innovation.</p>
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
                                <h3 className='mt-2'>Dr. Burks</h3>
                                <h6>Dentist</h6>
                                <p>Dr. Burks Chatmon considers compassionate care and shared decision-making the cornerstones of every patient relationship.</p>
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
                                <h3 className='mt-2'>Dr. Kaplan</h3>
                                <h6>Dentist</h6>
                                <p>Dr. Kaplan has a personalized approach and thoroughly explores all possible options. He has helped thousands realize their dream of family.</p>
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