import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const GrievanceRedressalCommittee = () => {
    return (
        <>
            <TitleBar title="Grievance Redressal Committee" activePage="Grievance Redressal Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>GRIEVANCE REDRESSAL COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee receives and reviews grievances from students, faculty, and staff in a fair and systematic manner.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It ensures confidentiality and provides a safe platform for individuals to express their concerns without fear.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee conducts impartial investigations and gathers relevant information before making decisions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It recommends and facilitates appropriate actions or solutions to resolve the grievances effectively.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee also identifies recurring issues and suggests preventive measures or policy revisions to improve the institutional environment.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee is responsible for creating a transparent and accessible mechanism for grievance submission.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It ensures all complaints are acknowledged, documented, and addressed in a timely and impartial manner.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee maintains confidentiality and protects the rights of all parties involved during the grievance process.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It collaborates with relevant departments to investigate and resolve issues effectively.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee also monitors the effectiveness of grievance resolutions and works to prevent recurrence through awareness and policy improvement.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Grievance Redressal Committee List Of Members</h3>

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
                                                        <td>DR.SHEELAVATHI N</td>
                                                        <td>PRINCIPAL</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>MRS.GAYATHRI N S</td>
                                                        <td>VICE PRINCIPAL</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>MR.MANIVANNAN M</td>
                                                        <td>TUTOR</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>MS.VASUKI.P</td>
                                                        <td>IV-YEAR</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>MS.VAISHNAVI.M</td>
                                                        <td>III-YEAR</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>MS.DEVISREE. A</td>
                                                        <td>II-YEAR</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>MS.MANJURI.R</td>
                                                        <td>I-YEAR</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <br />
                                    <a href="/pdf/Student_grievance_redressal_form.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                        <button style={{ backgroundColor: '#671952', padding: '5px', color: 'white', border: 'none' }}>View Form</button>
                                    </a>
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

export default GrievanceRedressalCommittee;
