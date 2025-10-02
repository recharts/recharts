/**
 * @fileOverview Cartesian Axis
 */
import * as React from 'react';
import { ReactElement, SVGProps, useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';

import get from 'es-toolkit/compat/get';
import { clsx } from 'clsx';
import { shallowEqual } from '../util/ShallowEqual';
import { Layer } from '../container/Layer';
import { Text, Props as TextProps, TextAnchor, TextVerticalAnchor } from '../component/Text';
import { CartesianLabelContextProvider, ImplicitLabelType, CartesianLabelFromLabelProp } from '../component/Label';
import { isNumber } from '../util/DataUtils';
import {
  CartesianViewBox,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  CartesianTickItem,
  AxisInterval,
  Coordinate,
  RectangleCoordinate,
} from '../util/types';
import { getTicks } from './getTicks';
import { RechartsScale } from '../util/ChartUtils';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { XAxisPadding, YAxisPadding } from '../state/cartesianAxisSlice';
import { getCalculatedYAxisWidth } from '../util/YAxisUtils';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';

/** The orientation of the axis in correspondence to the chart */
export type Orientation = 'top' | 'bottom' | 'left' | 'right';
/** A unit to be appended to a value */
export type Unit = string | number;
/** The formatter function of tick */
export type TickFormatter = (value: any, index: number) => string;

export interface CartesianAxisProps {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: Unit;
  orientation?: Orientation;
  // The viewBox of svg
  viewBox?: CartesianViewBox;
  tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
  /**
   * Additional props to spread to each tick Text element.
   * Optional, the CartesianAxis component will provide its own defaults calculated from other props.
   */
  tickTextProps?: TextProps;
  axisLine?: boolean | SVGProps<SVGLineElement>;
  tickLine?: boolean | SVGProps<SVGLineElement>;
  mirror?: boolean;
  tickMargin?: number;
  hide?: boolean;
  label?: ImplicitLabelType;
  /** Padding information passed to custom tick components */
  padding?: XAxisPadding | YAxisPadding;

  minTickGap?: number;
  /**
   * Careful - this is the same name as XAxis + YAxis `ticks` but completely different object!
   */
  ticks?: ReadonlyArray<CartesianTickItem>;
  tickSize?: number;
  tickFormatter?: TickFormatter;
  interval?: AxisInterval;
  /** Angle in which ticks will be rendered. */
  angle?: number;
  /**
   * This is NOT SVG scale attribute;
   * this is Recharts scale, based on d3-scale.
   */
  scale?: RechartsScale;
  labelRef?: React.RefObject<Element> | null;

  ref?: React.Ref<CartesianAxisRef>;
}

export interface CartesianAxisRef {
  getCalculatedWidth(): number;
}

export const defaultCartesianAxisProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  // The orientation of axis
  orientation: 'bottom',
  // The ticks
  ticks: [] as CartesianAxisProps['ticks'],

  stroke: '#666',
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,

  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd',
} as const satisfies Partial<Props>;

/*
 * `viewBox` and `scale` are SVG attributes.
 * Recharts however - unfortunately - has its own attributes named `viewBox` and `scale`
 * that are completely different data shape and different purpose.
 */
export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'viewBox' | 'scale' | 'ref'> &
  CartesianAxisProps;

type InternalProps = RequiresDefaultProps<Props, typeof defaultCartesianAxisProps>;

function AxisLine(axisLineProps: {
  x: number;
  y: number;
  width: number;
  height: number;
  orientation: Orientation;
  mirror: boolean;
  axisLine: boolean | SVGProps<SVGLineElement>;
  otherSvgProps: SVGProps<SVGLineElement> | null;
}) {
  const { x, y, width, height, orientation, mirror, axisLine, otherSvgProps } = axisLineProps;

  if (!axisLine) {
    return null;
  }

  let props: SVGProps<SVGLineElement> = {
    ...otherSvgProps,
    ...svgPropertiesNoEvents(axisLine),
    fill: 'none',
  };

  if (orientation === 'top' || orientation === 'bottom') {
    const needHeight = +((orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror));
    props = {
      ...props,
      x1: x,
      y1: y + needHeight * height,
      x2: x + width,
      y2: y + needHeight * height,
    };
  } else {
    const needWidth = +((orientation === 'left' && !mirror) || (orientation === 'right' && mirror));
    props = {
      ...props,
      x1: x + needWidth * width,
      y1: y,
      x2: x + needWidth * width,
      y2: y + height,
    };
  }

  return <line {...props} className={clsx('recharts-cartesian-axis-line', get(axisLine, 'className'))} />;
}

/**
 * Calculate the coordinates of endpoints in ticks.
 * @param data The data of a simple tick.
 * @param x The x-coordinate of the axis.
 * @param y The y-coordinate of the axis.
 * @param width The width of the axis.
 * @param height The height of the axis.
 * @param orientation The orientation of the axis.
 * @param tickSize The length of the tick line.
 * @param mirror If true, the ticks are mirrored.
 * @param tickMargin The margin between the tick line and the tick text.
 * @returns An object with `line` and `tick` coordinates.
 * `line` is the coordinates for the tick line, and `tick` is the coordinate for the tick text.
 */
