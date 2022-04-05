/* eslint no-undef: 0 */

import gsap from 'gsap';

$(document).ready(function () {
    const heroText = $('.hero__text');
    const hero = $('.hero');
    const playBtn = $('.hero .play-icon');
    const videoModal = $('.video-modal');
    // const video = document.querySelector('.video-modal video');
    const videoModalClose = $('.video-modal__close');

    console.log('dwaidbwaio');

    if (playBtn.length && videoModalClose.length) {
        $(playBtn).click(function () {
            $(videoModal).addClass('active');
        });

        $(videoModalClose).click(function () {
            $(videoModal).hasClass('active') && $(videoModal).removeClass('active');
            // video && video.pause();

            for (var i = 0; i < VidyardV4.players.length; i++) {
                VidyardV4.players[i].pause();
            }
        });
    }

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
