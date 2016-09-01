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
export function* generator(lcgArg: ILCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<ILCGResult> {
    if (maxFrame < 0) throw new RangeError("Invalid maxFrame.");

    let index = 0;
    let seed = initialSeed;

    while (index < maxFrame) {
        seed = u32(Math.imul(lcgArg.multiplier, seed) + lcgArg.increment);
        index++;
        yield {seed, index};
    }
}

/**
 * The interface of LCG return value
 */
export interface ILCGResult {
    /**
     * The index of LCG, which is the distance from a initial seed.
     * If IterableIterator#next() is called twice, index is 2.
     */
    index: number;

    /**
     * The seed of LCG, which is unsigned 32-bit integer.
     */
    seed: number;
}