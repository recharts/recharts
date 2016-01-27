import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class Surface extends React.Component {

  static displayName = 'Surface';

  static propTypes = {
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

  render() {
    const { children, width, height, viewBox, className, style } = this.props;
    const svgView = viewBox || { width, height, x: 0, y: 0 };

    return (
      <svg
        className={`recharts-surface ${className || ''}`}
        width={width}
        height={height}
        style={style}
        viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
      >
        {children}
      </svg>
    );
  }
}

export default Surface;
