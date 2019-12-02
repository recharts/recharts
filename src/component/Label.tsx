import React, { cloneElement, isValidElement, ReactNode, ReactElement, SVGProps } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Text from './Text';
import { findAllByType } from '../util/ReactUtils';
import { isNumOrStr, isNumber, isPercent, getPercentValue, uniqueId, mathSign } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { PresentationAttributes, filterProps } from '../util/types';

interface CartesianViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface PolarViewBox {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  clockWise?: boolean;
}

type ViewBox = CartesianViewBox | PolarViewBox;
export type ContentType = ReactElement | ((props: Props) => ReactNode)

interface LabelProps {
  viewBox?: ViewBox;
  formatter?: Function;
  value?: number | string;
  offset?: number;
  position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' |
    'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' |
    'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' |
    'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | {
      x?: number
      y?: number
    }
  children?: ReactNode;
  className?: string;
  content?: ContentType;
}

type Props = Omit<PresentationAttributes<SVGTextElement>, 'viewBox'> & LabelProps;

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

const renderRadialLabel = (labelProps: Props, label: ReactNode, attrs: PresentationAttributes<SVGTextElement>) => {
  const { position, viewBox, offset, className } = labelProps;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    clockWise } = (viewBox as PolarViewBox);
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
    <text
      {...attrs}
      dominantBaseline="central"
      className={classNames('recharts-radial-bar-label', className)}
    >
      <defs><path id={id} d={path} /></defs>
      <textPath xlinkHref={`#${id}`}>{label}</textPath>
    </text>
  );
};

const getAttrsOfPolarLabel = (props: Props) => {
  const { viewBox, offset, position } = props;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = (viewBox as PolarViewBox);
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
  const { viewBox, offset, position } = props;
  const { x, y, width, height } = (viewBox as CartesianViewBox);
  const sign = height >= 0 ? 1 : -1;

  if (position === 'top') {
    return {
      x: x + width / 2,
      y: y - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: sign > 0 ? 'end' : 'start',
    };
  }

  if (position === 'bottom') {
    return {
      x: x + width / 2,
      y: y + height + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start',
    };
  }

  if (position === 'left') {
    return {
      x: x - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'right') {
    return {
      x: x + width + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'insideLeft') {
    return {
      x: x + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'insideRight') {
    return {
      x: x + width - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle',
    };
  }

  if (position === 'insideTop') {
    return {
      x: x + width / 2,
      y: y + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start',
    };
  }

  if (position === 'insideBottom') {
    return {
      x: x + width / 2,
      y: y + height - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'end',
    };
  }

  if (position === 'insideTopLeft') {
    return {
      x: x + offset,
      y: y + sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'start',
    };
  }

  if (position === 'insideTopRight') {
    return {
      x: x + width - offset,
      y: y + sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'start',
    };
  }

  if (position === 'insideBottomLeft') {
    return {
      x: x + offset,
      y: y + height - sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'end',
    };
  }

  if (position === 'insideBottomRight') {
    return {
      x: x + width - offset,
      y: y + height - sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'end',
    };
  }

  if (_.isObject(position) && (isNumber(position.x) || isPercent(position.x)) &&
    (isNumber(position.y) || isPercent(position.y))
  ) {
    return {
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end',
    };
  }

  return {
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle',
  };
};

const isPolar = (viewBox: CartesianViewBox | PolarViewBox) => isNumber((viewBox as PolarViewBox).cx);

function Label(props: Props) {
  const { viewBox, position, value, children, content, className = '' } = props;

  if (!viewBox || (_.isNil(value) && _.isNil(children) &&
    !isValidElement(content) && !_.isFunction(content))) { return null; }

  if (isValidElement(content)) { return cloneElement(content, props); }

  let label: ReactNode;
  if (_.isFunction(content)) {
    label = content(props);

    if (isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  const isPolarLabel = isPolar(viewBox);
  const attrs = filterProps(props, true);

  if (isPolarLabel && (position === 'insideStart' ||
    position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }

  const positionAttrs = isPolarLabel ?
    getAttrsOfPolarLabel(props) :
    getAttrsOfCartesianLabel(props);

  return (
    <Text
      className={classNames('recharts-label', className)}
      {...attrs}
      {...positionAttrs as any}
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
  const { cx, cy, angle, startAngle, endAngle, r, radius, innerRadius, outerRadius,
    x, y, top, left, width, height, clockWise } = props;

  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x) && isNumber(y)) {
      return { x, y, width, height };
    } if (isNumber(top) && isNumber(left)) {
      return { x: top, y: left, width, height };
    }
  }

  if (isNumber(x) && isNumber(y)) {
    return { x, y, width: 0, height: 0 };
  }

  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx, cy,
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
  if (!label) { return null; }

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

const renderCallByParent = (parentProps: any, viewBox?: ViewBox, ckeckPropsLabel = true) => {
  if (!parentProps || (!parentProps.children && (ckeckPropsLabel && !parentProps.label))) {
    return null;
  }
  const { children } = parentProps;
  const parentViewBox = parseViewBox(parentProps);

  const explicitChilren = findAllByType(children, Label.displayName).map((child: any, index: number) => cloneElement(child, {
    viewBox: viewBox || parentViewBox,
    key: `label-${index}`,
  })
  );

  if (!ckeckPropsLabel) { return explicitChilren; }
  const implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);

  return [implicitLabel, ...explicitChilren];
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;

export default Label;
