import React from 'react';
import TitleBar from '../components/TitleBar';

const AboutTrust = () => {
    return (
        <>
            <TitleBar title="ABOUT TRUST" activePage="About Trust" />

            <div className="page-content pbmit-bg-color-light">
                <section className="section-xl">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="row position-relative">
                                    <div className="col-md-12 ">
                                        <img className="web" src="/images/shanmuga/trust.jpg" alt="Trust" style={{ width: '550px', maxWidth: '100%' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about-three-content">
                                    <div className="pbmit-heading-subheading text-right">
                                        <h4 className="pbmit-subtitle">ABOUT TRUST</h4>
                                        <h2 className="pbmit-title" style={{ textTransform: 'uppercase' }}>Sri Shanmugha Educational Charitable Trust</h2>
                                    </div>
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>The Sri Shanmugha Educational Charitable Trust is driven by a shared purpose: to make a better world through education. Founded with a vision to accelerate the educational and industrial development of the area, the Trust has become a cornerstone of community growth and innovation.</p>
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>Our graduates, equipped with ingenuity and drive, have gone on to excel in various fields and fundamental technologies. Through our commitment to teaching and research, we continue to pursue our mission of service and providing free education to underprivileged and rural areas of Tamil Nadu and beyond.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="about-three-content">
                                    <p style={{ margin: '0 0 5px', textAlign: 'justify' }}>At Sri Shanmugha, we pride ourselves on being inclusive and welcoming to individuals regardless of their background. Our dedication to education as a transformative tool ensures that we remain at the forefront of creating opportunities and empowering lives, fostering a brighter future for all.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8">
                                <h3 className="pbmit-title" style={{ fontSize: '19px', textTransform: 'uppercase', textAlign: 'center' }}>List Of Registered Trust Members</h3>
                                <div className="about-info tab-content" style={{ display: 'inline-block', background: '#dddddd', padding: '15px', border: '1px solid #671952', width: '100%' }}>
                                    <div className="info title">
                                        <div className="table-responsive">
                                            <div style={{ overflowX: 'auto' }}>
                                                <table style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', border: '2px solid #c1a632' }}>
                                                    <tbody>
                                                        <tr style={{ borderColor: 'aliceblue', borderStyle: 'solid', borderWidth: '0', color: '#000' }}>
                                                            <th style={{ fontSize: '16px', fontWeight: '600', textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>S.NO</th>
                                                            <th style={{ fontSize: '16px', fontWeight: '600', textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>NAME</th>
                                                            <th style={{ fontSize: '16px', fontWeight: '600', textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>DESIGNATION</th>
                                                        </tr>
                                                        <tr style={{ backgroundColor: '#fff', color: '#000', borderColor: 'aliceblue', borderStyle: 'solid', borderWidth: '0' }}>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>1</td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Mr.K.Shanmugham </td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Chairman & Managing Director</td>
                                                        </tr>
                                                        <tr style={{ borderColor: 'aliceblue', borderStyle: 'solid', borderWidth: '0', color: '#000' }}>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>2</td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Mrs.S.Kaliyammal </td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Trustee</td>
                                                        </tr>
                                                        <tr style={{ backgroundColor: '#fff', color: '#000', borderColor: 'aliceblue', borderStyle: 'solid', borderWidth: '0' }}>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>3</td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Mrs.S.Prabahar </td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Trustee</td>
                                                        </tr>
                                                        <tr style={{ borderColor: 'aliceblue', borderStyle: 'solid', borderWidth: '0', color: '#000' }}>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>4</td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Dr.M.S.Sadasivam </td>
                                                            <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: '500' }}>Trustee</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutTrust;
