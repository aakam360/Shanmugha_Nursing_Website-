import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const WomenEmpowerment = () => {
    return (
        <>
            <TitleBar title="Women Empowerment Cell" activePage="Women Empowerment Cell" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>WOMEN EMPOWERMENT CELL 2024-2025</h3> <br />

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Functions:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell offers counseling and emotional support to women students and staff who may face personal, academic, or social challenges.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It helps women address grievances related to harassment, discrimination, or any other issues they might face within the institution.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell works to provide a safe space for women, ensuring they are protected from harassment, exploitation, or abuse in both academic and social settings.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>The cell educates women about their legal rights, including laws related to harassment, violence, and workplace discrimination.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>It offers resources on how to seek legal help and the available mechanisms for justice in cases of violence, harassment, or other forms of discrimination.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Roles and Responsibilities:</h3>
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Organize events like International Women's Day to celebrate the achievements of women and highlight their contributions to society.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Educate women about their legal rights and protections under Indian law, empowering them to assert their rights confidently.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Implement programs aimed at enhancing self-confidence, emotional intelligence, and decision-making skills among female students and staff.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Conduct health awareness programs, including topics on hygiene, nutrition, and mental health, to promote the overall well-being of women on campus.
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fa fa-check-circle"></i>Identify and nurture leadership qualities among women, promoting their participation in decision-making processes and encouraging entrepreneurial venture.
                                        </li>
                                    </ul>

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Women Empowerment Cell List Of Members</h3>

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
                                                        <td>Dr. Sheelavathi.N</td>
                                                        <td>Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Prof.Gayathri N.S</td>
                                                        <td>Vice Principal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Ms.Keerthika R</td>
                                                        <td>Assistant professor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Mrs.Sathya</td>
                                                        <td>Nursing tutor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms.Sowmiya G</td>
                                                        <td>IV th year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms.Ajaypriya S</td>
                                                        <td>III rd year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Ms.Abhinaya M A</td>
                                                        <td>II nd year student</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Ms.Abinaya A</td>
                                                        <td>I st year student</td>
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

export default WomenEmpowerment;
