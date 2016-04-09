'use strict';

import {generator} from './generator';
import {
    Uint32LCGArg,
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG
} from './uint32LCGArg';
import {calcInverseArg} from './calcInverseArg';

export const Uint32LCG = {
    generator,
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG,
    calcInverseArg
};
export type Uint32LCGArg = Uint32LCGArg;