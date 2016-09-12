"use strict";

var _imul = require("babel-runtime/core-js/math/imul");

var _imul2 = _interopRequireDefault(_imul);

var _isNan = require("babel-runtime/core-js/number/is-nan");

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toUint32_1 = require('../internal/toUint32');
/**
 * Calculates the argument of LCG to advance `skip` indexes when next() is called.
 *
 * @example
 * const g1 = generator(GEN3_ARG                       , 0x00000000, 4);
 * const g2 = generator(calcSkippingLCGArg(GEN3_ARG, 2), 0x00000000, 2);
 * console.log([...g1]); // ['0x6073', '0xE97E7B6A', '0x52713895', '0x31B0DDE4']
 * console.log([...g2]); // [          '0xE97E7B6A',               '0x31B0DDE4']
 *
 * @param lcgArg - The regular argument of LCG
 * @param skip   - The number of indexes to be advanced when next() is called
 * @returns      - The argument of LCG to advance `skip` indexes when next() is called
 */
function calcSkippingLCGArg(lcgArg, skip) {
    if ((0, _isNan2.default)(skip)) throw new RangeError("Invalid skip.");
    // seed[n + 1] = (seed[n] * a + b) % 0x100000000
    // seed[n + k] = seed[n] * a^k
    //               + a^(k-1) * b + a^(k-2) * b + ... + ab + b
    var a = lcgArg.multiplier,
        b = lcgArg.increment;
    var c = 1,
        d = 0;
    while (skip) {
        if (skip & 1) {
            d = toUint32_1.default((0, _imul2.default)(d, a) + b);
            c = (0, _imul2.default)(c, a);
        }
        b = toUint32_1.default((0, _imul2.default)(b, a) + b);
        a = (0, _imul2.default)(a, a);
        skip = skip >>> 1;
    }
    return { multiplier: toUint32_1.default(c), increment: toUint32_1.default(d) };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calcSkippingLCGArg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvY2FsY1NraXBwaW5nTENHQXJnLmpzIiwidXRpbC9jYWxjU2tpcHBpbmdMQ0dBcmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQ0NBLElBQUEsYUFBQSxRQUFxQixzQkFBckIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFBLGtCQUFBLENBQTJDLE1BQTNDLEVBQTJELElBQTNELEVBQXVFO0FBQ25FLFFBQUkscUJBQWEsSUFBYixDQUFKLEVBQXdCLE1BQU0sSUFBSSxVQUFKLENBQWUsZUFBZixDQUFOLENBQXhCOzs7O0FBRG1FLFFBTS9ELElBQUksT0FBTyxVQUFQO1FBQW1CLElBQUksT0FBTyxTQUFQLENBTm9DO0FBT25FLFFBQUksSUFBSSxDQUFKO1FBQU8sSUFBSSxDQUFKLENBUHdEO0FBUW5FLFdBQU8sSUFBUCxFQUFhO0FBQ1QsWUFBSSxPQUFPLENBQVAsRUFBVTtBQUNWLGdCQUFJLFdBQUEsT0FBQSxDQUFTLG9CQUFVLENBQVYsRUFBYSxDQUFiLElBQWtCLENBQWxCLENBQWIsQ0FEVTtBQUVWLGdCQUFJLG9CQUFVLENBQVYsRUFBYSxDQUFiLENBQUosQ0FGVTtTQUFkO0FBSUEsWUFBSSxXQUFBLE9BQUEsQ0FBUyxvQkFBVSxDQUFWLEVBQWEsQ0FBYixJQUFrQixDQUFsQixDQUFiLENBTFM7QUFNVCxZQUFJLG9CQUFVLENBQVYsRUFBYSxDQUFiLENBQUosQ0FOUztBQU9ULGVBQU8sU0FBUyxDQUFULENBUEU7S0FBYjtBQVNBLFdBQU8sRUFBQyxZQUFZLFdBQUEsT0FBQSxDQUFTLENBQVQsQ0FBWixFQUF5QixXQUFXLFdBQUEsT0FBQSxDQUFTLENBQVQsQ0FBWCxFQUFqQyxDQWpCbUU7Q0FBdkU7QUFBQSxPQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLEVBQUEsT0FBQSxJQUFBLEVBQUE7QURtQkEsUUFBUSxPQUFSLEdBQWtCLGtCQUFsQiIsImZpbGUiOiJ1dGlsL2NhbGNTa2lwcGluZ0xDR0FyZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgdG9VaW50MzJfMSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvVWludDMyJyk7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFyZ3VtZW50IG9mIExDRyB0byBhZHZhbmNlIGBza2lwYCBpbmRleGVzIHdoZW4gbmV4dCgpIGlzIGNhbGxlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZzEgPSBnZW5lcmF0b3IoR0VOM19BUkcgICAgICAgICAgICAgICAgICAgICAgICwgMHgwMDAwMDAwMCwgNCk7XG4gKiBjb25zdCBnMiA9IGdlbmVyYXRvcihjYWxjU2tpcHBpbmdMQ0dBcmcoR0VOM19BUkcsIDIpLCAweDAwMDAwMDAwLCAyKTtcbiAqIGNvbnNvbGUubG9nKFsuLi5nMV0pOyAvLyBbJzB4NjA3MycsICcweEU5N0U3QjZBJywgJzB4NTI3MTM4OTUnLCAnMHgzMUIwRERFNCddXG4gKiBjb25zb2xlLmxvZyhbLi4uZzJdKTsgLy8gWyAgICAgICAgICAnMHhFOTdFN0I2QScsICAgICAgICAgICAgICAgJzB4MzFCMERERTQnXVxuICpcbiAqIEBwYXJhbSBsY2dBcmcgLSBUaGUgcmVndWxhciBhcmd1bWVudCBvZiBMQ0dcbiAqIEBwYXJhbSBza2lwICAgLSBUaGUgbnVtYmVyIG9mIGluZGV4ZXMgdG8gYmUgYWR2YW5jZWQgd2hlbiBuZXh0KCkgaXMgY2FsbGVkXG4gKiBAcmV0dXJucyAgICAgIC0gVGhlIGFyZ3VtZW50IG9mIExDRyB0byBhZHZhbmNlIGBza2lwYCBpbmRleGVzIHdoZW4gbmV4dCgpIGlzIGNhbGxlZFxuICovXG5mdW5jdGlvbiBjYWxjU2tpcHBpbmdMQ0dBcmcobGNnQXJnLCBza2lwKSB7XG4gICAgaWYgKE51bWJlci5pc05hTihza2lwKSlcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHNraXAuXCIpO1xuICAgIC8vIHNlZWRbbiArIDFdID0gKHNlZWRbbl0gKiBhICsgYikgJSAweDEwMDAwMDAwMFxuICAgIC8vIHNlZWRbbiArIGtdID0gc2VlZFtuXSAqIGFea1xuICAgIC8vICAgICAgICAgICAgICAgKyBhXihrLTEpICogYiArIGFeKGstMikgKiBiICsgLi4uICsgYWIgKyBiXG4gICAgbGV0IGEgPSBsY2dBcmcubXVsdGlwbGllciwgYiA9IGxjZ0FyZy5pbmNyZW1lbnQ7XG4gICAgbGV0IGMgPSAxLCBkID0gMDtcbiAgICB3aGlsZSAoc2tpcCkge1xuICAgICAgICBpZiAoc2tpcCAmIDEpIHtcbiAgICAgICAgICAgIGQgPSB0b1VpbnQzMl8xLmRlZmF1bHQoTWF0aC5pbXVsKGQsIGEpICsgYik7XG4gICAgICAgICAgICBjID0gTWF0aC5pbXVsKGMsIGEpO1xuICAgICAgICB9XG4gICAgICAgIGIgPSB0b1VpbnQzMl8xLmRlZmF1bHQoTWF0aC5pbXVsKGIsIGEpICsgYik7XG4gICAgICAgIGEgPSBNYXRoLmltdWwoYSwgYSk7XG4gICAgICAgIHNraXAgPSBza2lwID4+PiAxO1xuICAgIH1cbiAgICByZXR1cm4geyBtdWx0aXBsaWVyOiB0b1VpbnQzMl8xLmRlZmF1bHQoYyksIGluY3JlbWVudDogdG9VaW50MzJfMS5kZWZhdWx0KGQpIH07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjU2tpcHBpbmdMQ0dBcmc7XG4iLCJpbXBvcnQge0xDR0FyZ30gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdG9VaW50MzIgZnJvbSAnLi4vaW50ZXJuYWwvdG9VaW50MzInO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFyZ3VtZW50IG9mIExDRyB0byBhZHZhbmNlIGBza2lwYCBpbmRleGVzIHdoZW4gbmV4dCgpIGlzIGNhbGxlZC5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGcxID0gZ2VuZXJhdG9yKEdFTjNfQVJHICAgICAgICAgICAgICAgICAgICAgICAsIDB4MDAwMDAwMDAsIDQpO1xuICogY29uc3QgZzIgPSBnZW5lcmF0b3IoY2FsY1NraXBwaW5nTENHQXJnKEdFTjNfQVJHLCAyKSwgMHgwMDAwMDAwMCwgMik7XG4gKiBjb25zb2xlLmxvZyhbLi4uZzFdKTsgLy8gWycweDYwNzMnLCAnMHhFOTdFN0I2QScsICcweDUyNzEzODk1JywgJzB4MzFCMERERTQnXVxuICogY29uc29sZS5sb2coWy4uLmcyXSk7IC8vIFsgICAgICAgICAgJzB4RTk3RTdCNkEnLCAgICAgICAgICAgICAgICcweDMxQjBEREU0J11cbiAqIFxuICogQHBhcmFtIGxjZ0FyZyAtIFRoZSByZWd1bGFyIGFyZ3VtZW50IG9mIExDR1xuICogQHBhcmFtIHNraXAgICAtIFRoZSBudW1iZXIgb2YgaW5kZXhlcyB0byBiZSBhZHZhbmNlZCB3aGVuIG5leHQoKSBpcyBjYWxsZWRcbiAqIEByZXR1cm5zICAgICAgLSBUaGUgYXJndW1lbnQgb2YgTENHIHRvIGFkdmFuY2UgYHNraXBgIGluZGV4ZXMgd2hlbiBuZXh0KCkgaXMgY2FsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNTa2lwcGluZ0xDR0FyZyhsY2dBcmc6IExDR0FyZywgc2tpcDogbnVtYmVyKTogTENHQXJnIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHNraXApKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgc2tpcC5cIik7XG5cbiAgICAvLyBzZWVkW24gKyAxXSA9IChzZWVkW25dICogYSArIGIpICUgMHgxMDAwMDAwMDBcbiAgICAvLyBzZWVkW24gKyBrXSA9IHNlZWRbbl0gKiBhXmtcbiAgICAvLyAgICAgICAgICAgICAgICsgYV4oay0xKSAqIGIgKyBhXihrLTIpICogYiArIC4uLiArIGFiICsgYlxuICAgIGxldCBhID0gbGNnQXJnLm11bHRpcGxpZXIsIGIgPSBsY2dBcmcuaW5jcmVtZW50O1xuICAgIGxldCBjID0gMSwgZCA9IDA7XG4gICAgd2hpbGUgKHNraXApIHtcbiAgICAgICAgaWYgKHNraXAgJiAxKSB7XG4gICAgICAgICAgICBkID0gdG9VaW50MzIoTWF0aC5pbXVsKGQsIGEpICsgYik7XG4gICAgICAgICAgICBjID0gTWF0aC5pbXVsKGMsIGEpO1xuICAgICAgICB9XG4gICAgICAgIGIgPSB0b1VpbnQzMihNYXRoLmltdWwoYiwgYSkgKyBiKTtcbiAgICAgICAgYSA9IE1hdGguaW11bChhLCBhKTtcbiAgICAgICAgc2tpcCA9IHNraXAgPj4+IDE7XG4gICAgfVxuICAgIHJldHVybiB7bXVsdGlwbGllcjogdG9VaW50MzIoYyksIGluY3JlbWVudDogdG9VaW50MzIoZCl9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
