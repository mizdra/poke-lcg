import { LCGArg } from './lcgArg';
/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param initialSeed   - The first term of LCG, which is treated as unsigned 32-bit integers
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns seed
 * @throws {RangeError} - `maxFrame` must be non-NaN
 */
export default function generator(lcgArg: LCGArg, initialSeed: number, maxFrame?: number): IterableIterator<number>;
