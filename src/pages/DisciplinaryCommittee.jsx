import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const DisciplinaryCommittee = () => {
    return (
        <>
            <TitleBar title="Disciplinary Committee" activePage="Disciplinary Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>DISCIPLINARY COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure fair and impartial treatment of all individuals involved in disciplinary cases.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain transparency by adhering to established procedures and providing accused individuals the opportunity to present their defense.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote a culture of respect, responsibility, and integrity within the organization beyond enforcing disciplinary actions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Act proactively by recommending policy or rule changes aimed at preventing future misconduct.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The Disciplinary Committee is responsible for maintaining discipline and decorum within the institution.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It investigates incidents of misconduct, indiscipline, or violations of institutional rules.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee ensures that inquiries are conducted fairly, giving all parties a chance to be heard.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It recommends appropriate corrective or disciplinary actions based on the severity of the offense.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The committee also promotes awareness about institutional rules and encourages a culture of respect, responsibility, and ethical behavior.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Disciplinary Committee List Of Members</h3>

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
                                                        <td>Prof.Gayathri. N.S.</td>
                                                        <td>Vice Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Mrs.Sathya.T</td>
                                                        <td>Tutor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Ms.Prithishya.G</td>
                                                        <td>IV year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms.Logu Priya.S</td>
                                                        <td>III year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms. Gnana Suroniga.R</td>
                                                        <td>II year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Ms.Jancy Rani.A</td>
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

export default DisciplinaryCommittee;
