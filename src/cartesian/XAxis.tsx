/**
 * @fileOverview X Axis
 */
import type { FunctionComponent, SVGProps } from 'react';
import React from 'react';
import clsx from 'clsx';
import { useChartHeight, useChartWidth, useXAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { BaseAxisProps, AxisInterval, AxisTick } from '../util/types';
import { getTicksOfAxis } from '../util/ChartUtils';

/** Define of XAxis props */
interface XAxisProps extends BaseAxisProps {
  /** The unique id of x-axis */
  xAxisId?: string | number;
  /** The width of axis which is usually calculated internally */
  width?: number;
  /** The height of axis, which need to be set by user */
  height?: number;
  mirror?: boolean;
  // The orientation of axis
  orientation?: 'top' | 'bottom';
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: ReadonlyArray<AxisTick>;
  padding?: { left?: number; right?: number } | 'gap' | 'no-gap';
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  /** the rotate angle of tick */
  angle?: number;
  tickMargin?: number;
}

export type Props = Omit<SVGProps<SVGElement>, 'scale'> & XAxisProps;

export const XAxis: FunctionComponent<Props> = ({ xAxisId }: Props) => {
  const width = useChartWidth();
  const height = useChartHeight();
  const axisOptions = useXAxisOrThrow(xAxisId);

  if (axisOptions == null) {
    return null;
  }

  return (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    <CartesianAxis
      {...axisOptions}
      className={clsx(`recharts-${axisOptions.axisType} ${axisOptions.axisType}`, axisOptions.className)}
      viewBox={{ x: 0, y: 0, width, height }}
      ticksGenerator={(axis: any) => getTicksOfAxis(axis, true)}
    />
  );
};

XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  padding: { left: 0, right: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true,
};
