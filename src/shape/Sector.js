'use strict';

import React from 'react/addons';
import ShapeMixin from '../mixin/ShapeMixin';

const RADIAN = Math.PI / 180;

const Sector = React.createClass({

  mixins: [ShapeMixin],

  propTypes: {
    cx: React.PropTypes.number,
    cy: React.PropTypes.number,
    innerRadius: React.PropTypes.number,
    outerRadius: React.PropTypes.number,
    startAngle: React.PropTypes.number,
    endAngle: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      // 圆心的横坐标
      cx: 0,
      // 圆心的纵坐标
      cy: 0,
      // 内径
      innerRadius: 0,
      // 外径
      outerRadius: 0,
      // 起始角度
      startAngle: 0,
      // 终点角度
      endAngle: 0
    };
  },

  getPath (cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
    let angle = endAngle - startAngle,
        path;

    // 360度的圆环，起点和终点一致，会导致绘制的图形为空
    if (Math.abs(angle) >= 360) {
      endAngle = startAngle + 0.9999 * angle;
    }

    if (innerRadius > 0) {
      path = `M ${cx + outerRadius * Math.cos(-startAngle * RADIAN)},${cy + outerRadius * Math.sin(-startAngle * RADIAN)}
              A ${outerRadius},${outerRadius},0,${+(Math.abs(angle) > 180)},${+(startAngle > endAngle)},
              ${cx + outerRadius * Math.cos(-endAngle * RADIAN)},${cy + outerRadius * Math.sin(-endAngle * RADIAN)}
              L ${cx + innerRadius * Math.cos(-endAngle * RADIAN)},${cy + innerRadius * Math.sin(-endAngle * RADIAN)}
              A ${innerRadius},${innerRadius},0,${+(Math.abs(angle) > 180)},${+(startAngle <= endAngle)},
              ${cx + innerRadius * Math.cos(-startAngle * RADIAN)},${cy + innerRadius * Math.sin(-startAngle * RADIAN)} Z`;
    } else {
      path = `M ${cx + outerRadius * Math.cos(-startAngle * RADIAN)},${cy + outerRadius * Math.sin(-startAngle * RADIAN)}
              A ${outerRadius},${outerRadius},0,${+(Math.abs(angle) > 180)},${+(startAngle > endAngle)},
              ${cx + outerRadius * Math.cos(-endAngle * RADIAN)},${cy + outerRadius * Math.sin(-endAngle * RADIAN)}
              L ${cx},${cy} Z`;
    }

    return path;
  },

  render () {
    let {cx, cy, innerRadius, outerRadius, startAngle, endAngle, ...others} = this.props;

    if (outerRadius < innerRadius || startAngle === endAngle) {
      return null;
    }

    return (
     <path {...others} d={this.getPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle)}/>
    );
  }
});

export default Sector;
