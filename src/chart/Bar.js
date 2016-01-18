/**
 * @fileOverview Render a group of bar
 */
import React, { PropTypes } from 'react';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';

@pureRender
class Bar extends React.Component {

  static displayName = 'Bar';

  static propTypes = {
    customContent: PropTypes.element,
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
    ]),

    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,

    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    animationDelay: PropTypes.number,
    animationDuration: PropTypes.number,
    layout: PropTypes.string,
  };

  static defaultProps = {
    // data of bar
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
    animationDelay: 400,
    animationDuration: 1000,
    layout: 'vertical',
  };

  constructor(props) {
    super(props);
  }

  state = {
    isAppearActive: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.update();
    });
  }

  update() {
    this.setState({
      isAppearActive: true,
    });
  }

  renderRectangles() {
    const { data, className, customContent, layout, animationDuration, animationDelay, ...others } = this.props;
    const { isAppearActive } = this.state;

    return data.map((entry, index) => {
      const { value, width, height, ...rest } = entry;
      const props = { ...others, ...rest, width, height };
      let transformOrigin = '';

      if (layout === 'vertical') {
        transformOrigin = width > 0 ? 'left center' : 'right center';
      } else {
        transformOrigin = height > 0 ? 'center bottom' : 'center top';
      }

      const style = {
        transform: `scale${layout === 'vertical' ? 'X' : 'Y'}(${isAppearActive ? 1 : 0})`,
        transition: `transform ${animationDuration}ms ease ${animationDelay}ms`,
        transformOrigin,
      };

      return (
        <g key={'rectangle-' + index} style={style}>
          {
            React.isValidElement(customContent) ?
              React.cloneElement(customContent, { ...props, index }) :
              React.createElement(Rectangle, props)
          }
        </g>
      );
    });
  }

  renderLabels() {
    const { data, label, fill, stroke } = this.props;

    return data.map((entry, i) => {
      const x = entry.x + entry.width / 2;
      const y = entry.y;
      const props = { fill, stroke, ...entry, index: i, key: `label-${i}` };

      return React.isValidElement(label) ? React.cloneElement(label, props) : (
        <text textAnchor="middle" x={x} y={y} key={'label-' + i}>
          {entry.value}
        </text>
      );
    });
  }

  render() {
    const { data, className, label } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Layer className={`recharts-layer-bar ${className || ''}`}>
        <Layer className="recharts-layer-rectangles">
          {this.renderRectangles()}
        </Layer>
        { label && (
          <Layer className="recharts-layer-rectangle-labels">
            {this.renderLabels()}
          </Layer>
        )}
      </Layer>
    );
  }
}

export default Bar;
