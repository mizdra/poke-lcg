/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

'use strict';

export interface LCGArg {
    multiplier: number;
    increment: number;
}

export const GEN3_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});
export const GEN4_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});
export const GEN4_ALTERNATIVE_ARG: LCGArg = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});

export function* generator(lcgArg: LCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<number> {
    if (maxFrame < 0) {
        throw new RangeError("Invalid maxFrame.");
    }

    let seed: number           = initialSeed;
    let advancingFrame: number = treatSentFrame(undefined);
    // let advancingFrame: number = treatSentFrame(function.sent);

    while (maxFrame > 0) {
        seed = u32(mul(lcgArg.multiplier, seed) + lcgArg.increment);

        advancingFrame--;
        maxFrame--;

        if (advancingFrame === 0) {
            advancingFrame = treatSentFrame(yield seed);
        }
    }
}

function treatSentFrame (sentFrame: number = 1): number {
    if (sentFrame < 1) {
        throw new RangeError("Invalid arguments of Generator.prototype.next.");
    }
    return sentFrame;
}


function u32(x: number): number {
    return x >>> 0;
}

function mul(a: number, b: number): number {
	const a1 = a >>> 16, a2 = a & 0xffff;
	const b1 = b >>> 16, b2 = b & 0xffff;
	return u32(((a1 * b2 + a2 * b1) << 16) + a2 * b2);
}