function getTickLineCoord(
  data: CartesianTickItem,
  x: number,
  y: number,
  width: number,
  height: number,
  orientation: Orientation,
  tickSize: number,
  mirror: boolean,
  tickMargin: number,
): {
  line: RectangleCoordinate;
  tick: Coordinate;
} {
  let x1, x2, y1, y2, tx, ty;

  const sign = mirror ? -1 : 1;
  const finalTickSize = data.tickSize || tickSize;
  const tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;

  switch (orientation) {
    case 'top':
      x1 = x2 = data.coordinate;
      y2 = y + +!mirror * height;
      y1 = y2 - sign * finalTickSize;
      ty = y1 - sign * tickMargin;
      tx = tickCoord;
      break;
    case 'left':
      y1 = y2 = data.coordinate;
      x2 = x + +!mirror * width;
      x1 = x2 - sign * finalTickSize;
      tx = x1 - sign * tickMargin;
      ty = tickCoord;
      break;
    case 'right':
      y1 = y2 = data.coordinate;
      x2 = x + +mirror * width;
      x1 = x2 + sign * finalTickSize;
      tx = x1 + sign * tickMargin;
      ty = tickCoord;
      break;
    default:
      x1 = x2 = data.coordinate;
      y2 = y + +mirror * height;
      y1 = y2 + sign * finalTickSize;
      ty = y1 + sign * tickMargin;
      tx = tickCoord;
      break;
  }

  return { line: { x1, y1, x2, y2 }, tick: { x: tx, y: ty } };
}

/**
 * @param orientation The orientation of the axis.
 * @param mirror If true, the ticks are mirrored.
 * @returns The text anchor of the tick.
 */
function getTickTextAnchor(orientation: Orientation, mirror: boolean): TextAnchor {
  switch (orientation) {
    case 'left':
      return mirror ? 'start' : 'end';
    case 'right':
      return mirror ? 'end' : 'start';
    default:
      return 'middle';
  }
}

/**
 * @param orientation The orientation of the axis.
 * @param mirror If true, the ticks are mirrored.
 * @returns The vertical text anchor of the tick.
 */
function getTickVerticalAnchor(orientation: Orientation, mirror: boolean): TextVerticalAnchor {
  switch (orientation) {
    case 'left':
    case 'right':
      return 'middle';
    case 'top':
      return mirror ? 'start' : 'end';
    default:
      return mirror ? 'end' : 'start';
  }
}

function TickItem(props: { option: Props['tick']; tickProps: TextProps; value: string }) {
  const { option, tickProps, value } = props;
  let tickItem;
  const combinedClassName = clsx(tickProps.className, 'recharts-cartesian-axis-tick-value');

  if (React.isValidElement(option)) {
    // @ts-expect-error element cloning is not typed
    tickItem = React.cloneElement(option, { ...tickProps, className: combinedClassName });
  } else if (typeof option === 'function') {
    tickItem = option({ ...tickProps, className: combinedClassName });
  } else {
    let className = 'recharts-cartesian-axis-tick-value';

    if (typeof option !== 'boolean') {
      className = clsx(className, option?.className);
    }

    tickItem = (
      <Text {...tickProps} className={className}>
        {value}
      </Text>
    );
  }

  return tickItem;
}

type TicksProps = {
  ticks?: ReadonlyArray<CartesianTickItem>;
  tick?: Props['tick'];
  tickLine?: Props['tickLine'];
  stroke?: Props['stroke'];
  tickFormatter?: Props['tickFormatter'];
  unit?: Props['unit'];
  padding?: Props['padding'];
  tickTextProps?: Props['tickTextProps'];
  orientation: Orientation;
  mirror: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  tickSize: number;
  tickMargin: number;
  fontSize: string;
  letterSpacing: string;
  getTicksConfig: Omit<Props, 'ticks' | 'ref'>;
  events: Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'viewBox'>;
};

