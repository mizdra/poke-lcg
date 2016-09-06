"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generator_1 = require('./generator');
/**
 * The indexed generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG, whose properties are treated as unsigned 32-bit integers
 * @param initialSeed   - The first term of LCG, which is treated as unsigned 32-bit integers
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns {@link IndexedGeneratorResult}
 * @throws {RangeError} - `maxFrame` must be non-NaN
 */
function indexedGenerator(lcgArg, initialSeed) {
    var maxFrame = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];

    var g = generator_1.default(lcgArg, initialSeed, maxFrame);
    return _regenerator2.default.mark(function _callee() {
        var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, seed;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        index = 0;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 4;
                        _iterator = (0, _getIterator3.default)(g);

                    case 6:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 14;
                            break;
                        }

                        seed = _step.value;

                        index++;
                        _context.next = 11;
                        return { seed: seed, index: index };

                    case 11:
                        _iteratorNormalCompletion = true;
                        _context.next = 6;
                        break;

                    case 14:
                        _context.next = 20;
                        break;

                    case 16:
                        _context.prev = 16;
                        _context.t0 = _context["catch"](4);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 20:
                        _context.prev = 20;
                        _context.prev = 21;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 23:
                        _context.prev = 23;

                        if (!_didIteratorError) {
                            _context.next = 26;
                            break;
                        }

                        throw _iteratorError;

                    case 26:
                        return _context.finish(23);

                    case 27:
                        return _context.finish(20);

                    case 28:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 16, 20, 28], [21,, 23, 27]]);
    })();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = indexedGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvaW5kZXhlZEdlbmVyYXRvci5qcyIsImNvcmUvaW5kZXhlZEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FDQ0EsSUFBQSxjQUFBLFFBQXNCLGFBQXRCLENBQUE7Ozs7Ozs7Ozs7QUFXQSxTQUFBLGdCQUFBLENBQXlDLE1BQXpDLEVBQXlELFdBQXpELEVBQXlHO1FBQTNCLGlFQUFtQix3QkFBUTs7QUFDckcsUUFBTSxJQUFJLFlBQUEsT0FBQSxDQUFVLE1BQVYsRUFBa0IsV0FBbEIsRUFBK0IsUUFBL0IsQ0FBSixDQUQrRjtBQUVyRyxXQUFPLDJCQUFDOzs7Ozs7O0FBQ0EsZ0NBQVE7Ozs7OytEQUNPOzs7Ozs7OztBQUFSOztBQUNQOzsrQkFDTSxFQUFDLE1BQUEsSUFBQSxFQUFNLE9BQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FKYixDQUFELEVBQVAsQ0FGcUc7Q0FBekc7QUFBQSxPQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLEVBQUEsT0FBQSxJQUFBLEVBQUE7QURVQSxRQUFRLE9BQVIsR0FBa0IsZ0JBQWxCIiwiZmlsZSI6ImNvcmUvaW5kZXhlZEdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgZ2VuZXJhdG9yXzEgPSByZXF1aXJlKCcuL2dlbmVyYXRvcicpO1xuLyoqXG4gKiBUaGUgaW5kZXhlZCBnZW5lcmF0b3IgZm9yIExDRy5cbiAqIElmIG1heEZyYW1lIGlzIDMsIHlvdSBjYW4gYWR2YW5jZSBhIG1heGltdW0gb2YgMyBmcmFtZXMuXG4gKiBAcGFyYW0gbGNnQXJnICAgICAgICAtIFRoZSBhcmd1bWVudCBvZiBMQ0csIHdob3NlIHByb3BlcnRpZXMgYXJlIHRyZWF0ZWQgYXMgdW5zaWduZWQgMzItYml0IGludGVnZXJzXG4gKiBAcGFyYW0gaW5pdGlhbFNlZWQgICAtIFRoZSBmaXJzdCB0ZXJtIG9mIExDRywgd2hpY2ggaXMgdHJlYXRlZCBhcyB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlcnNcbiAqIEBwYXJhbSBtYXhGcmFtZSAgICAgIC0gVGhlIG1heCBmcmFtZSB0byBiZSBhYmxlIHRvIGJlIGFkdmFuY2VkXG4gKiBAcmV0dXJucyAgICAgICAgICAgICAtIEEgaXRlcmF0b3IsIHdoaWNoIHJldHVybnMge0BsaW5rIEluZGV4ZWRHZW5lcmF0b3JSZXN1bHR9XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSAtIGBtYXhGcmFtZWAgbXVzdCBiZSBub24tTmFOXG4gKi9cbmZ1bmN0aW9uIGluZGV4ZWRHZW5lcmF0b3IobGNnQXJnLCBpbml0aWFsU2VlZCwgbWF4RnJhbWUgPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IGcgPSBnZW5lcmF0b3JfMS5kZWZhdWx0KGxjZ0FyZywgaW5pdGlhbFNlZWQsIG1heEZyYW1lKTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qgc2VlZCBvZiBnKSB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgeWllbGQgeyBzZWVkOiBzZWVkLCBpbmRleDogaW5kZXggfTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbmRleGVkR2VuZXJhdG9yO1xuIiwiaW1wb3J0IHtMQ0dBcmd9IGZyb20gJy4vbGNnQXJnJztcbmltcG9ydCBnZW5lcmF0b3IgZnJvbSAnLi9nZW5lcmF0b3InO1xuXG4vKipcbiAqIFRoZSBpbmRleGVkIGdlbmVyYXRvciBmb3IgTENHLlxuICogSWYgbWF4RnJhbWUgaXMgMywgeW91IGNhbiBhZHZhbmNlIGEgbWF4aW11bSBvZiAzIGZyYW1lcy5cbiAqIEBwYXJhbSBsY2dBcmcgICAgICAgIC0gVGhlIGFyZ3VtZW50IG9mIExDRywgd2hvc2UgcHJvcGVydGllcyBhcmUgdHJlYXRlZCBhcyB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlcnNcbiAqIEBwYXJhbSBpbml0aWFsU2VlZCAgIC0gVGhlIGZpcnN0IHRlcm0gb2YgTENHLCB3aGljaCBpcyB0cmVhdGVkIGFzIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2Vyc1xuICogQHBhcmFtIG1heEZyYW1lICAgICAgLSBUaGUgbWF4IGZyYW1lIHRvIGJlIGFibGUgdG8gYmUgYWR2YW5jZWRcbiAqIEByZXR1cm5zICAgICAgICAgICAgIC0gQSBpdGVyYXRvciwgd2hpY2ggcmV0dXJucyB7QGxpbmsgSW5kZXhlZEdlbmVyYXRvclJlc3VsdH1cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IC0gYG1heEZyYW1lYCBtdXN0IGJlIG5vbi1OYU5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXhlZEdlbmVyYXRvcihsY2dBcmc6IExDR0FyZywgaW5pdGlhbFNlZWQ6IG51bWJlciwgbWF4RnJhbWU6IG51bWJlciA9IEluZmluaXR5KTogSXRlcmFibGVJdGVyYXRvcjxJbmRleGVkR2VuZXJhdG9yUmVzdWx0PiB7XG4gICAgY29uc3QgZyA9IGdlbmVyYXRvcihsY2dBcmcsIGluaXRpYWxTZWVkLCBtYXhGcmFtZSk7XG4gICAgcmV0dXJuIChmdW5jdGlvbiogKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SW5kZXhlZEdlbmVyYXRvclJlc3VsdD4ge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHNlZWQgb2YgZykge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHlpZWxkIHtzZWVkLCBpbmRleH07XG4gICAgICAgIH1cbiAgICB9KSgpO1xufVxuXG4vKipcbiAqIFRoZSBpbnRlcmZhY2Ugb2Yge0BsaW5rIGluZGV4ZWRHZW5lcmF0b3IjbmV4dH0gcmV0dXJuIHZhbHVlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5kZXhlZEdlbmVyYXRvclJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIExDRywgd2hpY2ggaXMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGF0IHtAbGluayBpbmRleGVkR2VuZXJhdG9yI25leHR9IGlzIGNhbGxlZCcuXG4gICAgICogSWYge0BsaW5rIGluZGV4ZWRHZW5lcmF0b3IjbmV4dH0gaXMgY2FsbGVkIHR3aWNlLCB0aGUgaW5kZXggaXMgMi5cbiAgICAgKi9cbiAgICBpbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlZWQgb2YgTENHLCB3aGljaCBpcyB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlci5cbiAgICAgKi9cbiAgICBzZWVkOiBudW1iZXI7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
