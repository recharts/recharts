'use strict';

import React from 'react/addons';
import ShapeMixin from '../mixin/ShapeMixin';

const Rectangle = React.createClass({

  mixins: [ShapeMixin],

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    radius: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.array
          ])
  },

  getDefaultProps () {
    return {
      // 矩形左上角的横坐标
      x: 0,
      // 矩形左上角的纵坐标
      y: 0,
      // 宽度
      width: 0,
      // 高度
      height: 0,
      // 圆角半径
      // 当radius为数值类型时，矩形的四个角的圆角半径都设置为该值
      // 当radius为数组时，分别设置左上角、右上角、右下角、左下角的圆角半径
      radius: 0
    };
  },

  getPath (x, y, width, height, radius) {
    let maxRadius = Math.min(width / 2, height / 2),
        newRadius = [],
        path;

    if (maxRadius > 0 && radius instanceof Array) {
      for (let i = 0, len = 4; i < len; i++) {
        newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
      }

      path = `M${x},${y + newRadius[0]}`;

      if (newRadius[0] > 0) {
<<<<<<< HEAD
        path += `A ${newRadius[0]},${newRadius[0]},0,0,1,${x + newRadius[0]},${y}`;
=======
        path += `A ${newRadius[0]},${newRadius},0,0,1,${x + newRadius[0]},${y}`;
>>>>>>> d8c98793939ca2388810345112b3f74cac6f8380
      }

      path += `L ${x + width - newRadius[1]},${y}`;

      if (newRadius[1] > 0) {
        path += `A ${newRadius[1]},${newRadius[1]},0,0,1,${x + width},${y + newRadius[1]}`;
      }
      path += `L ${x + width},${y + height - newRadius[2]}`;

      if (newRadius[2] > 0) {
        path += `A ${newRadius[2]},${newRadius[2]},0,0,1,${x + width - newRadius[2]},${y + height}`;
      }
      path += `L ${x + newRadius[3]},${y + height}`;

      if (newRadius[3] > 0) {
        path += `A ${newRadius[3]},${newRadius[3]},0,0,1,${x},${y + height - newRadius[3]}`;
      }
      path += 'Z';

    } else if (maxRadius > 0 && radius === +radius && radius > 0) {
      newRadius = radius > maxRadius ? maxRadius : radius;

      path = `M ${x},${y + newRadius} A ${newRadius},${newRadius},0,0,1,${x + newRadius},${y}`
           + `L ${x + width - newRadius},${y} A ${newRadius},${newRadius},0,0,1,${x + width},${y + newRadius}`
           + `L ${x + width},${y + height - newRadius} A ${newRadius},${newRadius},0,0,1,${x + width - newRadius},${y + height}`
           + `L ${x + newRadius},${y + height} A ${newRadius},${newRadius},0,0,1,${x},${y + height - newRadius} Z`;

    } else {
      path = `M ${x},${y} h ${width} v ${height} h ${-width} Z`;
    }

    return path;
  },

  render () {
    let {x, y, width, height, radius, ...others} = this.props;

    return (
     <path {...others} d={this.getPath(x, y, width, height, radius)}/>
    );
  }
});

export default Rectangle;
