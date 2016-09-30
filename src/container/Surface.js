/**
 * @fileOverview Surface
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { getPresentationAttributes } from '../util/ReactUtils';

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
  const { children, width, height, viewBox, className, style, ...others } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const layerClass = classNames('recharts-surface', className);
  const attrs = getPresentationAttributes(others);

  return (
    <svg
      {...attrs}
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
