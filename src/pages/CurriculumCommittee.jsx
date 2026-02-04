import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const CurriculumCommittee = () => {
    return (
        <>
            <TitleBar title="Curriculum Committee" activePage="Curriculum Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>CURRICULUM COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure the curriculum aligns with intended learning outcomes and recommend adjustments based on assessment results.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Provide a platform for faculty members to discuss, collaborate, and make decisions on curriculum-related matters.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Review feedback from students, faculty, and other stakeholders to enhance the curriculum’s relevance and effectiveness.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain accurate documentation of curriculum revisions, policies, and academic standards.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure the curriculum complies with applicable national and regional educational regulations and accreditation requirements.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Analyze assessment data to evaluate curriculum effectiveness and recommend necessary improvements.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Incorporate feedback from students, faculty, and external stakeholders to enhance the curriculum.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Maintain comprehensive records of curriculum decisions, policies, and revisions.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote the integration of innovative teaching methods, technologies, and interdisciplinary approaches within the curriculum.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure that curriculum policies comply with national standards and institutional regulations.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Curriculum Committee List Of Members</h3>

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
                                                        <td>Associate Professor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Mrs.Divya.K</td>
                                                        <td>Assistant Professor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Mrs.Keerthika R</td>
                                                        <td>Hostel Warden</td>
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

export default CurriculumCommittee;
