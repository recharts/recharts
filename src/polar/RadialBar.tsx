import * as React from 'react';
import { MutableRefObject, PureComponent, ReactElement, ReactNode, useCallback, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { Series } from 'victory-vendor/d3-shape';
import { parseCornerRadius, RadialBarSector, RadialBarSectorProps } from '../util/RadialBarUtils';
import { Props as SectorProps } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { findAllByType } from '../util/ReactUtils';
import {
  ImplicitLabelListType,
  LabelListFromLabelProp,
  PolarLabelListContextProvider,
  PolarLabelListEntry,
} from '../component/LabelList';
import { Cell } from '../component/Cell';
import { interpolate, mathSign, noop } from '../util/DataUtils';
import {
  BarPositionPosition,
  getCateCoordinateOfBar,
  getNormalizedStackId,
  getTooltipNameProp,
  getValueByDataKey,
  truncateByDomain,
} from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  DataConsumer,
  DataKey,
  LayoutType,
  LegendType,
  PolarViewBoxRequired,
  PresentationAttributesAdaptChildEvent,
  TickItem,
  TooltipType,
} from '../util/types';
import {
  TooltipTriggerInfo,
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { selectRadialBarLegendPayload, selectRadialBarSectors } from '../state/selectors/radialBarSelectors';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { AxisId } from '../state/cartesianAxisSlice';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { RadialBarSettings } from '../state/types/RadialBarSettings';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { WithIdRequired } from '../util/useUniqueId';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getZIndexFromUnknown } from '../zIndex/getZIndexFromUnknown';

const STABLE_EMPTY_ARRAY: readonly RadialBarDataItem[] = [];

export type RadialBarDataItem = SectorProps &
  PolarViewBoxRequired &
  TooltipTriggerInfo & {
    value?: any;
    payload?: any;
    background?: SectorProps;
  };

type RadialBarBackground = boolean | (ActiveShape<SectorProps> & ZIndexable);

type RadialBarSectorsProps = {
  sectors: ReadonlyArray<RadialBarDataItem>;
  allOtherRadialBarProps: InternalProps;
  showLabels: boolean;
};

function RadialBarLabelListProvider({
  showLabels,
  sectors,
  children,
}: {
  showLabels: boolean;
  sectors: ReadonlyArray<RadialBarDataItem>;
  children: ReactNode;
}) {
  const labelListEntries: ReadonlyArray<PolarLabelListEntry> = sectors.map(
    (sector: RadialBarDataItem): PolarLabelListEntry => ({
      value: sector.value,
      payload: sector.payload,
      parentViewBox: undefined,
      clockWise: false,
      viewBox: {
        cx: sector.cx,
        cy: sector.cy,
        innerRadius: sector.innerRadius,
        outerRadius: sector.outerRadius,
        startAngle: sector.startAngle,
        endAngle: sector.endAngle,
        clockWise: false,
      },
      fill: sector.fill,
    }),
  );

  return (
    <PolarLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </PolarLabelListContextProvider>
  );
}

function RadialBarSectors({ sectors, allOtherRadialBarProps, showLabels }: RadialBarSectorsProps) {
  const { shape, activeShape, cornerRadius, id, ...others } = allOtherRadialBarProps;
  const baseProps = svgPropertiesNoEvents(others);

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherRadialBarProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherRadialBarProps.dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherRadialBarProps.dataKey, id);

  if (sectors == null) {
    return null;
  }

  return (
    <RadialBarLabelListProvider showLabels={showLabels} sectors={sectors}>
      {sectors.map((entry: RadialBarDataItem, i: number) => {
        const isActive: boolean = Boolean(activeShape && activeIndex === String(i));
        const onMouseEnter = onMouseEnterFromContext(entry, i);
        const onMouseLeave = onMouseLeaveFromContext(entry, i);
        const onClick = onClickFromContext(entry, i);

        const radialBarSectorProps: RadialBarSectorProps = {
          ...baseProps,
          cornerRadius: parseCornerRadius(cornerRadius),
          ...entry,
          ...adaptEventsOfChild(restOfAllOtherProps, entry, i),
          onMouseEnter,
          onMouseLeave,
          onClick,
          className: `recharts-radial-bar-sector ${entry.className}`,
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal,
          isActive,
          option: isActive ? activeShape : shape,
          index: i,
        };

        if (isActive) {
          return (
            <ZIndexLayer
              zIndex={DefaultZIndexes.activeBar}
              key={`sector-${entry.cx}-${entry.cy}-${entry.innerRadius}-${entry.outerRadius}-${entry.startAngle}-${entry.endAngle}-${i}`}
            >
              <RadialBarSector {...radialBarSectorProps} />
            </ZIndexLayer>
          );
        }

        return (
          <RadialBarSector
            key={`sector-${entry.cx}-${entry.cy}-${entry.innerRadius}-${entry.outerRadius}-${entry.startAngle}-${entry.endAngle}-${i}`}
            {...radialBarSectorProps}
          />
        );
      })}
      <LabelListFromLabelProp label={allOtherRadialBarProps.label} />
      {allOtherRadialBarProps.children}
    </RadialBarLabelListProvider>
  );
}

