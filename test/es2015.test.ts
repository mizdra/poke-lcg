/// <reference path="../typings/main.d.ts" />

'use strict';

import {generator, GEN3_ARG} from '../';
import * as assert from 'power-assert';

describe('ES2015', () => {
    it('Spread operator', () => {
        const g = generator(GEN3_ARG, 0x00000000, 3);
        const actual = [...g];
        const expect = [0x00006073, 0xe97e7b6a, 0x52713895];
        assert.deepEqual(actual, expect);
    });
});