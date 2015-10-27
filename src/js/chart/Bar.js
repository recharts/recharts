/**
 * @fileOverview 柱图
 */
'use strict';

import React, {PropTypes} from 'react/addons';
import Rectangle from '../shape/Rectangle';
import CartesianCoordinateMixin from '../mixin/CartesianCoordinateMixin';

const Bar = React.createClass({
  mixins: [CartesianCoordinateMixin],

  propTypes: {
    data: PropTypes.array,
    scale: PropTypes.func.isRequired
  },

  getDefaultProps () {
    return {
      // 数据
      data: []
    };
  },

  renderRectangles () {

  },

  render () {
    let data = this.props.data;

    if (!data || !data.length) {
      return;
    }

    return (
      <g className='layer-bar'>
        {this.renderRectangles()}
      </g>
    );
  }
});

export default Bar;
