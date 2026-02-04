import React from 'react';
import TitleBar from '../components/TitleBar';

const ExecutiveDirector = () => {
    return (
        <>
            <TitleBar title="EXECUTIVE DIRECTOR MESSAGE" activePage="Executive Director Message" />
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
                                                    <img src="/images/shanmuga/executive-director.jpg" className="w-100" alt="Executive Director" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-8">
                                            <div className="pbmit-team-summary" style={{ padding: '0px 10px 0 0px' }}>
                                                <h2 className="pbmit-team-title" style={{ paddingTop: '30px' }}>EXECUTIVE DIRECTOR MESSAGE</h2>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Preparing our students for today’s competitive world is our primary focus. Identifying the right opportunities for students and ensuring that these opportunities are fully visible through excellence in operations is my targeted approach for our young bright minds.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Marian Edelman rightly said, “Education is for improving the lives of others and for leaving your community and world better than you found it.” We resonate with this philosophy by ensuring that no student who walks into our campus is left without the opportunity for learning. Our efforts are concentrated on creating an environment that fosters quality education alongside activities that transform our students into responsible citizens of our country.
                                                </p>
                                                <br />
                                                <h4>Mr.THIRUMOORTHY.A   </h4>
                                                <p style={{ marginBottom: '0px' }}>Executive Director</p>
                                                <p>Sri Shanmugha College of Nursing for Women</p>
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

export default ExecutiveDirector;
