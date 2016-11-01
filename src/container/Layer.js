/**
 * @fileOverview Layer
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function Layer(props) {
  const { children, className, ...others } = props;
  const layerClass = classNames('recharts-layer', className);

  return (
    <g className={layerClass} {...others}>
      {children}
    </g>
  );
}

Layer.propTypes = propTypes;

export default Layer;
