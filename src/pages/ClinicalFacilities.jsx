import React from 'react';
import TitleBar from '../components/TitleBar';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

const ClinicalFacilities = () => {
    return (
        <>
            <TitleBar title="CLINICAL FACILITIES" activePage="Clinical Facilities" />
            <div className="page-content pbmit-bg-color-light">
                <section>
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 service-right-col">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="list-items-left">
                                            <h3>CLINICAL FACILITIES  </h3>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px', paddingTop: '20px' }}>Parent hospital</h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Maruthi medical center and hospital,Erode.
                                                </li>
                                            </ul>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Tie Up Hospitals</h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Government Head Quarters Hospital,Erode.
                                                </li>
                                            </ul>

                                            <h5 className="pbmit-title" style={{ fontSize: '18px' }}>Government Hospital</h5>
                                            <ul className="list-group list-group-borderless">
                                                <li className="list-group-item">
                                                    <i aria-hidden="true" className="far fa-check-square"></i> Sankari and Edapadi
                                                    Primary health centre, Pullipalayam and Vadugapatti
                                                    Urban health centre, Tiruchengode.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 service-left-col">
                                <FacilitiesSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ClinicalFacilities;
