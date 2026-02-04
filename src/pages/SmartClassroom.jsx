import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const SmartClassroom = () => {
    return (
        <>
            <TitleBar title="SMART CLASSROOM" activePage="Smart Classroom" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="list-items-left">
                                            <h3>SMART CLASSROOM</h3>
                                            <p style={{ textAlign: 'justify' }}>The Smart Classroom at Sri Shanmugha College of Nursing for Women is designed to facilitate an engaging and interactive learning experience. Here are the key features and benefits:</p>
                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Presenter-Friendly Environment : </h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> The Smart Classroom offers a self-service environment, making it easy and intuitive for faculty to utilize the resources effectively.
                                                </li>
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Configurations are simple and user-friendly, promoting spontaneity, improvisation, and active participation from both presenters and students.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img className="web" src="/images/shanmuga/facilities/2.png" alt="Smart Classroom" style={{ width: "550px", height: "350px" }} />
                                    </div>
                                </div>
                                <div className="service-details" style={{ marginTop: '0px' }}>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Collaborative Learning Environment :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> The classroom fosters a collaborative learning environment where students can actively engage with the content and each other.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Interactive technology encourages student participation and enhances the learning experience.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Interactive Learning Tools: </h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Classroom computers support interactive learning, enabling faculty to shift from traditional information disclosure to dynamic information processing.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Presentations are balanced with demonstrations, allowing students to apply and engage with the material actively.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Enhanced Engagement :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> These changes in the teaching and learning process lead to increased student engagement and participation.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> - Students are empowered to take a more active role in their learning, leading to deeper understanding and retention of the material.
                                        </li>
                                    </ul>
                                    <p style={{ textAlign: 'justify' }}>The Smart Classroom at Sri Shanmugha College of Nursing for Women is equipped with state-of-the-art technology and resources to create a dynamic and immersive learning environment. It encourages collaboration, participation, and active learning, ultimately enhancing the educational experience for both faculty and students.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 service-left-col">
                                <FacilitiesSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SmartClassroom;
