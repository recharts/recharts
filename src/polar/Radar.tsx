// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import {
  PureComponent,
  ReactElement,
  MouseEvent,
  SVGProps,
  useCallback,
  useRef,
  MutableRefObject,
  useState,
} from 'react';
import last from 'es-toolkit/compat/last';

import { clsx } from 'clsx';
import { interpolateNumber, isNullish } from '../util/DataUtils';
import { Global } from '../util/Global';
import { polarToCartesian } from '../util/PolarUtils';
import { getTooltipNameProp, getValueByDataKey, RechartsScale } from '../util/ChartUtils';
import { Polygon } from '../shape/Polygon';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { LegendType, TooltipType, AnimationTiming, DataKey, AnimationDuration, ActiveDotType } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { PolarGraphicalItemContext } from '../context/PolarGraphicalItemContext';
import { selectRadarPoints } from '../state/selectors/radarSelectors';
import { useAppSelector } from '../state/hooks';
import { useIsPanorama } from '../context/PanoramaContext';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { Animate } from '../animation/Animate';

interface RadarPoint {
  x: number;
  y: number;
  cx?: number;
  cy?: number;
  angle?: number;
  radius?: number;
  value?: number;
  payload?: any;
  name?: string;
}

type RadarDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;

interface RadarProps {
  className?: string;
  dataKey: DataKey<any>;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
  points?: RadarPoint[];
  baseLinePoints?: RadarPoint[];
  isRange?: boolean;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  activeDot?: ActiveDotType;
  dot?: RadarDot;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  hide?: boolean;
  connectNulls?: boolean;

  label?: any;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  isAnimationActive?: boolean;
  animationEasing?: AnimationTiming;

  onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
  onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
}

export type RadiusAxisForRadar = { scale: RechartsScale };
export type AngleAxisForRadar = {
  scale: RechartsScale;
  type: 'number' | 'category';
  dataKey: DataKey<any> | undefined;
  cx: number;
  cy: number;
};

export type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave' | 'points' | 'ref'> & RadarProps;

export type RadarComposedData = {
  points: RadarPoint[];
  baseLinePoints: RadarPoint[];
  isRange: boolean;
};

function getLegendItemColor(stroke: string | undefined, fill: string): string {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromRadarSectors = (props: Props): ReadonlyArray<LegendPayload> => {
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

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    /*
     * I suppose this here _could_ return props.points
     * because while Radar does not support item tooltip mode, it _could_ support it.
     * But when I actually do return the points here, a defaultIndex test starts failing.
     * So, undefined it is.
     */
    dataDefinedOnItem: undefined,
    positions: undefined,
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
    },
  };
}

