import React, { PropTypes } from 'react';
import _ from 'lodash';
import Text from './Text';
import { getPresentationAttributes } from '../util/ReactUtils';
import { isNumber, isPercent, getPercentValue } from '../util/DataUtils';

const viewBoxShape = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
});

const propTypes = {
  viewBox: viewBoxShape,
  formatter: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.number,
  position: PropTypes.oneOf([
    'top', 'left', 'right', 'bottom', 'inside',
    'insideLeft', 'insideRight', 'insideTop', 'insideBottom',
    'insideTopLeft', 'insideBottomLeft', 'insideTopRight', 'insideBottomRight',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  offset: 5,
};

const getLabel = (props) => {
  if (!_.isNil(props.children)) { return props.children; }

  const { value, formatter } = props;

  if (_.isFunction(formatter)) {
    return formatter(value);
  }

  return value;
};

function Label(props) {
  const { viewBox, position, offset, value, children, formatter } = props;

  if (!viewBox || (_.isNil(value) && _.isNil(children))) { return null; }

  const label = getLabel(props);
  const attrs = getPresentationAttributes(props);
  const { x, y, width, height } = viewBox;
  const sign = height >= 0 ? 1 : -1;

  if (position === 'top') {
    return (
      <Text
        x={x + width / 2}
        y={y - sign * offset}
        {...attrs}
        textAnchor="middle"
        verticalAnchor="end"
      >{label}</Text>
    );
  }

  if (position === 'bottom') {
    return (
      <Text
        x={x + width / 2}
        y={y + height + sign * offset}
        {...attrs}
        textAnchor="middle"
        verticalAnchor="start"
      >{label}</Text>
    );
  }

  if (position === 'left') {
    return (
      <Text
        x={x - offset}
        y={y + height / 2}
        {...attrs}
        textAnchor="end"
        verticalAnchor="middle"
      >{label}</Text>
    );
  }

  if (position === 'right') {
    return (
      <Text
        x={x + width + offset}
        y={y + height / 2}
        {...attrs}
        textAnchor="start"
        verticalAnchor="middle"
      >{label}</Text>
    );
  }

  if (position === 'insideLeft') {
    return (
      <Text
        x={x + offset}
        y={y + height / 2}
        {...attrs}
        textAnchor="start"
        verticalAnchor="middle"
      >{label}</Text>
    );
  }

  if (position === 'insideRight') {
    return (
      <Text
        x={x + width - offset}
        y={y + height / 2}
        {...attrs}
        textAnchor="end"
        verticalAnchor="middle"
      >{label}</Text>
    );
  }

  if (position === 'insideTop') {
    return (
      <Text
        x={x + width / 2}
        y={y + sign * offset}
        {...attrs}
        textAnchor="middle"
        verticalAnchor="start"
      >{label}</Text>
    );
  }

  if (position === 'insideBottom') {
    return (
      <Text
        x={x + width / 2}
        y={y + height - sign * offset}
        {...attrs}
        textAnchor="middle"
        verticalAnchor="end"
      >{label}</Text>
    );
  }

  if (position === 'insideTopLeft') {
    return (
      <Text
        x={x + offset}
        y={y + sign * offset}
        {...attrs}
        textAnchor="start"
        verticalAnchor="start"
      >{label}</Text>
    );
  }

  if (position === 'insideTopRight') {
    return (
      <Text
        x={x + width - offset}
        y={y + sign * offset}
        {...attrs}
        textAnchor="end"
        verticalAnchor="start"
      >{label}</Text>
    );
  }

  if (position === 'insideBottomLeft') {
    return (
      <Text
        x={x + offset}
        y={y + height - sign * offset}
        {...attrs}
        textAnchor="start"
        verticalAnchor="end"
      >{label}</Text>
    );
  }

  if (position === 'insideBottomRight') {
    return (
      <Text
        x={x + width - offset}
        y={y + height - sign * offset}
        {...attrs}
        textAnchor="end"
        verticalAnchor="end"
      >{label}</Text>
    );
  }

  if (_.isObject(position) && (isNumber(position.x) || isPercent(position.x)) &&
    (isNumber(position.y) || isPercent(position.y))
  ) {
    return (
      <Text
        x={x + getPercentValue(position.x, width)}
        y={y + getPercentValue(position.y, height)}
        {...attrs}
        textAnchor="end"
        verticalAnchor="end"
      >{label}</Text>
    );
  }

  return (
    <Text
      x={x + width / 2}
      y={y + height / 2}
      {...attrs}
      textAnchor="middle"
      verticalAnchor="middle"
    >{label}</Text>
  );
}

Label.displayName = 'Label';
Label.defaultProps = defaultProps;
Label.propTypes = propTypes;

export default Label;
