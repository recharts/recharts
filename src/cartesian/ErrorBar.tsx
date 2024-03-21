/**
 * @fileOverview Render a group of error bar
 */
import React, { SVGProps } from 'react';
import invariant from 'tiny-invariant';
import Animate from 'react-smooth';
import { Layer } from '../container/Layer';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { AnimationTiming, D3Scale, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { BarRectangleItem } from './Bar';
import { LinePointItem } from './Line';
import { ScatterPointItem } from './Scatter';

export interface ErrorBarDataItem {
  x: number;
  y: number;
  value: number;
  errorVal?: number[] | number;
}

export type ErrorBarDataPointFormatter = (
  entry: BarRectangleItem | LinePointItem | ScatterPointItem,
  dataKey: DataKey<any>,
) => ErrorBarDataItem;

interface InternalErrorBarProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  data?: any[];
  layout?: 'horizontal' | 'vertical';
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
  direction?: 'x' | 'y';
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
}

export type Props = SVGProps<SVGLineElement> & ErrorBarProps;

export function ErrorBar(props: Props) {
  const {
    offset,
    layout,
    width,
    dataKey,
    data,
    dataPointFormatter,
    xAxis,
    yAxis,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    ...others
  } = props;
  const svgProps = filterProps(others, false);

  invariant(
    !(props.direction === 'x' && xAxis.type !== 'number'),
    'ErrorBar requires Axis type property to be "number".',
  );

  const errorBars = data.map((entry: any) => {
    const { x, y, value, errorVal } = dataPointFormatter(entry, dataKey);

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

    if (layout === 'vertical') {
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
    } else if (layout === 'horizontal') {
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
              from="scale(0, 1)"
              to="scale(1, 1)"
              attributeName="transform"
              begin={animationBegin}
              easing={animationEasing}
              isActive={isAnimationActive}
              duration={animationDuration}
              key={`line-${coordinates.x1}-${coordinates.x2}-${coordinates.y1}-${coordinates.y2}`}
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

ErrorBar.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal',
  isAnimationActive: true,
  animationBegin: 0,
  animationDuration: 200,
  animationEasing: 'ease-in-out',
};
ErrorBar.displayName = 'ErrorBar';
