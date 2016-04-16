'use strict';

declare global {
    interface String {
        padStart(maxLength: number, fillString?: string): string;
    }
}

/**
 * Converts seeed to random, which is the upper 16 bits of a seed.
 * @param seed - A seed
 * @returns    - The random to be converted
 */
export function toRandom(seed: number): number {
    return seed >>> 16;
}

/**
 * Converts a number to a hex string.
 * @example
 * Uint32LCG.toHexString(0x12345678  , 8); // '12345678'
 * Uint32LCG.toHexString(0xAB12345678, 8); // '12345678'
 * Uint32LCG.toHexString(0x1234      , 8); // '00001234'
 * Uint32LCG.toHexString(0x1234      , 2); // '34'
 * Uint32LCG.toHexString(0x1234      , 0); // ''
 * @param seed      - A number
 * @param maxLength - The length of a hex string
 * @returns         - The hex string, which is specified length 
 */
export function toHexString(num: number, maxLength: number): string {
    const hex = num.toString(16);
    return hex.padStart(maxLength, '0').substr(-maxLength, maxLength);
}