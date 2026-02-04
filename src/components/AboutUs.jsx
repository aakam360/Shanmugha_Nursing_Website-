import React from 'react';

const AboutUs = () => {
    return (
        <section className="pbmit-bg-color-light overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-two-img-box"></div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="about-two-content">
                            <div className="pbmit-heading-subheading text-right">
                                <h4 className="pbmit-subtitle">ABOUT US</h4>
                                <h2 className="pbmit-title">WELCOME TO SRI SHANMUGHA COLLEGE OF NURSING FOR WOMEN </h2>
                            </div>
                            <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif', fontSize: '17px' }}>
                                Sri Shanmugha College of Nursing for Women was established in 2018 by the Sri Shanmugha Educational Charitable Trust to promote excellence in Nursing Education. Our college is dedicated to enabling students to achieve and maintain the highest standards in nursing education, practice, and research. Our graduates are prepared through a combination of classroom instruction, laboratory training, and rich clinical experiences, fostering a comprehensive understanding of the nursing profession.
                            </p>

                            <ul className="list-group list-group-borderless">
                                <li className="list-group-item">
                                    <i aria-hidden="true" className="far fa-check-square"></i> Nursing Ethics and Professionalism
                                </li>
                                <li className="list-group-item">
                                    <i aria-hidden="true" className="far fa-check-square"></i> Nursing Leadership and Management
                                </li>
                                <li className="list-group-item">
                                    <i aria-hidden="true" className="far fa-check-square"></i> Patient Assessment and Monitoring
                                </li>
                                <li className="list-group-item">
                                    <i aria-hidden="true" className="far fa-check-square"></i> Evidence-Based Practice
                                </li>
                            </ul>

                            <div className="pbmit-heading-subheading text-right">
                                <h4 className="pbmit-title" style={{ fontSize: '18px', textAlign: 'center' }}>“Lighting the Path of Care Through Knowledge.” </h4>
                                <p style={{ fontSize: '16px' }}>Empowering future nurses with the skills, wisdom, and empathy needed to illuminate the lives of those they serve—bringing light, healing, and hope to every corner of healthcare.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
