'use strict';

export interface LCGArg {
    multiplier: number;
    increment: number;
}

export const GEN3_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});
export const GEN4_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});
export const GEN4_ALTERNATIVE_ARG: LCGArg = Object.freeze({multiplier: 0x6C078965, increment: 0x00000001});