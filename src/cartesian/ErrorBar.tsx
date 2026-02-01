/**
 * @fileOverview Render a group of error bar
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { Layer } from '../container/Layer';
import { AnimationTiming, DataKey, RectangleCoordinate } from '../util/types';
import { BarRectangleItem } from './Bar';
import { LinePointItem } from './Line';
import { ScatterPointItem } from './Scatter';
import { ReportErrorBarSettings, useErrorBarContext } from '../context/ErrorBarContext';
import { useXAxis, useYAxis } from '../hooks';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { useChartLayout } from '../context/chartLayoutContext';
import { CSSTransitionAnimate } from '../animation/CSSTransitionAnimate';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

export interface ErrorBarDataItem {
  x: number | undefined;
  y: number | undefined;
  value: number;
  errorVal?: number[] | number;
}

/**
 * So usually the direction is decided by the chart layout.
 * Horizontal layout means error bars are vertical means direction=y
 * Vertical layout means error bars are horizontal means direction=x
 *
 * Except! In Scatter chart, error bars can go both ways.
 *
 * So this property is only ever used in Scatter chart, and ignored elsewhere.
 */
export type ErrorBarDirection = 'x' | 'y';

export type ErrorBarDataPointFormatter<T extends BarRectangleItem | LinePointItem | ScatterPointItem> = (
  entry: T,
  dataKey: DataKey<any>,
  direction: ErrorBarDirection,
) => ErrorBarDataItem;

/**
 * External ErrorBar props, visible for users of the library
 */
interface ErrorBarProps<DataPointType = any, DataValueType = any> extends ZIndexable {
  /**
   * Decides how to extract the value of this ErrorBar from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this ErrorBar.
   *
   * The error values can be a single value for symmetric error bars;
   * or an array of a lower and upper error value for asymmetric error bars.
   */
  dataKey: DataKey<DataPointType, DataValueType>;
  /**
   * Width of the error bar ends (the serifs) in pixels.
   * This is not the total width of the error bar, but just the width of the little lines at the ends.
   *
   * The total width of the error bar is determined by the data value plus/minus the error value.
   *
   * @defaultValue 5
   */
  width?: number;
  /**
   * Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
   * In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.
   */
  direction?: ErrorBarDirection;
  /**
   * @defaultValue true
   */
  isAnimationActive?: boolean;
  /**
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * @defaultValue 400
   */
  animationDuration?: number;
  /**
   * @defaultValue ease-in-out
   */
  animationEasing?: AnimationTiming;
  /**
   * The width of the stroke
   */
  strokeWidth?: number | string;
  /**
   * The stroke color. If "none", no line will be drawn.
   *
   * @defaultValue black
   */
  stroke?: string;
  /**
   * @defaultValue 400
   */
  zIndex?: number;
}

export type Props = SVGProps<SVGLineElement> & ErrorBarProps;

/**
 * Props after defaults, and required props have been applied.
 */
type ErrorBarInternalProps = SVGProps<SVGLineElement> & {
  dataKey: DataKey<any>;
  /** the width of the error bar ends */
  width: number;
  /**
   * Only used for ScatterChart with error bars in two directions.
   * Only accepts a value of "x" or "y" and makes the error bars lie in that direction.
   */
  direction: ErrorBarDirection;
  isAnimationActive: boolean;
  animationBegin: number;
  animationDuration: number;
  animationEasing: AnimationTiming;
};

