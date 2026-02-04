import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutTrust from './pages/AboutTrust';
import Chairman from './pages/Chairman';
import ExecutiveDirector from './pages/ExecutiveDirector';
import Principal from './pages/Principal';
import VicePrincipal from './pages/VicePrincipal';
import ProgrammesOffered from './pages/ProgrammesOffered';
import FacultyDetails from './pages/FacultyDetails';
import ClinicalLaboratory from './pages/ClinicalLaboratory';
import ClinicalFacilities from './pages/ClinicalFacilities';
import GirlsHostel from './pages/GirlsHostel';
import FoodCourt from './pages/FoodCourt';
import SmartClassroom from './pages/SmartClassroom';
import Transportation from './pages/Transportation';
import AboutIQAC from './pages/AboutIQAC';
import IQACMembers from './pages/IQACMembers';
import Feedback from './pages/Feedback';
import Criteria1 from './pages/Criteria1';
import Criteria2 from './pages/Criteria2';
import Criteria3 from './pages/Criteria3';
import Criteria4 from './pages/Criteria4';
import Criteria5 from './pages/Criteria5';
import Criteria6 from './pages/Criteria6';
import Criteria7 from './pages/Criteria7';
import Criteria8 from './pages/Criteria8';
import './css/TableStyle.css';

import AntiRagging from './pages/AntiRagging';
import StudentGrievance from './pages/StudentGrievance';
import LibraryCommittee from './pages/LibraryCommittee';
import CampusMaintenance from './pages/CampusMaintenance';
import CurriculumCommittee from './pages/CurriculumCommittee';
import DisciplinaryCommittee from './pages/DisciplinaryCommittee';
import TransportCommittee from './pages/TransportCommittee';
import HostelCommittee from './pages/HostelCommittee';

import Careers from './pages/Careers';
import Events from './pages/Events';
import Placement from './pages/Placement';
import EResources from './pages/EResources';

import POSH from './pages/POSH';
import GrievanceRedressalCommittee from './pages/GrievanceRedressalCommittee';
import SportsCommittee from './pages/SportsCommittee';
import WomenEmpowerment from './pages/WomenEmpowerment';
import AlumniCommittee from './pages/AlumniCommittee';
import ResearchCommittee from './pages/ResearchCommittee';
import SNACommittee from './pages/SNACommittee';
import ContactUs from './pages/ContactUs';


// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/index-2" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-trust" element={<AboutTrust />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/executive-director" element={<ExecutiveDirector />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/vice-principal" element={<VicePrincipal />} />
          <Route path="/course" element={<ProgrammesOffered />} />
          <Route path="/faculty" element={<FacultyDetails />} />
          <Route path="/laboratory" element={<ClinicalLaboratory />} />
          <Route path="/fac" element={<ClinicalFacilities />} />
          <Route path="/hostel" element={<GirlsHostel />} />
          <Route path="/food" element={<FoodCourt />} />
          <Route path="/smart-classroom" element={<SmartClassroom />} />
          <Route path="/transport" element={<Transportation />} />
          <Route path="/about-iqac" element={<AboutIQAC />} />
          <Route path="/iqac-members" element={<IQACMembers />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/criteria1" element={<Criteria1 />} />
          <Route path="/criteria1" element={<Criteria1 />} />
          <Route path="/criteria2" element={<Criteria2 />} />
          <Route path="/criteria2" element={<Criteria2 />} />
          <Route path="/criteria3" element={<Criteria3 />} />
          <Route path="/criteria3" element={<Criteria3 />} />
          <Route path="/criteria4" element={<Criteria4 />} />
          <Route path="/criteria4" element={<Criteria4 />} />
          <Route path="/criteria5" element={<Criteria5 />} />
          <Route path="/criteria5" element={<Criteria5 />} />
          <Route path="/criteria6" element={<Criteria6 />} />
          <Route path="/criteria6" element={<Criteria6 />} />
          <Route path="/criteria7" element={<Criteria7 />} />
          <Route path="/criteria7" element={<Criteria7 />} />
          <Route path="/criteria8" element={<Criteria8 />} />
          <Route path="/criteria8" element={<Criteria8 />} />
          <Route path="/criteria8" element={<Criteria8 />} />

          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/students-grievance-committee" element={<StudentGrievance />} />
          <Route path="/library-committee" element={<LibraryCommittee />} />
          <Route path="/campus-maintenance-committee" element={<CampusMaintenance />} />
          <Route path="/curriculum-committee" element={<CurriculumCommittee />} />
          <Route path="/disciplinary-committee" element={<DisciplinaryCommittee />} />
          <Route path="/transport-committee" element={<TransportCommittee />} />
          <Route path="/hostel-committee" element={<HostelCommittee />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/eresources" element={<EResources />} />
          <Route path="/eresources" element={<EResources />} />

          <Route path="/posh" element={<POSH />} />
          <Route path="/grievance-redressal-committee" element={<GrievanceRedressalCommittee />} />
          <Route path="/sports-committee" element={<SportsCommittee />} />
          <Route path="/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/alumni-committee" element={<AlumniCommittee />} />
          <Route path="/research-committee" element={<ResearchCommittee />} />
          <Route path="/sna-committee" element={<SNACommittee />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Fallback for other HTML links to be added later */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />

        {/* Search Box Start Here */}
        <div className="pbmit-search-overlay">
          <div className="pbmit-icon-close"></div>
          <div className="pbmit-search-outer">
            <form className="pbmit-site-searchform">
              <input type="search" className="form-control field searchform-s" name="s" placeholder="Type Word Then Press Enter" />
              <button type="submit">
                <i className="pbmit-base-icon-search-1"></i>
              </button>
            </form>
          </div>
        </div>
        {/* Search Box End Here */}
      </div>
    </Router>
  );
}

export default App;
