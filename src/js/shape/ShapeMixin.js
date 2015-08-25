'use strict';

import React from 'react/addons';

const PropTypes = React.PropTypes;
const PureRenderMixin = React.addons.PureRenderMixin;

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
