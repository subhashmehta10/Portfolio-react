// src/Services.js
import React from 'react';
// import './Services.css';  // Ensure this CSS file includes styles

const Services = () => {
    return (
        <>
        <div className="services-container">
            <h1 className="services-header">What I Can Do For You</h1>
            <p className="services-subheader">
                From concept to deployment, I provide comprehensive digital solutions that help businesses grow and succeed in the modern web landscape.
            </p>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">💻</div> {/* Icon for Web Development */}
                    <h2>Web Development</h2>
                    <h3 style={{color:"blue",fontSize:"20px"}}>Full-Stack Solutions</h3>
                    <p>Build modern, scalable web applications using cutting-edge technologies like React, Node.js, and cloud platforms.</p>
                     <p className="price" id='money' >More Details</p> 
                </div>
                <div className="service-card">
                    <div className="service-icon">🛒</div> {/* Icon for E-commerce Solutions */}
                    <h2>E-commerce Solution</h2>
                    <h3 style={{color:"blue",fontSize:"20px"}}>Online Store Development</h3>
                    <p>Build powerful e-commerce platforms with secure payment processing, inventory management, and analytics.</p>
                    <p className="price" id='money'>More Details</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">⚡</div> {/* Icon for Web Optimization */}
                    <h2>Web Optimization</h2>
                    <h3 style={{color:"blue",fontSize:"20px"}}>Performance & SEO</h3>
                    <p>Optimize your website for speed, search engines, and user experience to maximize conversions and traffic.</p>
                    <p className="price" id='money' style={{marginTop:"39px"}}>More Details</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">🛠️</div> {/* Icon for Website Maintenance */}
                    <h2>Website Maintenance</h2>
                    <h3 style={{color:"blue",fontSize:"20px"}}>Ongoing Support</h3>
                    <p>Keep your website secure, updated, and running smoothly with regular maintenance and technical support.</p>
                    <p className="price" id='money' style={{marginTop:"37px"}}>More Details</p>
                </div>
            </div>
        </div>

        </>
    );
};

export default Services;