function Ticks(props: TicksProps) {
  const {
    ticks = [],
    tick,
    tickLine,
    stroke,
    tickFormatter,
    unit,
    padding,
    tickTextProps,
    orientation,
    mirror,
    x,
    y,
    width,
    height,
    tickSize,
    tickMargin,
    fontSize,
    letterSpacing,
    getTicksConfig,
    events,
  } = props;
  // @ts-expect-error some properties are optional in props but required in getTicks
  const finalTicks = getTicks({ ...getTicksConfig, ticks }, fontSize, letterSpacing);
  const textAnchor = getTickTextAnchor(orientation, mirror);
  const verticalAnchor = getTickVerticalAnchor(orientation, mirror);
  const axisProps = svgPropertiesNoEvents(getTicksConfig);
  const customTickProps = svgPropertiesNoEventsFromUnknown(tick);
  let tickLinePropsObject: SVGProps<SVGLineElement> = {};
  if (typeof tickLine === 'object') {
    tickLinePropsObject = tickLine;
  }
  const tickLineProps: SVGProps<SVGLineElement> = {
    ...axisProps,
    fill: 'none',
    ...tickLinePropsObject,
  };
  const items = finalTicks.map((entry: CartesianTickItem, i) => {
    const { line: lineCoord, tick: tickCoord } = getTickLineCoord(
      entry,
      x,
      y,
      width,
      height,
      orientation,
      tickSize,
      mirror,
      tickMargin,
    );
    const tickProps: TextProps = {
      // @ts-expect-error textAnchor from axisProps is typed as `string` but Text wants type `TextAnchor`
      textAnchor,
      verticalAnchor,
      ...axisProps,
      // @ts-expect-error customTickProps is contributing unknown props
      stroke: 'none',
      // @ts-expect-error customTickProps is contributing unknown props
      fill: stroke,
      ...customTickProps,
      ...tickCoord,
      index: i,
      payload: entry,
      visibleTicksCount: finalTicks.length,
      tickFormatter,
      padding,
      ...tickTextProps,
    };

    return (
      <Layer
        className="recharts-cartesian-axis-tick"
        key={`tick-${entry.value}-${entry.coordinate}-${entry.tickCoord}`}
        {...adaptEventsOfChild(events, entry, i)}
      >
        {tickLine && (
          <line
            {...tickLineProps}
            {...lineCoord}
            className={clsx('recharts-cartesian-axis-tick-line', get(tickLine, 'className'))}
          />
        )}
        {tick && (
          <TickItem
            option={tick}
            tickProps={tickProps}
            value={`${typeof tickFormatter === 'function' ? tickFormatter(entry.value, i) : entry.value}${unit || ''}`}
          />
        )}
      </Layer>
    );
  });

  if (items.length > 0) {
    return <g className="recharts-cartesian-axis-ticks">{items}</g>;
  }

  return null;
}

const CartesianAxisComponent = forwardRef<CartesianAxisRef, InternalProps>((props, ref) => {
  const { axisLine, width, height, className, hide, ticks, ...rest } = props;
  const [fontSize, setFontSize] = useState('');
  const [letterSpacing, setLetterSpacing] = useState('');
  const tickRefs = useRef<HTMLCollectionOf<Element> | null>(null);

  useImperativeHandle(
    ref,
    (): CartesianAxisRef => ({
      getCalculatedWidth: (): number => {
        return getCalculatedYAxisWidth({
          ticks: tickRefs.current,
          label: props.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: props.tickSize,
          tickMargin: props.tickMargin,
        });
      },
    }),
  );

  const layerRef = useCallback(
    (el: SVGElement | null) => {
      if (el) {
        const tickNodes = el.getElementsByClassName('recharts-cartesian-axis-tick-value');
        tickRefs.current = tickNodes;
        const tick: Element | undefined = tickNodes[0];

        if (tick) {
          const computedStyle = window.getComputedStyle(tick);
          const calculatedFontSize = computedStyle.fontSize;
          const calculatedLetterSpacing = computedStyle.letterSpacing;
          if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
            setFontSize(calculatedFontSize);
            setLetterSpacing(calculatedLetterSpacing);
          }
        }
      }
    },
    [fontSize, letterSpacing],
  );

  if (hide) {
    return null;
  }

  /*
   * This is different condition from what validateWidthHeight is doing;
   * the CartesianAxis does allow width or height to be undefined.
   */
  if ((width != null && width <= 0) || (height != null && height <= 0)) {
    return null;
  }

  return (
    <Layer className={clsx('recharts-cartesian-axis', className)} ref={layerRef}>
      <AxisLine
        x={props.x}
        y={props.y}
        width={width}
        height={height}
        orientation={props.orientation}
        mirror={props.mirror}
        axisLine={axisLine}
        otherSvgProps={svgPropertiesNoEvents(props)}
      />
      <Ticks
        ticks={ticks}
        tick={props.tick}
        tickLine={props.tickLine}
        stroke={props.stroke}
        tickFormatter={props.tickFormatter}
        unit={props.unit}
        padding={props.padding}
        tickTextProps={props.tickTextProps}
        orientation={props.orientation}
        mirror={props.mirror}
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        tickSize={props.tickSize}
        tickMargin={props.tickMargin}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        getTicksConfig={props}
        events={rest}
      />
      <CartesianLabelContextProvider x={props.x} y={props.y} width={props.width} height={props.height}>
        <CartesianLabelFromLabelProp label={props.label} labelRef={props.labelRef} />
        {props.children}
      </CartesianLabelContextProvider>
    </Layer>
  );
});

const MemoCartesianAxis = React.memo(CartesianAxisComponent, (prevProps, nextProps) => {
  const { viewBox: prevViewBox, ...prevRestProps } = prevProps;
  const { viewBox: nextViewBox, ...nextRestProps } = nextProps;
  return shallowEqual(prevViewBox, nextViewBox) && shallowEqual(prevRestProps, nextRestProps);
});

export const CartesianAxis = React.forwardRef((outsideProps: Props, ref: React.Ref<CartesianAxisRef>) => {
  const props = resolveDefaultProps(outsideProps, defaultCartesianAxisProps);
  return <MemoCartesianAxis {...props} ref={ref} />;
});

CartesianAxis.displayName = 'CartesianAxis';
