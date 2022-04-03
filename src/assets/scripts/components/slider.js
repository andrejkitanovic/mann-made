'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        // const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.classList.contains('swiper-container-initialized');
        const swiperInstances = {
            big:              { instance: null, init: false },
        };

        // --------  BIG SLIDER --------

        const bigSlider = document.querySelectorAll('.three-box__slider');

        function setupBigSlider () {
            for (let i = 0; i < bigSlider.length; i++) {
                if (!IsInitialized(bigSlider[i])) {
                    const id = bigSlider[i].getAttribute('data-id');
                swiperInstances.big.instance = new Swiper(bigSlider[i], { // eslint-disable-line
                        slidesPerView: 1,
                        spaceBetween: 15,
                        loop: false,
                        navigation: {
                            nextEl: `#${id} .three-slider-next`,
                            prevEl: `#${id} .three-slider-prev`
                        }
                    });
                }
            }
        }

        if (bigSlider.length > 0) {
            // if (!IsInitialized(bigSlider)) {
            setupBigSlider();
            // }
        }
    });
}
