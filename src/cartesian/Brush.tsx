/**
 * @fileOverview Brush
 */
import React, { PureComponent, Children, ReactText, MouseEvent, ReactElement, TouchEvent } from 'react';
import classNames from 'classnames';
import { scalePoint, ScalePoint } from 'd3-scale';
import _ from 'lodash';
import Layer from '../container/Layer';
import Text from '../component/Text';
import { getValueByDataKey } from '../util/ChartUtils';
import { isNumber } from '../util/DataUtils';
import { generatePrefixStyle } from '../util/CssPrefixUtils';

import { Padding, PresentationAttributes, DataKey } from '../util/types';

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
  gap?: number;
  padding?: Padding;

  dataKey?: DataKey<any>;
  startIndex?: number;
  endIndex?: number;
  tickFormatter?: (value: any) => ReactText;

  children?: ReactElement;

  onChange?: (newIndex: BrushStartEndIndex) => void;
  leaveTimeOut?: number;
  alwaysShowText?: boolean;
};

type Props = PresentationAttributes<SVGElement> & BrushProps;

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
}

const isTouch = (e: TouchEvent<SVGElement> | MouseEvent<SVGElement>): e is TouchEvent<SVGElement> => {
  return (e as TouchEvent<SVGElement>).changedTouches && !!(e as TouchEvent<SVGElement>).changedTouches.length; 
};

class Brush extends PureComponent<Props, State> {

  static displayName = 'Brush';

