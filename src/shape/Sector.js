import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const RADIAN = Math.PI / 180;

const Sector = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    cx: PropTypes.number,
    cy: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
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
    const {cx, cy, innerRadius, outerRadius, startAngle, endAngle,
          onClick, onMouseEnter, onMouseLeave, className,
          ...others} = this.props;

    if (outerRadius < innerRadius || startAngle === endAngle) {
      return null;
    }

    return (
     <path
      {...others}
      className={'recharts-sector' + (className || '')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      d={this.getPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle)}/>
    );
  }
});

export default Sector;
