/**
 * @fileOverview Y Axis
 */
import React from 'react';
import type { SVGProps } from 'react';
import clsx from 'clsx';
import { BaseAxisProps, AxisInterval } from '../util/types';
import { useChartHeight, useChartWidth, useYAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { getTicksOfAxis } from '../util/ChartUtils';

interface YAxisProps extends BaseAxisProps {
  /** The unique id of y-axis */
  yAxisId?: string | number;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  /** The width of axis, which need to be setted by user */
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

const YAxisImpl = ({ yAxisId }: Props) => {
  const width = useChartWidth();
  const height = useChartHeight();
  const axisOptions = useYAxisOrThrow(yAxisId);
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

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
export class YAxis extends React.Component<Props> {
  static displayName = 'YAxis';

  static defaultProps = {
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

  render() {
    return <YAxisImpl {...this.props} />;
  }
}
