import * as React from 'react';
import {
  cloneElement,
  createContext,
  createElement,
  isValidElement,
  ReactElement,
  ReactNode,
  SVGProps,
  useContext,
  useMemo,
} from 'react';
import { clsx } from 'clsx';
import { isValidTextAnchor, RenderableText, Text, TextAnchor, TextVerticalAnchor } from './Text';
import { isNullish, isNumber, isNumOrStr, mathSign, uniqueId } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { CartesianViewBoxRequired, DataKey, PolarViewBoxRequired, TrapezoidViewBox, ViewBox } from '../util/types';
import { cartesianViewBoxToTrapezoid, useViewBox } from '../context/chartLayoutContext';
import { useAppSelector } from '../state/hooks';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

import { CartesianLabelPosition, getCartesianPosition } from '../cartesian/CartesianPosition';

/**
 * @inline
 */
export type LabelContentType = ReactElement | ((props: Props) => RenderableText | ReactElement);

type PolarLabelPosition = 'insideStart' | 'insideEnd' | 'end';

/**
 * @inline
 */
export type LabelPosition = CartesianLabelPosition | PolarLabelPosition;

/**
 * @inline
 */
export type LabelFormatter = (label: RenderableText) => RenderableText;

interface LabelProps extends ZIndexable {
  /**
   * The box of viewing area. Used for positioning.
   * If undefined, viewBox will be calculated based on surrounding context.
   */
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return a renderable text - something that the {@link Text} component can render.
   * Typically, a string or number.
   * Custom components are not supported here - use the `content` prop instead.
   */
  formatter?: LabelFormatter;
  /**
   * The value of label can be set as children or as the `value` prop
   *
   * @example <Label value="foo" />
   */
  value?: RenderableText;
  /**
   * The offset to the specified "position". Direction of the offset depends on the position.
   *
   * @defaultValue 5
   */
  offset?: number;
  /**
   * The position of label relative to the view box.
   *
   * @defaultValue middle
   */
  position?: LabelPosition;
  /**
   * The value of label can be set as children or as the `value` prop
   *
   * @example <Label>foo</Label>
   */
  children?: RenderableText;
  className?: string;
  /**
   * If set a React element, the option is the custom react element of rendering label.
   * If set a function, the function will be called to render label content.
   *
   * @example <Label content={CustomizedLabel} />
   * @example
   * const renderCustomLabel = (props) => <text {...props}>Custom Label</text>;
   * <Label content={renderCustomLabel} />
   */
  content?: LabelContentType;
  /**
   * @defaultValue false
   */
  textBreakAll?: boolean;
  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  index?: number;
  labelRef?: React.RefObject<SVGTextElement> | null;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 2000
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`.
   */
  id?: string;
}

export type Props = Omit<SVGProps<SVGTextElement>, 'viewBox'> & LabelProps;

type PropsWithDefaults = Props & {
  offset: number;
};

export type ImplicitLabelType =
  | boolean
  | string
  | number
  | ReactElement<SVGElement>
  | ((props: any) => RenderableText | ReactElement)
  // dataKey is only applicable when label is used implicitly from graphical element props
  | (Props & { dataKey?: DataKey<any> });

const CartesianLabelContext = createContext<TrapezoidViewBox | null>(null);

export const CartesianLabelContextProvider = ({
  x,
  y,
  upperWidth,
  lowerWidth,
  width,
  height,
  children,
}: TrapezoidViewBox & {
  children: ReactNode;
}) => {
  const viewBox: TrapezoidViewBox = useMemo(
    () => ({
      x,
      y,
      upperWidth,
      lowerWidth,
      width,
      height,
    }),
    [x, y, upperWidth, lowerWidth, width, height],
  );
  return <CartesianLabelContext.Provider value={viewBox}>{children}</CartesianLabelContext.Provider>;
};

const useCartesianLabelContext = (): TrapezoidViewBox | undefined => {
  const labelChildContext = useContext(CartesianLabelContext);
  const chartContext = useViewBox();
  return labelChildContext || (chartContext ? cartesianViewBoxToTrapezoid(chartContext) : undefined);
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

export const usePolarLabelContext = (): PolarViewBoxRequired | undefined => {
  const labelChildContext = useContext(PolarLabelContext);
  const chartContext = useAppSelector(selectPolarViewBox);
  return labelChildContext || chartContext;
};

const getLabel = (props: Props): RenderableText => {
  const { value, formatter } = props;
  const label: RenderableText = isNullish(props.children) ? value : props.children;

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
  labelProps: PropsWithDefaults,
  position: PolarLabelPosition,
  label: ReactNode,
  attrs: SVGProps<SVGTextElement>,
  viewBox: PolarViewBoxRequired,
) => {
  const { offset, className } = labelProps;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox;
  const radius = (innerRadius + outerRadius) / 2;
  const deltaAngle = getDeltaAngle(startAngle, endAngle);
  const sign = deltaAngle >= 0 ? 1 : -1;
  let labelAngle, direction;

  switch (position) {
    case 'insideStart':
      labelAngle = startAngle + sign * offset;
      direction = clockWise;
      break;
    case 'insideEnd':
      labelAngle = endAngle - sign * offset;
      direction = !clockWise;
      break;
    case 'end':
      labelAngle = endAngle + sign * offset;
      direction = clockWise;
      break;
    default:
      throw new Error(`Unsupported position ${position}`);
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

const getAttrsOfPolarLabel = (
  viewBox: PolarViewBoxRequired,
  offset: number,
  position: LabelPosition | undefined,
): LabelPositionAttributes => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = viewBox;
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

const isPolar = (
  viewBox: CartesianViewBoxRequired | TrapezoidViewBox | PolarViewBoxRequired | undefined,
): viewBox is PolarViewBoxRequired => viewBox != null && 'cx' in viewBox && isNumber(viewBox.cx);

export type LabelPositionAttributes = {
  x: number;
  y: number;
  textAnchor: TextAnchor;
  verticalAnchor: TextVerticalAnchor;
  width?: number;
  height?: number;
};

export const defaultLabelProps = {
  angle: 0,
  offset: 5,
  zIndex: DefaultZIndexes.label,
  position: 'middle',
  textBreakAll: false,
} as const satisfies Partial<Props>;

function polarViewBoxToTrapezoid(
  viewBox: PolarViewBoxRequired | TrapezoidViewBox | undefined,
): TrapezoidViewBox | undefined {
  if (!isPolar(viewBox)) {
    return viewBox;
  }
  const { cx, cy, outerRadius } = viewBox;
  const diameter = outerRadius * 2;
  return {
    x: cx - outerRadius,
    y: cy - outerRadius,
    width: diameter,
    upperWidth: diameter,
    lowerWidth: diameter,
    height: diameter,
  };
}

/**
 * @consumes CartesianViewBoxContext
 * @consumes PolarViewBoxContext
 * @consumes CartesianLabelContext
 * @consumes PolarLabelContext
 */
export function Label(outerProps: Props) {
  const props: PropsWithDefaults = resolveDefaultProps(outerProps, defaultLabelProps);
  const {
    viewBox: viewBoxFromProps,
    parentViewBox,
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
   * I am not proud about this solution, but it's a quick fix for https://github.com/recharts/recharts/issues/6030#issuecomment-3155352460.
   * What we should really do is split Label into two components: CartesianLabel and PolarLabel and then handle their respective viewBoxes separately.
   * Also other components should set its own viewBox in a context so that we can fix https://github.com/recharts/recharts/issues/6156
   */
  const resolvedViewBox = position === 'center' ? cartesianViewBox : (polarViewBox ?? cartesianViewBox);

  let viewBox: PolarViewBoxRequired | TrapezoidViewBox | undefined,
    label: RenderableText,
    positionAttrs: LabelPositionAttributes;
  if (viewBoxFromProps == null) {
    viewBox = resolvedViewBox;
  } else if (isPolar(viewBoxFromProps)) {
    viewBox = viewBoxFromProps;
  } else {
    viewBox = cartesianViewBoxToTrapezoid(viewBoxFromProps);
  }

  const cartesianBox = polarViewBoxToTrapezoid(viewBox);

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

  if (typeof content === 'function') {
    const { content: _, ...propsForContent } = propsWithViewBox;
    // @ts-expect-error we're not checking if the content component returns something that Text is able to render
    label = createElement(content, propsForContent);

    if (isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  const attrs = svgPropertiesAndEvents(props);

  if (isPolar(viewBox)) {
    // TODO: Generic Polar Hook
    if (position === 'insideStart' || position === 'insideEnd' || position === 'end') {
      return renderRadialLabel(props, position, label, attrs, viewBox);
    }
    positionAttrs = getAttrsOfPolarLabel(viewBox, props.offset, props.position);
  } else {
    if (!cartesianBox) {
      return null;
    }
    const cartesianResult = getCartesianPosition({
      viewBox: cartesianBox,
      position,
      offset: props.offset,
      parentViewBox: isPolar(parentViewBox) ? undefined : parentViewBox,
      clamp: true,
    });

    positionAttrs = {
      x: cartesianResult.x,
      y: cartesianResult.y,
      textAnchor: cartesianResult.horizontalAnchor,
      verticalAnchor: cartesianResult.verticalAnchor,
      ...(cartesianResult.width !== undefined ? { width: cartesianResult.width } : {}),
      ...(cartesianResult.height !== undefined ? { height: cartesianResult.height } : {}),
    };
  }

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Text
        ref={labelRef}
        className={clsx('recharts-label', className)}
        {...attrs}
        {...positionAttrs}
        /*
         * textAnchor is decided by default based on the `position`
         * but we allow overriding via props for precise control.
         */
        textAnchor={isValidTextAnchor(attrs.textAnchor) ? attrs.textAnchor : positionAttrs.textAnchor}
        breakAll={textBreakAll}
      >
        {label}
      </Text>
    </ZIndexLayer>
  );
}

Label.displayName = 'Label';

const parseLabel = (
  label: ImplicitLabelType | undefined,
  viewBox: ViewBox | undefined,
  labelRef?: React.RefObject<SVGTextElement> | null,
) => {
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

export function CartesianLabelFromLabelProp({
  label,
  labelRef,
}: {
  label: ImplicitLabelType | undefined;
  labelRef?: React.RefObject<SVGTextElement> | null;
}) {
  const viewBox = useCartesianLabelContext();

  return parseLabel(label, viewBox, labelRef) || null;
}

export function PolarLabelFromLabelProp({ label }: { label: ImplicitLabelType | undefined }) {
  const viewBox = usePolarLabelContext();

  return parseLabel(label, viewBox) || null;
}
