/**
 * @fileOverview 饼图
 */
import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Triangle from '../shape/Triangle';

const RADIAN = Math.PI / 180;
const Triangles = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    labelSize: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      value: PropTypes.number
    })),
    className: PropTypes.string,
    minAngle: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      labelSize: 30,
      width: 0,
      height: 0,
      // 数据
      data: [],
      minAngle: 0,
      onMouseEnter () {},
      onMouseLeave () {},
      onClick () {}
    };
  },

  getTriangles () {
    const {width, height, data, overlapRatio, baseAngle, ...others} = this.props;
    const maxValue = data.reduce((result, entry) => {
        return Math.max(entry.value, result);
    }, -Infinity);

    if (maxValue <= 0) {return ;}

    let prevRatio = Infinity;
    const sumRatio = data.reduce((result, entry, index) => {
      const currentRatio = Math.sqrt(Math.abs(entry.value) / maxValue);
      prevRatio = currentRatio;

      return result + currentRatio - Math.min(prevRatio, currentRatio) * (index ? overlapRatio : 0);
    }, 0);
    const tan = Math.tan(RADIAN * baseAngle);
    const maxLength = Math.min(width / sumRatio, 2 * height / tan);

    let prevLength = Infinity;
    let curX = 0;
    return data.map((entry, index) => {
      const baseLength = Math.floor(maxLength * Math.sqrt(Math.abs(entry.value) / maxValue));
      curX -= index ? Math.min(prevLength, baseLength) * overlapRatio : 0;
      const x = curX;
      curX += baseLength;

      return {
        ...entry,
        baseLength,
        height: 0.5 * baseLength * tan,
        x
      };
    });
  },

  handleSectorEnter (data, e) {
    this.props.onMouseEnter(data, e);
  },

  renderTriangles (data) {
    const {height} = this.props;

    return data.map((entry, i) => {
      const points = [{x: entry.x, y: height}, {x: entry.x + entry.baseLength, y: height}, {
        x: entry.x + entry.baseLength * 0.5, y: height - entry.height
      }];

      return (
        <Triangle
          {...entry}
          points={points}
          key={'triangle-' + i}/>
      );
    });
  },

  renderLabels (data) {
    const {height, labelSize} = this.props;

    return data.map((entry, i) => {
      return (
        <g className='triangle-label' key={'label-' + i}>
          <line
            stroke={entry.stroke}
            x1={entry.x + entry.baseLength / 2}
            y1={height - entry.height}
            x2={entry.x + entry.baseLength / 2}
            y2={height - entry.height - labelSize}/>
          <text
            dy={-10}
            textAnchor='middle'
            x={entry.x + entry.baseLength / 2}
            y={height - entry.height - labelSize}>
            {entry.name + ' : ' + entry.value}
          </text>
        </g>
      );
    });
  },

  render () {
    const {data, className} = this.props;

    if (!data || !data.length) {
      return;
    }
    const trianglesData = this.getTriangles();

    return (
      <g className={'layer-triangle ' + (className || '')}>
        {this.renderTriangles(trianglesData)}
        {this.renderLabels(trianglesData)}
      </g>
    );
  }
});

export default Triangles;
