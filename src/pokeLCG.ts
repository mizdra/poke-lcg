'use strict';

export const GEN3_ARG: LCGArg = {};
export const GEN4_ARG: LCGArg = {};
export const GEN4_ALTERNATIVE_ARG: LCGArg = {};

export function* generator(lcgArg: LCGArg, initialSeed: number, maxFrame?: number): Iterable<number> {
    yield 0;
}

export interface LCGArg {
}