import React from 'react';
import TitleBar from '../components/TitleBar';

const ContactUs = () => {
    return (
        <>
            <TitleBar title="Contact Us" activePage="Contact Us" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="pbmit-heading-subheading">
                                    <h4 className="pbmit-subtitle">Contact Us</h4>
                                    <h2 className="pbmit-title">GET IN TOUCH</h2>
                                    <p>Our team is available to assist you with any questions or concerns. Reach out to us for more information about our programs, admissions, or campus life.</p>
                                </div>
                                <div className="pbmit-ihbox-wrapper" style={{ marginTop: '20px' }}>
                                    <div className="pbmit-ihbox pbmit-ihbox-style-3">
                                        <div className="pbmit-ihbox-box">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <i className="pbmit-colza-icon pbmit-colza-icon-location"></i>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <div className="pbmit-heading-desc" style={{ color: '#222', lineHeight: '24px' }}>
                                                        SRI SHANMUGHA COLLEGE OF NURSING FOR WOMEN<br />
                                                        Sankari – Tiruchengode Main Road, Pullipalayam, Morur (Po), Sankari (Tk),<br />
                                                        Salem (Dt), Tamil Nadu, Pincode - 637 304.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-ihbox pbmit-ihbox-style-3">
                                        <div className="pbmit-ihbox-box">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <i className="pbmit-colza-icon pbmit-colza-icon-phone"></i>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <div className="pbmit-heading-desc" style={{ color: '#222', lineHeight: '24px' }}>
                                                        +91 73392 45999 / 73736 72999
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-ihbox pbmit-ihbox-style-3">
                                        <div className="pbmit-ihbox-box">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-ihbox-icon">
                                                    <div className="pbmit-ihbox-icon-wrapper">
                                                        <i className="pbmit-colza-icon pbmit-colza-icon-email"></i>
                                                    </div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <div className="pbmit-heading-desc" style={{ color: '#222', lineHeight: '24px' }}>
                                                        principal.nursing@shanmugha.edu.in
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 p-0">
                                <div
                                    className="contact-section-iframe"
                                    style={{ width: "200%", height: "500px" }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.6112752949134!2d77.87497217049354!3d11.435735021861746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9619144bf2381%3A0x506d307a3bff7fe6!2sSri%20Shanmugha%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1718428992250!5m2!1sen!2sin"
                                        width="200%"
                                        height="500px"
                                        marginleft="50px"
                                        style={{ border: 0 }}
                                        allowFullScreen

                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="College Map"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactUs;
