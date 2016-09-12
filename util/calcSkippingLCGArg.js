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
 * @throws {RangeError} - `skip` must not be NaN
 */
function calcSkippingLCGArg(lcgArg, skip) {
    if ((0, _isNan2.default)(skip)) throw new RangeError("Invalid skip.");
    /**
     * Caclulated by the method of least squares.
     * seed[n + 1] = (seed[n] * a + b) % 0x100000000
     * seed[n + k] = (seed[n] * a^k
     *                + a^(k-1) * b + a^(k-2) * b + ... + ab + b
     *               ) % 0x100000000
     * c = a^k
     * d = a^(k-1) * b + a^(k-2) * b + ... + ab + b
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvY2FsY1NraXBwaW5nTENHQXJnLmpzIiwidXRpbC9jYWxjU2tpcHBpbmdMQ0dBcmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQ0NBLElBQUEsYUFBQSxRQUFxQixzQkFBckIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLFNBQUEsa0JBQUEsQ0FBMkMsTUFBM0MsRUFBMkQsSUFBM0QsRUFBdUU7QUFDbkUsUUFBSSxxQkFBYSxJQUFiLENBQUosRUFBd0IsTUFBTSxJQUFJLFVBQUosQ0FBZSxlQUFmLENBQU4sQ0FBeEI7Ozs7Ozs7Ozs7QUFEbUUsUUFZL0QsSUFBSSxPQUFPLFVBQVA7UUFBbUIsSUFBSSxPQUFPLFNBQVAsQ0Fab0M7QUFhbkUsUUFBSSxJQUFJLENBQUo7UUFBTyxJQUFJLENBQUosQ0Fid0Q7QUFjbkUsV0FBTyxJQUFQLEVBQWE7QUFDVCxZQUFJLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsZ0JBQUksV0FBQSxPQUFBLENBQVMsb0JBQVUsQ0FBVixFQUFhLENBQWIsSUFBa0IsQ0FBbEIsQ0FBYixDQURVO0FBRVYsZ0JBQUksb0JBQVUsQ0FBVixFQUFhLENBQWIsQ0FBSixDQUZVO1NBQWQ7QUFJQSxZQUFJLFdBQUEsT0FBQSxDQUFTLG9CQUFVLENBQVYsRUFBYSxDQUFiLElBQWtCLENBQWxCLENBQWIsQ0FMUztBQU1ULFlBQUksb0JBQVUsQ0FBVixFQUFhLENBQWIsQ0FBSixDQU5TO0FBT1QsZUFBTyxTQUFTLENBQVQsQ0FQRTtLQUFiO0FBU0EsV0FBTyxFQUFDLFlBQVksV0FBQSxPQUFBLENBQVMsQ0FBVCxDQUFaLEVBQXlCLFdBQVcsV0FBQSxPQUFBLENBQVMsQ0FBVCxDQUFYLEVBQWpDLENBdkJtRTtDQUF2RTtBQUFBLE9BQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsRUFBQSxPQUFBLElBQUEsRUFBQTtBRHlCQSxRQUFRLE9BQVIsR0FBa0Isa0JBQWxCIiwiZmlsZSI6InV0aWwvY2FsY1NraXBwaW5nTENHQXJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCB0b1VpbnQzMl8xID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdG9VaW50MzInKTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYXJndW1lbnQgb2YgTENHIHRvIGFkdmFuY2UgYHNraXBgIGluZGV4ZXMgd2hlbiBuZXh0KCkgaXMgY2FsbGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBnMSA9IGdlbmVyYXRvcihHRU4zX0FSRyAgICAgICAgICAgICAgICAgICAgICAgLCAweDAwMDAwMDAwLCA0KTtcbiAqIGNvbnN0IGcyID0gZ2VuZXJhdG9yKGNhbGNTa2lwcGluZ0xDR0FyZyhHRU4zX0FSRywgMiksIDB4MDAwMDAwMDAsIDIpO1xuICogY29uc29sZS5sb2coWy4uLmcxXSk7IC8vIFsnMHg2MDczJywgJzB4RTk3RTdCNkEnLCAnMHg1MjcxMzg5NScsICcweDMxQjBEREU0J11cbiAqIGNvbnNvbGUubG9nKFsuLi5nMl0pOyAvLyBbICAgICAgICAgICcweEU5N0U3QjZBJywgICAgICAgICAgICAgICAnMHgzMUIwRERFNCddXG4gKlxuICogQHBhcmFtIGxjZ0FyZyAtIFRoZSByZWd1bGFyIGFyZ3VtZW50IG9mIExDR1xuICogQHBhcmFtIHNraXAgICAtIFRoZSBudW1iZXIgb2YgaW5kZXhlcyB0byBiZSBhZHZhbmNlZCB3aGVuIG5leHQoKSBpcyBjYWxsZWRcbiAqIEByZXR1cm5zICAgICAgLSBUaGUgYXJndW1lbnQgb2YgTENHIHRvIGFkdmFuY2UgYHNraXBgIGluZGV4ZXMgd2hlbiBuZXh0KCkgaXMgY2FsbGVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSAtIGBza2lwYCBtdXN0IG5vdCBiZSBOYU5cbiAqL1xuZnVuY3Rpb24gY2FsY1NraXBwaW5nTENHQXJnKGxjZ0FyZywgc2tpcCkge1xuICAgIGlmIChOdW1iZXIuaXNOYU4oc2tpcCkpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBza2lwLlwiKTtcbiAgICAvKipcbiAgICAgKiBDYWNsdWxhdGVkIGJ5IHRoZSBtZXRob2Qgb2YgbGVhc3Qgc3F1YXJlcy5cbiAgICAgKiBzZWVkW24gKyAxXSA9IChzZWVkW25dICogYSArIGIpICUgMHgxMDAwMDAwMDBcbiAgICAgKiBzZWVkW24gKyBrXSA9IChzZWVkW25dICogYV5rXG4gICAgICogICAgICAgICAgICAgICAgKyBhXihrLTEpICogYiArIGFeKGstMikgKiBiICsgLi4uICsgYWIgKyBiXG4gICAgICogICAgICAgICAgICAgICApICUgMHgxMDAwMDAwMDBcbiAgICAgKiBjID0gYV5rXG4gICAgICogZCA9IGFeKGstMSkgKiBiICsgYV4oay0yKSAqIGIgKyAuLi4gKyBhYiArIGJcbiAgICAgKi9cbiAgICBsZXQgYSA9IGxjZ0FyZy5tdWx0aXBsaWVyLCBiID0gbGNnQXJnLmluY3JlbWVudDtcbiAgICBsZXQgYyA9IDEsIGQgPSAwO1xuICAgIHdoaWxlIChza2lwKSB7XG4gICAgICAgIGlmIChza2lwICYgMSkge1xuICAgICAgICAgICAgZCA9IHRvVWludDMyXzEuZGVmYXVsdChNYXRoLmltdWwoZCwgYSkgKyBiKTtcbiAgICAgICAgICAgIGMgPSBNYXRoLmltdWwoYywgYSk7XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRvVWludDMyXzEuZGVmYXVsdChNYXRoLmltdWwoYiwgYSkgKyBiKTtcbiAgICAgICAgYSA9IE1hdGguaW11bChhLCBhKTtcbiAgICAgICAgc2tpcCA9IHNraXAgPj4+IDE7XG4gICAgfVxuICAgIHJldHVybiB7IG11bHRpcGxpZXI6IHRvVWludDMyXzEuZGVmYXVsdChjKSwgaW5jcmVtZW50OiB0b1VpbnQzMl8xLmRlZmF1bHQoZCkgfTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGNTa2lwcGluZ0xDR0FyZztcbiIsImltcG9ydCB7TENHQXJnfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0b1VpbnQzMiBmcm9tICcuLi9pbnRlcm5hbC90b1VpbnQzMic7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYXJndW1lbnQgb2YgTENHIHRvIGFkdmFuY2UgYHNraXBgIGluZGV4ZXMgd2hlbiBuZXh0KCkgaXMgY2FsbGVkLlxuICogXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZzEgPSBnZW5lcmF0b3IoR0VOM19BUkcgICAgICAgICAgICAgICAgICAgICAgICwgMHgwMDAwMDAwMCwgNCk7XG4gKiBjb25zdCBnMiA9IGdlbmVyYXRvcihjYWxjU2tpcHBpbmdMQ0dBcmcoR0VOM19BUkcsIDIpLCAweDAwMDAwMDAwLCAyKTtcbiAqIGNvbnNvbGUubG9nKFsuLi5nMV0pOyAvLyBbJzB4NjA3MycsICcweEU5N0U3QjZBJywgJzB4NTI3MTM4OTUnLCAnMHgzMUIwRERFNCddXG4gKiBjb25zb2xlLmxvZyhbLi4uZzJdKTsgLy8gWyAgICAgICAgICAnMHhFOTdFN0I2QScsICAgICAgICAgICAgICAgJzB4MzFCMERERTQnXVxuICogXG4gKiBAcGFyYW0gbGNnQXJnIC0gVGhlIHJlZ3VsYXIgYXJndW1lbnQgb2YgTENHXG4gKiBAcGFyYW0gc2tpcCAgIC0gVGhlIG51bWJlciBvZiBpbmRleGVzIHRvIGJlIGFkdmFuY2VkIHdoZW4gbmV4dCgpIGlzIGNhbGxlZFxuICogQHJldHVybnMgICAgICAtIFRoZSBhcmd1bWVudCBvZiBMQ0cgdG8gYWR2YW5jZSBgc2tpcGAgaW5kZXhlcyB3aGVuIG5leHQoKSBpcyBjYWxsZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IC0gYHNraXBgIG11c3Qgbm90IGJlIE5hTlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjU2tpcHBpbmdMQ0dBcmcobGNnQXJnOiBMQ0dBcmcsIHNraXA6IG51bWJlcik6IExDR0FyZyB7XG4gICAgaWYgKE51bWJlci5pc05hTihza2lwKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHNraXAuXCIpO1xuXG4gICAgLyoqXG4gICAgICogQ2FjbHVsYXRlZCBieSB0aGUgbWV0aG9kIG9mIGxlYXN0IHNxdWFyZXMuXG4gICAgICogc2VlZFtuICsgMV0gPSAoc2VlZFtuXSAqIGEgKyBiKSAlIDB4MTAwMDAwMDAwXG4gICAgICogc2VlZFtuICsga10gPSAoc2VlZFtuXSAqIGFea1xuICAgICAqICAgICAgICAgICAgICAgICsgYV4oay0xKSAqIGIgKyBhXihrLTIpICogYiArIC4uLiArIGFiICsgYlxuICAgICAqICAgICAgICAgICAgICAgKSAlIDB4MTAwMDAwMDAwXG4gICAgICogYyA9IGFea1xuICAgICAqIGQgPSBhXihrLTEpICogYiArIGFeKGstMikgKiBiICsgLi4uICsgYWIgKyBiXG4gICAgICovXG4gICAgbGV0IGEgPSBsY2dBcmcubXVsdGlwbGllciwgYiA9IGxjZ0FyZy5pbmNyZW1lbnQ7XG4gICAgbGV0IGMgPSAxLCBkID0gMDtcbiAgICB3aGlsZSAoc2tpcCkge1xuICAgICAgICBpZiAoc2tpcCAmIDEpIHtcbiAgICAgICAgICAgIGQgPSB0b1VpbnQzMihNYXRoLmltdWwoZCwgYSkgKyBiKTtcbiAgICAgICAgICAgIGMgPSBNYXRoLmltdWwoYywgYSk7XG4gICAgICAgIH1cbiAgICAgICAgYiA9IHRvVWludDMyKE1hdGguaW11bChiLCBhKSArIGIpO1xuICAgICAgICBhID0gTWF0aC5pbXVsKGEsIGEpO1xuICAgICAgICBza2lwID0gc2tpcCA+Pj4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHttdWx0aXBsaWVyOiB0b1VpbnQzMihjKSwgaW5jcmVtZW50OiB0b1VpbnQzMihkKX07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
