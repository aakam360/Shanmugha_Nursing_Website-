import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const FoodCourt = () => {
    return (
        <>
            <TitleBar title="ISTHARA FOOD COURT" activePage="Food Court" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="list-items-left">
                                            <h3 style={{ paddingTop: '20px' }}>ISTHARA FOOD COURT</h3>
                                            <p style={{ textAlign: 'justify' }}>Welcome to Isthara Smart Food Court at Sri Shanmugha College of Nursing for Women! We are proud pioneers in transforming conventional college canteens into dynamic and innovative food destinations. Here's what you can expect from our food court:</p>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Multi-Vendor System : </h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> We offer a diverse ecosystem of vendors representing various cuisines, ensuring a wide range of options for our patrons.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img className="web" src="/images/shanmuga/food.jpg" alt="Food Court" style={{ width: "550px", height: "350px" }} />
                                    </div>
                                </div>
                                <div className="service-details" style={{ marginTop: '0px' }}>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Tailored Food Experiences :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Our team curates food experiences based on the unique demographics and preferences of the college community, ensuring a delightful culinary journey for everyone.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Interactive technology encourages student participation and enhances the learning experience.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Efficient Space Utilization : </h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> The existing canteen space is transformed into a vibrant multi-vendor food court, maximizing convenience and variety for
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Enhanced Choice and Variety :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Students benefit from an expanded range of cuisines and vendors, catering to diverse tastes and preferences.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Hygiene and Quality Assurance :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> - We uphold the highest standards of sanitization and hygiene, conducting regular FSSAI standard quality checks to ensure food safety and satisfaction.
                                        </li>
                                    </ul>
                                    <p style={{ textAlign: 'justify' }}>Experience the future of dining at Isthara Smart Food Court, where innovation, variety, and convenience come together to create unforgettable culinary experiences for the college community.</p>
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

export default FoodCourt;
