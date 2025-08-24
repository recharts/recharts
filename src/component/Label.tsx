import * as React from 'react';
import {
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
  createElement,
  SVGProps,
  createContext,
  useContext,
  useMemo,
} from 'react';
import { clsx } from 'clsx';
import { Text } from './Text';
import { filterProps } from '../util/ReactUtils';
import { isNumOrStr, isNumber, isPercent, getPercentValue, uniqueId, mathSign, isNullish } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import {
  ViewBox,
  PolarViewBox,
  CartesianViewBox,
  DataKey,
  CartesianViewBoxRequired,
  PolarViewBoxRequired,
} from '../util/types';
import { useViewBox } from '../context/chartLayoutContext';
import { useAppSelector } from '../state/hooks';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';

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

const CartesianLabelContext = createContext<CartesianViewBox | null>(null);

export const CartesianLabelContextProvider = ({
  x,
  y,
  width,
  height,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  children: ReactNode;
}) => {
  const viewBox: CartesianViewBoxRequired = useMemo(
    () => ({
      x,
      y,
      width,
      height,
    }),
    [x, y, width, height],
  );
  return <CartesianLabelContext.Provider value={viewBox}>{children}</CartesianLabelContext.Provider>;
};

const useCartesianLabelContext = () => {
  const labelChildContext = useContext(CartesianLabelContext);
  const chartContext = useViewBox();
  return labelChildContext || chartContext;
};

const PolarLabelContext = createContext<PolarViewBoxRequired | null>(null);

export const PolarLabelContextProvider = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  clockWise,
  children,
}: PolarViewBoxRequired & {
  children: ReactNode;
}) => {
  const viewBox: PolarViewBoxRequired = useMemo(
    () => ({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      clockWise,
    }),
    [cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise],
  );
  return <PolarLabelContext.Provider value={viewBox}>{children}</PolarLabelContext.Provider>;
};

export const usePolarLabelContext = () => {
  const labelChildContext = useContext(PolarLabelContext);
  const chartContext = useAppSelector(selectPolarViewBox);
  return labelChildContext || chartContext;
};

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

const renderRadialLabel = (
  labelProps: Props,
  label: ReactNode,
  attrs: SVGProps<SVGTextElement>,
  viewBox: PolarViewBox,
) => {
  const { position, offset, className } = labelProps;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox;
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

const getAttrsOfPolarLabel = (viewBox: PolarViewBox, offset: Props['offset'], position: Props['position']) => {
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
  const polarViewBox = usePolarLabelContext();
  const cartesianViewBox = useCartesianLabelContext();

  /*
   * I am not proud about this solution but it's a quick fix for https://github.com/recharts/recharts/issues/6030#issuecomment-3155352460.
   * What we should really do is split Label into two components: CartesianLabel and PolarLabel and then handle their respective viewBoxes separately.
   * Also other components should set its own viewBox in a context so that we can fix https://github.com/recharts/recharts/issues/6156
   */
  const resolvedViewBox = position === 'center' ? cartesianViewBox : (polarViewBox ?? cartesianViewBox);

  const viewBox = viewBoxFromProps || resolvedViewBox;

  if (
    !viewBox ||
    (isNullish(value) && isNullish(children) && !isValidElement(content) && typeof content !== 'function')
  ) {
    return null;
  }

  const propsWithViewBox = {
    ...props,
    viewBox,
  };

  if (isValidElement(content)) {
    const { labelRef: _, ...propsWithoutLabelRef } = propsWithViewBox;
    return cloneElement(content, propsWithoutLabelRef);
  }

  let label: ReactNode;
  if (typeof content === 'function') {
    label = createElement(content as any, propsWithViewBox);

    if (isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  const isPolarLabel = isPolar(viewBox);
  const attrs = filterProps(props, true);

  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs, viewBox);
  }

  const positionAttrs = isPolarLabel
    ? getAttrsOfPolarLabel(viewBox, props.offset, props.position)
    : getAttrsOfCartesianLabel(props, viewBox);

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

const parseLabel = (label: ImplicitLabelType, viewBox: ViewBox, labelRef?: React.RefObject<Element>) => {
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
      return cloneElement<SVGElement>(label, { key: 'label-implicit', ...commonProps });
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

export function CartesianLabelFromLabelProp({ label }: { label: ImplicitLabelType }) {
  const viewBox = useCartesianLabelContext();

  return parseLabel(label, viewBox) || null;
}

export function PolarLabelFromLabelProp({ label }: { label: ImplicitLabelType }) {
  const viewBox = usePolarLabelContext();

  return parseLabel(label, viewBox) || null;
}
