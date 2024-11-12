import React, { CSSProperties, PureComponent, ReactElement, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  DefaultTooltipContent,
  NameType,
  Payload,
  Props as DefaultTooltipContentProps,
  ValueType,
} from './DefaultTooltipContent';
import { TooltipBoundingBox } from './TooltipBoundingBox';

import { Global } from '../util/Global';
import { getUniqPayload, UniqueOption } from '../util/payload/getUniqPayload';
import { AllowInDimension, AnimationDuration, AnimationTiming, Coordinate } from '../util/types';
import { useViewBox } from '../context/chartLayoutContext';
import { TooltipContextValue, useTooltipContext } from '../context/tooltipContext';
import { useAccessibilityLayer } from '../context/accessibilityContext';
import { useGetBoundingClientRect } from '../util/useGetBoundingClientRect';
import { Cursor, CursorDefinition } from './Cursor';
import {
  selectActiveLabel,
  selectIsTooltipActive,
  selectActiveCoordinate,
  selectTooltipPayload,
  useTooltipEventType,
} from '../state/selectors/selectors';
import { useCursorPortal, useTooltipPortal } from '../context/tooltipPortalContext';
import { TooltipTrigger } from '../chart/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setTooltipSettingsState, TooltipPayload } from '../state/tooltipSlice';
import { AxisId } from '../state/cartesianAxisSlice';

export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipContentProps<TValue, TName>) => ReactNode);

function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}

type TooltipContentProps<TValue extends ValueType, TName extends NameType> = TooltipProps<TValue, TName> &
  Pick<TooltipContextValue, 'label' | 'payload' | 'coordinate' | 'active'> & { accessibilityLayer: boolean };

function renderContent<TValue extends ValueType, TName extends NameType>(
  content: ContentType<TValue, TName>,
  props: TooltipContentProps<TValue, TName>,
): ReactNode {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return React.createElement(content as any, props);
  }

  return <DefaultTooltipContent {...props} />;
}

type PropertiesReadFromContext = 'viewBox' | 'active' | 'payload' | 'coordinate' | 'label' | 'accessibilityLayer';

export type TooltipProps<TValue extends ValueType, TName extends NameType> = Omit<
  DefaultTooltipContentProps<TValue, TName>,
  PropertiesReadFromContext
> & {
  /**
   * If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
   * If false, then Tooltip is never displayed.
   * If active is undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls.
   */
  active?: boolean;
  /**
   * If true, then Tooltip will information about hidden series (defaults to false). Interacting with the hide property of Area, Bar, Line, Scatter.
   */
  includeHidden?: boolean | undefined;
  allowEscapeViewBox?: AllowInDimension;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  content?: ContentType<TValue, TName>;
  cursor?: CursorDefinition;
  filterNull?: boolean;
  defaultIndex?: number;
  isAnimationActive?: boolean;
  offset?: number;
  payloadUniqBy?: UniqueOption<Payload<TValue, TName>>;
  /**
   * If portal is defined, then Tooltip will use this element as a target
   * for rendering using React Portal: https://react.dev/reference/react-dom/createPortal
   *
   * If this is undefined then Tooltip renders inside the recharts-wrapper element.
   */
  portal?: HTMLElement | null;
  position?: Partial<Coordinate>;
  reverseDirection?: AllowInDimension;
  /**
   * If true, tooltip will appear on top of all bars on an axis tick.
   * If false, tooltip will appear on individual bars.
   * Currently only supported in BarChart and RadialBarChart.
   * If undefined then defaults to true.
   */
  shared?: boolean;
  trigger?: TooltipTrigger;
  useTranslate3d?: boolean;
  wrapperStyle?: CSSProperties;
  /**
   * Tooltip always attaches itself to the "Tooltip" axis. Which axis is it? Depends on the layout:
   * - horizontal layout -> X axis
   * - vertical layout -> Y axis
   * - radial layout -> radial axis
   * - centric layout -> angle axis
   *
   * Tooltip will use the default axis for the layout, unless you specify an axisId.
   */
  axisId?: AxisId;
};

const emptyPayload: TooltipPayload = [];

