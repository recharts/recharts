/**
 * @fileOverview Cross
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

class Cross extends PureComponent {

  static displayName = 'Cross';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  static getPath(x, y, width, height, top, left) {
    return `M${x},${top}v${height}M${left},${y}h${width}`;
  }

  render() {
    const { x, y, width, height, top, left,
      className } = this.props;

    if (!isNumber(x) || !isNumber(y) || !isNumber(width) ||
      !isNumber(height) || !isNumber(top) || !isNumber(left)) {
      return null;
    }

    return (
      <path
        {...getPresentationAttributes(this.props)}
        className={classNames('recharts-cross', className)}
        d={this.constructor.getPath(x, y, width, height, top, left)}
      />
    );
  }
}

export default Cross;
