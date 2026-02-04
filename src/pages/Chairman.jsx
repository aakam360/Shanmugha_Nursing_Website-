import React from 'react';
import TitleBar from '../components/TitleBar';

const Chairman = () => {
    return (
        <>
            <TitleBar title="CHAIRMAN'S MESSAGE" activePage="Chairmans Message" />

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
                                                    <img src="/images/shanmuga/chairman.jpg" className="w-100" alt="Chairman" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-8">
                                            <div className="pbmit-team-summary" style={{ padding: '0px 10px 0 0px' }}>
                                                <h2 className="pbmit-team-title" style={{ paddingTop: '30px' }}>CHAIRMAN'S MESSAGE</h2>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Education builds a bridge between ignorance and wisdom. Sri Shanmugha Educational Institutions have been established with the aim of fulfilling such an objective. It is an undeniable fact that education always serves the purpose of enlightening the rural masses by showing the light of knowledge and wisdom, guiding them towards the path of success. This aspiration has laid the primary foundation for the emergence of Sri Shanmugha College of Nursing for Women, which disseminates knowledge through innovative teaching and learning practices and industry-connected endeavors.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    As the Founder-Chairman, I am highly privileged that the Sri Shanmugha campus functions as an instrument for nurturing potential healthcare professionals with strong human ethics. Our graduates are the masterminds who will build and uplift our nation through their dedication and expertise.
                                                </p>
                                                <br />
                                                <h4>THIRU.SHANMUGHAM K  </h4>
                                                <p>Chairman,Sri Shanmugha College of Nursing for Women</p>
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

export default Chairman;
