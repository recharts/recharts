import React, {PropTypes} from 'react';
import DOMUtils from '../util/DOMUtils';
import pureRender from 'pure-render-decorator';

@pureRender
class CartesianAxis extends React.Component {

  static displayName = 'CartesianAxis';

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    component: PropTypes.element,

    stroke: PropTypes.string,
    hasAxis: PropTypes.bool,
    hasTick: PropTypes.bool,

    minLabelGap: PropTypes.number,
    ticks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      coord: PropTypes.value,
    })),
    tickSize: PropTypes.number,
    tickValueFormat: PropTypes.func,
    interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {x: 0, y: 0, width: 0, height: 0},
    // 坐标轴所在的方位
    orient: 'bottom',
    // 刻度数据，格式为 {value: '展示的刻度值', coord: 12, size: 8}
    ticks: [],

    stroke: '#666',
    hasTick: true,
    hasAxis: true,

    minLabelGap: 5,
    // 刻度的大小
    tickSize: 6,
    interval: 'auto',
  };

  constructor(props) {
    super(props);
  }

  static getTicks(props) {
    const {ticks, viewBox, minLabelGap, orient, interval} = props;

    if (!ticks || !ticks.length) { return [];}

    return interval === +interval && interval >= 0
        ? CartesianAxis.getNumberIntervalTicks(ticks, interval)
        : CartesianAxis.getAutoIntervalTicks(ticks, viewBox, orient, minLabelGap);
  }

  static getNumberIntervalTicks(ticks, interval) {
    return ticks.filter((entry, i) => {
      return i % (interval + 1) === 0;
    });
  }

  static getAutoIntervalTicks(ticks, viewBox, orient, minLabelGap) {
    const {x, y, width, height} = viewBox;
    const sizeKey = (orient === 'top' || orient === 'bottom') ? 'width' : 'height';
    const sign = ticks.length >= 2 ? Math.sign(ticks[1].coord - ticks[0].coord) : 1;

    let pointer;

    if (sign === 1) {
      pointer = sizeKey === 'width' ? x : y;
    } else {
      pointer = sizeKey === 'width' ? x + width : y + height;
    }

    return ticks.filter(entry => {
      const labelSize = DOMUtils.getStringSize(entry.value)[sizeKey];
      const isShow = sign === 1 ? (entry.coord - labelSize / 2) >= pointer : (entry.coord + labelSize / 2) <= pointer;

      if (isShow) {
        pointer = entry.coord + sign * labelSize / 2 + minLabelGap;
      }

      return isShow;
    });
  }
  /**
   * 获取tick线段的端点坐标
   * @param  {Object} data tick数据
   * @return {Object} (x1, y1)为靠近文字的端点坐标，(x2, y2)为靠近轴的端点坐标
   */
  getTickLineCoord(data) {
    const {x, y, width, height, orient, tickSize} = this.props;
    let x1;
    let x2;
    let y1;
    let y2;

    const finalTickSize = data.tickSize || tickSize;

    switch (orient) {
    case 'top':
      x1 = x2 = data.coord;
      y1 = y + height - finalTickSize;
      y2 = y + height;
      break;
    case 'left':
      y1 = y2 = data.coord;
      x1 = x + width - finalTickSize;
      x2 = x + width;
      break;
    case 'right':
      y1 = y2 = data.coord;
      x1 = x + finalTickSize;
      x2 = x;
      break;
    default:
      x1 = x2 = data.coord;
      y1 = y + finalTickSize;
      y2 = y;
      break;
    }

    return {x1, y1, x2, y2};
  }

  getBaseline() {
    const {orient} = this.props;
    let baseline;

    switch (orient) {
    case 'top':
      baseline = 'auto';
      break;
    case 'bottom':
      baseline = 'text-before-edge';
      break;
    default:
      baseline = 'central';
      break;
    }

    return baseline;
  }

  getTickTextAnchor() {
    const {orient} = this.props;
    let textAnchor;

    switch (orient) {
    case 'left':
      textAnchor = 'end';
      break;
    case 'right':
      textAnchor = 'start';
      break;
    default:
      textAnchor = 'middle';
      break;
    }

    return textAnchor;
  }

  getDy() {
    const {orient} = this.props;
    let dy = 0;

    switch (orient) {
    case 'left':
    case 'right':
      dy = 8;
      break;
    case 'top':
      dy = -2;
      break;
    default:
      dy = 15;
      break;
    }

    return dy;
  }

  renderAxis() {
    const {x, y, width, height, orient, stroke} = this.props;
    let axis;

    switch (orient) {
    case 'top':
      axis = <line className="axis-line" stroke={stroke} x1={x} y1={y + height} x2={x + width} y2={y + height}/>;
      break;
    case 'left':
      axis = <line className="axis-line" stroke={stroke} x1={x + width} y1={y} x2={x + width} y2={y + height}/>;
      break;
    case 'right':
      axis = <line className="axis-line" stroke={stroke} x1={x} y1={y} x2={x} y2={y + height}/>;
      break;
    default:
      axis = <line className="axis-line" stroke={stroke} x1={x} y1={y} x2={x + width} y2={y}/>;
      break;
    }

    return axis;
  }

  renderTicks() {
    const {ticks, hasTick, stroke, component} = this.props;

    if (!ticks || !ticks.length) { return null; }

    const finalTicks = CartesianAxis.getTicks(this.props);

    const textAnchor = this.getTickTextAnchor();

    const items = finalTicks.map((entry, i) => {
      const lineCoord = this.getTickLineCoord(entry);

      return (
        <g className="axis-tick" key={'tick-' + i}>
          {hasTick && (
            <line
              className="tick-line"
              stroke={stroke}
              x1={lineCoord.x1}
              y1={lineCoord.y1}
              x2={lineCoord.x2}
              y2={lineCoord.y2}/>
          )}
          {component ? React.cloneElement(component, {
            x: lineCoord.x1,
            y: lineCoord.y1,
            ...entry,
          }) : (<text
            fill={stroke}
            dy={this.getDy(entry)}
            x={lineCoord.x1}
            y={lineCoord.y1}
            textAnchor={textAnchor}
            className="tick-value">{entry.value}</text>
          )}
        </g>
      );
    });

    return (
      <g className="axis-ticks">
        {items}
      </g>
    );
  }

  render() {
    const {hasAxis, width, height, ticks} = this.props;

    if (width <= 0 || height <= 0 || !ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-cartesian-axis">
        {hasAxis && this.renderAxis()}
        {this.renderTicks()}
      </g>
    );
  }
}

export default CartesianAxis;
