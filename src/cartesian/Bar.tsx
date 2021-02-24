/**
 * @fileOverview Render a group of bar
 */
import React, { PureComponent, ReactElement } from 'react';
import classNames from 'classnames';
import Animate from 'react-smooth';
import _ from 'lodash';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { Layer } from '../container/Layer';
import { ErrorBar, Props as ErrorBarProps } from './ErrorBar';
import { Cell } from '../component/Cell';
import { LabelList } from '../component/LabelList';
import { uniqueId, mathSign, interpolateNumber } from '../util/DataUtils';
import { findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import {
  getCateCoordinateOfBar,
  getValueByDataKey,
  truncateByDomain,
  getBaseValueOfBar,
  findPositionOfBar,
  getTooltipItem,
} from '../util/ChartUtils';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import {
  D3Scale,
  TooltipType,
  LegendType,
  AnimationTiming,
  filterProps,
  ChartOffset,
  DataKey,
  TickItem,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
} from '../util/types';
import { ContentType } from '../component/Label';

interface BarRectangleItem extends RectangleProps {
  value?: number;
  /** the coordinate of background rectangle */
  background?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}

interface InternalBarProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number>; x?: number; width?: number };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number>; y?: number; height?: number };
  data?: BarRectangleItem[];
  top?: number;
  left?: number;
}

type RectangleShapeType =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | RectangleProps
  | boolean;

interface BarProps extends InternalBarProps {
  className?: string;
  layout?: 'horizontal' | 'vertical';
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: string | number;
  barSize?: number;
  unit?: string | number;
  name?: string | number;
  dataKey: DataKey<any>;
  tooltipType?: TooltipType;
  legendType?: LegendType;
  minPointSize?: number;
  maxBarSize?: number;
  hide?: boolean;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  background?: RectangleShapeType;
  radius?: number | [number, number, number, number];

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: number;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
  label?:
    | boolean
    | ReactElement<SVGElement>
    | ((props: any) => ReactElement<SVGElement>)
    | {
        id?: string;
        valueAccessor?: Function;
        dataKey?: DataKey<any>;
        content?: ContentType;
      };
}

export type Props = Omit<PresentationAttributesAdaptChildEvent<any, SVGPathElement>, 'radius'> & BarProps;

interface State {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: BarRectangleItem[];
  readonly curData?: BarRectangleItem[];
  readonly prevAnimationId?: number;
}

