import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const LibraryCommittee = () => {
    return (
        <>
            <TitleBar title="Library Committee" activePage="Library Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>LIBRARY COMMITTEE 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Advise and guide the library on policies related to the acquisition of books, journals, e-resources, and other learning materials.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Review and recommend the budget for library resources, infrastructure, and technology upgrades.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Monitor the usage of library facilities and suggest improvements to enhance user experience and accessibility.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Address any grievances or suggestions from students and faculty regarding library services.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Promote the use of library resources by organizing book exhibitions, user orientation programs, and information literacy sessions.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Formulate general library policies and rules for library use.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Recommend the purchase of new books, journals, and digital resources based on academic needs.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Ensure proper maintenance and cataloging of library materials.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Oversee the implementation of library automation and digitalization projects.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Evaluate the library's annual performance and submit reports to the administration.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Library Committee List Of Members</h3>

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
                                                        <td>MR.MANIVANNAN.M</td>
                                                        <td>TUTOR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>MS.SOWMIYA.M</td>
                                                        <td>LIBRARIAN</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>MS.LOGESHWARI.S</td>
                                                        <td>IV-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>MS.JEEVA.S</td>
                                                        <td>III-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>MS.POOJA.M</td>
                                                        <td>II-YEAR</td>
                                                        <td>MEMBER</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>MS.NANDHINI.S</td>
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

export default LibraryCommittee;
