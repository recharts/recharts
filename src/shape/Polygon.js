import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

@pureRender
class Polygon extends React.Component {

  static displayName = 'Polygon';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })),
  };

  static defaultProps = {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1,
  };

  getPolygonPoints(points) {
    return points.reduce((result, entry) => {
      if (entry.x === +entry.x && entry.y === +entry.y) {
        result.push([entry.x, entry.y]);
      }

      return result;
    }, []).join(' ');
  }

  render() {
    const { points } = this.props;

    if (!points || !points.length) {
      return null;
    }

    return (
      <polygon
        {...ReactUtils.getPresentationAttributes(this.props)}
        points={this.getPolygonPoints(points)}/>
    );
  }
}

export default Polygon;
