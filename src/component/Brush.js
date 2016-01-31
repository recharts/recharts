import React, { PropTypes } from 'react';
import D3Scale from 'd3-scale';
import Layer from '../container/Layer';
import LodashUtils from '../util/LodashUtils';

class Brush extends React.Component {

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

    if (props.data && props.data.length) {
      const len = props.data.length;
      const startIndex = props.defaultStartIndex === +props.defaultStartIndex ? props.defaultStartIndex : 0;
      const endIndex = props.defaultEndIndex === +props.defaultEndIndex ? props.defaultEndIndex : len - 1;

      this.scale = D3Scale.point().domain(LodashUtils.range(0, len))
                    .range([props.x, props.x + props.width - props.travellerWidth]);
      this.scaleValues = this.scale.domain().map(entry => this.scale(entry));

      this.state = {
        isTextActive: false,
        isSlideMoving: false,
        isTravellerMoving: false,
        startIndex, endIndex,
        startX: this.scale(startIndex),
        endX: this.scale(endIndex),
      };
    } else {
      this.state = {};
    }
  }

  componentWillUnmount() {
    if (this._leaveTimer) {
      clearTimeout(this._leaveTimer);
      this._leaveTimer = null;
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

  handleMove(e) {
    if (this._leaveTimer) {
      clearTimeout(this._leaveTimer);
      this._leaveTimer = null;
    }

    if (this.state.isTravellerMoving) {
      this.handleTravellerMove(e);
    } else if (this.state.isSlideMoving) {
      this.handleSlideMove(e);
    }
  }

  handleUp() {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: false,
    });
  }

  handleLeaveWrapper() {
    if (this.state.isTravellerMoving || this.state.isSlideMoving) {
      this._leaveTimer = setTimeout(::this.handleUp, 1000);
    }
  }

  handleEnterSlideOrTraveller() {
    this.setState({
      isTextActive: true,
    });
  }

  handleLeaveSlideOrTraveller() {
    this.setState({
      isTextActive: false,
    });
  }

  handleSlideDown(e) {
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartX: e.pageX,
    });
  }

  handleSlideMove(e) {
    const { slideMoveStartX, startX, endX } = this.state;
    const { x, width, travellerWidth, onChange } = this.props;
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
        className="layer-brush"
        onMouseEnter={::this.handleEnterSlideOrTraveller}
        onMouseLeave={::this.handleLeaveSlideOrTraveller}
        onMouseDown={this.handleTravellerDown.bind(this, id)}
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
        <line x1={x + 1} y1={lineY} x2={x + travellerWidth - 1} y2={lineY} fill="none" stroke="#fff"/>
        <line x1={x + 1} y1={lineY + 2} x2={x + travellerWidth - 1} y2={lineY + 2} fill="none" stroke="#fff"/>
      </Layer>
    );
  }

  renderSlide(startX, endX) {
    const { y, height, stroke } = this.props;

    return (
      <rect
        onMouseEnter={::this.handleEnterSlideOrTraveller}
        onMouseLeave={::this.handleLeaveSlideOrTraveller}
        onMouseDown={::this.handleSlideDown}
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
    const { data, y, height, travellerWidth, stroke } = this.props;
    const { startIndex, endIndex, startX, endX } = this.state;
    const offset = 5;
    const style = {
      pointerEvents: 'none',
      fill: stroke,
    };

    return (
      <Layer className="recharts-brush-texts">
        <text textAnchor="end" style={style} dy={offset} x={Math.min(startX, endX) - offset} y={y + height / 2}>
          {data[startIndex]}
        </text>
        <text textAnchor="start" style={style} dy={offset} x={Math.max(startX, endX) + travellerWidth + offset} y={y + height / 2}>
          {data[endIndex]}
        </text>
      </Layer>
    );
  }

  render() {
    const { x, width, travellerWidth, data, className } = this.props;
    const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving } = this.state;

    if (!data || !data.length) {return null;}

    return (
      <Layer className={'recharts-layer-bursh ' + (className || '')}
        onMouseUp={::this.handleUp}
        onMouseMove={::this.handleMove}
        onMouseLeave={::this.handleLeaveWrapper}
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
