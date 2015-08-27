'use strict';

import React from 'react/addons';

const PropTypes = React.PropTypes;

const Surface = React.createClass({

  render () {
    let {children, ...others} = this.props;

    return (
      <svg {...others} xmlns="http://www.w3.org/2000/svg" version="1.1">
        {children}
      </svg>
    );
  }
});

export default Surface;
