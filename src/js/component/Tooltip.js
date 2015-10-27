import React from 'react/addons';

const Tooltip = React.createClass({
  propTypes: {
    top: React.PropTypes.number.isRequired,
    left: React.PropTypes.number.isRequired,
    html: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      top: 150,
      left: 100,
      html: ''
    };
  },

  render() {
    let {top, left, hidden, html} = this.props,
        style = {
          display: hidden ? 'none' : 'block',
          position: 'absolute',
          top: top,
          left: left
        };

    return (
        <div className='tooltip' style={style}>{html}</div>
    );
  }
});

export default Tooltip;
