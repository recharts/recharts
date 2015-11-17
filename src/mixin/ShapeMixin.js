import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default {
  mixins: [PureRenderMixin],

  propTypes: {
    stroke: PropTypes.string,
    fill: PropTypes.string
  },

  getDefaultProps () {
    return {
      fill: 'none',
      stroke: 'none'
    };
  }

};
