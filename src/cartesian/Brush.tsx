/**
 * @fileOverview Brush
 */
import React, { PureComponent, Children, ReactText, ReactElement, TouchEvent, SVGProps } from 'react';
import classNames from 'classnames';
import { scalePoint, ScalePoint } from 'd3-scale';
import _ from 'lodash';
import { Layer } from '../container/Layer';
import { Text } from '../component/Text';
import { getValueByDataKey } from '../util/ChartUtils';
import { isNumber } from '../util/DataUtils';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import { Padding, DataKey, filterProps } from '../util/types';

type BrushTravellerType = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
interface BrushStartEndIndex {
  startIndex?: number;
  endIndex?: number;
}

interface InternalBrushProps {
  x?: number;
  y?: number;
  width?: number;
  data?: any[];
  updateId?: string | number;
}

interface BrushProps extends InternalBrushProps {
  className?: string;

  height: number;
  travellerWidth?: number;
  traveller?: BrushTravellerType;
  gap?: number;
  padding?: Padding;

  dataKey?: DataKey<any>;
  startIndex?: number;
  endIndex?: number;
  tickFormatter?: (value: any, index: number) => ReactText;

  children?: ReactElement;

  onChange?: (newIndex: BrushStartEndIndex) => void;
  leaveTimeOut?: number;
  alwaysShowText?: boolean;
}

export type Props = SVGProps<SVGElement> & BrushProps;

type BrushTravellerId = 'startX' | 'endX';

interface State {
  isTravellerMoving?: boolean;
  isSlideMoving?: boolean;
  startX?: number;
  endX?: number;
  slideMoveStartX?: number;
  movingTravellerId?: BrushTravellerId;
  isTextActive?: boolean;
  brushMoveStartX?: number;

  scale?: ScalePoint<number>;
  scaleValues?: number[];

  prevData?: any[];
  prevWidth?: number;
  prevX?: number;
  prevTravellerWidth?: number;
  prevUpdateId?: string | number;
}

const createScale = ({
  data,
  startIndex,
  endIndex,
  x,
  width,
  travellerWidth,
}: {
  data?: any[];
  startIndex?: number;
  endIndex?: number;
  x?: number;
  width?: number;
  travellerWidth?: number;
}) => {
  if (!data || !data.length) {
    return {};
  }

  const len = data.length;
  const scale = scalePoint<number>()
    .domain(_.range(0, len))
    .range([x, x + width - travellerWidth]);
  const scaleValues = scale.domain().map(entry => scale(entry));

  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale,
    scaleValues,
  };
};

const isTouch = (e: TouchEvent<SVGElement> | React.MouseEvent<SVGElement>): e is TouchEvent<SVGElement> =>
  (e as TouchEvent<SVGElement>).changedTouches && !!(e as TouchEvent<SVGElement>).changedTouches.length;

export class Brush extends PureComponent<Props, State> {
  static displayName = 'Brush';

