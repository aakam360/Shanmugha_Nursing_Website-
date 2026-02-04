import React from 'react';
import TitleBar from '../components/TitleBar';

const VicePrincipal = () => {
    return (
        <>
            <TitleBar title="VICE PRINCIPAL MESSAGE" activePage="Vice Principal Message" />
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
                                                    <img src="/images/shanmuga/vice-principal.jpg" className="w-100" alt="Vice Principal" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-8">
                                            <div className="pbmit-team-summary" style={{ padding: '0px 10px 0 0px' }}>
                                                <h2 className="pbmit-team-title" style={{ paddingTop: '30px' }}>VICE PRINCIPAL MESSAGE</h2>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Welcome to Sri Shanmugha College of Nursing for Women, where we are dedicated to fostering a nurturing and empowering environment for our students. As the only nursing college exclusively for women in our region, we take pride in our commitment to excellence in nursing education.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    At our institution, we believe in the holistic development of our students, combining rigorous academic training with hands-on clinical experience. Our curriculum is designed to equip our students with the knowledge, skills, and ethical foundation necessary to excel in the dynamic field of nursing. We emphasize the importance of compassion, dedication, and continuous learning, qualities that are essential for providing exceptional healthcare.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="pbmit-team-details">
                                                <p style={{ textAlign: 'justify', margin: '5px 5px 5px 7px' }}>Our faculty comprises experienced professionals who are passionate about teaching and mentoring the next generation of nurses. They are dedicated to supporting our students in their academic journey and in their personal growth, ensuring they are well-prepared to meet the challenges of the healthcare industry.</p>
                                                <p style={{ textAlign: 'justify', margin: '5px 5px 5px 7px' }}>We are proud of the safe and supportive environment we provide, where every student is encouraged to reach their full potential. At Sri Shanmugha College of Nursing for Women, we strive to create leaders in nursing who will make a significant impact in their communities and beyond.</p>
                                                <p style={{ textAlign: 'justify', margin: '5px 5px 5px 7px' }}>Thank you for considering Sri Shanmugha College of Nursing for Women as the place to pursue your nursing education. We look forward to welcoming you to our community and supporting you on your path to becoming a skilled and compassionate healthcare professional.</p>

                                                <h4 style={{ margin: '5px 5px 5px 7px' }}>Prof.N.S.GAYATHRI  </h4>
                                                <p style={{ margin: '5px 5px 5px 7px' }}>Vice Principal,Sri Shanmugha College of Nursing for Women</p>
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

export default VicePrincipal;
