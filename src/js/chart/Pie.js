'use strict';

import React from 'react/addons';
import Sector from '../shape/Sector';
import PolarCoordinateMixin from '../mixin/PolarCoordinateMixin';

const Pie = React.createClass({
  mixins: [PolarCoordinateMixin],

  propTypes: {
    data: React.PropTypes.array,
    keys: React.PropTypes.object,
    minAngle: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      // 数据
      data: [],
      keys: {
        name: 'name',
        value: 'value'
      },
      minAngle: 0
    };
  },

  getSectors () {
    let {cx, cy, innerRadius, outerRadius, startAngle, data, keys, minAngle, clockWise} = this.props;

    let valueKey = keys.value,
        len = data.length,
        sectors = [],
        sum = 0,
        percent,
        _startAngle,
        _endAngle;

    data.forEach((entry) => {
      sum += entry[valueKey];
    });

    if (sum > 0) {

      data.forEach((entry, i) => {
        percent = entry[valueKey] / sum;

        if (i) {
          _startAngle = clockWise ? sectors[i - 1].endAngle : sectors[i - 1].startAngle;
        } else {
          _startAngle = startAngle;
        }

        _endAngle = _startAngle + (clockWise ? 1 : -1) * (minAngle + percent * (360 - len * minAngle));

        sectors.push({
          fill: entry.fill,
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          startAngle: clockWise ? _startAngle : _endAngle,
          endAngle: clockWise ? _endAngle : _startAngle
        });
      });
    }

    return sectors;
  },

  renderSectors () {
    let {cx, cy, innerRadius, outerRadius, data, keys, minAngle, clockWise, ...others} = this.props;
    let sectors = this.getSectors();

    return sectors.map((entry, i) => {
      return (
        <Sector
          {...others}
          cx={entry.cx}
          cy={entry.cy}
          fill={entry.fill}
          innerRadius={entry.innerRadius}
          outerRadius={entry.outerRadius}
          startAngle={entry.startAngle}
          endAngle={entry.endAngle}
          key={'sector-' + i}/>
      );
    });
  },

  render () {
    let data = this.props.data;

    if (!data || !data.length) {
      return;
    }

    return (
      <g className='layer-pie'>
        {this.renderSectors()}
      </g>
    );
  }
});

export default Pie;
