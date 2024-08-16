/**
 * @fileOverview Render sectors of a pie
 */
import React, { PureComponent, ReactElement, ReactNode, SVGProps } from 'react';
import Animate from 'react-smooth';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';

import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Props as SectorProps } from '../shape/Sector';
import { Curve } from '../shape/Curve';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { Cell, Props as CellProps } from '../component/Cell';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { isNumber, getPercentValue, mathSign, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import {
  LegendType,
  TooltipType,
  AnimationTiming,
  Coordinate,
  ChartOffset,
  DataKey,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  AnimationDuration,
  ActiveShape,
  GeometrySector,
} from '../util/types';
import { Shape } from '../util/ActiveShapeUtils';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
  useTooltipContext,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';

interface PieDef {
  /** The abscissa of pole in polar coordinate  */
  cx?: number | string;
  /** The ordinate of pole in polar coordinate  */
  cy?: number | string;
  /** The start angle of first sector */
  startAngle?: number;
  /** The end angle of last sector */
  endAngle?: number;
  paddingAngle?: number;
  /** The inner radius of sectors */
  innerRadius?: number | string;
  /** The outer radius of sectors */
  outerRadius?: number | string;
  cornerRadius?: number | string;
}

type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;

export type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any;
  } & PieLabelRenderProps;

export type PieLabel<P extends PieLabelProps = PieLabelProps> =
  | ReactElement<SVGElement>
  | ((props: P) => ReactNode | ReactElement<SVGElement>)
  | (SVGProps<SVGTextElement> & { offsetRadius?: number })
  | boolean;

export type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

export type PieSectorDataItem = SectorProps & PieSectorData;

interface PieProps extends PieDef {
  className?: string;
  animationId?: number;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  /** Match each sector's stroke color to it's fill color */
  blendStroke?: boolean;
  /** The minimum angle for no-zero element */
  minAngle?: number;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  /** the max radius of pie */
  maxRadius?: number;
  hide?: boolean;
  /** the input data */
  data?: any[];
  sectors?: PieSectorDataItem[];
  activeShape?: ActiveShape<PieSectorDataItem>;
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  labelLine?: PieLabelLine;
  label?: PieLabel;

  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  id?: string;
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
  rootTabIndex?: number;
}

export interface PieLabelRenderProps extends PieDef {
  name: string;
  percent?: number;
  stroke: string;
  index?: number;
  textAnchor: string;
  x: number;
  y: number;
  [key: string]: any;
}

interface State {
  isAnimationFinished?: boolean;
  prevIsAnimationActive?: boolean;
  prevSectors?: PieSectorDataItem[];
  curSectors?: PieSectorDataItem[];
  prevAnimationId?: number;
  sectorToFocus?: number;
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PieProps;

type RealPieData = any;

type PieCoordinate = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  maxRadius: number;
};

type PieComposedData = PieCoordinate & {
  sectors: PieSectorDataItem[];
  data: RealPieData[];
};
type PiePayloadInputProps = {
  sectors: PieSectorDataItem[];
  legendType?: LegendType;
};

const computeLegendPayloadFromPieData = ({ sectors, legendType }: PiePayloadInputProps): Array<LegendPayload> => {
  if (sectors == null) {
    return [];
  }
  return sectors.map(
    (entry: PieSectorDataItem): LegendPayload => ({
      type: legendType,
      value: entry.name,
      color: entry.fill,
      payload: entry,
    }),
  );
};

function SetPiePayloadLegend(props: PiePayloadInputProps): null {
  useLegendPayloadDispatch(computeLegendPayloadFromPieData, props);
  return null;
}

type PieSectorsProps = {
  sectors: PieSectorDataItem[];
  activeShape: ActiveShape<PieSectorDataItem>;
  blendStroke: boolean;
  inactiveShape: ActiveShape<PieSectorDataItem>;
  allOtherPieProps: Props;
  sectorRefs: SVGGElement[];
};

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, nameKey, sectors, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: sectors?.map((p: PieSectorDataItem) => p.tooltipPayload),
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit: '', // why doesn't Pie support unit?
    },
  };
}

