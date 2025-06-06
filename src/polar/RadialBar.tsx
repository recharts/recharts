// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import { MutableRefObject, PureComponent, ReactElement, useCallback, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { Series } from 'victory-vendor/d3-shape';
import { parseCornerRadius, RadialBarSector, RadialBarSectorProps } from '../util/RadialBarUtils';
import { Props as SectorProps } from '../shape/Sector';
import { Layer } from '../container/Layer';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { ImplicitLabelListType, LabelList } from '../component/LabelList';
import { Cell } from '../component/Cell';
import { mathSign, interpolateNumber } from '../util/DataUtils';
import {
  getCateCoordinateOfBar,
  getValueByDataKey,
  truncateByDomain,
  getTooltipNameProp,
  BarPositionPosition,
} from '../util/ChartUtils';
import {
  LegendType,
  TooltipType,
  AnimationTiming,
  TickItem,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  AnimationDuration,
  ActiveShape,
  LayoutType,
  DataKey,
} from '../util/types';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ReportBar } from '../state/ReportBar';
import { PolarGraphicalItemContext } from '../context/PolarGraphicalItemContext';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import {
  RadialBarSettings,
  selectRadialBarLegendPayload,
  selectRadialBarSectors,
} from '../state/selectors/radialBarSelectors';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { AxisId } from '../state/cartesianAxisSlice';
import { Animate } from '../animation/Animate';

const STABLE_EMPTY_ARRAY: readonly RadialBarDataItem[] = [];

export type RadialBarDataItem = SectorProps & {
  value?: any;
  payload?: any;
  background?: SectorProps;
};

type RadialBarBackground = ActiveShape<SectorProps>;

type RadialBarSectorsProps = {
  sectors: ReadonlyArray<RadialBarDataItem>;
  allOtherRadialBarProps: RadialBarProps;
  showLabels: boolean;
};

