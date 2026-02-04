import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const StudentGrievance = () => {
    return (
        <>
            <TitleBar title="Student Grievance Committee" activePage="Student Grievance Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>STUDENT GRIEVANCE COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>After conducting a thorough investigation, the committee may recommend appropriate actions to resolve the issue. These may include disciplinary measures, policy amendments, or changes to a student’s academic standing.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Organize and participate in awareness campaigns to educate students about their rights and the procedures for raising grievances.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Monitor the effectiveness of the resolution process and ensure that recommended actions are implemented properly and in a timely manner.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Analyze student grievances to identify recurring issues or patterns and suggest proactive measures to prevent future occurrences.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Recommend revisions to institutional policies, the provision of additional support resources, or address underlying systemic issues to improve the overall student experience.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Collect and formally acknowledge all student grievances or complaints, whether submitted verbally or in writing.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i> Ensure students have a safe, accessible, and confidential platform to submit complaints without fear of retaliation.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Review, categorize, and document grievances appropriately (e.g., academic, behavioral, harassment, administrative).
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Assess the validity and seriousness of each complaint before initiating further action.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Conduct thorough, fair, and unbiased investigations into all valid complaints in a timely manner.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Student Grievance Committee List Of Members</h3>

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
                                                        <td>CONVENER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>MRS.GAYATHRI N. S</td>
                                                        <td>VICE PRINCIPAL</td>
                                                        <td>CO-CONVENER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>MR.MANIVANNAN.M</td>
                                                        <td>TUTOR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>MS.VASUKI.P</td>
                                                        <td>IV-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>MS.VAISHNAVI.M</td>
                                                        <td>III-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>MS.DEVI SRI.A</td>
                                                        <td>II-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>MS.MANJURI.R</td>
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

export default StudentGrievance;
