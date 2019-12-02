/**
 * @fileOverview Render a group of scatters
 */
import React, { PureComponent, ReactElement } from 'react';
// @ts-ignore
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import { isSsr, findAllByType } from '../util/ReactUtils';
import ZAxis from './ZAxis';
import Curve, { Props as CurveProps, CurveType } from '../shape/Curve';
import Symbols, { Props as SymbolsProps } from '../shape/Symbols';
import ErrorBar, { Props as ErrorBarProps } from './ErrorBar';
import Cell from '../component/Cell';
import { uniqueId, interpolateNumber, getLinearRegression } from '../util/DataUtils';
import { getValueByDataKey, getCateCoordinateOfLine } from '../util/ChartUtils';
import { LegendType, PresentationAttributes, SymbolType, AnimationTiming, filterProps, D3Scale, ChartOffset, DataKey, TickItem, adaptEventsOfChild } from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { Props as ZAxisProps } from './ZAxis';

interface ScattterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}

interface ScatterPointItem {
  cx?: number;
  cy?: number;
  size?: number;
  node?: ScattterPointNode;
  payload?: any;
}

interface ScatterProps {
  data?: any[];
  xAxisId?: string | number;
  yAxisId?: string | number;
  zAxisId?: string | number;

  left?: number;
  top?: number;

  yAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  xAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  zAxis?: Omit<ZAxisProps, 'scale'> & { scale: D3Scale<string | number> };

  dataKey?: DataKey<any>;


  line?: ReactElement<SVGElement> | ((props: any) => SVGElement) | CurveProps | boolean;
  lineType?: 'fitting' | 'joint';
  lineJointType?: CurveType;
  legendType?: LegendType
  tooltipType?: TooltipType
  className: string;
  name?: string | number;

  activeIndex?: number;
  activeShape?: ReactElement<SVGElement> | ((props: any) => SVGElement) | SymbolsProps;
  shape?: SymbolType | ReactElement<SVGElement> | ((props: any) => SVGElement);
  points?: ScatterPointItem[];
  hide?: boolean;

  isAnimationActive?: boolean;
  animationId?: number;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
};

type Props = PresentationAttributes<SVGElement> & ScatterProps;

interface State {
  isAnimationFinished?: boolean;
  prevPoints?: ScatterPointItem[];
}

class Scatter extends PureComponent<Props, State> {

