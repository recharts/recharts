'use strict';

import React from 'react/addons';

const PropTypes = React.PropTypes;

const Surface = React.createClass({

  render () {
    let {children, width, height, viewBox, padding, className, style} = this.props;
    let svgView = viewBox || {width: width, height: height, x: 0, y: 0};

    return (
      <svg
        className={'recharts-surface' + (className || '')}
        width={width}
        height={height}
        style={style}
        viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        {children}
      </svg>
    );
  }
});

export default Surface;
