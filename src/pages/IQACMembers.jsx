// import React from 'react';
// import TitleBar from '../components/TitleBar';

// const IQACMembers = () => {
//     return (
//         <>
//             <TitleBar title="IQAC MEMBERS" activePage="IQAC MEMBERS" />
//             <div className="page-content pbmit-bg-color-light">
//                 <section className="section-lg">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="pbmit-team-summary">
//                                     <h3 style={{ fontSize: '22px', fontWeight: 600, textAlign: 'center' }}>IQAC MEMBERS </h3><br />
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>POSITION IN IQAC</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr><td>1</td><td>Prof.Dr. Sheelavathi N</td><td>Principal</td><td>Chairperson</td></tr>
//                                                             <tr><td>2</td><td>Er.Thirumoorthy Arumugam</td><td>Executive Director</td><td>Management Representative</td></tr>
//                                                             <tr><td>3</td><td>Dr. C Venkatesh</td><td>Chief Strategic Officer (CSO)</td><td>Senior Administrative Officer</td></tr>
//                                                             <tr><td>4</td><td>Dr.N R Srinivasan</td><td>Advisor</td><td>Senior Administrative Officer</td></tr>
//                                                             <tr><td>5</td><td>Dr. K Paul Joshua</td><td>IQAC Director</td><td>Senior Administrative Officer</td></tr>
//                                                             <tr><td>6</td><td>Mr. V Vadivel</td><td>Administrative Officer</td><td>Senior Administrative Officer</td></tr>
//                                                             <tr><td>7</td><td>Ms. Gayathri N S</td><td>Vice Principal</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>8</td><td>Ms. Beryl Mohanraj</td><td>Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>9</td><td>Ms.Shankari D</td><td>Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>10</td><td>Ms. Nandhini K</td><td>Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>11</td><td>Mr.Kanagavel K</td><td>Associate Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>12</td><td>Ms.Sivasankari A</td><td>Associate Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>13</td><td>Ms.Divya.K</td><td>Assistant Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>14</td><td>Ms.Vasanthala Devi R</td><td>Assistant Professor</td><td>Faculty Nominee</td></tr>
//                                                             <tr><td>15</td><td>Mr. Sekar R</td><td>Lawyer, Tiruchengode</td><td>Local Society Nominee</td></tr>
//                                                             <tr><td>16</td><td>Ms. Sowmiya M</td><td>Final Year</td><td>Student Nominee</td></tr>
//                                                             <tr><td>17</td><td>Ms. Archana S</td><td>Staff Nurse, Kovai Medical Center and Hospital, Coimbatore – 641 014.</td><td>Alumni Nominee</td></tr>
//                                                             <tr><td>18</td><td>Dr. Premkumar D</td><td>Maruthi Medical Centre and Hospital, Erode – 638 001</td><td>Industry Nominee</td></tr>
//                                                             <tr><td>19</td><td>Ms. Novina Rao P</td><td>Professor</td><td>IQAC Coordinator</td></tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// };

// export default IQACMembers;





import React from "react";
import TitleBar from "../components/TitleBar";

const thStyle = {
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "left",
    padding: "8px",
    border: "1px solid #671952",
    fontFamily: "Roboto, Helvetica, Arial, Verdana, sans-serif",
    letterSpacing: "-0.2px",
};

const tdStyle = {
    textAlign: "left",
    padding: "8px",
    border: "1px solid #671952",
    fontFamily: "Roboto, Helvetica, Arial, Verdana, sans-serif",
    letterSpacing: "-0.2px",
    fontSize: "16px",
    fontWeight: "500",
};

const members = [
    [1, "Prof.Dr. Sheelavathi N", "Principal", "Chairperson"],
    [2, "Er.Thirumoorthy Arumugam", "Executive Director", "Management Representative"],
    [3, "Dr. C Venkatesh", "Chief Strategic Officer (CSO)", "Senior Administrative Officer"],
    [4, "Dr.N R Srinivasan", "Advisor", "Senior Administrative Officer"],
    [5, "Dr. K Paul Joshua", "IQAC Director", "Senior Administrative Officer"],
    [6, "Mr. V Vadivel", "Administrative Officer", "Senior Administrative Officer"],
    [7, "Ms. Gayathri N S", "Vice Principal", "Faculty Nominee"],
    [8, "Ms. Beryl Mohanraj", "Professor", "Faculty Nominee"],
    [9, "Ms.Shankari D", "Professor", "Faculty Nominee"],
    [10, "Ms. Nandhini K", "Professor", "Faculty Nominee"],
    [11, "Mr.Kanagavel K", "Associate Professor", "Faculty Nominee"],
    [12, "Ms.Sivasankari A", "Associate Professor", "Faculty Nominee"],
    [13, "Ms.Divya.K", "Assistant Professor", "Faculty Nominee"],
    [14, "Ms.Vasanthala Devi R", "Assistant Professor", "Faculty Nominee"],
    [15, "Mr. Sekar R", "Lawyer, Tiruchengode", "Local Society Nominee"],
    [16, "Ms. Sowmiya M", "Final Year", "Student Nominee"],
    [17, "Ms. Archana S", "Staff Nurse, Kovai Medical Center", "Alumni Nominee"],
    [18, "Dr. Premkumar D", "Maruthi Medical Centre", "Industry Nominee"],
    [19, "Ms. Novina Rao P", "Professor", "IQAC Coordinator"],
];

const IQACMembers = () => {
    return (
        <>
            <TitleBar title="IQAC MEMBERS" activePage="IQAC MEMBERS" />

            <div className="page-content pbmit-bg-color-light">
                <section className="section-lg">
                    <div className="container">

                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-md-2" />

                            <div className="col-md-8">
                                <h3
                                    className="pbmit-title"
                                    style={{
                                        fontSize: "19px",
                                        textTransform: "uppercase",
                                        textAlign: "center",
                                    }}
                                >
                                    IQAC Members
                                </h3>

                                <div
                                    className="about-info tab-content"
                                    style={{
                                        display: "inline-block",
                                        background: "#dddddd",
                                        padding: "15px",
                                        border: "1px solid #671952",
                                        width: "100%",
                                    }}
                                >
                                    <div className="info title">
                                        <div className="table-responsive">
                                            <div style={{ overflowX: "auto" }}>
                                                <table
                                                    style={{
                                                        borderCollapse: "collapse",
                                                        width: "100%",
                                                        border: "2px solid #c1a632",
                                                    }}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <th style={thStyle}>S.NO</th>
                                                            <th style={thStyle}>NAME</th>
                                                            <th style={thStyle}>DESIGNATION</th>
                                                            <th style={thStyle}>POSITION IN IQAC</th>
                                                        </tr>

                                                        {members.map((row, i) => (
                                                            <tr
                                                                key={i}
                                                                style={{
                                                                    backgroundColor: i % 2 === 0 ? "#fff" : "#f9f9f9",
                                                                }}
                                                            >
                                                                {row.map((cell, ci) => (
                                                                    <td key={ci} style={tdStyle}>
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2" />
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default IQACMembers;
