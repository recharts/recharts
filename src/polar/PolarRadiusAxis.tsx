import React, { FunctionComponent, PureComponent, ReactElement } from 'react';
import maxBy from 'lodash/maxBy';
import minBy from 'lodash/minBy';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { useMaybePolarRadiusAxis } from '../context/chartLayoutContext';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { Layer } from '../container/Layer';
import { polarToCartesian, getTickClassName } from '../util/PolarUtils';
import {
  BaseAxisProps,
  TickItem,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  Coordinate,
} from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { getTicksOfAxis } from '../util/ChartUtils';

type PolarRadiusViewBox = {
  cx: number;
  cy: number;
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
};

export interface PolarRadiusAxisProps extends Omit<BaseAxisProps, 'unit'> {
  cx?: number;
  cy?: number;
  radiusAxisId?: string | number;
  angle?: number;
  orientation?: 'left' | 'right' | 'middle';
  ticks?: ReadonlyArray<TickItem>;
  reversed?: boolean;
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PolarRadiusAxisProps;

const AXIS_TYPE = 'radiusAxis';

export const PolarRadiusAxisWrapper: FunctionComponent<Props> = defaultsAndInputs => {
  const { radiusAxisId } = defaultsAndInputs;

  const axisOptions: PolarRadiusAxisProps = useMaybePolarRadiusAxis(radiusAxisId);

  const props = { ...defaultsAndInputs, ...axisOptions };
  const { tick, axisLine } = props;

  // @ts-expect-error the types are not matching here - both named `ticks` but different shape.
  const ticks = getTicksOfAxis(axisOptions, true) ?? defaultsAndInputs.ticks;

  if (!ticks || !ticks.length) {
    return null;
  }

  /**
   * Calculate the coordinate of tick
   * @param coordinate The radius of tick
   * @return (x, y)
   */
  const getTickValueCoord = ({ coordinate }: TickItem): Coordinate => {
    const { angle, cx, cy } = props;

    return polarToCartesian(cx, cy, coordinate, angle);
  };

  const getTickTextAnchor = (): string => {
    const { orientation } = props;
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
  };

  const getViewBox = (): PolarRadiusViewBox => {
    const { cx, cy, angle } = props;
    const maxRadiusTick = maxBy(ticks, (entry: TickItem) => entry.coordinate || 0);
    const minRadiusTick = minBy(ticks, (entry: TickItem) => entry.coordinate || 0);

    return {
      cx,
      cy,
      startAngle: angle,
      endAngle: angle,
      innerRadius: minRadiusTick.coordinate || 0,
      outerRadius: maxRadiusTick.coordinate || 0,
    };
  };

  const renderAxisLine = (): ReactElement => {
    const { cx, cy, angle, ...others } = props;
    const extent = ticks.reduce(
      (result, entry) => [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)],
      [Infinity, -Infinity],
    );
    const point0 = polarToCartesian(cx, cy, extent[0], angle);
    const point1 = polarToCartesian(cx, cy, extent[1], angle);

    const axisLineProps = {
      ...filterProps(others, false),
      fill: 'none',
      ...filterProps(axisLine, false),
      x1: point0.x,
      y1: point0.y,
      x2: point1.x,
      y2: point1.y,
    };

    return <line className="recharts-polar-radius-axis-line" {...axisLineProps} />;
  };

  const renderTickItem = (option: Props['tick'], tickProps: any, value: string | number): ReactElement => {
    let tickItem;

    if (React.isValidElement(option)) {
      tickItem = React.cloneElement(option, tickProps);
    } else if (isFunction(option)) {
      tickItem = option(tickProps);
    } else {
      tickItem = (
        <Text {...tickProps} className="recharts-polar-radius-axis-tick-value">
          {value}
        </Text>
      );
    }

    return tickItem;
  };

  const renderTicks = (): ReactElement => {
    const { angle, tickFormatter, stroke, ...others } = props;
    const textAnchor = getTickTextAnchor();
    const axisProps = filterProps(others, false);
    const customTickProps = filterProps(tick, false);

    const items = ticks.map((entry, i) => {
      const coord = getTickValueCoord(entry);
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
          className={clsx('recharts-polar-radius-axis-tick', getTickClassName(tick))}
          key={`tick-${entry.coordinate}`}
          {...adaptEventsOfChild(props, entry, i)}
        >
          {renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value)}
        </Layer>
      );
    });

    return <Layer className="recharts-polar-radius-axis-ticks">{items}</Layer>;
  };

  return (
    <Layer className={clsx('recharts-polar-radius-axis', AXIS_TYPE, props.className)}>
      {axisLine && renderAxisLine()}
      {tick && renderTicks()}
      {Label.renderCallByParent(props, getViewBox())}
    </Layer>
  );
};

export class PolarRadiusAxis extends PureComponent<Props> {
  static displayName = 'PolarRadiusAxis';

  static axisType = AXIS_TYPE;

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
    allowDataOverflow: false,
    scale: 'auto',
    allowDuplicatedCategory: true,
  };

  render() {
    return <PolarRadiusAxisWrapper {...this.props} />;
  }
}