  static defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1000,
    alwaysShowText: false
  };

  constructor(props: Props) {
    super(props);

    this.travellerDragStartHandlers = {
      startX: this.handleTravellerDragStart.bind(this, 'startX'),
      endX: this.handleTravellerDragStart.bind(this, 'endX'),
    };

    this.state = props.data && props.data.length ? this.updateScale(props) : {};
  }

  leaveTimer?: number;
  scale?: ScalePoint<number>;
  scaleValues?: number[];
  travellerDragStartHandlers?: Record<BrushTravellerId, (event: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) => void>;

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { data, width, x, travellerWidth, updateId } = this.props;

    if (
      (nextProps.data !== data || nextProps.updateId !== updateId) &&
      nextProps.data &&
      nextProps.data.length
    ) {
      this.setState(this.updateScale(nextProps));
    } else if (
      nextProps.width !== width ||
      nextProps.x !== x ||
      nextProps.travellerWidth !== travellerWidth
    ) {
      this.scale.range([nextProps.x, nextProps.x + nextProps.width - nextProps.travellerWidth]);
      this.scaleValues = this.scale.domain().map(entry => this.scale(entry));

      this.setState({
        startX: this.scale(nextProps.startIndex),
        endX: this.scale(nextProps.endIndex),
      });
    }
  }

  componentWillUnmount() {
    this.scale = null;
    this.scaleValues = null;

    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
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

  getIndex({ startX, endX }: { startX: number; endX: number; }) {
    const { gap, data } = this.props;
    const lastIndex = data.length - 1;
    const min = Math.min(startX, endX);
    const max = Math.max(startX, endX);
    const minIndex = Brush.getIndexInRange(this.scaleValues, min);
    const maxIndex = Brush.getIndexInRange(this.scaleValues, max);
    return {
      startIndex: minIndex - minIndex % gap,
      endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap,
    };
  }

  getTextOfTick(index: number) {
    const { data, tickFormatter, dataKey } = this.props;
    const text = getValueByDataKey(data[index], dataKey, index);

    return _.isFunction(tickFormatter) ? tickFormatter(text) : text;
  }

  handleDrag = (e: React.Touch | MouseEvent<SVGGElement>) => {
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

  handleDragEnd = () => {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: false,
    });
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

  handleSlideDragStart = (e: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>) => {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartX: event.pageX,
    });
  };

  handleSlideDrag(e: React.Touch | MouseEvent<SVGGElement>) {
    const { slideMoveStartX, startX, endX } = this.state;
    const { x, width, travellerWidth, startIndex, endIndex, onChange } = this.props;
    let delta = e.pageX - slideMoveStartX;

    if (delta > 0) {
      delta = Math.min(
        delta,
        x + width - travellerWidth - endX,
        x + width - travellerWidth - startX
      );
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

  handleTravellerDragStart(id: BrushTravellerId, e: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      movingTravellerId: id,
      brushMoveStartX: event.pageX,
    });
  }

  handleTravellerMove(e: React.Touch | MouseEvent<SVGGElement>) {
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
      if ((movingTravellerId === 'startX' &&
        (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0)) ||
        (endX < startX && endIndex === lastIndex) ||
      (movingTravellerId === 'endX' &&
        (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) ||
        (endX > startX && endIndex === lastIndex))) {
        return true;
      }
      return false;
    };

    this.setState({
      [movingTravellerId]: prevValue + delta,
      brushMoveStartX: e.pageX,
    }, () => {
      if (onChange) {
        if (isFullGap()) {
          onChange(newIndex);
        }
      }
    });
  }

  updateScale(props: Props) {
    const { data, startIndex, endIndex, x, width, travellerWidth } = props;
    const len = data.length;
    this.scale = scalePoint<number>()
      .domain(_.range(0, len))
      .range([x, x + width - travellerWidth]);
    this.scaleValues = this.scale.domain().map(entry => this.scale(entry));
    return {
      isTextActive: false,
      isSlideMoving: false,
      isTravellerMoving: false,
      startX: this.scale(startIndex),
      endX: this.scale(endIndex),
    };
  }

  renderBackground() {
    const { x, y, width, height, fill, stroke } = this.props;

    return (
      <rect
        stroke={stroke}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  }

  renderPanorama() {
    const { x, y, width, height, data, children, padding } = this.props;
    const chartElement = Children.only(children);

    if (!chartElement) { return null; }

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

  renderTraveller(travellerX: number, id: BrushTravellerId) {
    const { y, travellerWidth, height, stroke } = this.props;
    const lineY = Math.floor(y + height / 2) - 1;
    const x = Math.max(travellerX, this.props.x);

    return (
      <Layer
        className="recharts-brush-traveller"
        onMouseEnter={this.handleEnterSlideOrTraveller}
        onMouseLeave={this.handleLeaveSlideOrTraveller}
        onMouseDown={this.travellerDragStartHandlers[id]}
        onTouchStart={this.travellerDragStartHandlers[id]}
        style={{ cursor: 'col-resize' }}
      >
        <rect
          x={x}
          y={y}
          width={travellerWidth}
          height={height}
          fill={stroke}
          stroke="none"
        />
        <line
          x1={x + 1}
          y1={lineY}
          x2={x + travellerWidth - 1}
          y2={lineY}
          fill="none"
          stroke="#fff"
        />
        <line
          x1={x + 1}
          y1={lineY + 2}
          x2={x + travellerWidth - 1}
          y2={lineY + 2}
          fill="none"
          stroke="#fff"
        />
      </Layer>
    );
  }

  renderSlide(startX: number, endX: number) {
    const { y, height, stroke } = this.props;

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
        x={Math.min(startX, endX)}
        y={y}
        width={Math.abs(endX - startX)}
        height={height}
      />
    );
  }

  renderText() {
    const { startIndex, endIndex, y, height, travellerWidth,
      stroke } = this.props;
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

    if (!data || !data.length || !isNumber(x) || !isNumber(y) || !isNumber(width) ||
      !isNumber(height) || width <= 0 || height <= 0) { return null; }

    const layerClass = classNames('recharts-brush', className);
    const isPanoramic = React.Children.count(children) === 1;
    const style = generatePrefixStyle('userSelect', 'none');

    return (
      <Layer
        className={layerClass}
        onMouseMove={this.handleDrag}
        onMouseLeave={this.handleLeaveWrapper}
        onMouseUp={this.handleDragEnd}
        onTouchEnd={this.handleDragEnd}
        onTouchMove={this.handleTouchMove}
        style={style}
      >
        {this.renderBackground()}
        {isPanoramic && this.renderPanorama()}
        {this.renderSlide(startX, endX)}
        {this.renderTraveller(startX, 'startX')}
        {this.renderTraveller(endX, 'endX')}
        {(isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) &&
          this.renderText()}
      </Layer>
    );
  }
}

export default Brush;
