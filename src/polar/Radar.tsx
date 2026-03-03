import * as React from 'react';
import { MouseEvent, MutableRefObject, ReactElement, ReactNode, SVGProps, useCallback, useRef, useState } from 'react';
import last from 'es-toolkit/compat/last';

import { clsx } from 'clsx';
import { interpolate, isNullish, noop } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import { Polygon } from '../shape/Polygon';
import { Layer } from '../container/Layer';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { Dots } from '../component/Dots';
import {
  ActiveDotType,
  AnimationDuration,
  AnimationTiming,
  DataConsumer,
  DataKey,
  DotType,
  LegendType,
  TooltipType,
  TrapezoidViewBox,
} from '../util/types';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { selectRadarPoints } from '../state/selectors/radarSelectors';
import { useAppSelector } from '../state/hooks';
import { useIsPanorama } from '../context/PanoramaContext';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { WithIdRequired } from '../util/useUniqueId';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { RechartsScale } from '../util/scale/RechartsScale';

export interface RadarPoint {
  x: number;
  y: number;
  cx?: number;
  cy?: number;
  angle: number;
  radius?: number;
  value?: number;
  payload?: any;
  name?: string | number;
}

interface RadarProps<DataPointType = any, DataValueType = any>
  extends ZIndexable, DataConsumer<DataPointType, DataValueType> {
  /**
   * @defaultValue true
   */
  activeDot?: ActiveDotType;
  /**
   * @defaultValue 0
   */
  angleAxisId?: string | number;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  baseLinePoints?: RadarPoint[];
  className?: string;
  connectNulls?: boolean;
  /**
   * Renders a circle element at each data point. Options:
   *
   * - `false`: no dots are drawn;
   * - `true`: renders the dots with default settings;
   * - `object`: the props of the dot. This will be merged with the internal calculated props of each dot;
   * - `ReactElement`: the custom dot element;
   * - `function`: a render function of the custom dot.
   *
   * @defaultValue false
   */
  dot?: DotType;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set false, animation of polygon will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  isRange?: boolean;
  /**
   * Renders one label for each point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  onMouseEnter?: (props: InternalRadarProps, e: MouseEvent<SVGPolygonElement>) => void;
  onMouseLeave?: (props: InternalRadarProps, e: MouseEvent<SVGPolygonElement>) => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: string | number;

  /**
   * If set a ReactElement, the shape of radar can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  tooltipType?: TooltipType;
  /**
   * @defaultValue 100
   */
  zIndex?: number;
}

export type RadiusAxisForRadar = { scale: RechartsScale };
export type AngleAxisForRadar = {
  scale: RechartsScale;
  type: 'number' | 'category';
  dataKey: DataKey<any> | undefined;
  cx: number;
  cy: number;
};

export type Props<DataPointType = any, DataValueType = any> = Omit<
  SVGProps<SVGGraphicsElement>,
  'onMouseEnter' | 'onMouseLeave' | 'points' | 'ref'
> &
  RadarProps<DataPointType, DataValueType>;

export type RadarComposedData = {
  points: RadarPoint[];
  baseLinePoints: RadarPoint[];
  isRange: boolean;
};

function getLegendItemColor(stroke: string | undefined, fill: string | undefined): string | undefined {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromRadarSectors = (props: PropsWithDefaults): ReadonlyArray<LegendPayload> => {
  const { dataKey, name, stroke, fill, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: getLegendItemColor(stroke, fill),
      value: getTooltipNameProp(name, dataKey),
      payload: props,
    },
  ];
};