function PieSectors(props: PieSectorsProps) {
  const { sectors, sectorRefs, activeShape, blendStroke, inactiveShape: inactiveShapeProp, allOtherPieProps } = props;

  const { index: activeIndex, active: isTooltipActive } = useTooltipContext();
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherPieProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey);

  return sectors.map((entry, i) => {
    if (entry?.startAngle === 0 && entry?.endAngle === 0 && sectors.length !== 1) return null;
    const isSectorActive = isTooltipActive && activeShape && i === activeIndex;
    const inactiveShape = activeIndex === -1 ? null : inactiveShapeProp;
    const sectorOptions = isSectorActive ? activeShape : inactiveShape;
    const sectorProps = {
      ...entry,
      stroke: blendStroke ? entry.fill : entry.stroke,
      tabIndex: -1,
    };

    return (
      <Layer
        ref={(ref: SVGGElement) => {
          if (ref && !sectorRefs.includes(ref)) {
            sectorRefs.push(ref);
          }
        }}
        tabIndex={-1}
        className="recharts-pie-sector"
        {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
        // @ts-expect-error the types need a bit of attention
        onMouseEnter={onMouseEnterFromContext(entry, i)}
        // @ts-expect-error the types need a bit of attention
        onMouseLeave={onMouseLeaveFromContext(entry, i)}
        // @ts-expect-error the types need a bit of attention
        onClick={onClickFromContext(entry, i)}
        // eslint-disable-next-line react/no-array-index-key
        key={`sector-${entry?.startAngle}-${entry?.endAngle}-${entry.midAngle}-${i}`}
      >
        <Shape option={sectorOptions} isActive={isSectorActive} shapeType="sector" {...sectorProps} />
      </Layer>
    );
  });
}

export class Pie extends PureComponent<Props, State> {
  pieRef: SVGGElement = null;

  sectorRefs: SVGGElement[] = [];

  static displayName = 'Pie';

