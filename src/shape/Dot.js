/**
 * @fileOverview Dot
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';

class Dot extends PureComponent {
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
      return (
        <circle
          {...getPresentationAttributes(this.props)}
          {...filterEventAttributes(this.props, null, true)}
          className={layerClass}
          cx={cx}
          cy={cy}
          r={r}
        />
      );
    }

    return null;
  }
}

export default Dot;
