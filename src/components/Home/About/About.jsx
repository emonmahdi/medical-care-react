import React from 'react';

import aboutImg from '../../../Assets/about.png'
import './about.css'

const About = () => {
    return (
        <div id='about-section'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="about-section-title w-75">
                            <h6 className='text-success'>About our hospitality</h6>
                            <h2 className='my-3'>We are always open for your health service </h2>
                        </div>
                        <div className="about-desc">
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci doloribus quam iste laboriosam, nisi dignissimos quaerat illo tenetur dolore assumenda, eius maxime eum delectus quia similique quae nemo error.</p>
                            <hr />
                            <h5>Desicevily sourrounded all admiration &amp; not you our particular symphasize</h5>
                            <button className='btn btn-outline-success my-3'>About</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img">
                            <img src={aboutImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;