import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class Dot extends React.Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  render() {
    const { cx, cy, r, className } = this.props;

    if (cx === +cx && cy === +cy && r === +r) {
      return <circle {...this.props} className={`recharts-dot ${className || ''}`}/>;
    }

    return null;
  }
}

export default Dot;
