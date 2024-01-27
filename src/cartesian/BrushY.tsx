/**
 * @fileOverview BrushY
 */
import React, { PureComponent, Children, ReactElement, TouchEvent, SVGProps } from 'react';
import clsx from 'clsx';
import { scalePoint, ScalePoint } from 'victory-vendor/d3-scale';
import isFunction from 'lodash/isFunction';
import range from 'lodash/range';
import { Layer } from '../container/Layer';
import { isNumber } from '../util/DataUtils';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import { Padding, DataKey } from '../util/types';
import { filterProps } from '../util/ReactUtils';

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

  ariaLabel?: string;

  height: number;
  travellerHeight?: number;
  traveller?: BrushTravellerType;
  gap?: number;
  padding?: Padding;

  dataKey?: DataKey<any>;
  startIndex?: number;
  endIndex?: number;

  children?: ReactElement;

  onChange?: (newIndex: BrushStartEndIndex) => void;
  onDragEnd?: (newIndex: BrushStartEndIndex) => void;
  leaveTimeOut?: number;
}

export type Props = Omit<SVGProps<SVGElement>, 'onChange'> & BrushProps;

type BrushTravellerId = 'startY' | 'endY';

interface State {
  isTravellerMoving?: boolean;
  isTravellerFocused?: boolean;
  isSlideMoving?: boolean;
  startY?: number;
  endY?: number;
  slideMoveStartY?: number;
  movingTravellerId?: BrushTravellerId;
  brushMoveStartY?: number;

  scale?: ScalePoint<number>;
  scaleValues?: number[];

  prevData?: any[];
  prevHeight?: number;
  prevY?: number;
  prevTravellerHeight?: number;
  prevUpdateId?: string | number;
}

const createScale = ({
  startIndex,
  endIndex,
  y,
  height,
  travellerHeight,
}: {
  startIndex?: number;
  endIndex?: number;
  y?: number;
  height?: number;
  travellerHeight?: number;
}) => {
  if (endIndex <= 0) {
    return {};
  }

  const len = endIndex + 1;
  const scale = scalePoint<number>()
    .domain(range(0, len))
    .range([y, y + height - travellerHeight]);
  const scaleValues = scale.domain().map(entry => scale(entry));

  return {
    isSlideMoving: false,
    isTravellerMoving: false,
    isTravellerFocused: false,
    startY: scale(startIndex),
    endY: scale(endIndex),
    scale,
    scaleValues,
  };
};

const isTouch = (e: TouchEvent<SVGElement> | React.MouseEvent<SVGElement>): e is TouchEvent<SVGElement> =>
  (e as TouchEvent<SVGElement>).changedTouches && !!(e as TouchEvent<SVGElement>).changedTouches.length;

export class BrushY extends PureComponent<Props, State> {
  static displayName = 'BrushY';

  static defaultProps = {
    x: 0,
    y: 10,
    width: 40,
    height: 200,
    travellerHeight: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1000,
    startIndex: 0,
    endIndex: 100,
  };

