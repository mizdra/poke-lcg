'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

describe('generator', () => {
    it('generator#next()', () => {
        const g1 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);
        assert.deepEqual(g1.next(), {value: {index: 1, seed: 0x00006073}, done: false});
        assert.deepEqual(g1.next(), {value: {index: 2, seed: 0xe97e7b6a}, done: false});
        assert.deepEqual(g1.next(), {value: {index: 3, seed: 0x52713895}, done: false});
        g1.return();
        assert.deepEqual(g1.next(), {value: undefined                   , done: true});

        const g2 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 0);
        assert.deepEqual(g2.next(), {value: undefined                   , done: true});

        const g3 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 1);
        assert.deepEqual(g3.next(), {value: {index: 1, seed: 0x00006073}, done: false});
        assert.deepEqual(g3.next(), {value: undefined                   , done: true});
    });

    it('generator#return(value: any)', () => {
        const g = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);

        assert.deepEqual(g.return(2), {value: 2        , done: true});
        assert.deepEqual(g.return(4), {value: undefined, done: true});
        assert.deepEqual(g.return(8), {value: undefined, done: true});
    });

    it('generator#throw(e: any)', () => {
        const g = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);

        assert.throws(() => g.throw(new Error()), '');
        assert.throws(() => g.throw(new Error('message')), 'message');
    });
});