  static displayName = 'Scatter';

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'circle',
    lineType: 'joint',
    lineJointType: 'linear',
    data: [] as any[],
    shape: 'circle',
    hide: false,

    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'linear',
  };

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData = ({ xAxis, yAxis, zAxis, item, displayedData, onItemMouseLeave,
    onItemMouseEnter, offset, xAxisTicks, yAxisTicks }: {
      props: Props;
      xAxis: Props['xAxis'];
      yAxis: Props['yAxis'];
      zAxis: Props['zAxis'];
      xAxisTicks: TickItem[];
      yAxisTicks: TickItem[];
      item: Scatter;
      onItemMouseLeave: PresentationAttributes<SVGElement>['onMouseLeave'];
      onItemMouseEnter: PresentationAttributes<SVGElement>['onMouseLeave'];
      bandSize: number;
      displayedData: any[];
      offset: ChartOffset;
    }) => {
    const { tooltipType } = item.props;
    const cells = findAllByType(item.props.children, Cell.displayName);
    const xAxisDataKey = _.isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
    const yAxisDataKey = _.isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
    const zAxisDataKey = zAxis && zAxis.dataKey;
    const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
    const defaultZ = defaultRangeZ && defaultRangeZ[0];
    const xBandSize = (xAxis.scale as any).bandwidth ? (xAxis.scale as any).bandwidth() : 0;
    const yBandSize = (yAxis.scale as any).bandwidth ? (yAxis.scale as any).bandwidth() : 0;
    const points = displayedData.map((entry, index) => {
      const x = getValueByDataKey(entry, xAxisDataKey);
      const y = getValueByDataKey(entry, yAxisDataKey);
      const z = (!_.isNil(zAxisDataKey) && getValueByDataKey(entry, zAxisDataKey)) || '-';
      const tooltipPayload = [
        { name: xAxis.name || xAxis.dataKey, unit: xAxis.unit || '', value: x, payload: entry, dataKey: xAxisDataKey, type: tooltipType },
        { name: yAxis.name || yAxis.dataKey, unit: yAxis.unit || '', value: y, payload: entry, dataKey: yAxisDataKey, type: tooltipType },
      ];

      if (z !== '-') {
        tooltipPayload.push({
          name: zAxis.name || zAxis.dataKey, unit: zAxis.unit || '', value: z, payload: entry, dataKey: zAxisDataKey, type: tooltipType,
        });
      }
      const cx = getCateCoordinateOfLine({
        axis: xAxis, ticks: xAxisTicks, bandSize: xBandSize, entry, index, dataKey: xAxisDataKey,
      });
      const cy = getCateCoordinateOfLine({
        axis: yAxis, ticks: yAxisTicks, bandSize: yBandSize, entry, index, dataKey: yAxisDataKey,
      });
      const size = z !== '-' ? zAxis.scale(z) : defaultZ;
      const radius = Math.sqrt(Math.max(size, 0) / Math.PI);

      return {
        ...entry, cx, cy,
        x: cx - radius,
        y: cy - radius,
        xAxis, yAxis, zAxis,
        width: 2 * radius,
        height: 2 * radius,
        size,
        node: { x, y, z },
        tooltipPayload,
        tooltipPosition: { x: cx, y: cy },
        payload: entry,
        ...(cells && cells[index] && cells[index].props),
      };
    });

    return {
      onMouseLeave: onItemMouseLeave,
      onMouseEnter: onItemMouseEnter,
      points,
      ...offset,
    };
  };

  state: State = { isAnimationFinished: false };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { animationId, points } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevPoints(points);
    }
  }

  cachePrevPoints = (points: ScatterPointItem[]) => {
    this.setState({ prevPoints: points });
  };

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  id = uniqueId('recharts-scatter-');

  static renderSymbolItem(option: Props['activeShape'] | Props['shape'], props: any) {
    let symbol;

    if (React.isValidElement(option)) {
      symbol = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      symbol = option(props);
    } else if (typeof option === 'string') {
      symbol = <Symbols {...props} type={option} />;
    }

    return symbol;
  }

  renderSymbolsStatically(points: ScatterPointItem[]) {
    const { shape, activeShape, activeIndex } = this.props;
    const baseProps = filterProps(this.props);

    return points.map((entry, i) => {
      const props = { key: `symbol-${i}`, ...baseProps, ...entry };

      return (
        <Layer
          className="recharts-scatter-symbol"
          {...adaptEventsOfChild(this.props, entry, i)}
          key={`symbol-${i}`} // eslint-disable-line react/no-array-index-key
        >
          {Scatter.renderSymbolItem(activeIndex === i ? activeShape : shape, props)}
        </Layer>
      );
    });
  }

  renderSymbolsWithAnimation() {
    const { points, isAnimationActive, animationBegin, animationDuration,
      animationEasing, animationId } = this.props;
    const { prevPoints } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`pie-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }: { t: number }) => {
            const stepData = points.map((entry, index) => {
              const prev = prevPoints && prevPoints[index];

              if (prev) {
                const interpolatorCx = interpolateNumber(prev.cx, entry.cx);
                const interpolatorCy = interpolateNumber(prev.cy, entry.cy);
                const interpolatorSize = interpolateNumber(prev.size, entry.size);

                return {
                  ...entry,
                  cx: interpolatorCx(t),
                  cy: interpolatorCy(t),
                  size: interpolatorSize(t),
                };
              }

              const interpolator = interpolateNumber(0, entry.size);

              return { ...entry, size: interpolator(t) };
            });

            return (
              <Layer>
                {this.renderSymbolsStatically(stepData)}
              </Layer>
            );
          }
        }
      </Animate>
    );
  }

  renderSymbols() {
    const { points, isAnimationActive } = this.props;
    const { prevPoints } = this.state;

    if (isAnimationActive && points && points.length &&
      (!prevPoints || !_.isEqual(prevPoints, points))) {
      return this.renderSymbolsWithAnimation();
    }

    return this.renderSymbolsStatically(points);
  }

  renderErrorBar() {
    const { isAnimationActive } = this.props;
    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { points, xAxis, yAxis, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar.displayName);

    if (!errorBarItems) { return null; }

    function dataPointFormatterY(dataPoint: ScatterPointItem, dataKey: Props['dataKey']) {
      return {
        x: dataPoint.cx,
        y: dataPoint.cy,
        value: +dataPoint.node.y,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    function dataPointFormatterX(dataPoint: ScatterPointItem, dataKey: Props['dataKey']) {
      return {
        x: dataPoint.cx,
        y: dataPoint.cy,
        value: +dataPoint.node.x,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return errorBarItems.map((item: ReactElement<ErrorBarProps>, i: number) => {
      const { direction } = item.props;

      return React.cloneElement(item, {
        key: i, // eslint-disable-line react/no-array-index-key
        data: points,
        xAxis,
        yAxis,
        layout: direction === 'x' ? 'vertical' : 'horizontal',
        dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY,
      });
    });
  }

  renderLine() {
    const { points, line, lineType, lineJointType } = this.props;
    const scatterProps = filterProps(this.props);
    const customLineProps = filterProps(line);
    let linePoints, lineItem;

    if (lineType === 'joint') {
      linePoints = points.map(entry => ({ x: entry.cx, y: entry.cy }));
    } else if (lineType === 'fitting') {
      const { xmin, xmax, a, b } = getLinearRegression(points);
      const linearExp = (x: number) => a * x + b;
      linePoints = [{ x: xmin, y: linearExp(xmin) }, { x: xmax, y: linearExp(xmax) }];
    }
    const lineProps = {
      ...scatterProps,
      fill: 'none',
      stroke: scatterProps && scatterProps.fill,
      ...customLineProps,
      points: linePoints,
    };

    if (React.isValidElement(line)) {
      lineItem = React.cloneElement(line as any, lineProps);
    } else if (_.isFunction(line)) {
      lineItem = line(lineProps);
    } else {
      lineItem = <Curve {...lineProps} type={lineJointType} />;
    }

    return (
      <Layer className="recharts-scatter-line" key="recharts-scatter-line">
        {lineItem}
      </Layer>
    );
  }

  render() {
    const { hide, points, line, className, xAxis, yAxis, left, top, width,
      height, id, isAnimationActive } = this.props;
    if (hide || !points || !points.length) { return null; }
    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-scatter', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
    const clipPathId = _.isNil(id) ? this.id : id;

    return (
      <Layer
        className={layerClass}
        clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}
      >
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${clipPathId}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        {line && this.renderLine()}
        {this.renderErrorBar()}
        <Layer key="recharts-scatter-symbols">
          {this.renderSymbols()}
        </Layer>
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Scatter;
