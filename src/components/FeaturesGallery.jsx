import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturesGallery = () => {
    const stretchedDivRef = useRef(null);
    const rightColRef = useRef(null);

    const calculateStretched = () => {
        if (!stretchedDivRef.current || !rightColRef.current) return;

        const windowWidth = window.innerWidth;
        // Use container width or fallback to a standard container width calculation if closest container not found immediately, 
        // but typically finding .container is safer.
        const container = stretchedDivRef.current.closest('.container');
        const mainWidth = container ? container.offsetWidth : 1200; // fallback if container not found

        let extraWidth = (windowWidth - mainWidth) / 2;
        if (windowWidth < 1200) {
            extraWidth = 0;
        }

        if (stretchedDivRef.current.classList.contains('pbmit-col-right')) {
            rightColRef.current.style.marginRight = `-${extraWidth}px`;
        } else {
            // Future proofing if we ever swap sides, though right now only right is used
            rightColRef.current.style.marginLeft = `-${extraWidth}px`;
        }
    };

    useEffect(() => {
        calculateStretched();
        window.addEventListener('resize', calculateStretched);
        return () => {
            window.removeEventListener('resize', calculateStretched);
        };
    }, []);

    return (
        <>
            <section className="overflow-hidden">
                <div className="container pe-0 pbmit-col-stretched-yes pbmit-col-right" ref={stretchedDivRef}>
                    <div className="row g-0">
                        <div className="col-xl-6 col-lg-12">
                            <div className="about-five-content">
                                <div className="pbmit-heading-subheading">
                                    <h2 className="pbmit-title" style={{ textTransform: 'uppercase', color: '#fff' }}>Our Best Features</h2>
                                </div>
                                <div className="accordion accordion-style-1" id="accordionExample1">
                                    <div className="accordion-item active" id="headingOne1">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1" style={{ textTransform: 'uppercase', color: '#fff' }}>
                                                B.Sc (Nursing) – 4 Years with Internship
                                            </button>
                                        </h2>
                                        <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    The B.Sc (Nursing) program spans four years and includes an internship component. Nursing practice encompasses autonomous and collaborative care of individuals of all ages, families, groups, and communities, whether sick or well and in all settings. It involves the promotion of health, prevention of illness, and the care of ill, disabled, and dying individuals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1" style={{ textTransform: 'uppercase', color: '#fff' }}>
                                                Placements at Sri Shanmugha College of Nursing
                                            </button>
                                        </h2>
                                        <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    At Sri Shanmugha College of Nursing for Women, we prioritize the professional success and career advancement of our students. Through our dedicated efforts and strong relationships with reputed hospitals across Tamil Nadu, we ensure promising placement opportunities for our graduates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1" style={{ textTransform: 'uppercase', color: '#fff' }}>
                                                Aims and Objectives
                                            </button>
                                        </h2>
                                        <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    Prepare graduates to assume responsibilities as professional, competent nurses and midwives, providing promotive, preventive, curative, and rehabilitative services. Equip nurses to make independent decisions in nursing situations, protect the rights of individuals and groups in their pursuit of health, and function effectively in hospital and community nursing services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1" style={{ textTransform: 'uppercase', color: '#fff' }}>
                                                Philosophy & History of the College
                                            </button>
                                        </h2>
                                        <div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    We, the faculty of Sri Shanmugha College of Nursing for Women, believe that our B.Sc (Nursing) 4-year program will prepare our students to meet the standards of the profession, adhere to the code of ethics, and deliver quality and cost-effective care in any setting. Our commitment is to cultivate knowledgeable, ethical, and skilled nursing professionals who can excel in diverse healthcare environments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="about-five_right">
                                <div className="row g-0 pbmit-col-stretched-right" ref={rightColRef}>
                                    <div className="col-xl-6 col-lg-12">
                                        <div className="about-five-center-box"></div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12">
                                        <div className="about-five-last-box">
                                            <div className="fid-style-bg-box">
                                                <div className="pbminfotech-ele-fid-style-11">
                                                    <div className="pbmit-fld-contents">
                                                        <div className="pbmit-sbox-icon-wrapper">
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <div className="pbmit-fld-wrap">
                                                            <h4 className="pbmit-fid-inner">
                                                                <span className="pbmit-number-rotate numinate" data-appear-animation="animateDigits" data-from="0" data-to="7" data-interval="1" data-before="" data-before-style="" data-after="" data-after-style="">7</span><span className="pbmit-fid"><sup>+</sup></span>
                                                            </h4>
                                                            <div className="pbmit-fid-title">
                                                                <span>years of excellence</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ihbox-style-20-bottom">
                                                <Swiper
                                                    modules={[Pagination, Autoplay]}
                                                    spaceBetween={30}
                                                    slidesPerView={1}
                                                    pagination={{ clickable: true }}
                                                    autoplay={false}
                                                    loop={true}
                                                    className="pbmit-element-viewtype-carousel-3"
                                                >
                                                    {/* slide 1 */}
                                                    <SwiperSlide>
                                                        <article className="pbmit-ele pbmit-miconheading-style-20">
                                                            <div className="pbmit-ihbox pbmit-ihbox-style-20">
                                                                <div className="pbmit-ihbox-box">
                                                                    <div className="pbmit-ihbox-headingicon">
                                                                        <div className="pbmit-ihbox-icon">
                                                                            <div className="pbmit-ihbox-icon-wrapper">
                                                                                <img src="/images/shanmuga/nurse.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="pbmit-ihbox-contents">
                                                                            <h2 className="pbmit-element-title">We’re educating by more than 200+ Students</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </SwiperSlide>
                                                    {/* slide 2 */}
                                                </Swiper>
                                                <img src="/images/roadmap.png" style={{ position: 'relative' }} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-md" style={{ paddingTop: '50px', paddingBottom: '10px' }}>
                <div className="container">
                    <div className="pbmit-heading-subheading text-center">
                        <h2 className="pbmit-title">GALLERY</h2>
                    </div>
                    <div className="row">
                        {/* portfolio 1 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/1.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/1.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* portfolio 2 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/2.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/2.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* portfolio 3 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/3.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/3.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        {/* portfolio 4 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/4.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/4.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* portfolio 5 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/5.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/5.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* portfolio 6 */}
                        <div className="col-sm-12 col-md-4">
                            <article className="pbmit-portfolio-style-2">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-image-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="/images/shanmuga/gallery/6.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content pbminfotech-overlay">
                                        <div className="pbminfotech-box-content-wrapper">
                                            <div className="pbminfotech-icon-box pbminfotech-media-link">
                                                <a className="pbmit-lightbox" title="" href="/images/shanmuga/gallery1/6.png">
                                                    <i className="pbmit-base-icon-plus-symbol-button"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesGallery;