function renderDotItem(option: RadarDot, props: DotProps) {
  let dotItem;

  if (React.isValidElement(option)) {
    // @ts-expect-error typescript is unhappy with cloned props type
    dotItem = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    dotItem = option(props);
  } else {
    dotItem = (
      <Dot {...props} className={clsx('recharts-radar-dot', typeof option !== 'boolean' ? option.className : '')} />
    );
  }

  return dotItem;
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
    const angle = angleAxis.scale(name) + angleBandSize;
    const pointValue = Array.isArray(value) ? last(value) : value;
    const radius = isNullish(pointValue) ? undefined : radiusAxis.scale(pointValue);

    if (Array.isArray(value) && value.length >= 2) {
      isRange = true;
    }

    points.push({
      ...polarToCartesian(cx, cy, radius, angle),
      // @ts-expect-error getValueByDataKey does not validate the output type
      name,
      // @ts-expect-error getValueByDataKey does not validate the output type
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
    points.forEach(point => {
      if (Array.isArray(point.value)) {
        const baseValue = point.value[0];
        const radius = isNullish(baseValue) ? undefined : radiusAxis.scale(baseValue);

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

function Dots({ points, props }: { points: RadarPoint[]; props: Props }) {
  const { dot, dataKey } = props;
  if (!dot) {
    return null;
  }
  const baseProps = filterProps(props, false);
  const customDotProps = filterProps(dot, true);

  const dots = points.map((entry, i) => {
    const dotProps = {
      key: `dot-${i}`,
      r: 3,
      ...baseProps,
      ...customDotProps,
      dataKey,
      cx: entry.x,
      cy: entry.y,
      index: i,
      payload: entry,
    };

    return renderDotItem(dot, dotProps);
  });

  return <Layer className="recharts-radar-dots">{dots}</Layer>;
}

function StaticPolygon({ points, props, showLabels }: { points: RadarPoint[]; props: Props; showLabels: boolean }) {
  if (points == null) {
    return null;
  }

  const { shape, isRange, baseLinePoints, connectNulls } = props;

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
        {...filterProps(props, true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        points={points}
        baseLinePoints={isRange ? baseLinePoints : null}
        connectNulls={connectNulls}
      />
    );
  }

  return (
    <Layer className="recharts-radar-polygon">
      {radar}
      <Dots props={props} points={points} />
      {showLabels && LabelList.renderCallByParent(props, points)}
    </Layer>
  );
}

function PolygonWithAnimation({
  props,
  previousPointsRef,
}: {
  props: Props;
  previousPointsRef: MutableRefObject<ReadonlyArray<RadarPoint>>;
}) {
  const {
    points,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const prevPoints = previousPointsRef.current;
  const animationId = useAnimationId(props, 'recharts-radar-');
  const [isAnimating, setIsAnimating] = useState(true);

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
    <Animate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      from={{ t: 0 }}
      to={{ t: 1 }}
      key={`radar-${animationId}`}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
    >
      {({ t }: { t: number }) => {
        const prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
        const stepData =
          t === 1
            ? points
            : points.map((entry, index) => {
                const prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

                if (prev) {
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);

                  return {
                    ...entry,
                    x: interpolatorX(t),
                    y: interpolatorY(t),
                  };
                }

                const interpolatorX = interpolateNumber(entry.cx, entry.x);
                const interpolatorY = interpolateNumber(entry.cy, entry.y);

                return {
                  ...entry,
                  x: interpolatorX(t),
                  y: interpolatorY(t),
                };
              });

        if (t > 0) {
          // eslint-disable-next-line no-param-reassign
          previousPointsRef.current = stepData;
        }
        return <StaticPolygon points={stepData} props={props} showLabels={!isAnimating} />;
      }}
    </Animate>
  );
}

function RenderPolygon(props: Props) {
  const { points, isAnimationActive, isRange } = props;
  const previousPointsRef = useRef<ReadonlyArray<RadarPoint> | undefined>(undefined);
  const prevPoints = previousPointsRef.current;

  if (isAnimationActive && points && points.length && !isRange && (!prevPoints || prevPoints !== points)) {
    return <PolygonWithAnimation props={props} previousPointsRef={previousPointsRef} />;
  }

  return <StaticPolygon points={points} props={props} showLabels />;
}

const defaultRadarProps: Partial<Props> = {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: 'rect',
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
};

class RadarWithState extends PureComponent<Props> {
  render() {
    const { hide, className, points } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-radar', className);

    return (
      <>
        <Layer className={layerClass}>
          <RenderPolygon {...this.props} />
        </Layer>
        <ActivePoints
          points={points}
          mainColor={getLegendItemColor(this.props.stroke, this.props.fill)}
          itemDataKey={this.props.dataKey}
          activeDot={this.props.activeDot}
        />
      </>
    );
  }
}

function RadarImpl(props: Props) {
  const isPanorama = useIsPanorama();
  const radarPoints = useAppSelector(state =>
    selectRadarPoints(state, props.radiusAxisId, props.angleAxisId, isPanorama, props.dataKey),
  );

  return (
    <RadarWithState
      {...props}
      points={radarPoints?.points}
      baseLinePoints={radarPoints?.baseLinePoints}
      isRange={radarPoints?.isRange}
    />
  );
}

export class Radar extends PureComponent<Props> {
  static displayName = 'Radar';

  static defaultProps = defaultRadarProps;

  render() {
    return (
      <>
        <PolarGraphicalItemContext
          data={undefined} // Radar does not have data prop, why?
          dataKey={this.props.dataKey}
          hide={this.props.hide}
          angleAxisId={this.props.angleAxisId}
          radiusAxisId={this.props.radiusAxisId}
          stackId={undefined}
          barSize={undefined}
          type="radar"
        />
        <SetPolarLegendPayload legendPayload={computeLegendPayloadFromRadarSectors(this.props)} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <RadarImpl {...this.props} />
      </>
    );
  }
}
