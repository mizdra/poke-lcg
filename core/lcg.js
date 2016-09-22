"use strict";

var _imul = require("babel-runtime/core-js/math/imul");

var _imul2 = _interopRequireDefault(_imul);

var _isNan = require("babel-runtime/core-js/number/is-nan");

var _isNan2 = _interopRequireDefault(_isNan);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toUint32_1 = require('../internal/toUint32');
/**
 * Calculates random numbers by LCG
 */

var LCG = function () {
    /**
     * If `maxFrame` is 3, you can advance a maximum of 3 frames.
     * @param lcgArg        - The argument of LCG
     * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
     * @param maxFrame      - The max frame to be able to be advanced
     * @throws {RangeError} - `maxFrame` must not be NaN
     */

    function LCG(lcgArg, initialSeed) {
        var maxFrame = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];
        (0, _classCallCheck3.default)(this, LCG);

        if ((0, _isNan2.default)(maxFrame)) throw new RangeError("Invalid maxFrame.");
        this.multiplier = toUint32_1.default(lcgArg.multiplier);
        this.increment = toUint32_1.default(lcgArg.increment);
        this.seed = initialSeed;
        this.maxFrame = maxFrame;
        this.index = 0;
    }
    /**
     * Calculates next seed
     * @param frame                     - The advanced frame, which is default 1
     * @return {IteratorResult<number>} - The iterator result included a seed
     */


    (0, _createClass3.default)(LCG, [{
        key: "next",
        value: function next() {
            var frame = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

            if (this.index >= this.maxFrame) return { done: true };
            for (var i = 0; i < frame; i++) {
                this.seed = toUint32_1.default((0, _imul2.default)(this.multiplier, this.seed) + this.increment);
                this.index++;
            }
            return { value: this.seed, done: false };
        }
    }]);
    return LCG;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LCG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbGNnLmpzIiwiY29yZS9sY2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsSUFBQSxhQUFBLFFBQXFCLHNCQUFyQixDQUFBOzs7OztJQUtBOzs7Ozs7Ozs7QUFjSSxpQkFDSSxNQURKLEVBRUksV0FGSixFQUcrQjtZQUEzQixpRUFBbUIsd0JBQVE7OztBQUUzQixZQUFJLHFCQUFhLFFBQWIsQ0FBSixFQUE0QixNQUFNLElBQUksVUFBSixDQUFlLG1CQUFmLENBQU4sQ0FBNUI7QUFFQSxhQUFLLFVBQUwsR0FBa0IsV0FBQSxPQUFBLENBQVMsT0FBTyxVQUFQLENBQTNCLENBSjJCO0FBSzNCLGFBQUssU0FBTCxHQUFrQixXQUFBLE9BQUEsQ0FBUyxPQUFPLFNBQVAsQ0FBM0IsQ0FMMkI7QUFNM0IsYUFBSyxJQUFMLEdBQWtCLFdBQWxCLENBTjJCO0FBTzNCLGFBQUssUUFBTCxHQUFrQixRQUFsQixDQVAyQjtBQVEzQixhQUFLLEtBQUwsR0FBa0IsQ0FBbEIsQ0FSMkI7S0FIL0I7Ozs7Ozs7Ozs7K0JBbUJzQjtnQkFBakIsOERBQWdCLGlCQUFDOztBQUNsQixnQkFBSSxLQUFLLEtBQUwsSUFBYyxLQUFLLFFBQUwsRUFBZSxPQUFPLEVBQUMsTUFBTSxJQUFOLEVBQVIsQ0FBakM7QUFFQSxpQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSixFQUFXLEdBQTNCLEVBQWdDO0FBQzVCLHFCQUFLLElBQUwsR0FBWSxXQUFBLE9BQUEsQ0FDUixvQkFBVSxLQUFLLFVBQUwsRUFBaUIsS0FBSyxJQUFMLENBQTNCLEdBQXdDLEtBQUssU0FBTCxDQUQ1QyxDQUQ0QjtBQUk1QixxQkFBSyxLQUFMLEdBSjRCO2FBQWhDO0FBTUEsbUJBQU8sRUFBQyxPQUFPLEtBQUssSUFBTCxFQUFXLE1BQU0sS0FBTixFQUExQixDQVRrQjs7Ozs7O0FBakMxQixPQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLEVBQUEsT0FBQSxJQUFBLEVBQUE7QURnQ0EsUUFBUSxPQUFSLEdBQWtCLEdBQWxCIiwiZmlsZSI6ImNvcmUvbGNnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCB0b1VpbnQzMl8xID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdG9VaW50MzInKTtcbi8qKlxuICogQ2FsY3VsYXRlcyByYW5kb20gbnVtYmVycyBieSBMQ0dcbiAqL1xuY2xhc3MgTENHIHtcbiAgICAvKipcbiAgICAgKiBJZiBgbWF4RnJhbWVgIGlzIDMsIHlvdSBjYW4gYWR2YW5jZSBhIG1heGltdW0gb2YgMyBmcmFtZXMuXG4gICAgICogQHBhcmFtIGxjZ0FyZyAgICAgICAgLSBUaGUgYXJndW1lbnQgb2YgTENHXG4gICAgICogQHBhcmFtIGluaXRpYWxTZWVkICAgLSBUaGUgZmlyc3QgdGVybSBvZiBMQ0csIHdoaWNoIGlzIHRyZWF0ZWQgYXMgYW4gdW5zaWduZWQgMzItYml0IGludGVnZXJcbiAgICAgKiBAcGFyYW0gbWF4RnJhbWUgICAgICAtIFRoZSBtYXggZnJhbWUgdG8gYmUgYWJsZSB0byBiZSBhZHZhbmNlZFxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IC0gYG1heEZyYW1lYCBtdXN0IG5vdCBiZSBOYU5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsY2dBcmcsIGluaXRpYWxTZWVkLCBtYXhGcmFtZSA9IEluZmluaXR5KSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obWF4RnJhbWUpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG1heEZyYW1lLlwiKTtcbiAgICAgICAgdGhpcy5tdWx0aXBsaWVyID0gdG9VaW50MzJfMS5kZWZhdWx0KGxjZ0FyZy5tdWx0aXBsaWVyKTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgPSB0b1VpbnQzMl8xLmRlZmF1bHQobGNnQXJnLmluY3JlbWVudCk7XG4gICAgICAgIHRoaXMuc2VlZCA9IGluaXRpYWxTZWVkO1xuICAgICAgICB0aGlzLm1heEZyYW1lID0gbWF4RnJhbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIG5leHQgc2VlZFxuICAgICAqIEBwYXJhbSBmcmFtZSAgICAgICAgICAgICAgICAgICAgIC0gVGhlIGFkdmFuY2VkIGZyYW1lLCB3aGljaCBpcyBkZWZhdWx0IDFcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvclJlc3VsdDxudW1iZXI+fSAtIFRoZSBpdGVyYXRvciByZXN1bHQgaW5jbHVkZWQgYSBzZWVkXG4gICAgICovXG4gICAgbmV4dChmcmFtZSA9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5tYXhGcmFtZSlcbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNlZWQgPSB0b1VpbnQzMl8xLmRlZmF1bHQoTWF0aC5pbXVsKHRoaXMubXVsdGlwbGllciwgdGhpcy5zZWVkKSArIHRoaXMuaW5jcmVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5zZWVkLCBkb25lOiBmYWxzZSB9O1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IExDRztcbiIsImltcG9ydCB7TENHQXJnfSBmcm9tICcuL2xjZ0FyZyc7XG5pbXBvcnQgdG9VaW50MzIgZnJvbSAnLi4vaW50ZXJuYWwvdG9VaW50MzInO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgcmFuZG9tIG51bWJlcnMgYnkgTENHXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExDRyBpbXBsZW1lbnRzIEl0ZXJhdG9yPG51bWJlcj4ge1xuICAgIHByaXZhdGUgbXVsdGlwbGllcjogbnVtYmVyO1xuICAgIHByaXZhdGUgaW5jcmVtZW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzZWVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBtYXhGcmFtZTogbnVtYmVyO1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIElmIGBtYXhGcmFtZWAgaXMgMywgeW91IGNhbiBhZHZhbmNlIGEgbWF4aW11bSBvZiAzIGZyYW1lcy5cbiAgICAgKiBAcGFyYW0gbGNnQXJnICAgICAgICAtIFRoZSBhcmd1bWVudCBvZiBMQ0dcbiAgICAgKiBAcGFyYW0gaW5pdGlhbFNlZWQgICAtIFRoZSBmaXJzdCB0ZXJtIG9mIExDRywgd2hpY2ggaXMgdHJlYXRlZCBhcyBhbiB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlclxuICAgICAqIEBwYXJhbSBtYXhGcmFtZSAgICAgIC0gVGhlIG1heCBmcmFtZSB0byBiZSBhYmxlIHRvIGJlIGFkdmFuY2VkXG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gLSBgbWF4RnJhbWVgIG11c3Qgbm90IGJlIE5hTlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBsY2dBcmc6IExDR0FyZyxcbiAgICAgICAgaW5pdGlhbFNlZWQ6IG51bWJlcixcbiAgICAgICAgbWF4RnJhbWU6IG51bWJlciA9IEluZmluaXR5XG4gICAgKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obWF4RnJhbWUpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgbWF4RnJhbWUuXCIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGllciA9IHRvVWludDMyKGxjZ0FyZy5tdWx0aXBsaWVyKTtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnQgID0gdG9VaW50MzIobGNnQXJnLmluY3JlbWVudCk7XG4gICAgICAgIHRoaXMuc2VlZCAgICAgICA9IGluaXRpYWxTZWVkO1xuICAgICAgICB0aGlzLm1heEZyYW1lICAgPSBtYXhGcmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCAgICAgID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIG5leHQgc2VlZFxuICAgICAqIEBwYXJhbSBmcmFtZSAgICAgICAgICAgICAgICAgICAgIC0gVGhlIGFkdmFuY2VkIGZyYW1lLCB3aGljaCBpcyBkZWZhdWx0IDFcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvclJlc3VsdDxudW1iZXI+fSAtIFRoZSBpdGVyYXRvciByZXN1bHQgaW5jbHVkZWQgYSBzZWVkXG4gICAgICovXG4gICAgbmV4dChmcmFtZTogbnVtYmVyID0gMSk6IEl0ZXJhdG9yUmVzdWx0PG51bWJlcj4ge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLm1heEZyYW1lKSByZXR1cm4ge2RvbmU6IHRydWV9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zZWVkID0gdG9VaW50MzIoXG4gICAgICAgICAgICAgICAgTWF0aC5pbXVsKHRoaXMubXVsdGlwbGllciwgdGhpcy5zZWVkKSArIHRoaXMuaW5jcmVtZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMuc2VlZCwgZG9uZTogZmFsc2V9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
