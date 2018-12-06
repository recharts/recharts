import 'core-js/es6/math';
import 'core-js/es6/number';
/* eslint no-proto: 0 */
const testObject = {};

if (!(Object.setPrototypeOf || testObject.__proto__)) {
  const nativeGetPrototypeOf = Object.getPrototypeOf;

  Object.getPrototypeOf = (object) => {
    if (object.__proto__) {
      return object.__proto__;
    }

    return nativeGetPrototypeOf.call(Object, object);
  };
}
