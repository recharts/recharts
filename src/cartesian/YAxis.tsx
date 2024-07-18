import React, { Component, FunctionComponent, SVGProps, useEffect } from 'react';
import clsx from 'clsx';
import { AxisInterval, AxisTick, BaseAxisProps } from '../util/types';
import { CartesianAxis } from './CartesianAxis';
import { addYAxis, removeYAxis, YAxisOrientation, YAxisSettings } from '../state/axisMapSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  selectAxisScale,
  selectTicksOfAxis,
  selectYAxisPosition,
  selectYAxisSize,
} from '../state/selectors/axisSelectors';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';

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
  const width = useAppSelector(selectChartWidth);
  const height = useAppSelector(selectChartHeight);
  const axisType = 'yAxis';
  const scaleObj = useAppSelector(state => selectAxisScale(state, axisType, yAxisId));
  const axisSize = useAppSelector(state => selectYAxisSize(state, yAxisId));
  const position = useAppSelector(state => selectYAxisPosition(state, yAxisId));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, yAxisId));

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
        width={props.width}
        orientation={props.orientation}
        mirror={props.mirror}
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
