import React from 'react';
import TitleBar from '../components/TitleBar';

const FacultyDetails = () => {
    return (
        <>
            <TitleBar title="FACULTY DETAILS" activePage="Faculty Details" />
            <div className="page-content pbmit-bg-color-light">
                <section className="section-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pbmit-team-summary">
                                    <h3 style={{ fontSize: '22px', fontWeight: '600', textAlign: 'center' }}>FACULTY DETAILS</h3><br />
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>

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
                                                        .faculty-table tr {
                                                            border-color: aliceblue;
                                                            border-style: solid;
                                                            border-width: 0;
                                                            color: #000;
                                                        }
                                                        .about-info.tab-content {
                                                            display: inline-block;
                                                            background: #dddddd;
                                                            padding: 15px;
                                                            border: 1px solid #671952;
                                                            width: 100%;
                                                        }
                                                        `}
                                                    </style>
                                                    <div className="faculty-table">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <th style={{ fontSize: '16px', fontWeight: '600' }}>S.NO</th>
                                                                    <th style={{ fontSize: '16px', fontWeight: '600' }}>NAME</th>
                                                                    <th style={{ fontSize: '16px', fontWeight: '600' }}>DESIGNATION</th>
                                                                    <th style={{ fontSize: '16px', fontWeight: '600' }}>SPECIALITY</th>
                                                                    <th style={{ fontSize: '16px', fontWeight: '600' }}>QUALIFICATION</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Dr. Sheelavathi.N </td>
                                                                    <td>Professor Cum Principal</td>
                                                                    <td>Community Health Nursing</td>
                                                                    <td>Ph.D(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Prof.Gayathri N.S    </td>
                                                                    <td> Prof Cum Vice-Principal </td>
                                                                    <td>Child Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Mrs.Beryl Mohanraj  </td>
                                                                    <td>Professor   </td>
                                                                    <td>Child Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Mrs.Shankari.D</td>
                                                                    <td>Associate Professor   </td>
                                                                    <td>Medical Surgical Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>Mrs.Indra.P</td>
                                                                    <td>Associate Professor   </td>
                                                                    <td>Community Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>Mr.Vetriselvan </td>
                                                                    <td>Associate Professor   </td>
                                                                    <td>Medical Surgical Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7</td>
                                                                    <td>Mrs.Sivasankari   </td>
                                                                    <td>Assistant Professor   </td>
                                                                    <td>Mental Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>8</td>
                                                                    <td>Ms.Keerthika.R </td>
                                                                    <td>Assistant Professor   </td>
                                                                    <td>Obstetric and Gynacology Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>9</td>
                                                                    <td>Mrs.Divya.K  </td>
                                                                    <td>Assistant Professor   </td>
                                                                    <td>Child Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>10</td>
                                                                    <td>Mrs.Kalaiselvi.P   </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Medical Surgical  Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>11</td>
                                                                    <td>Ms.Kausalya.D   </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Medical Surgical  Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>Mrs.Vasanthaladevi  </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Community Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>13</td>
                                                                    <td>Mrs.Swathika.R    </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Medical Surgical Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>14</td>
                                                                    <td>Mr.Akilamuthan.K.V </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Medical Surgical Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15</td>
                                                                    <td>Mr.Manivannan.M </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Community Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>16</td>
                                                                    <td>Mrs.Sathiya T</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td>Mental Health Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>17</td>
                                                                    <td>Mrs.Gowsalya </td>
                                                                    <td>Nursing Tutor</td>
                                                                    <td>Medical Surgical Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>18</td>
                                                                    <td>Mrs.Nithuma </td>
                                                                    <td>Nursing Tutor</td>
                                                                    <td>Community Helath Nursing</td>
                                                                    <td>M.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>19</td>
                                                                    <td>Ms.Nithya.M </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>20</td>
                                                                    <td>Mrs.Nithyapriya  </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>21</td>
                                                                    <td>Mr.Gowrisankar.S</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>22</td>
                                                                    <td>Mrs.Ramya</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>23</td>
                                                                    <td>Mrs.Kungumavalli</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>24</td>
                                                                    <td>Mr.Sathish kumar</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>25</td>
                                                                    <td>Mr.Ravichandran</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>26</td>
                                                                    <td>Mrs.Vysya </td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>27</td>
                                                                    <td>Mrs.Nagarathinam</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>28</td>
                                                                    <td>Mrs.Baby</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>29</td>
                                                                    <td>Mrs.Berlin Daniel</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>30</td>
                                                                    <td>Mrs.Krishnaveni</td>
                                                                    <td>Nursing Tutor    </td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>31</td>
                                                                    <td>Mrs.Vanitha</td>
                                                                    <td>Nursing Tutor</td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>32</td>
                                                                    <td>Mrs.Manothini </td>
                                                                    <td>Nursing Tutor</td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>33</td>
                                                                    <td>Ms.Nivetha</td>
                                                                    <td>Nursing Tutor</td>
                                                                    <td></td>
                                                                    <td>B.Sc(N)</td>
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
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FacultyDetails;
