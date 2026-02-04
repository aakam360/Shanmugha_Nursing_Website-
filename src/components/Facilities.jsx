import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Facilities = () => {
    return (
        <section className="section-lg_tb" style={{ paddingTop: '66px', paddingBottom: '48px' }}>
            <div className="container">
                <div className="pbmit-heading-subheading text-center">
                    <h2 className="pbmit-title">OUR FACILITIES</h2>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={false}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pbmit-element-viewtype-carousel-4"
                >
                    {/* slide 1 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/1.png" className="img-fluid" alt="Library" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>LIBRARY</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 2 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/2.png" className="img-fluid" alt="Classroom" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>CLASSROOM</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 3 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/4.png" className="img-fluid" alt="Transport" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>TRANSPORT</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 4 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/5.png" className="img-fluid" alt="Laboratory" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>LABORATORY</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 5 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/3.png" className="img-fluid" alt="Hostel" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>HOSTEL</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 6 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/6.png" className="img-fluid" alt="Infrastructure" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>INFRASTRUCTURE</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    {/* slide 7 */}
                    <SwiperSlide>
                        <article className="pbmit-service-style-4">
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-service-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        <img src="/images/shanmuga/facilities/7.png" className="img-fluid" alt="Center of Excellence" />
                                    </div>
                                    <div className="pbmit-service-cat">
                                        <h4>CENTER OF EXCELLENCE</h4>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Facilities;
