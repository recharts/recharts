/**
 * @fileOverview Line
 */
import React, { PureComponent, ReactElement } from 'react';
// @ts-ignore
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import Curve, { CurveType, Props as CurveProps, Point as CurvePoint } from '../shape/Curve';
import Dot, { Props as DotProps } from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';
import ErrorBar, { Props as ErrorBarProps } from './ErrorBar';
import { uniqueId, interpolateNumber } from '../util/DataUtils';
import { isSsr, findAllByType } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getValueByDataKey } from '../util/ChartUtils';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { D3Scale, LegendType, TooltipType, AnimationTiming, filterProps, ChartOffset, DataKey, TickItem } from '../util/types';

type LineDot = ReactElement<SVGElement> | ((props: any) => SVGElement) | DotProps | boolean;

interface LinePointItem extends CurvePoint {
  value?: number;
  payload?: any;
}

interface InternalLineProps {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  points?: LinePointItem[];
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
}

interface LineProps extends InternalLineProps {
  className?: string;
  type?: CurveType;
  unit?: string | number;
  name?: string | number;
  yAxisId?: string | number;
  xAxisId?: string | number;
  dataKey?: DataKey<any>;
  legendType?: LegendType;
  tooltipType?: TooltipType
  layout?: 'horizontal' | 'vertical';
  connectNulls?: boolean;
  hide?: boolean;

  // whether have dot in line
  activeDot?: LineDot; 
  dot?: LineDot;

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
};

type Props = Omit<CurveProps, 'points' | 'pathRef'> & LineProps;

interface State {
  isAnimationFinished?: boolean;
  totalLength?: number;
  prevPoints?: LinePointItem[];
}

class Line extends PureComponent<Props, State> {

