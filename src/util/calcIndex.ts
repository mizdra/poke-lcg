import {LCGArg} from '../core';
import toUint32 from '../internal/toUint32';

/**
 * Calclate index from a initial seed 0x00000000 to the targeted seed.
 * This function is based on http://d.hatena.ne.jp/oupo/20150128/1422413218 (author: oupo)
 * @param lcgArg - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param seed   - The seed, whose index is calculated
 * @returns      - The index from a initial seed 0x00000000 to seed
 */
function calcIndexFrom0(lcgArg: LCGArg, seed: number) {
    return (function _calcIndexFrom0(a: number, b: number, seed: number, k: number): number {
        if (k === 0) {
	    	return 0;
	    } else if ((seed & 1) === 0) {
		    return toUint32(Math.imul(_calcIndexFrom0(
                toUint32(Math.imul(a, a)),
                toUint32(Math.imul(a + 1, b) / 2),
                toUint32(seed / 2),
                k - 1
            ), 2));
	    } else {
		    return toUint32(Math.imul(_calcIndexFrom0(
                toUint32(Math.imul(a, a)),
                toUint32(Math.imul(a + 1, b) / 2),
                toUint32((Math.imul(a, seed) + b) / 2),
                k - 1
            ), 2) - 1);
	    }
    })(lcgArg.multiplier, lcgArg.increment, seed, 32);
}

/**
 * Calclate index from a initial seed to the targeted seed.
 * @param lcgArg      - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param seed        - The seed, whose index is calculated
 * @param initialSeed - The initial seed, whose index is a reference point
 * @returns           - The index from a initial seed to the targeted seed.
 */
export default function calcIndex(lcgArg: LCGArg, initialSeed: number, seed: number) {
    return calcIndexFrom0(lcgArg, seed) - calcIndexFrom0(lcgArg, initialSeed);
}