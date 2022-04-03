'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    const heroText = $('.hero__text');
    const hero = $('.hero');

    if (gsap) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
            }
        });

        tl.from(heroText, {
            y: 30,
            delay: 0.1,
            autoAlpha: 0,
            ease: 'power2.out'
        });

        tl.from('.hero__button', {
            y: 30,
            autoAlpha: 0,
            ease: 'power2.out'
        });
    }
});
