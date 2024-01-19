/**
 * @fileOverview Cartesian Grid
 */
import React, { PureComponent, ReactElement, SVGProps } from 'react';
import isFunction from 'lodash/isFunction';

import { isNumber } from '../util/DataUtils';
import { ChartOffset, D3Scale } from '../util/types';

import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps } from '../util/ReactUtils';

type GridLineType =
  | SVGProps<SVGLineElement>
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | boolean;

interface InternalCartesianGridProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  horizontalCoordinatesGenerator?: (
    props: { yAxis: any; width: number; height: number; offset: ChartOffset },
    syncWithTicks: boolean,
  ) => number[];
  verticalCoordinatesGenerator?: (
    props: { xAxis: any; width: number; height: number; offset: ChartOffset },
    syncWithTicks: boolean,
  ) => number[];
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  offset?: ChartOffset;
  chartWidth?: number;
  chartHeight?: number;
}

interface CartesianGridProps extends InternalCartesianGridProps {
  horizontal?: GridLineType;
  vertical?: GridLineType;
  /**
   * Array of coordinates in pixels where to draw horizontal grid lines.
   * Has priority over syncWithTicks and horizontalValues.
   */
  horizontalPoints?: number[];
  /**
   * Array of coordinates in pixels where to draw vertical grid lines.
   * Has priority over syncWithTicks and horizontalValues.
   */
  verticalPoints?: number[];
  verticalFill?: string[];
  horizontalFill?: string[];
  /**
   * If true, only the lines that correspond to the axes ticks values will be drawn.
   * If false, extra lines could be added for each axis (at min and max coordinates), if there will not such ticks.
   * horizontalPoints, verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.
   */
  syncWithTicks?: boolean;
  /**
   * Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over horizontalValues.
   */
  horizontalValues?: number[] | string[];
  /**
   * Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over verticalValues.
   */
  verticalValues?: number[] | string[];
}

export type Props = SVGProps<SVGElement> & CartesianGridProps;

const Background = (props: Pick<SVGProps<SVGElement>, 'fill' | 'fillOpacity' | 'x' | 'y' | 'width' | 'height'>) => {
  const { fill } = props;

  if (!fill || fill === 'none') {
    return null;
  }

  const { fillOpacity, x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke="none"
      fill={fill}
      fillOpacity={fillOpacity}
      className="recharts-cartesian-grid-bg"
    />
  );
};

type LineItemProps = Props & {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  key: string;
  index: number;
};

function renderLineItem(option: GridLineType, props: LineItemProps) {
  let lineItem;

  if (React.isValidElement(option)) {
    // @ts-expect-error typescript does not see the props type when cloning an element
    lineItem = React.cloneElement(option, props);
  } else if (isFunction(option)) {
    lineItem = option(props);
  } else {
    const { x1, y1, x2, y2, key, ...others } = props;
    const { offset: __, ...restOfFilteredProps } = filterProps(others, false);
    lineItem = <line {...restOfFilteredProps} x1={x1} y1={y1} x2={x2} y2={y2} fill="none" key={key} />;
  }

  return lineItem;
}

function HorizontalGridLines(props: Props) {
  const { x, width, horizontal, horizontalPoints } = props;

  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }

  const items = horizontalPoints.map((entry, i) => {
    const lineItemProps: LineItemProps = {
      ...props,
      x1: x,
      y1: entry,
      x2: x + width,
      y2: entry,
      key: `line-${i}`,
      index: i,
    };

    return renderLineItem(horizontal, lineItemProps);
  });

  return <g className="recharts-cartesian-grid-horizontal">{items}</g>;
}

function VerticalGridLines(props: Props) {
  const { y, height, vertical, verticalPoints } = props;

  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }

  const items = verticalPoints.map((entry, i) => {
    const lineItemProps: LineItemProps = {
      ...props,
      x1: entry,
      y1: y,
      x2: entry,
      y2: y + height,
      key: `line-${i}`,
      index: i,
    };

    return renderLineItem(vertical, lineItemProps);
  });

  return <g className="recharts-cartesian-grid-vertical">{items}</g>;
}

export class CartesianGrid extends PureComponent<Props> {
  static displayName = 'CartesianGrid';

  static defaultProps: Partial<Props> = {
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [],
    // The abscissas of vertical grid lines
    verticalPoints: [],

    stroke: '#ccc',
    fill: 'none',
    // The fill of colors of grid lines
    verticalFill: [],
    horizontalFill: [],
  };

