/**
 * @fileOverview Y Axis
 */
import React from 'react';
import type { FunctionComponent, SVGProps } from 'react';
import clsx from 'clsx';
import { BaseAxisProps, AxisInterval, AxisTick, CartesianTickItem } from '../util/types';
import { useChartHeight, useChartWidth, useYAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { AxisPropsNeededForTicksGenerator, getTicksOfAxis } from '../util/ChartUtils';

interface YAxisProps extends BaseAxisProps {
  /** The unique id of y-axis */
  yAxisId?: string | number;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: ReadonlyArray<AxisTick>;
  /** The width of axis, which need to be set by user */
  width?: number;
  /** The height of axis which is usually calculated in Chart */
  height?: number;
  mirror?: boolean;
  /** The orientation of axis */
  orientation?: 'left' | 'right';
  padding?: {
    top?: number;
    bottom?: number;
  };
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  tickMargin?: number;
}

export type Props = Omit<SVGProps<SVGElement>, 'scale'> & YAxisProps;

export const YAxis: FunctionComponent<Props> = (props: Props) => {
  const { yAxisId, className } = props;
  const width = useChartWidth();
  const height = useChartHeight();
  const axisType = 'yAxis';

  const axisOptions = useYAxisOrThrow(yAxisId);
  if (axisOptions == null) {
    return null;
  }

  const tickGeneratorInput: AxisPropsNeededForTicksGenerator = {
    axisType,
    categoricalDomain: axisOptions.categoricalDomain,
    duplicateDomain: axisOptions.duplicateDomain,
    isCategorical: axisOptions.isCategorical,
    niceTicks: axisOptions.niceTicks,
    range: axisOptions.range,
    realScaleType: axisOptions.realScaleType,
    scale: axisOptions.scale,
    tickCount: props.tickCount,
    ticks: props.ticks,
    type: props.type,
  };
  const cartesianTickItems: ReadonlyArray<CartesianTickItem> = getTicksOfAxis(tickGeneratorInput, true);

  const { ref, dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;

  return (
    <CartesianAxis
      {...allOtherProps}
      scale={axisOptions.scale}
      x={axisOptions.x}
      y={axisOptions.y}
      width={axisOptions.width}
      height={axisOptions.height}
      className={clsx(`recharts-${axisType} ${axisType}`, className)}
      viewBox={{ x: 0, y: 0, width, height }}
      cartesianTickItems={cartesianTickItems}
    />
  );
};

YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
};
