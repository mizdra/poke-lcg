'use strict';

import {ILCGArg} from './lcgArg';

/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance 3 frames.
 * @param lcgArg      - The argument of LCG
 * @param initialSeed - The first term of LCG
 * @param maxFrame    - The max frame to be able to be advanced
 * @returns           - A iterator
 */
export function* generator(lcgArg: ILCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<number> {
    if (maxFrame < 0)
        throw new RangeError("Invalid maxFrame.");

    let seed: number = initialSeed;
    while (maxFrame > 0) {
        seed = Math.imul(lcgArg.multiplier, seed) + lcgArg.increment;
        maxFrame--;
        yield seed;
    }
}