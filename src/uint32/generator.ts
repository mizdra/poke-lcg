'use strict';

import {ILCGArg} from './lcg';
import {u32} from './util';

/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance 3 frames.
 * @param lcgArg        - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param initialSeed   - The first term of LCG, which is treated as unsigned 32-bit integers
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator
 * @throws {RangeError} - `maxFrame` must be non-NaN
 */
export function generator(lcgArg: ILCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<ILCGResult> {
    if (Number.isNaN(maxFrame)) throw new RangeError("Invalid maxFrame.");

    return (function* (): IterableIterator<ILCGResult> {
        const multiplier = u32(lcgArg.multiplier);
        const increment  = u32(lcgArg.increment);
        let seed         = u32(initialSeed);
        let index        = 0;

        while (index < maxFrame) {
            seed = u32(Math.imul(multiplier, seed) + increment);
            index++;
            yield {seed, index};
        }
    })();
}

/**
 * The interface of LCG return value
 */
export interface ILCGResult {
    /**
     * The index of LCG, which is the number of times that `generator#next()` is called'.
     * If IterableIterator#next() is called twice, index is 2.
     */
    index: number;

    /**
     * The seed of LCG, which is unsigned 32-bit integer.
     */
    seed: number;
}