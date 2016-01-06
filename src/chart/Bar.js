/**
 * @fileOverview 柱图
 */
import React, {PropTypes} from 'react';
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
  };

  static defaultProps = {
    // 数据
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  constructor(props) {
    super(props);
  }

  renderRectangles() {
    const {data, className, hasLabel, customContent, ...others} = this.props;

    return data.map((entry, i) => {
      const {value, ...rest} = entry;

      return React.isValidElement(customContent) ? React.cloneElement(customContent, {
        ...others, ...rest,
        index: i,
        key: 'rectangle-' + i,
      }) : React.createElement(Rectangle, {
        ...others, ...rest,
        key: 'rectangle-' + i,
      });
    });
  }

  renderLabels() {
    const {data, label, fill, stroke} = this.props;

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
    const {data, className, label} = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Layer className={'layer-bar ' + (className || '')}>
        <Layer className="layer-rectangles">
          {this.renderRectangles()}
        </Layer>
        { label && (
          <Layer className="layer-rectangle-labels">
            {this.renderLabels()}
          </Layer>
        )}
      </Layer>
    );
  }
}

export default Bar;
