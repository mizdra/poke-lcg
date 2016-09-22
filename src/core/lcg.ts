import {LCGArg} from './lcgArg';
import toUint32 from '../internal/toUint32';

/**
 * Calculates random numbers by LCG
 */
export default class LCG implements Iterator<number> {
    private multiplier: number;
    private increment: number;
    private seed: number;
    private maxFrame: number;
    private index: number;

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
        if (Number.isNaN(maxFrame)) throw new RangeError("Invalid maxFrame.");

        this.multiplier = toUint32(lcgArg.multiplier);
        this.increment  = toUint32(lcgArg.increment);
        this.seed       = initialSeed;
        this.maxFrame   = maxFrame;
        this.index      = 0;
    }

    /**
     * Calculates next seed
     * @param frame                     - The advanced frame, which is default 1
     * @return {IteratorResult<number>} - The iterator result included a seed
     */
    next(frame: number = 1): IteratorResult<number> {
        if (this.index >= this.maxFrame) return {done: true};

        for (let i = 0; i < frame; i++) {
            this.seed = toUint32(
                Math.imul(this.multiplier, this.seed) + this.increment
            );
            this.index++;
        }
        return {value: this.seed, done: false};
    }
}