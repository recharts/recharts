import React, {PropTypes} from 'react';
import {ordinal} from 'd3-scale';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Layer from '../container/Layer';
import LodashUtils from '../util/LodashUtils';

class Brush extends React.Component {
  constructor(props) {
    super(props);

    if (props.data && props.data.length) {
      const len = props.data.length;
      const startIndex = props.start === +props.start ? props.start : 0;
      const endIndex = props.end === +props.end ? props.end : len - 1;

      this.scale = ordinal().domain(LodashUtils.range(0, len))
                    .rangePoints([props.x, props.x + props.width - props.burshWidth]);


      this.state = {
        isSlideMoving: false,
        isBrushMoving: false,
        startIndex, endIndex,
        startX: this.scale(startIndex),
        endX: this.scale(endIndex)
      };
    } else {
      this.state = {};
    }
  }

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

    burshWidth: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number,

    onBrushChange: PropTypes.func
  };

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 40,
    burshWidth: 5,
    fill: '#fff',
    stroke: '#8884d8'
  };

  getIndexInRange(range, x) {
    const len = range.length;
    let start = 0;
    let end = len - 1;

    while (end - start > 1) {
      let middle = Math.floor((start + end) / 2);

      if (range[middle] > x) {
        end = middle;
      } else {
        start = middle;
      }
    }

    return x >= range[end] ? end : start;
  }

  getIndex({startX, endX}) {
    const min = Math.min(startX, endX);
    const max = Math.max(startX, endX);
    const range = this.scale.range();
    const minIndex = this.getIndexInRange(range, min);
    const maxIndex = this.getIndexInRange(range, max);

    return {
      startIndex: minIndex,
      endIndex: maxIndex
    };
  }

  handleMove = (e) => {
    if (this.state.isBrushMoving) {
      this.handleBrushMove(e);
    } else if (this.state.isSlideMoving) {
      this.handleSlideMove(e)
    }
  }

  handleUp = () => {
    this.setState({
      isBrushMoving: false,
      isSlideMoving: false
    });
  }

  handleSlideDown = (e) => {
    this.setState({
      isBrushMoving: false,
      isSlideMoving: true,
      slideMoveStartX: e.pageX
    });
  }

  handleSlideMove = (e) => {
    const {slideMoveStartX, startX, endX} = this.state;
    const {x, width, burshWidth, onBrushChange} = this.props;
    let delta = e.pageX - slideMoveStartX;

    if (delta > 0) {
      delta = Math.min(delta, x + width - burshWidth - endX, x + width - burshWidth - startX);
    } else if (delta < 0) {
      delta = Math.max(delta, x - startX, x - endX);
    }
    const newIndex = this.getIndex({
      startX: startX + delta,
      endX: endX + delta
    });

    this.setState({
      startX: startX + delta,
      endX: endX + delta,
      slideMoveStartX: e.pageX,
      ...newIndex
    }, () => {
       onBrushChange && onBrushChange(newIndex);
    });
  }

  handleBrushDown = (id, e) => {
    this.setState({
      isSlideMoving: false,
      isBrushMoving: true,
      movingBrushId: id,
      brushMoveStartX: e.pageX
    });
  }

  handleBrushMove = (e) => {
    const {brushMoveStartX, movingBrushId} = this.state;
    const prevValue = this.state[movingBrushId];
    const {x, width, burshWidth, onBrushChange} = this.props;

    let params = {startX: this.state.startX, endX: this.state.endX};
    let delta = e.pageX - brushMoveStartX;

    if (delta > 0) {
      delta = Math.min(delta, x + width - burshWidth - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, x - prevValue);
    }

    params[movingBrushId] = prevValue + delta;
    const newIndex = this.getIndex(params);

    this.setState({
      [movingBrushId]: prevValue + delta,
      brushMoveStartX: e.pageX,
      ...newIndex
    }, () => {
      onBrushChange && onBrushChange(newIndex);
    });
  }

  renderBackground () {
    const {x, y, width, height, fill, stroke} = this.props;

    return (
      <rect
        stroke={stroke}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}/>
    );
  }

  renderBrush (startX, id) {
    const {y, width, burshWidth, height, stroke} = this.props;
    const lineY = Math.floor(y + height / 2) - 1;
    const x = Math.max(startX, this.props.x);

    return (
      <Layer
        className='layer-brush'
        onMouseDown={this.handleBrushDown.bind(null, id)}
        style={{cursor: 'col-resize'}}>
        <rect
          x={x}
          y={y}
          width={burshWidth}
          height={height}
          fill={stroke}
          stroke='none'/>
        <line x1={x + 1} y1={lineY} x2={x + burshWidth - 1} y2={lineY} fill='none' stroke='#fff'/>
        <line x1={x + 1} y1={lineY + 2} x2={x + burshWidth - 1} y2={lineY + 2} fill='none' stroke='#fff'/>
      </Layer>
    );
  }

  renderSlide (startX, endX) {
    const {x, y, width, height, color} = this.props;

    return (
      <rect
        onMouseDown={this.handleSlideDown}
        style={{cursor: 'move'}}
        stroke='none'
        fill='#e5e5f7'
        x={Math.min(startX, endX)}
        y={y}
        width={Math.abs(endX - startX)}
        height={height}/>
    );
  }

  renderText (scale) {
    const {data, y, height, burshWidth, stroke} = this.props;
    const {startIndex, endIndex, startX, endX} = this.state;
    const offset = 5;
    const style = {
      pointerEvents: 'none',
      fill: stroke
    };

    return (
      <Layer className='recharts-brush-texts'>
        <text textAnchor='end' style={style} dy={offset} x={Math.min(startX, endX) - offset} y={y + height / 2}>
          {data[startIndex]}
        </text>
        <text textAnchor='start' style={style} dy={offset} x={Math.max(startX, endX) + burshWidth + offset} y={y + height / 2}>
          {data[endIndex]}
        </text>
      </Layer>
    );
  }

  render () {
    const {x, y, width, height, burshWidth, data, className} = this.props;
    const {startX, endX, isBrushMoving, isSlideMoving} = this.state;

    if (!data || !data.length) {return null;}

    const scale = ordinal().domain(LodashUtils.range(0, data.length))
                          .rangeRoundBands([x, x + width - burshWidth]);

    return (
      <Layer className={'layer-recharts-bursh ' + (className || '')}
        onMouseUp={this.handleUp}
        onMouseMove={this.handleMove}>
        {this.renderBackground()}
        {this.renderSlide(startX, endX)}
        {this.renderBrush(startX, 'startX')}
        {this.renderBrush(endX, 'endX')}
        {this.renderText(scale)}
      </Layer>
    );
  }
}

export default Brush;
