import * as React from 'react';
import { FunctionComponent, PureComponent, ReactElement, useEffect } from 'react';
import maxBy from 'es-toolkit/compat/maxBy';
import minBy from 'es-toolkit/compat/minBy';

import { clsx } from 'clsx';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { Layer } from '../container/Layer';
import { getTickClassName, polarToCartesian } from '../util/PolarUtils';
import {
  adaptEventsOfChild,
  BaseAxisProps,
  Coordinate,
  PresentationAttributesAdaptChildEvent,
  TickItem,
} from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { addRadiusAxis, RadiusAxisSettings, removeRadiusAxis } from '../state/polarAxisSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectPolarAxisScale, selectPolarAxisTicks } from '../state/selectors/polarScaleSelectors';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';
import { defaultPolarRadiusAxisProps } from './defaultPolarRadiusAxisProps';

type PolarRadiusViewBox = {
  cx: number;
  cy: number;
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
};

type TickOrientation = 'left' | 'right' | 'middle';

export interface PolarRadiusAxisProps extends Omit<BaseAxisProps, 'unit'> {
  cx?: number;
  cy?: number;
  radiusAxisId?: string | number;
  angle?: number;
  orientation?: TickOrientation;
  ticks?: ReadonlyArray<TickItem>;
  reversed?: boolean;
}

type AxisSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGTextElement>, 'scale' | 'type'>;

export type Props = AxisSvgProps & PolarRadiusAxisProps;

const AXIS_TYPE = 'radiusAxis';

function SetRadiusAxisSettings(settings: RadiusAxisSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addRadiusAxis(settings));
    return () => {
      dispatch(removeRadiusAxis(settings));
    };
  });
  return null;
}

/**
 * Calculate the coordinate of tick
 * @param coordinate The radius of tick
 * @param angle from props
 * @param cx from chart
 * @param cy from chart
 * @return (x, y)
 */
const getTickValueCoord = ({ coordinate }: TickItem, angle: number, cx: number, cy: number): Coordinate => {
  return polarToCartesian(cx, cy, coordinate, angle);
};

const getTickTextAnchor = (orientation: TickOrientation): string => {
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

const getViewBox = (angle: number, cx: number, cy: number, ticks: ReadonlyArray<TickItem>): PolarRadiusViewBox => {
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

const renderAxisLine = (props: Props, ticks: ReadonlyArray<TickItem>): ReactElement => {
  const { cx, cy, angle, axisLine, ...others } = props;
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
  } else if (typeof option === 'function') {
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

const renderTicks = (props: Props, ticks: ReadonlyArray<TickItem>): ReactElement => {
  const { angle, tickFormatter, stroke, tick, ...others } = props;
  const textAnchor = getTickTextAnchor(props.orientation);
  const axisProps = filterProps(others, false);
  const customTickProps = filterProps(tick, false);

  const items = ticks.map((entry, i) => {
    const coord = getTickValueCoord(entry, props.angle, props.cx, props.cy);
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

export const PolarRadiusAxisWrapper: FunctionComponent<Props> = (defaultsAndInputs: Props) => {
  const { radiusAxisId } = defaultsAndInputs;

  const viewBox = useAppSelector(selectPolarViewBox);
  const scale = useAppSelector(state => selectPolarAxisScale(state, 'radiusAxis', radiusAxisId));
  const ticks = useAppSelector(state => selectPolarAxisTicks(state, 'radiusAxis', radiusAxisId, false));

  if (viewBox == null || !ticks || !ticks.length) {
    return null;
  }

  const props: Props = {
    ...defaultsAndInputs,
    scale,
    ...viewBox,
    radius: viewBox.outerRadius,
  };

  const { tick, axisLine } = props;

  return (
    <Layer className={clsx('recharts-polar-radius-axis', AXIS_TYPE, props.className)}>
      {axisLine && renderAxisLine(props, ticks)}
      {tick && renderTicks(props, ticks)}
      {Label.renderCallByParent(props, getViewBox(props.angle, props.cx, props.cy, ticks))}
    </Layer>
  );
};

export class PolarRadiusAxis extends PureComponent<Props> {
  static displayName = 'PolarRadiusAxis';

  static axisType = AXIS_TYPE;

  static defaultProps = defaultPolarRadiusAxisProps;

  render() {
    return (
      <>
        <SetRadiusAxisSettings
          domain={this.props.domain}
          id={this.props.radiusAxisId}
          scale={this.props.scale}
          type={this.props.type}
          dataKey={this.props.dataKey}
          unit={undefined}
          name={this.props.name}
          allowDuplicatedCategory={this.props.allowDuplicatedCategory}
          allowDataOverflow={this.props.allowDataOverflow}
          reversed={this.props.reversed}
          includeHidden={this.props.includeHidden}
          allowDecimals={this.props.allowDecimals}
          tickCount={this.props.tickCount}
          // @ts-expect-error the type does not match. Is RadiusAxis really expecting what it says?
          ticks={this.props.ticks}
          tick={this.props.tick}
        />
        <PolarRadiusAxisWrapper {...this.props} />
      </>
    );
  }
}