function ErrorBarImpl(props: ErrorBarInternalProps) {
  const {
    direction,
    width,
    dataKey,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    ...others
  } = props;
  const svgProps = svgPropertiesNoEvents(others);

  const { data, dataPointFormatter, xAxisId, yAxisId, errorBarOffset: offset } = useErrorBarContext();

  const xAxis = useXAxis(xAxisId);
  const yAxis = useYAxis(yAxisId);

  if (xAxis?.scale == null || yAxis?.scale == null || data == null) {
    return null;
  }

  // ErrorBar requires type number XAxis, why?
  if (direction === 'x' && xAxis.type !== 'number') {
    return null;
  }

  const errorBars = data.map((entry: any, dataIndex: number) => {
    const { x, y, value, errorVal } = dataPointFormatter(entry, dataKey, direction);

    if (!errorVal || x == null || y == null) {
      return null;
    }

    const lineCoordinates: Array<RectangleCoordinate> = [];
    let lowBound: number, highBound: number;

    if (Array.isArray(errorVal)) {
      const [low, high] = errorVal;
      if (low == null || high == null) {
        return null;
      }
      lowBound = low;
      highBound = high;
    } else {
      lowBound = highBound = errorVal;
    }

    if (direction === 'x') {
      // error bar for horizontal charts, the y is fixed, x is a range value
      const { scale } = xAxis;

      const yMid = y + offset;
      const yMin = yMid + width;
      const yMax = yMid - width;

      const xMin = scale.map(value - lowBound);
      const xMax = scale.map(value + highBound);

      if (xMin != null && xMax != null) {
        // the right line of |--|
        lineCoordinates.push({ x1: xMax, y1: yMin, x2: xMax, y2: yMax });
        // the middle line of |--|
        lineCoordinates.push({ x1: xMin, y1: yMid, x2: xMax, y2: yMid });
        // the left line of |--|
        lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMin, y2: yMax });
      }
    } else if (direction === 'y') {
      // error bar for horizontal charts, the x is fixed, y is a range value
      const { scale } = yAxis;

      const xMid = x + offset;
      const xMin = xMid - width;
      const xMax = xMid + width;

      const yMin = scale.map(value - lowBound);
      const yMax = scale.map(value + highBound);

      if (yMin != null && yMax != null) {
        // the top line
        lineCoordinates.push({ x1: xMin, y1: yMax, x2: xMax, y2: yMax });
        // the middle line
        lineCoordinates.push({ x1: xMid, y1: yMin, x2: xMid, y2: yMax });
        // the bottom line
        lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMax, y2: yMin });
      }
    }

    const scaleDirection: string = direction === 'x' ? 'scaleX' : 'scaleY';

    const transformOrigin = `${x + offset}px ${y + offset}px`;

    return (
      <Layer className="recharts-errorBar" key={`bar-${x}-${y}-${value}-${dataIndex}`} {...svgProps}>
        {lineCoordinates.map((c, lineIndex) => {
          const lineStyle = isAnimationActive ? { transformOrigin } : undefined;
          return (
            <CSSTransitionAnimate
              animationId={`error-bar-${direction}_${c.x1}-${c.x2}-${c.y1}-${c.y2}`}
              from={`${scaleDirection}(0)`}
              to={`${scaleDirection}(1)`}
              attributeName="transform"
              begin={animationBegin}
              easing={animationEasing}
              isActive={isAnimationActive}
              duration={animationDuration}
              key={`errorbar-${dataIndex}-${c.x1}-${c.y1}-${c.x2}-${c.y2}-${lineIndex}`}
            >
              {style => <line {...c} style={{ ...lineStyle, ...style }} />}
            </CSSTransitionAnimate>
          );
        })}
      </Layer>
    );
  });

  return <Layer className="recharts-errorBars">{errorBars}</Layer>;
}

function useErrorBarDirection(directionFromProps: ErrorBarDirection | undefined): ErrorBarDirection {
  const layout = useChartLayout();
  if (directionFromProps != null) {
    return directionFromProps;
  }
  if (layout != null) {
    return layout === 'horizontal' ? 'y' : 'x';
  }
  return 'x';
}

export const errorBarDefaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  isAnimationActive: true,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease-in-out',
  zIndex: DefaultZIndexes.line,
} as const satisfies Partial<Props>;

/**
 * ErrorBar renders whiskers to represent error margins on a chart.
 *
 * It must be a child of a graphical element.
 *
 * ErrorBar expects data in one of the following forms:
 * - Symmetric error bars: a single error value representing both lower and upper bounds.
 * - Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound.
 *
 * The values provided are relative to the main data value.
 * For example, if the main data value is 10 and the error value is 2,
 * the error bar will extend from 8 to 12 for symmetric error bars.
 *
 * In other words, what ErrorBar will render is:
 * - For symmetric error bars: [value - errorVal, value + errorVal]
 * - For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]
 *
 * In stacked or ranged Bar charts, ErrorBar will use the higher data value
 * as the reference point for calculating the error bar positions.
 *
 * @consumes ErrorBarContext
 */
export function ErrorBar(outsideProps: Props) {
  const realDirection: ErrorBarDirection = useErrorBarDirection(outsideProps.direction);
  const props = resolveDefaultProps(outsideProps, errorBarDefaultProps);
  const { width, isAnimationActive, animationBegin, animationDuration, animationEasing, zIndex } = props;

  return (
    <>
      <ReportErrorBarSettings dataKey={props.dataKey} direction={realDirection} />
      <ZIndexLayer zIndex={zIndex}>
        <ErrorBarImpl
          {...props}
          direction={realDirection}
          width={width}
          isAnimationActive={isAnimationActive}
          animationBegin={animationBegin}
          animationDuration={animationDuration}
          animationEasing={animationEasing}
        />
      </ZIndexLayer>
    </>
  );
}

ErrorBar.displayName = 'ErrorBar';
