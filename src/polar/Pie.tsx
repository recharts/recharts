/**
 * @fileOverview Render sectors of a pie
 */
import React, { PureComponent, ReactElement, ReactNode, SVGProps } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import { Layer } from '../container/Layer';
import { Sector, Props as SectorProps } from '../shape/Sector';
import { Curve } from '../shape/Curve';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { Cell, Props as CellProps } from '../component/Cell';
import { findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { isNumber, getPercentValue, mathSign, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { warn } from '../util/LogUtils';
import {
  LegendType,
  TooltipType,
  AnimationTiming,
  filterProps,
  Coordinate,
  ChartOffset,
  DataKey,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
} from '../util/types';

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

type PieActiveShape = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SectorProps;
type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;
export type PieLabel<P = any> =
  | ReactElement<SVGElement>
  | ((props: P) => ReactNode | ReactElement<SVGElement>)
  | { offsetRadius: number }
  | boolean;
type PieSectorDataItem = SectorProps & {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
};

interface PieProps extends PieDef {
  className?: string;
  animationId?: number;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  valueKey?: DataKey<any>;
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
  activeShape?: PieActiveShape;
  inactiveShape?: PieActiveShape;
  labelLine?: PieLabelLine;
  label?: PieLabel;

  activeIndex?: number | number[];
  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  id?: string;
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
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
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & PieProps;

export class Pie extends PureComponent<Props, State> {
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
  };

  static parseDeltaAngle = (startAngle: number, endAngle: number) => {
    const sign = mathSign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  };

  static getRealPieData = (item: Pie) => {
    const { data, children } = item.props;
    const presentationProps = filterProps(item.props);
    const cells = findAllByType(children, Cell.displayName);

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

  static parseCoordinateOfPie = (item: Pie, offset: ChartOffset) => {
    const { top, left, width, height } = offset;
    const maxPieRadius = getMaxRadius(width, height);
    const cx = left + getPercentValue(item.props.cx, width, width / 2);
    const cy = top + getPercentValue(item.props.cy, height, height / 2);
    const innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
    const outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
    const maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;

    return { cx, cy, innerRadius, outerRadius, maxRadius };
  };

  static getComposedData = ({ item, offset }: { item: Pie; offset: ChartOffset }): Omit<Props, 'dataKey'> => {
    const pieData = Pie.getRealPieData(item);
    if (!pieData || !pieData.length) {
      return null;
    }

    const { cornerRadius, startAngle, endAngle, paddingAngle, dataKey, nameKey, valueKey, tooltipType } = item.props;
    const minAngle = Math.abs(item.props.minAngle);
    const coordinate = Pie.parseCoordinateOfPie(item, offset);
    const deltaAngle = Pie.parseDeltaAngle(startAngle, endAngle);
    const absDeltaAngle = Math.abs(deltaAngle);

    let realDataKey = dataKey;

    if (_.isNil(dataKey) && _.isNil(valueKey)) {
      warn(
        false,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      );
      realDataKey = 'value';
    } else if (_.isNil(dataKey)) {
      warn(
        false,
        `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`,
      );
      realDataKey = valueKey;
    }

    const notZeroItemCount = pieData.filter(entry => getValueByDataKey(entry, realDataKey, 0) !== 0).length;
    const totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
    const realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;

    const sum = pieData.reduce((result: number, entry: any) => {
      const val = getValueByDataKey(entry, realDataKey, 0);
      return result + (isNumber(val) ? val : 0);
    }, 0);
    let sectors;

    if (sum > 0) {
      let prev: PieSectorDataItem;
      sectors = pieData.map((entry: any, i: number) => {
        const val = getValueByDataKey(entry, realDataKey, 0);
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
        const tooltipPayload = [
          {
            name,
            value: val,
            payload: entry,
            dataKey: realDataKey,
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
          value: getValueByDataKey(entry, realDataKey),
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

  isActiveIndex(i: number) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  hasActiveIndex() {
    const { activeIndex } = this.props;
    return Array.isArray(activeIndex) ? activeIndex.length !== 0 : activeIndex || activeIndex === 0;
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;

    this.setState({
      isAnimationFinished: true,
    });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({
      isAnimationFinished: false,
    });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  static renderLabelLineItem(option: PieLabelLine, props: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    if (_.isFunction(option)) {
      return option(props);
    }

    return <Curve {...props} type="linear" className="recharts-pie-label-line" />;
  }

  static renderLabelItem(option: PieLabel, props: any, value: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    let label = value;
    if (_.isFunction(option)) {
      label = option(props);
      if (React.isValidElement(label)) {
        return label;
      }
    }

    return (
      <Text {...props} alignmentBaseline="middle" className="recharts-pie-label-text">
        {label}
      </Text>
    );
  }

  renderLabels(sectors: PieSectorDataItem[]) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { label, labelLine, dataKey, valueKey } = this.props;
    const pieProps = filterProps(this.props);
    const customLabelProps = filterProps(label);
    const customLabelLineProps = filterProps(labelLine);
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
      let realDataKey = dataKey;
      // TODO: compatible to lower versions
      if (_.isNil(dataKey) && _.isNil(valueKey)) {
        realDataKey = 'value';
      } else if (_.isNil(dataKey)) {
        realDataKey = valueKey;
      }

      return (
        // eslint-disable-next-line react/no-array-index-key
        <Layer key={`label-${i}`}>
          {labelLine && Pie.renderLabelLineItem(labelLine, lineProps)}
          {Pie.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey))}
        </Layer>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  static renderSectorItem(option: PieActiveShape, props: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    if (_.isFunction(option)) {
      return option(props);
    }
    if (_.isPlainObject(option)) {
      return <Sector {...props} {...option} />;
    }

    return <Sector {...props} />;
  }

  renderSectorsStatically(sectors: PieSectorDataItem[]) {
    const { activeShape, blendStroke, inactiveShape: inactiveShapeProp } = this.props;
    return sectors.map((entry, i) => {
      const inactiveShape = inactiveShapeProp && this.hasActiveIndex() ? inactiveShapeProp : null;
      const sectorOptions = this.isActiveIndex(i) ? activeShape : inactiveShape;
      const sectorProps = {
        ...entry,
        stroke: blendStroke ? entry.fill : entry.stroke,
      };

      return (
        <Layer
          className="recharts-pie-sector"
          {...adaptEventsOfChild(this.props, entry, i)}
          key={`sector-${i}`} // eslint-disable-line react/no-array-index-key
        >
          {Pie.renderSectorItem(sectorOptions, sectorProps)}
        </Layer>
      );
    });
  }

  renderSectorsWithAnimation() {
    const { sectors, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = this.props;
    const { prevSectors, prevIsAnimationActive } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`pie-${animationId}-${prevIsAnimationActive}`}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {({ t }: { t: number }) => {
          const stepData: PieSectorDataItem[] = [];
          const first = sectors && sectors[0];
          let curAngle = first.startAngle;

          sectors.forEach((entry, index) => {
            const prev = prevSectors && prevSectors[index];
            const paddingAngle = index > 0 ? _.get(entry, 'paddingAngle', 0) : 0;

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

  renderSectors() {
    const { sectors, isAnimationActive } = this.props;
    const { prevSectors } = this.state;

    if (isAnimationActive && sectors && sectors.length && (!prevSectors || !_.isEqual(prevSectors, sectors))) {
      return this.renderSectorsWithAnimation();
    }
    return this.renderSectorsStatically(sectors);
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
      return null;
    }

    const layerClass = classNames('recharts-pie', className);

    return (
      <Layer className={layerClass}>
        {this.renderSectors()}
        {label && this.renderLabels(sectors)}
        {Label.renderCallByParent(this.props, null, false)}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false)}
      </Layer>
    );
  }
}
