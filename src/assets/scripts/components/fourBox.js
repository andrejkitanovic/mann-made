'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    const fourBox = $('.four-boxes');

    if (gsap) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: fourBox,
            }
        });

        tl.from('.four-boxes__box-name', {
            y: 30,
            autoAlpha: 0,
            // stagger: 0.3,
            ease: 'power2.out'
        });

        tl.from('.four-boxes__box-description', {
            y: 30,
            autoAlpha: 0,
            // stagger: 0.3,
            ease: 'power2.out'
        });

        tl.from('.four-boxes__image-holder svg', {
            y: -50,
            autoAlpha: 0,
            stagger: 0.3,
            ease: 'power2.out'
        });
    }
});
