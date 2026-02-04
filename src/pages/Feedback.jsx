// import React from 'react';
// import TitleBar from '../components/TitleBar';
// import IQACSidebar from '../components/IQACSidebar';

// const Feedback = () => {
//     return (
//         <>
//             <TitleBar title="FEEDBACK" activePage="Feedback" />
//             <div className="page-content pbmit-bg-color-light">
//                 <section>
//                     <div className="container">
//                         <div className="row flex-row-reverse">
//                             <div className="col-lg-9 service-right-col">
//                                 <div className="accordion accordion-style-1" id="accordionExample1">
//                                     <div className="accordion-item active" id="headingOne1">
//                                         <h2 className="accordion-header">
//                                             <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                                                 data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" style={{ textTransform: 'uppercase' }}>
//                                                 Empty Feedback Format
//                                             </button>
//                                         </h2>
//                                         <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1"
//                                             data-bs-parent="#accordionExample1">
//                                             <div className="accordion-body">
//                                                 <div className="about-info tab-content">
//                                                     <div className="info title">
//                                                         <div className="table-responsive">
//                                                             <div style={{ overflowX: 'auto' }}>
//                                                                 <table>
//                                                                     <tbody>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Alumini UG programme only</td>
//                                                                             <td><a href="/pdf/alumni-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback For Curriculum By Employer </td>
//                                                                             <td><a href="/pdf/employer-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Faculty</td>
//                                                                             <td><a href="/pdf/faculty-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Professionals</td>
//                                                                             <td><a href="/pdf/professional-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback From Students About The Educational Program</td>
//                                                                             <td><a href="/pdf/students-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                     </tbody>
//                                                                 </table>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingTwo1">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                                 data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1" style={{ textTransform: 'uppercase' }}>
//                                                 FEEDBACK
//                                             </button>
//                                         </h2>
//                                         <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1"
//                                             data-bs-parent="#accordionExample1">
//                                             <div className="accordion-body">
//                                                 <div className="about-info tab-content">
//                                                     <div className="info title">
//                                                         <div className="table-responsive">
//                                                             <div style={{ overflowX: 'auto' }}>
//                                                                 <table>
//                                                                     <tbody>
//                                                                         <tr>
//                                                                             <td colSpan="2" style={{ fontSize: '18px' }}>ACTION TAKEN REPORT</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback analysis and action taken report for academic year 2022 - 2023</td>
//                                                                             <td><a href="/pdf/Actiontaken-Report.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td colSpan="2" style={{ fontSize: '18px' }}>FEEDBACK ANALYSIS</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Analysis Of Alumini Feedback On Curriculum 2022-2023 </td>
//                                                                             <td><a href="/pdf/alumnifeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Analysis Of Employer Feedback On Curriculum 2022 - 2023</td>
//                                                                             <td><a href="/pdf/employerfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Analysis Of Faculty Feedback On Curriculum 2022 - 2023</td>
//                                                                             <td><a href="/pdf/facultyfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Analysis Of Professionals Feed Back On Curriculum</td>
//                                                                             <td><a href="/pdf/professionalsfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Analysis Of Students Feed Back On Curriculum</td>
//                                                                             <td><a href="/pdf/studentsfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td colSpan="2" style={{ fontSize: '18px' }}>FEEDBACK FORMS</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Alumini</td>
//                                                                             <td><a href="/pdf/alumni.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback On Curriculum By Employer</td>
//                                                                             <td><a href="/pdf/employers.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Faculty</td>
//                                                                             <td><a href="/pdf/faculty.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback Form For Professionals</td>
//                                                                             <td><a href="/pdf/professional.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <td>Feedback From Students About The Educational Program </td>
//                                                                             <td><a href="/pdf/students.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                                         </tr>
//                                                                     </tbody>
//                                                                 </table>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 service-left-col">
//                                 <IQACSidebar />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// };

// export default Feedback;


import React from "react";
import TitleBar from "../components/TitleBar";
import IQACSidebar from "../components/IQACSidebar";

