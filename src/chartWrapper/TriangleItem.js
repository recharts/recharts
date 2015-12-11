import React, {PropTypes} from 'react';

class TriangleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'TriangleItem';

  static propTypes = {
    // The base angle of isosceles triangle
    baseAngle: PropTypes.number,
    // The min value of the base's length
    minBaseLength: PropTypes.number,
    // The ratio of overlaping between two adjacent triangles
    overlapRatio: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      value: PropTypes.number
    })),
    legendType: PropTypes.string
  };

  static defaultProps = {
    baseAngle: 75,
    minBaseLength: 0,
    overlapRatio: 0.2
  };

  render () {
    return null;
  }
};

export default TriangleItem;
