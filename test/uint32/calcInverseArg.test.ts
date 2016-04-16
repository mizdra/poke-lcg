/// <reference path="../../typings/main.d.ts" />

'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

function u32(lcgArg: Uint32LCG.ILCGArg): Uint32LCG.ILCGArg {
    return {
        multiplier: lcgArg.multiplier >>> 0,
        increment: lcgArg.increment >>> 0
    };
}

describe('calcInverseArg', () => {
    it('GEN3_INVERSE_ARG', () => {
        const actual = u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN3_ARG));
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_INVERSE_ARG', () => {
        const actual = u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN4_ARG));
        const expect = {multiplier: 0xeeb9eb65, increment: 0x0a3561a1};
        assert.deepEqual(actual, expect);
    });

    it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        const actual = u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN4_ALTERNATIVE_ARG));
        const expect = {multiplier: 0x9638806d, increment: 0x69c77f93};
        assert.deepEqual(actual, expect);
    });
});