function SectorsWithAnimation({
  props,
  previousSectorsRef,
}: {
  props: InternalProps;
  previousSectorsRef: MutableRefObject<ReadonlyArray<RadialBarDataItem> | null>;
}) {
  const {
    sectors,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const animationId = useAnimationId(props, 'recharts-radialbar-');

  const prevData = previousSectorsRef.current;

  const [isAnimating, setIsAnimating] = useState(false);

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
    <JavascriptAnimate
      animationId={animationId}
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      key={animationId}
    >
      {(t: number) => {
        const stepData: ReadonlyArray<RadialBarDataItem> | undefined =
          t === 1
            ? sectors
            : (sectors ?? STABLE_EMPTY_ARRAY).map((entry: RadialBarDataItem, index: number): RadialBarDataItem => {
                const prev = prevData && prevData[index];

                if (prev) {
                  return {
                    ...entry,
                    startAngle: interpolate(prev.startAngle, entry.startAngle, t),
                    endAngle: interpolate(prev.endAngle, entry.endAngle, t),
                  };
                }
                const { endAngle, startAngle } = entry;

                return { ...entry, endAngle: interpolate(startAngle, endAngle, t) };
              });

        if (t > 0) {
          // eslint-disable-next-line no-param-reassign
          previousSectorsRef.current = stepData ?? null;
        }

        return (
          <RadialBarSectors
            sectors={stepData ?? STABLE_EMPTY_ARRAY}
            allOtherRadialBarProps={props}
            showLabels={!isAnimating}
          />
        );
      }}
    </JavascriptAnimate>
  );
}

function RenderSectors(props: InternalProps) {
  const previousSectorsRef = useRef<ReadonlyArray<RadialBarDataItem> | null>(null);

  return <SectorsWithAnimation props={props} previousSectorsRef={previousSectorsRef} />;
}

interface InternalRadialBarProps<DataPointType = any, DataValueType = any>
  extends DataConsumer<DataPointType, DataValueType>, ZIndexable {
  activeShape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
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
  /**
   * Renders a background for each bar. Options:
   *  - `false`: no background;
   *  - `true`: renders default background;
   *  - `object`: the props of background rectangle;
   *  - `ReactElement`: a custom background element;
   *  - `function`: a render function of custom background.
   *
   * @defaultValue false
   */
  background?: RadialBarBackground;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number;
  className?: string;
  /**
   * @defaultValue false
   */
  cornerIsExternal?: boolean;
  /**
   * @defaultValue 0
   */
  cornerRadius?: string | number;
  /**
   * Calculated radial bar sectors
   */
  sectors: ReadonlyArray<RadialBarDataItem>;
  /**
   * @defaultValue false
   */
  forceCornerRadius?: boolean;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set false, animation of radial bars will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Renders one label for each data point. Options:
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
  maxBarSize?: number;
  /**
   * @defaultValue 0
   */
  minPointSize?: number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: (data: RadialBarDataItem, index: number, e: React.MouseEvent<SVGGraphicsElement>) => void;
  onTouchStart?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchMove?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  onTouchEnd?: (data: RadialBarDataItem, index: number, e: React.TouchEvent<SVGGraphicsElement>) => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
  shape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  stackId?: string | number;
  tooltipType?: TooltipType;
  /**
   * @defaultValue 300
   */
  zIndex?: number;
}

export type RadialBarProps<DataPointType = any, DataValueType = any> = Omit<
  PresentationAttributesAdaptChildEvent<RadialBarDataItem, SVGElement>,
  'ref' | keyof InternalRadialBarProps<DataPointType, DataValueType>
> &
  Omit<InternalRadialBarProps<DataPointType, DataValueType>, 'sectors'>;

type InternalProps = WithIdRequired<PropsWithDefaults> & Pick<InternalRadialBarProps, 'sectors'>;

