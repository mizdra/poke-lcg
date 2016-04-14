'use strict';

/**
 * The interface of LCG argument
 */
export interface IUint32LCGArg {
    multiplier: number;
    increment: number;
}

/**
 * The argument of LCG in Gen 3
 */
export const GEN3_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});

/**
 * The inverse argument of LCG in Gen 3
 */
export const GEN3_INVERSE_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0xeeb9eb65, increment: 0x0a3561a1});

/**
 * The argument of LCG in Gen 4
 */
export const GEN4_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0x41C64E6D, increment: 0x00006073});

/**
 * The inverse argument of LCG in Gen 4
 */
export const GEN4_INVERSE_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0xeeb9eb65, increment: 0x0a3561a1});

/**
 * The argument of alternative LCG in Gen 4
 */
export const GEN4_ALTERNATIVE_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0x6C078965, increment: 0x00000001});

/**
 * The inverse argument of alternative LCG in Gen 4
 */
export const GEN4_ALTERNATIVE_INVERSE_ARG: IUint32LCGArg
    = Object.freeze({multiplier: 0x9638806d, increment: 0x69c77f93});