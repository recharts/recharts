/**
 * @fileOverview Cartesian Axis
 */
import * as React from 'react';
import { ReactElement, ReactNode, Component, SVGProps } from 'react';

// @ts-expect-error not installing types for lodash.get, I just want to see the bundle size difference
import get from 'lodash.get';
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
import { useAxisInteraction } from '../context/zoomPanContext';

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

// Functional component wrapper to use hooks
const CartesianAxisWithHooks: React.FC<Props> = (props) => {
  const [fontSize, setFontSize] = React.useState('');
  const [letterSpacing, setLetterSpacing] = React.useState('');
  const axisRef = React.useRef<HTMLDivElement>(null);
  
  // Get axis interaction context
  const axisInteraction = useAxisInteraction();
  
  // Determine axis type for interactions
  const axisType: 'x' | 'y' = props.orientation === 'left' || props.orientation === 'right' ? 'y' : 'x';
  const isInteractionEnabled = axisInteraction?.isLabelInteractionEnabled;

  // Add native event listeners to prevent page scroll but allow axis interactions
  React.useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      // Check if the target is within our axis
      if (target.closest('.recharts-cartesian-axis')) {
        e.preventDefault();
        // Don't stop propagation - let the axis interaction handlers work
      }
    };
    
    const handleGlobalTouch = (e: Event) => {
      const target = e.target as Element;
      // Check if the target is within our axis
      if (target.closest('.recharts-cartesian-axis')) {
        e.preventDefault();
        // Don't stop propagation - let the axis interaction handlers work
      }
    };
    
    // Add global listeners to capture all wheel/touch events on axis
    document.addEventListener('wheel', handleGlobalWheel, { passive: false, capture: true });
    document.addEventListener('touchstart', handleGlobalTouch, { passive: false, capture: true });
    document.addEventListener('touchmove', handleGlobalTouch, { passive: false, capture: true });
    
    return () => {
      document.removeEventListener('wheel', handleGlobalWheel);
      document.removeEventListener('touchstart', handleGlobalTouch);
      document.removeEventListener('touchmove', handleGlobalTouch);
    };
  }, []);

  // Use effect to measure font size after render
  React.useEffect(() => {
    const measureFontSize = () => {
      // Search in the document for tick values with a class that contains our axis orientation
      const ticks = document.getElementsByClassName('recharts-cartesian-axis-tick-value');
      
      if (ticks.length > 0) {
        const tick = ticks[0] as HTMLElement;
        const calculatedFontSize = window.getComputedStyle(tick).fontSize;
        const calculatedLetterSpacing = window.getComputedStyle(tick).letterSpacing;
        
        if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
          setFontSize(calculatedFontSize);
          setLetterSpacing(calculatedLetterSpacing);
        }
      }
    };

    // Measure immediately and after a short delay to ensure DOM is ready
    measureFontSize();
    const timeoutId = setTimeout(measureFontSize, 100);
    
    return () => clearTimeout(timeoutId);
  }, [fontSize, letterSpacing, props.ticks]); // Re-run when ticks change

  const { ref, ...restProps } = props;

  return (
    <CartesianAxisClass
      {...restProps}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      axisInteraction={axisInteraction}
      axisType={axisType}
      isInteractionEnabled={isInteractionEnabled}
    />
  );
};

interface EnhancedProps extends Props {
  fontSize: string;
  letterSpacing: string;
  axisInteraction: any;
  axisType: 'x' | 'y';
  isInteractionEnabled: boolean;
}

export class CartesianAxisClass extends Component<EnhancedProps, IState> {
  static displayName = 'CartesianAxis';

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

  constructor(props: EnhancedProps) {
    super(props);
    this.state = { fontSize: props.fontSize, letterSpacing: props.letterSpacing };
  }

