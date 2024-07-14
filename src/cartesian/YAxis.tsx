import React, { Component, FunctionComponent, SVGProps, useEffect } from 'react';
import clsx from 'clsx';
import { AxisInterval, AxisTick, BaseAxisProps, CartesianTickItem } from '../util/types';
import { useChartHeight, useChartWidth, useYAxisOrThrow } from '../context/chartLayoutContext';
import { CartesianAxis } from './CartesianAxis';
import { AxisPropsNeededForTicksGenerator, getTicksOfAxis } from '../util/ChartUtils';
import { addYAxis, removeYAxis, YAxisSettings } from '../state/axisMapSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale, selectNiceTicks } from '../state/selectors/axisSelectors';

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

function SetYAxisSettings(settings: YAxisSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addYAxis(settings));
    return () => {
      dispatch(removeYAxis(settings));
    };
  }, [settings, dispatch]);
  return null;
}

const YAxisImpl: FunctionComponent<Props> = (props: Props) => {
  const { yAxisId, className } = props;
  const width = useChartWidth();
  const height = useChartHeight();
  const axisType = 'yAxis';
  const axisOptions = useYAxisOrThrow(yAxisId);
  const scaleObj = useAppSelector(state => selectAxisScale(state, axisType, yAxisId));
  const niceTicks = useAppSelector(state => selectNiceTicks(state, axisType, yAxisId));

  if (axisOptions == null || scaleObj == null) {
    return null;
  }

  const tickGeneratorInput: AxisPropsNeededForTicksGenerator = {
    axisType,
    categoricalDomain: axisOptions.categoricalDomain,
    duplicateDomain: axisOptions.duplicateDomain,
    isCategorical: axisOptions.isCategorical,
    range: axisOptions.range,
    realScaleType: scaleObj.realScaleType,
    niceTicks,
    scale: scaleObj.scale,
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

const YAxisSettingsDispatcher = (props: Props) => {
  return (
    <>
      <SetYAxisSettings
        id={props.yAxisId}
        scale={props.scale}
        type={props.type}
        domain={props.domain}
        allowDataOverflow={props.allowDataOverflow}
        dataKey={props.dataKey}
        allowDuplicatedCategory={props.allowDuplicatedCategory}
        allowDecimals={props.allowDecimals}
        tickCount={props.tickCount}
        padding={props.padding}
        includeHidden={props.includeHidden ?? false}
        reversed={props.reversed}
        ticks={props.ticks}
      />
      <YAxisImpl {...props} />
    </>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
export class YAxis extends Component<Props> {
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
    return <YAxisSettingsDispatcher {...this.props} />;
  }
}