  constructor(props: Props) {
    super(props);

    this.travellerDragStartHandlers = {
      startY: this.handleTravellerDragStart.bind(this, 'startY'),
      endY: this.handleTravellerDragStart.bind(this, 'endY'),
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
    const lineX = Math.floor(x + width / 2) - 1;

    return (
      <>
        <rect x={x} y={y} width={width} height={height} fill={stroke} stroke="none" />
        <line x1={lineX} y1={y + 1} x2={lineX} y2={y + height - 1} fill="none" stroke="#fff" />
        <line x1={lineX + 2} y1={y + 1} x2={lineX + 2} y2={y + height - 1} fill="none" stroke="#fff" />
      </>
    );
  }

  static renderTraveller(option: BrushTravellerType, props: any) {
    let rectangle;

    if (React.isValidElement(option)) {
      rectangle = React.cloneElement(option, props);
    } else if (isFunction(option)) {
      rectangle = option(props);
    } else {
      rectangle = BrushY.renderDefaultTraveller(props);
    }

    return rectangle;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    const { data, height, y, travellerHeight, updateId, startIndex, endIndex } = nextProps;

    if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
      return {
        prevData: data,
        prevTravellerHeight: travellerHeight,
        prevUpdateId: updateId,
        prevY: y,
        prevHeight: height,
        ...(endIndex > 0
          ? createScale({ height, y, travellerHeight, startIndex, endIndex })
          : { scale: null, scaleValues: null }),
      };
    }
    if (
      prevState.scale &&
      (height !== prevState.prevHeight || y !== prevState.prevY || travellerHeight !== prevState.prevTravellerHeight)
    ) {
      prevState.scale.range([y, y + height - travellerHeight]);

      const scaleValues = prevState.scale.domain().map(entry => prevState.scale(entry));

      return {
        prevData: data,
        prevTravellerHeight: travellerHeight,
        prevUpdateId: updateId,
        prevY: y,
        prevHeight: height,
        startY: prevState.scale(nextProps.startIndex),
        endY: prevState.scale(nextProps.endIndex),
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

  static getIndexInRange(valueRange: number[], x: number) {
    const len = valueRange.length;
    let start = 0;
    let end = len - 1;

    while (end - start > 1) {
      const middle = Math.floor((start + end) / 2);

      if (valueRange[middle] > x) {
        end = middle;
      } else {
        start = middle;
      }
    }

    return x >= valueRange[end] ? end : start;
  }

  getIndex({ startY, endY }: { startY: number; endY: number }) {
    const { scaleValues } = this.state;
    const { gap, endIndex } = this.props;
    const lastIndex = endIndex - 1;
    const min = Math.min(startY, endY);
    const max = Math.max(startY, endY);
    const minIndex = BrushY.getIndexInRange(scaleValues, min);
    const maxIndex = BrushY.getIndexInRange(scaleValues, max);
    return {
      startIndex: minIndex - (minIndex % gap),
      endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - (maxIndex % gap),
    };
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
    this.setState(
      {
        isTravellerMoving: false,
        isSlideMoving: false,
      },
      () => {
        const { endIndex, onDragEnd, startIndex } = this.props;
        onDragEnd?.({
          endIndex,
          startIndex,
        });
      },
    );
    this.detachDragEndListener();
  };

  handleLeaveWrapper = () => {
    if (this.state.isTravellerMoving || this.state.isSlideMoving) {
      this.leaveTimer = window.setTimeout(this.handleDragEnd, this.props.leaveTimeOut);
    }
  };

  handleSlideDragStart = (e: TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartY: event.pageY,
    });

    this.attachDragEndListener();
  };

  handleSlideDrag(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { slideMoveStartY, startY, endY } = this.state;
    const { y, height, travellerHeight, startIndex, endIndex, onChange } = this.props;
    let delta = e.pageY - slideMoveStartY;

    if (delta > 0) {
      delta = Math.min(delta, y + height - travellerHeight - endY, y + height - travellerHeight - startY);
    } else if (delta < 0) {
      delta = Math.max(delta, y - startY, y - endY);
    }
    const newIndex = this.getIndex({
      startY: startY + delta,
      endY: endY + delta,
    });

    if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
      onChange(newIndex);
    }

    this.setState({
      startY: startY + delta,
      endY: endY + delta,
      slideMoveStartY: e.pageY,
    });
  }

