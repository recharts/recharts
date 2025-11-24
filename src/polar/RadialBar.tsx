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
import { interpolate, mathSign } from '../util/DataUtils';
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
  DataKey,
  LayoutType,
  LegendType,
  PolarViewBoxRequired,
  PresentationAttributesAdaptChildEvent,
  TickItem,
  TooltipType,
} from '../util/types';
import {
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
  PolarViewBoxRequired & {
    value?: any;
    payload?: any;
    background?: SectorProps;
  };

type RadialBarBackground = boolean | (ActiveShape<SectorProps> & ZIndexable);

type RadialBarSectorsProps = {
  sectors: ReadonlyArray<RadialBarDataItem>;
  allOtherRadialBarProps: RadialBarProps;
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

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherRadialBarProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherRadialBarProps.dataKey);

  if (sectors == null) {
    return null;
  }

  return (
    <RadialBarLabelListProvider showLabels={showLabels} sectors={sectors}>
      {sectors.map((entry, i) => {
        const isActive = activeShape && activeIndex === String(i);
        // @ts-expect-error the types need a bit of attention
        const onMouseEnter = onMouseEnterFromContext(entry, i);
        // @ts-expect-error the types need a bit of attention
        const onMouseLeave = onMouseLeaveFromContext(entry, i);
        // @ts-expect-error the types need a bit of attention
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
  props: RadialBarProps;
  previousSectorsRef: MutableRefObject<ReadonlyArray<RadialBarDataItem> | null>;
}) {
  const {
    data,
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
            ? data
            : (data ?? STABLE_EMPTY_ARRAY).map((entry: RadialBarDataItem, index: number): RadialBarDataItem => {
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
          <Layer>
            <RadialBarSectors
              sectors={stepData ?? STABLE_EMPTY_ARRAY}
              allOtherRadialBarProps={props}
              showLabels={!isAnimating}
            />
          </Layer>
        );
      }}
    </JavascriptAnimate>
  );
}

function RenderSectors(props: RadialBarProps) {
  const previousSectorsRef = useRef<ReadonlyArray<RadialBarDataItem> | null>(null);

  return <SectorsWithAnimation props={props} previousSectorsRef={previousSectorsRef} />;
}

interface InternalRadialBarProps extends ZIndexable {
  activeShape?: ActiveShape<SectorProps, SVGPathElement>;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
  /**
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  /**
   * @defaultValue false
   */
  background?: RadialBarBackground;
  /**
   * So in Bar, this can be a percent value - but that won't work in RadialBar. RadialBar: only numbers.
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
   * @defaultValue []
   */
  data?: ReadonlyArray<RadialBarDataItem>;
  dataKey: string | number | ((obj: any) => any);
  /**
   * @defaultValue false
   */
  forceCornerRadius?: boolean;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * @defaultValue rect
   */
  legendType?: LegendType;
  maxBarSize?: number;
  /**
   * @defaultValue 0
   */
  minPointSize?: number;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
  shape?: ActiveShape<SectorProps, SVGPathElement>;
  stackId?: string | number;
  tooltipType?: TooltipType;
}

export type RadialBarProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'ref'> &
  InternalRadialBarProps;

function SetRadialBarPayloadLegend(props: RadialBarProps) {
  const legendPayload = useAppSelector(state => selectRadialBarLegendPayload(state, props.legendType));
  return <SetPolarLegendPayload legendPayload={legendPayload ?? []} />;
}

const SetRadialBarTooltipEntrySettings = React.memo(
  ({
    dataKey,
    data,
    stroke,
    strokeWidth,
    name,
    hide,
    fill,
    tooltipType,
  }: Pick<
    RadialBarProps,
    'dataKey' | 'data' | 'stroke' | 'strokeWidth' | 'name' | 'hide' | 'fill' | 'tooltipType'
  >) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data,
      positions: undefined,
      settings: {
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

class RadialBarWithState extends PureComponent<RadialBarProps> {
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
    const { hide, data, className, background } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);

    return (
      <ZIndexLayer zIndex={this.props.zIndex}>
        <Layer className={layerClass}>
          {background && <Layer className="recharts-radial-bar-background">{this.renderBackground(data)}</Layer>}
          <Layer className="recharts-radial-bar-sectors">
            <RenderSectors {...this.props} />
          </Layer>
        </Layer>
      </ZIndexLayer>
    );
  }
}

function RadialBarImpl(props: WithIdRequired<PropsWithDefaults>) {
  const cells = findAllByType(props.children, Cell);
  const radialBarSettings: RadialBarSettings = {
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
  };
  const data: ReadonlyArray<RadialBarDataItem> =
    useAppSelector(state =>
      selectRadialBarSectors(state, props.radiusAxisId, props.angleAxisId, radialBarSettings, cells),
    ) ?? STABLE_EMPTY_ARRAY;
  return (
    <>
      <SetRadialBarTooltipEntrySettings
        dataKey={props.dataKey}
        data={data}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        name={props.name}
        hide={props.hide}
        fill={props.fill}
        tooltipType={props.tooltipType}
      />
      <RadialBarWithState {...props} data={data} />
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
  data: [] as ReadonlyArray<RadialBarDataItem>,
  forceCornerRadius: false,
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'rect',
  minPointSize: 0,
  radiusAxisId: 0,
  zIndex: DefaultZIndexes.bar,
} as const satisfies Partial<RadialBarProps>;

type PropsWithDefaults = RequiresDefaultProps<RadialBarProps, typeof defaultRadialBarProps>;

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
    let value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;

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
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = (innerRadius ?? 0) + pos.size;
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
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = radiusAxis.scale(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      endAngle = (startAngle ?? 0) + pos.size;
      const deltaRadius = outerRadius - innerRadius;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        const delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
        outerRadius += delta;
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
      endAngle,
      ...(cells && cells[index] && cells[index].props),
    } satisfies RadialBarDataItem;
  });
}

export function RadialBar(outsideProps: RadialBarProps) {
  const props: PropsWithDefaults = resolveDefaultProps(outsideProps, defaultRadialBarProps);
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
