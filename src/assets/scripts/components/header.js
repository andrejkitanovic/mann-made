'use strict';

$(document).ready(function () {
    const hamburger = $('.header__hamburger');
    const dropdown = $('.header__dropdown');

    $(hamburger).click(function () {
        $(this).toggleClass('open');
        $(dropdown).toggleClass('open');
    });
});
