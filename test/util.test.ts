/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/power-assert/index.d.ts" />

'use strict';

import {calcIndex, calcSkippingLCGArg, calcInverseArg, toRandom} from '../util';
import {GEN3_ARG, GEN4_ARG, GEN4_ALTERNATIVE_ARG} from '../constant';
import * as assert from 'power-assert';

describe('util', () => {
    describe('calcIndex', () => {
        const fn = (seed => calcIndex(GEN3_ARG, 0x00000000, seed));
        it('`index` is even number', () => {
            assert(fn(0xE97E7B6A) === 2);
        });

        it('`index` is odd number', () => {
            assert(fn(0x00006073) === 1);
        });

        it('`index` is 0', () => {
            assert(fn(0x00000000) === 0);
        });

        it('`index` is 0xFFFFFFFF', () => {
            assert(fn(0x0A3561A1) === 0xFFFFFFFF);
        });

        it('NaN', () => {
            assert(calcIndex(
                {multiplier: NaN, increment: 0},
                0x00000000,
                0x00000000
            ) === 0);
            assert(calcIndex(
                {multiplier: 0, increment: NaN},
                0x00000000,
                0x00000000
            ) === 0);
            assert(calcIndex(GEN3_ARG, NaN, 0x00000000) === 0);
            assert(calcIndex(GEN3_ARG, 0x00000000, NaN) === 0);
        });
    });

    describe('calcInverseArg', () => {
        it('GEN3_INVERSE_ARG', () => {
            const actual = calcInverseArg(GEN3_ARG);
            const expect = {multiplier: 0xEEB9EB65, increment: 0x0A3561A1};
            assert.deepEqual(actual, expect);
        });

        it('GEN4_INVERSE_ARG', () => {
            const actual = calcInverseArg(GEN4_ARG);
            const expect = {multiplier: 0xEEB9EB65, increment: 0x0A3561A1};
            assert.deepEqual(actual, expect);
        });

        it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
            const actual = calcInverseArg(GEN4_ALTERNATIVE_ARG);
            const expect = {multiplier: 0x9638806D, increment: 0x69C77F93};
            assert.deepEqual(actual, expect);
        });
    });

    describe('calcSkippingLCGArg', () => {
        it('LCGArg of Teachy TV', () => {
            const actual = calcSkippingLCGArg(GEN3_ARG, 313);
            const expect = {multiplier: 0x4A9EEACD, increment: 0x63FD404B};
            assert.deepEqual(actual, expect);
        });

        it('`skip` is not NaN', () => {
            assert.throws(() => calcSkippingLCGArg(GEN3_ARG, NaN), RangeError);
        });
    });

    it('toRandom', () => {
        assert(toRandom(0x12345678 ) === 0x1234);
        assert(toRandom(0x100000000) === 0x0000);
    });
});