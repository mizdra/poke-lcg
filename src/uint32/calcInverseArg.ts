'use strict';

import {ILCGArg} from './lcgArg';

/**
 * Calculates the inverse argument of LCG.
 * @param lcgArg - The regular argument of LCG
 * @returns      - The inverse argument of LCG
 */
export function calcInverseArg(lcgArg: ILCGArg): ILCGArg {
    let inverseArg: ILCGArg = {multiplier: 0, increment: 0};
    const mask = 0xFFFFFFFF;

    inverseArg.multiplier = calcPow(lcgArg.multiplier, mask >>> 1, mask);
    inverseArg.increment  = ~Math.imul(inverseArg.multiplier, lcgArg.increment) + 1;

    return inverseArg;
}

/**
 * Returns a specified number raised to the specified power.
 * @param a    - The base number
 * @param n    - The exponent used to raise the base
 * @param mask - The mask to filter number
 * @returns    - The number a raised to the power n and filtered with mask
 */
function calcPow(a: number, n: number, mask: number): number {
    return n === 0 ? 1 :
        Math.imul((n & 1 ? a : 1), calcPow(Math.imul(a, a) & mask, n >>> 1, mask));
}