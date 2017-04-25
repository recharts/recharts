var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * @fileOverview Surface
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPresentationAttributes } from '../util/ReactUtils';

var propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
function Surface(props) {
  var children = props.children,
      width = props.width,
      height = props.height,
      viewBox = props.viewBox,
      className = props.className,
      style = props.style,
      others = _objectWithoutProperties(props, ['children', 'width', 'height', 'viewBox', 'className', 'style']);

  var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
  var layerClass = classNames('recharts-surface', className);
  var attrs = getPresentationAttributes(others);

  return React.createElement(
    'svg',
    _extends({}, attrs, {
      className: layerClass,
      width: width,
      height: height,
      style: style,
      viewBox: svgView.x + ' ' + svgView.y + ' ' + svgView.width + ' ' + svgView.height,
      version: '1.1'
    }),
    children
  );
}

Surface.propTypes = propTypes;

export default Surface;