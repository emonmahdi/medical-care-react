import React from 'react';

import blog1 from "../../../Assets/operation-1.jpg"
import blog2 from "../../../Assets/operation-2.jpg"
import blog3 from "../../../Assets/operation-3.jpg"
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import './blog.css'


const Blogs = () => {
    return (
        <>
            <Navigation />
        
        <div id='blog-section'>
           <div className="container">
                <div className="blog-sec-title w-50">
                    <h6 className='text-success'>Latest blog and news</h6>
                    <h2 className='my-3'>What's our customer said About our hospitality</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blog1} className='w-75 rounded'  alt="" />
                            </div>
                            <div className="blog-desc pt-5 px-3 pb-3 bg-light shadow">
                                <span className='text-success'>Doctor news</span>
                                <h4>Sigh sign nay sex high yet do gram</h4>
                                <button className='btn btn-text text-success'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blog2} className='w-75 rounded'  alt="" />
                            </div>
                            <div className="blog-desc pt-5 px-3 pb-3 bg-light shadow">
                                <span className='text-success'>Doctor news</span>
                                <h4>Sigh sign nay sex high yet do gram</h4>
                                <button className='btn btn-text text-success'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blog3} className='w-75 rounded'  alt="" />
                            </div>
                            <div className="blog-desc pt-5 px-3 pb-3 bg-light shadow">
                                <span className='text-success'>Doctor news</span>
                                <h4>Sigh sign nay sex high yet do gram</h4>
                                <button className='btn btn-text text-success'>Read More</button>
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

export default Blogs;