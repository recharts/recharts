/**
 * @fileOverview The axis of polar coordinate system
 */
import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { Layer } from '../container/Layer';
import { polarToCartesian } from '../util/PolarUtils';
import {
  filterProps,
  BaseAxisProps,
  TickItem,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
} from '../util/types';

export interface PolarRadiusAxisProps extends BaseAxisProps {
  cx?: number;
  cy?: number;
  radiusAxisId?: string | number;
  angle?: number;
  orientation?: 'left' | 'right' | 'middle';
  ticks?: TickItem[];
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PolarRadiusAxisProps;

export class PolarRadiusAxis extends PureComponent<Props> {
  static displayName = 'PolarRadiusAxis';

  static axisType = 'radiusAxis';

  static defaultProps = {
    type: 'number',
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: 'right',
    stroke: '#ccc',
    axisLine: true,
    tick: true,
    tickCount: 5,
    domain: [0, 'auto'],
    allowDataOverflow: false,
    scale: 'auto',
    allowDuplicatedCategory: true,
  };

  /**
   * Calculate the coordinate of tick
   * @param  {Number} coordinate The radius of tick
   * @return {Object} (x, y)
   */
  getTickValueCoord({ coordinate }: TickItem) {
    const { angle, cx, cy } = this.props;

    return polarToCartesian(cx, cy, coordinate, angle);
  }

  getTickTextAnchor() {
    const { orientation } = this.props;
    let textAnchor;

    switch (orientation) {
      case 'left':
        textAnchor = 'end';
        break;
      case 'right':
        textAnchor = 'start';
        break;
      default:
        textAnchor = 'middle';
        break;
    }

    return textAnchor;
  }

  getViewBox() {
    const { cx, cy, angle, ticks } = this.props;
    const maxRadiusTick = _.maxBy(ticks, (entry: TickItem) => entry.coordinate || 0);
    const minRadiusTick = _.minBy(ticks, (entry: TickItem) => entry.coordinate || 0);

    return {
      cx,
      cy,
      startAngle: angle,
      endAngle: angle,
      innerRadius: minRadiusTick.coordinate || 0,
      outerRadius: maxRadiusTick.coordinate || 0,
    };
  }

  renderAxisLine() {
    const { cx, cy, angle, ticks, axisLine, ...others } = this.props;
    const extent = ticks.reduce(
      (result, entry) => [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)],
      [Infinity, -Infinity],
    );
    const point0 = polarToCartesian(cx, cy, extent[0], angle);
    const point1 = polarToCartesian(cx, cy, extent[1], angle);

    const props = {
      ...filterProps(others),
      fill: 'none',
      ...filterProps(axisLine),
      x1: point0.x,
      y1: point0.y,
      x2: point1.x,
      y2: point1.y,
    };

    return <line className="recharts-polar-radius-axis-line" {...props} />;
  }

  static renderTickItem(option: Props['tick'], props: any, value: string | number) {
    let tickItem;

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      tickItem = option(props);
    } else {
      tickItem = (
        <Text {...props} className="recharts-polar-radius-axis-tick-value">
          {value}
        </Text>
      );
    }

    return tickItem;
  }

  renderTicks() {
    const { ticks, tick, angle, tickFormatter, stroke, ...others } = this.props;
    const textAnchor = this.getTickTextAnchor();
    const axisProps = filterProps(others);
    const customTickProps = filterProps(tick);

    const items = ticks.map((entry, i) => {
      const coord = this.getTickValueCoord(entry);
      const tickProps = {
        textAnchor,
        transform: `rotate(${90 - angle}, ${coord.x}, ${coord.y})`,
        ...axisProps,
        stroke: 'none',
        fill: stroke,
        ...customTickProps,
        index: i,
        ...coord,
        payload: entry,
      };

      return (
        <Layer
          className="recharts-polar-radius-axis-tick"
          key={`tick-${i}`} // eslint-disable-line react/no-array-index-key
          {...adaptEventsOfChild(this.props, entry, i)}
        >
          {PolarRadiusAxis.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value)}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-radius-axis-ticks">{items}</Layer>;
  }

  render() {
    const { ticks, axisLine, tick } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <Layer className="recharts-polar-radius-axis">
        {axisLine && this.renderAxisLine()}
        {tick && this.renderTicks()}
        {Label.renderCallByParent(this.props, this.getViewBox())}
      </Layer>
    );
  }
}
