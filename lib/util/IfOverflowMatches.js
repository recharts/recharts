"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifOverflowMatches = void 0;

var ifOverflowMatches = function ifOverflowMatches(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};

exports.ifOverflowMatches = ifOverflowMatches;