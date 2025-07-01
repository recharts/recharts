import * as React from 'react';
import { cloneElement, isValidElement, ReactNode, ReactElement, createElement, SVGProps } from 'react';
import { clsx } from 'clsx';
import { Text } from './Text';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { isNumOrStr, isNumber, isPercent, getPercentValue, uniqueId, mathSign, isNullish } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { ViewBox, PolarViewBox, CartesianViewBox, DataKey } from '../util/types';
import { useViewBox } from '../context/chartLayoutContext';

export type ContentType = ReactElement | ((props: Props) => ReactNode);

export type LabelPosition =
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

interface LabelProps {
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  formatter?: (label: React.ReactNode) => React.ReactNode;
  value?: number | string;
  offset?: number;
  position?: LabelPosition;
  children?: ReactNode;
  className?: string;
  content?: ContentType;
  textBreakAll?: boolean;
  angle?: number;
  index?: number;
  labelRef?: React.RefObject<Element>;
}

export type Props = Omit<SVGProps<SVGTextElement>, 'viewBox'> & LabelProps;

export type ImplicitLabelType =
  | boolean
  | string
  | number
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  // dataKey is only applicable when label is used implicitly from graphical element props
  | (Props & { dataKey?: DataKey<any> });

const getLabel = (props: Props) => {
  const { value, formatter } = props;
  const label = isNullish(props.children) ? value : props.children;

  if (typeof formatter === 'function') {
    return formatter(label);
  }

  return label;
};

export const isLabelContentAFunction = (content: unknown): content is (props: Props) => React.ReactNode => {
  return content != null && typeof content === 'function';
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
  const id = isNullish(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;

  return (
    <text {...attrs} dominantBaseline="central" className={clsx('recharts-radial-bar-label', className)}>
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

const getAttrsOfCartesianLabel = (props: Props, viewBox: CartesianViewBox) => {
  const { parentViewBox, offset, position } = props;
  const { x, y, width, height } = viewBox;

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
    !!position &&
    typeof position === 'object' &&
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

const isPolar = (viewBox: CartesianViewBox | PolarViewBox): viewBox is PolarViewBox =>
  'cx' in viewBox && isNumber(viewBox.cx);

export function Label({ offset = 5, ...restProps }: Props) {
  const props = { offset, ...restProps };
  const {
    viewBox: viewBoxFromProps,
    position,
    value,
    children,
    content,
    className = '',
    textBreakAll,
    labelRef,
  } = props;

  const viewBoxFromContext = useViewBox();

  const viewBox = viewBoxFromProps || viewBoxFromContext;

  if (
    !viewBox ||
    (isNullish(value) && isNullish(children) && !isValidElement(content) && typeof content !== 'function')
  ) {
    return null;
  }

  if (isValidElement(content)) {
    const { labelRef: _, ...propsWithoutLabelRef } = props;
    return cloneElement(content, propsWithoutLabelRef);
  }

  let label: ReactNode;
  if (typeof content === 'function') {
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

  // TODO handle the polar viewBox case - Pie chart works with cartesian viewBox, what about the other charts?
  const positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props, viewBox);

  return (
    <Text
      ref={labelRef}
      className={clsx('recharts-label', className)}
      {...attrs}
      {...(positionAttrs as any)}
      breakAll={textBreakAll}
    >
      {label}
    </Text>
  );
}

Label.displayName = 'Label';

const parseViewBox = (props: any): ViewBox => {
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

  return undefined;
};

const parseLabel = (label: unknown, viewBox: ViewBox, labelRef?: React.RefObject<Element>) => {
  if (!label) {
    return null;
  }

  const commonProps = { viewBox, labelRef };

  if (label === true) {
    return <Label key="label-implicit" {...commonProps} />;
  }

  if (isNumOrStr(label)) {
    return <Label key="label-implicit" value={label} {...commonProps} />;
  }

  if (isValidElement(label)) {
    if (label.type === Label) {
      return cloneElement<LabelProps>(label, { key: 'label-implicit', ...commonProps });
    }

    return <Label key="label-implicit" content={label} {...commonProps} />;
  }

  if (isLabelContentAFunction(label)) {
    return <Label key="label-implicit" content={label} {...commonProps} />;
  }

  if (label && typeof label === 'object') {
    return <Label {...label} key="label-implicit" {...commonProps} />;
  }

  return null;
};

const renderCallByParent = (
  parentProps: {
    children?: ReactNode;
    label?: unknown;
    labelRef?: React.RefObject<Element>;
  },
  viewBox?: ViewBox,
  checkPropsLabel = true,
): ReactElement[] | null => {
  if (!parentProps || (!parentProps.children && checkPropsLabel && !parentProps.label)) {
    return null;
  }
  const { children, labelRef } = parentProps;
  const parentViewBox = parseViewBox(parentProps);

  const explicitChildren = findAllByType(children, Label).map((child, index) => {
    return cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      // eslint-disable-next-line react/no-array-index-key
      key: `label-${index}`,
    });
  });

  if (!checkPropsLabel) {
    return explicitChildren;
  }
  const implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox, labelRef);

  return [implicitLabel, ...explicitChildren];
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;
