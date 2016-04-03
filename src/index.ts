'use strict';

import "babel-polyfill";

export {generator} from './generator';
export {
    LCGArg,
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG
} from './lcgArg';
export {calcInverseArg} from './calcInverseArg';