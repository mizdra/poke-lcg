'use strict';

import * as Uint32LCG from '../../uint32';
import * as assert from 'power-assert';

function u32(result: IteratorResult<number>): IteratorResult<number> {
    let value: number = result.value;

    return {
        value: Number.isInteger(value) ? value >>> 0 : value,
        done: result.done
    };
}

describe('generator', () => {
    it('generator#next()', () => {
        const g1 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);
        assert.deepEqual(u32(g1.next()), {value: 0x00006073, done: false});
        assert.deepEqual(u32(g1.next()), {value: 0xe97e7b6a, done: false});
        assert.deepEqual(u32(g1.next()), {value: 0x52713895, done: false});
        g1.return();
        assert.deepEqual(u32(g1.next()), {value: undefined , done: true});

        const g2 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 0);
        assert.deepEqual(u32(g2.next()), {value: undefined , done: true});

        const g3 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 1);
        assert.deepEqual(u32(g3.next()), {value: 0x00006073, done: false});
        assert.deepEqual(u32(g3.next()), {value: undefined , done: true});
    });

    it('generator#next(frame: any)', () => {
        const g1 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);
        assert.deepEqual(u32(g1.next(1)), {value: 0x00006073, done: false});

        const g2 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);
        assert.deepEqual(u32(g2.next(2)), {value: 0xe97e7b6a, done: false});
        assert.deepEqual(u32(g2.next(4)), {value: 0xe2cca5ee, done: false});
        assert.deepEqual(u32(g2.next(8)), {value: 0x993d6bb6, done: false});

        const g3 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 1);
        assert.deepEqual(u32(g3.next(2)), {value: undefined , done: true});
    });

    it('generator#return(value: any)', () => {
        const g = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);

        assert.deepEqual(u32(g.return(2)), {value: 2        , done: true});
        assert.deepEqual(u32(g.return(4)), {value: undefined, done: true});
        assert.deepEqual(u32(g.return(8)), {value: undefined, done: true});
    });

    it('generator#throw(e: any)', () => {
        const g = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);

        assert.throws(() => g.throw(new Error()), '');
        assert.throws(() => g.throw(new Error('message')), 'message');
    });
});