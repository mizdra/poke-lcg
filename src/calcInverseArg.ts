'use strict';

import {LCGArg} from './lcgArg';

export function calcInverseArg(lcgArg: LCGArg): LCGArg {
    let inverseArg: LCGArg = {multiplier: 0, increment: 0};
    const mask = 0xFFFFFFFF;

    inverseArg.multiplier = calcPow(lcgArg.multiplier, mask >>> 1, mask);
    inverseArg.increment  = ~Math.imul(inverseArg.multiplier, lcgArg.increment) + 1;

    return inverseArg;
}

function calcPow(a: number, n: number, mask: number): number {
    return n === 0 ? 1 :
        Math.imul((n & 1 ? a : 1), calcPow(Math.imul(a, a) & mask, n >>> 1, mask));
}