function RadialBarSectors({ sectors, allOtherRadialBarProps, showLabels }: RadialBarSectorsProps) {
  const { shape, activeShape, cornerRadius, ...others } = allOtherRadialBarProps;
  const baseProps = filterProps(others, false);

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
    <>
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
          key: `sector-${i}`,
          className: `recharts-radial-bar-sector ${entry.className}`,
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal,
          isActive,
          option: isActive ? activeShape : shape,
        };

        return <RadialBarSector {...radialBarSectorProps} />;
      })}
      {showLabels && LabelList.renderCallByParent(allOtherRadialBarProps, sectors)}
    </>
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
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      key={animationId}
    >
      {({ t }: { t: number }) => {
        const stepData =
          t === 1
            ? data
            : (data ?? STABLE_EMPTY_ARRAY).map((entry, index) => {
                const prev = prevData && prevData[index];

                if (prev) {
                  const interpolatorStartAngle = interpolateNumber(prev.startAngle, entry.startAngle);
                  const interpolatorEndAngle = interpolateNumber(prev.endAngle, entry.endAngle);

                  return {
                    ...entry,
                    startAngle: interpolatorStartAngle(t),
                    endAngle: interpolatorEndAngle(t),
                  };
                }
                const { endAngle, startAngle } = entry;
                const interpolator = interpolateNumber(startAngle, endAngle);

                return { ...entry, endAngle: interpolator(t) };
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
    </Animate>
  );
}

function RenderSectors(props: RadialBarProps) {
  const { data = [], isAnimationActive } = props;

  const previousSectorsRef = useRef<ReadonlyArray<RadialBarDataItem> | null>(null);
  const prevData = previousSectorsRef.current;

  if (isAnimationActive && data && data.length && (!prevData || prevData !== data)) {
    return <SectorsWithAnimation props={props} previousSectorsRef={previousSectorsRef} />;
  }

  return <RadialBarSectors sectors={data} allOtherRadialBarProps={props} showLabels />;
}

interface InternalRadialBarProps {
  className?: string;
  angleAxisId?: AxisId;
  radiusAxisId?: AxisId;
  startAngle?: number;
  endAngle?: number;
  shape?: ActiveShape<SectorProps, SVGPathElement>;
  activeShape?: ActiveShape<SectorProps, SVGPathElement>;
  dataKey: string | number | ((obj: any) => any);
  cornerRadius?: string | number;
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
  minPointSize?: number;
  /**
   * So in Bar, this can be a percent value - but that won't work in RadialBar. RadialBar: only numbers.
   */
  barSize?: number;
  maxBarSize?: number;
  data?: ReadonlyArray<RadialBarDataItem>;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  hide?: boolean;
  label?: ImplicitLabelListType<any>;
  stackId?: string | number;
  background?: RadialBarBackground;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

export type RadialBarProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'ref'> &
  InternalRadialBarProps;

function SetRadialBarPayloadLegend(props: RadialBarProps) {
  const legendPayload = useAppSelector(state => selectRadialBarLegendPayload(state, props.legendType));
  return <SetPolarLegendPayload legendPayload={legendPayload ?? []} />;
}

function getTooltipEntrySettings(props: RadialBarProps): TooltipPayloadConfiguration {
  const { dataKey, data, stroke, strokeWidth, name, hide, fill, tooltipType } = props;
  return {
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
}

class RadialBarWithState extends PureComponent<RadialBarProps> {
  renderBackground(sectors?: ReadonlyArray<RadialBarDataItem>) {
    if (sectors == null) {
      return null;
    }
    const { cornerRadius } = this.props;
    const backgroundProps = filterProps(this.props.background, false);
    return sectors.map((entry, i) => {
      const { value, background, ...rest } = entry;

      if (!background) {
        return null;
      }

      const props: RadialBarSectorProps = {
        cornerRadius: parseCornerRadius(cornerRadius),
        ...rest,
        fill: '#eee',
        ...background,
        ...backgroundProps,
        ...adaptEventsOfChild(this.props, entry, i),
        index: i,
        key: `sector-${i}`,
        className: clsx('recharts-radial-bar-background-sector', backgroundProps?.className),
        option: background,
        isActive: false,
      };

      return <RadialBarSector {...props} />;
    });
  }

  render() {
    const { hide, data, className, background } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);

    return (
      <Layer className={layerClass}>
        {background && <Layer className="recharts-radial-bar-background">{this.renderBackground(data)}</Layer>}

        <Layer className="recharts-radial-bar-sectors">
          <RenderSectors {...this.props} />
        </Layer>
      </Layer>
    );
  }
}

function RadialBarImpl(props: RadialBarProps) {
  const cells = findAllByType(props.children, Cell);
  const radialBarSettings: RadialBarSettings = {
    dataKey: props.dataKey,
    minPointSize: props.minPointSize,
    stackId: props.stackId,
    maxBarSize: props.maxBarSize,
    barSize: props.barSize,
  };
  const data: ReadonlyArray<RadialBarDataItem> =
    useAppSelector(state =>
      selectRadialBarSectors(state, props.radiusAxisId, props.angleAxisId, radialBarSettings, cells),
    ) ?? STABLE_EMPTY_ARRAY;
  return (
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...props, data }} />
      <RadialBarWithState {...props} data={data} />
    </>
  );
}

const defaultRadialBarProps: Partial<RadialBarProps> = {
  angleAxisId: 0,
  radiusAxisId: 0,
  minPointSize: 0,
  hide: false,
  legendType: 'rect',
  data: [] as ReadonlyArray<RadialBarDataItem>,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  forceCornerRadius: false,
  cornerIsExternal: false,
};

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
  minPointSize: number | undefined;
  cx: number;
  cy: number;
  angleAxisTicks: ReadonlyArray<TickItem> | undefined;
  cells: ReadonlyArray<ReactElement> | undefined;
  startAngle: number;
  endAngle: number;
}): ReadonlyArray<RadialBarDataItem> {
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

export class RadialBar extends PureComponent<RadialBarProps> {
  static displayName = 'RadialBar';

  static defaultProps = defaultRadialBarProps;

  render() {
    return (
      <>
        <ReportBar />
        <PolarGraphicalItemContext
          // TODO: do we need this anymore and is the below comment true? Strict nulls complains about it
          data={undefined} // data prop is injected through generator and overwrites what user passes in
          dataKey={this.props.dataKey}
          // TS is not smart enough to know defaultProps has values due to the explicit Partial type
          hide={this.props.hide ?? defaultRadialBarProps.hide!}
          angleAxisId={this.props.angleAxisId ?? defaultRadialBarProps.angleAxisId!}
          radiusAxisId={this.props.radiusAxisId ?? defaultRadialBarProps.radiusAxisId!}
          stackId={this.props.stackId}
          barSize={this.props.barSize}
          type="radialBar"
        />
        <SetRadialBarPayloadLegend {...this.props} />
        <RadialBarImpl {...this.props} />
      </>
    );
  }
}
