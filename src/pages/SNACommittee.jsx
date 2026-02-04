import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const SNACommittee = () => {
    return (
        <>
            <TitleBar title="SNA (Student Nurses Association) Committee" activePage="SNA (Student Nurses Association) Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>SNA (STUDENT NURSES ASSOCIATION) COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote active student participation in all academic and extracurricular activities.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Encourage leadership, responsibility, and a sense of unity among nursing students.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Organize health awareness programs and community outreach activities.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Conduct celebrations of important health and nursing-related days.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote cultural, literary, and sports competitions for holistic development.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Provide a platform for student voices and ideas.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Coordinate with faculty for smooth execution of student-led initiatives.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Encourage participation in intercollegiate and national SNA events.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Inculcate ethical values and a professional attitude in student nurses.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Motivate students to take part in seminars, workshops, and conferences.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Plan and schedule annual SNA events and activities.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Facilitate student involvement through class representatives.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Coordinate health camps and outreach programs.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Guide students in organizing and participating in educational competitions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Represent student concerns and suggestions to faculty members.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain discipline and cooperation during college functions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Collaborate with other committees for successful event execution.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Encourage students to participate in NSS, Red Ribbon Club, etc.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Motivate students for academic excellence and skill enhancement.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote values of teamwork, compassion, and nursing ethics.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>SNA Committee List Of Members</h3>

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
                                                        <td>Dr. Sheelavathi N</td>
                                                        <td>SNA President</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mrs. Sivasankari A</td>
                                                        <td>SNA Advisor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Ms. Sowmiya M</td>
                                                        <td>Vice President</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Ms. Panimalar C</td>
                                                        <td>Secretary</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms. Abinaya K</td>
                                                        <td>Treasurer</td>
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

export default SNACommittee;
