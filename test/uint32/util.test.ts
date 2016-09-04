/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

describe('util', () => {
    describe('calcInverseArg', () => {
        it('GEN3_INVERSE_ARG', () => {
            const actual = Uint32LCG.util.calcInverseArg(Uint32LCG.constants.GEN3_ARG);
            const expect = {multiplier: 0xEEB9EB65, increment: 0x0A3561A1};
            assert.deepEqual(actual, expect);
        });

        it('GEN4_INVERSE_ARG', () => {
            const actual = Uint32LCG.util.calcInverseArg(Uint32LCG.constants.GEN4_ARG);
            const expect = {multiplier: 0xEEB9EB65, increment: 0x0A3561A1};
            assert.deepEqual(actual, expect);
        });

        it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
            const actual = Uint32LCG.util.calcInverseArg(Uint32LCG.constants.GEN4_ALTERNATIVE_ARG);
            const expect = {multiplier: 0x9638806D, increment: 0x69C77F93};
            assert.deepEqual(actual, expect);
        });
    });

    it('toRandom', () => {
        assert(Uint32LCG.util.toRandom(0x12345678 ) === 0x1234);
        assert(Uint32LCG.util.toRandom(0x100000000) === 0x0000);
    });
});