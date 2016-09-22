/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/power-assert/index.d.ts" />

'use strict';

import {LCG, IndexedLCG} from '../core';
import {GEN3_ARG} from '../constant';
import * as assert from 'power-assert';

describe('core', function () {
    describe('LCG', function () {
        describe('argument', function () {
            describe('lcgArg', function () {
                const fn = (lcgArg) => (new LCG(lcgArg, 0x00000001)).next().value;
                describe('treated as unsigned 32-bit integer', function () {
                    it('integer', function () {
                        assert(fn({multiplier: 1 , increment: 0}) === 0x00000001);
                        assert(fn({multiplier: 1 , increment: 1}) === 0x00000002);
                        assert(fn({multiplier: -1, increment: 0}) === 0xFFFFFFFF);
                        assert(fn({multiplier: 1, increment: -1}) === 0x00000000);
                    });

                    it('decimal', function () {
                        assert(fn({multiplier: -0.9, increment: 0}) === 0x00000000);
                        assert(fn({multiplier: -0.1, increment: 0}) === 0x00000000);
                        assert(fn({multiplier:  0.1, increment: 0}) === 0x00000000);
                        assert(fn({multiplier:  0.9, increment: 0}) === 0x00000000);

                        assert(fn({multiplier: 0, increment: -0.9}) === 0x00000000);
                        assert(fn({multiplier: 0, increment: -0.1}) === 0x00000000);
                        assert(fn({multiplier: 0, increment:  0.1}) === 0x00000000);
                        assert(fn({multiplier: 0, increment:  0.9}) === 0x00000000);
                    });

                    it('NaN', function () {
                        // ToUint32(NaN) is 0
                        assert(fn({multiplier: NaN, increment: 0}  ) === 0x00000000);
                        assert(fn({multiplier: 1  , increment: NaN}) === 0x00000001);
                    });
                });
            });

            describe('initialSeed', function () {
                const ARG = {multiplier: 1, increment: 0};
                const fn = (initialSeed: number) => (new LCG(ARG, initialSeed)).next().value;
                describe('treated as unsigned 32-bit integer', function () {
                    it('integer', function () {
                        assert(fn(0x00000000 - 1) === 0xFFFFFFFF);
                        assert(fn(0x00000000 - 0) === 0x00000000);
                        assert(fn(0xFFFFFFFF + 0) === 0xFFFFFFFF);
                        assert(fn(0xFFFFFFFF + 1) === 0x00000000);
                    });

                    it('decimal', function () {
                        assert(fn(-0.9) === 0x00000000);
                        assert(fn(-0.1) === 0x00000000);
                        assert(fn(0.1 ) === 0x00000000);
                        assert(fn(0.9 ) === 0x00000000);
                    });

                    it('NaN', function () {
                        assert(fn(NaN) === 0);
                    });
                });
            });

            describe('maxFrame', function () {
                describe('greater than or equal to 0', function () {
                    it('0', function () {
                        const g = new LCG(GEN3_ARG, 0, 0);
                        assert(g.next().done === true);
                    });

                    it('natural number', function () {
                        const g = new LCG(GEN3_ARG, 0, 1);
                        assert(g.next().done === false);
                        assert(g.next().done === true);
                    });

                    it('negative number', function () {
                        const g = new LCG(GEN3_ARG, 0, -1);
                        assert(g.next().done === true);
                    });

                    it('not a NaN', function () {
                        assert.throws(() => (new LCG(GEN3_ARG, 0, NaN)), RangeError);
                    });
                });
            });
        });

        describe('LCG#next()', function () {
            describe('seed', function () {
                it('basic calculation', function () {
                    const g = new LCG(GEN3_ARG, 0x00000000);
                    assert(g.next().value === 0x00006073);
                    assert(g.next().value === 0xe97e7b6a);
                    assert(g.next().value === 0x52713895);
                });

                it('less than or equal to 0xFFFFFFFF', function () {
                    const g = new LCG({multiplier: 1, increment: 1}, 0xFFFFFFFE);
                    assert(g.next().value === 0xFFFFFFFF);
                    assert(g.next().value === 0x00000000);
                });
            });
        });
    });

    describe('IndexedLCG', function () {
        describe('argument', function () {
            describe('lcgArg', function () {
                const fn = (lcgArg) => (new IndexedLCG(lcgArg, 0x00000001)).next().value.seed;
                describe('treated as unsigned 32-bit integer', function () {
                    it('integer', function () {
                        assert(fn({multiplier: 1 , increment: 0}) === 0x00000001);
                        assert(fn({multiplier: 1 , increment: 1}) === 0x00000002);
                        assert(fn({multiplier: -1, increment: 0}) === 0xFFFFFFFF);
                        assert(fn({multiplier: 1, increment: -1}) === 0x00000000);
                    });

                    it('decimal', function () {
                        assert(fn({multiplier: -0.9, increment: 0}) === 0x00000000);
                        assert(fn({multiplier: -0.1, increment: 0}) === 0x00000000);
                        assert(fn({multiplier:  0.1, increment: 0}) === 0x00000000);
                        assert(fn({multiplier:  0.9, increment: 0}) === 0x00000000);

                        assert(fn({multiplier: 0, increment: -0.9}) === 0x00000000);
                        assert(fn({multiplier: 0, increment: -0.1}) === 0x00000000);
                        assert(fn({multiplier: 0, increment:  0.1}) === 0x00000000);
                        assert(fn({multiplier: 0, increment:  0.9}) === 0x00000000);
                    });

                    it('NaN', function () {
                        // ToUint32(NaN) is 0
                        assert(fn({multiplier: NaN, increment: 0}  ) === 0x00000000);
                        assert(fn({multiplier: 1  , increment: NaN}) === 0x00000001);
                    });
                });
            });

            describe('initialSeed', function () {
                const ARG = {multiplier: 1, increment: 0};
                const fn = (initialSeed: number) => (new IndexedLCG(ARG, initialSeed)).next().value.seed;
                describe('treated as unsigned 32-bit integer', function () {
                    it('integer', function () {
                        assert(fn(0x00000000 - 1) === 0xFFFFFFFF);
                        assert(fn(0x00000000 - 0) === 0x00000000);
                        assert(fn(0xFFFFFFFF + 0) === 0xFFFFFFFF);
                        assert(fn(0xFFFFFFFF + 1) === 0x00000000);
                    });

                    it('decimal', function () {
                        assert(fn(-0.9) === 0x00000000);
                        assert(fn(-0.1) === 0x00000000);
                        assert(fn(0.1 ) === 0x00000000);
                        assert(fn(0.9 ) === 0x00000000);
                    });

                    it('NaN', function () {
                        assert(fn(NaN) === 0);
                    });
                });
            });

            describe('maxFrame', function () {
                describe('greater than or equal to 0', function () {
                    it('0', function () {
                        const g = new IndexedLCG(GEN3_ARG, 0, 0);
                        assert(g.next().done === true);
                    });

                    it('natural number', function () {
                        const g = new IndexedLCG(GEN3_ARG, 0, 1);
                        assert(g.next().done === false);
                        assert(g.next().done === true);
                    });

                    it('negative number', function () {
                        const g = new IndexedLCG(GEN3_ARG, 0, -1);
                        assert(g.next().done === true);
                    });

                    it('not a NaN', function () {
                        assert.throws(() => (new IndexedLCG(GEN3_ARG, 0, NaN)), RangeError);
                    });
                });
            });
        });

        describe('IndexedLCG#next()', function () {
            describe('seed', function () {
                it('basic calculation', function () {
                    const g = new IndexedLCG(GEN3_ARG, 0x00000000);
                    assert(g.next().value.seed === 0x00006073);
                    assert(g.next().value.seed === 0xe97e7b6a);
                    assert(g.next().value.seed === 0x52713895);
                });

                it('less than or equal to 0xFFFFFFFF', function () {
                    const g = new IndexedLCG({multiplier: 1, increment: 1}, 0xFFFFFFFE);
                    assert(g.next().value.seed === 0xFFFFFFFF);
                    assert(g.next().value.seed === 0x00000000);
                });
            });

            it('`index` is incremented by 1 every time `IndexedLCG#next()` is called', function () {
                const g = new IndexedLCG(GEN3_ARG, 0x00000000);
                assert(g.next().value.index === 1);
                assert(g.next().value.index === 2);
                assert(g.next().value.index === 3);
            });
        });
    });
});