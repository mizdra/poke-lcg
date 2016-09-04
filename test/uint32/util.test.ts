/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

describe('util', () => {
    it('toRandom', () => {
        assert(Uint32LCG.toRandom(0x12345678 ) === 0x1234);
        assert(Uint32LCG.toRandom(0x100000000) === 0x0000);
    });
});