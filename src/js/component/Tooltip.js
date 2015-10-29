import React, {PropTypes} from 'react/addons';

const Tooltip = React.createClass({
  propTypes: {
    active: PropTypes.bool.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      top: 0,
      left: 0
    };
  },

  render() {
    let {top, left, active, children} = this.props,
        style = {
          display: active ? 'block' : 'none',
          position: 'absolute',
          top: top,
          left: left
        };

    return (
        <div className='tooltip' style={style}>
          {children}
        </div>
    );
  }
});

export default Tooltip;
