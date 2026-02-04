import React from 'react';
import TitleBar from '../components/TitleBar';

const Careers = () => {
    return (
        <>
            <TitleBar title="CAREERS" activePage="Careers" />
            <div className="page-content pbmit-bg-color-light">
                <section className="contact-section">
                    <div className="container">
                        <div className="contact-section-bottom-inner">
                            <h3 className="pbmit-title" style={{ textTransform: 'uppercase', textAlign: 'center' }}>
                                CAREERS
                            </h3>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8 p-0">
                                    <form className="contact-form" method="POST" action="https://shanmughanursing.edu.in/career.php" role="form" encType="multipart/form-data">
                                        <div className="messages"></div>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name" style={{ color: '#222' }}>Name *</label>
                                                        <input id="name" type="text" name="name" className="form-control" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_email" style={{ color: '#222' }}>Email*</label>
                                                        <input id="email" type="email" name="email" className="form-control" required="required" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_phone" style={{ color: '#222' }}>Phone*</label>
                                                        <input id="phone" type="tel" name="phone" className="form-control" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message" style={{ color: '#222' }}>Resume</label>
                                                        <input type="file" id="myFile" name="filename" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input type="submit" className="btn btn-success btn-send" name="submit" value="Submit"
                                                        style={{ textTransform: 'uppercase', backgroundColor: '#671952', borderColor: '#ffffff', display: 'block', margin: '0px auto' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Careers;
