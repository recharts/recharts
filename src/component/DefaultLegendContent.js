/**
 * @fileOverview Default Legend Content
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Symbols from '../shape/Symbols';
import { filterEventsOfChild, LEGEND_TYPES } from '../util/ReactUtils';

const SIZE = 32;
const ICON_TYPES = LEGEND_TYPES.filter(type => type !== 'none');

class DefaultLegendContent extends PureComponent {
  static displayName = 'Legend';

  static propTypes = {
    content: PropTypes.element,
    iconSize: PropTypes.number,
    iconType: PropTypes.oneOf(ICON_TYPES),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf(LEGEND_TYPES),
    })),
    inactiveColor: PropTypes.string,
    formatter: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    inactiveColor: '#ccc',
  };

  /**
   * Render the path of icon
   * @param {Object} data Data of each legend item
   * @return {String} Path element
   */
  renderIcon(data) {
    const { inactiveColor } = this.props;
    const halfSize = SIZE / 2;
    const sixthSize = SIZE / 6;
    const thirdSize = SIZE / 3;
    const color = data.inactive ? inactiveColor : data.color;

    if (data.type === 'plainline') {
      return (
        <line
          strokeWidth={4}
          fill="none"
          stroke={color}
          strokeDasharray={data.payload.strokeDasharray}
          x1={0}
          y1={halfSize}
          x2={SIZE}
          y2={halfSize}
          className="recharts-legend-icon"
        />
      );
    } if (data.type === 'line') {
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
    } if (data.type === 'rect') {
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
    const { payload, iconSize, layout, formatter } = this.props;
    const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
    const itemStyle = {
      display: layout === 'horizontal' ? 'inline-block' : 'block',
      marginRight: 10,
    };
    const svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };

    return payload.map((entry, i) => {
      const finalFormatter = entry.formatter || formatter;
      const className = classNames({
        'recharts-legend-item': true,
        [`legend-item-${i}`]: true,
        inactive: entry.inactive,
      });

      if (entry.type === 'none') {
        return null;
      }

      return (
        <li
          className={className}
          style={itemStyle}
          key={`legend-item-${i}`} // eslint-disable-line react/no-array-index-key
          {...filterEventsOfChild(this.props, entry, i)}
        >
          <Surface width={iconSize} height={iconSize} viewBox={viewBox} style={svgStyle}>
            {this.renderIcon(entry)}
          </Surface>
          <span className="recharts-legend-item-text">
            {finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value}
          </span>
        </li>
      );
    });
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
