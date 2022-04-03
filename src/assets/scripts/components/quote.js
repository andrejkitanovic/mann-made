'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    const quote = $('.quote');

    if (gsap) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: quote,
            }
        });

        tl.from('.quote__box', {
            y: 50,
            delay: 0.1,
            autoAlpha: 0,
            ease: 'power2.out',
            stagger: 0.3
        });
    }
});
