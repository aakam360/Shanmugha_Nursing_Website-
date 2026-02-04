import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const POSH = () => {
    return (
        <>
            <TitleBar title="POSH (Prevention of Sexual Harrassment) Committee" activePage="POSH (Prevention of Sexual Harrassment) Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>POSH (PREVENTION OF SEXUAL HARASSMENT) CELL 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The POSH Cell works to prevent sexual harassment by organizing awareness programs and sensitization workshops for students and staff.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It provides a safe and confidential platform for individuals to report incidents of sexual harassment.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell conducts fair and unbiased inquiries into complaints, ensuring due process is followed.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It offers support and counseling to victims throughout the redressal process.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell also ensures compliance with the POSH Act and recommends policy improvements to promote a safe and respectful campus environment.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The POSH Cell is responsible for creating a safe, respectful, and inclusive environment for all members of the institution.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It educates students and staff about their rights and responsibilities under the POSH Act through training and awareness initiatives.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell ensures that all complaints of sexual harassment are received sensitively, investigated promptly, and resolved fairly.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It maintains strict confidentiality throughout the grievance process to protect the dignity and privacy of all parties involved.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell also monitors the effectiveness of existing policies and suggests necessary changes to strengthen preventive measures.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>POSH Committee List Of Members</h3>

                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME OF THE MEMBERS</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Dr.Sheelavathi.N</td>
                                                                <td>Chairman</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Mrs.Gayathri N.S</td>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Mrs.Divya.K</td>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Mrs.Vasanthala Devi.R</td>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Mr.Akilamuthan K.V</td>
                                                                <td>Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Mr.Suresh Babu.T</td>
                                                                <td>Advocate</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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

export default POSH;
