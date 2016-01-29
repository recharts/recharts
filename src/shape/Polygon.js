import React from 'react';

const Polygon = ({ points, ...otherProps }) => (
  <polygon points={points.join(' ')} { ...otherProps } />
);

export default Polygon;
