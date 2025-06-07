/**
 * @fileOverview Cartesian Axis
 */
import * as React from 'react';
import { ReactElement, ReactNode, Component, SVGProps } from 'react';

import get from 'es-toolkit/compat/get';
import { clsx } from 'clsx';
import { shallowEqual } from '../util/ShallowEqual';
import { Layer } from '../container/Layer';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { isNumber } from '../util/DataUtils';
import {
  CartesianViewBox,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  CartesianTickItem,
  AxisInterval,
} from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { getTicks } from './getTicks';
import { RechartsScale } from '../util/ChartUtils';

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
  axisLine?: boolean | SVGProps<SVGLineElement>;
  tickLine?: boolean | SVGProps<SVGLineElement>;
  mirror?: boolean;
  tickMargin?: number;
  hide?: boolean;
  label?: any;

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
  scale: RechartsScale;
  labelRef?: React.RefObject<Element>;
}

interface IState {
  fontSize: string;
  letterSpacing: string;
}

/*
 * `viewBox` and `scale` are SVG attributes.
 * Recharts however - unfortunately - has its own attributes named `viewBox` and `scale`
 * that are completely different data shape and different purpose.
 */
export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'viewBox' | 'scale'> &
  CartesianAxisProps;

export class CartesianAxis extends Component<Props, IState> {
  static displayName = 'CartesianAxis';

  tickRefs: React.MutableRefObject<Element[]>;

  static defaultProps: Partial<Props> = {
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
  };

  constructor(props: Props) {
    super(props);
    this.tickRefs = React.createRef<Element[]>();
    this.tickRefs.current = [];
    this.state = { fontSize: '', letterSpacing: '' };
  }

  shouldComponentUpdate({ viewBox, ...restProps }: Props, nextState: IState) {
    // props.viewBox is sometimes generated every time -
    // check that specially as object equality is likely to fail
    const { viewBox: viewBoxOld, ...restPropsOld } = this.props;
    return (
      !shallowEqual(viewBox, viewBoxOld) ||
      !shallowEqual(restProps, restPropsOld) ||
      !shallowEqual(nextState, this.state)
    );
  }

  /**
   * Calculate the coordinates of endpoints in ticks
   * @param  data The data of a simple tick
   * @return (x1, y1): The coordinate of endpoint close to tick text
   *  (x2, y2): The coordinate of endpoint close to axis
   */
  getTickLineCoord(data: CartesianTickItem) {
    const { x, y, width, height, orientation, tickSize, mirror, tickMargin } = this.props;
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

  getTickTextAnchor() {
    const { orientation, mirror } = this.props;
    let textAnchor;

    switch (orientation) {
      case 'left':
        textAnchor = mirror ? 'start' : 'end';
        break;
      case 'right':
        textAnchor = mirror ? 'end' : 'start';
        break;
      default:
        textAnchor = 'middle';
        break;
    }

    return textAnchor;
  }

  getTickVerticalAnchor() {
    const { orientation, mirror } = this.props;

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

  renderAxisLine() {
    const { x, y, width, height, orientation, mirror, axisLine } = this.props;
    let props: SVGProps<SVGLineElement> = {
      ...filterProps(this.props, false),
      ...filterProps(axisLine, false),
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

  static renderTickItem(option: Props['tick'], props: any, value: ReactNode) {
    let tickItem;
    const combinedClassName = clsx(props.className, 'recharts-cartesian-axis-tick-value');

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, { ...props, className: combinedClassName });
    } else if (typeof option === 'function') {
      tickItem = option({ ...props, className: combinedClassName });
    } else {
      let className = 'recharts-cartesian-axis-tick-value';

      if (typeof option !== 'boolean') {
        className = clsx(className, option.className);
      }

      tickItem = (
        <Text {...props} className={className}>
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  /**
   * render the ticks
   * @param {string} fontSize Fontsize to consider for tick spacing
   * @param {string} letterSpacing Letter spacing to consider for tick spacing
   * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
   * @return {ReactElement | null} renderedTicks
   */
  renderTicks(
    fontSize: string,
    letterSpacing: string,
    ticks: ReadonlyArray<CartesianTickItem> = [],
  ): React.ReactElement | null {
    const { tickLine, stroke, tick, tickFormatter, unit } = this.props;
    // @ts-expect-error some properties are optional in props but required in getTicks
    const finalTicks = getTicks({ ...this.props, ticks }, fontSize, letterSpacing);
    const textAnchor = this.getTickTextAnchor();
    const verticalAnchor = this.getTickVerticalAnchor();
    const axisProps = filterProps(this.props, false);
    const customTickProps = filterProps(tick, false);
    const tickLineProps = {
      ...axisProps,
      fill: 'none',
      ...filterProps(tickLine, false),
    };
    const items = finalTicks.map((entry: CartesianTickItem, i) => {
      const { line: lineCoord, tick: tickCoord } = this.getTickLineCoord(entry);
      const tickProps = {
        textAnchor,
        verticalAnchor,
        ...axisProps,
        stroke: 'none',
        fill: stroke,
        ...customTickProps,
        ...tickCoord,
        index: i,
        payload: entry,
        visibleTicksCount: finalTicks.length,
        tickFormatter,
      };

      return (
        <Layer
          className="recharts-cartesian-axis-tick"
          key={`tick-${entry.value}-${entry.coordinate}-${entry.tickCoord}`}
          {...adaptEventsOfChild(this.props, entry, i)}
        >
          {tickLine && (
            <line
              {...tickLineProps}
              {...lineCoord}
              className={clsx('recharts-cartesian-axis-tick-line', get(tickLine, 'className'))}
            />
          )}
          {tick &&
            CartesianAxis.renderTickItem(
              tick,
              tickProps,
              `${typeof tickFormatter === 'function' ? tickFormatter(entry.value, i) : entry.value}${unit || ''}`,
            )}
        </Layer>
      );
    });

    return items.length > 0 ? <g className="recharts-cartesian-axis-ticks">{items}</g> : null;
  }

  render() {
    const { axisLine, width, height, className, hide } = this.props;

    if (hide) {
      return null;
    }

    const { ticks } = this.props;

    /*
     * This is different condition from what validateWidthHeight is doing;
     * the CartesianAxis does allow width or height to be undefined.
     */
    if ((width != null && width <= 0) || (height != null && height <= 0)) {
      return null;
    }

    return (
      <Layer
        className={clsx('recharts-cartesian-axis', className)}
        ref={ref => {
          if (ref) {
            const tickNodes = ref.getElementsByClassName('recharts-cartesian-axis-tick-value');
            this.tickRefs.current = Array.from(tickNodes);
            const tick: Element | undefined = tickNodes[0];

            if (tick) {
              const calculatedFontSize = window.getComputedStyle(tick).fontSize;
              const calculatedLetterSpacing = window.getComputedStyle(tick).letterSpacing;
              if (calculatedFontSize !== this.state.fontSize || calculatedLetterSpacing !== this.state.letterSpacing) {
                this.setState({
                  fontSize: window.getComputedStyle(tick).fontSize,
                  letterSpacing: window.getComputedStyle(tick).letterSpacing,
                });
              }
            }
          }
        }}
      >
        {axisLine && this.renderAxisLine()}
        {this.renderTicks(this.state.fontSize, this.state.letterSpacing, ticks)}
        {Label.renderCallByParent(this.props)}
      </Layer>
    );
  }
}
