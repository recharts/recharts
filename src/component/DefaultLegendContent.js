import React, { PropTypes } from 'react';
import Surface from '../container/Surface';
import pureRender from 'pure-render-decorator';

const SIZE = 32;

@pureRender
class DefaultLegendContent extends React.Component {
  static displayName = 'Legend';

  static propTypes = {
    content: PropTypes.element,
    wrapperStyle: PropTypes.object,
    iconSize: PropTypes.number,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf(['line', 'scatter', 'square', 'rect']),
    })),
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    payload: [],
  };

  /**
   * Render the path of icon
   * @param {Object} data Data of each legend item
   * @return {String} Path element
   */
  renderIcon(data) {
    const halfSize = SIZE / 2;
    const sixthSize = SIZE / 6;
    const thirdSize = SIZE / 3;
    let path;
    let fill = data.color;
    let stroke = data.color;

    switch (data.type) {
      case 'line':
        fill = 'none';
        path = `M0,${halfSize}h${thirdSize}A${sixthSize},${sixthSize},0,1,1,${2 * thirdSize},${halfSize}H${SIZE}M${2 * thirdSize},${halfSize}A${sixthSize},${sixthSize},0,1,1,${thirdSize},${halfSize}`;
        break;
      case 'scatter':
        stroke = 'none';
        path = `M${halfSize},0A${halfSize},${halfSize},0,1,1,${halfSize},${SIZE}A${halfSize},${halfSize},0,1,1,${halfSize},0Z`;
        break;
      case 'rect':
        stroke = 'none';
        path = `M0,${SIZE / 8}h${SIZE}v${SIZE * 3 / 4}h${-SIZE}z`;
        break;
      default:
        stroke = 'none';
        path = `M0,0h${SIZE}v${SIZE}h${-SIZE}z`;
        break;
    }

    return <path strokeWidth={4} fill={fill} stroke={stroke} d={path} className="recharts-legend-icon"/>;
  }
  /**
   * Draw items of legend
   * @return {ReactElement} Items
   */
  renderItems() {
    const { payload, iconSize, layout } = this.props;
    const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
    const itemStyle = { display: layout === 'horizontal' ? 'inline-block' : 'block', marginRight: 10 };
    const svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };

    return payload.map((entry, i) => {
      return (
        <li className={'legend-item legend-item-' + i} style={itemStyle} key={'legend-item-' + i}>
          <Surface width={iconSize} height={iconSize} viewBox={viewBox} style={svgStyle}>
            {this.renderIcon(entry)}
          </Surface>
          <span className="legend-text">{entry.value}</span>
        </li>
      );
    });
  }

  render() {
    const { payload, layout, align, wrapperStyle } = this.props;

    if (!payload || !payload.length) {
      return null;
    }
    let finalStyle = {
      padding: 0,
      margin: 0,
      textAlign: layout === 'horizontal' ? align : 'left',
    };

    if (layout === 'vertical') {
      finalStyle.position = 'absolute';
    }

    finalStyle = { ...finalStyle, ...wrapperStyle };

    return (
      <ul className="recharts-default-legend" style={finalStyle}>
        {this.renderItems()}
      </ul>
    );
  }
}

export default DefaultLegendContent;
