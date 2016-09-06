/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import {calcInverseArg, toRandom} from '../../uint32/util';
import {GEN3_ARG, GEN4_ARG, GEN4_ALTERNATIVE_ARG} from '../../uint32/constant';
import * as assert from 'power-assert';

describe('util', () => {
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

    it('toRandom', () => {
        assert(toRandom(0x12345678 ) === 0x1234);
        assert(toRandom(0x100000000) === 0x0000);
    });
});