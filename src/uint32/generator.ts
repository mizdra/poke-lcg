'use strict';

import {LCGArg} from './lcg';
import toUint32 from './internal/toUint32';

/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance 3 frames.
 * @param lcgArg        - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param initialSeed   - The first term of LCG, which is treated as unsigned 32-bit integers
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator
 * @throws {RangeError} - `maxFrame` must be non-NaN
 */
export function generator(lcgArg: LCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<GeneratorResult> {
    if (Number.isNaN(maxFrame)) throw new RangeError("Invalid maxFrame.");

    return (function* (): IterableIterator<GeneratorResult> {
        const multiplier = toUint32(lcgArg.multiplier);
        const increment  = toUint32(lcgArg.increment);
        let seed         = toUint32(initialSeed);
        let index        = 0;

        while (index < maxFrame) {
            seed = toUint32(Math.imul(multiplier, seed) + increment);
            index++;
            yield {seed, index};
        }
    })();
}

/**
 * The interface of `generator` return value
 */
export interface GeneratorResult {
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