  handleTravellerDragStart(id: BrushTravellerId, e: React.MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) {
    const event = isTouch(e) ? e.changedTouches[0] : e;

    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      movingTravellerId: id,
      brushMoveStartY: event.pageY,
    });

    this.attachDragEndListener();
  }

  handleTravellerMove(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { brushMoveStartY, movingTravellerId, endY, startY } = this.state;
    const prevValue = this.state[movingTravellerId];

    const { y, height, travellerHeight, onChange, gap } = this.props;
    const params = { startY: this.state.startY, endY: this.state.endY };

    let delta = e.pageY - brushMoveStartY;
    if (delta > 0) {
      delta = Math.min(delta, y + height - travellerHeight - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, y - prevValue);
    }

    params[movingTravellerId] = prevValue + delta;

    const newIndex = this.getIndex(params);
    const { startIndex, endIndex } = newIndex;
    const isFullGap = () => {
      const lastIndex = endIndex - 1;
      if (
        (movingTravellerId === 'startY' && (endY > startY ? startIndex % gap === 0 : endIndex % gap === 0)) ||
        (endY < startY && endIndex === lastIndex) ||
        (movingTravellerId === 'endY' && (endY > startY ? endIndex % gap === 0 : startIndex % gap === 0)) ||
        (endY > startY && endIndex === lastIndex)
      ) {
        return true;
      }
      return false;
    };

    this.setState(
      {
        [movingTravellerId]: prevValue + delta,
        brushMoveStartY: e.pageY,
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

  handleTravellerMoveKeyboard(direction: 1 | -1, id: BrushTravellerId) {
    // scaleValues are a list of coordinates. For example: [65, 250, 435, 620, 805, 990].
    const { scaleValues, startY, endY } = this.state;
    // currentScaleValue refers to which coordinate the current traveller should be placed at.
    const currentScaleValue = this.state[id];

    const currentIndex = scaleValues.indexOf(currentScaleValue);
    if (currentIndex === -1) {
      return;
    }

    const newIndex = currentIndex + direction;
    if (newIndex === -1 || newIndex >= scaleValues.length) {
      return;
    }

    const newScaleValue = scaleValues[newIndex];

    // Prevent travellers from being on top of each other or overlapping
    if ((id === 'startY' && newScaleValue >= endY) || (id === 'endY' && newScaleValue <= startY)) {
      return;
    }

    this.setState(
      {
        [id]: newScaleValue,
      },
      () => {
        this.props.onChange(
          this.getIndex({
            startY: this.state.startY,
            endY: this.state.endY,
          }),
        );
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

  renderTravellerLayer(travellerY: number, id: BrushTravellerId) {
    const { x, travellerHeight, width, traveller, ariaLabel, startIndex, endIndex } = this.props;
    const y = Math.max(travellerY, this.props.y);
    const travellerProps = {
      ...filterProps(this.props),
      x,
      y,
      width,
      height: travellerHeight,
    };

    const ariaLabelBrush = ariaLabel || `Min value: ${startIndex}, Max value: ${endIndex}`;

    return (
      <Layer
        tabIndex={0}
        role="slider"
        aria-label={ariaLabelBrush}
        aria-valuenow={travellerY}
        className="recharts-brush-traveller"
        onMouseDown={this.travellerDragStartHandlers[id]}
        onTouchStart={this.travellerDragStartHandlers[id]}
        onKeyDown={e => {
          if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          this.handleTravellerMoveKeyboard(e.key === 'ArrowRight' ? 1 : -1, id);
        }}
        onFocus={() => {
          this.setState({ isTravellerFocused: true });
        }}
        onBlur={() => {
          this.setState({ isTravellerFocused: false });
        }}
        style={{ cursor: 'row-resize' }}
      >
        {BrushY.renderTraveller(traveller, travellerProps)}
      </Layer>
    );
  }

  renderSlide(startY: number, endY: number) {
    const { x, width, stroke, travellerHeight } = this.props;
    const y = Math.min(startY, endY) + travellerHeight;
    const height = Math.max(Math.abs(endY - startY) - travellerHeight, 0);

    return (
      <rect
        className="recharts-brush-slide"
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

  render() {
    const { data, endIndex, className, children, x, y, width, height } = this.props;
    const { startY, endY } = this.state;

    if (
      endIndex <= 0 ||
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

    const layerClass = clsx('recharts-brush', className);
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
        {this.renderSlide(startY, endY)}
        {this.renderTravellerLayer(startY, 'startY')}
        {this.renderTravellerLayer(endY, 'endY')}
      </Layer>
    );
  }
}
