import React from 'react';
import TitleBar from '../components/TitleBar';
import CommitteeSidebar from '../components/CommitteeSidebar';

const AlumniCommittee = () => {
    return (
        <>
            <TitleBar title="Alumni Committee" activePage="Alumni Committee" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="service-details">
                                    <h3>ALUMNI COMMITTEE 2024-2025</h3> <br />

                                    {/* Functions and Roles sections were commented out in source HTML, so they are omitted here to match. */}

                                    <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase' }}>Alumni Committee List Of Members</h3>

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
                                                        <td>Ms. Archana L</td>
                                                        <td>President</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Ms. Menaka T</td>
                                                        <td>Secretary</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Ms. Umarani R</td>
                                                        <td>Treasurer</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Ms. Sneha V</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Ms. Martina Jero Mary R</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Ms. Gopika V</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Ms. Keerthana A</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Ms. Monika M</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>Ms. Navabharathi N</td>
                                                        <td>Executive Committee Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>Ms. Priyadharshini Y</td>
                                                        <td>Executive Committee Member</td>
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

export default AlumniCommittee;