const SetRadarTooltipEntrySettings = React.memo(
  ({
    dataKey,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    id,
  }: Pick<
    WithIdRequired<PropsWithDefaults>,
    'dataKey' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'hide' | 'tooltipType' | 'id'
  >) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      /*
       * I suppose this here _could_ return props.points
       * because while Radar does not support item tooltip mode, it _could_ support it.
       * But when I actually do return the points here, a defaultIndex test starts failing.
       * So, undefined it is.
       */
      dataDefinedOnItem: undefined,
      getPosition: noop,
      settings: {
        stroke,
        strokeWidth,
        fill,
        nameKey: undefined, // RadarChart does not have nameKey unfortunately
        dataKey,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: getLegendItemColor(stroke, fill),
        unit: '', // why doesn't Radar support unit?
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

function RadarDotsWrapper({ points, props }: { points: ReadonlyArray<RadarPoint>; props: PropsWithDefaults }) {
  const { dot, dataKey } = props;
  const { id, ...propsWithoutId } = props;

  const baseProps = svgPropertiesNoEvents(propsWithoutId);

  return (
    <Dots
      points={points}
      dot={dot}
      className="recharts-radar-dots"
      dotClassName="recharts-radar-dot"
      dataKey={dataKey}
      baseProps={baseProps}
    />
  );
}

export function computeRadarPoints({
  radiusAxis,
  angleAxis,
  displayedData,
  dataKey,
  bandSize,
}: {
  radiusAxis: RadiusAxisForRadar;
  angleAxis: AngleAxisForRadar;
  displayedData: any[];
  dataKey: RadarProps['dataKey'];
  bandSize: number;
}): RadarComposedData {
  const { cx, cy } = angleAxis;
  let isRange = false;
  const points: RadarPoint[] = [];
  const angleBandSize = angleAxis.type !== 'number' ? (bandSize ?? 0) : 0;

  displayedData.forEach((entry, i) => {
    const name = getValueByDataKey(entry, angleAxis.dataKey, i);
    const value = getValueByDataKey(entry, dataKey);
    const angle: number = (angleAxis.scale.map(name) ?? 0) + angleBandSize;
    const pointValue = Array.isArray(value) ? last(value) : value;
    const radius: number = isNullish(pointValue) ? 0 : (radiusAxis.scale.map(pointValue) ?? 0);

    if (Array.isArray(value) && value.length >= 2) {
      isRange = true;
    }

    points.push({
      ...polarToCartesian(cx, cy, radius, angle),
      // getValueByDataKey does not validate the output type
      name,
      // getValueByDataKey does not validate the output type
      value,
      cx,
      cy,
      radius,
      angle,
      payload: entry,
    });
  });
  const baseLinePoints: RadarPoint[] = [];

  if (isRange) {
    points.forEach((point: RadarPoint) => {
      if (Array.isArray(point.value)) {
        const baseValue = point.value[0];
        const radius: number = isNullish(baseValue) ? 0 : (radiusAxis.scale.map(baseValue) ?? 0);

        baseLinePoints.push({
          ...point,
          radius,
          ...polarToCartesian(cx, cy, radius, point.angle),
        });
      } else {
        baseLinePoints.push(point);
      }
    });
  }

  return { points, isRange, baseLinePoints };
}

function RadarLabelListProvider({
  showLabels,
  points,
  children,
}: {
  showLabels: boolean;
  points: ReadonlyArray<RadarPoint>;
  children: ReactNode;
}) {
  /*
   * Radar provides a Cartesian label list context. Do we want to also provide a polar label list context?
   * That way, users can choose to use polar positions for the Radar labels.
   */
  // const labelListEntries: ReadonlyArray<PolarLabelListEntry> = points.map(
  //   (point): PolarLabelListEntry => ({
  //     value: point.value,
  //     payload: point.payload,
  //     parentViewBox: undefined,
  //     clockWise: false,
  //     viewBox: {
  //       cx: point.cx,
  //       cy: point.cy,
  //       innerRadius: point.radius,
  //       outerRadius: point.radius,
  //       startAngle: point.angle,
  //       endAngle: point.angle,
  //       clockWise: false,
  //     },
  //   }),
  // );

  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = points.map((point): CartesianLabelListEntry => {
    const viewBox: TrapezoidViewBox = {
      x: point.x,
      y: point.y,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0,
    };
    return {
      ...viewBox,
      value: point.value ?? '',
      payload: point.payload,
      parentViewBox: undefined,
      viewBox,
      fill: undefined,
    };
  });

  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function StaticPolygon({
  points,
  baseLinePoints,
  props,
}: {
  points: ReadonlyArray<RadarPoint>;
  baseLinePoints: ReadonlyArray<RadarPoint>;
  props: InternalRadarProps;
}) {
  if (points == null) {
    return null;
  }

  const { shape, isRange, connectNulls } = props;

  const handleMouseEnter = (e: MouseEvent<SVGPolygonElement>) => {
    const { onMouseEnter } = props;

    if (onMouseEnter) {
      onMouseEnter(props, e);
    }
  };

  const handleMouseLeave = (e: MouseEvent<SVGPolygonElement>) => {
    const { onMouseLeave } = props;

    if (onMouseLeave) {
      onMouseLeave(props, e);
    }
  };

  let radar;
  if (React.isValidElement(shape)) {
    radar = React.cloneElement(shape, { ...props, points } as any);
  } else if (typeof shape === 'function') {
    radar = shape({ ...props, points });
  } else {
    radar = (
      <Polygon
        {...svgPropertiesAndEvents(props)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        points={points}
        baseLinePoints={isRange ? baseLinePoints : undefined}
        connectNulls={connectNulls}
      />
    );
  }

  return (
    <Layer className="recharts-radar-polygon">
      {radar}
      <RadarDotsWrapper props={props} points={points} />
    </Layer>
  );
}

const interpolatePolarPoint =
  (prevPoints: ReadonlyArray<RadarPoint> | undefined, prevPointsDiffFactor: number, t: number) =>
  (entry: RadarPoint, index: number) => {
    const prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

    if (prev) {
      return {
        ...entry,
        x: interpolate(prev.x, entry.x, t),
        y: interpolate(prev.y, entry.y, t),
      };
    }

    return {
      ...entry,
      x: interpolate(entry.cx, entry.x, t),
      y: interpolate(entry.cy, entry.y, t),
    };
  };

function PolygonWithAnimation({
  props,
  previousPointsRef,
  previousBaseLinePointsRef,
}: {
  props: InternalRadarProps;
  previousPointsRef: MutableRefObject<ReadonlyArray<RadarPoint> | undefined>;
  previousBaseLinePointsRef: MutableRefObject<ReadonlyArray<RadarPoint> | undefined>;
}) {
  const {
    points,
    baseLinePoints,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const prevPoints = previousPointsRef.current;
  const prevBaseLinePoints = previousBaseLinePointsRef.current;

  const prevPointsDiffFactor: number = prevPoints ? prevPoints.length / points.length : 1;
  const prevBaseLinePointsDiffFactor: number = prevBaseLinePoints
    ? prevBaseLinePoints.length / baseLinePoints.length
    : 1;

  const animationId = useAnimationId(props, 'recharts-radar-');
  const [isAnimating, setIsAnimating] = useState(false);
  const showLabels = !isAnimating;

  const handleAnimationEnd = useCallback(() => {
    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);

  const handleAnimationStart = useCallback(() => {
    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);

  return (
    <RadarLabelListProvider showLabels={showLabels} points={points}>
      <JavascriptAnimate
        animationId={animationId}
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        key={`radar-${animationId}`}
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={handleAnimationStart}
      >
        {(t: number) => {
          const stepData = t === 1 ? points : points.map(interpolatePolarPoint(prevPoints, prevPointsDiffFactor, t));

          const stepBaseLinePoints =
            t === 1
              ? baseLinePoints
              : baseLinePoints?.map(interpolatePolarPoint(prevBaseLinePoints, prevBaseLinePointsDiffFactor, t));

          if (t > 0) {
            // eslint-disable-next-line no-param-reassign
            previousPointsRef.current = stepData;
            // eslint-disable-next-line no-param-reassign
            previousBaseLinePointsRef.current = stepBaseLinePoints;
          }
          return <StaticPolygon points={stepData} baseLinePoints={stepBaseLinePoints} props={props} />;
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
      {props.children}
    </RadarLabelListProvider>
  );
}

function RenderPolygon(props: InternalRadarProps) {
  const previousPointsRef = useRef<ReadonlyArray<RadarPoint> | undefined>(undefined);
  const previousBaseLinePointsRef = useRef<ReadonlyArray<RadarPoint> | undefined>(undefined);

  return (
    <PolygonWithAnimation
      props={props}
      previousPointsRef={previousPointsRef}
      previousBaseLinePointsRef={previousBaseLinePointsRef}
    />
  );
}

export const defaultRadarProps = {
  activeDot: true,
  angleAxisId: 0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  dot: false,
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'rect',
  radiusAxisId: 0,
  zIndex: DefaultZIndexes.area,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof defaultRadarProps>;

export type InternalRadarProps = WithIdRequired<PropsWithDefaults> & RadarComposedData;

function RadarWithState(props: InternalRadarProps) {
  const { hide, className, points } = props;

  if (hide) {
    return null;
  }

  const layerClass = clsx('recharts-radar', className);

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={layerClass}>
        <RenderPolygon {...props} />
      </Layer>
      <ActivePoints
        points={points}
        mainColor={getLegendItemColor(props.stroke, props.fill)}
        itemDataKey={props.dataKey}
        activeDot={props.activeDot}
      />
    </ZIndexLayer>
  );
}

function RadarImpl(props: WithIdRequired<PropsWithDefaults>) {
  const isPanorama = useIsPanorama();
  const radarPoints = useAppSelector(state =>
    selectRadarPoints(state, props.radiusAxisId, props.angleAxisId, isPanorama, props.id),
  );

  if (radarPoints?.points == null) {
    return null;
  }

  return (
    <RadarWithState
      {...props}
      points={radarPoints?.points}
      baseLinePoints={radarPoints?.baseLinePoints}
      isRange={radarPoints?.isRange}
    />
  );
}

/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 */
export function Radar<DataPointType = any, DataValueType = any>(outsideProps: Props<DataPointType, DataValueType>) {
  const props: PropsWithDefaults = resolveDefaultProps(outsideProps, defaultRadarProps);
  return (
    <RegisterGraphicalItemId id={props.id} type="radar">
      {id => (
        <>
          <SetPolarGraphicalItem
            type="radar"
            id={id}
            data={undefined} // Radar does not have data prop, why?
            dataKey={props.dataKey}
            hide={props.hide}
            angleAxisId={props.angleAxisId}
            radiusAxisId={props.radiusAxisId}
          />
          <SetPolarLegendPayload legendPayload={computeLegendPayloadFromRadarSectors(props)} />
          <SetRadarTooltipEntrySettings
            dataKey={props.dataKey}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
            fill={props.fill}
            name={props.name}
            hide={props.hide}
            tooltipType={props.tooltipType}
            id={id}
          />
          <RadarImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

Radar.displayName = 'Radar';
