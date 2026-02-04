import React from 'react';
import TitleBar from '../components/TitleBar';

const Placement = () => {
    return (
        <>
            <TitleBar title="PLACEMENT" activePage="Placement" />
            <div className="page-content pbmit-bg-color-light">
                <section className="section-xl">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="row position-relative">
                                    <div className="col-md-12 ">
                                        <img className="web" src="images/shanmuga/trust.jpg" alt="Placement" style={{ width: '550px', maxWidth: '100%' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about-three-content">
                                    <div className="pbmit-heading-subheading text-right">
                                        <h2 className="pbmit-title" style={{ textTransform: 'uppercase' }}>PLACEMENT CELL</h2>
                                    </div>
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>
                                        At Sri Shanmugha College of Nursing for Women, we prioritize the professional success and career advancement of our students. Through our dedicated efforts and strong relationships with reputed hospitals across Tamil Nadu, we ensure promising placement opportunities for our graduates.
                                    </p>
                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Our students benefit from: </h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Strong Hospital Partnerships: We have established robust relationships with renowned hospitals throughout Tamil Nadu, facilitating seamless placement opportunities for our graduates.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Career Guidance: Our experienced faculty and career counselors provide personalized guidance and support to students, helping them explore career options and prepare for interviews.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="about-three-content">
                                    <ul className="list-group list-group-borderless" style={{ marginBottom: '0px' }}>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Industry-Relevant Training: Our curriculum is designed to equip students with the skills and knowledge required by the healthcare industry, ensuring they are well-prepared for their professional roles.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Placement Drives: We regularly organize placement drives and campus interviews with leading hospitals, providing students with direct access to employment opportunities.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Alumni Network: Our alumni network serves as a valuable resource for current students, offering mentorship, networking opportunities, and insights into the job market.
                                        </li>
                                    </ul>
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>
                                        With our commitment to excellence and our strong industry connections, Sri Shanmugha College of Nursing for Women is dedicated to facilitating successful placements for our graduates across Tamil Nadu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Placement;
