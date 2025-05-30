import * as React from 'react';
import { CSSProperties, ReactElement, ReactNode, useEffect } from 'react';
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
import { AllowInDimension, AnimationDuration, AnimationTiming, ChartCoordinate, Coordinate } from '../util/types';
import { useViewBox } from '../context/chartLayoutContext';
import { useAccessibilityLayer } from '../context/accessibilityContext';
import { useElementOffset } from '../util/useElementOffset';
import { Cursor, CursorDefinition } from './Cursor';
import {
  selectActiveCoordinate,
  selectActiveLabel,
  selectIsTooltipActive,
  selectTooltipPayload,
} from '../state/selectors/selectors';
import { useTooltipPortal } from '../context/tooltipPortalContext';
import { TooltipTrigger } from '../chart/types';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setTooltipSettingsState, TooltipIndex, TooltipPayload } from '../state/tooltipSlice';
import { AxisId } from '../state/cartesianAxisSlice';
import { useTooltipChartSynchronisation } from '../synchronisation/useChartSynchronisation';
import { useTooltipEventType } from '../state/selectors/selectTooltipEventType';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipContentProps<TValue, TName>) => ReactNode);

function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}

export type TooltipContentProps<TValue extends ValueType, TName extends NameType> = TooltipProps<TValue, TName> & {
  label?: string | number;
  payload: any[];
  coordinate: ChartCoordinate;
  active: boolean;
  accessibilityLayer: boolean;
};

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
  defaultIndex?: number | TooltipIndex;
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

const defaultTooltipProps = {
  allowEscapeViewBox: { x: false, y: false },
  animationDuration: 400,
  animationEasing: 'ease',
  axisId: 0,
  contentStyle: {},
  cursor: true,
  filterNull: true,
  isAnimationActive: !Global.isSsr,
  itemSorter: 'name',
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: false, y: false },
  separator: ' : ',
  trigger: 'hover',
  useTranslate3d: false,
  wrapperStyle: {},
} as const satisfies Partial<TooltipProps<any, any>>;

export function Tooltip<TValue extends ValueType, TName extends NameType>(outsideProps: TooltipProps<TValue, TName>) {
  const props = resolveDefaultProps(outsideProps, defaultTooltipProps);
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
    axisId,
  } = props;
  const dispatch = useAppDispatch();
  const defaultIndexAsString: string | null | undefined =
    typeof defaultIndex === 'number' ? String(defaultIndex) : defaultIndex;

  useEffect(() => {
    dispatch(
      setTooltipSettingsState({
        shared,
        trigger,
        axisId,
        active: activeFromProps,
        defaultIndex: defaultIndexAsString,
      }),
    );
  }, [dispatch, shared, trigger, axisId, activeFromProps, defaultIndexAsString]);

  const viewBox = useViewBox();
  const accessibilityLayer = useAccessibilityLayer();
  const tooltipEventType = useTooltipEventType(shared);

  const { activeIndex, isActive } = useAppSelector(state =>
    selectIsTooltipActive(state, tooltipEventType, trigger, defaultIndexAsString),
  );

  const payloadFromRedux = useAppSelector(state =>
    selectTooltipPayload(state, tooltipEventType, trigger, defaultIndexAsString),
  );

  const labelFromRedux = useAppSelector(state =>
    selectActiveLabel(state, tooltipEventType, trigger, defaultIndexAsString),
  );

  const coordinate = useAppSelector(state =>
    selectActiveCoordinate(state, tooltipEventType, trigger, defaultIndexAsString),
  );
  const payload: TooltipPayload = payloadFromRedux;
  const tooltipPortalFromContext = useTooltipPortal();
  /*
   * The user can set `active=true` on the Tooltip in which case the Tooltip will stay always active,
   * or `active=false` in which case the Tooltip never shows.
   *
   * If the `active` prop is not defined then it will show and hide based on mouse or keyboard activity.
   */
  const finalIsActive = activeFromProps ?? isActive;
  const [lastBoundingBox, updateBoundingBox] = useElementOffset([payload, finalIsActive]);
  const finalLabel = tooltipEventType === 'axis' ? labelFromRedux : undefined;

  useTooltipChartSynchronisation(tooltipEventType, trigger, coordinate, finalLabel, activeIndex, finalIsActive);

  const tooltipPortal = portalFromProps ?? tooltipPortalFromContext;
  if (tooltipPortal == null) {
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
  const hasPayload = finalPayload.length > 0;

  const tooltipElement = (
    <TooltipBoundingBox
      allowEscapeViewBox={allowEscapeViewBox}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      isAnimationActive={isAnimationActive}
      active={finalIsActive}
      coordinate={coordinate}
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
        coordinate,
        accessibilityLayer,
      })}
    </TooltipBoundingBox>
  );

  return (
    <>
      {/* Tooltip the HTML element renders through a React portal so that it escapes clipping, and it renders on top of everything else */}
      {createPortal(tooltipElement, tooltipPortal)}
      {finalIsActive && (
        <Cursor
          cursor={cursor}
          tooltipEventType={tooltipEventType}
          coordinate={coordinate}
          payload={payload}
          index={activeIndex}
        />
      )}
    </>
  );
}
