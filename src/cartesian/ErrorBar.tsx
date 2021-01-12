/**
 * @fileOverview Render a group of error bar
 */
import React, { SVGProps } from 'react';
import { Layer } from '../container/Layer';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps, D3Scale, DataKey } from '../util/types';

interface ErrorBarDataItem {
  x: number;
  y: number;
  value: number;
  errorVal?: number[] | number;
}

interface InternalErrorBarProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  data?: any[];
  layout?: 'horizontal' | 'vertical';
  dataPointFormatter?: (entry: any, dataKey: DataKey<any>) => ErrorBarDataItem;
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
}

export type Props = SVGProps<SVGLineElement> & ErrorBarProps;

export function ErrorBar(props: Props) {
  const { offset, layout, width, dataKey, data, dataPointFormatter, xAxis, yAxis, ...others } = props;
  const svgProps = filterProps(others);
  const errorBars = data.map((entry: any, i: number) => {
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
      // eslint-disable-next-line react/no-array-index-key
      <Layer className="recharts-errorBar" key={`bar-${i}`} {...svgProps}>
        {lineCoordinates.map((coordinates, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <line {...coordinates} key={`line-${index}`} />
        ))}
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
};
ErrorBar.displayName = 'ErrorBar';
