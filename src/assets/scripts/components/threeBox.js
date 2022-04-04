'use strict';

import gsap from 'gsap';
// import { matchMedia } from '../helpers/media';

$(document).ready(function () {
    const threeBox = $('.three-box');

    if (gsap) {
        // if (!matchMedia('xs').matches) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: threeBox,
            }
        });

        tl.from('.three-box__box', {
            y: 30,
            delay: 0.1,
            autoAlpha: 0,
            ease: 'power2.out',
            stagger: 0.3
        });
        // }
    }
});
