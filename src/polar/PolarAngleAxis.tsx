/**
 * @fileOverview Axis of radial direction
 */
import React, { PureComponent, ReactElement } from 'react';
import _ from 'lodash';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import Polygon from '../shape/Polygon';
import Text, { Props as TextProps } from '../component/Text';
// @ts-ignore
import { filterEventsOfChild } from '../util/ReactUtils';
import { PresentationAttributes, ScaleType, filterProps, DataKey } from '../util/types';
import { polarToCartesian } from '../util/PolarUtils';
import { TickItem } from './types';

const RADIAN = Math.PI / 180;
const eps = 1e-5;
type PolarAngleAxisTick = PresentationAttributes<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;
interface PolarAngleAxisProps {
  type?: 'number' | 'category';
  angleAxisId?: string | number;
  dataKey?: DataKey<any>;
  cx?: number;
  cy?: number;
  radius?: number;
  hide?: boolean;
  scale: Function | ScaleType;

  axisLine?: PresentationAttributes<SVGLineElement> | boolean;
  axisLineType?: 'polygon' | 'circle';
  tickLine?: PresentationAttributes<SVGLineElement> & { size: number } | boolean;
  tick?: PolarAngleAxisTick;
  ticks?: TickItem[];
  orientation?: 'inner' | 'outer';
  tickFormatter?: (value: any) => string;
  allowDuplicatedCategory?: boolean;
};
export type Props = PresentationAttributes<SVGTextElement> & PolarAngleAxisProps;

class PolarAngleAxis extends PureComponent<Props> {

  static displayName = 'PolarAngleAxis';

  static axisType = 'angleAxis';

  static defaultProps = {
    type: 'category',
    angleAxisId: 0,
    scale: 'auto',
    cx: 0,
    cy: 0,
    domain: [0, 'auto'],
    orientation: 'outer',
    axisLine: true,
    tickLine: true,
    tick: true,
    hide: false,
    allowDuplicatedCategory: true,
  };

  /**
   * Calculate the coordinate of line endpoint
   * @param  {Object} data The Data if ticks
   * @return {Object} (x0, y0): The start point of text,
   *                  (x1, y1): The end point close to text,
   *                  (x2, y2): The end point close to axis
   */
  getTickLineCoord(data: TickItem) {
    const { cx, cy, radius, orientation, tickLine } = this.props;
    const tickLineSize = (tickLine && typeof tickLine === 'object' && tickLine.size) || 8;
    const p1 = polarToCartesian(cx, cy, radius, data.coordinate);
    const p2 = polarToCartesian(
      cx, cy,
      radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate
    );

    return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
  }

  /**
   * Get the text-anchor of each tick
   * @param  {Object} data Data of ticks
   * @return {String} text-anchor
   */
  getTickTextAnchor(data: TickItem) {
    const { orientation } = this.props;
    const cos = Math.cos(-data.coordinate * RADIAN);
    let textAnchor;

    if (cos > eps) {
      textAnchor = orientation === 'outer' ? 'start' : 'end';
    } else if (cos < -eps) {
      textAnchor = orientation === 'outer' ? 'end' : 'start';
    } else {
      textAnchor = 'middle';
    }

    return textAnchor;
  }

  renderAxisLine() {
    const { cx, cy, radius, axisLine, axisLineType } = this.props;
    const props = {
      ...filterProps(this.props),
      fill: 'none',
      ...filterProps(axisLine),
    };

    if (axisLineType === 'circle') {
      return (
        <Dot
          className="recharts-polar-angle-axis-line"
          {...props}
          cx={cx}
          cy={cy}
          r={radius}
        />
      );
    }
    const { ticks } = this.props;
    const points = ticks.map(entry => polarToCartesian(cx, cy, radius, entry.coordinate));

    return <Polygon className="recharts-polar-angle-axis-line" {...props} points={points} />;
  }

  static renderTickItem(option: PolarAngleAxisTick, props: any, value: string | number) {
    let tickItem;

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      tickItem = option(props);
    } else {
      tickItem = (
        <Text
          {...props}
          className="recharts-polar-angle-axis-tick-value"
        >
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  renderTicks() {
    const { ticks, tick, tickLine, tickFormatter, stroke } = this.props;
    const axisProps = filterProps(this.props);
    const customTickProps = filterProps(tick);
    const tickLineProps = {
      ...axisProps, fill: 'none', ...filterProps(tickLine),
    };

    const items = ticks.map((entry, i) => {
      const lineCoord = this.getTickLineCoord(entry);
      const textAnchor = this.getTickTextAnchor(entry);
      const tickProps = {
        textAnchor,
        ...axisProps,
        stroke: 'none',
        fill: stroke,
        ...customTickProps,
        index: i,
        payload: entry,
        x: lineCoord.x2,
        y: lineCoord.y2,
      };

      return (
        <Layer
          className="recharts-polar-angle-axis-tick"
          key={`tick-${i}`} // eslint-disable-line react/no-array-index-key
          {...filterEventsOfChild(this.props, entry, i)}
        >
          {tickLine && (
            <line
              className="recharts-polar-angle-axis-tick-line"
              {...tickLineProps}
              {...lineCoord}
            />
          )}
          {tick && PolarAngleAxis.renderTickItem(
            tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value
          )}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-angle-axis-ticks">{items}</Layer>;
  }

  render() {
    const { ticks, radius, axisLine } = this.props;

    if (radius <= 0 || !ticks || !ticks.length) { return null; }

    return (
      <Layer className="recharts-polar-angle-axis">
        {axisLine && this.renderAxisLine()}
        {this.renderTicks()}
      </Layer>
    );
  }
}

export default PolarAngleAxis;
