/**
 * @fileOverview Cartesian Grid
 */
import React, { PureComponent, ReactElement } from 'react';
import _ from 'lodash';
import { isNumber } from '../util/DataUtils';
import { PresentationAttributes, ChartOffset, D3Scale, filterProps } from '../util/types';

import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';

type GridLineType = PresentationAttributes<SVGLineElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;

interface IntrnalCartesianGridProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  horizontalCoordinatesGenerator?: (props: any) => number[];
  verticalCoordinatesGenerator?: (props: any) => number[];
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  offset?: ChartOffset;
  chartWidth?: number;
  chartHeight?: number;
}

interface CartesianGridProps extends IntrnalCartesianGridProps {
  horizontal?: GridLineType;
  vertical?: GridLineType;
  horizontalPoints?: number[];
  verticalPoints?: number[];
  verticalFill?: string[];
  horizontalFill?: string[];
};

type Props = PresentationAttributes<SVGElement> & CartesianGridProps;

class CartesianGrid extends PureComponent<Props> {

  static displayName = 'CartesianGrid';


  static defaultProps = {
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [] as CartesianGridProps['horizontalPoints'],
    // The abscissas of vertical grid lines
    verticalPoints: [] as CartesianGridProps['verticalPoints'],

    stroke: '#ccc',
    fill: 'none',
    // The fill of colors of grid lines
    verticalFill: [] as CartesianGridProps['verticalFill'],
    horizontalFill: [] as CartesianGridProps['horizontalFill'],
  };

  static renderLineItem(option: GridLineType, props: any) {
    let lineItem;

    if (React.isValidElement(option)) {
      lineItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      lineItem = option(props);
    } else {
      const { x1, y1, x2, y2, key, ...others } = props;

      lineItem = (
        <line
          {...filterProps(others)}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          fill="none"
          key={key}
        />
      );
    }

    return lineItem;
  }

  /**
   * Draw the horizontal grid lines
   * @param {Array} horizontalPoints either passed in as props or generated from function
   * @return {Group} Horizontal lines
   */
  renderHorizontal(horizontalPoints: number[]) {
    const { x, width, horizontal } = this.props;

    if (!horizontalPoints || !horizontalPoints.length) { return null; }

    const items = horizontalPoints.map((entry, i) => {
      const props = {
        ...this.props,
        x1: x,
        y1: entry,
        x2: x + width,
        y2: entry,
        key: `line-${i}`,
        index: i,
      };

      return CartesianGrid.renderLineItem(horizontal, props);
    });

    return <g className="recharts-cartesian-grid-horizontal">{items}</g>;
  }

  /**
   * Draw vertical grid lines
   * @param {Array} verticalPoints either passed in as props or generated from function
   * @return {Group} Vertical lines
   */
  renderVertical(verticalPoints: number[]) {
    const { y, height, vertical } = this.props;

    if (!verticalPoints || !verticalPoints.length) { return null; }

    const items = verticalPoints.map((entry, i) => {
      const props = {
        ...this.props,
        x1: entry,
        y1: y,
        x2: entry,
        y2: y + height,
        key: `line-${i}`,
        index: i,
      };

      return CartesianGrid.renderLineItem(vertical, props);
    });

    return <g className="recharts-cartesian-grid-vertical">{items}</g>;
  }

  /**
   * Draw vertical grid stripes filled by colors
   * @param {Array} verticalPoints either passed in as props or generated from function
   * @return {Group} Vertical stripes
   */
  renderVerticalStripes(verticalPoints: number[]) {
    const { verticalFill } = this.props;
    if (!verticalFill || !verticalFill.length) { return null; }

    const { fillOpacity, x, y, width, height } = this.props;
    const verticalPointsUpdated = verticalPoints.slice().sort((a, b) => a - b);

    if (x !== verticalPointsUpdated[0]) {
      verticalPointsUpdated.unshift(0);
    }

    const items = verticalPointsUpdated.map((entry, i) => {
      const lineWidth = verticalPointsUpdated[i + 1] ?
        verticalPointsUpdated[i + 1] - entry : (x + width - entry);
      if (lineWidth <= 0) { return null; }
      const colorIndex = i % verticalFill.length;
      return (
        <rect
          key={`react-${i}`} // eslint-disable-line react/no-array-index-key
          x={Math.round(entry + x - x)}
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
    if (!horizontalFill || !horizontalFill.length) { return null; }

    const { fillOpacity, x, y, width, height } = this.props;
    const horizontalPointsUpdated = horizontalPoints.slice().sort((a, b) => a - b);
    if (y !== horizontalPointsUpdated[0]) {
      horizontalPointsUpdated.unshift(0);
    }

    const items = horizontalPointsUpdated.map((entry, i) => {
      const lineHeight = horizontalPointsUpdated[i + 1] ?
        horizontalPointsUpdated[i + 1] - entry : (y + height - entry);
      if (lineHeight <= 0) { return null; }
      const colorIndex = i % horizontalFill.length;
      return (
        <rect
          key={`react-${i}`} // eslint-disable-line react/no-array-index-key
          y={Math.round(entry + y - y)}
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


  renderBackground() {
    const { fill } = this.props;

    if (!fill || fill === 'none') { return null; }

    const { fillOpacity, x, y, width, height } = this.props;

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
  }

  render() {
    const { x, y, width, height, horizontal, vertical, horizontalCoordinatesGenerator,
      verticalCoordinatesGenerator, xAxis, yAxis, offset, chartWidth, chartHeight } = this.props;

    if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 ||
      !isNumber(x) || x !== +x || !isNumber(y) || y !== +y) {
      return null;
    }

    let { horizontalPoints, verticalPoints } = this.props;

    // No horizontal points are specified
    if ((!horizontalPoints || !horizontalPoints.length) &&
      _.isFunction(horizontalCoordinatesGenerator)) {
      horizontalPoints = horizontalCoordinatesGenerator({ yAxis, width: chartWidth,
        height: chartHeight, offset });
    }

    // No vertical points are specified
    if ((!verticalPoints || !verticalPoints.length) &&
      _.isFunction(verticalCoordinatesGenerator)) {
      verticalPoints = verticalCoordinatesGenerator({ xAxis, width: chartWidth,
        height: chartHeight, offset });
    }

    return (
      <g className="recharts-cartesian-grid">
        {this.renderBackground()}
        {horizontal && this.renderHorizontal(horizontalPoints)}
        {vertical && this.renderVertical(verticalPoints)}

        {horizontal && this.renderHorizontalStripes(horizontalPoints)}
        {vertical && this.renderVerticalStripes(verticalPoints)}
      </g>
    );
  }
}

export default CartesianGrid;
