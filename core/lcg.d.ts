import { LCGArg } from './lcgArg';
/**
 * Calculates random numbers by LCG
 */
export default class LCG implements Iterator<number> {
    private multiplier;
    private increment;
    private seed;
    private maxFrame;
    private index;
    /**
     * If `maxFrame` is 3, you can advance a maximum of 3 frames.
     * @param lcgArg        - The argument of LCG
     * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
     * @param maxFrame      - The max frame to be able to be advanced
     * @throws {RangeError} - `maxFrame` must not be NaN
     */
    constructor(lcgArg: LCGArg, initialSeed: number, maxFrame?: number);
    /**
     * Calculates next seed
     * @param frame                     - The advanced frame, which is default 1
     * @return {IteratorResult<number>} - The iterator result included a seed
     */
    next(frame?: number): IteratorResult<number>;
}
