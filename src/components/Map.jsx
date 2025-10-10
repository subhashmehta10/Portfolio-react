import React from 'react';
import './Map.css';

function Map() {
    return (
        <div className="map-container">
            <div className="map-header">
                <h3>Find Me Here</h3>
            </div>
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4222258619793!2d77.47617067509901!3d23.250246879014814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41fbaa41cc11%3A0x3815f20f66a3b56!2sRatnagiri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e1!3m2!1sen!2sin!4v1760119364389!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    );
}

export default Map;
