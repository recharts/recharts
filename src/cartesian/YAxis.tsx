import * as React from 'react';
import { Component, FunctionComponent, useEffect } from 'react';
import { clsx } from 'clsx';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { CartesianAxis } from './CartesianAxis';
import { addYAxis, removeYAxis, YAxisOrientation, YAxisPadding, YAxisSettings } from '../state/cartesianAxisSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  implicitYAxis,
  selectAxisScale,
  selectTicksOfAxis,
  selectYAxisPosition,
  selectYAxisSize,
} from '../state/selectors/axisSelectors';
import { selectAxisViewBox } from '../state/selectors/selectChartOffset';
import { useIsPanorama } from '../context/PanoramaContext';

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
  mirror?: boolean;
  orientation?: YAxisOrientation;
  padding?: YAxisPadding;
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  tickMargin?: number;
  /** the rotate angle of tick */
  angle?: number;
}

export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & YAxisProps;

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
  const viewBox = useAppSelector(selectAxisViewBox);
  const isPanorama = useIsPanorama();
  const axisType = 'yAxis';
  const scale = useAppSelector(state => selectAxisScale(state, axisType, yAxisId, isPanorama));
  const axisSize = useAppSelector(state => selectYAxisSize(state, yAxisId));
  const position = useAppSelector(state => selectYAxisPosition(state, yAxisId));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));

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

const YAxisSettingsDispatcher = (props: Props) => {
  return (
    <>
      <SetYAxisSettings
        interval={props.interval ?? 'preserveEnd'}
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
        width={props.width}
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
      <YAxisImpl {...props} />
    </>
  );
};

export const YAxisDefaultProps: Partial<Props> = {
  allowDataOverflow: implicitYAxis.allowDataOverflow,
  allowDecimals: implicitYAxis.allowDecimals,
  allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
  hide: false,
  mirror: implicitYAxis.mirror,
  orientation: implicitYAxis.orientation,
  padding: implicitYAxis.padding,
  reversed: implicitYAxis.reversed,
  scale: implicitYAxis.scale,
  tickCount: implicitYAxis.tickCount,
  type: implicitYAxis.type,
  width: implicitYAxis.width,
  yAxisId: 0,
};

// eslint-disable-next-line react/prefer-stateless-function
export class YAxis extends Component<Props> {
  static displayName = 'YAxis';

  static defaultProps = YAxisDefaultProps;

  render() {
    return <YAxisSettingsDispatcher {...this.props} />;
  }
}
