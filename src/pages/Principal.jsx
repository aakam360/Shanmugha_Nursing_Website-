import React from 'react';
import TitleBar from '../components/TitleBar';

const Principal = () => {
    return (
        <>
            <TitleBar title="PRINCIPAL MESSAGE" activePage="Principal Message" />
            <div className="page-content pbmit-bg-color-light">
                <section className="section-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="pbmit-team-details">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-4">
                                            <div className="pbmit-team-details-inner">
                                                <div className="pbmit-team-img">
                                                    <img src="/images/shanmuga/principal.jpg" className="w-100" alt="Principal" />
                                                </div>
                                                <h4 style={{ textAlign: 'center' }}>Dr.SHEELAVATHI.N. Ph.D.,  </h4>
                                                <p style={{ textAlign: 'center' }}>Principal, <br />Sri Shanmugha College of Nursing for Women</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-8">
                                            <div className="pbmit-team-summary" style={{ padding: '0px 10px 0 0px' }}>
                                                <h2 className="pbmit-team-title" style={{ paddingTop: '30px' }}>PRINCIPAL MESSAGE</h2>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>At Sri Shanmugha College of Nursing for Women, our goal is to empower students with the knowledge and skills necessary to excel in the nursing profession. Community Health Nursing, as a crucial branch of our curriculum, emphasizes the importance of healthcare at the grassroots level, fostering a sense of responsibility and service in our students.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    As Principal, I am committed to providing an environment where academic excellence and ethical practice go hand in hand. We aim to nurture compassionate and competent nursing professionals who are prepared to meet the challenges of today’s dynamic healthcare landscape.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Our institution is dedicated to continuous improvement and innovation in teaching and research, ensuring our students receive a comprehensive education that equips them to make a meaningful impact in their communities and beyond.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Principal;
