import React from 'react';
import TitleBar from '../components/TitleBar';

const EResources = () => {
    return (
        <>
            <TitleBar title="E-RESOURCES" activePage="E - Resources" />
            <div className="page-content pbmit-bg-color-light">
                <section className="section-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="pbmit-team-summary">
                                    <h3 style={{ fontSize: '22px', fontWeight: 600, textAlign: 'center' }}>E - RESOURCES </h3><br />
                                    <div className="about-info tab-content" style={{ display: 'inline-block', background: '#dddddd', padding: '15px', border: '1px solid #671952', width: '100%' }}>
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <table style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%', border: '2px solid #c1a632' }}>
                                                        <tbody>
                                                            {[
                                                                { id: 1, title: 'Advancement In Cardiac Technology', link: 'pdf/AdvancementCardiacTeechnology.pdf' },
                                                                { id: 2, title: 'Bibliotheraphy', link: 'pdf/Bibliotheraphy.html' },
                                                                { id: 3, title: "HIRSCHSPRUNG'S Disease / Congenital Megacolon", link: 'pdf/congenital-megacolon.pdf' },
                                                                { id: 4, title: 'Lotus Birth (or umbilical cord nonserverance - UNCS)', link: 'pdf/LotusbBirth.pdf' },
                                                                { id: 5, title: 'Mania', link: 'pdf/Mania.pdf' },
                                                                { id: 6, title: 'MLHP Mid - Level Health Provider', link: 'pdf/MLHP-1.pdf' },
                                                                { id: 7, title: 'MLHP Mid - Level Health Provider', link: 'pdf/MLHP-2.pdf' },
                                                                { id: 8, title: 'MLHP Mid - Level Health Provider', link: 'pdf/MLHP.pdf' },
                                                                { id: 9, title: 'Modern Concepts Of Health Care', link: 'pdf/Modern-concept-of-childcare.pdf' },
                                                                { id: 10, title: 'New Trends In Medical Surgical Nursing', link: 'pdf/Medical-Surgical-Nursing.pdf' },
                                                                { id: 11, title: 'PM Vishwakarma Yojana 2024', link: 'pdf/Vishwakarmayojana-2024.pdf' },
                                                                { id: 12, title: 'Reproductive & Child Health Programme', link: 'pdf/RCHProgram.pdf' },
                                                                { id: 13, title: 'Rett Syndrome', link: 'pdf/RettSyndrome.pdf' },
                                                                { id: 14, title: 'Schizophrenia', link: 'pdf/Schizophrenia.pdf' },
                                                                { id: 15, title: 'Walk A Mile After A Meal With A Smile', link: 'pdf/WalkaMile.pdf' },
                                                            ].map((item, index) => (
                                                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : 'transparent', color: '#000' }}>
                                                                    <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: 500 }}>{index + 1}</td>
                                                                    <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: 500 }}>{item.title}</td>
                                                                    <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #671952', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px', fontSize: '16px', fontWeight: 500 }}><a href={item.link} target="_blank" rel="noopener noreferrer">VIEW</a></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EResources;
