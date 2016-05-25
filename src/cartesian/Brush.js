/**
 * @fileOverview Brush
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { scalePoint } from 'd3-scale';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import _ from 'lodash';

@pureRender
class Brush extends Component {

  static displayName = 'Brush';

  static propTypes = {
    className: PropTypes.string,

    fill: PropTypes.string,
    stroke: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.array,
    tickFormatter: PropTypes.func,

    travellerWidth: PropTypes.number,
    defaultStartIndex: PropTypes.number,
    defaultEndIndex: PropTypes.number,

    onChange: PropTypes.func,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 40,
    travellerWidth: 5,
    fill: '#fff',
    stroke: '#666',
  };

  constructor(props) {
    super(props);

    this.travellerDownHandlers = {
      startX: this.handleTravellerDown.bind(this, 'startX'),
      endX: this.handleTravellerDown.bind(this, 'endX'),
    };

    if (props.data && props.data.length) {
      const xScale = this.setupXScale(props.data.length)

      this.state = {
        isTextActive: false,
        isSlideMoving: false,
        isTravellerMoving: false,
        ...xScale,
      };
    } else {
      this.state = {};
    }
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
  }
  
  resetXScaleState(dataLength) {
    this.setState(this.setupXScale(dataLength))
  }

  setupXScale(dataLength) {
    const startIndex = _.isNumber(this.props.defaultStartIndex) ? this.props.defaultStartIndex : 0;
    const endIndex = _.isNumber(this.props.defaultEndIndex) ? this.props.defaultEndIndex : dataLength - 1;
    
    this.scale = scalePoint().domain(_.range(0, dataLength))
                  .range([this.props.x, this.props.x + this.props.width - this.props.travellerWidth]);
    this.scaleValues = this.scale.domain().map(entry => this.scale(entry));
    
    return {
      startIndex, endIndex,
      startX: this.scale(startIndex),
      endX: this.scale(endIndex),
    }
  }

  getIndexInRange(range, x) {
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

  getIndex({ startX, endX }) {
    const min = Math.min(startX, endX);
    const max = Math.max(startX, endX);
    const minIndex = this.getIndexInRange(this.scaleValues, min);
    const maxIndex = this.getIndexInRange(this.scaleValues, max);

    return {
      startIndex: minIndex,
      endIndex: maxIndex,
    };
  }

  handleMove = (e) => {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    if (this.state.isTravellerMoving) {
      this.handleTravellerMove(e);
    } else if (this.state.isSlideMoving) {
      this.handleSlideMove(e);
    }
  };

  handleUp = () => {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: false,
    });
  };

  handleLeaveWrapper = () => {
    if (this.state.isTravellerMoving || this.state.isSlideMoving) {
      this.leaveTimer = setTimeout(this.handleUp, 1000);
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

  handleSlideDown = (e) => {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartX: e.pageX,
    });
  };
  
  handleSlideMove(e) {
    const { slideMoveStartX, startX, endX } = this.state;
    const { x, width, travellerWidth, onChange } = this.props;
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

    this.setState({
      startX: startX + delta,
      endX: endX + delta,
      slideMoveStartX: e.pageX,
      ...newIndex,
    }, () => {
      if (onChange) {
        onChange(newIndex);
      }
    });
  }

  handleTravellerDown(id, e) {
    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      movingTravellerId: id,
      brushMoveStartX: e.pageX,
    });
  }

  handleTravellerMove(e) {
    const { brushMoveStartX, movingTravellerId } = this.state;
    const prevValue = this.state[movingTravellerId];
    const { x, width, travellerWidth, onChange } = this.props;

    const params = { startX: this.state.startX, endX: this.state.endX };
    let delta = e.pageX - brushMoveStartX;

    if (delta > 0) {
      delta = Math.min(delta, x + width - travellerWidth - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, x - prevValue);
    }

    params[movingTravellerId] = prevValue + delta;
    const newIndex = this.getIndex(params);

    this.setState({
      [movingTravellerId]: prevValue + delta,
      brushMoveStartX: e.pageX,
      ...newIndex,
    }, () => {
      if (onChange) {
        onChange(newIndex);
      }
    });
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

  renderTraveller(startX, id) {
    const { y, travellerWidth, height, stroke } = this.props;
    const lineY = Math.floor(y + height / 2) - 1;
    const x = Math.max(startX, this.props.x);

    return (
      <Layer
        className="recharts-brush-traveller"
        onMouseEnter={this.handleEnterSlideOrTraveller}
        onMouseLeave={this.handleLeaveSlideOrTraveller}
        onMouseDown={this.travellerDownHandlers[id]}
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

  renderSlide(startX, endX) {
    const { y, height, stroke } = this.props;

    return (
      <rect
        className="recharts-brush-slide"
        onMouseEnter={this.handleEnterSlideOrTraveller}
        onMouseLeave={this.handleLeaveSlideOrTraveller}
        onMouseDown={this.handleSlideDown}
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
    const { data, y, height, travellerWidth, stroke, tickFormatter } = this.props;
    const { startIndex, endIndex, startX, endX } = this.state;
    const offset = 5;
    const style = {
      pointerEvents: 'none',
      fill: stroke,
    };

    const textStart = (tickFormatter) ? tickFormatter(data[startIndex]) : data[startIndex];
    const textEnd = (tickFormatter) ? tickFormatter(data[endIndex]) : data[endIndex];

    return (
      <Layer className="recharts-brush-texts">
        <text
          textAnchor="end"
          style={style}
          dy={offset}
          x={Math.min(startX, endX) - offset}
          y={y + height / 2}
        >
          {textStart}
        </text>
        <text
          textAnchor="start"
          style={style}
          dy={offset}
          x={Math.max(startX, endX) + travellerWidth + offset}
          y={y + height / 2}
        >
          {textEnd}
        </text>
      </Layer>
    );
  }

  render() {
    const { x, width, travellerWidth, data, className } = this.props;
    const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving } = this.state;

    if (!data || !data.length) { return null; }

    const layerClass = classNames('recharts-bursh', className);

    return (
      <Layer
        className={layerClass}
        onMouseUp={this.handleUp}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeaveWrapper}
      >
        {this.renderBackground()}
        {this.renderSlide(startX, endX)}
        {this.renderTraveller(startX, 'startX')}
        {this.renderTraveller(endX, 'endX')}
        {(isTextActive || isSlideMoving || isTravellerMoving) && this.renderText()}
      </Layer>
    );
  }
}

export default Brush;
