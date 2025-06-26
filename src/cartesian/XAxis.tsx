/**
 * @fileOverview X Axis
 */
import * as React from 'react';
import { Component, ReactNode, useEffect, useMemo } from 'react';
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
  selectXAxisSettings,
  selectXAxisSize,
} from '../state/selectors/axisSelectors';
import { selectAxisViewBox } from '../state/selectors/selectChartOffset';
import { useIsPanorama } from '../context/PanoramaContext';

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

type SetXAxisSettingsProps = XAxisSettings & { children: ReactNode };

function SetXAxisSettings(props: SetXAxisSettingsProps): ReactNode {
  const dispatch = useAppDispatch();
  const settings = useMemo(() => {
    const { children, ...rest } = props;
    return rest;
  }, [props]);
  const synchronizedSettings = useAppSelector(state => selectXAxisSettings(state, settings.id));
  const settingsAreSynchronized = settings === synchronizedSettings;

  useEffect(() => {
    dispatch(addXAxis(settings));
    return () => {
      dispatch(removeXAxis(settings));
    };
  }, [settings, dispatch]);

  if (settingsAreSynchronized) {
    return props.children;
  }
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

  if (axisSize == null || position == null) {
    return null;
  }

  const { dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;

  return (
    <CartesianAxis
      {...allOtherProps}
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

const XAxisSettingsDispatcher = (props: Props) => {
  return (
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
    >
      <XAxisImpl {...props} />
    </SetXAxisSettings>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
export class XAxis extends Component<Props> {
  static displayName = 'XAxis';

  static defaultProps = {
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

  render() {
    return <XAxisSettingsDispatcher {...this.props} />;
  }
}
