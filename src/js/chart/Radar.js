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
      }
    };
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
