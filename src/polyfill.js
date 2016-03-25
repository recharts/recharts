(function() {
  const testObject = {};

  if (!(Object.setPrototypeOf || testObject.__proto__)) {
    const nativeGetPrototypeOf = Object.getPrototypeOf;

    Object.getPrototypeOf = function(object) {
      if (object.__proto__) {
        return object.__proto__;
      } else {
        return nativeGetPrototypeOf.call(Object, object);
      }
    }
  }
})();
