'use strict';

import React from 'react/addons';

const PureRenderMixin = React.addons.PureRenderMixin;

const Legend = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    layout: React.PropTypes.string,
    align: React.PropTypes.string,
    verticalAlign: React.PropTypes.string,
    data: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
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
  getIconPath (data) {
    let path;

    switch (data.type) {
      case 'line':
        path = 'M0,4h4A4,4,0,1,1,12,4H16M12,4A4,4,0,1,1,4,4';
        break;
      case 'scatter':
        path = 'M2,4A6,6,0,1,1,14,4A6,6,0,1,1,2,4Z';
        break;
      default:
        path = 'M2,-2h12v12h-12z';
        break;
    }

    return path;
  },
  /**
   * 渲染图例
   */
  renderItems () {
    let {data} = this.props;

    return data.map((entry, i) => {
      return (
        <g className={'legend-item legend-item-' + i}>
          <path className='legend-icon' d={this.getIconPath(entry)}></path>
          <text className='legend-text'>{entry.value}</text>
        </g>
      );
    });
  },

  render () {
    let {data, width, height} = this.props;

    if (!data || !data.length || width <= 0 || height <= 0) {
      return;
    }

    return (
      <g className='layer-legend'>
        {this.renderItems()}
      </g>
    );
  }
});

export default Legend;