  static displayName = 'Line';

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [] as LinePointItem[],
    isAnimationActive: !isSsr(),
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    hide: false,

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
  };

  /**
   * Compose the data of each group
   * @param {Object} props The props from the component
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData = ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey,
    bandSize, displayedData, offset }: {
      props: Props;
      xAxis: Props['xAxis'];
      yAxis: Props['yAxis'];
      xAxisTicks: TickItem[];
      yAxisTicks: TickItem[];
      dataKey: Props['dataKey'];
      bandSize: number;
      displayedData: any[];
      offset: ChartOffset;
    }) => {
    const { layout } = props;

    const points = displayedData.map((entry, index) => {
      const value = getValueByDataKey(entry, dataKey);

      if (layout === 'horizontal') {
        return {
          x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
          y: _.isNil(value) ? null : yAxis.scale(value),
          value,
          payload: entry,
        };
      }

      return {
        x: _.isNil(value) ? null : xAxis.scale(value),
        y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
        value,
        payload: entry,
      };
    });

    return { points, layout, ...offset };
  };

  mainCurve?: SVGPathElement;

  state: State = {
    isAnimationFinished: true,
    totalLength: 0,
  };

  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    if (!this.props.isAnimationActive) { return; }

    const totalLength = this.getTotalLength();
    this.setState({ totalLength });
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { animationId, points } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(points);
    }
  }

  getTotalLength() {
    const curveDom = this.mainCurve;

    try {
      return (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;
    } catch (err) {
      return 0;
    }
  }

  getStrokeDasharray(length: number, totalLength: number, lines: number[]) {
    const lineLength = lines.reduce((pre, next) => pre + next);

    const count = Math.floor(length / lineLength);
    const remainLength = length % lineLength;
    const restLength = totalLength - length;

    let remainLines = [];
    for (let i = 0, sum = 0; ; sum += lines[i], ++i) {
      if (sum + lines[i] > remainLength) {
        remainLines = [...lines.slice(0, i), remainLength - sum];
        break;
      }
    }

    const emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

    return [...Line.repeat(lines, count), ...remainLines, ...emptyLines]
      .map(line => `${line}px`)
      .join(', ');
  }

  id = uniqueId('recharts-line-');

  cachePrevData = (points: LinePointItem[]) => {
    this.setState({ prevPoints: points });
  };

  pathRef = (node: SVGPathElement): void => {
    this.mainCurve = node;
  };

  static repeat(lines: number[], count: number) {
    const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
    let result: number[] = [];

    for (let i = 0; i < count; ++i) {
      result = [...result, ...linesUnit];
    }

    return result;
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
  };

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { points, xAxis, yAxis, layout, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar.displayName);

    if (!errorBarItems) { return null; }

    function dataPointFormatter(dataPoint: LinePointItem, dataKey: Props['dataKey']) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint.payload, dataKey),
      };
    }

    return errorBarItems.map((item: ReactElement<ErrorBarProps>, i: number) => {
      return React.cloneElement(item, {
        key: i,
        data: points,
        xAxis,
        yAxis,
        layout,
        dataPointFormatter,
      });
    });
  }

  static renderDotItem(option: LineDot, props: any) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      const className = classNames('recharts-line-dot', option ? (option as DotProps).className : '');
      dotItem = <Dot {...props} className={className} />;
    }

    return dotItem;
  }

  renderDots(needClip: boolean, clipPathId: string) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { dot, points, dataKey } = this.props;
    const lineProps = filterProps(this.props);
    const customDotProps = filterProps(dot, true);
    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        value: entry.value,
        dataKey,
        cx: entry.x, cy: entry.y, index: i, payload: entry.payload,
      };

      return Line.renderDotItem(dot, dotProps);
    });
    const dotsProps = {
      clipPath: needClip ? `url(#clipPath-${clipPathId})` : null,
    };

    return <Layer className="recharts-line-dots" key="dots" {...dotsProps}>{dots}</Layer>;
  }

  renderCurveStatically(points: LinePointItem[], needClip: boolean, clipPathId: string, props?: { strokeDasharray: string }) {
    const { type, layout, connectNulls, ref, ...others } = this.props;
    const curveProps = {
      ...filterProps(others, true),
      fill: 'none',
      className: 'recharts-line-curve',
      clipPath: needClip ? `url(#clipPath-${clipPathId})` : null,
      points,
      ...props,
      type, layout, connectNulls,
    };

    return <Curve {...curveProps} pathRef={this.pathRef} />;
  }

  renderCurveWithAnimation(needClip: boolean, clipPathId: string) {
    const { points, strokeDasharray, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId, animateNewValues, width, height
    } = this.props;
    const { prevPoints, totalLength } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`line-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }: { t: number }) => {
            if (prevPoints) {
              const prevPointsDiffFactor = prevPoints.length / points.length;
              const stepData = points.map((entry, index) => {
                const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                if (prevPoints[prevPointIndex]) {
                  const prev = prevPoints[prevPointIndex];
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);

                  return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                }

                // magic number of faking previous x and y location
                if (animateNewValues) {
                  const interpolatorX = interpolateNumber(width * 2, entry.x);
                  const interpolatorY = interpolateNumber(height / 2, entry.y);
                  return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                }
                return { ...entry, x: entry.x, y: entry.y };
              });
              return this.renderCurveStatically(stepData, needClip, clipPathId);
            }
            const interpolator = interpolateNumber(0, totalLength);
            const curLength = interpolator(t);
            let currentStrokeDasharray;

            if (strokeDasharray) {
              const lines = (`${strokeDasharray}`).split(/[,\s]+/gim)
                .map(num => parseFloat(num));
              currentStrokeDasharray = this.getStrokeDasharray(
                curLength, totalLength, lines
              );
            } else {
              currentStrokeDasharray = `${curLength}px ${totalLength - curLength}px`;
            }

            return this.renderCurveStatically(points, needClip, clipPathId, {
              strokeDasharray: currentStrokeDasharray,
            });
          }
        }
      </Animate>
    );
  }

  renderCurve(needClip: boolean, clipPathId: string) {
    const { points, isAnimationActive } = this.props;
    const { prevPoints, totalLength } = this.state;

    if (isAnimationActive && points && points.length &&
      ((!prevPoints && totalLength > 0) || !_.isEqual(prevPoints, points))) {
      return this.renderCurveWithAnimation(needClip, clipPathId);
    }

    return this.renderCurveStatically(points, needClip, clipPathId);
  }

  render() {
    const { hide, dot, points, className, xAxis, yAxis, top, left,
      width, height, isAnimationActive, id } = this.props;

    if (hide || !points || !points.length) { return null; }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-line', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
    const clipPathId = _.isNil(id) ? this.id : id;

    return (
      <Layer className={layerClass}>
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${clipPathId}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        {!hasSinglePoint && this.renderCurve(needClip, clipPathId)}
        {this.renderErrorBar()}
        {(hasSinglePoint || dot) && this.renderDots(needClip, clipPathId)}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Line;
