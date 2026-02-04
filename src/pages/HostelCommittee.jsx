import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const HostelCommittee = () => {
    return (
        <>
            <TitleBar title="Hostel Committee" activePage="Hostel Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>HOSTEL COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure proper upkeep of hostel facilities, including rooms, common areas, and amenities, by coordinating with maintenance staff for timely repairs and improvements.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Monitor cleanliness and sanitation across hostel premises, ensuring regular cleaning and effective waste management practices.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Collaborate with catering services to create balanced, nutritious meal plans that accommodate diverse dietary needs.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Oversee food quality, hygiene, and service standards, promptly addressing any issues related to preparation or taste.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Organize cultural, recreational, and social events to foster a sense of community and enhance residents’ overall well-being.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The Hostel Committee is responsible for ensuring the smooth and disciplined functioning of hostel life for all residents.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It oversees the maintenance of hostel facilities, including rooms, common areas, and amenities, by coordinating with relevant departments.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee monitors hygiene, sanitation, and security within the hostel premises to provide a safe and comfortable living environment.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It collaborates with the mess team to ensure the provision of hygienic, nutritious, and wellbalanced meals.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee also plans recreational and cultural activities to promote a sense of community and well-being among hostel residents.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Hostel Committee List Of Members</h3>

                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <table className="criteria-table">
                                                <tbody>
                                                    <tr>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME OF THE MEMBERS</th>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dr.Sheelavathi.N</td>
                                                        <td>Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mrs.Gayathri.N.S</td>
                                                        <td>Vice principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Ms.Maheshwari.D</td>
                                                        <td>Girls hostel warden</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Ms. Kalpana. P</td>
                                                        <td>IV year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms. Kanimozhi.M</td>
                                                        <td>III year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms.Poojadevi.V S</td>
                                                        <td>II year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Ms.Abhinaya M A</td>
                                                        <td>I year student</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 service-left-col">
                                <CommitteeSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HostelCommittee;
