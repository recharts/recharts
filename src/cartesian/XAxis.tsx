/**
 * @fileOverview X Axis
 */
import type { SVGProps } from 'react';
import React, { Component, useEffect } from 'react';
import clsx from 'clsx';
import { useChartHeight, useChartWidth, useXAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { AxisInterval, AxisTick, BaseAxisProps, CartesianTickItem } from '../util/types';
import { AxisPropsNeededForTicksGenerator, getTicksOfAxis } from '../util/ChartUtils';
import { useAppDispatch } from '../state/hooks';
import { addXAxis, XAxisSettings } from '../state/axisMapSlice';
import { XAxisWithExtraData } from '../chart/types';

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

export type Props = Omit<SVGProps<SVGLineElement>, 'scale'> & XAxisProps;

function SetXAxisSettings({ id, scale, type }: XAxisSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const settings: XAxisSettings = {
      scale,
      type,
      id,
    };
    dispatch(addXAxis(settings));
    // TODO the cleanup function is causing trouble with Redux dev extension. Figure out what it is and fix it.
    // While it's commented, switching axes is not working
    // return () => {
    // console.log('dispatch removeXAxis', settings);
    // dispatch(removeXAxis(settings));
    // };
  }, [id, scale, type, dispatch]);
  return null;
}

const XAxisImpl = (props: Props) => {
  const { xAxisId, className } = props;
  const width = useChartWidth();
  const height = useChartHeight();
  const axisOptions: XAxisWithExtraData = useXAxisOrThrow(xAxisId);
  const axisType = 'xAxis';

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
      ticks={cartesianTickItems}
    />
  );
};

const XAxisSettingsDispatcher = (props: Props) => {
  return (
    <>
      <SetXAxisSettings id={props.xAxisId} scale={props.scale} type={props.type} />
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
