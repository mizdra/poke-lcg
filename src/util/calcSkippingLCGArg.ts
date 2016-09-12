import {LCGArg} from '../core';
import toUint32 from '../internal/toUint32';

/**
 * Calculates the argument of LCG to advance `skip` indexes when next() is called.
 * 
 * @example
 * const g1 = generator(GEN3_ARG                       , 0x00000000, 4);
 * const g2 = generator(calcSkippingLCGArg(GEN3_ARG, 2), 0x00000000, 2);
 * console.log([...g1]); // ['0x6073', '0xE97E7B6A', '0x52713895', '0x31B0DDE4']
 * console.log([...g2]); // [          '0xE97E7B6A',               '0x31B0DDE4']
 * 
 * @param lcgArg - The regular argument of LCG
 * @param skip   - The number of indexes to be advanced when next() is called
 * @returns      - The argument of LCG to advance `skip` indexes when next() is called
 * @throws {RangeError} - `skip` must not be NaN
 */
export default function calcSkippingLCGArg(lcgArg: LCGArg, skip: number): LCGArg {
    if (Number.isNaN(skip)) throw new RangeError("Invalid skip.");

    /**
     * Caclulated by the method of least squares.
     * seed[n + 1] = (seed[n] * a + b) % 0x100000000
     * seed[n + k] = (seed[n] * a^k
     *                + a^(k-1) * b + a^(k-2) * b + ... + ab + b
     *               ) % 0x100000000
     * c = a^k
     * d = a^(k-1) * b + a^(k-2) * b + ... + ab + b
     */
    let a = lcgArg.multiplier, b = lcgArg.increment;
    let c = 1, d = 0;
    while (skip) {
        if (skip & 1) {
            d = toUint32(Math.imul(d, a) + b);
            c = Math.imul(c, a);
        }
        b = toUint32(Math.imul(b, a) + b);
        a = Math.imul(a, a);
        skip = skip >>> 1;
    }
    return {multiplier: toUint32(c), increment: toUint32(d)};
}