import React from 'react';

const FunFacts = () => {
    const facts = [
        { id: 1, icon: "/images/shanmuga/icon/nurse.png", count: "250", title: "Total Students" },
        { id: 2, icon: "/images/shanmuga/icon/education.png", count: "25", title: "Faculties" },
        { id: 3, icon: "/images/shanmuga/icon/award.png", count: "4", title: "Academic Awards" },
        { id: 4, icon: "/images/shanmuga/icon/rating.png", count: "9", title: "Years Experience" },
    ];

    return (
        <section className="section-lg_tb" style={{ paddingTop: '40px' }}>
            <div className="container">
                <div className="counter-three-bg">
                    {/* Added justify-content-center for tab/mobile centering */}
                    <div className="row justify-content-center">
                        {facts.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                {/* Added text-center here */}
                                <div className="pbminfotech-ele-fid-style-7 text-center">
                                    <div className="pbmit-fld-contents">
                                        <div className="pbmit-sbox-icon-wrapper mb-3">
                                            <img 
                                                src={item.icon} 
                                                alt={item.title} 
                                                style={{ margin: '0 auto' }} // Ensures image centers in its container
                                            />
                                        </div>
                                        <div className="pbmit-fld-wrap">
                                            <h4 className="pbmit-fid-inner">
                                                <span className="pbmit-number-rotate">{item.count}</span>
                                                <span className="pbmit-fid"><sup> +</sup></span>
                                            </h4>
                                            <div className="pbmit-fid-title">
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;