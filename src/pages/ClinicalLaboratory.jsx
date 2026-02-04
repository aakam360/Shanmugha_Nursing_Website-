import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const ClinicalLaboratory = () => {
    return (
        <>
            <TitleBar title="CLINICAL LABORATORY" activePage="Clinical Laboratory" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="list-items-left">
                                            <h3>CLINICAL LABORATORY </h3>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px', paddingTop: '20px' }}>Pre Clinical Science Lab</h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Equipped with modern facilities for students to conduct experiments and practical sessions related to pre-clinical sciences.
                                                </li>
                                            </ul>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Nursing Foundation & Advanced Nursing Practice Lab : </h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Designed to provide hands-on training in foundational nursing skills and advanced nursing practices, ensuring comprehensive learning experiences for students.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img className="web" src="/images/shanmuga/gallery/5.png" alt="Clinical Laboratory" style={{ width: "550px", height: "350px" }}/>
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
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Nutrition Lab : </h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Provides a practical platform for students to explore and understand nutritional concepts through experiments and demonstrations.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Community Health Nursing Lab :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Focused on preparing students for community health nursing practice, this lab offers simulated environments for learning and practicing community-based healthcare delivery.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Child Health Nursing Lab :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Equipped with specialized equipment and resources for students to gain practical experience in pediatric nursing care, including assessment and intervention techniques.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Obstetrics and Gynecological Nursing Lab :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Offers a simulated clinical setting for students to develop skills in obstetric and gynecological nursing, including prenatal care, labor and delivery, and postpartum care.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>AV Aids Room :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Provides audiovisual resources and technology to enhance teaching and learning experiences, supporting multimedia presentations, demonstrations, and interactive sessions.
                                        </li>
                                    </ul>

                                    <p style={{ textAlign: 'justify' }}>At Sri Shanmugha College of Nursing for Women, our laboratories and library facilities are designed to complement theoretical learning with practical application and extensive resources, ensuring a holistic and enriching educational experience for our students.</p>
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

export default ClinicalLaboratory;
