/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

'use strict';

export const GEN3_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});
export const GEN4_ARG: LCGArg             = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});
export const GEN4_ALTERNATIVE_ARG: LCGArg = Object.freeze({multiplier: 0x41C64E6D, increment: 0x6073});

export function* generator(lcgArg: LCGArg, initialSeed: number, maxFrame?: number): Iterable<number> {
    yield 0;
}

export interface LCGArg {
    multiplier: number;
    increment: number;
}