import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const GirlsHostel = () => {
    return (
        <>
            <TitleBar title="HOSTEL" activePage="Hostel" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="list-items-left">
                                            <h3>HOSTEL</h3>
                                            <p style={{ textAlign: 'justify' }}>Sri Shanmugha College of Nursing provides comfortable and secure accommodation for students in its hostels. Here are the key features and guidelines regarding hostel facilities:</p>
                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Administration : </h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> The hostel operates as an independent unit with internal administration overseen by the Principal and Hostel Management.
                                                </li>
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> A Warden, appointed by the Chairman, supervises hostel affairs and is assisted by an Assistant Warden.
                                                </li>
                                            </ul>
                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Hostel Council :</h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> The Hostel Council, comprising the Warden (Chairman), Assistant Warden, and elected student secretaries, plans hostel activities and oversees mess operations through the Mess Committee.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <img className="web" src="/images/shanmuga/facilities/gh.png" alt="Hostel" style={{ width: "550px", height: "420px" }} />
                                    </div>
                                </div>
                                <div className="service-details" style={{ marginTop: '0px' }}>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Accommodation and Amenities</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Each room is furnished with a cot, table, chair, bookshelf, and ceiling fan. Furniture and fittings cannot be moved between rooms.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Cooking in rooms is prohibited, and smoking, alcohol consumption, and drug use are strictly forbidden.
                                        </li>
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Laundry facilities are available, and students can relax in the Common Room equipped with a TV, music system, newspapers, and magazines.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Guest Policy :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Guests may stay in the hostel with prior permission from the Chairman, subject to necessary payment. Overnight guests require the Warden's approval.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Visitation Policy :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> Boys and girls are not permitted to visit each other's hostels.
                                        </li>
                                    </ul>
                                    <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Recreational Activities :</h5>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i aria-hidden="true" className="far fa-check-square"></i> The hostel organizes various recreational, sports, literary, and social activities throughout the academic year. Common facilities include a Library, Computer Room, and Indoor Sports area.
                                        </li>
                                    </ul>
                                    <p style={{ textAlign: 'justify' }}>Sri Shanmugha College of Nursing for Women is committed to providing a conducive living environment in its hostels, ensuring the safety, comfort, and well-being of all residents.</p>
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

export default GirlsHostel;
