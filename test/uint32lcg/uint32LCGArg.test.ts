/// <reference path="../../typings/main.d.ts" />

'use strict';

import {Uint32LCG} from '../../';
import * as assert from 'power-assert';

describe('Uint32LCGArg', () => {
    it('GEN3_ARG', () => {
        const actual = Uint32LCG.GEN3_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('GEN3_INVERSE_ARG', () => {
        const actual = Uint32LCG.GEN3_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_ARG', () => {
        const actual = Uint32LCG.GEN4_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_INVERSE_ARG', () => {
        const actual = Uint32LCG.GEN4_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_ALTERNATIVE_ARG', () => {
        const actual = Uint32LCG.GEN4_ALTERNATIVE_ARG;
        const expect = {multiplier: 0x6C078965, increment: 0x00000001};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        const actual = Uint32LCG.GEN4_ALTERNATIVE_INVERSE_ARG;
        const expect = {multiplier: 0x9638806d, increment: 0x69c77f93};
        assert.deepEqual(actual, expect);
    });
});