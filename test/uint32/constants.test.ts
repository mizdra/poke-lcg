/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import {
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG
} from '../../uint32/constant';
import * as assert from 'power-assert';

describe('constant', () => {
    it('constant.GEN3_ARG', () => {
        const actual = GEN3_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('constant.GEN3_INVERSE_ARG', () => {
        const actual = GEN3_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('constant.GEN4_ARG', () => {
        const actual = GEN4_ARG;
        const expect = {multiplier: 0x41C64E6D, increment: 0x0006073};
        assert.deepEqual(actual, expect);
    });

    it('constant.GEN4_INVERSE_ARG', () => {
        const actual = GEN4_INVERSE_ARG;
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('constant.GEN4_ALTERNATIVE_ARG', () => {
        const actual = GEN4_ALTERNATIVE_ARG;
        const expect = {multiplier: 0x6C078965, increment: 0x00000001};
        assert.deepEqual(actual, expect);
    });

    it('constant.GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        const actual = GEN4_ALTERNATIVE_INVERSE_ARG;
        const expect = {multiplier: 0x9638806d, increment: 0x69c77f93};
        assert.deepEqual(actual, expect);
    });
});