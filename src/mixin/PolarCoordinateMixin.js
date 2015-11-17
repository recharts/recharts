import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default {
  mixins: [PureRenderMixin],

  propTypes: {
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool
  },

  getDefaultProps () {
    return {
      // 极点的横坐标
      cx: 0,
      // 极点的纵坐标
      cy: 0,
      // 起始角度
      startAngle: 0,
      // 内径
      innerRadius: 0,
      // 外径
      outerRadius: 0,
      // 极坐标一般取逆时针为正方向，但饼图等一般默认为顺时针
      clockWise: true
    };
  }

};
