'use strict';

import React from 'react/addons';

const PropTypes = React.PropTypes;

const Layer = React.createClass({

  render () {
    let {children, ...others} = this.props;

    return (
      <g className='recharts-layer' {...others}>
        {children}
      </g>
    );
  }
});

export default Layer;
