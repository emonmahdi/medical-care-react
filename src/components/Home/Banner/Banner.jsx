import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import bannerImg from '../../../Assets/banner.png'
import './banner.css'
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <Container>
        <Row className='banner-body'>
          <Col>
            <div className="banner-img">
                <img src={bannerImg} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col>
            <div className="banner-content">
                <h1>Find your perfect health doctor</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum necessitatibus beatae enim hic at incidunt culpa quod voluptates in possimus.</p>
                <Link to='/register'>
                  <button className="btn btn-success">Register Now</button> 
                </Link>
            </div>
          </Col>
        </Row> 
      </Container>
    </div>
  );
};

export default Banner;
