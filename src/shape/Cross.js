/**
 * @fileOverview Cross
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

@pureRender
class Cross extends Component {

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
    stroke: '#000',
    fill: 'none',
  };

  getPath(x, y, width, height, top, left) {
    return `M${x},${top}v${height}M${left},${y}h${width}`;
  }

  render() {
    const { x, y, width, height, top, left,
        className } = this.props;

    if (!_.isNumber(x) || !_.isNumber(y) || !_.isNumber(width)
      || !_.isNumber(height) || !_.isNumber(top) || !_.isNumber(left)) {
      return null;
    }

    return (
      <path
        {...getPresentationAttributes(this.props)}
        className={classNames('recharts-cross', className)}
        d={this.getPath(x, y, width, height, top, left)}
      />
    );
  }
}

export default Cross;
