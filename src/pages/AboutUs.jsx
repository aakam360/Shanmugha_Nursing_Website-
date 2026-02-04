import React from 'react';
import TitleBar from '../components/TitleBar';
import AboutUsContent from '../components/AboutUsContent';

const AboutUs = () => {
    return (
        <div className="page-content">
            <TitleBar title="ABOUT US" activePage="About Us" />
            <AboutUsContent />
        </div>
    );
};

export default AboutUs;
