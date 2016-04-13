/// <reference path="../../typings/main.d.ts" />

'use strict';

import {Uint32LCG, Uint32LCGArg} from '../../';
import * as assert from 'power-assert';

function u32(lcgArg: Uint32LCGArg): Uint32LCGArg {
    return {
        multiplier: lcgArg.multiplier >>> 0,
        increment: lcgArg.increment >>> 0
    };
}

describe('calcInverseArg', () => {
    it('GEN3_INVERSE_ARG', () => {
        assert.deepEqual(u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN3_ARG)), {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_INVERSE_ARG', () => {
        assert.deepEqual(u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN4_ARG)), {multiplier: 0xeeb9eb65, increment: 0x0a3561a1});
    });

    it('GEN4_ALTERNATIVE_INVERSE_ARG', () => {
        assert.deepEqual(u32(Uint32LCG.calcInverseArg(Uint32LCG.GEN4_ALTERNATIVE_ARG)), {multiplier: 0x9638806d, increment: 0x69c77f93});
    });
});