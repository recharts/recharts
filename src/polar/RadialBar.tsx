// eslint-disable-next-line max-classes-per-file
import React, { PureComponent, ReactElement } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';

import { Series } from 'victory-vendor/d3-shape';
import { dequal } from 'dequal';
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

export type RadialBarDataItem = SectorProps & {
  value?: any;
  payload?: any;
  background?: SectorProps;
};

type RadialBarBackground = ActiveShape<SectorProps>;

type RadialBarSectorsProps = {
  sectors: ReadonlyArray<SectorProps>;
  allOtherRadialBarProps: RadialBarProps;
};

function RadialBarSectors(props: RadialBarSectorsProps) {
  const { sectors, allOtherRadialBarProps } = props;
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
    </>
  );
}

interface InternalRadialBarProps {
  animationId?: string | number;
  className?: string;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
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

interface State {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: ReadonlyArray<RadialBarDataItem>;
  readonly curData?: ReadonlyArray<RadialBarDataItem>;
  readonly prevAnimationId?: string | number;
}

function SetRadialBarPayloadLegend(props: RadialBarProps) {
  const legendPayload = useAppSelector(state => selectRadialBarLegendPayload(state, props.legendType));
  return <SetPolarLegendPayload legendPayload={legendPayload} />;
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

class RadialBarWithState extends PureComponent<RadialBarProps, State> {
  state: State = {
    isAnimationFinished: false,
  };

  static getDerivedStateFromProps(nextProps: RadialBarProps, prevState: State): State {
    if (nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curData: nextProps.data,
        prevData: prevState.curData,
      };
    }
    if (nextProps.data !== prevState.curData) {
      return {
        curData: nextProps.data,
      };
    }

    return null;
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({ isAnimationFinished: false });

    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
  };

  renderSectorsStatically(sectors: ReadonlyArray<SectorProps>) {
    return <RadialBarSectors sectors={sectors} allOtherRadialBarProps={this.props} />;
  }

  renderSectorsWithAnimation() {
    const { data, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = this.props;
    const { prevData } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`radialBar-${animationId}`}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {({ t }: { t: number }) => {
          const stepData = data.map((entry, index) => {
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

          return <Layer>{this.renderSectorsStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  renderSectors() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length && (!prevData || !dequal(prevData, data))) {
      return this.renderSectorsWithAnimation();
    }

    return this.renderSectorsStatically(data);
  }

  renderBackground(sectors?: ReadonlyArray<RadialBarDataItem>) {
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
    const { hide, data, className, background, isAnimationActive } = this.props;

    if (hide || !data || !data.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = clsx('recharts-area', className);

    return (
      <Layer className={layerClass}>
        {background && <Layer className="recharts-radial-bar-background">{this.renderBackground(data)}</Layer>}

        <Layer className="recharts-radial-bar-sectors">{this.renderSectors()}</Layer>

        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent({ ...this.props }, data)}
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
  const data = useAppSelector(state =>
    selectRadialBarSectors(state, props.radiusAxisId, props.angleAxisId, radialBarSettings, cells),
  );
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
  dataKey: DataKey<any>;
  baseValue: number | unknown;
  layout: LayoutType;
  radiusAxis: BaseAxisWithScale;
  radiusAxisTicks: ReadonlyArray<TickItem>;
  bandSize: number;
  pos: BarPositionPosition;
  angleAxis: BaseAxisWithScale;
  minPointSize: number;
  cx: number;
  cy: number;
  angleAxisTicks: ReadonlyArray<TickItem>;
  cells: ReadonlyArray<ReactElement> | undefined;
  startAngle: number;
  endAngle: number;
}) {
  return displayedData.map((entry: unknown, index: number) => {
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
      endAngle = startAngle + pos.size;
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
    };
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
          data={undefined} // data prop is injected through generator and overwrites what user passes in
          dataKey={this.props.dataKey}
          hide={this.props.hide}
          angleAxisId={this.props.angleAxisId}
          radiusAxisId={this.props.radiusAxisId}
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
