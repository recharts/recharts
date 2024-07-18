/**
 * @fileOverview X Axis
 */
import type { SVGProps } from 'react';
import React, { Component, useEffect } from 'react';
import clsx from 'clsx';
import { CartesianAxis } from './CartesianAxis';
import { AxisInterval, AxisTick, BaseAxisProps } from '../util/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { addXAxis, removeXAxis, XAxisOrientation, XAxisPadding, XAxisSettings } from '../state/axisMapSlice';
import {
  selectAxisScale,
  selectTicksOfAxis,
  selectXAxisPosition,
  selectXAxisSize,
} from '../state/selectors/axisSelectors';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';

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

export type Props = Omit<SVGProps<SVGLineElement>, 'scale'> & XAxisProps;

function SetXAxisSettings(settings: XAxisSettings): null {
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
  const width = useAppSelector(selectChartWidth);
  const height = useAppSelector(selectChartHeight);
  const axisType = 'xAxis';
  const scaleObj = useAppSelector(state => selectAxisScale(state, axisType, xAxisId));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, xAxisId));
  const axisSize = useAppSelector(state => selectXAxisSize(state, xAxisId));
  const position = useAppSelector(state => selectXAxisPosition(state, xAxisId));

  if (axisSize == null || position == null || scaleObj == null) {
    return null;
  }

  const { ref, dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;

  return (
    <CartesianAxis
      {...allOtherProps}
      scale={scaleObj.scale}
      x={position.x}
      y={position.y}
      width={axisSize.width}
      height={axisSize.height}
      className={clsx(`recharts-${axisType} ${axisType}`, className)}
      viewBox={{ x: 0, y: 0, width, height }}
      ticks={cartesianTickItems}
    />
  );
};

const XAxisSettingsDispatcher = (props: Props) => {
  return (
    <>
      <SetXAxisSettings
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
      />
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