  shouldComponentUpdate({ viewBox, fontSize, letterSpacing, ...restProps }: EnhancedProps, nextState: IState) {
    // props.viewBox is sometimes generated every time -
    // check that specially as object equality is likely to fail
    const { viewBox: viewBoxOld, fontSize: fontSizeOld, letterSpacing: letterSpacingOld, ...restPropsOld } = this.props;
    return (
      !shallowEqual(viewBox, viewBoxOld) ||
      fontSize !== fontSizeOld ||
      letterSpacing !== letterSpacingOld ||
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
    const { tickLine, stroke, tick, tickFormatter, unit, axisInteraction, axisType, isInteractionEnabled } = this.props;
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

      const tickElement = tick && CartesianAxisClass.renderTickItem(
        tick,
        tickProps,
        `${typeof tickFormatter === 'function' ? tickFormatter(entry.value, i) : entry.value}${unit || ''}`,
      );

      // No longer wrap individual ticks - use the zone-based interaction instead
      // This prevents individual labels from interfering with interactions
      const interactiveTickElement = tickElement;

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
          {interactiveTickElement}
        </Layer>
      );
    });

    return items.length > 0 ? <g className="recharts-cartesian-axis-ticks">{items}</g> : null;
  }

  renderAxisInteractionZone() {
    const { x, y, width, height, orientation, axisInteraction, axisType, isInteractionEnabled } = this.props;
    
    if (!isInteractionEnabled || !axisInteraction) {
      return null;
    }

    // Calculate the interaction zone based on orientation
    let zoneX, zoneY, zoneWidth, zoneHeight;
    const expandedSize = 30; // Expand the interaction zone beyond the axis

    switch (orientation) {
      case 'bottom':
        zoneX = x;
        zoneY = y;
        zoneWidth = width;
        zoneHeight = height + expandedSize;
        break;
      case 'top':
        zoneX = x;
        zoneY = y - expandedSize;
        zoneWidth = width;
        zoneHeight = height + expandedSize;
        break;
      case 'left':
        zoneX = x - expandedSize;
        zoneY = y;
        zoneWidth = width + expandedSize;
        zoneHeight = height;
        break;
      case 'right':
        zoneX = x;
        zoneY = y;
        zoneWidth = width + expandedSize;
        zoneHeight = height;
        break;
      default:
        return null;
    }

    return (
      <rect
        x={zoneX}
        y={zoneY}
        width={zoneWidth}
        height={zoneHeight}
        fill="transparent"
        pointerEvents="all"
        style={{
          cursor: 'grab',
          touchAction: 'none',
        }}
        onWheel={(e) => {
          // Page scroll is already prevented by native listeners
          // Handle the axis wheel event if available
          if (axisInteraction.handleAxisWheel) {
            axisInteraction.handleAxisWheel(e, axisType);
          }
        }}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          axisInteraction.handleAxisDrag?.(e, axisType, 'start');
        }}
        onPointerMove={(e) => {
          axisInteraction.handleAxisDrag?.(e, axisType, 'move');
        }}
        onPointerUp={(e) => {
          axisInteraction.handleAxisDrag?.(e, axisType, 'end');
        }}
        onPointerCancel={(e) => {
          axisInteraction.handleAxisDrag?.(e, axisType, 'end');
        }}
        onTouchStart={(e) => {
          axisInteraction.handleAxisTouch?.(e, axisType, 'start');
        }}
        onTouchMove={(e) => {
          axisInteraction.handleAxisTouch?.(e, axisType, 'move');
        }}
        onTouchEnd={(e) => {
          axisInteraction.handleAxisTouch?.(e, axisType, 'end');
        }}
      />
    );
  }

  render() {
    const { axisLine, width, height, className, hide, fontSize, letterSpacing } = this.props;

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
      <Layer className={clsx('recharts-cartesian-axis', className)}>
        {axisLine && this.renderAxisLine()}
        {this.renderTicks(fontSize, letterSpacing, ticks)}
        {Label.renderCallByParent(this.props)}
        {this.renderAxisInteractionZone()}
      </Layer>
    );
  }
}

// Export the wrapped component as the main CartesianAxis
export const CartesianAxis = CartesianAxisWithHooks;
