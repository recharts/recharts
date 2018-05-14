var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview Cross
 */
import React from 'react';
import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

function Cell() {
  return null;
}

Cell.propTypes = _extends({}, PRESENTATION_ATTRIBUTES);
Cell.displayName = 'Cell';

export default Cell;