function SetRadialBarPayloadLegend(props: RadialBarProps) {
  const legendPayload = useAppSelector(state => selectRadialBarLegendPayload(state, props.legendType));
  return <SetPolarLegendPayload legendPayload={legendPayload ?? []} />;
}

const SetRadialBarTooltipEntrySettings = React.memo(
  ({
    dataKey,
    sectors,
    stroke,
    strokeWidth,
    name,
    hide,
    fill,
    tooltipType,
    id,
  }: Pick<
    InternalProps,
    'dataKey' | 'sectors' | 'stroke' | 'strokeWidth' | 'name' | 'hide' | 'fill' | 'tooltipType' | 'id'
  >) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: sectors,
      getPosition: noop,
      settings: {
        graphicalItemId: id,
        stroke,
        strokeWidth,
        fill,
        nameKey: undefined, // RadialBar does not have nameKey, why?
        dataKey,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: fill,
        unit: '', // Why does RadialBar not support unit?
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

class RadialBarWithState extends PureComponent<InternalProps> {
  renderBackground(sectors?: ReadonlyArray<RadialBarDataItem>) {
    if (sectors == null) {
      return null;
    }
    const { cornerRadius } = this.props;
    const backgroundProps = svgPropertiesNoEventsFromUnknown(this.props.background);
    return (
      <ZIndexLayer zIndex={getZIndexFromUnknown(this.props.background, DefaultZIndexes.barBackground)}>
        {sectors.map((entry, i) => {
          const { value, background, ...rest } = entry;

          if (!background) {
            return null;
          }

          const props: RadialBarSectorProps = {
            cornerRadius: parseCornerRadius(cornerRadius),
            ...rest,
            // @ts-expect-error backgroundProps is contributing unknown props
            fill: '#eee',
            ...background,
            ...backgroundProps,
            ...adaptEventsOfChild(this.props, entry, i),
            index: i,
            className: clsx('recharts-radial-bar-background-sector', String(backgroundProps?.className)),
            option: background,
            isActive: false,
          };

          return (
            <RadialBarSector
              key={`background-${rest.cx}-${rest.cy}-${rest.innerRadius}-${rest.outerRadius}-${rest.startAngle}-${rest.endAngle}-${i}`}
              {...props}
            />
          );
        })}
      </ZIndexLayer>
    );
  }

  render() {
    const { hide, sectors, className, background } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);

    return (
      <ZIndexLayer zIndex={this.props.zIndex}>
        <Layer className={layerClass}>
          {background && <Layer className="recharts-radial-bar-background">{this.renderBackground(sectors)}</Layer>}
          <Layer className="recharts-radial-bar-sectors">
            <RenderSectors {...this.props} />
          </Layer>
        </Layer>
      </ZIndexLayer>
    );
  }
}

function RadialBarImpl(props: WithIdRequired<PropsWithDefaults>) {
  const cells = React.useMemo(() => findAllByType(props.children, Cell), [props.children]);

  const radialBarSettings: RadialBarSettings = React.useMemo(
    () => ({
      data: undefined,
      hide: false,
      id: props.id,
      dataKey: props.dataKey,
      minPointSize: props.minPointSize,
      stackId: getNormalizedStackId(props.stackId),
      maxBarSize: props.maxBarSize,
      barSize: props.barSize,
      type: 'radialBar',
      angleAxisId: props.angleAxisId,
      radiusAxisId: props.radiusAxisId,
    }),
    [
      props.id,
      props.dataKey,
      props.minPointSize,
      props.stackId,
      props.maxBarSize,
      props.barSize,
      props.angleAxisId,
      props.radiusAxisId,
    ],
  );
  const sectors: ReadonlyArray<RadialBarDataItem> =
    useAppSelector(state =>
      selectRadialBarSectors(state, props.radiusAxisId, props.angleAxisId, radialBarSettings, cells),
    ) ?? STABLE_EMPTY_ARRAY;
  return (
    <>
      <SetRadialBarTooltipEntrySettings
        dataKey={props.dataKey}
        sectors={sectors}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        name={props.name}
        hide={props.hide}
        fill={props.fill}
        tooltipType={props.tooltipType}
        id={props.id}
      />
      <RadialBarWithState {...props} sectors={sectors} />
    </>
  );
}

export const defaultRadialBarProps = {
  angleAxisId: 0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  background: false,
  cornerIsExternal: false,
  cornerRadius: 0,
  forceCornerRadius: false,
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'rect',
  minPointSize: 0,
  radiusAxisId: 0,
  zIndex: DefaultZIndexes.bar,
} as const satisfies Partial<RadialBarProps>;

type PropsWithDefaults<DataPointType = any, DataValueType = any> = RequiresDefaultProps<
  RadialBarProps<DataPointType, DataValueType>,
  typeof defaultRadialBarProps
>;

export function computeRadialBarDataItems({
  displayedData,
  stackedData,
  dataStartIndex,
  stackedDomain,
  dataKey,
  baseValue,
  layout,
  radiusAxis,
  radiusAxisTicks,
  bandSize,
  pos,
  angleAxis,
  minPointSize,
  cx,
  cy,
  angleAxisTicks,
  cells,
  startAngle: rootStartAngle,
  endAngle: rootEndAngle,
}: {
  displayedData: ChartData;
  stackedData: Series<Record<number, number>, DataKey<any>> | undefined;
  dataStartIndex: number;
  stackedDomain: ReadonlyArray<unknown> | null;
  dataKey: DataKey<any> | undefined;
  baseValue: number | unknown;
  layout: LayoutType;
  radiusAxis: BaseAxisWithScale;
  radiusAxisTicks: ReadonlyArray<TickItem> | undefined;
  bandSize: number;
  pos: BarPositionPosition;
  angleAxis: BaseAxisWithScale;
  minPointSize: number;
  cx: number;
  cy: number;
  angleAxisTicks: ReadonlyArray<TickItem> | undefined;
  cells: ReadonlyArray<ReactElement> | undefined;
  startAngle: number;
  endAngle: number;
}): ReadonlyArray<RadialBarDataItem> {
  if (angleAxisTicks == null || radiusAxisTicks == null) {
    return STABLE_EMPTY_ARRAY;
  }

  return (displayedData ?? []).map((entry: unknown, index: number) => {
    let value,
      innerRadius: number | null | undefined,
      outerRadius: number | undefined,
      startAngle: number | null,
      endAngle: number,
      backgroundSector;

    if (stackedData) {
      // @ts-expect-error truncateByDomain expects only numerical domain, but it can received categorical domain too
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'radial') {
      startAngle = angleAxis.scale.map(value[0]) ?? rootStartAngle;
      endAngle = angleAxis.scale.map(value[1]) ?? rootEndAngle;
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      if (innerRadius != null && endAngle != null && startAngle != null) {
        outerRadius = innerRadius + pos.size;
        const deltaAngle = endAngle - startAngle;

        if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));

          endAngle += delta;
        }
        backgroundSector = {
          background: {
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle: rootStartAngle,
            endAngle: rootEndAngle,
          },
        };
      }
    } else {
      innerRadius = radiusAxis.scale.map(value[0]);
      outerRadius = radiusAxis.scale.map(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      if (innerRadius != null && outerRadius != null && startAngle != null) {
        endAngle = startAngle + pos.size;
        const deltaRadius = outerRadius - innerRadius;

        if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
          const delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
          outerRadius += delta;
        }
      }
    }

    return {
      // @ts-expect-error can't spread unknown
      ...entry,
      ...backgroundSector,
      payload: entry,
      value: stackedData ? value : value[1],
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      // @ts-expect-error endAngle is used before assigned (?)
      endAngle,
      ...(cells && cells[index] && cells[index].props),
    } satisfies RadialBarDataItem;
  });
}

/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 * @provides CellReader
 */
export function RadialBar<DataPointType = any, DataValueType = any>(
  outsideProps: RadialBarProps<DataPointType, DataValueType>,
) {
  const props: PropsWithDefaults<DataPointType, DataValueType> = resolveDefaultProps(
    outsideProps,
    defaultRadialBarProps,
  );
  return (
    <RegisterGraphicalItemId id={props.id} type="radialBar">
      {id => (
        <>
          <SetPolarGraphicalItem
            type="radialBar"
            id={id}
            data={undefined} // why does RadialBar not allow data defined on the item?
            dataKey={props.dataKey}
            hide={props.hide ?? defaultRadialBarProps.hide}
            angleAxisId={props.angleAxisId ?? defaultRadialBarProps.angleAxisId}
            radiusAxisId={props.radiusAxisId ?? defaultRadialBarProps.radiusAxisId}
            stackId={getNormalizedStackId(props.stackId)}
            barSize={props.barSize}
            minPointSize={props.minPointSize}
            maxBarSize={props.maxBarSize}
          />
          <SetRadialBarPayloadLegend {...props} />
          <RadialBarImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

RadialBar.displayName = 'RadialBar';
