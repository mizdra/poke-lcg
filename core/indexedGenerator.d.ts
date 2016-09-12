import { LCGArg } from './lcgArg';
/**
 * The indexed generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG
 * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns {@link IndexedGeneratorResult}
 * @throws {RangeError} - `skip` must not be NaN
 */
export default function indexedGenerator(lcgArg: LCGArg, initialSeed: number, maxFrame?: number): IterableIterator<IndexedGeneratorResult>;
/**
 * The interface of {@link indexedGenerator#next} return value
 */
export interface IndexedGeneratorResult {
    /**
     * The index of LCG, which is the number of times that {@link indexedGenerator#next} is called'.
     * If {@link indexedGenerator#next} is called twice, the index is 2.
     */
    index: number;
    /**
     * The seed of LCG, which is an unsigned 32-bit integer.
     */
    seed: number;
}
