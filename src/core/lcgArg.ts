/** The interface of LCG argument */
export interface LCGArg {
    /** The multiplier of LCG, which is treated as an unsigned 32-bit integer */
    multiplier: number;

    /** The increment of LCG, which is treated as an unsigned 32-bit integer */
    increment: number;
}