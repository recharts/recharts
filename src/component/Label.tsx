import React, { cloneElement, isValidElement, ReactNode, ReactElement, createElement, SVGProps } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Text } from './Text';
import { findAllByType } from '../util/ReactUtils';
import { isNumOrStr, isNumber, isPercent, getPercentValue, uniqueId, mathSign } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { filterProps, ViewBox, PolarViewBox, CartesianViewBox } from '../util/types';

export type ContentType = ReactElement | ((props: Props) => ReactNode);

interface LabelProps {
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  formatter?: Function;
  value?: number | string;
  offset?: number;
  position?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'inside'
    | 'outside'
    | 'insideLeft'
    | 'insideRight'
    | 'insideTop'
    | 'insideBottom'
    | 'insideTopLeft'
    | 'insideBottomLeft'
    | 'insideTopRight'
    | 'insideBottomRight'
    | 'insideStart'
    | 'insideEnd'
    | 'end'
    | 'center'
    | 'centerTop'
    | 'centerBottom'
    | 'middle'
    | {
        x?: number;
        y?: number;
      };
  children?: ReactNode;
  className?: string;
  content?: ContentType;
  textBreakAll?: boolean;
  angle?: number;
}

export type Props = Omit<SVGProps<SVGTextElement>, 'viewBox'> & LabelProps;

export type ImplicitLabelType =
  | boolean
  | string
  | number
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props;

const getLabel = (props: Props) => {
  const { value, formatter } = props;
  const label = _.isNil(props.children) ? value : props.children;

  if (_.isFunction(formatter)) {
    return formatter(label);
  }

  return label;
};

const getDeltaAngle = (startAngle: number, endAngle: number) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

  return sign * deltaAngle;
};

const renderRadialLabel = (labelProps: Props, label: ReactNode, attrs: SVGProps<SVGTextElement>) => {
  const { position, viewBox, offset, className } = labelProps;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox as PolarViewBox;
  const radius = (innerRadius + outerRadius) / 2;
  const deltaAngle = getDeltaAngle(startAngle, endAngle);
  const sign = deltaAngle >= 0 ? 1 : -1;
  let labelAngle, direction;

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

  const startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  const endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  const path = `M${startPoint.x},${startPoint.y}
    A${radius},${radius},0,1,${direction ? 0 : 1},
    ${endPoint.x},${endPoint.y}`;
  const id = _.isNil(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;

  return (
    <text {...attrs} dominantBaseline="central" className={classNames('recharts-radial-bar-label', className)}>
      <defs>
        <path id={id} d={path} />
      </defs>
      <textPath xlinkHref={`#${id}`}>{label}</textPath>
    </text>
  );
};

const getAttrsOfPolarLabel = (props: Props) => {
  const { viewBox, offset, position } = props;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = viewBox as PolarViewBox;
  const midAngle = (startAngle + endAngle) / 2;

  if (position === 'outside') {
    const { x, y } = polarToCartesian(cx, cy, outerRadius + offset, midAngle);

    return {
      x,
      y,
      textAnchor: x >= cx ? 'start' : 'end',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'center') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'centerTop') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'start',
    };
  }

  if (position === 'centerBottom') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'end',
    };
  }

  const r = (innerRadius + outerRadius) / 2;
  const { x, y } = polarToCartesian(cx, cy, r, midAngle);

  return {
    x,
    y,
    textAnchor: 'middle',
    verticalAnchor: 'middle',
  };
};

