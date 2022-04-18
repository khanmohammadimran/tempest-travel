import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-content">
            <div className='container text-center text-lg-left footer-content'>
                <div className="row align-items-center">
                    <div className="footer-logo col-lg-6 col-md-6 col-12 col-sm-12">
                        <h3 className='text-light footer-text py-3'>Tempest Travel</h3>
                    </div>
                    <div className="copyright col-lg-6 col-md-6 col-12 col-sm-12">
                        <p className='text-light'>Copyright&copy;{new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;









