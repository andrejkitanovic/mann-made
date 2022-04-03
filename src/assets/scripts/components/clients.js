'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    const clients = $('.clients');

    if (gsap) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: clients,
            }
        });

        tl.from('.clients__image', {
            y: 30,
            delay: 0.1,
            autoAlpha: 0,
            ease: 'power2.out',
            stagger: 0.2
        });
    }
});
