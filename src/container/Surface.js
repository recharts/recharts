/**
 * @fileOverview Surface
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
function Surface(props) {
  const { children, width, height, viewBox, className, style } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const layerClass = classNames('recharts-surface', className);

  return (
    <svg
      className={layerClass}
      width={width}
      height={height}
      style={style}
      viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      version="1.1"
    >
      {children}
    </svg>
  );
}

Surface.propTypes = propTypes;

export default Surface;
