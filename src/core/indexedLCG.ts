import {LCGArg} from './lcgArg';
import LCG from './lcg';

/**
 * Calculates random numbers by LCG.
 * This returns seeds and index numbers.
 */
export default class IndexedLCG implements Iterator<IndexedGeneratorResult> {
    private index: number;
    private lcg: LCG;

    /**
     * If `maxFrame` is 3, you can advance a maximum of 3 frames.
     * @param lcgArg        - The argument of LCG
     * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
     * @param maxFrame      - The max frame to be able to be advanced
     * @throws {RangeError} - `maxFrame` must not be NaN
     */
    constructor(
        lcgArg: LCGArg,
        initialSeed: number,
        maxFrame: number = Infinity
    ) {
        this.lcg   = new LCG(lcgArg, initialSeed, maxFrame);
        this.index = 0;
    }

    /**
     * Calculates next seed
     * @param frame - The advanced frame, which is default 1
     * @return {IteratorResult<IndexedGeneratorResult>}
     *     - The iterator result included a seed and index number
     */
    next(frame: number = 1): IteratorResult<IndexedGeneratorResult> {
        const result = this.lcg.next(frame);
        this.index += frame;
        return {
            value: {
                seed: result.value,
                index: this.index
            },
            done: result.done
        };
    }
}

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