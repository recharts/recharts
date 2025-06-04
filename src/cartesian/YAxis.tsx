import * as React from 'react';
import { Component, FunctionComponent, useEffect, useRef, useLayoutEffect, isValidElement } from 'react';
import { clsx } from 'clsx';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent } from '../util/types';
import { CartesianAxis } from './CartesianAxis';
import {
  addYAxis,
  removeYAxis,
  YAxisOrientation,
  YAxisPadding,
  YAxisSettings,
  updateYAxisWidth,
  YAxisWidth,
} from '../state/cartesianAxisSlice';
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
import { getCalculatedYAxisWidth } from '../util/YAxisUtils';
import { isLabelContentAFunction } from '../component/Label';

interface YAxisProps extends BaseAxisProps {
  /** The unique id of y-axis */
  yAxisId?: string | number;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: ReadonlyArray<AxisTick>;
  /**
   * The width of axis, which need to be set by user.
   * When set to 'auto', the width will be calculated dynamically based on tick labels and axis labels.
   */
  width?: YAxisWidth;
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
  const { yAxisId, className, width, label } = props;

  const cartesianAxisRef = useRef(null);
  const labelRef = useRef(null);

  const viewBox = useAppSelector(selectAxisViewBox);
  const isPanorama = useIsPanorama();
  const dispatch = useAppDispatch();
  const axisType = 'yAxis';
  const scale = useAppSelector(state => selectAxisScale(state, axisType, yAxisId, isPanorama));
  const axisSize = useAppSelector(state => selectYAxisSize(state, yAxisId));
  const position = useAppSelector(state => selectYAxisPosition(state, yAxisId));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));

  useLayoutEffect(() => {
    // No dynamic width calculation is done when width !== 'auto'
    // or when a function/react element is used for label
    if (width !== 'auto' || !axisSize || isLabelContentAFunction(label) || isValidElement(label)) return;

    const axisComponent = cartesianAxisRef.current;
    const tickNodes = axisComponent?.tickRefs?.current;

    const { tickSize, tickMargin } = axisComponent.props;

    // get calculated width based on the label width, ticks etc
    const updatedYAxisWidth = getCalculatedYAxisWidth({
      ticks: tickNodes,
      label: labelRef.current,
      labelGapWithTick: 5,
      tickSize,
      tickMargin,
    });

    // if the width has changed, dispatch an action to update the width
    if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth))
      dispatch(updateYAxisWidth({ id: yAxisId, width: updatedYAxisWidth }));
  }, [
    cartesianAxisRef,
    cartesianAxisRef?.current?.tickRefs?.current, // required to do re-calculation when using brush
    axisSize?.width,
    axisSize,
    dispatch,
    label,
    yAxisId,
    width,
  ]);

  if (axisSize == null || position == null) {
    return null;
  }

  const { dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;

  return (
    <CartesianAxis
      {...allOtherProps}
      ref={cartesianAxisRef}
      labelRef={labelRef}
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
