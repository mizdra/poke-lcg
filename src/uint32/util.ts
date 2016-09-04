'use strict';

/**
 * Cast a unsighed 32-bit integer.
 * @param num - A number
 * @returns    - A unsighed 32-bit integer
 */
export function u32(num: number): number {
    return num >>> 0;
}

/**
 * Converts seeed to random, which is the upper 16 bits of a seed.
 * @param seed - A seed
 * @returns    - The random to be converted
 */
export function toRandom(seed: number): number {
    return seed >>> 16;
}