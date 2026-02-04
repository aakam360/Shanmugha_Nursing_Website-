import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Marquee from '../components/Marquee';
import AboutUs from '../components/AboutUs';
import FunFacts from '../components/FunFacts';
import VisionMission from '../components/VisionMission';
import Facilities from '../components/Facilities';
import FeaturesGallery from '../components/FeaturesGallery';

const Home = () => {
    return (
        <div className="page-content">
            <HeroSlider />
            <Marquee />
            <AboutUs />
            <FunFacts />
            <VisionMission />
            <Facilities />
            <FeaturesGallery />
        </div>
    );
};

export default Home;
