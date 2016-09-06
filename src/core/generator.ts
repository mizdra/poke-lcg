import {LCGArg} from './lcgArg';
import toUint32 from '../internal/toUint32';

/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param initialSeed   - The first term of LCG, which is treated as unsigned 32-bit integers
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns seed
 * @throws {RangeError} - `maxFrame` must be non-NaN
 */
export default function generator(lcgArg: LCGArg, initialSeed: number, maxFrame: number = Infinity): IterableIterator<number> {
    if (Number.isNaN(maxFrame)) throw new RangeError("Invalid maxFrame.");

    return (function* (): IterableIterator<number> {
        const multiplier = toUint32(lcgArg.multiplier);
        const increment  = toUint32(lcgArg.increment);
        let seed         = toUint32(initialSeed);
        let index        = 0;

        while (index < maxFrame) {
            seed = toUint32(Math.imul(multiplier, seed) + increment);
            index++;
            yield seed;
        }
    })();
}