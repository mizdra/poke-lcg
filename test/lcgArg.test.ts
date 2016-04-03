/// <reference path="../typings/main.d.ts" />

'use strict';

import {
    GEN3_ARG,
    GEN3_INVERSE_ARG,
    GEN4_ARG,
    GEN4_INVERSE_ARG,
    GEN4_ALTERNATIVE_ARG,
    GEN4_ALTERNATIVE_INVERSE_ARG
} from '../';
import * as assert from 'power-assert';

describe('LCGArg', () => {
    it('GEN3_ARG', () => {
        assert.deepEqual(GEN3_ARG, {multiplier: 0x41C64E6D, increment: 0x0006073});
    });

    it('GEN3_INVERSE_ARG', () => {
        assert.deepEqual(GEN3_INVERSE_ARG, {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_ARG', () => {
        assert.deepEqual(GEN4_ARG, {multiplier: 0x41C64E6D, increment: 0x0006073});
    });

    it('GEN4_INVERSE_ARG', () => {
        assert.deepEqual(GEN4_INVERSE_ARG, {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_ALTERNATIVE_ARG', () => {
        assert.deepEqual(GEN4_ALTERNATIVE_ARG, {multiplier: 0x6C078965, increment: 0x00000001});
    });

    it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        assert.deepEqual(GEN4_ALTERNATIVE_INVERSE_ARG, {multiplier: 0x9638806d, increment: 0x69c77f93});
    });
});