'use strict';

import breakpoints from '../../styles/01-framework/bootstrap/_grid.scss';

const matchMedia = (breakpoint) => {
    let width = breakpoints[breakpoint];

    if (width) {
        return window.matchMedia(`(max-width: ${width})`);
    } else {
        throw new Error(`No breakpoint: ${breakpoint} found`);
    }
};

export { matchMedia };
