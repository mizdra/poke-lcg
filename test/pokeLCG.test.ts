/// <reference path="../typings/main.d.ts" />

'use strict';

import {generator, GEN3_ARG, GEN4_ARG, GEN4_ALTERNATIVE_ARG} from '../';
import * as assert from 'power-assert';

describe('generator', () => {
    it('generator#next()', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert.deepEqual(g.next(), {value: 0x00006073, done: false});
        assert.deepEqual(g.next(), {value: 0xe97e7b6a, done: false});
        assert.deepEqual(g.next(), {value: 0x52713895, done: false});
    });

    it('generator#next(frame: number)', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert.deepEqual(g.next(1), {value: 0x00006073, done: false});
        assert.deepEqual(g.next(2), {value: 0x52713895, done: false});
        assert.deepEqual(g.next(4), {value: 0xafc58ac9, done: false});
    });

    it('generator#return(value: number)', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert.deepEqual(g.return(1), {value: 1, done: true});
        assert.deepEqual(g.return(2), {value: 2, done: true});
        assert.deepEqual(g.return(4), {value: 4, done: true});
    });

    it('generator#throw(e: Error)', () => {
        const g = generator(GEN3_ARG, 0x00000000);

        assert(g.throw().message                     === undefined);
        assert(g.throw(new Error()).message          === '');
        assert(g.throw(new Error('message')).message === 'message');
    });

    it('done', () => {
        const g1 = generator(GEN3_ARG, 0x00000000);
        const g2 = generator(GEN3_ARG, 0x00000000, 0);
        const g3 = generator(GEN3_ARG, 0x00000000, 1);
        const g4 = generator(GEN3_ARG, 0x00000000, -1);

        assert.deepEqual(g1.next(100), {value: 0x451bde44, done: false});
        assert.deepEqual(g2.next()   , {value: undefined , done: true});
        assert.deepEqual(g3.next()   , {value: 0x00006073, done: false});
        assert.deepEqual(g3.next()   , {value: undefined , done: true});
        assert.deepEqual(g4.next()   , {value: undefined , done: true});
    });
});

describe('ARG', () => {
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