  static defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    cx: '50%',
    cy: '50%',
    startAngle: 0,
    endAngle: 360,
    innerRadius: 0,
    outerRadius: '80%',
    paddingAngle: 0,
    labelLine: true,
    hide: false,
    minAngle: 0,
    isAnimationActive: !Global.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
    nameKey: 'name',
    blendStroke: false,
    rootTabIndex: 0,
  };

  static parseDeltaAngle = (startAngle: number, endAngle: number) => {
    const sign = mathSign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  };

  static getRealPieData = (item: Pie): RealPieData[] => {
    const { data, children } = item.props;
    const presentationProps = filterProps(item.props, false);
    const cells = findAllByType(children, Cell);

    if (data && data.length) {
      return data.map((entry, index) => ({
        payload: entry,
        ...presentationProps,
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    }

    if (cells && cells.length) {
      return cells.map((cell: ReactElement<CellProps>) => ({ ...presentationProps, ...cell.props }));
    }

    return [];
  };

  static parseCoordinateOfPie = (item: Pie, offset: ChartOffset): PieCoordinate => {
    const { top, left, width, height } = offset;
    const maxPieRadius = getMaxRadius(width, height);
    const cx = left + getPercentValue(item.props.cx, width, width / 2);
    const cy = top + getPercentValue(item.props.cy, height, height / 2);
    const innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
    const outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
    const maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;

    return { cx, cy, innerRadius, outerRadius, maxRadius };
  };

  static getComposedData = ({ item, offset }: { item: Pie; offset: ChartOffset }): PieComposedData => {
    const pieData = Pie.getRealPieData(item);
    if (!pieData || !pieData.length) {
      return null;
    }

    const { cornerRadius, startAngle, endAngle, dataKey, nameKey, tooltipType } = item.props;
    const minAngle = Math.abs(item.props.minAngle);
    const coordinate = Pie.parseCoordinateOfPie(item, offset);
    const deltaAngle = Pie.parseDeltaAngle(startAngle, endAngle);
    const absDeltaAngle = Math.abs(deltaAngle);
    const paddingAngle = pieData.length <= 1 ? 0 : (item.props.paddingAngle ?? 0);

    const notZeroItemCount = pieData.filter(entry => getValueByDataKey(entry, dataKey, 0) !== 0).length;
    const totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
    const realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;

    const sum = pieData.reduce((result: number, entry: any) => {
      const val = getValueByDataKey(entry, dataKey, 0);
      return result + (isNumber(val) ? val : 0);
    }, 0);
    let sectors;

    if (sum > 0) {
      let prev: PieSectorDataItem;
      sectors = pieData.map((entry: any, i: number) => {
        const val = getValueByDataKey(entry, dataKey, 0);
        const name = getValueByDataKey(entry, nameKey, i);
        const percent = (isNumber(val) ? val : 0) / sum;
        let tempStartAngle;

        if (i) {
          tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
        } else {
          tempStartAngle = startAngle;
        }

        const tempEndAngle =
          tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
        const midAngle = (tempStartAngle + tempEndAngle) / 2;
        const middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
        const tooltipPayload: TooltipPayload = [
          {
            // @ts-expect-error getValueByDataKey does not validate the output type
            name,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: val,
            payload: entry,
            dataKey,
            type: tooltipType,
          },
        ];
        const tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);

        prev = {
          percent,
          cornerRadius,
          name,
          tooltipPayload,
          midAngle,
          middleRadius,
          tooltipPosition,
          ...entry,
          ...coordinate,
          value: getValueByDataKey(entry, dataKey),
          startAngle: tempStartAngle,
          endAngle: tempEndAngle,
          payload: entry,
          paddingAngle: mathSign(deltaAngle) * paddingAngle,
        };

        return prev;
      });
    }

    return {
      ...coordinate,
      sectors,
      data: pieData,
    };
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId,
      sectorToFocus: 0,
    };
  }

  state: State;

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
      return {
        prevIsAnimationActive: nextProps.isAnimationActive,
        prevAnimationId: nextProps.animationId,
        curSectors: nextProps.sectors,
        prevSectors: [],
        isAnimationFinished: true,
      };
    }
    if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curSectors: nextProps.sectors,
        prevSectors: prevState.curSectors,
        isAnimationFinished: true,
      };
    }
    if (nextProps.sectors !== prevState.curSectors) {
      return {
        curSectors: nextProps.sectors,
        isAnimationFinished: true,
      };
    }

    return null;
  }

  static getTextAnchor(x: number, cx: number) {
    if (x > cx) {
      return 'start';
    }
    if (x < cx) {
      return 'end';
    }

    return 'middle';
  }

  id = uniqueId('recharts-pie-');

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;

    this.setState({
      isAnimationFinished: true,
    });

    if (isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({
      isAnimationFinished: false,
    });

    if (isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  static renderLabelLineItem(option: PieLabelLine, props: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    if (isFunction(option)) {
      return option(props);
    }

    const className = clsx('recharts-pie-label-line', typeof option !== 'boolean' ? option.className : '');
    return <Curve {...props} type="linear" className={className} />;
  }

  static renderLabelItem(option: PieLabel, props: any, value: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    let label = value;
    if (isFunction(option)) {
      label = option(props);
      if (React.isValidElement(label)) {
        return label;
      }
    }

    const className = clsx(
      'recharts-pie-label-text',
      typeof option !== 'boolean' && !isFunction(option) ? option.className : '',
    );
    return (
      <Text {...props} alignmentBaseline="middle" className={className}>
        {label}
      </Text>
    );
  }

  renderLabels(sectors: PieSectorDataItem[]) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { label, labelLine, dataKey } = this.props;
    const pieProps = filterProps(this.props, false);
    const customLabelProps = filterProps(label, false);
    const customLabelLineProps = filterProps(labelLine, false);
    const offsetRadius = (label && (label as any).offsetRadius) || 20;

    const labels = sectors.map((entry, i) => {
      const midAngle = (entry.startAngle + entry.endAngle) / 2;
      const endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
      const labelProps = {
        ...pieProps,
        ...entry,
        stroke: 'none',
        ...customLabelProps,
        index: i,
        textAnchor: Pie.getTextAnchor(endPoint.x, entry.cx),
        ...endPoint,
      };
      const lineProps = {
        ...pieProps,
        ...entry,
        fill: 'none',
        stroke: entry.fill,
        ...customLabelLineProps,
        index: i,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
        key: 'line',
      };

      return (
        // eslint-disable-next-line react/no-array-index-key
        <Layer key={`label-${entry.startAngle}-${entry.endAngle}-${entry.midAngle}-${i}`}>
          {labelLine && Pie.renderLabelLineItem(labelLine, lineProps)}
          {Pie.renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))}
        </Layer>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  renderSectorsStatically(sectors: PieSectorDataItem[]) {
    const { activeShape, blendStroke, inactiveShape: inactiveShapeProp } = this.props;
    return (
      <PieSectors
        sectors={sectors}
        activeShape={activeShape}
        blendStroke={blendStroke}
        inactiveShape={inactiveShapeProp}
        allOtherPieProps={this.props}
        sectorRefs={this.sectorRefs}
      />
    );
  }

  renderSectorsWithAnimation() {
    const { sectors, isAnimationActive, animationBegin, animationDuration, animationEasing } = this.props;

    const { prevSectors } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {({ t }: { t: number }) => {
          const stepData: PieSectorDataItem[] = [];
          const first = sectors && sectors[0];
          let curAngle = first.startAngle;

          sectors.forEach((entry, index) => {
            const prev = prevSectors && prevSectors[index];
            const paddingAngle = index > 0 ? get(entry, 'paddingAngle', 0) : 0;

            if (prev) {
              const angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
              const latest = {
                ...entry,
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + angleIp(t) + paddingAngle,
              };

              stepData.push(latest);
              curAngle = latest.endAngle;
            } else {
              const { endAngle, startAngle } = entry;
              const interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
              const deltaAngle = interpolatorAngle(t);
              const latest = {
                ...entry,
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + deltaAngle + paddingAngle,
              };

              stepData.push(latest);
              curAngle = latest.endAngle;
            }
          });

          return <Layer>{this.renderSectorsStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  attachKeyboardHandlers(pieRef: SVGGElement) {
    // eslint-disable-next-line no-param-reassign
    pieRef.onkeydown = (e: KeyboardEvent) => {
      if (!e.altKey) {
        switch (e.key) {
          case 'ArrowLeft': {
            const next = ++this.state.sectorToFocus % this.sectorRefs.length;
            this.sectorRefs[next].focus();
            this.setState({ sectorToFocus: next });
            break;
          }
          case 'ArrowRight': {
            const next =
              --this.state.sectorToFocus < 0
                ? this.sectorRefs.length - 1
                : this.state.sectorToFocus % this.sectorRefs.length;
            this.sectorRefs[next].focus();
            this.setState({ sectorToFocus: next });
            break;
          }
          case 'Escape': {
            this.sectorRefs[this.state.sectorToFocus].blur();
            this.setState({ sectorToFocus: 0 });
            break;
          }
          default: {
            // There is nothing to do here
          }
        }
      }
    };
  }

  renderSectors() {
    const { sectors, isAnimationActive } = this.props;
    const { prevSectors } = this.state;

    if (isAnimationActive && sectors && sectors.length && (!prevSectors || !isEqual(prevSectors, sectors))) {
      return this.renderSectorsWithAnimation();
    }
    return this.renderSectorsStatically(sectors);
  }

  componentDidMount(): void {
    if (this.pieRef) {
      this.attachKeyboardHandlers(this.pieRef);
    }
  }

  render() {
    const { hide, sectors, className, label, cx, cy, innerRadius, outerRadius, isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;

    if (
      hide ||
      !sectors ||
      !sectors.length ||
      !isNumber(cx as number) ||
      !isNumber(cy as number) ||
      !isNumber(innerRadius as number) ||
      !isNumber(outerRadius as number)
    ) {
      /*
       * This used to render `null`, but it should still set the legend because:
       * 1. Hidden pie still renders a legend item (albeit with inactive color)
       * 2. if a dataKey does not match anything from props.data, then props.sectors are not defined.
       * Legend still renders though! Behaviour (2) is arguably a bug - and we should be fixing it perhaps?
       * But for now I will keep it as-is.
       */
      return (
        <>
          {/* TODO introduce the polar alternative */}
          {/* <SetCartesianGraphicalItem data={this.props.data} /> */}
          <SetPiePayloadLegend sectors={this.props.sectors || this.props.data} legendType={this.props.legendType} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        </>
      );
    }

    const layerClass = clsx('recharts-pie', className);

    return (
      <Layer
        tabIndex={this.props.rootTabIndex}
        className={layerClass}
        ref={ref => {
          this.pieRef = ref;
        }}
      >
        {this.renderSectors()}
        {label && this.renderLabels(sectors)}
        {Label.renderCallByParent(this.props, null, false)}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false)}
        {/* TODO introduce the polar alternative */}
        {/* <SetCartesianGraphicalItem data={this.props.data} xAxisId={this.props.xAxisId} /> */}
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <SetPiePayloadLegend sectors={this.props.sectors} legendType={this.props.legendType} />
      </Layer>
    );
  }
}
