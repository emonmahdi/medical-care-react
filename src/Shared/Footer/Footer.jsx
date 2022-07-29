import React from 'react';
import footerLogo from '../../Assets/logo.png'
import * as FaIcons from "react-icons/fa";

import './footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-logo">
                            <img src={footerLogo} width='60px' height='60px' className='img-fluid me-2' alt="" />
                            <span className='fw-bold'>Medical Care</span>
                        </div>
                        <p>These are usually internal medicine (internists) or family medicine doctors. Getting an annual checkup can help your doctor spot health issues early on.</p>
                        <div className="footer-social-icon">
                            <span><FaIcons.FaFacebookF /></span>
                            <span><FaIcons.FaYoutube /></span>
                            <span><FaIcons.FaTwitter /></span>
                            <span><FaIcons.FaInstagram /></span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Research</li>
                            <li>Creativity</li>
                            <li>Terms and Condition</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>About </h5>
                        <ul>
                            <li>What we do</li>
                            <li>What we us</li>
                            <li>Jobs</li>
                            <li>Terms And service</li>
                            <li>Terms and Condition</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Contact</h5>
                        <ul>
                            <li>01908131513</li>
                            <li>emonhowlader@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Footer;