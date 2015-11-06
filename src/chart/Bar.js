/**
 * @fileOverview 柱图
 */
'use strict';

import React, {PropTypes} from 'react/addons';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import CartesianCoordinateMixin from '../mixin/CartesianCoordinateMixin';

const Bar = React.createClass({
  mixins: [CartesianCoordinateMixin],

  propTypes: {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDashArray: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.array
              ]),
      value: PropTypes.value
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

  renderRectangles () {
    let {data, className, ...others} = this.props;

    return data.map((entry, i) => {
      let {value, ...rest} = entry;

      return (
        <Rectangle
          {...others}
          {...rest}
          key={'rectangle-' + i}/>
      );
    });
  },

  render () {
    let {data, className} = this.props;

    if (!data || !data.length) {
      return;
    }

    return (
      <Layer className={'layer-bar ' + (className || '')}>
        {this.renderRectangles()}
      </Layer>
    );
  }
});

export default Bar;
