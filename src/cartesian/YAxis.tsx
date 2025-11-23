import * as React from 'react';
import { ComponentType, FunctionComponent, isValidElement, useLayoutEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { AxisInterval, AxisTick, BaseAxisProps, PresentationAttributesAdaptChildEvent, Size } from '../util/types';
import { CartesianAxis, CartesianAxisRef, defaultCartesianAxisProps } from './CartesianAxis';
import {
  addYAxis,
  replaceYAxis,
  removeYAxis,
  updateYAxisWidth,
  YAxisOrientation,
  YAxisPadding,
  YAxisSettings,
  YAxisWidth,
} from '../state/cartesianAxisSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  implicitYAxis,
  selectAxisScale,
  selectTicksOfAxis,
  selectYAxisPosition,
  selectYAxisSettingsNoDefaults,
  selectYAxisSize,
} from '../state/selectors/axisSelectors';
import { selectAxisViewBox } from '../state/selectors/selectChartOffsetInternal';
import { useIsPanorama } from '../context/PanoramaContext';
import { isLabelContentAFunction } from '../component/Label';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { axisPropsAreEqual } from '../util/axisPropsAreEqual';

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
  /**
   * @defaultValue false
   */
  mirror?: boolean;
  /**
   * @defaultValue left
   */
  orientation?: YAxisOrientation;
  /**
   * @defaultValue {"top":0,"bottom":0}
   */
  padding?: YAxisPadding;
  /**
   * The minimum gap between two adjacent tick labels
   *
   * @defaultValue 5
   */
  minTickGap?: number;
  /**
   * If set 0, all the ticks will be shown. If set "preserveStart", "preserveEnd" or "preserveStartEnd",
   * the ticks which is to be shown or hidden will be calculated automatically.
   *
   * @defaultValue preserveEnd
   */
  interval?: AxisInterval;
  /**
   * @defaultValue false
   */
  reversed?: boolean;
  tickMargin?: number;
  /**
   * The rotate angle of tick
   *
   * @defaultValue 0
   */
  angle?: number;
}

export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'scale' | 'ref'> & YAxisProps;

function SetYAxisSettings(settings: YAxisSettings): null {
  const dispatch = useAppDispatch();
  const prevSettingsRef = useRef<YAxisSettings | null>(null);

  useLayoutEffect(() => {
    if (prevSettingsRef.current === null) {
      dispatch(addYAxis(settings));
    } else if (prevSettingsRef.current !== settings) {
      dispatch(replaceYAxis({ prev: prevSettingsRef.current, next: settings }));
    }
    prevSettingsRef.current = settings;
  }, [settings, dispatch]);

  useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeYAxis(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}

const YAxisImpl: FunctionComponent<Props> = (props: PropsWithDefaults) => {
  const { yAxisId, className, width, label } = props;

  const cartesianAxisRef = useRef<CartesianAxisRef>(null);
  const labelRef = useRef(null);

  const viewBox = useAppSelector(selectAxisViewBox);
  const isPanorama = useIsPanorama();
  const dispatch = useAppDispatch();
  const axisType = 'yAxis';
  const scale = useAppSelector(state => selectAxisScale(state, axisType, yAxisId, isPanorama));
  const axisSize: Size | undefined = useAppSelector(state => selectYAxisSize(state, yAxisId));
  const position = useAppSelector(state => selectYAxisPosition(state, yAxisId));
  const cartesianTickItems = useAppSelector(state => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));
  /*
   * Here we select settings from the store and prefer to use them instead of the actual props
   * so that the chart is consistent. If we used the props directly, some components will use axis settings
   * from state and some from props and because there is a render step between these two, they might be showing different things.
   * https://github.com/recharts/recharts/issues/6257
   */
  const synchronizedSettings = useAppSelector(state => selectYAxisSettingsNoDefaults(state, yAxisId));

  useLayoutEffect(() => {
    // No dynamic width calculation is done when width !== 'auto'
    // or when a function/react element is used for label
    if (
      width !== 'auto' ||
      !axisSize ||
      isLabelContentAFunction(label) ||
      isValidElement(label) ||
      synchronizedSettings == null
    ) {
      return;
    }

    const axisComponent = cartesianAxisRef.current;
    if (!axisComponent) {
      return;
    }

    const updatedYAxisWidth = axisComponent.getCalculatedWidth();

    // if the width has changed, dispatch an action to update the width
    if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth)) {
      dispatch(updateYAxisWidth({ id: yAxisId, width: updatedYAxisWidth }));
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    cartesianTickItems,
    axisSize,
    dispatch,
    label,
    yAxisId,
    width,
    synchronizedSettings,
  ]);

  if (axisSize == null || position == null || synchronizedSettings == null) {
    return null;
  }

  const { dangerouslySetInnerHTML, ticks, ...allOtherProps } = props;
  const { id, ...restSynchronizedSettings } = synchronizedSettings;

  return (
    <CartesianAxis
      {...allOtherProps}
      {...restSynchronizedSettings}
      ref={cartesianAxisRef}
      labelRef={labelRef}
      scale={scale}
      x={position.x}
      y={position.y}
      tickTextProps={width === 'auto' ? { width: undefined } : { width }}
      width={axisSize.width}
      height={axisSize.height}
      className={clsx(`recharts-${axisType} ${axisType}`, className)}
      viewBox={viewBox}
      ticks={cartesianTickItems}
      axisType={axisType}
    />
  );
};

export const yAxisDefaultProps = {
  allowDataOverflow: implicitYAxis.allowDataOverflow,
  allowDecimals: implicitYAxis.allowDecimals,
  allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
  angle: implicitYAxis.angle,
  axisLine: defaultCartesianAxisProps.axisLine,
  hide: false,
  includeHidden: implicitYAxis.includeHidden,
  interval: implicitYAxis.interval,
  minTickGap: implicitYAxis.minTickGap,
  mirror: implicitYAxis.mirror,
  orientation: implicitYAxis.orientation,
  padding: implicitYAxis.padding,
  reversed: implicitYAxis.reversed,
  scale: implicitYAxis.scale,
  tick: implicitYAxis.tick,
  tickCount: implicitYAxis.tickCount,
  tickLine: defaultCartesianAxisProps.tickLine,
  tickSize: defaultCartesianAxisProps.tickSize,
  type: implicitYAxis.type,
  width: implicitYAxis.width,
  yAxisId: 0,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof yAxisDefaultProps>;

const YAxisSettingsDispatcher = (outsideProps: Props) => {
  const props: PropsWithDefaults = resolveDefaultProps(outsideProps, yAxisDefaultProps);
  return (
    <>
      <SetYAxisSettings
        interval={props.interval}
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
        includeHidden={props.includeHidden}
        reversed={props.reversed}
        ticks={props.ticks}
        width={props.width}
        orientation={props.orientation}
        mirror={props.mirror}
        hide={props.hide}
        unit={props.unit}
        name={props.name}
        angle={props.angle}
        minTickGap={props.minTickGap}
        tick={props.tick}
        tickFormatter={props.tickFormatter}
      />
      <YAxisImpl {...props} />
    </>
  );
};

export const YAxis: ComponentType<Props> = React.memo(YAxisSettingsDispatcher, axisPropsAreEqual);

YAxis.displayName = 'YAxis';