const getAttrsOfCartesianLabel = (props: Props) => {
  const { viewBox, parentViewBox, offset, position } = props;
  const { x, y, width, height } = viewBox as CartesianViewBox;

  // Define vertical offsets and position inverts based on the value being positive or negative
  const verticalSign = height >= 0 ? 1 : -1;
  const verticalOffset = verticalSign * offset;
  const verticalEnd = verticalSign > 0 ? 'end' : 'start';
  const verticalStart = verticalSign > 0 ? 'start' : 'end';

  // Define horizontal offsets and position inverts based on the value being positive or negative
  const horizontalSign = width >= 0 ? 1 : -1;
  const horizontalOffset = horizontalSign * offset;
  const horizontalEnd = horizontalSign > 0 ? 'end' : 'start';
  const horizontalStart = horizontalSign > 0 ? 'start' : 'end';

  if (position === 'top') {
    const attrs = {
      x: x + width / 2,
      y: y - verticalSign * offset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd,
    };

    return {
      ...attrs,
      ...(parentViewBox
        ? {
            height: Math.max(y - (parentViewBox as CartesianViewBox).y, 0),
            width,
          }
        : {}),
    };
  }

  if (position === 'bottom') {
    const attrs = {
      x: x + width / 2,
      y: y + height + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart,
    };

    return {
      ...attrs,
      ...(parentViewBox
        ? {
            height: Math.max(
              (parentViewBox as CartesianViewBox).y + (parentViewBox as CartesianViewBox).height - (y + height),
              0,
            ),
            width,
          }
        : {}),
    };
  }

  if (position === 'left') {
    const attrs = {
      x: x - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle',
    };

    return {
      ...attrs,
      ...(parentViewBox
        ? {
            width: Math.max(attrs.x - (parentViewBox as CartesianViewBox).x, 0),
            height,
          }
        : {}),
    };
  }

  if (position === 'right') {
    const attrs = {
      x: x + width + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle',
    };
    return {
      ...attrs,
      ...(parentViewBox
        ? {
            width: Math.max(
              (parentViewBox as CartesianViewBox).x + (parentViewBox as CartesianViewBox).width - attrs.x,
              0,
            ),
            height,
          }
        : {}),
    };
  }

  const sizeAttrs = parentViewBox ? { width, height } : {};

  if (position === 'insideLeft') {
    return {
      x: x + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle',
      ...sizeAttrs,
    };
  }

  if (position === 'insideRight') {
    return {
      x: x + width - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle',
      ...sizeAttrs,
    };
  }

  if (position === 'insideTop') {
    return {
      x: x + width / 2,
      y: y + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart,
      ...sizeAttrs,
    };
  }

  if (position === 'insideBottom') {
    return {
      x: x + width / 2,
      y: y + height - verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd,
      ...sizeAttrs,
    };
  }

  if (position === 'insideTopLeft') {
    return {
      x: x + horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart,
      ...sizeAttrs,
    };
  }

  if (position === 'insideTopRight') {
    return {
      x: x + width - horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart,
      ...sizeAttrs,
    };
  }

  if (position === 'insideBottomLeft') {
    return {
      x: x + horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd,
      ...sizeAttrs,
    };
  }

  if (position === 'insideBottomRight') {
    return {
      x: x + width - horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd,
      ...sizeAttrs,
    };
  }

  if (
    _.isObject(position) &&
    (isNumber(position.x) || isPercent(position.x)) &&
    (isNumber(position.y) || isPercent(position.y))
  ) {
    return {
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end',
      ...sizeAttrs,
    };
  }

  return {
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle',
    ...sizeAttrs,
  };
};

const isPolar = (viewBox: CartesianViewBox | PolarViewBox) => isNumber((viewBox as PolarViewBox).cx);

export function Label(props: Props) {
  const { viewBox, position, value, children, content, className = '', textBreakAll } = props;

  if (!viewBox || (_.isNil(value) && _.isNil(children) && !isValidElement(content) && !_.isFunction(content))) {
    return null;
  }

  if (isValidElement(content)) {
    return cloneElement(content, props);
  }

  let label: ReactNode;
  if (_.isFunction(content)) {
    label = createElement(content as any, props);

    if (isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  const isPolarLabel = isPolar(viewBox);
  const attrs = filterProps(props, true);

  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }

  const positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);

  return (
    <Text
      className={classNames('recharts-label', className)}
      {...attrs}
      {...(positionAttrs as any)}
      breakAll={textBreakAll}
    >
      {label}
    </Text>
  );
}

Label.displayName = 'Label';
Label.defaultProps = {
  offset: 5,
};

const parseViewBox = (props: any) => {
  const {
    cx,
    cy,
    angle,
    startAngle,
    endAngle,
    r,
    radius,
    innerRadius,
    outerRadius,
    x,
    y,
    top,
    left,
    width,
    height,
    clockWise,
    labelViewBox,
  } = props;

  if (labelViewBox) {
    return labelViewBox;
  }

  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x) && isNumber(y)) {
      return { x, y, width, height };
    }
    if (isNumber(top) && isNumber(left)) {
      return { x: top, y: left, width, height };
    }
  }

  if (isNumber(x) && isNumber(y)) {
    return { x, y, width: 0, height: 0 };
  }

  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx,
      cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise,
    };
  }

  if (props.viewBox) {
    return props.viewBox;
  }

  return {};
};

const parseLabel = (label: any, viewBox: ViewBox) => {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <Label key="label-implicit" viewBox={viewBox} />;
  }

  if (isNumOrStr(label)) {
    return <Label key="label-implicit" viewBox={viewBox} value={label} />;
  }

  if (isValidElement(label)) {
    if (label.type === Label) {
      return cloneElement(label as any, { key: 'label-implicit', viewBox });
    }

    return <Label key="label-implicit" content={label} viewBox={viewBox} />;
  }

  if (_.isFunction(label)) {
    return <Label key="label-implicit" content={label} viewBox={viewBox} />;
  }

  if (_.isObject(label)) {
    return <Label viewBox={viewBox} {...label} key="label-implicit" />;
  }

  return null;
};

const renderCallByParent = (parentProps: any, viewBox?: ViewBox, checkPropsLabel = true) => {
  if (!parentProps || (!parentProps.children && checkPropsLabel && !parentProps.label)) {
    return null;
  }
  const { children } = parentProps;
  const parentViewBox = parseViewBox(parentProps);

  const explicitChildren = findAllByType(children, Label.displayName).map((child: any, index: number) =>
    cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      key: `label-${index}`,
    }),
  );

  if (!checkPropsLabel) {
    return explicitChildren;
  }
  const implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);

  return [implicitLabel, ...explicitChildren];
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;