export class Bar extends PureComponent<Props, State> {
  static displayName = 'Bar';

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    hide: false,
    // data of bar
    data: [] as BarRectangleItem[],
    layout: 'vertical',
    isAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease',
  };

  /**
   * Compose the data of each group
   * @param {Object} props Props for the component
   * @param {Object} item        An instance of Bar
   * @param {Array} barPosition  The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */
  static getComposedData = ({
    props,
    item,
    barPosition,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    dataStartIndex,
    displayedData,
    offset,
  }: {
    props: Props;
    item: Bar;
    barPosition: any;
    bandSize: number;
    xAxis: InternalBarProps['xAxis'];
    yAxis: InternalBarProps['yAxis'];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: number[][];
    dataStartIndex: number;
    offset: ChartOffset;
    displayedData: any[];
  }) => {
    const pos = findPositionOfBar(barPosition, item);
    if (!pos) {
      return null;
    }

    const { layout } = props;
    const { dataKey, children, minPointSize } = item.props;
    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    const baseValue = getBaseValueOfBar({ numericAxis });
    const cells = findAllByType(children, Cell.displayName);

    const rects = displayedData.map((entry, index) => {
      let value, x, y, width, height, background;

      if (stackedData) {
        value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
      } else {
        value = getValueByDataKey(entry, dataKey);

        if (!_.isArray(value)) {
          value = [baseValue, value];
        }
      }

      if (layout === 'horizontal') {
        x = getCateCoordinateOfBar({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        y = yAxis.scale(value[1]);
        width = pos.size;
        height = yAxis.scale(value[0]) - yAxis.scale(value[1]);
        background = { x, y: yAxis.y, width, height: yAxis.height };

        if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
          const delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));

          y -= delta;
          height += delta;
        }
      } else {
        x = xAxis.scale(value[0]);
        y = getCateCoordinateOfBar({
          axis: yAxis,
          ticks: yAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
        height = pos.size;
        background = { x: xAxis.x, y, width: xAxis.width, height };

        if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
          const delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
          width += delta;
        }
      }

      return {
        ...entry,
        x,
        y,
        width,
        height,
        value: stackedData ? value : value[1],
        payload: entry,
        background,
        ...(cells && cells[index] && cells[index].props),
        tooltipPayload: [getTooltipItem(item, entry)],
        tooltipPosition: { x: x + width / 2, y: y + height / 2 },
      };
    });

    return { data: rects, layout, ...offset };
  };

  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
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

  id = uniqueId('recharts-bar-');

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (onAnimationStart) {
      onAnimationStart();
    }
  };

  static renderRectangle(option: RectangleShapeType, props: any) {
    let rectangle;

    if (React.isValidElement(option)) {
      rectangle = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      rectangle = option(props);
    } else {
      rectangle = <Rectangle {...props} />;
    }

    return rectangle;
  }

  renderRectanglesStatically(data: BarRectangleItem[]) {
    const { shape } = this.props;
    const baseProps = filterProps(this.props);

    return (
      data &&
      data.map((entry, i) => {
        const props = { ...baseProps, ...entry, index: i };

        return (
          <Layer
            className="recharts-bar-rectangle"
            {...adaptEventsOfChild(this.props, entry, i)}
            key={`rectangle-${i}`} // eslint-disable-line react/no-array-index-key
          >
            {Bar.renderRectangle(shape, props)}
          </Layer>
        );
      })
    );
  }

  renderRectanglesWithAnimation() {
    const {
      data,
      layout,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      animationId,
    } = this.props;
    const { prevData } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`bar-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          const stepData = data.map((entry, index) => {
            const prev = prevData && prevData[index];

            if (prev) {
              const interpolatorX = interpolateNumber(prev.x, entry.x);
              const interpolatorY = interpolateNumber(prev.y, entry.y);
              const interpolatorWidth = interpolateNumber(prev.width, entry.width);
              const interpolatorHeight = interpolateNumber(prev.height, entry.height);

              return {
                ...entry,
                x: interpolatorX(t),
                y: interpolatorY(t),
                width: interpolatorWidth(t),
                height: interpolatorHeight(t),
              };
            }

            if (layout === 'horizontal') {
              const interpolatorHeight = interpolateNumber(0, entry.height);
              const h = interpolatorHeight(t);

              return {
                ...entry,
                y: entry.y + entry.height - h,
                height: h,
              };
            }

            const interpolator = interpolateNumber(0, entry.width);
            const w = interpolator(t);

            return { ...entry, width: w };
          });

          return <Layer>{this.renderRectanglesStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  renderRectangles() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length && (!prevData || !_.isEqual(prevData, data))) {
      return this.renderRectanglesWithAnimation();
    }

    return this.renderRectanglesStatically(data);
  }

  renderBackground() {
    const { data } = this.props;
    const backgroundProps = filterProps(this.props.background);

    return data.map((entry, i) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { value, background, ...rest } = entry;

      if (!background) {
        return null;
      }

      const props = {
        ...rest,
        fill: '#eee',
        ...background,
        ...backgroundProps,
        ...adaptEventsOfChild(this.props, entry, i),
        index: i,
        key: `background-bar-${i}`,
        className: 'recharts-bar-background-rectangle',
      };

      return Bar.renderRectangle(this.props.background, props);
    });
  }

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }

    const { data, xAxis, yAxis, layout, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar.displayName);

    if (!errorBarItems) {
      return null;
    }

    const offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

    function dataPointFormatter(dataPoint: BarRectangleItem, dataKey: Props['dataKey']) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return errorBarItems.map((item: ReactElement<ErrorBarProps>, i: number) =>
      React.cloneElement(item, {
        key: `error-bar-${i}`, // eslint-disable-line react/no-array-index-key
        data,
        xAxis,
        yAxis,
        layout,
        offset,
        dataPointFormatter,
      }),
    );
  }

  render() {
    const {
      hide,
      data,
      className,
      xAxis,
      yAxis,
      left,
      top,
      width,
      height,
      isAnimationActive,
      background,
      id,
    } = this.props;
    if (hide || !data || !data.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-bar', className);
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
        <Layer className="recharts-bar-rectangles" clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
          {background ? this.renderBackground() : null}
          {this.renderRectangles()}
        </Layer>
        {this.renderErrorBar()}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data)}
      </Layer>
    );
  }
}
