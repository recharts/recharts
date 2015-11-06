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
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      strokeWidth: 1,
      // 数据
      data: [],
      onClick () {},
      onMouseEnter () {},
      onMouseLeave () {}
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
    let {data, className, ...other} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <Layer className={'recharts-line ' + (className || '')}>
        <Curve
          {...other}
          fill='none'
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          onClick={this.props.onClick}
          points={data}/>
        {this.renderDots()}
      </Layer>
    );
  }
});

export default Line;
