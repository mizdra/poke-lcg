/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

describe('constants', () => {
    it('constants.GEN3_ARG', () => {
        const actual = Uint32LCG.constants.GEN3_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('constants.GEN3_INVERSE_ARG', () => {
        const actual = Uint32LCG.constants.GEN3_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('constants.GEN4_ARG', () => {
        const actual = Uint32LCG.constants.GEN4_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('constants.GEN4_INVERSE_ARG', () => {
        const actual = Uint32LCG.constants.GEN4_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('constants.GEN4_ALTERNATIVE_ARG', () => {
        const actual = Uint32LCG.constants.GEN4_ALTERNATIVE_ARG;
        const expect = {multiplier: 0x6C078965, increment: 0x00000001};
        assert.deepEqual(actual, expect);
    });

    it('constants.GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        const actual = Uint32LCG.constants.GEN4_ALTERNATIVE_INVERSE_ARG;
        const expect = {multiplier: 0x9638806d, increment: 0x69c77f93};
        assert.deepEqual(actual, expect);
    });
});