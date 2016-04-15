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
 * @param seed      - A number
 * @param maxLength - The length of a hex string
 * @returns         - The hex string, which is specified length 
 */
export function toHexString(num: number, maxLength: number): string {
    const hex = num.toString(16);

    // Write comment
    return hex.padStart(maxLength, '0').substr(-maxLength, maxLength);
}