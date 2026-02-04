import React, { useState } from 'react';

const Marquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <marquee
            behavior=""
            direction=""
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
            style={{ backgroundColor: '#9e2378', padding: '10px' }}
        >
            <a href="pdf/NAAC_selfstudy_report.pdf" target="_blank" style={{ color: 'white', fontSize: '18px' }}>
                <img src="/images/blink.png" width="40" height="40" className="blink" alt="" /> &nbsp; NAAC Self Study Report
            </a>
        </marquee>
    );
};

export default Marquee;
