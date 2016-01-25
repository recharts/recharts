import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

@pureRender
class Rectangle extends React.Component {

  static displayName = 'Rectangle';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })),
    radius: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    radius: 0,
    stroke: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    fill: '#000',
    onMouseEnter() {},
    onMouseLeave() {},
    onClick() {},
  };

  getPath(points) {
    if (!points || !points.length) {return '';}

    const ary = points.map(entry => entry.x + ' ' + entry.y);

    return `M${ary.join('L')}Z`;
  }

  render() {
    const { points, radius, onClick,
        onMouseEnter, onMouseLeave } = this.props;

    return (
      <path
        {...ReactUtils.getPresentationAttributes(this.props)}
        className={'recharts-triangle ' + (className || '')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath(points, radius)}
      />
    );
  }
}

export default Rectangle;
