/**
 * @fileOverview Cartesian Grid
 */
import React, { PureComponent, ReactElement, SVGProps } from 'react';
import isFunction from 'lodash/isFunction';

import { warn } from '../util/LogUtils';
import { isNumber } from '../util/DataUtils';
import { ChartOffset, D3Scale } from '../util/types';

import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps } from '../util/ReactUtils';
import { getCoordinatesOfGrid, getTicksOfAxis } from '../util/ChartUtils';
import { getTicks } from './getTicks';
import { CartesianAxis } from './CartesianAxis';

type GridLineType =
  | SVGProps<SVGLineElement>
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | boolean;

export type HorizontalCoordinatesGenerator = (
  props: {
    yAxis: any;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];

export type VerticalCoordinatesGenerator = (
  props: {
    xAxis: any;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];

interface InternalCartesianGridProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  horizontalCoordinatesGenerator?: HorizontalCoordinatesGenerator;
  verticalCoordinatesGenerator?: VerticalCoordinatesGenerator;
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
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning
   * So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   */
  verticalFill?: string[];
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning
   * So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   */
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

type AcceptedSvgProps = Omit<SVGProps<SVGElement>, 'offset'>;

export type Props = AcceptedSvgProps & CartesianGridProps;

const Background = (props: Pick<AcceptedSvgProps, 'fill' | 'fillOpacity' | 'x' | 'y' | 'width' | 'height'>) => {
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

function HorizontalStripes(props: Props) {
  const { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal } = props;
  if (!horizontal || !horizontalFill || !horizontalFill.length) {
    return null;
  }

  // Why =y -y? I was trying to find any difference that this makes, with floating point numbers and edge cases but ... nothing.
  const roundedSortedHorizontalPoints = horizontalPoints.map(e => Math.round(e + y - y)).sort((a, b) => a - b);
  // Why is this condition `!==` instead of `<=` ?
  if (y !== roundedSortedHorizontalPoints[0]) {
    roundedSortedHorizontalPoints.unshift(0);
  }

  const items = roundedSortedHorizontalPoints.map((entry, i) => {
    // Why do we strip only the last stripe if it is invisible, and not all invisible stripes?
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

function VerticalStripes(props: Props) {
  const { vertical, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
  if (!vertical || !verticalFill || !verticalFill.length) {
    return null;
  }

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

const defaultVerticalCoordinatesGenerator: VerticalCoordinatesGenerator = (
  { xAxis, width, height, offset },
  syncWithTicks,
) =>
  getCoordinatesOfGrid(
    getTicks({
      ...CartesianAxis.defaultProps,
      ...xAxis,
      ticks: getTicksOfAxis(xAxis, true),
      viewBox: { x: 0, y: 0, width, height },
    }),
    offset.left,
    offset.left + offset.width,
    syncWithTicks,
  );

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

  render() {
    const {
      x,
      y,
      width,
      height,
      horizontalCoordinatesGenerator,
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

    const verticalCoordinatesGenerator = this.props.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;

    let { horizontalPoints, verticalPoints } = this.props;

    // No horizontal points are specified
    if ((!horizontalPoints || !horizontalPoints.length) && isFunction(horizontalCoordinatesGenerator)) {
      const isHorizontalValues = horizontalValues && horizontalValues.length;

      const generatorResult = horizontalCoordinatesGenerator(
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
      warn(
        Array.isArray(generatorResult),
        `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof generatorResult}]`,
      );
      if (Array.isArray(generatorResult)) {
        horizontalPoints = generatorResult;
      }
    }

    // No vertical points are specified
    if ((!verticalPoints || !verticalPoints.length) && isFunction(verticalCoordinatesGenerator)) {
      const isVerticalValues = verticalValues && verticalValues.length;
      const generatorResult = verticalCoordinatesGenerator(
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
      warn(
        Array.isArray(generatorResult),
        `verticalCoordinatesGenerator should return Array but instead it returned [${typeof generatorResult}]`,
      );
      if (Array.isArray(generatorResult)) {
        verticalPoints = generatorResult;
      }
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
        <HorizontalGridLines {...this.props} horizontalPoints={horizontalPoints} />

        <VerticalGridLines {...this.props} verticalPoints={verticalPoints} />

        <HorizontalStripes {...this.props} horizontalPoints={horizontalPoints} />

        <VerticalStripes {...this.props} verticalPoints={verticalPoints} />
      </g>
    );
  }
}
