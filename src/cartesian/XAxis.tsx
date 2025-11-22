/**
 * @fileOverview X Axis
 */
import * as React from 'react';
import { ComponentType, ReactNode, useLayoutEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { CartesianAxis, defaultCartesianAxisProps } from './CartesianAxis';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  addXAxis,
  replaceXAxis,
  removeXAxis,
  XAxisOrientation,
  XAxisPadding,
  XAxisSettings,
} from '../state/cartesianAxisSlice';
import {
  implicitXAxis,
  selectAxisScale,
  selectTicksOfAxis,
  selectXAxisPosition,
  selectXAxisSettingsNoDefaults,
  selectXAxisSize,
} from '../state/selectors/axisSelectors';
import { selectAxisViewBox } from '../state/selectors/selectChartOffsetInternal';
import { useIsPanorama } from '../context/PanoramaContext';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { axisPropsAreEqual } from '../util/axisPropsAreEqual';

interface XAxisProps extends BaseAxisProps {
  /**
   * The unique id of x-axis.
   *
   * @defaultValue 0
   */
  xAxisId?: string | number;
  /**
   * The height of axis in pixels
   *
   * @defaultValue 30
   */
  height?: number;
  /**
   * @defaultValue false
   */
  mirror?: boolean;
  /**
   * @defaultValue bottom
   */
  orientation?: XAxisOrientation;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: ReadonlyArray<AxisTick>;
  /**
   * @defaultValue {"left":0,"right":0}
   */
  padding?: XAxisPadding;
  /**
   * The minimum gap between two adjacent tick labels
   *
   * @defaultValue 5
   */
  minTickGap?: number;
  /**
   * @defaultValue preserveEnd
   */
  interval?: AxisInterval;
  /**
   * @defaultValue false
   */
  reversed?: boolean;
  /**
   * The rotate angle of tick
   *
   * @defaultValue 0
   */
  angle?: number;
  tickMargin?: number;
}

export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & XAxisProps;

function SetXAxisSettings(settings: XAxisSettings): ReactNode {
  const dispatch = useAppDispatch();
  const prevSettingsRef = useRef<XAxisSettings | null>(null);

  useLayoutEffect(() => {
    if (prevSettingsRef.current === null) {
      dispatch(addXAxis(settings));
    } else if (prevSettingsRef.current !== settings) {
      dispatch(replaceXAxis({ prev: prevSettingsRef.current, next: settings }));
    }
    prevSettingsRef.current = settings;
  }, [settings, dispatch]);

  useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeXAxis(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}

const XAxisImpl = (props: PropsWithDefaults) => {
  const { xAxisId, className } = props;
  const viewBox = useAppSelector(selectAxisViewBox);
  const isPanorama = useIsPanorama();
  const axisType = 'xAxis';
  const scale = useAppSelector(state => selectAxisScale(state, axisType, xAxisId, isPanorama));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
  const axisSize = useAppSelector(state => selectXAxisSize(state, xAxisId));
  const position = useAppSelector(state => selectXAxisPosition(state, xAxisId));
  /*
   * Here we select settings from the store and prefer to use them instead of the actual props
   * so that the chart is consistent. If we used the props directly, some components will use axis settings
   * from state and some from props and because there is a render step between these two, they might be showing different things.
   * https://github.com/recharts/recharts/issues/6257
   */
  const synchronizedSettings = useAppSelector(state => selectXAxisSettingsNoDefaults(state, xAxisId));

  if (axisSize == null || position == null || synchronizedSettings == null) {
    return null;
  }

  const { dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;
  const { id, ...restSynchronizedSettings } = synchronizedSettings;

  return (
    <CartesianAxis
      {...allOtherProps}
      {...restSynchronizedSettings}
      scale={scale}
      x={position.x}
      y={position.y}
      width={axisSize.width}
      height={axisSize.height}
      className={clsx(`recharts-${axisType} ${axisType}`, className)}
      viewBox={viewBox}
      ticks={cartesianTickItems}
      axisType={axisType}
    />
  );
};

export const xAxisDefaultProps = {
  allowDataOverflow: implicitXAxis.allowDataOverflow,
  allowDecimals: implicitXAxis.allowDecimals,
  allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
  angle: implicitXAxis.angle,
  axisLine: defaultCartesianAxisProps.axisLine,
  height: implicitXAxis.height,
  hide: false,
  includeHidden: implicitXAxis.includeHidden,
  interval: implicitXAxis.interval,
  minTickGap: implicitXAxis.minTickGap,
  mirror: implicitXAxis.mirror,
  orientation: implicitXAxis.orientation,
  padding: implicitXAxis.padding,
  reversed: implicitXAxis.reversed,
  scale: implicitXAxis.scale,
  tick: implicitXAxis.tick,
  tickCount: implicitXAxis.tickCount,
  tickLine: defaultCartesianAxisProps.tickLine,
  tickSize: defaultCartesianAxisProps.tickSize,
  type: implicitXAxis.type,
  xAxisId: 0,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof xAxisDefaultProps>;

const XAxisSettingsDispatcher = (outsideProps: Props) => {
  const props: PropsWithDefaults = resolveDefaultProps(outsideProps, xAxisDefaultProps);
  return (
    <>
      <SetXAxisSettings
        allowDataOverflow={props.allowDataOverflow}
        allowDecimals={props.allowDecimals}
        allowDuplicatedCategory={props.allowDuplicatedCategory}
        angle={props.angle}
        dataKey={props.dataKey}
        domain={props.domain}
        height={props.height}
        hide={props.hide}
        id={props.xAxisId}
        includeHidden={props.includeHidden}
        interval={props.interval}
        minTickGap={props.minTickGap}
        mirror={props.mirror}
        name={props.name}
        orientation={props.orientation}
        padding={props.padding}
        reversed={props.reversed}
        scale={props.scale}
        tick={props.tick}
        tickCount={props.tickCount}
        tickFormatter={props.tickFormatter}
        ticks={props.ticks}
        type={props.type}
        unit={props.unit}
      />
      <XAxisImpl {...props} />
    </>
  );
};

export const XAxis: ComponentType<Props> = React.memo(XAxisSettingsDispatcher, axisPropsAreEqual);

XAxis.displayName = 'XAxis';
