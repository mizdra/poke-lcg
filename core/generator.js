"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _imul = require("babel-runtime/core-js/math/imul");

var _imul2 = _interopRequireDefault(_imul);

var _isNan = require("babel-runtime/core-js/number/is-nan");

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toUint32_1 = require('../internal/toUint32');
/**
 * The generator for LCG.
 * If maxFrame is 3, you can advance a maximum of 3 frames.
 * @param lcgArg        - The argument of LCG
 * @param initialSeed   - The first term of LCG, which is treated as an unsigned 32-bit integer
 * @param maxFrame      - The max frame to be able to be advanced
 * @returns             - A iterator, which returns seed
 * @throws {RangeError} - `skip` must not be NaN
 */
function generator(lcgArg, initialSeed) {
    var maxFrame = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];

    if ((0, _isNan2.default)(maxFrame)) throw new RangeError("Invalid maxFrame.");
    return _regenerator2.default.mark(function _callee() {
        var multiplier, increment, seed, index;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        multiplier = toUint32_1.default(lcgArg.multiplier);
                        increment = toUint32_1.default(lcgArg.increment);
                        seed = toUint32_1.default(initialSeed);
                        index = 0;

                    case 4:
                        if (!(index < maxFrame)) {
                            _context.next = 11;
                            break;
                        }

                        seed = toUint32_1.default((0, _imul2.default)(multiplier, seed) + increment);
                        index++;
                        _context.next = 9;
                        return seed;

                    case 9:
                        _context.next = 4;
                        break;

                    case 11:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    })();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZ2VuZXJhdG9yLmpzIiwiY29yZS9nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxJQUFBLGFBQUEsUUFBcUIsc0JBQXJCLENBQUE7Ozs7Ozs7Ozs7QUFXQSxTQUFBLFNBQUEsQ0FBa0MsTUFBbEMsRUFBa0QsV0FBbEQsRUFBa0c7UUFBM0IsaUVBQW1CLHdCQUFROztBQUM5RixRQUFJLHFCQUFhLFFBQWIsQ0FBSixFQUE0QixNQUFNLElBQUksVUFBSixDQUFlLG1CQUFmLENBQU4sQ0FBNUI7QUFFQSxXQUFPLDJCQUFDOzs7Ozs7QUFDRSxxQ0FBYSxXQUFBLE9BQUEsQ0FBUyxPQUFPLFVBQVA7QUFDdEIsb0NBQWEsV0FBQSxPQUFBLENBQVMsT0FBTyxTQUFQO0FBQ3hCLCtCQUFlLFdBQUEsT0FBQSxDQUFTLFdBQVQ7QUFDZixnQ0FBZTs7OzhCQUVaLFFBQVEsUUFBUjs7Ozs7QUFDSCwrQkFBTyxXQUFBLE9BQUEsQ0FBUyxvQkFBVSxVQUFWLEVBQXNCLElBQXRCLElBQThCLFNBQTlCLENBQWhCO0FBQ0E7OytCQUNNOzs7Ozs7Ozs7Ozs7S0FUTixDQUFELEVBQVAsQ0FIOEY7Q0FBbEc7QUFBQSxPQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLEVBQUEsT0FBQSxJQUFBLEVBQUE7QURlQSxRQUFRLE9BQVIsR0FBa0IsU0FBbEIiLCJmaWxlIjoiY29yZS9nZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHRvVWludDMyXzEgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90b1VpbnQzMicpO1xuLyoqXG4gKiBUaGUgZ2VuZXJhdG9yIGZvciBMQ0cuXG4gKiBJZiBtYXhGcmFtZSBpcyAzLCB5b3UgY2FuIGFkdmFuY2UgYSBtYXhpbXVtIG9mIDMgZnJhbWVzLlxuICogQHBhcmFtIGxjZ0FyZyAgICAgICAgLSBUaGUgYXJndW1lbnQgb2YgTENHXG4gKiBAcGFyYW0gaW5pdGlhbFNlZWQgICAtIFRoZSBmaXJzdCB0ZXJtIG9mIExDRywgd2hpY2ggaXMgdHJlYXRlZCBhcyBhbiB1bnNpZ25lZCAzMi1iaXQgaW50ZWdlclxuICogQHBhcmFtIG1heEZyYW1lICAgICAgLSBUaGUgbWF4IGZyYW1lIHRvIGJlIGFibGUgdG8gYmUgYWR2YW5jZWRcbiAqIEByZXR1cm5zICAgICAgICAgICAgIC0gQSBpdGVyYXRvciwgd2hpY2ggcmV0dXJucyBzZWVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSAtIGBza2lwYCBtdXN0IG5vdCBiZSBOYU5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdG9yKGxjZ0FyZywgaW5pdGlhbFNlZWQsIG1heEZyYW1lID0gSW5maW5pdHkpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKG1heEZyYW1lKSlcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIG1heEZyYW1lLlwiKTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0b1VpbnQzMl8xLmRlZmF1bHQobGNnQXJnLm11bHRpcGxpZXIpO1xuICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSB0b1VpbnQzMl8xLmRlZmF1bHQobGNnQXJnLmluY3JlbWVudCk7XG4gICAgICAgIGxldCBzZWVkID0gdG9VaW50MzJfMS5kZWZhdWx0KGluaXRpYWxTZWVkKTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbWF4RnJhbWUpIHtcbiAgICAgICAgICAgIHNlZWQgPSB0b1VpbnQzMl8xLmRlZmF1bHQoTWF0aC5pbXVsKG11bHRpcGxpZXIsIHNlZWQpICsgaW5jcmVtZW50KTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB5aWVsZCBzZWVkO1xuICAgICAgICB9XG4gICAgfSkoKTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdlbmVyYXRvcjtcbiIsImltcG9ydCB7TENHQXJnfSBmcm9tICcuL2xjZ0FyZyc7XG5pbXBvcnQgdG9VaW50MzIgZnJvbSAnLi4vaW50ZXJuYWwvdG9VaW50MzInO1xuXG4vKipcbiAqIFRoZSBnZW5lcmF0b3IgZm9yIExDRy5cbiAqIElmIG1heEZyYW1lIGlzIDMsIHlvdSBjYW4gYWR2YW5jZSBhIG1heGltdW0gb2YgMyBmcmFtZXMuXG4gKiBAcGFyYW0gbGNnQXJnICAgICAgICAtIFRoZSBhcmd1bWVudCBvZiBMQ0dcbiAqIEBwYXJhbSBpbml0aWFsU2VlZCAgIC0gVGhlIGZpcnN0IHRlcm0gb2YgTENHLCB3aGljaCBpcyB0cmVhdGVkIGFzIGFuIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2VyXG4gKiBAcGFyYW0gbWF4RnJhbWUgICAgICAtIFRoZSBtYXggZnJhbWUgdG8gYmUgYWJsZSB0byBiZSBhZHZhbmNlZFxuICogQHJldHVybnMgICAgICAgICAgICAgLSBBIGl0ZXJhdG9yLCB3aGljaCByZXR1cm5zIHNlZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IC0gYHNraXBgIG11c3Qgbm90IGJlIE5hTlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0b3IobGNnQXJnOiBMQ0dBcmcsIGluaXRpYWxTZWVkOiBudW1iZXIsIG1heEZyYW1lOiBudW1iZXIgPSBJbmZpbml0eSk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgaWYgKE51bWJlci5pc05hTihtYXhGcmFtZSkpIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBtYXhGcmFtZS5cIik7XG5cbiAgICByZXR1cm4gKGZ1bmN0aW9uKiAoKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IHRvVWludDMyKGxjZ0FyZy5tdWx0aXBsaWVyKTtcbiAgICAgICAgY29uc3QgaW5jcmVtZW50ICA9IHRvVWludDMyKGxjZ0FyZy5pbmNyZW1lbnQpO1xuICAgICAgICBsZXQgc2VlZCAgICAgICAgID0gdG9VaW50MzIoaW5pdGlhbFNlZWQpO1xuICAgICAgICBsZXQgaW5kZXggICAgICAgID0gMDtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBtYXhGcmFtZSkge1xuICAgICAgICAgICAgc2VlZCA9IHRvVWludDMyKE1hdGguaW11bChtdWx0aXBsaWVyLCBzZWVkKSArIGluY3JlbWVudCk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgeWllbGQgc2VlZDtcbiAgICAgICAgfVxuICAgIH0pKCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
