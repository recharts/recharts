import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class Layer extends React.Component {

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

    return (
      <g className={`recharts-layer ${className || ''}`} {...others}>
        {children}
      </g>
    );
  }
}

export default Layer;
