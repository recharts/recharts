/**
 * @fileOverview Render a group of error bar
 */
import React, { Component, createContext, SVGProps, useContext } from 'react';
import Animate from 'react-smooth';
import { Layer } from '../container/Layer';
import { AnimationTiming, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { BarRectangleItem } from './Bar';
import { LinePointItem } from './Line';
import { ScatterPointItem } from './Scatter';
import { ReportErrorBarSettings } from '../context/CartesianGraphicalItemContext';
import { AxisId } from '../state/axisMapSlice';
import { useXAxis, useYAxis } from '../hooks';

export interface ErrorBarDataItem {
  x: number;
  y: number;
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

export type ErrorBarDataPointFormatter = (
  entry: BarRectangleItem | LinePointItem | ScatterPointItem,
  dataKey: DataKey<any>,
  direction: ErrorBarDirection,
) => ErrorBarDataItem;

interface InternalErrorBarProps {
  xAxisId?: AxisId;
  yAxisId?: AxisId;
  data?: any[];
  dataPointFormatter?: ErrorBarDataPointFormatter;
  /** The offset between central and the given coordinate, often set by <Bar/> */
  offset?: number;
}

interface ErrorBarProps extends InternalErrorBarProps {
  dataKey: DataKey<any>;
  /** the width of the error bar ends */
  width?: number;
  /**
   * Only used for ScatterChart with error bars in two directions.
   * Only accepts a value of "x" or "y" and makes the error bars lie in that direction.
   */
  direction?: ErrorBarDirection;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
}

export type Props = SVGProps<SVGLineElement> & ErrorBarProps;

function ErrorBarImpl(props: Props) {
  const {
    offset,
    direction,
    width,
    dataKey,
    data,
    dataPointFormatter,
    xAxisId,
    yAxisId,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    ...others
  } = props;
  const svgProps = filterProps(others, false);

  const xAxis = useXAxis(props.xAxisId);
  const yAxis = useYAxis(props.yAxisId);

  if (xAxis?.scale == null || yAxis?.scale == null) {
    return null;
  }

  // ErrorBar requires type number XAxis, why?
  if (direction === 'x' && xAxis.type !== 'number') {
    return null;
  }

  const errorBars = data.map((entry: any) => {
    const { x, y, value, errorVal } = dataPointFormatter(entry, dataKey, direction);

    if (!errorVal) {
      return null;
    }

    const lineCoordinates = [];
    let lowBound, highBound;

    if (Array.isArray(errorVal)) {
      [lowBound, highBound] = errorVal;
    } else {
      lowBound = highBound = errorVal;
    }

    if (direction === 'x') {
      // error bar for horizontal charts, the y is fixed, x is a range value
      const { scale } = xAxis;

      const yMid = y + offset;
      const yMin = yMid + width;
      const yMax = yMid - width;

      const xMin = scale(value - lowBound);
      const xMax = scale(value + highBound);

      // the right line of |--|
      lineCoordinates.push({ x1: xMax, y1: yMin, x2: xMax, y2: yMax });
      // the middle line of |--|
      lineCoordinates.push({ x1: xMin, y1: yMid, x2: xMax, y2: yMid });
      // the left line of |--|
      lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMin, y2: yMax });
    } else if (direction === 'y') {
      // error bar for horizontal charts, the x is fixed, y is a range value
      const { scale } = yAxis;

      const xMid = x + offset;
      const xMin = xMid - width;
      const xMax = xMid + width;

      const yMin = scale(value - lowBound);
      const yMax = scale(value + highBound);

      // the top line
      lineCoordinates.push({ x1: xMin, y1: yMax, x2: xMax, y2: yMax });
      // the middle line
      lineCoordinates.push({ x1: xMid, y1: yMin, x2: xMid, y2: yMax });
      // the bottom line
      lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMax, y2: yMin });
    }

    const transformOrigin = `${x + offset}px ${y + offset}px`;

    return (
      <Layer
        className="recharts-errorBar"
        key={`bar-${lineCoordinates.map(c => `${c.x1}-${c.x2}-${c.y1}-${c.y2}`)}`}
        {...svgProps}
      >
        {lineCoordinates.map(coordinates => {
          const lineStyle = isAnimationActive ? { transformOrigin: `${coordinates.x1 - 5}px` } : undefined;
          return (
            <Animate
              from={{ transform: 'scaleY(0)', transformOrigin }}
              to={{ transform: 'scaleY(1)', transformOrigin }}
              begin={animationBegin}
              easing={animationEasing}
              isActive={isAnimationActive}
              duration={animationDuration}
              key={`line-${coordinates.x1}-${coordinates.x2}-${coordinates.y1}-${coordinates.y2}`}
              style={{
                transformOrigin,
              }}
            >
              <line {...coordinates} style={lineStyle} />
            </Animate>
          );
        })}
      </Layer>
    );
  });

  return <Layer className="recharts-errorBars">{errorBars}</Layer>;
}

const ErrorBarPreferredDirection = createContext<ErrorBarDirection | undefined>(undefined);

function useErrorBarDirection(directionFromProps: ErrorBarDirection | undefined): ErrorBarDirection {
  const preferredDirection = useContext(ErrorBarPreferredDirection);
  if (directionFromProps != null) {
    return directionFromProps;
  }
  if (preferredDirection != null) {
    return preferredDirection;
  }
  return 'x';
}

export function SetErrorBarPreferredDirection({
  direction,
  children,
}: {
  direction: ErrorBarDirection;
  children: React.ReactNode;
}) {
  return <ErrorBarPreferredDirection.Provider value={direction}>{children}</ErrorBarPreferredDirection.Provider>;
}

function ErrorBarInternal(props: Props) {
  const realDirection: ErrorBarDirection = useErrorBarDirection(props.direction);

  return (
    <>
      <ReportErrorBarSettings dataKey={props.dataKey} direction={realDirection} />
      <ErrorBarImpl {...props} />
    </>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export class ErrorBar extends Component<Props, {}> {
  static defaultProps = {
    stroke: 'black',
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease-in-out',
  };

  static displayName = 'ErrorBar';

  render() {
    return <ErrorBarInternal {...this.props} />;
  }
}
