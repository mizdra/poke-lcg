/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/power-assert/index.d.ts" />

'use strict';

import {generator, indexedGenerator} from '../../uint32/core';
import {GEN3_ARG} from '../../uint32/constant';
import * as assert from 'power-assert';

describe('generator', function () {
    describe('generator', function () {
        describe('argument', function () {
            describe('lcgArg', function () {
                const fn = (lcgArg) => generator(lcgArg, 0x00000001).next().value;
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
                const fn = (initialSeed: number) => generator(ARG, initialSeed).next().value;
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
                        const g = generator(GEN3_ARG, 0, 0);
                        assert(g.next().done === true);
                    });

                    it('natural number', function () {
                        const g = generator(GEN3_ARG, 0, 1);
                        assert(g.next().done === false);
                        assert(g.next().done === true);
                    });

                    it('negative number', function () {
                        const g = generator(GEN3_ARG, 0, -1);
                        assert(g.next().done === true);
                    });

                    it('not a NaN', function () {
                        assert.throws(() => generator(GEN3_ARG, 0, NaN), RangeError);
                    });
                });
            });
        });

        describe('generator#next()', function () {
            describe('seed', function () {
                it('basic calculation', function () {
                    const g = generator(GEN3_ARG, 0x00000000);
                    assert(g.next().value === 0x00006073);
                    assert(g.next().value === 0xe97e7b6a);
                    assert(g.next().value === 0x52713895);
                });

                it('less than or equal to 0xFFFFFFFF', function () {
                    const g = generator({multiplier: 1, increment: 1}, 0xFFFFFFFE);
                    assert(g.next().value === 0xFFFFFFFF);
                    assert(g.next().value === 0x00000000);
                });
            });
        });
    });

    describe('indexedGenerator', function () {
        describe('argument', function () {
            describe('lcgArg', function () {
                const fn = (lcgArg) => indexedGenerator(lcgArg, 0x00000001).next().value.seed;
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
                const fn = (initialSeed: number) => indexedGenerator(ARG, initialSeed).next().value.seed;
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
                        const g = indexedGenerator(GEN3_ARG, 0, 0);
                        assert(g.next().done === true);
                    });

                    it('natural number', function () {
                        const g = indexedGenerator(GEN3_ARG, 0, 1);
                        assert(g.next().done === false);
                        assert(g.next().done === true);
                    });

                    it('negative number', function () {
                        const g = indexedGenerator(GEN3_ARG, 0, -1);
                        assert(g.next().done === true);
                    });

                    it('not a NaN', function () {
                        assert.throws(() => indexedGenerator(GEN3_ARG, 0, NaN), RangeError);
                    });
                });
            });
        });

        describe('indexedGenerator#next()', function () {
            describe('seed', function () {
                it('basic calculation', function () {
                    const g = indexedGenerator(GEN3_ARG, 0x00000000);
                    assert(g.next().value.seed === 0x00006073);
                    assert(g.next().value.seed === 0xe97e7b6a);
                    assert(g.next().value.seed === 0x52713895);
                });

                it('less than or equal to 0xFFFFFFFF', function () {
                    const g = indexedGenerator({multiplier: 1, increment: 1}, 0xFFFFFFFE);
                    assert(g.next().value.seed === 0xFFFFFFFF);
                    assert(g.next().value.seed === 0x00000000);
                });
            });

            it('`index` is incremented by 1 every time `indexedGenerator#next()` is called', function () {
                const g = indexedGenerator(GEN3_ARG, 0x00000000);
                assert(g.next().value.index === 1);
                assert(g.next().value.index === 2);
                assert(g.next().value.index === 3);
            });
        });
    });
});