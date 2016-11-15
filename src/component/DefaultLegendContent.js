/**
 * @fileOverview Default Legend Content
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Surface from '../container/Surface';
import Symbols from '../shape/Symbols';
import { filterEventsOfChild } from '../util/ReactUtils';

const SIZE = 32;

@pureRender
class DefaultLegendContent extends Component {
  static displayName = 'Legend';

  static propTypes = {
    content: PropTypes.element,
    iconSize: PropTypes.number,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf([
        'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square',
        'star', 'triangle', 'wye',
      ]),
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
  };

  /**
   * Render the path of icon
   * @param {Object} data Data of each legend item
   * @return {String} Path element
   */
  renderIcon(data) {
    const { color } = data;
    const halfSize = SIZE / 2;
    const sixthSize = SIZE / 6;
    const thirdSize = SIZE / 3;

    if (data.type === 'line') {
      return (
        <path
          strokeWidth={4}
          fill="none"
          stroke={color}
          d={`M0,${halfSize}h${thirdSize}
            A${sixthSize},${sixthSize},0,1,1,${2 * thirdSize},${halfSize}
            H${SIZE}M${2 * thirdSize},${halfSize}
            A${sixthSize},${sixthSize},0,1,1,${thirdSize},${halfSize}`}
          className="recharts-legend-icon"
        />
      );
    } else if (data.type === 'rect') {
      return (
        <path
          stroke="none"
          fill={color}
          d={`M0,${SIZE / 8}h${SIZE}v${SIZE * 3 / 4}h${-SIZE}z`}
          className="recharts-legend-icon"
        />
      );
    }

    return (
      <Symbols
        fill={color}
        cx={halfSize}
        cy={halfSize}
        size={SIZE}
        sizeType="diameter"
        type={data.type}
      />
    );
  }

  /**
   * Draw items of legend
   * @return {ReactElement} Items
   */
  renderItems() {
    const { payload, iconSize, layout } = this.props;
    const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
    const itemStyle = {
      display: layout === 'horizontal' ? 'inline-block' : 'block',
      marginRight: 10,
    };
    const svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };

    return payload.map((entry, i) => (
      <li
        className={`recharts-legend-item legend-item-${i}`}
        style={itemStyle}
        key={`legend-item-${i}`}
        {...filterEventsOfChild(this.props, entry, i)}
      >
        <Surface width={iconSize} height={iconSize} viewBox={viewBox} style={svgStyle}>
          {this.renderIcon(entry, iconSize)}
        </Surface>
        <span className="recharts-legend-item-text">{entry.value}</span>
      </li>
    ));
  }

  render() {
    const { payload, layout, align } = this.props;

    if (!payload || !payload.length) { return null; }

    const finalStyle = {
      padding: 0,
      margin: 0,
      textAlign: layout === 'horizontal' ? align : 'left',
    };

    return (
      <ul className="recharts-default-legend" style={finalStyle}>
        {this.renderItems()}
      </ul>
    );
  }
}

export default DefaultLegendContent;
