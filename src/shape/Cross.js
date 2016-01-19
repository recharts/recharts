import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import LodashUtils from '../util/LodashUtils';

@pureRender
class Cross extends React.Component {

  static displayName = 'Cross';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: PropTypes.number,
    y: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    stroke: '#000',
    fill: 'none',
    onMouseEnter() {},
    onMouseLeave() {},
    onClick() {},
  };

  getPath(x, y, width, height, top, left) {
    return `M${x},${top}v${height}M${left},${y}h${width}`;
  }

  render() {
    const { x, y, width, height, top, left,
        onClick, onMouseEnter, onMouseLeave,
        className } = this.props;

    if (!LodashUtils.isNumber(x) || !LodashUtils.isNumber(y) || !LodashUtils.isNumber(width)
      || !LodashUtils.isNumber(height) || !LodashUtils.isNumber(top) || !LodashUtils.isNumber(left)) {
      return null;
    }

    return (
      <path
        {...ReactUtils.getPresentationAttributes(this.props)}
        className={'recharts-cross ' + (className || '')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath(x, y, width, height, top, left)}
      />
    );
  }
}

export default Cross;