  /**
   * Draw vertical grid stripes filled by colors
   * @param {Array} verticalPoints either passed in as props or generated from function
   * @return {Group} Vertical stripes
   */
  renderVerticalStripes(verticalPoints: number[]) {
    const { verticalFill } = this.props;
    if (!verticalFill || !verticalFill.length) {
      return null;
    }

    const { fillOpacity, x, y, width, height } = this.props;
    const roundedSortedVerticalPoints = verticalPoints.map(e => Math.round(e + x - x)).sort((a, b) => a - b);

    if (x !== roundedSortedVerticalPoints[0]) {
      roundedSortedVerticalPoints.unshift(0);
    }

    const items = roundedSortedVerticalPoints.map((entry, i) => {
      const lastStripe = !roundedSortedVerticalPoints[i + 1];
      const lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;

      if (lineWidth <= 0) {
        return null;
      }
      const colorIndex = i % verticalFill.length;
      return (
        <rect
          key={`react-${i}`} // eslint-disable-line react/no-array-index-key
          x={entry}
          y={y}
          width={lineWidth}
          height={height}
          stroke="none"
          fill={verticalFill[colorIndex]}
          fillOpacity={fillOpacity}
          className="recharts-cartesian-grid-bg"
        />
      );
    });

    return <g className="recharts-cartesian-gridstripes-vertical">{items}</g>;
  }

  /**
   * Draw horizontal grid stripes filled by colors
   * @param {Array} horizontalPoints either passed in as props or generated from function
   * @return {Group} Horizontal stripes
   */
  renderHorizontalStripes(horizontalPoints: number[]) {
    const { horizontalFill } = this.props;
    if (!horizontalFill || !horizontalFill.length) {
      return null;
    }

    const { fillOpacity, x, y, width, height } = this.props;
    const roundedSortedHorizontalPoints = horizontalPoints.map(e => Math.round(e + y - y)).sort((a, b) => a - b);
    if (y !== roundedSortedHorizontalPoints[0]) {
      roundedSortedHorizontalPoints.unshift(0);
    }

    const items = roundedSortedHorizontalPoints.map((entry, i) => {
      const lastStripe = !roundedSortedHorizontalPoints[i + 1];
      const lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
      if (lineHeight <= 0) {
        return null;
      }
      const colorIndex = i % horizontalFill.length;
      return (
        <rect
          key={`react-${i}`} // eslint-disable-line react/no-array-index-key
          y={entry}
          x={x}
          height={lineHeight}
          width={width}
          stroke="none"
          fill={horizontalFill[colorIndex]}
          fillOpacity={fillOpacity}
          className="recharts-cartesian-grid-bg"
        />
      );
    });

    return <g className="recharts-cartesian-gridstripes-horizontal">{items}</g>;
  }

  render() {
    const {
      x,
      y,
      width,
      height,
      horizontal,
      vertical,
      horizontalCoordinatesGenerator,
      verticalCoordinatesGenerator,
      xAxis,
      yAxis,
      offset,
      chartWidth,
      chartHeight,
      syncWithTicks,
      horizontalValues,
      verticalValues,
    } = this.props;

    if (
      !isNumber(width) ||
      width <= 0 ||
      !isNumber(height) ||
      height <= 0 ||
      !isNumber(x) ||
      x !== +x ||
      !isNumber(y) ||
      y !== +y
    ) {
      return null;
    }

    let { horizontalPoints, verticalPoints } = this.props;

    // No horizontal points are specified
    if ((!horizontalPoints || !horizontalPoints.length) && isFunction(horizontalCoordinatesGenerator)) {
      const isHorizontalValues = horizontalValues && horizontalValues.length;

      horizontalPoints = horizontalCoordinatesGenerator(
        {
          yAxis: yAxis
            ? {
                ...yAxis,
                ticks: isHorizontalValues ? horizontalValues : yAxis.ticks,
              }
            : undefined,
          width: chartWidth,
          height: chartHeight,
          offset,
        },
        isHorizontalValues ? true : syncWithTicks,
      );
    }

    // No vertical points are specified
    if ((!verticalPoints || !verticalPoints.length) && isFunction(verticalCoordinatesGenerator)) {
      const isVerticalValues = verticalValues && verticalValues.length;

      verticalPoints = verticalCoordinatesGenerator(
        {
          xAxis: xAxis
            ? {
                ...xAxis,
                ticks: isVerticalValues ? verticalValues : xAxis.ticks,
              }
            : undefined,
          width: chartWidth,
          height: chartHeight,
          offset,
        },
        isVerticalValues ? true : syncWithTicks,
      );
    }

    return (
      <g className="recharts-cartesian-grid">
        <Background
          fill={this.props.fill}
          fillOpacity={this.props.fillOpacity}
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
        />
        <HorizontalGridLines {...this.props} />
        <VerticalGridLines {...this.props} />

        {horizontal && this.renderHorizontalStripes(horizontalPoints)}
        {vertical && this.renderVerticalStripes(verticalPoints)}
      </g>
    );
  }
}