  static defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1000,
    alwaysShowText: false,
  };

  constructor(props: Props) {
    super(props);

    this.travellerDragStartHandlers = {
      startX: this.handleTravellerDragStart.bind(this, 'startX'),
      endX: this.handleTravellerDragStart.bind(this, 'endX'),
    };

    this.state = {};
  }

  leaveTimer?: number;

  travellerDragStartHandlers?: Record<
    BrushTravellerId,
    (event: React.MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) => void
  >;

  static renderDefaultTraveller(props: any) {
    const { x, y, width, height, stroke } = props;
    const lineY = Math.floor(y + height / 2) - 1;

    return (
      <>
        <rect x={x} y={y} width={width} height={height} fill={stroke} stroke="none" />
        <line x1={x + 1} y1={lineY} x2={x + width - 1} y2={lineY} fill="none" stroke="#fff" />
        <line x1={x + 1} y1={lineY + 2} x2={x + width - 1} y2={lineY + 2} fill="none" stroke="#fff" />
      </>
    );
  }

  static renderTraveller(option: BrushTravellerType, props: any) {
    let rectangle;

    if (React.isValidElement(option)) {
      rectangle = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      rectangle = option(props);
    } else {
      rectangle = Brush.renderDefaultTraveller(props);
    }

    return rectangle;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    const { data, width, x, travellerWidth, updateId, startIndex, endIndex } = nextProps;

    if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
      return {
        prevData: data,
        prevTravellerWidth: travellerWidth,
        prevUpdateId: updateId,
        prevX: x,
        prevWidth: width,
        ...(data && data.length
          ? createScale({ data, width, x, travellerWidth, startIndex, endIndex })
          : { scale: null, scaleValues: null }),
      };
    }
    if (
      prevState.scale &&
      (width !== prevState.prevWidth || x !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)
    ) {
      prevState.scale.range([x, x + width - travellerWidth]);

      const scaleValues = prevState.scale.domain().map(entry => prevState.scale(entry));

      return {
        prevData: data,
        prevTravellerWidth: travellerWidth,
        prevUpdateId: updateId,
        prevX: x,
        prevWidth: width,
        startX: prevState.scale(nextProps.startIndex),
        endX: prevState.scale(nextProps.endIndex),
        scaleValues,
      };
    }

    return null;
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    this.detachDragEndListener();
  }

  static getIndexInRange(range: number[], x: number) {
    const len = range.length;
    let start = 0;
    let end = len - 1;

    while (end - start > 1) {
      const middle = Math.floor((start + end) / 2);

      if (range[middle] > x) {
        end = middle;
      } else {
        start = middle;
      }
    }

    return x >= range[end] ? end : start;
  }

  getIndex({ startX, endX }: { startX: number; endX: number }) {
    const { scaleValues } = this.state;
    const { gap, data } = this.props;
    const lastIndex = data.length - 1;
    const min = Math.min(startX, endX);
    const max = Math.max(startX, endX);
    const minIndex = Brush.getIndexInRange(scaleValues, min);
    const maxIndex = Brush.getIndexInRange(scaleValues, max);
    return {
      startIndex: minIndex - (minIndex % gap),
      endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - (maxIndex % gap),
    };
  }

  getTextOfTick(index: number) {
    const { data, tickFormatter, dataKey } = this.props;
    const text = getValueByDataKey(data[index], dataKey, index);

    return _.isFunction(tickFormatter) ? tickFormatter(text, index) : text;
  }

  handleDrag = (e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) => {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    if (this.state.isTravellerMoving) {
      this.handleTravellerMove(e);
    } else if (this.state.isSlideMoving) {
      this.handleSlideDrag(e);
    }
  };

  handleTouchMove = (e: TouchEvent<SVGGElement>) => {
    if (e.changedTouches != null && e.changedTouches.length > 0) {
      this.handleDrag(e.changedTouches[0]);
    }
  };

  attachDragEndListener() {
    window.addEventListener('mouseup', this.handleDragEnd, true);
    window.addEventListener('touchend', this.handleDragEnd, true);
    window.addEventListener('mousemove', this.handleDrag, true);
  }

  detachDragEndListener() {
    window.removeEventListener('mouseup', this.handleDragEnd, true);
    window.removeEventListener('touchend', this.handleDragEnd, true);
    window.removeEventListener('mousemove', this.handleDrag, true);
  }

  handleDragEnd = () => {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: false,
    });
    this.detachDragEndListener();
  };

  handleLeaveWrapper = () => {
    if (this.state.isTravellerMoving || this.state.isSlideMoving) {
      this.leaveTimer = window.setTimeout(this.handleDragEnd, this.props.leaveTimeOut);
    }
  };

  handleEnterSlideOrTraveller = () => {
    this.setState({
      isTextActive: true,
    });
  };

  handleLeaveSlideOrTraveller = () => {
    this.setState({
      isTextActive: false,
    });
  };

  handleSlideDragStart = (e: TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartX: event.pageX,
    });

    this.attachDragEndListener();
  };

  handleSlideDrag(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { slideMoveStartX, startX, endX } = this.state;
    const { x, width, travellerWidth, startIndex, endIndex, onChange } = this.props;
    let delta = e.pageX - slideMoveStartX;

    if (delta > 0) {
      delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
    } else if (delta < 0) {
      delta = Math.max(delta, x - startX, x - endX);
    }
    const newIndex = this.getIndex({
      startX: startX + delta,
      endX: endX + delta,
    });

    if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
      onChange(newIndex);
    }

    this.setState({
      startX: startX + delta,
      endX: endX + delta,
      slideMoveStartX: e.pageX,
    });
  }

  handleTravellerDragStart(id: BrushTravellerId, e: React.MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      movingTravellerId: id,
      brushMoveStartX: event.pageX,
    });

    this.attachDragEndListener();
  }

  handleTravellerMove(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { brushMoveStartX, movingTravellerId, endX, startX } = this.state;
    const prevValue = this.state[movingTravellerId];

    const { x, width, travellerWidth, onChange, gap, data } = this.props;
    const params = { startX: this.state.startX, endX: this.state.endX };

    let delta = e.pageX - brushMoveStartX;
    if (delta > 0) {
      delta = Math.min(delta, x + width - travellerWidth - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, x - prevValue);
    }

    params[movingTravellerId] = prevValue + delta;

    const newIndex = this.getIndex(params);
    const { startIndex, endIndex } = newIndex;
    const isFullGap = () => {
      const lastIndex = data.length - 1;
      if (
        (movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0)) ||
        (endX < startX && endIndex === lastIndex) ||
        (movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0)) ||
        (endX > startX && endIndex === lastIndex)
      ) {
        return true;
      }
      return false;
    };

    this.setState(
      {
        [movingTravellerId]: prevValue + delta,
        brushMoveStartX: e.pageX,
      },
      () => {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      },
    );
  }

  renderBackground() {
    const { x, y, width, height, fill, stroke } = this.props;

    return <rect stroke={stroke} fill={fill} x={x} y={y} width={width} height={height} />;
  }

  renderPanorama() {
    const { x, y, width, height, data, children, padding } = this.props;
    const chartElement = Children.only(children);

    if (!chartElement) {
      return null;
    }

    return React.cloneElement(chartElement, {
      x,
      y,
      width,
      height,
      margin: padding,
      compact: true,
      data,
    });
  }

  renderTravellerLayer(travellerX: number, id: BrushTravellerId) {
    const { y, travellerWidth, height, traveller } = this.props;
    const x = Math.max(travellerX, this.props.x);
    const travellerProps = {
      ...filterProps(this.props),
      x,
      y,
      width: travellerWidth,
      height,
    };

    return (
      <Layer
        className="recharts-brush-traveller"
        onMouseEnter={this.handleEnterSlideOrTraveller}
        onMouseLeave={this.handleLeaveSlideOrTraveller}
        onMouseDown={this.travellerDragStartHandlers[id]}
        onTouchStart={this.travellerDragStartHandlers[id]}
        style={{ cursor: 'col-resize' }}
      >
        {Brush.renderTraveller(traveller, travellerProps)}
      </Layer>
    );
  }

  renderSlide(startX: number, endX: number) {
    const { y, height, stroke, travellerWidth } = this.props;
    const x = Math.min(startX, endX) + travellerWidth;
    const width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);

    return (
      <rect
        className="recharts-brush-slide"
        onMouseEnter={this.handleEnterSlideOrTraveller}
        onMouseLeave={this.handleLeaveSlideOrTraveller}
        onMouseDown={this.handleSlideDragStart}
        onTouchStart={this.handleSlideDragStart}
        style={{ cursor: 'move' }}
        stroke="none"
        fill={stroke}
        fillOpacity={0.2}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  }

  renderText() {
    const { startIndex, endIndex, y, height, travellerWidth, stroke } = this.props;
    const { startX, endX } = this.state;
    const offset = 5;
    const attrs = {
      pointerEvents: 'none',
      fill: stroke,
    };

    return (
      <Layer className="recharts-brush-texts">
        <Text
          textAnchor="end"
          verticalAnchor="middle"
          x={Math.min(startX, endX) - offset}
          y={y + height / 2}
          {...attrs}
        >
          {this.getTextOfTick(startIndex)}
        </Text>
        <Text
          textAnchor="start"
          verticalAnchor="middle"
          x={Math.max(startX, endX) + travellerWidth + offset}
          y={y + height / 2}
          {...attrs}
        >
          {this.getTextOfTick(endIndex)}
        </Text>
      </Layer>
    );
  }

  render() {
    const { data, className, children, x, y, width, height, alwaysShowText } = this.props;
    const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving } = this.state;

    if (
      !data ||
      !data.length ||
      !isNumber(x) ||
      !isNumber(y) ||
      !isNumber(width) ||
      !isNumber(height) ||
      width <= 0 ||
      height <= 0
    ) {
      return null;
    }

    const layerClass = classNames('recharts-brush', className);
    const isPanoramic = React.Children.count(children) === 1;
    const style = generatePrefixStyle('userSelect', 'none');

    return (
      <Layer
        className={layerClass}
        onMouseLeave={this.handleLeaveWrapper}
        onTouchMove={this.handleTouchMove}
        style={style}
      >
        {this.renderBackground()}
        {isPanoramic && this.renderPanorama()}
        {this.renderSlide(startX, endX)}
        {this.renderTravellerLayer(startX, 'startX')}
        {this.renderTravellerLayer(endX, 'endX')}
        {(isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText()}
      </Layer>
    );
  }
}
