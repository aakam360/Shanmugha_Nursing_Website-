import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const Transportation = () => {
    return (
        <>
            <TitleBar title="TRANSPORTATION" activePage="Transportation" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="list-items-left">
                                            <h3>TRANSPORT</h3>
                                            <p style={{ textAlign: 'justify' }}>Sri Shanmugha College of Nursing for Women offers a comprehensive transport facility to ensure hassle-free and safe transportation for students and staff from various locations. Here are the key details:</p>
                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Transport Department : </h5>
                                            <p style={{ textAlign: 'justify', margin: '0 0 7px' }}> A dedicated Transport department operates within the college premises to manage and oversee the transportation services.</p>
                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Fleet :</h5>
                                            <p style={{ textAlign: 'justify', margin: '0 0 0 0px' }}> The college operates 10 buses to cater to the transportation needs of students from various parts of the city. The number of buses is subject to increase corresponding to the rise in student intake. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="web" src="/images/shanmuga/facilities/4.png" alt="Transportation" style={{ width: "550px", height: "350px" }} />
                                    </div>
                                </div>
                                <div className="service-details" style={{ marginTop: '15px' }}>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Coverage :</h5>
                                    <p style={{ textAlign: 'justify' }}> The transport facility covers most parts of the town and nearby areas with a fleet of brand new buses. </p>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Comfort and Safety :</h5>
                                    <p style={{ textAlign: 'justify' }}> The college's modern buses are designed to provide convenient and comfortable travel. Our experienced and well-educated drivers ensure a safe journey for students. </p>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Regulations :</h5>
                                    <p style={{ textAlign: 'justify' }}> Students are not permitted to use their own transport arrangements such as two-wheelers and cars to prevent accidents and ensure punctuality. </p>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Timing :</h5>
                                    <p style={{ textAlign: 'justify' }}>  All buses arrive at the campus before 8:30 a.m., allowing students and faculty to have breakfast and prepare for classes starting at 8:50 a.m. Buses depart from the campus at 5:00 p.m., ensuring students reach home early and safely.
                                    </p>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Boarding Time :</h5>
                                    <p style={{ textAlign: 'justify' }}>  Students are advised to arrive at the boarding point at least 10 minutes before the indicated time.
                                    </p>

                                    <p style={{ textAlign: 'justify' }}>  Our transportation services are designed to provide convenience, safety, and punctuality, ensuring a smooth commuting experience for all students and staff members.
                                    </p>
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

export default Transportation;