function TooltipInternal<TValue extends ValueType, TName extends NameType>(props: TooltipProps<TValue, TName>) {
  const {
    active: activeFromProps,
    allowEscapeViewBox,
    animationDuration,
    animationEasing,
    content,
    filterNull,
    isAnimationActive,
    offset,
    payloadUniqBy,
    position,
    reverseDirection,
    useTranslate3d,
    wrapperStyle,
    cursor,
    shared,
    trigger,
    defaultIndex,
    portal: portalFromProps,
  } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTooltipSettingsState({ shared, trigger }));
  }, [dispatch, shared, trigger]);

  const viewBox = useViewBox();
  const accessibilityLayer = useAccessibilityLayer();
  const tooltipEventType = useTooltipEventType(shared);

  // TODO swap the other properties from generateCategoricalChart context, to redux
  const {
    active: activeFromContext,
    payload: payloadFromContext,
    coordinate: coordinateFromContext,
    label: labelFromContext,
  } = useTooltipContext();

  const payloadFromRedux = useAppSelector(state =>
    selectTooltipPayload(state, tooltipEventType, trigger, defaultIndex),
  );

  const labelFromRedux = useAppSelector(state => selectActiveLabel(state, tooltipEventType, trigger, defaultIndex));
  const { isActive: isTooltipActiveFromRedux, activeIndex } = useAppSelector(state =>
    selectIsTooltipActive(state, tooltipEventType, trigger, defaultIndex),
  );

  const coordinateFromRedux = useAppSelector(state => selectActiveCoordinate(state, tooltipEventType, trigger));
  // TODO remove the payloadFromContext fallback
  // until we move all chart types to redux and remove this there will be some noticable fallback behavior
  const payload: TooltipPayload = payloadFromRedux?.length > 0 ? payloadFromRedux : payloadFromContext;
  const tooltipPortalFromContext = useTooltipPortal();
  /*
   * The user can set `active=true` on the Tooltip in which case the Tooltip will stay always active,
   * or `active=false` in which case the Tooltip never shows.
   *
   * If the `active` prop is not defined then it will show and hide based on mouse or keyboard activity.
   */
  const finalIsActive = activeFromProps ?? (isTooltipActiveFromRedux || activeFromContext);
  const [lastBoundingBox, updateBoundingBox] = useGetBoundingClientRect(undefined, [payload, finalIsActive]);

  const tooltipPortal = portalFromProps ?? tooltipPortalFromContext;
  const cursorPortal = useCursorPortal();
  if (tooltipPortal == null || cursorPortal == null) {
    return null;
  }

  let finalPayload: TooltipPayload = payload ?? emptyPayload;
  if (!finalIsActive) {
    finalPayload = emptyPayload;
  }

  if (filterNull && finalPayload.length) {
    finalPayload = getUniqPayload(
      payload.filter(entry => entry.value != null && (entry.hide !== true || props.includeHidden)),
      payloadUniqBy,
      defaultUniqBy,
    );
  }
  const finalCoord = coordinateFromRedux ?? coordinateFromContext;
  // temporarily prefer the label from context because currently cannot clear state from chart onMouseLeave of a sync'ed chart.
  // TODO: update when moving synchronization to redux
  // TODO: where should we put this check for tooltipEventType? Is anything else affected?
  const finalLabel = tooltipEventType === 'axis' ? (labelFromContext ?? labelFromRedux) : undefined;

  const hasPayload = finalPayload.length > 0;

  const tooltipElement = (
    <TooltipBoundingBox
      allowEscapeViewBox={allowEscapeViewBox}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      isAnimationActive={isAnimationActive}
      active={finalIsActive}
      coordinate={finalCoord}
      hasPayload={hasPayload}
      offset={offset}
      position={position}
      reverseDirection={reverseDirection}
      useTranslate3d={useTranslate3d}
      viewBox={viewBox}
      wrapperStyle={wrapperStyle}
      lastBoundingBox={lastBoundingBox}
      innerRef={updateBoundingBox}
      hasPortalFromProps={Boolean(portalFromProps)}
    >
      {renderContent(content, {
        ...props,
        // @ts-expect-error renderContent method expects the payload to be mutable, TODO make it immutable
        payload: finalPayload,
        label: finalLabel,
        active: finalIsActive,
        coordinate: finalCoord,
        accessibilityLayer,
      })}
    </TooltipBoundingBox>
  );

  return (
    <>
      {/* Tooltip the HTML element renders through a React portal so that it escapes clipping, and it renders on top of everything else */}
      {createPortal(tooltipElement, tooltipPortal)}
      {/* Cursor is an SVG element and renders in another portal, so that it renders _below_ the graphical elements */}
      {finalIsActive &&
        createPortal(
          <Cursor
            cursor={cursor}
            tooltipEventType={tooltipEventType}
            coordinate={finalCoord}
            payload={payload}
            index={activeIndex}
          />,
          cursorPortal,
        )}
    </>
  );
}

export class Tooltip<TValue extends ValueType, TName extends NameType> extends PureComponent<
  TooltipProps<TValue, TName>
> {
  static displayName = 'Tooltip';

  static defaultProps = {
    allowEscapeViewBox: { x: false, y: false },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: true,
    cursorStyle: {},
    filterNull: true,
    isAnimationActive: !Global.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: false, y: false },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: false,
    wrapperStyle: {},
  };

  render() {
    return <TooltipInternal {...this.props} />;
  }
}
