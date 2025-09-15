/**
 * @fileOverview X Axis
 */
import * as React from 'react';
import { ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';
import { CartesianAxis } from './CartesianAxis';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { addXAxis, removeXAxis, XAxisOrientation, XAxisPadding, XAxisSettings } from '../state/cartesianAxisSlice';
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
import { shallowEqual } from '../util/ShallowEqual';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

interface XAxisProps extends BaseAxisProps {
  /** The unique id of x-axis */
  xAxisId?: string | number;
  /** The height of axis, which need to be set by user */
  height?: number;
  mirror?: boolean;
  orientation?: XAxisOrientation;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: ReadonlyArray<AxisTick>;
  padding?: XAxisPadding;
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  /** the rotate angle of tick */
  angle?: number;
  tickMargin?: number;
}

export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & XAxisProps;

function SetXAxisSettings(settings: XAxisSettings): ReactNode {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addXAxis(settings));
    return () => {
      dispatch(removeXAxis(settings));
    };
  }, [settings, dispatch]);
  return null;
}

const XAxisImpl = (props: Props) => {
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
    />
  );
};

const xAxisDefaultProps = {
  allowDataOverflow: implicitXAxis.allowDataOverflow,
  allowDecimals: implicitXAxis.allowDecimals,
  allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
  height: implicitXAxis.height,
  hide: false,
  mirror: implicitXAxis.mirror,
  orientation: implicitXAxis.orientation,
  padding: implicitXAxis.padding,
  reversed: implicitXAxis.reversed,
  scale: implicitXAxis.scale,
  tickCount: implicitXAxis.tickCount,
  type: implicitXAxis.type,
  xAxisId: 0,
};

const XAxisSettingsDispatcher = (outsideProps: Props) => {
  const props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
  return (
    <>
      <SetXAxisSettings
        interval={props.interval ?? 'preserveEnd'}
        id={props.xAxisId}
        scale={props.scale}
        type={props.type}
        padding={props.padding}
        allowDataOverflow={props.allowDataOverflow}
        domain={props.domain}
        dataKey={props.dataKey}
        allowDuplicatedCategory={props.allowDuplicatedCategory}
        allowDecimals={props.allowDecimals}
        tickCount={props.tickCount}
        includeHidden={props.includeHidden ?? false}
        reversed={props.reversed}
        ticks={props.ticks}
        height={props.height}
        orientation={props.orientation}
        mirror={props.mirror}
        hide={props.hide}
        unit={props.unit}
        name={props.name}
        angle={props.angle ?? 0}
        minTickGap={props.minTickGap ?? 5}
        tick={props.tick ?? true}
        tickFormatter={props.tickFormatter}
      />
      <XAxisImpl {...props} />
    </>
  );
};

const XAxisMemoComparator = (prevProps: Readonly<Props>, nextProps: Readonly<Props>): boolean => {
  const { domain: prevDomain, ...prevRest } = prevProps;
  const { domain: nextDomain, ...nextRest } = nextProps;

  if (!shallowEqual(prevRest, nextRest)) {
    return false;
  }

  if (Array.isArray(prevDomain) && prevDomain.length === 2 && Array.isArray(nextDomain) && nextDomain.length === 2) {
    return prevDomain[0] === nextDomain[0] && prevDomain[1] === nextDomain[1];
  }

  return shallowEqual({ domain: prevDomain }, { domain: nextDomain });
};

export const XAxis = React.memo(XAxisSettingsDispatcher, XAxisMemoComparator);

XAxis.displayName = 'XAxis';
