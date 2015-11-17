import React, {PropTypes} from 'react';

const Layer = React.createClass({
  propTypes: {
    className: PropTypes.string
  },

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
