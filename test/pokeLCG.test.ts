/// <reference path="../typings/main.d.ts" />

'use strict';

import {generator, GEN3_ARG, GEN4_ARG, GEN4_ALTERNATIVE_ARG} from '../';
import * as assert from 'power-assert';

describe('generator', () => {
    it('generator#next()', () => {
        const g1 = generator(GEN3_ARG, 0x00000000);
        const g2 = generator(GEN3_ARG, 0x00000000, 0);
        const g3 = generator(GEN3_ARG, 0x00000000, 1);

        assert.deepEqual(g1.next(), {value: 0x00006073, done: false});
        assert.deepEqual(g1.next(), {value: 0xe97e7b6a, done: false});
        assert.deepEqual(g1.next(), {value: 0x52713895, done: false});
        g1.return();
        assert.deepEqual(g1.next(), {value: undefined , done: true});
        assert.deepEqual(g2.next(), {value: undefined , done: true});
        assert.deepEqual(g3.next(), {value: 0x00006073, done: false});
        assert.deepEqual(g3.next(), {value: undefined , done: true});
    });

    it('generator#next(frame: any)', () => {
        const g1 = generator(GEN3_ARG, 0x00000000);
        const g2 = generator(GEN3_ARG, 0x00000000);
        const g3 = generator(GEN3_ARG, 0x00000000, 1);

        assert.deepEqual(g1.next(1), {value: 0x00006073, done: false});
        assert.deepEqual(g2.next(2), {value: 0xe97e7b6a, done: false});
        assert.deepEqual(g2.next(4), {value: 0xe2cca5ee, done: false});
        assert.deepEqual(g2.next(8), {value: 0x993d6bb6, done: false});
        assert.deepEqual(g3.next(2), {value: undefined , done: true});
    });

    it('generator#return(value: any)', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert.deepEqual(g.return(2), {value: 2        , done: true});
        assert.deepEqual(g.return(4), {value: undefined, done: true});
        assert.deepEqual(g.return(8), {value: undefined, done: true});
    });

    it('generator#throw(e: any)', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert.throws(() => g.throw(new Error()), '');
        assert.throws(() => g.throw(new Error('message')), 'message');
    });
});

describe('LCGArg', () => {
    it('GEN3_ARG', () => {
        assert.deepEqual(GEN3_ARG, {multiplier: 0x41C64E6D, increment: 0x6073});
    });

    it('GEN4_ARG', () => {
        assert.deepEqual(GEN4_ARG, {multiplier: 0x41C64E6D, increment: 0x6073});
    });

    it('GEN4_ALTERNATIVE_ARG', () => {
        assert.deepEqual(GEN4_ALTERNATIVE_ARG, {multiplier: 0x41C64E6D, increment: 0x6073});
    });
});

describe('ES2015', () => {
    it('Spread operator', () => {
        const g = generator(GEN3_ARG, 0x00000000, 3);
        const actual = [...g];
        const expect = [0x00006073, 0xe97e7b6a, 0x52713895];
        assert.deepEqual(actual, expect);
    });
});