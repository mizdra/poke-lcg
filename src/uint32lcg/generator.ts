/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />

'use strict';

import {IUint32LCGArg} from './uint32LCGArg';

/**
 * The generator for LCG.
 * When Generator.prototype.next(n) is called, n frames is advanced. (By default, n is 1.)
 * If maxFrame is 3, you can advance 3 frames.
 * @param lcgArg      - The argument of LCG
 * @param initialSeed - The first term of LCG
 * @param maxFrame    - The max frame to be able to be advanced
 * @returns           - A iterator
 */
export function* generator(lcgArg: IUint32LCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<number> {
    if (maxFrame < 0)
        throw new RangeError("Invalid maxFrame.");

    let seed: number           = initialSeed;
    let advancingFrame: number = treatSentFrame(undefined);
    // let advancingFrame: number = treatSentFrame(function.sent);

    while (maxFrame > 0) {
        seed = Math.imul(lcgArg.multiplier, seed) + lcgArg.increment;

        advancingFrame--;
        maxFrame--;

        if (advancingFrame === 0)
            advancingFrame = treatSentFrame(yield seed);
    }
}

/**
 * Treats sentFrame as 1 if sentFrame is undefined.
 * Throw RangeError if sentFrame is less than 1.
 * @param sentFrame - The frame to be treated
 * @returns         - Treated sentFrame
 */
function treatSentFrame (sentFrame: number = 1): number {
    if (sentFrame < 1)
        throw new RangeError("Invalid arguments of Generator.prototype.next.");
    return sentFrame;
}