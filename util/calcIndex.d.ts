import { LCGArg } from '../core';
/**
 * Calclate index from a initial seed to the targeted seed.
 * @param lcgArg      - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param seed        - The seed, whose index is calculated
 * @param initialSeed - The initial seed, whose index is a reference point
 * @returns           - The index from a initial seed to the targeted seed.
 */
export default function calcIndex(lcgArg: LCGArg, initialSeed: number, seed: number): number;
