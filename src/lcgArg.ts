'use strict';

export interface LCGArg {
    multiplier: number;
    increment: number;
}

export const GEN3_ARG: LCGArg                     = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});
export const GEN3_INVERSE_ARG: LCGArg             = Object.freeze({multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
export const GEN4_ARG: LCGArg                     = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});
export const GEN4_INVERSE_ARG: LCGArg             = Object.freeze({multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
export const GEN4_ALTERNATIVE_ARG: LCGArg         = Object.freeze({multiplier: 0x6C078965, increment: 0x00000001});
export const GEN4_ALTERNATIVE_INVERSE_ARG: LCGArg = Object.freeze({multiplier: 0x9638806d, increment: 0x69c77f93});