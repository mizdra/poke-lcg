import { LCGArg } from '../core';
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
 */
export default function calcSkippingLCGArg(lcgArg: LCGArg, skip: number): LCGArg;
