import React from 'react';
import TitleBar from '../components/TitleBar';

const AboutIQAC = () => {
    return (
        <>
            <TitleBar title="ABOUT IQAC" activePage="About IQAC" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="row position-relative">
                                    <div className="col-md-6 ">
                                        <img className="web" src="images/shanmuga/facilities/7.png" alt="IQAC" style={{ width: "550px", height: "450px", marginTop: "40px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about-three-content">
                                    <div className="pbmit-heading-subheading text-right">
                                        <h4 className="pbmit-subtitle" style={{ marginTop: "40px" }}>ABOUT IQAC</h4>
                                        <h2 className="pbmit-title" style={{ textTransform: 'uppercase', marginTop: "20px" }}>INTERNAL QUALITY ASSURANCE CELL (IQAC)</h2>
                                    </div>
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>
                                        Internal Quality Assurance Cell (IQAC), being a part of any Higher Educational Institution (HEI) going for accreditation and thereafter, going ahead towards quality enhancement and sustenance. IQAC at Sri Shanmugha College of Nursing established on 15th September 2023 is marching towards ensure quality nursing education. The Cell actively functions with the aim of developing a system for consistent and catalytic actions to conscious, improve the academic and administrative performance of the college. Further, it promotes measures for institutional functioning towards quality education on par with global standards for nursing education. The IQAC has been made as an integral and independent part of this College.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-four-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-4"></div>
                            <div className="col-xl-6 col-md-8">
                                <div className="about-four-content">
                                    <div className="pbmit-heading-subheading text-right" style={{ marginBottom: '8px' }}>
                                        <h2 className="pbmit-title text-white">VISION</h2>
                                    </div>
                                    <p style={{ textAlign: 'justify' }}>"To be a catalyst for transforming Sri Shanmugha College of Nursing for Women into a Center of Excellence in Nursing Education, Research, and Practice through Continuous Quality Enhancement and Innovation."</p>
                                    <div className="pbmit-heading-subheading text-right" style={{ marginBottom: '8px' }}>
                                        <h2 className="pbmit-title text-white">MISSION</h2>
                                    </div>
                                    <p style={{ textAlign: 'justify' }}>&bull; Enhance student learning through quality education and skill development.</p>
                                    <p style={{ textAlign: 'justify' }}>&bull; Promote faculty advancement through continuous training and research opportunities.</p>
                                    <p style={{ textAlign: 'justify' }}>&bull; Foster an environment of academic excellence and professional growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutIQAC;
