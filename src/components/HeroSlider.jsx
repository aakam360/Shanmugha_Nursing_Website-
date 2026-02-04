import React, { useEffect } from 'react';

const HeroSlider = () => {
    // Note: The revolution slider script is loaded globally in index.html.
    // Ideally, we should initialize it here if it's not auto-initialized.
    // However, the original code relies on global scripts.

    return (
        <div className="pbmit-slider-area">
            {/* START Slider Demo 2 REVOLUTION SLIDER 6.5.24 */}
            <p className="rs-p-wp-fix"></p>
            <rs-module-wrap id="rev_slider_2_1_wrapper" data-alias="slider-demo-2" data-source="gallery" style={{ visibility: 'hidden', background: 'transparent', padding: 0, margin: '0px auto', marginTop: 0, marginBottom: 0 }}>
                <rs-module id="rev_slider_2_1" data-version="6.5.24">
                    <rs-slides>
                        <rs-slide style={{ position: 'absolute' }} data-key="rs-3" data-title="Slide" data-thumb="/assets/slide-b-01-50x100.jpg" data-in="o:0;" data-out="a:false;">
                            <img src="/images/shanmuga/b1.png" alt="" title="slide-b-01.jpg" width="1920" height="790" className="rev-slidebg tp-rs-img" data-no-retina />
                        </rs-slide>
                        <rs-slide style={{ position: 'absolute' }} data-key="rs-4" data-title="Slide" data-thumb="/assets/slide-b-02-50x100.jpg" data-in="o:0;" data-out="a:false;">
                            <img src="/images/shanmuga/b2.png" alt="" title="slide-b-02.jpg" width="1920" height="790" className="rev-slidebg tp-rs-img" data-no-retina />
                        </rs-slide>
                    </rs-slides>
                </rs-module>
            </rs-module-wrap>
            {/* END REVOLUTION SLIDER */}
        </div>
    );
};

export default HeroSlider;
