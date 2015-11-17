import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default {
  mixins: [PureRenderMixin],

  propTypes: {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  },

  getDefaultProps () {
    return {
      // 左上角的横坐标
      x: 0,
      // 左上角的纵坐标
      y: 0,
      // 宽度
      width: 0,
      // 高度
      height: 0
    };
  }
};
