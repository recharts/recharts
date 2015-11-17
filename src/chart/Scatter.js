/**
 * @fileOverview 散点图
 */

import React, {PropTypes} from 'react';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import CartesianCoordinateMixin from '../mixin/CartesianCoordinateMixin';

const Scatter = React.createClass({
  mixins: [CartesianCoordinateMixin],

  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      r: PropTypes.number,
      value: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  },

  getDefaultProps () {
    return {
      // 数据
      data: [],
      onClick () {},
      onMouseEnter () {},
      onMouseLeave () {}
    };
  },

  renderCircles () {
    let {data, className,  ...others} = this.props;

    return data.map((entry, i) => {
      let {value, ...rest} = entry;

      return (
        <circle
          {...others}
          {...rest}
          key={'circle-' + i}/>
      );
    });
  },

  render () {
    let {data, className} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <Layer className={'layer-scatter ' + (className || '')}>
        {this.renderCircles()}
      </Layer>
    );
  }
});

export default Scatter;
