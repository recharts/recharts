/**
 * @fileOverview X Axis
 */
import type { SVGProps } from 'react';
import React, { Component, useEffect } from 'react';
import clsx from 'clsx';
import { useChartHeight, useChartWidth, useXAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { BaseAxisProps, AxisInterval, AxisTick } from '../util/types';
import { AxisPropsNeededForTicksGenerator, getTicksOfAxis } from '../util/ChartUtils';
import { useAppDispatch } from '../state/hooks';
import { XAxisSettings, addXAxis } from '../state/axisMapSlice';

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

function SetXAxisSettings({ xAxisId }: Props): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const settings: XAxisSettings = {
      id: xAxisId,
    };
    dispatch(addXAxis(settings));
    // TODO the cleanup function is causing trouble with Redux dev extension. Figure out what it is and fix it.
    // While it's commented, switching axes is not working
    // return () => {
    // console.log('dispatch removeXAxis', settings);
    // dispatch(removeXAxis(settings));
    // };
  }, [xAxisId, dispatch]);
  return null;
}

const XAxisImpl = (props: Props) => {
  const { xAxisId, className } = props;
  const width = useChartWidth();
  const height = useChartHeight();
  const axisOptions = useXAxisOrThrow(xAxisId);
  const axisType = 'xAxis';

  if (axisOptions == null) {
    return null;
  }

  return (
    // @ts-expect-error ref type does not match
    <CartesianAxis
      {...axisOptions}
      className={clsx(`recharts-${axisType} ${axisType}`, className)}
      viewBox={{ x: 0, y: 0, width, height }}
      ticksGenerator={(axis: AxisPropsNeededForTicksGenerator) => getTicksOfAxis(axis, true)}
    />
  );
};

const XAxisSettingsDispatcher = (props: Props) => {
  return (
    <>
      <SetXAxisSettings xAxisId={props.xAxisId} />
      <XAxisImpl {...props} />
    </>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
export class XAxis extends Component<Props> {
  static displayName = 'XAxis';

  static defaultProps = {
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

  render() {
    return <XAxisSettingsDispatcher {...this.props} />;
  }
}
