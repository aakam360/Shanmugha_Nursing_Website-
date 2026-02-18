import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../components/TitleBar';

const ProgrammesOffered = () => {
    return (
        <>
            <TitleBar title="COURSE OFFERED" activePage="Courses Offered" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <img src="/images/shanmuga/1.webp" className="w-100" alt="Course Offered" />
                                <div className="service-details">
                                    <h3 className="pbmit-title" style={{ fontSize: '21px', textTransform: 'uppercase' }}>Program Overview:</h3>
                                    <p>Duration: 4 years with internship |
                                        Intake per year: 100 seats</p>
                                    <h3 className="pbmit-title" style={{ fontSize: '21px', textTransform: 'uppercase' }}>Department Overview : </h3>
                                    <p style={{ textAlign: 'justify' }}>The B.Sc (Nursing) program at Sri Shanmugha College of Nursing for Women offers comprehensive training in nursing practice, theory, and clinical skills. Our experienced faculty members provide rigorous academic instruction combined with hands-on clinical experience to prepare students for successful careers in nursing.
                                    </p>
                                    <div className="syllabus" style={{ padding: '18px 0px' }}>
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <ul style={{ color: 'black' }}>
                                                    <li><i className="far fa-check-square" style={{ color: '#ac227b' }}></i>&nbsp; B.Sc Nursing Syllabus - <a href="/images/syllabus/new_syllabus_b.sc.nursing.pdf" target="_blank">View PDF</a></li>
                                                    <li><i className="far fa-check-square" style={{ color: '#ac227b' }}></i>&nbsp; Course Outcomes - <a href="/images/syllabus/co_semester.pdf" target="_blank">View PDF</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-7">
                                                <ul style={{ color: 'black' }}>
                                                    <li><i className="far fa-check-square" style={{ color: '#ac227b' }}></i>&nbsp; Programme Outcomes - <a href="/images/syllabus/PO_PSO.pdf" target="_blank">View PDF</a></li>
                                                    <li><i className="far fa-check-square" style={{ color: '#ac227b' }}></i>&nbsp; Programme Outcomes (Non Semester) - <a href="/images/syllabus/po_pso_co_non_semester.pdf" target="_blank">View PDF</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="accordion accordion-style-1" id="accordionExample1">
                                    <div className="accordion-item active" id="headingOne1">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" style={{ textTransform: 'uppercase' }}>
                                                Curriculum Highlights
                                            </button>
                                        </h2>
                                        <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1"
                                            data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">

                                                <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Core Nursing Courses:</h5>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Students cover essential topics in nursing, including fundamentals of nursing, anatomy and physiology, pharmacology, medical-surgical nursing, pediatric nursing, psychiatric nursing, and community health nursing.
                                                </p>
                                                <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Clinical Experience:</h5>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Students gain practical experience through clinical rotations in various healthcare settings, including hospitals, clinics, and community health centers.
                                                </p>
                                                <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Internship:</h5>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    The program includes a mandatory internship period where students apply their knowledge and skills in real-world healthcare environments, under the guidance of experienced mentors.
                                                </p>
                                                <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Research:</h5>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Students have opportunities to engage in nursing research projects, contributing to the advancement of nursing practice and knowledge.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1" style={{ textTransform: 'uppercase' }}>
                                                Admission Eligibility Criteria
                                            </button>
                                        </h2>
                                        <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1"
                                            data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">


                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>1. The minimum age for admission shall be 17 years on 31st December of the year in which admission is sought. The maximum age limit for admission shall be 35 years. </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>2. Minimum Educational Qualification </p>
                                                <ul className="list-group list-group-borderless">
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Candidate with Science who have passed the qualifying 12th Standard examination (10+2) and must have obtained a minimum of 45% marks in Physics, Chemistry and Biology taken together. The candidate must have pass marks in English.
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> 	Candidates are also eligible from State Open School recognized by State Government and National Institute of Open School (NIOS) recognized by Central Government having Science subjects and English only.
                                                    </li>
                                                </ul>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>3. Colour blind candidates are eligible provided that colour corrective contact lens and spectacles are worn by such candidates.</p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>4. Candidate shall be medically fit. </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>5. Married candidates are also eligible for admission.  </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>6. Students shall be admitted once in a year.  </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>7. Selection of candidates should be based on the merit of the entrance examination. </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Entrance test shall comprise of: </p>

                                                <style>
                                                    {`
                                                    .academics-table table {
                                                        font-family: arial, sans-serif;
                                                        border-collapse: collapse;
                                                        width: 100%;
                                                    }
                                                    .academics-table td, .academics-table th {
                                                        border: 1px solid #dddddd;
                                                        text-align: left;
                                                        padding: 8px;
                                                    }
                                                    .academics-table tr:nth-child(even) {
                                                        background-color: #dddddd;
                                                    }
                                                    `}
                                                </style>
                                                <div className="academics-table">
                                                    <table>

                                                        <tr>
                                                            <td>a)	Aptitude for Nursing 	</td>
                                                            <td>20 marks </td>

                                                        </tr>
                                                        <tr>
                                                            <td>b)	Physics</td>
                                                            <td>20 marks</td>
                                                        </tr>
                                                        <tr>
                                                            <td>c)	Chemistry </td>
                                                            <td>20 marks </td>
                                                        </tr>
                                                        <tr>
                                                            <td>d)	Biology </td>
                                                            <td>20 marks </td>
                                                        </tr>
                                                        <tr>
                                                            <td>e)	English </td>
                                                            <td>20 marks </td>

                                                        </tr>

                                                    </table>
                                                </div>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>The minimum qualifying criteria of entrance test to admission to B.Sc. Nursing is as under:  </p>
                                                <div className="academics-table">
                                                    <table>

                                                        <tr>
                                                            <td>General </td>
                                                            <td>50th percentile </td>

                                                        </tr>
                                                        <tr>
                                                            <td>General – PwD </td>
                                                            <td>45th percentile </td>
                                                        </tr>
                                                        <tr>
                                                            <td>SC/ST/OBC 	</td>
                                                            <td>40th percentile </td>
                                                        </tr>

                                                    </table>
                                                </div>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Entrance test shall be conducted by University/State Government.  </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>8) Reservation Policy
                                                    : Reservation of seats in for admission in Nursing Colleges for SC/ST/OBC/EWSs/PH Admission under the reserved quota shall be subject to reservation policy and eligibility criteria for SC/ST/OBC/EWSs prescribed by the Central Govt./State Govt./Union Territory as applicable to the College concerned.
                                                </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}> In respect of candidates belonging to SC/ST/OBC the marks obtained in 3 core subjects shall be 40% instead of 45% for General category candidates. </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>Reservation for disability 5% Disability reservation to be considered for disabled candidates with a disability of loco-motor to the tune of 40% to 50% of the lower extremity and other eligibility criteria with regard to qualification will be same as prescribed for General category candidates. The upper age limit shall be relaxed by 5 years for disabled candidates. </p>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>A committee to be formed consisting of medical officer authorized by medical board of State government and a nursing expert in the panel which may decide whether the candidates have the disability of loco-motor to the tune of 40% to 50%. </p>
                                                <ul class="list-group list-group-borderless">
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i>i.Reservations shall be applicable within the sanctioned number of the seats.
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> ii. The start of the semester shall be 1st August every year.
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i>iii. No admission after the cut-off date i.e. 30th September will be undertaken. Further Hall Tickets/Admit Card shall not be issued to the candidates who are admitted after 30th September.
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> iv. The responsibility of obtaining and verifying the requisite documents for admission lies with the Institution and University
                                                    </li>
                                                </ul>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>9. Foreign Nationals:
                                                    The entry qualification equivalency i.e., 12th standard will be obtained by Association of Indian Universities, New Delhi. <br />
                                                    Institution, SNRC and University will be responsible to ensure that the qualification and eligibility will be equivalent to what has been prescribed by the Council.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1" style={{ textTransform: 'uppercase' }}>
                                                Career Opportunities
                                            </button>
                                        </h2>
                                        <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1"
                                            data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">


                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Graduates of the B.Sc (Nursing) program at Sri Shanmugha College of Nursing for Women are prepared for a wide range of career opportunities in the healthcare sector, including:
                                                </p>
                                                <ul className="list-group list-group-borderless">
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Registered Nurse (RN) in hospitals, clinics, and healthcare facilities
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Nurse Educator or Clinical Instructor
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Nurse Manager or Nursing Administrator
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Public Health Nurse
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Occupational Health Nurse
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Community Health Nurse
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Psychiatric Nurse
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Nurse Practitioner (with further education and training)

                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Home care nurse

                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Clinical nurse specialist
                                                    </li>
                                                    <li className="list-group-item">
                                                        <i aria-hidden="true" className="far fa-check-square"></i> Nursing offcer in central and state government sector and primary health centre
                                                    </li>
                                                </ul>
                                                <p style={{ textAlign: 'justify', margin: '0 0 7px' }}>
                                                    Our program equips students with the skills, knowledge, and professional values necessary to excel in diverse nursing roles and make meaningful contributions to the healthcare industry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 service-left-col">
                                <aside className="service-sidebar">
                                    <aside className="widget post-list">
                                        <h2> OUR COURSES</h2>
                                        <div className="all-post-list pbmit-bg-color-global">
                                            <ul>
                                                <li className="post-active"><Link to="/course.html">B.Sc. NURSING </Link></li>

                                            </ul>
                                        </div>
                                    </aside>

                                    <aside className="widget post-list">
                                        <h2> FACILITIES</h2>
                                        <div className="all-post-list pbmit-bg-color-global">
                                            <ul>
                                                <li><Link to="/laboratory">CLINICAL LABORATORY </Link></li>
                                                <li><Link to="/hostel">GIRLS HOSTEL </Link></li>
                                                <li><Link to="/food">ISTHARA SMART FOOD COURT </Link></li>
                                                <li ><Link to="/smart-classroom">SMART CLASSROOM </Link></li>
                                                <li><Link to="/transport">TRANSPORTATION</Link></li>

                                            </ul>
                                        </div>
                                    </aside>



                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProgrammesOffered;
