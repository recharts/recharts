/**
 * @fileOverview 饼图
 */

'use strict';

import React, {PropTypes} from 'react/addons';
import Curve from '../shape/Curve';
import Layer from '../container/Layer';
import CartesianCoordinateMixin from '../mixin/CartesianCoordinateMixin';

const Line = React.createClass({
  mixins: [CartesianCoordinateMixin],

  propTypes: {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDashArray: PropTypes.string,
    className: PropTypes.string,
    data: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      // 数据
      data: []
    };
  },

  renderDots () {
    let {data, ...other} = this.props;

    const dots = data.map((entry, i) => {
      return <circle {...other} key={'dot-' + i} cx={entry.x} cy={entry.y} r={3}/>
    });

    return <Layer className='layer-line-dots'>{dots}</Layer>
  },

  render () {
    let {data, ...other} = this.props;

    if (!data || !data.length) {
      return;
    }

      console.log(other);
    return (
      <Layer>
        <Curve {...other} fill='none' points={data}/>
        {this.renderDots()}
      </Layer>
    );
  }
});

export default Line;
