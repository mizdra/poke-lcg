import { LCGArg } from './lcgArg';
/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG
 * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns seed
 * @throws {RangeError} - `skip` must not be NaN
 */
export default function generator(lcgArg: LCGArg, initialSeed: number, maxFrame?: number): IterableIterator<number>;
