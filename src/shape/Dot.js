/**
 * @fileOverview Dot
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';

@pureRender
class Dot extends Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  render() {
    const { cx, cy, r, className } = this.props;
    const layerClass = classNames('recharts-dot', className);

    if (cx === +cx && cy === +cy && r === +r) {
      return <circle {...this.props} className={layerClass} />;
    }

    return null;
  }
}

export default Dot;
