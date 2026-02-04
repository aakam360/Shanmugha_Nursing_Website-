import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const AntiRagging = () => {
    return (
        <>
            <TitleBar title="ANTI-RAGGING COMMITTEE" activePage="Anti Ragging Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>ANTIRAGGING COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Include representatives from student bodies, faculty, and administration to ensure impartiality.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Ensure that no ragging incident goes unchecked; all complaints must be thoroughly investigated through a fair and transparent process.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Take appropriate disciplinary action against individuals involved in ragging — ranging from warnings to suspension, expulsion, or legal action — depending on the severity of the incident.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure the investigation process is conducted professionally, and that the actions taken are fair and just.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Recommend preventive measures to avoid recurrence of similar incidents, such as organizing awareness programs, providing additional training, or reviewing and updating existing policies.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Develop and enforce policies to prevent ragging (hazing or bullying) in any form within the institution.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Educate students, faculty, and staff about the harmful effects of ragging, while promoting a culture of mutual respect, safety, and discipline.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Actively monitor vulnerable areas such as hostels, classrooms, and recreational spaces to detect and deter any instances of ragging.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure that all institutional areas remain safe and free from any form of harassment, intimidation, or misconduct.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Provide a confidential and accessible mechanism for students to report incidents of ragging without fear of retaliation.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Anti Ragging Committee List Of Members</h3>

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
                                                        <td>Mrs.Gayathri.N S</td>
                                                        <td>Vice Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Mrs.Shankari.D</td>
                                                        <td>Professor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Mrs.Divya.K</td>
                                                        <td>Assistant Professor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Mrs.Mageswari.D</td>
                                                        <td>Hostel Warden</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Mr.Prithiviraja.S</td>
                                                        <td>Admin Officer</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Mr.Gunasekaran .P</td>
                                                        <td>Police</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Mr.Shanmugasundaram.P</td>
                                                        <td>Police</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>Ms.Sri Samyuktha.A</td>
                                                        <td>Student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>Ms.Panimalar.C</td>
                                                        <td>Student</td>
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

export default AntiRagging;
