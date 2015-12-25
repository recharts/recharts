import React, {PropTypes} from 'react';

const Layer = React.createClass({
  propTypes: {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  },

  render() {
    const {children, className, ...others} = this.props;

    return (
      <g className={'recharts-layer ' + (className || '')} {...others}>
        {children}
      </g>
    );
  },
});

export default Layer;
