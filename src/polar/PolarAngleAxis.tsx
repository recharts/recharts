import React, { FunctionComponent, PureComponent, ReactElement } from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Dot } from '../shape/Dot';
import { Polygon } from '../shape/Polygon';
import { Text } from '../component/Text';
import { BaseAxisProps, TickItem, adaptEventsOfChild, PresentationAttributesAdaptChildEvent } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { getTickClassName, polarToCartesian } from '../util/PolarUtils';
import { getTicksOfAxis } from '../util/ChartUtils';
import { useMaybePolarAngleAxis } from '../context/chartLayoutContext';

const RADIAN = Math.PI / 180;
const eps = 1e-5;

export interface PolarAngleAxisProps extends BaseAxisProps {
  angleAxisId?: string | number;
  cx?: number;
  cy?: number;
  radius?: number;
  axisLineType?: 'polygon' | 'circle';
  ticks?: TickItem[];
  orientation?: 'inner' | 'outer';
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGTextElement> & PolarAngleAxisProps;

const AXIS_TYPE = 'angleAxis';

export const PolarAngleAxisWrapper: FunctionComponent<Props> = defaultsAndInputs => {
  const { angleAxisId } = defaultsAndInputs;

  const axisOptions = useMaybePolarAngleAxis(angleAxisId);

  const props = { ...defaultsAndInputs, ...axisOptions };
  const { axisLine } = props;

  const ticks = getTicksOfAxis(axisOptions, true) ?? defaultsAndInputs.ticks;

  if (!ticks || !ticks.length) {
    return null;
  }

  /**
   * Calculate the coordinate of line endpoint
   * @param data The data if there are ticks
   * @return (x1, y1): The point close to text,
   *         (x2, y2): The point close to axis
   */
  const getTickLineCoord = (
    data: TickItem,
  ): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  } => {
    const { cx, cy, radius, orientation, tickSize } = props;
    const tickLineSize = tickSize || 8;
    const p1 = polarToCartesian(cx, cy, radius, data.coordinate);
    const p2 = polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);

    return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
  };

  /**
   * Get the text-anchor of each tick
   * @param data Data of ticks
   * @return text-anchor
   */
  const getTickTextAnchor = (data: TickItem): string => {
    const { orientation } = props;
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
  };

  const renderAxisLine = (): ReactElement => {
    const { cx, cy, radius, axisLineType } = props;
    const axisLineProps = {
      ...filterProps(props, false),
      fill: 'none',
      ...filterProps(axisLine, false),
    };

    if (axisLineType === 'circle') {
      return <Dot className="recharts-polar-angle-axis-line" {...axisLineProps} cx={cx} cy={cy} r={radius} />;
    }
    const points = ticks.map(entry => polarToCartesian(cx, cy, radius, entry.coordinate));

    return <Polygon className="recharts-polar-angle-axis-line" {...axisLineProps} points={points} />;
  };

  const renderTickItem = (
    option: PolarAngleAxisProps['tick'],
    tickProps: any,
    value: string | number,
  ): ReactElement => {
    let tickItem;

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, tickProps);
    } else if (isFunction(option)) {
      tickItem = option(props);
    } else {
      tickItem = (
        <Text {...tickProps} className="recharts-polar-angle-axis-tick-value">
          {value}
        </Text>
      );
    }

    return tickItem;
  };

  const renderTicks = () => {
    const { tick, tickLine, tickFormatter, stroke } = props;
    const axisProps = filterProps(props, false);
    const customTickProps = filterProps(tick, false);
    const tickLineProps = {
      ...axisProps,
      fill: 'none',
      ...filterProps(tickLine, false),
    };

    const items = ticks.map((entry, i) => {
      const lineCoord = getTickLineCoord(entry);
      const textAnchor = getTickTextAnchor(entry);
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
          className={clsx('recharts-polar-angle-axis-tick', getTickClassName(tick))}
          key={`tick-${entry.coordinate}`}
          {...adaptEventsOfChild(props, entry, i)}
        >
          {tickLine && <line className="recharts-polar-angle-axis-tick-line" {...tickLineProps} {...lineCoord} />}
          {tick && renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value)}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-angle-axis-ticks">{items}</Layer>;
  };

  return (
    <Layer className={clsx('recharts-polar-angle-axis', AXIS_TYPE, props.className)}>
      {axisLine && renderAxisLine()}
      {renderTicks()}
    </Layer>
  );
};

export class PolarAngleAxis extends PureComponent<Props> {
  static displayName = 'PolarAngleAxis';

  static axisType = AXIS_TYPE;

  static defaultProps = {
    type: 'category',
    angleAxisId: 0,
    scale: 'auto',
    cx: 0,
    cy: 0,
    orientation: 'outer',
    axisLine: true,
    tickLine: true,
    tickSize: 8,
    tick: true,
    hide: false,
    allowDuplicatedCategory: true,
  };

  render(): React.ReactNode {
    if (this.props.radius <= 0) return null;

    return <PolarAngleAxisWrapper {...this.props} />;
  }
}
