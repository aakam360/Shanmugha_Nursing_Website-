import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const SportsCommittee = () => {
    return (
        <>
            <TitleBar title="Sports Committee" activePage="Sports Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>SPORTS COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Organizes and coordinates intra- and inter-collegiate sports events and tournaments.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promotes student participation in physical activities to encourage fitness and teamwork.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Manages and maintains sports facilities, equipment, and playing fields.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Identifies and nurtures athletic talent by facilitating training, coaching, and practice sessions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensures fair play and adherence to rules and regulations during all sporting events.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Plan and schedule sports activities and events throughout the academic year.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Coordinate with coaches, physical educators, and external bodies for training and competition support.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure the availability and proper maintenance of sports equipment and infrastructure.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Motivate and guide students to participate in various sports at institutional, district, state, and national levels.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain records of student participation, achievements, and inventory of sports resources.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Sports Committee List Of Members</h3>

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
                                                        <td>Dr.Sheelavathi. N</td>
                                                        <td>Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mrs.Gayathri.N.S</td>
                                                        <td>Vice principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Mr. Sathyakumar. D</td>
                                                        <td>Physical director</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Mrs.Sathya.T</td>
                                                        <td>Sports Coordinator</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms. Sathiya priya.S</td>
                                                        <td>IV year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms.Sasikala.T</td>
                                                        <td>III year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Ms.Sabitha.A</td>
                                                        <td>III year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Ms.Gayathri.K</td>
                                                        <td>II year student</td>
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

export default SportsCommittee;
