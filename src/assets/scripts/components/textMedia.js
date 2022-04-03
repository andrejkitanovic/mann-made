'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    const textMedia = $('.text-media');

    if (gsap) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: textMedia,
            }
        });

        tl.from('.text-media__text', {
            y: 30,
            delay: 0.1,
            autoAlpha: 0,
            ease: 'power2.out'
        });

        tl.from('.text-media__button', {
            y: 30,
            autoAlpha: 0,
            ease: 'power2.out'
        });
    }
});
