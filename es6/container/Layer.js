var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * @fileOverview Layer
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

function Layer(props) {
  var children = props.children,
      className = props.className,
      others = _objectWithoutProperties(props, ['children', 'className']);

  var layerClass = classNames('recharts-layer', className);

  return React.createElement(
    'g',
    _extends({ className: layerClass }, others),
    children
  );
}

Layer.propTypes = propTypes;

export default Layer;