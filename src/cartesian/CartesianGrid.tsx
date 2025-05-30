/**
 * @fileOverview Cartesian Grid
 */
import * as React from 'react';
import { ReactElement, SVGProps } from 'react';

import { warn } from '../util/LogUtils';
import { isNumber } from '../util/DataUtils';
import { ChartOffset } from '../util/types';

import { filterProps } from '../util/ReactUtils';
import { AxisPropsNeededForTicksGenerator, getCoordinatesOfGrid, getTicksOfAxis } from '../util/ChartUtils';
import { getTicks, GetTicksInput } from './getTicks';
import { CartesianAxis } from './CartesianAxis';
import { useChartHeight, useChartWidth, useOffset } from '../context/chartLayoutContext';
import { AxisId } from '../state/cartesianAxisSlice';
import { selectAxisPropsNeededForCartesianGridTicksGenerator } from '../state/selectors/axisSelectors';
import { useAppSelector } from '../state/hooks';
import { useIsPanorama } from '../context/PanoramaContext';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

/**
 * The <CartesianGrid horizontal
 */
export type GridLineTypeFunctionProps = Omit<LineItemProps, 'key'> & {
  // React does not pass the key through when calling cloneElement - so it might be undefined when cloning
  key: LineItemProps['key'] | undefined;
  // offset is not present in LineItemProps, but it is read from context and then passed to the GridLineType function and element
  offset: ChartOffset;
};

export type AxisPropsForCartesianGridTicksGeneration = AxisPropsNeededForTicksGenerator &
  Omit<GetTicksInput, 'ticks' | 'viewBox'>;

type GridLineType =
  | SVGProps<SVGLineElement>
  | ReactElement<SVGElement>
  | ((props: GridLineTypeFunctionProps) => ReactElement<SVGElement>)
  | boolean;

