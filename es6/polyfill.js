import 'core-js/es6/math';
/* eslint no-proto: 0 */
var testObject = {};

if (!(Object.setPrototypeOf || testObject.__proto__)) {
  var nativeGetPrototypeOf = Object.getPrototypeOf;

  Object.getPrototypeOf = function (object) {
    if (object.__proto__) {
      return object.__proto__;
    }

    return nativeGetPrototypeOf.call(Object, object);
  };
}