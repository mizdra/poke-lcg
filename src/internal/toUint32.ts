'use strict';

/**
 * Cast a unsighed 32-bit integer.
 * @param num - A number
 * @returns   - A unsighed 32-bit integer
 */
export default function toUint32(num: number): number {
    return num >>> 0;
}