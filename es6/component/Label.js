import _isObject from 'lodash/isObject';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Text from './Text';
import { getPresentationAttributes, findAllByType } from '../util/ReactUtils';
import { isNumOrStr, isNumber, isPercent, getPercentValue, uniqueId, mathSign } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';

var cartesianViewBoxShape = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
});
var polarViewBoxShape = PropTypes.shape({
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number
});

var propTypes = {
  viewBox: PropTypes.oneOfType([cartesianViewBoxShape, polarViewBoxShape]),
  formatter: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'inside', 'outside', 'insideLeft', 'insideRight', 'insideTop', 'insideBottom', 'insideTopLeft', 'insideBottomLeft', 'insideTopRight', 'insideBottomRight', 'insideStart', 'insideEnd', 'end', 'center']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

var defaultProps = {
  offset: 5
};

var getLabel = function getLabel(props) {
  var value = props.value,
      formatter = props.formatter;

  var label = _isNil(props.children) ? value : props.children;

  if (_isFunction(formatter)) {
    return formatter(label);
  }

  return label;
};

var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
};

var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
  var position = labelProps.position,
      viewBox = labelProps.viewBox,
      offset = labelProps.offset,
      className = labelProps.className;
  var cx = viewBox.cx,
      cy = viewBox.cy,
      innerRadius = viewBox.innerRadius,
      outerRadius = viewBox.outerRadius,
      startAngle = viewBox.startAngle,
      endAngle = viewBox.endAngle,
      clockWise = viewBox.clockWise;

  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle(startAngle, endAngle);
  var sign = deltaAngle >= 0 ? 1 : -1;
  var labelAngle = void 0,
      direction = void 0;

  if (position === 'insideStart') {
    labelAngle = startAngle + sign * offset;
    direction = clockWise;
  } else if (position === 'insideEnd') {
    labelAngle = endAngle - sign * offset;
    direction = !clockWise;
  } else if (position === 'end') {
    labelAngle = endAngle + sign * offset;
    direction = clockWise;
  }

  direction = deltaAngle <= 0 ? direction : !direction;

  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path = 'M' + startPoint.x + ',' + startPoint.y + '\n    A' + radius + ',' + radius + ',0,1,' + (direction ? 0 : 1) + ',\n    ' + endPoint.x + ',' + endPoint.y;
  var id = _isNil(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;

  return React.createElement(
    'text',
    _extends({}, attrs, {
      dominantBaseline: 'central',
      className: classNames('recharts-radial-bar-label', className)
    }),
    React.createElement(
      'defs',
      null,
      React.createElement('path', { id: id, d: path })
    ),
    React.createElement(
      'textPath',
      { xlinkHref: '#' + id },
      label
    )
  );
};

var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
  var viewBox = props.viewBox,
      offset = props.offset,
      position = props.position;
  var cx = viewBox.cx,
      cy = viewBox.cy,
      innerRadius = viewBox.innerRadius,
      outerRadius = viewBox.outerRadius,
      startAngle = viewBox.startAngle,
      endAngle = viewBox.endAngle;

  var midAngle = (startAngle + endAngle) / 2;

  if (position === 'outside') {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle),
        _x = _polarToCartesian.x,
        _y = _polarToCartesian.y;

    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? 'start' : 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'center') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'middle'
    };
  }

  var r = (innerRadius + outerRadius) / 2;

  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle),
      x = _polarToCartesian2.x,
      y = _polarToCartesian2.y;

  return {
    x: x,
    y: y,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};

var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
  var viewBox = props.viewBox,
      offset = props.offset,
      position = props.position;
  var x = viewBox.x,
      y = viewBox.y,
      width = viewBox.width,
      height = viewBox.height;

  var sign = height >= 0 ? 1 : -1;

  if (position === 'top') {
    return {
      x: x + width / 2,
      y: y - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }

  if (position === 'bottom') {
    return {
      x: x + width / 2,
      y: y + height + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'left') {
    return {
      x: x - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'right') {
    return {
      x: x + width + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideLeft') {
    return {
      x: x + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideRight') {
    return {
      x: x + width - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideTop') {
    return {
      x: x + width / 2,
      y: y + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideBottom') {
    return {
      x: x + width / 2,
      y: y + height - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }

  if (position === 'insideTopLeft') {
    return {
      x: x + offset,
      y: y + sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideTopRight') {
    return {
      x: x + width - offset,
      y: y + sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideBottomLeft') {
    return {
      x: x + offset,
      y: y + height - sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'end'
    };
  }

  if (position === 'insideBottomRight') {
    return {
      x: x + width - offset,
      y: y + height - sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'end'
    };
  }

  if (_isObject(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return {
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end'
    };
  }

  return {
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};

var isPolar = function isPolar(viewBox) {
  return isNumber(viewBox.cx);
};

function Label(props) {
  var viewBox = props.viewBox,
      position = props.position,
      value = props.value,
      children = props.children,
      content = props.content,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className;


  if (!viewBox || _isNil(value) && _isNil(children) && !isValidElement(content) && !_isFunction(content)) {
    return null;
  }

  if (isValidElement(content)) {
    return cloneElement(content, props);
  }

  var label = void 0;
  if (_isFunction(content)) {
    label = content(props);

    if (isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  var isPolarLabel = isPolar(viewBox);
  var attrs = getPresentationAttributes(props);

  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }

  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);

  return React.createElement(
    Text,
    _extends({
      className: classNames('recharts-label', className)
    }, attrs, positionAttrs),
    label
  );
}

Label.displayName = 'Label';
Label.defaultProps = defaultProps;
Label.propTypes = propTypes;

var parseViewBox = function parseViewBox(props) {
  var cx = props.cx,
      cy = props.cy,
      angle = props.angle,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      r = props.r,
      radius = props.radius,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      x = props.x,
      y = props.y,
      top = props.top,
      left = props.left,
      width = props.width,
      height = props.height,
      clockWise = props.clockWise;


  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x) && isNumber(y)) {
      return { x: x, y: y, width: width, height: height };
    } else if (isNumber(top) && isNumber(left)) {
      return { x: top, y: left, width: width, height: height };
    }
  }

  if (isNumber(x) && isNumber(y)) {
    return { x: x, y: y, width: 0, height: 0 };
  }

  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx: cx, cy: cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise: clockWise
    };
  }

  if (props.viewBox) {
    return props.viewBox;
  }

  return {};
};

var parseLabel = function parseLabel(label, viewBox) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return React.createElement(Label, { key: 'label-implicit', viewBox: viewBox });
  }

  if (isNumOrStr(label)) {
    return React.createElement(Label, { key: 'label-implicit', viewBox: viewBox, value: label });
  }

  if (isValidElement(label) || _isFunction(label)) {
    return React.createElement(Label, { key: 'label-implicit', content: label, viewBox: viewBox });
  }

  if (_isObject(label)) {
    return React.createElement(Label, _extends({ viewBox: viewBox }, label, { key: 'label-implicit' }));
  }

  return null;
};

var renderCallByParent = function renderCallByParent(parentProps, viewBox) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;

  var parentViewBox = parseViewBox(parentProps);

  var explicitChilren = findAllByType(children, Label).map(function (child, index) {
    return cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      key: 'label-' + index
    });
  });

  if (!ckeckPropsLabel) {
    return explicitChilren;
  }
  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);

  return [implicitLabel].concat(_toConsumableArray(explicitChilren));
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;

export default Label;