import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Surface from '../container/Surface';

const SIZE = 32;

const Legend = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    width: PropTypes.number,
    height: PropTypes.number,
    iconSize: PropTypes.number,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf(['line', 'scatter', 'square', 'rect'])
    }))
  },

  getDefaultProps () {
    return {
      width: 0,
      height: 0,
      iconSize: 14,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'middle',
      data: []
    };
  },

  /**
   * 获取图例中Icon的路径
   * @param {Object} data 包含图表类型、填充颜色、相应的seriesIndex等的数据
   * @return {String} 路径
   */
  renderIcon (data) {
    let halfSize = SIZE / 2;
    let sixthSize = SIZE / 6;
    let thirdSize = SIZE / 3;
    let path, fill = data.color, stroke = data.color;

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
        path = `M0,0h${SIZE}v${SIZE}h${-SIZE}z`
        break;
    }

    return <path strokeWidth={4} fill={fill} stroke={stroke} d={path} className='recharts-legend-icon'/>;
  },
  /**
   * 渲染图例
   */
  renderItems () {
    let {data, iconSize, layout} = this.props;
    let viewBox = {x: 0, y: 0, width: SIZE, height: SIZE};
    let itemStyle = {display: layout === 'horizontal' ? 'inline-block' : 'block', marginRight: 10};
    let svgStyle = {display: 'inline-block', verticalAlign: 'middle', marginRight: 4};

    return data.map((entry, i) => {
      return (
        <li className={'legend-item legend-item-' + i} style={itemStyle} key={'legend-item-' + i}>
          <Surface width={iconSize} height={iconSize} viewBox={viewBox} style={svgStyle}>
            {this.renderIcon(entry)}
          </Surface>
          <span className='legend-text'>{entry.value}</span>
        </li>
      );
    });
  },

  render () {
    let {data, width, height, layout, align} = this.props;

    if (!data || !data.length || width <= 0 || height <= 0) {
      return null;
    }
    let style = {
      padding: 0,
      margin: 0,
      width: width,
      height: height,
      textAlign: layout === 'horizontal' ? align : 'left'
    };

    return (
      <ul className='recharts-legend' style={style}>
        {this.renderItems()}
      </ul>
    );
  }
});

export default Legend;