const Feedback = () => {
    return (
        <>
            <TitleBar title="FEEDBACK" activePage="Feedback" />

            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">

                            <div className="col-lg-9 service-right-col">
                                <div className="accordion accordion-style-1" id="accordionExample1">

                                    {/* EMPTY FEEDBACK FORMAT */}

                                    <div className="accordion-item active">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne1">
                                                EMPTY FEEDBACK FORMAT
                                            </button>
                                        </h2>

                                        <div id="collapseOne1" className="accordion-collapse collapse show">
                                            <div className="accordion-body">

                                                <style>
                                                    {`
                                                    .faculty-table table {
                                                        border-collapse: collapse;
                                                        border-spacing: 0;
                                                        width: 100%;
                                                        border: 2px solid #c1a632;
                                                    }
                                                    .faculty-table th, .faculty-table td {
                                                        text-align: left;
                                                        padding: 8px;
                                                        border: 1px solid #671952;
                                                        font-family: "Roboto", Helvetica, Arial, Verdana, sans-serif;
                                                        letter-spacing: -0.2px;
                                                        font-size: 16px;
                                                        font-weight: 500;
                                                    }
                                                    .faculty-table tr:nth-child(even) {
                                                        background-color: #fff;
                                                        color: #000;
                                                    }
                                                    .about-info.tab-content {
                                                        display: inline-block;
                                                        background: #dddddd;
                                                        padding: 15px;
                                                        border: 1px solid #671952;
                                                        width: 100%;
                                                    }
                                                    .section-row {
                                                        background:#e5e5e5;
                                                        font-weight:600;
                                                        font-size:18px;
                                                    }
                                                    `}
                                                </style>

                                                <div className="about-info tab-content">
                                                    <div className="faculty-table">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Feedback Form For Alumni UG programme only</td>
                                                                    <td><a href="/pdf/alumni-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback For Curriculum By Employer</td>
                                                                    <td><a href="/pdf/employer-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback Form For Faculty</td>
                                                                    <td><a href="/pdf/faculty-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback Form For Professionals</td>
                                                                    <td><a href="/pdf/professional-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback From Students About The Educational Program</td>
                                                                    <td><a href="/pdf/students-feedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* FEEDBACK */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo1">
                                                FEEDBACK
                                            </button>
                                        </h2>

                                        <div id="collapseTwo1" className="accordion-collapse collapse">
                                            <div className="accordion-body">

                                                <div className="about-info tab-content">
                                                    <div className="faculty-table">
                                                        <table>
                                                            <tbody>

                                                                <tr className="section-row">
                                                                    <td colSpan="2">ACTION TAKEN REPORT</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback analysis and action taken report for academic year 2022 - 2023</td>
                                                                    <td><a href="/pdf/Actiontaken-Report.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>

                                                                <tr className="section-row">
                                                                    <td colSpan="2">FEEDBACK ANALYSIS</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Analysis Of Alumni Feedback On Curriculum 2022-2023</td>
                                                                    <td><a href="/pdf/alumnifeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Analysis Of Employer Feedback On Curriculum 2022 - 2023</td>
                                                                    <td><a href="/pdf/employerfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Analysis Of Faculty Feedback On Curriculum 2022 - 2023</td>
                                                                    <td><a href="/pdf/facultyfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Analysis Of Professionals Feed Back On Curriculum</td>
                                                                    <td><a href="/pdf/professionalsfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Analysis Of Students Feed Back On Curriculum</td>
                                                                    <td><a href="/pdf/studentsfeedback.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>

                                                                <tr className="section-row">
                                                                    <td colSpan="2">FEEDBACK FORMS</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback Form For Alumni</td>
                                                                    <td><a href="/pdf/alumni.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback On Curriculum By Employer</td>
                                                                    <td><a href="/pdf/employers.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback Form For Faculty</td>
                                                                    <td><a href="/pdf/faculty.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback Form For Professionals</td>
                                                                    <td><a href="/pdf/professional.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Feedback From Students About The Educational Program</td>
                                                                    <td><a href="/pdf/students.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 service-left-col">
                                <IQACSidebar />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Feedback;
