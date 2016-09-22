"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lcg_1 = require('./lcg');
/**
 * Calculates random numbers by LCG.
 * This returns seeds and index numbers.
 */

var IndexedLCG = function () {
    /**
     * If `maxFrame` is 3, you can advance a maximum of 3 frames.
     * @param lcgArg        - The argument of LCG
     * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
     * @param maxFrame      - The max frame to be able to be advanced
     * @throws {RangeError} - `maxFrame` must not be NaN
     */

    function IndexedLCG(lcgArg, initialSeed) {
        var maxFrame = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];
        (0, _classCallCheck3.default)(this, IndexedLCG);

        this.lcg = new lcg_1.default(lcgArg, initialSeed, maxFrame);
        this.index = 0;
    }
    /**
     * Calculates next seed
     * @param frame - The advanced frame, which is default 1
     * @return {IteratorResult<IndexedGeneratorResult>}
     *     - The iterator result included a seed and index number
     */


    (0, _createClass3.default)(IndexedLCG, [{
        key: "next",
        value: function next() {
            var frame = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

            var result = this.lcg.next(frame);
            this.index += frame;
            return {
                value: {
                    seed: result.value,
                    index: this.index
                },
                done: result.done
            };
        }
    }]);
    return IndexedLCG;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IndexedLCG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvaW5kZXhlZExDRy5qcyIsImNvcmUvaW5kZXhlZExDRy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FDQ0EsSUFBQSxRQUFBLFFBQWdCLE9BQWhCLENBQUE7Ozs7OztJQU1BOzs7Ozs7Ozs7QUFXSSx3QkFDSSxNQURKLEVBRUksV0FGSixFQUcrQjtZQUEzQixpRUFBbUIsd0JBQVE7OztBQUUzQixhQUFLLEdBQUwsR0FBYSxJQUFJLE1BQUEsT0FBQSxDQUFJLE1BQVIsRUFBZ0IsV0FBaEIsRUFBNkIsUUFBN0IsQ0FBYixDQUYyQjtBQUczQixhQUFLLEtBQUwsR0FBYSxDQUFiLENBSDJCO0tBSC9COzs7Ozs7Ozs7OzsrQkFlc0I7Z0JBQWpCLDhEQUFnQixpQkFBQzs7QUFDbEIsZ0JBQU0sU0FBUyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBZCxDQUFULENBRFk7QUFFbEIsaUJBQUssS0FBTCxJQUFjLEtBQWQsQ0FGa0I7QUFHbEIsbUJBQU87QUFDSCx1QkFBTztBQUNILDBCQUFNLE9BQU8sS0FBUDtBQUNOLDJCQUFPLEtBQUssS0FBTDtpQkFGWDtBQUlBLHNCQUFNLE9BQU8sSUFBUDthQUxWLENBSGtCOzs7Ozs7QUExQjFCLE9BQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUEsRUFBQSxPQUFBLElBQUEsRUFBQTtBRDhCQSxRQUFRLE9BQVIsR0FBa0IsVUFBbEIiLCJmaWxlIjoiY29yZS9pbmRleGVkTENHLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBsY2dfMSA9IHJlcXVpcmUoJy4vbGNnJyk7XG4vKipcbiAqIENhbGN1bGF0ZXMgcmFuZG9tIG51bWJlcnMgYnkgTENHLlxuICogVGhpcyByZXR1cm5zIHNlZWRzIGFuZCBpbmRleCBudW1iZXJzLlxuICovXG5jbGFzcyBJbmRleGVkTENHIHtcbiAgICAvKipcbiAgICAgKiBJZiBgbWF4RnJhbWVgIGlzIDMsIHlvdSBjYW4gYWR2YW5jZSBhIG1heGltdW0gb2YgMyBmcmFtZXMuXG4gICAgICogQHBhcmFtIGxjZ0FyZyAgICAgICAgLSBUaGUgYXJndW1lbnQgb2YgTENHXG4gICAgICogQHBhcmFtIGluaXRpYWxTZWVkICAgLSBUaGUgZmlyc3QgdGVybSBvZiBMQ0csIHdoaWNoIGlzIHRyZWF0ZWQgYXMgYW4gdW5zaWduZWQgMzItYml0IGludGVnZXJcbiAgICAgKiBAcGFyYW0gbWF4RnJhbWUgICAgICAtIFRoZSBtYXggZnJhbWUgdG8gYmUgYWJsZSB0byBiZSBhZHZhbmNlZFxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IC0gYG1heEZyYW1lYCBtdXN0IG5vdCBiZSBOYU5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsY2dBcmcsIGluaXRpYWxTZWVkLCBtYXhGcmFtZSA9IEluZmluaXR5KSB7XG4gICAgICAgIHRoaXMubGNnID0gbmV3IGxjZ18xLmRlZmF1bHQobGNnQXJnLCBpbml0aWFsU2VlZCwgbWF4RnJhbWUpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBuZXh0IHNlZWRcbiAgICAgKiBAcGFyYW0gZnJhbWUgLSBUaGUgYWR2YW5jZWQgZnJhbWUsIHdoaWNoIGlzIGRlZmF1bHQgMVxuICAgICAqIEByZXR1cm4ge0l0ZXJhdG9yUmVzdWx0PEluZGV4ZWRHZW5lcmF0b3JSZXN1bHQ+fVxuICAgICAqICAgICAtIFRoZSBpdGVyYXRvciByZXN1bHQgaW5jbHVkZWQgYSBzZWVkIGFuZCBpbmRleCBudW1iZXJcbiAgICAgKi9cbiAgICBuZXh0KGZyYW1lID0gMSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxjZy5uZXh0KGZyYW1lKTtcbiAgICAgICAgdGhpcy5pbmRleCArPSBmcmFtZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgc2VlZDogcmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9uZTogcmVzdWx0LmRvbmVcbiAgICAgICAgfTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbmRleGVkTENHO1xuIiwiaW1wb3J0IHtMQ0dBcmd9IGZyb20gJy4vbGNnQXJnJztcbmltcG9ydCBMQ0cgZnJvbSAnLi9sY2cnO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgcmFuZG9tIG51bWJlcnMgYnkgTENHLlxuICogVGhpcyByZXR1cm5zIHNlZWRzIGFuZCBpbmRleCBudW1iZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleGVkTENHIGltcGxlbWVudHMgSXRlcmF0b3I8SW5kZXhlZEdlbmVyYXRvclJlc3VsdD4ge1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIGxjZzogTENHO1xuXG4gICAgLyoqXG4gICAgICogSWYgYG1heEZyYW1lYCBpcyAzLCB5b3UgY2FuIGFkdmFuY2UgYSBtYXhpbXVtIG9mIDMgZnJhbWVzLlxuICAgICAqIEBwYXJhbSBsY2dBcmcgICAgICAgIC0gVGhlIGFyZ3VtZW50IG9mIExDR1xuICAgICAqIEBwYXJhbSBpbml0aWFsU2VlZCAgIC0gVGhlIGZpcnN0IHRlcm0gb2YgTENHLCB3aGljaCBpcyB0cmVhdGVkIGFzIGFuIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2VyXG4gICAgICogQHBhcmFtIG1heEZyYW1lICAgICAgLSBUaGUgbWF4IGZyYW1lIHRvIGJlIGFibGUgdG8gYmUgYWR2YW5jZWRcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSAtIGBtYXhGcmFtZWAgbXVzdCBub3QgYmUgTmFOXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGxjZ0FyZzogTENHQXJnLFxuICAgICAgICBpbml0aWFsU2VlZDogbnVtYmVyLFxuICAgICAgICBtYXhGcmFtZTogbnVtYmVyID0gSW5maW5pdHlcbiAgICApIHtcbiAgICAgICAgdGhpcy5sY2cgICA9IG5ldyBMQ0cobGNnQXJnLCBpbml0aWFsU2VlZCwgbWF4RnJhbWUpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIG5leHQgc2VlZFxuICAgICAqIEBwYXJhbSBmcmFtZSAtIFRoZSBhZHZhbmNlZCBmcmFtZSwgd2hpY2ggaXMgZGVmYXVsdCAxXG4gICAgICogQHJldHVybiB7SXRlcmF0b3JSZXN1bHQ8SW5kZXhlZEdlbmVyYXRvclJlc3VsdD59XG4gICAgICogICAgIC0gVGhlIGl0ZXJhdG9yIHJlc3VsdCBpbmNsdWRlZCBhIHNlZWQgYW5kIGluZGV4IG51bWJlclxuICAgICAqL1xuICAgIG5leHQoZnJhbWU6IG51bWJlciA9IDEpOiBJdGVyYXRvclJlc3VsdDxJbmRleGVkR2VuZXJhdG9yUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGNnLm5leHQoZnJhbWUpO1xuICAgICAgICB0aGlzLmluZGV4ICs9IGZyYW1lO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzZWVkOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb25lOiByZXN1bHQuZG9uZVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIG9mIHtAbGluayBpbmRleGVkR2VuZXJhdG9yI25leHR9IHJldHVybiB2YWx1ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluZGV4ZWRHZW5lcmF0b3JSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiBMQ0csIHdoaWNoIGlzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCB7QGxpbmsgaW5kZXhlZEdlbmVyYXRvciNuZXh0fSBpcyBjYWxsZWQnLlxuICAgICAqIElmIHtAbGluayBpbmRleGVkR2VuZXJhdG9yI25leHR9IGlzIGNhbGxlZCB0d2ljZSwgdGhlIGluZGV4IGlzIDIuXG4gICAgICovXG4gICAgaW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWVkIG9mIExDRywgd2hpY2ggaXMgYW4gdW5zaWduZWQgMzItYml0IGludGVnZXIuXG4gICAgICovXG4gICAgc2VlZDogbnVtYmVyO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
