/**
 * @fileOverview Background
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import pureRender from 'pure-render-decorator';

// TODO: add support of gradient
@pureRender
class Background extends Component {

  static displayName = 'Background';

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {

  };

  render() {
    const { className, ...others } = this.props;

    return (
      <g className={classNames('recharts-background', className)}>
        <rect {...others} />
      </g>
    );
  }
}

export default Background;
