/// <reference path="../../typings/main.d.ts" />

'use strict';

import {Uint32LCG} from '../../';
import * as assert from 'power-assert';

describe('util', () => {
    it('toRandom', () => {
        assert(Uint32LCG.toRandom(0x12345678 ) === 0x1234);
        assert(Uint32LCG.toRandom(0x100000000) === 0x0000);
    });

    it('toHexString', () => {
        assert(Uint32LCG.toHexString(0x12345678 , 8) === '12345678');
        assert(Uint32LCG.toHexString(0x100000000, 8) === '00000000');
        assert(Uint32LCG.toHexString(0x12345678 , 4) === '5678');
        assert(Uint32LCG.toHexString(0x12345678 , 0) === '');
        assert(Uint32LCG.toHexString(0x1234     , 8) === '00001234');
    });
});