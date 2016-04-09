/// <reference path="../typings/main.d.ts" />

'use strict';

import {Uint32LCG} from '../';
import * as assert from 'power-assert';

function u32(x: number): number {
    return x >>> 0;
}

describe('ES2015', () => {
    it('Spread operator', () => {
        const g = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 3);

        const actual: number[] = [];
        for (const seed of g)
            actual.push(u32(seed));
        const expect: number[] = [0x00006073, 0xe97e7b6a, 0x52713895];

        assert.deepEqual(actual, expect);
    });
});