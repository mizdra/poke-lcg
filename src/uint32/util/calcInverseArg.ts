'use strict';

import {LCGArg} from '../core';
import toUint32 from '../internal/toUint32';

/**
 * Calculates the inverse argument of LCG.
 * @param lcgArg - The regular argument of LCG
 * @returns      - The inverse argument of LCG
 */
export default function calcInverseArg(lcgArg: LCGArg): LCGArg {
    let inverseArg: LCGArg = {multiplier: 0, increment: 0};
    const mask = 0xFFFFFFFF;

    inverseArg.multiplier = toUint32(calcPow(lcgArg.multiplier, mask >>> 1, mask));
    inverseArg.increment  = toUint32(~Math.imul(inverseArg.multiplier, lcgArg.increment) + 1);

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