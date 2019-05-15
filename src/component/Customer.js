/**
 * @fileOverview Customer
 */
import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Layer from '../container/Layer';
import { warn } from '../util/LogUtils';

/**
 * custom svg elements by rechart instance props and state.
 * @returns {Object}   svg elements
 */
export default function Customer({ component, ...props }) {
  let child;
  if (isValidElement(component)) {
    child = cloneElement(component, props);
  } else if (_.isFunction(component)) {
    child = component(props);
  } else {
    warn(false, 'Customer\'s props `component` must be React.element or Function, but got %s.', typeof component);
  }
  return <Layer className="recharts-customer-wrapper">{child}</Layer>;
}

Customer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
