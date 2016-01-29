import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

@pureRender
class Polygon extends React.Component {

  static displayName = 'Polygon';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  };

  static defaultProps = {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1,
  };

  render() {
    const { points, fill, stroke, strokeWidth, ...otherProps } = this.props;

    return (
      <polygon points={points.join(' ')} fill={fill} stroke={stroke} strokeWidth={strokeWidth} { ...otherProps } />
    );
  }
}

export default Polygon;
