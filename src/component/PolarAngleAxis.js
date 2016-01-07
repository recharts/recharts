/**
 * @fileOverview 极坐标系中沿着极径的刻度
 * @author xile611
 * @Date 2015-08-28
 */
import React from 'react';
import createFragment from 'react-addons-create-fragment';

const PropTypes = React.PropTypes;
const RADIAN = Math.PI / 180;
const eps = 1e-5;
const offset = 8;

class PolarAngleAxis extends React.Component {

  static displayName = 'PolarAngleAxis';

  static propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    ticks: PropTypes.array,
    tickSize: PropTypes.number,
    tickValueFormat: PropTypes.func,
    orientation: PropTypes.oneOf(['inner', 'outer']),
    concentricPathType: PropTypes.oneOf(['polygon', 'circle']),
  };

  static defaultProps = {
    // 坐标轴所在的方位
    orientation: 'inner',
    // 刻度数据，格式为 {value: "展示的刻度值", angle: 12, size: 8}
    ticks: [],
    // 刻度的大小
    tickSize: 6,
  };

  constructor(props) {
    super(props);
  }
  /**
   * 获取tick线段的端点坐标
   * @param  {Object} data tick数据
   * @return {Object} (x0, y0) 为文字的起点坐标，(x1, y1)为靠近文字的端点坐标，(x2, y2)为靠近轴的端点坐标
   */
  getTickLineCoord(data) {
    const { cx, cy, outerRadius, orientation, tickSize } = this.props;
    const sin = Math.sin(-data.angle * RADIAN);
    const cos = Math.cos(-data.angle * RADIAN);
    let x0;
    let x1;
    let x2;
    let y0;
    let y1;
    let y2;

    const finalTickSize = data.tickSize || tickSize || 6;

    x2 = cx + outerRadius * cos;
    y2 = cy + outerRadius * sin;

    switch (orientation) {
      case 'inner':
        x0 = cx + (outerRadius - finalTickSize - offset) * cos;
        y0 = cy + (outerRadius - finalTickSize - offset) * sin;

        x1 = cx + (outerRadius - finalTickSize) * cos;
        y1 = cy + (outerRadius - finalTickSize) * sin;
        break;
      default:
        x0 = cx + (outerRadius + finalTickSize + offset) * cos;
        y0 = cy + (outerRadius + finalTickSize + offset) * sin;

        x1 = cx + (outerRadius + finalTickSize) * cos;
        y1 = cy + (outerRadius + finalTickSize) * sin;
        break;
    }

    return { x0, y0, x1, y1, x2, y2 };
  }
  /**
   * 计算文字的对齐方式
   * @param  {Object} data 刻度数据
   * @return {String} middle - 居中对齐，start - 左对齐，right - 右对齐
   */
  getTickTextAnchor(data) {
    const orientation = this.props.orientation;
    const cos = Math.cos(-data.angle * RADIAN);
    let textAnchor;

    if (cos > eps) {
      textAnchor = orientation === 'outer' ? 'start' : 'end';
    } else if (cos < -eps) {
      textAnchor = orientation === 'outer' ? 'end' : 'start';
    } else {
      textAnchor = 'middle';
    }

    return textAnchor;
  }
  /**
   * 绘制刻度
   * @return {SVGElement} [description]
   */
  renderTicks() {
    const { ticks } = this.props;

    if (!ticks || !ticks.length) { return null; }

    const items = {};

    ticks.reduce((result, entry, i) => {
      const lineCoord = this.getTickLineCoord(entry);
      const textAnchor = this.getTickTextAnchor(entry);

      items['tick-' + i] = (
        <g className="axis-tick" key={'tick-' + i}>
          <line
            className="tick-line"
            stroke="#ff7300"
            x1={lineCoord.x1}
            y1={lineCoord.y1}
            x2={lineCoord.x2}
            y2={lineCoord.y2}
          />
          <text
            x={lineCoord.x0}
            y={lineCoord.y0}
            textAnchor={textAnchor}
            className="tick-value"
          >
            {entry.value}
          </text>
        </g>
      );
    }, items);

    return (
      <g className="axis-ticks">
        {createFragment(items)}
      </g>
    );
  }

  render() {
    const { ticks } = this.props;

    if (!ticks || !ticks.length) {
      return null;
    }

    return (
      <g className="layer-axis layer-polar-angle-axis">
        {this.renderTicks()}
      </g>
    );
  }
}

export default PolarAngleAxis;
