/**
 * @fileOverview Background
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import pureRender from '../util/PureRender';

const propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
};

function Background(props) {
  const { className, ...others } = props;

  return (
    <g className={classNames('recharts-background', className)}>
      <rect {...others} />
    </g>
  );
}

Background.propTypes = propTypes;

export default Background;
