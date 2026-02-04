import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer site-footer footer-style-1">
            <div className="pbmit-footer-widget-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pbmit-first-widget pbmit-widget">
                                <h2 className="widget-title">ABOUT US</h2>
                                <p className="text" style={{ textAlign: 'justify', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                    Sri Shanmugha College of Nursing for Women was established in 2018 by the Sri Shanmugha Educational Charitable Trust to promote excellence in Nursing Education. Our college is dedicated to enabling students to achieve and maintain the highest standards in nursing education, practice, and research.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="pbmit-two-widget pbmit-widget">
                                <h2 className="widget-title">QUICK LINKS</h2>
                                <div className="menu-services-menu-container">
                                    <ul id="menu-services-menu_1" className="menu">
                                        <li id="menu-item-11" className="menu-item">
                                            <Link to="/about-us">About SSCON</Link>
                                        </li>
                                        <li id="menu-item-22" className="menu-item">
                                            <Link to="/chairman">Chairman </Link>
                                        </li>
                                        <li id="menu-item-33" className="menu-item">
                                            <Link to="/executive-director"> Executive Director </Link>
                                        </li>
                                        <li id="menu-item-44" className="menu-item">
                                            <Link to="/principal">Principal </Link>
                                        </li>
                                        <li id="menu-item-55" className="menu-item">
                                            <Link to="/vice-principal">Vice Principal </Link>
                                        </li>
                                        <li id="menu-item-66" className="menu-item">
                                            <Link to="/faculty"> Faculty Details</Link>
                                        </li>
                                        <li id="menu-item-77" className="menu-item">
                                            <Link to="/feedback">Feedback</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="pbmit-three-widget pbmit-widget">
                                <br /><br />
                                <div className="menu-services-menu-container">
                                    <ul id="menu-services-menu" className="menu">
                                        <li id="menu-item-1" className="menu-item">
                                            <Link to="/about-trust">About Trust</Link>
                                        </li>
                                        <li id="menu-item-2" className="menu-item">
                                            <Link to="/course">Programmes Offered</Link>
                                        </li>
                                        <li id="menu-item-3" className="menu-item">
                                            <a href="http://admissions.shanmugha.edu.in/">Admission </a>
                                        </li>
                                        <li id="menu-item-4" className="menu-item">
                                            <Link to="/anti-ragging">Committees</Link>
                                        </li>
                                        <li id="menu-item-5" className="menu-item">
                                            <Link to="/careers">Careers</Link>
                                        </li>
                                        <li id="menu-item-6" className="menu-item">
                                            <Link to="/events">Events</Link>
                                        </li>
                                        <li id="menu-item-7" className="menu-item">
                                            <Link to="/contact-us">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pbmit-four-widget pbmit-widget">
                                <h2 className="widget-title">CONTACT US</h2>
                                <ul className="pbmit-rpw-list">
                                    <div className="pbmit-free-call-box">
                                        <i className="fa fa-map-marker"></i>
                                        <div className="pbmit-call-text">
                                            <p style={{ color: '#fff', fontSize: '16px', marginTop: '15px', marginBottom: '0px' }}>
                                                SRI SHANMUGHA COLLEGE OF NURSING <br />FOR WOMEN<br />Sankari – Tiruchengode Main Road, Pullipalayam, Morur (Po), Sankari (Tk),<br /> Salem (Dt), Tamil Nadu, Pincode - 637 304.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pbmit-free-call-box">
                                        <i className="fa fa-envelope"></i>
                                        <div className="pbmit-call-text">
                                            <p style={{ color: '#fff', fontSize: '16px', marginTop: '0px', marginBottom: '0px' }}>
                                                principal.nursing@shanmugha.edu.in
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pbmit-free-call-box">
                                        <i className="fa fa-phone-alt"></i>
                                        <div className="pbmit-call-text">
                                            <p style={{ color: '#fff', fontSize: '16px', marginTop: '0px', marginBottom: '0px' }}>
                                                +91 73392 45999
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pbmit-free-call-box">
                                        <i className="fa fa-globe"></i>
                                        <div className="pbmit-call-text">
                                            <p style={{ color: '#fff', fontSize: '16px', marginTop: '0px', marginBottom: '0px' }}>
                                                www.shanmughanursing.edu.in
                                            </p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pbmit-footer-widget-area-bottom">
                <div className="container">
                    <div className="pbmit-footer-widget-area-bottom-inner">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <p style={{ textAlign: 'center' }}>
                                    Copyright © 2025 Sri Shanmugha College Of Nursing For Women All Rights Reserved. Designed by <a href="https://www.vaaraahitech.com/" target="_blank"><img src="/images/logo.png" width="80" height="50" alt="Vaaraahi Tech" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
