import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const CampusMaintenance = () => {
    return (
        <>
            <TitleBar title="Campus Maintenance Committee" activePage="Campus Maintenance Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>CAMPUS MAINTENANCE COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure the regular upkeep and cleanliness of classrooms, laboratories, hostels, administrative blocks, and common areas.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Oversee the maintenance of electrical, plumbing, and other essential utilities to prevent disruptions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Manage waste disposal systems and promote eco-friendly practices like recycling and energy conservation.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Address complaints and suggestions from students and staff regarding facility maintenance.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Plan and budget for periodic renovations, repairs, and infrastructure upgrades.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Conduct regular inspections of the campus facilities to identify maintenance needs.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Coordinate with external vendors and maintenance staff for timely repairs and servicing.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure compliance with safety and hygiene standards across the campus.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain records of maintenance activities, expenses, and asset inventory.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Recommend improvements to enhance the aesthetics and functionality of the campus environment.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Campus Maintenance Committee List Of Members</h3>

                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <table className="criteria-table">
                                                <tbody>
                                                    <tr>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME OF THE MEMBERS</th>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
                                                        <th style={{ fontSize: '16px', fontWeight: 600 }}>POSITION</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>DR.SHEELAVATHI N</td>
                                                        <td>PRINCIPAL</td>
                                                        <td>CHAIRPERSON</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>MRS.GAYATHRI N. S</td>
                                                        <td>VICE PRINCIPAL</td>
                                                        <td>SECRETARY</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>MS.ANITIHA.S</td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>MR.NANDHISHWARAN.S</td>
                                                        <td>ADMINISTRATIVE OFFICER</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>MS.SRI SAMYUKTHA.A</td>
                                                        <td>IV-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>MS.THARSHANA.K</td>
                                                        <td>III-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>MS.SOWMIYA.S</td>
                                                        <td>II-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>MS.AKSHAYA.M</td>
                                                        <td>I-YEAR</td>
                                                        <td>MEMBER</td>
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

export default CampusMaintenance;
