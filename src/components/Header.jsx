import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e, key) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header className="site-header header-style-2">
      <div className="pbmit-header-top-area">
        <div className="container">
          <div className="d-md-flex justify-content-between ">
            <div className="pbmit-pre-header-left">
              <ul className="pbmit-contact-info">
                <li>
                  {" "}
                  <a
                    href="mailto:principal.nursing@shanmugha.edu.in"
                    style={{ color: "#fff", fontWeight: 500 }}
                  >
                    <i className="fa fa-envelope"></i>
                    principal.nursing@shanmugha.edu.in{" "}
                  </a>{" "}
                  &nbsp;{" "}
                  <a
                    href="tel:+917339245999"
                    style={{ color: "#fff", fontWeight: 500 }}
                  >
                    <i className="fa fa-phone-alt"></i> +91 73392 45999 / 73736
                    72999
                  </a>
                </li>
              </ul>
            </div>

            <div className="pbmit-pre-header-right d-flex">
              <ul className="pbmit-contact-info">
                <li>
                  <a href="\pdf\Nirf.pdf" style={{ color: "#fff" }}>
                    {" "}
                    NIRF
                  </a>{" "}
                  <span> | </span>
                </li>
                <li>
                  <Link to="/careers" style={{ color: "#fff" }}>
                    CAREERS
                  </Link>{" "}
                  <span> | </span>
                </li>
                <li>
                  <Link to="/events" style={{ color: "#fff" }}>
                    EVENTS
                  </Link>{" "}
                  <span> | </span>
                </li>
                <li>
                  <a
                    href="http://admissions.shanmugha.edu.in/"
                    style={{ color: "#fff" }}
                  >
                    ADMISSION
                  </a>{" "}
                  <span> | </span>
                </li>
                <li>
                  <Link to="/placement" style={{ color: "#fff" }}>
                    PLACEMENT
                  </Link>{" "}
                  <span> | </span>
                </li>
                <li>
                  <Link to="/eresources" style={{ color: "#fff" }}>
                    {" "}
                    E - RESOURCES{" "}
                  </Link>
                </li>
              </ul>
              <ul className="pbmit-social-links">
                <li className="pbmit-social-li pbmit-social-instagram">
                  <a
                    href="https://www.instagram.com/shanmughainstitutions/"
                    target="_blank"
                  >
                    <span style={{ color: "#fff" }}>
                      <i className="pbmit-base-icon-instagram"></i>
                    </span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-linkedin">
                  <a
                    href="https://www.linkedin.com/in/srishanmughacharitabletrust?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                    target="_blank"
                  >
                    <span style={{ color: "#fff" }}>
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li className="pbmit-social-li pbmit-social-youtube">
                  <a
                    href="https://youtube.com/@shanmughalive3140?si=gsTcuqiuP8fNqt_N"
                    target="_blank"
                  >
                    <span style={{ color: "#fff" }}>
                      <i className="fab fa-youtube"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="site-header-menu-wrapper">
        <div className="site-header-menu">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="site-branding">
                <h1 className="site-title">
                  <Link to="/">
                    <img
                      className="logo-img"
                      src="/images/shanmuga/logo.png"
                      alt="colza"
                    />
                  </Link>
                </h1>
              </div>
              <div className="site-navigation ml-auto">
                <nav
                  className={`main-menu navbar-expand-xl navbar-light ${isMenuOpen ? "active" : ""}`}
                >
                  <div className="navbar-header">
                    {/* Toggle Button */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleMenu}
                    >
                      <i className="pbmit-base-icon-menu-1"></i>
                    </button>
                  </div>
                  <div
                    className="pbmit-mobile-menu-bg"
                    onClick={closeMenu}
                  ></div>
                  <div
                    className={`collapse navbar-collapse clearfix ${isMenuOpen ? "show" : ""}`}
                    id="pbmit-menu"
                  >
                    <div className="pbmit-menu-wrap">
                      <span className="closepanel" onClick={closeMenu}>
                        <i className="pbmit-base-icon-cancel"></i>
                      </span>
                      <ul className="navigation clearfix">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) => handleDropdownClick(e, "about")}
                          >
                            About Us
                          </a>
                          <ul
                            className={
                              activeDropdown === "about" && isMenuOpen
                                ? "open"
                                : ""
                            }
                          >
                            <li>
                              <Link to="/about-trust">About Trust</Link>
                            </li>
                            
                            <li>
                              <Link to="/about-us">About SSCON</Link>
                            </li>
                            <li>
                              <Link to="/chairman">Chairman</Link>
                            </li>
                            <li>
                              <Link to="/executive-director">
                                Executive Director{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/principal">Principal </Link>
                            </li>
                            <li>
                              <Link to="/vice-principal">Vice Principal </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) => handleDropdownClick(e, "academics")}
                          >
                            Academics{" "}
                          </a>
                          <ul
                            className={
                              activeDropdown === "academics" && isMenuOpen
                                ? "open"
                                : ""
                            }
                          >
                            <li>
                              <Link to="/course">Programmes Offered</Link>
                            </li>
                            <li>
                              <Link to="/faculty">Faculty Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) =>
                              handleDropdownClick(e, "facilities")
                            }
                          >
                            Facilities{" "}
                          </a>
                          <ul
                            className={
                              activeDropdown === "facilities" && isMenuOpen
                                ? "open"
                                : ""
                            }
                          >
                            <li>
                              <Link to="/laboratory">Clinical Laboratory</Link>
                            </li>
                            <li>
                              <Link to="/fac">Clinical Facilities</Link>
                            </li>
                            <li>
                              <Link to="/hostel">Girls Hostel</Link>
                            </li>
                            <li>
                              <Link to="/food">Isthara Food Court</Link>
                            </li>
                            <li>
                              <Link to="/smart-classroom">Smart Classroom</Link>
                            </li>
                            <li>
                              <Link to="/transport">Transportation</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) => handleDropdownClick(e, "iqac")}
                          >
                            IQAC
                          </a>
                          <ul
                            className={
                              activeDropdown === "iqac" && isMenuOpen
                                ? "open"
                                : ""
                            }
                          >
                            <li>
                              <Link to="/about-iqac">About IQAC</Link>
                            </li>
                            <li>
                              <Link to="/iqac-members">IQAC Members</Link>
                            </li>
                            <li>
                              <a
                                href="/pdf/IQACMinutes.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Minutes of Meeting & ATR
                              </a>
                            </li>
                            <li>
                              <a href="#">Annual Report</a>
                            </li>
                            <li>
                              <a
                                href="/pdf/Qualityinitiative2-4.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                AISHE
                              </a>
                            </li>
                            <li>
                              <Link to="/feedback">Feedback</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) => handleDropdownClick(e, "naac")}
                          >
                            NAAC
                          </a>
                          <ul
                            className={
                              activeDropdown === "naac" && isMenuOpen
                                ? "open"
                                : ""
                            }
                          >
                            <li>
                              <a
                                href="/pdf/iiqa.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                IIQA
                              </a>
                            </li>
                            <li>
                              <Link to="/criteria1">SSR</Link>
                            </li>
                            <li>
                              <a
                                href="/pdf/code-of-conduct.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Code Of Conduct
                              </a>
                            </li>
                            <li>
                              <a
                                href="/pdf/objectiveofpractice.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Best Practices
                              </a>
                            </li>
                            <li>
                              <a
                                href="/pdf/institutional.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Institute Distinctiveness
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            onClick={(e) =>
                              handleDropdownClick(e, "committees")
                            }
                          >
                            Committees
                          </a>
                          <ul
                            className={`committee-submenu ${activeDropdown === "committees" && isMenuOpen ? "open" : ""}`}
                          >
                            <li>
                              <Link to="/anti-ragging">
                                Anti-ragging Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/students-grievance-committee">
                                Student Grievance Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/library-committee">
                                Library Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/campus-maintenance-committee">
                                Campus Maintenance Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/curriculum-committee">
                                Curriculum Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/disciplinary-committee">
                                Disciplinary Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/transport-committee">
                                Transport Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/hostel-committee">
                                Hostel Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/posh">
                                POSH (Prevention of Sexual Harrassment)
                                Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/grievance-redressal-committee">
                                Grievance Redressal Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/sports-committee">
                                Sports Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/women-empowerment">
                                Women Empowerment Cell
                              </Link>
                            </li>
                            <li>
                              <Link to="/alumni-committee">
                                Alumni Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/research-committee">
                                Research & Development Committee
                              </Link>
                            </li>
                            <li>
                              <Link to="/sna-committee">
                                SNA (Student Nurses Association) Committee
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
