import React from 'react';
import PropTypes from 'prop-types';

function CustomBarLabel(props) {
  const { payload, x, y, width, height, value } = props;

  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

export default CustomBarLabel;