export type HorizontalCoordinatesGenerator = (
  props: {
    yAxis: AxisPropsForCartesianGridTicksGeneration;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];

export type VerticalCoordinatesGenerator = (
  props: {
    xAxis: AxisPropsForCartesianGridTicksGeneration;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];

interface InternalCartesianGridProps {
  width?: number;
  height?: number;
  horizontalCoordinatesGenerator?: HorizontalCoordinatesGenerator;
  verticalCoordinatesGenerator?: VerticalCoordinatesGenerator;
}

interface CartesianGridProps extends InternalCartesianGridProps {
  /**
   * The x-coordinate of grid.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  x?: number;
  /**
   * The y-coordinate of grid.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  y?: number;
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
   * In case there are more stripes than colors, the colors will start from beginning.
   * So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   * Note: Grid lines will be rendered above these background stripes.
   */
  verticalFill?: string[];
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning.
   * So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   * Note: Grid lines will be rendered above these background stripes.
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
  xAxisId?: AxisId;
  yAxisId?: AxisId;
}

type AcceptedSvgProps = Omit<SVGProps<SVGRectElement>, 'offset'>;

export type Props = AcceptedSvgProps & CartesianGridProps;

const Background = (props: Pick<AcceptedSvgProps, 'fill' | 'fillOpacity' | 'x' | 'y' | 'width' | 'height' | 'ry'>) => {
  const { fill } = props;

  if (!fill || fill === 'none') {
    return null;
  }

  const { fillOpacity, x, y, width, height, ry } = props;

  return (
    <rect
      x={x}
      y={y}
      ry={ry}
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
  offset: ChartOffset;
  xAxis: null | AxisPropsForCartesianGridTicksGeneration;
  yAxis: null | AxisPropsForCartesianGridTicksGeneration;
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
  } else if (typeof option === 'function') {
    lineItem = option(props);
  } else {
    const { x1, y1, x2, y2, key, ...others } = props;
    const { offset: __, ...restOfFilteredProps } = filterProps(others, false);
    lineItem = <line {...restOfFilteredProps} x1={x1} y1={y1} x2={x2} y2={y2} fill="none" key={key} />;
  }

  return lineItem;
}

type GridLinesProps = Props & {
  offset: GridLineTypeFunctionProps['offset'];
  xAxis: GridLineTypeFunctionProps['xAxis'];
  yAxis: GridLineTypeFunctionProps['yAxis'];
};

function HorizontalGridLines(props: GridLinesProps) {
  const { x, width, horizontal = true, horizontalPoints } = props;

  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }

  const { xAxisId, yAxisId, ...otherLineItemProps } = props;

  const items = horizontalPoints.map((entry, i) => {
    const lineItemProps: LineItemProps = {
      ...otherLineItemProps,
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

function VerticalGridLines(props: GridLinesProps) {
  const { y, height, vertical = true, verticalPoints } = props;

  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }

  const { xAxisId, yAxisId, ...otherLineItemProps } = props;

  const items = verticalPoints.map((entry, i) => {
    const lineItemProps: LineItemProps = {
      ...otherLineItemProps,
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
  const { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal = true } = props;
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
  const { vertical = true, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
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

const defaultHorizontalCoordinatesGenerator: HorizontalCoordinatesGenerator = (
  { yAxis, width, height, offset },
  syncWithTicks,
) =>
  getCoordinatesOfGrid(
    getTicks({
      ...CartesianAxis.defaultProps,
      ...yAxis,
      ticks: getTicksOfAxis(yAxis, true),
      viewBox: { x: 0, y: 0, width, height },
    }),
    offset.top,
    offset.top + offset.height,
    syncWithTicks,
  );

const defaultProps = {
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
  xAxisId: 0,
  yAxisId: 0,
} as const satisfies Partial<Props>;

export function CartesianGrid(props: Props) {
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();
  const offset = useOffset();
  const propsIncludingDefaults = {
    ...resolveDefaultProps(props, defaultProps),
    x: isNumber(props.x) ? props.x : offset.left,
    y: isNumber(props.y) ? props.y : offset.top,
    width: isNumber(props.width) ? props.width : offset.width,
    height: isNumber(props.height) ? props.height : offset.height,
  };

  const { xAxisId, yAxisId, x, y, width, height, syncWithTicks, horizontalValues, verticalValues } =
    propsIncludingDefaults;

  const isPanorama = useIsPanorama();
  const xAxis: AxisPropsForCartesianGridTicksGeneration = useAppSelector(state =>
    selectAxisPropsNeededForCartesianGridTicksGenerator(state, 'xAxis', xAxisId, isPanorama),
  );
  const yAxis: AxisPropsForCartesianGridTicksGeneration = useAppSelector(state =>
    selectAxisPropsNeededForCartesianGridTicksGenerator(state, 'yAxis', yAxisId, isPanorama),
  );

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

  /*
   * verticalCoordinatesGenerator and horizontalCoordinatesGenerator are defined
   * outside the propsIncludingDefaults because they were never part of the original props
   * and they were never passed as a prop down to horizontal/vertical custom elements.
   * If we add these two to propsIncludingDefaults then we are changing public API.
   * Not a bad thing per se but also not necessary.
   */
  const verticalCoordinatesGenerator =
    propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
  const horizontalCoordinatesGenerator =
    propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;

  let { horizontalPoints, verticalPoints } = propsIncludingDefaults;

  // No horizontal points are specified
  if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === 'function') {
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
  if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === 'function') {
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
        fill={propsIncludingDefaults.fill}
        fillOpacity={propsIncludingDefaults.fillOpacity}
        x={propsIncludingDefaults.x}
        y={propsIncludingDefaults.y}
        width={propsIncludingDefaults.width}
        height={propsIncludingDefaults.height}
        ry={propsIncludingDefaults.ry}
      />

      <HorizontalStripes {...propsIncludingDefaults} horizontalPoints={horizontalPoints} />
      <VerticalStripes {...propsIncludingDefaults} verticalPoints={verticalPoints} />

      <HorizontalGridLines
        {...propsIncludingDefaults}
        offset={offset}
        horizontalPoints={horizontalPoints}
        xAxis={xAxis}
        yAxis={yAxis}
      />

      <VerticalGridLines
        {...propsIncludingDefaults}
        offset={offset}
        verticalPoints={verticalPoints}
        xAxis={xAxis}
        yAxis={yAxis}
      />
    </g>
  );
}

CartesianGrid.displayName = 'CartesianGrid';
