/**
 * @fileOverview 饼图
 */
import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Sector from '../shape/Sector';

const Pie = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
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
      // 极点的横坐标
      cx: 0,
      // 极点的纵坐标
      cy: 0,
      // 起始角度
      startAngle: 0,
      // 内径
      innerRadius: 0,
      // 外径
      outerRadius: 0,
      // 极坐标一般取逆时针为正方向，但饼图等一般默认为顺时针
      clockWise: true,
      // 数据
      data: [],
      minAngle: 0,
      onMouseEnter () {},
      onMouseLeave () {},
      onClick () {}
    };
  },

  getSectors () {
    const {cx, cy, innerRadius, outerRadius, startAngle, data, minAngle, clockWise} = this.props;
    const len = data.length;

    const sum = data.reduce((result, entry) => {
      return result + entry.value
    }, 0);

    let sectors = [], prev;

    if (sum > 0) {
      sectors = data.map((entry, i) => {
        const percent = entry.value / sum;
        let _startAngle, _endAngle;

        if (i) {
          _startAngle = clockWise ? prev.endAngle : prev.startAngle;
        } else {
          _startAngle = startAngle;
        }

        _endAngle = _startAngle + (clockWise ? 1 : -1) * (minAngle + percent * (360 - len * minAngle));

        prev = {
          ...entry,
          fill: entry.fill,
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          startAngle: clockWise ? _startAngle : _endAngle,
          endAngle: clockWise ? _endAngle : _startAngle
        };

        return prev;
      });
    }

    return sectors;
  },

  handleSectorEnter (data, e) {
    this.props.onMouseEnter(data, e);
  },

  renderSectors () {
    const sectors = this.getSectors();
    const {onMouseEnter, onMouseLeave, onClick} = this.props;

    return sectors.map((entry, i) => {
      return (
        <Sector
          {...entry}
          onMouseEnter={this.handleSectorEnter.bind(null, entry)}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          key={'sector-' + i}/>
      );
    });
  },

  render () {
    const {data, className} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <g className={'layer-pie ' + (className || '')}>
        {this.renderSectors()}
      </g>
    );
  }
});

export default Pie;
