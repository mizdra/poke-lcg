'use strict';

import {ILCGArg} from './lcgArg';
import {u32} from './util';

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
        seed = u32(Math.imul(lcgArg.multiplier, seed) + lcgArg.increment);
        maxFrame--;
        yield seed;
    }
}