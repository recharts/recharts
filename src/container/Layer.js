/**
 * @fileOverview Layer
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';

@pureRender
class Layer extends Component {

  static displayName = 'Layer';

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  render() {
    const { children, className, ...others } = this.props;
    const layerClass = classNames('recharts-layer', className);

    return (
      <g className={layerClass} {...others}>
        {children}
      </g>
    );
  }
}

export default Layer;
