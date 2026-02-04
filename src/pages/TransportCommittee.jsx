import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const TransportCommittee = () => {
    return (
        <>
            <TitleBar title="Transport Committee" activePage="Transport Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>TRANSPORT COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Establish and monitor safety standards across all modes of transportation, including road, rail, and air.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Investigate transportation-related accidents or incidents, identify root causes, and recommend preventive measures.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure transportation services comply with relevant national and regional safety regulations and laws.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Develop and implement strategies to manage traffic flow, reduce congestion, and enhance the overall user experience.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Oversee the operation and regulation of local transportation systems such as buses, taxis, bike-sharing, and ride-sharing services.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The Transport Committee is responsible for planning and managing safe and efficient transportation services for students and staff.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It oversees the scheduling, routing, and operation of college buses to ensure timely and reliable service.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee coordinates with drivers and transport providers to maintain vehicle safety, cleanliness, and compliance with regulations.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It addresses transport-related grievances and implements solutions to improve commuting convenience.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee also monitors fuel usage, vehicle maintenance, and ensures adherence to transport policies and safety standards.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Transport Committee List Of Members</h3>

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
                                                        <td>Mrs.Gowsalya.S</td>
                                                        <td>Tutor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Ms.Punithasri.M</td>
                                                        <td>IV year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Ms. Malini.E</td>
                                                        <td>III year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms.Gokulapriya.M</td>
                                                        <td>II year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms.Keerthana.E</td>
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

export default TransportCommittee;
