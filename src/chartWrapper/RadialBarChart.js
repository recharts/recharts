import React, {PropTypes} from 'react';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import RadialBar from '../chart/RadialBar';
import RadialBarItem from './RadialBarItem';
import LodashUtils from '../util/LodashUtils';

import {ordinal} from 'd3-scale';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';

class RadialBarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName = 'RadialBarChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    cy: PropTypes.number,
    cx: PropTypes.number,
    // 内径
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 外径
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 每个类别的玦环之间的间隔半径
    barOffsetRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 两组玦环间隔的半径
    barGapRadius: PropTypes.number,
    // 每个玦环的半径
    barRadius: PropTypes.number,

    title: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  };


  static defaultProps = {
    innerRadius: '30%',
    outerRadius: '100%',
    barGapRadius: 2,
    barOffsetRadius: '10%',
    style: {},
    margin: {top: 0, right: 0, bottom: 0, left: 0}
  };

  state = {
    activeTooltipLabel: '',
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: {x: 0, y: 0},
    isTooltipActive: false
  };

 /**
   * 组装数据
   * @param  {Array}  barPosition 每个柱子的半径大小和偏移量
   * @param  {Object} radiusScale    半径刻度
   * @param  {String} dataKey  该组数据所对应的key
   * @return {Array}
   */
  getComposeData(barPosition, radiusScale, center, dataKey) {
    const {barRadius, barGapRadius, data} = this.props;
    const pos = barPosition[dataKey];

    return data.map((entry, index) => {
      const value = entry[dataKey];
      const radius = radiusScale(index);

      return {
        ...entry,
        ...center,
        value,
        innerRadius: radius - pos.offset,
        outerRadius: radius - pos.offset + pos.radius
      };
    });
  }
  /**
   * 计算圆心
   * @return {Object}
   */
  getCenter () {
    const {cx, cy, width, height, margin} = this.props;

    return {
      cx: cx === +cx ? cx : ((margin.left + width - margin.right) / 2) >> 0,
      cy: cy === +cy ? cy : ((margin.top + height - margin.bottom) / 2) >> 0
    };
  }
  /**
   * 计算柱子的半径大小
   * @param  {Array[ReactComponent]} items 所有的柱图对象
   * @return {Number}
   */
  getRadiusList (items) {
    const {barRadius} = this.props;

    return items.map((child) => {
      return {
        ...child.props,
        barRadius:  child.props.barRadius || barRadius
      };
    });
  }

  /**
   * 计算每个类别所占的半径大小
   * @return {[type]} [description]
   */
  getRadiusScale (center) {
    const {data, innerRadius, outerRadius, width, height, margin} = this.props;
    const bandCount = Math.max(data.length, 1);
    const maxRadius = Math.min.apply(null, [
        Math.abs(center.cx - margin.left), Math.abs(center.cx - margin.right),
        Math.abs(center.cy - margin.top), Math.abs(center.cy - margin.top)
      ]);
    let range = [
      LodashUtils.getPercentValue(outerRadius, maxRadius),
      LodashUtils.getPercentValue(innerRadius, maxRadius)
    ];

    const scale = ordinal().domain(LodashUtils.range(0, bandCount))
                    .rangeRoundBands(range);

    return scale;
  }
  /**
   * 获取柱子的半径以及柱子间的间距
   * @param  {Number}   bandSize 每一个类别所占的半径
   * @param  {sizeList} sizeList  所有group设置的size
   * @return {Number}
   */
  getBarPosition (bandRadius, radiusList) {
    const {barGapRadius, barOffsetRadius, innerRadius, outerRadius} = this.props;
    const len = radiusList.length;
    let result;

    // 判断用户是否设置了柱子的大小
    if (len && radiusList[0].barRadius === +radiusList[0].barRadius) {
      let sum = radiusList.reduce((result, entry) => {
        return result + entry.barRadius;
      }, 0);
      sum += (len - 1) * barGapRadius;
      let offset =  - sum / 2   >> 0;
      let prev = {offset: offset - barGapRadius, radius: 0};

      result = radiusList.reduce((result, entry, i) => {
        result[entry.dataKey] = {
          offset: prev.offset + prev.size + barGapRadius,
          radius: entry.barSize
        };
        prev = result[entry.dataKey];

        return result;
      }, {});
    } else {
      let offset = LodashUtils.getPercentValue(barOffsetRadius, bandRadius);
      let radius = (bandRadius - 2 * offset - (len - 1) * barGapRadius) / len >> 0;
      offset = -Math.max(((radius * len + (len - 1) * barGapRadius) / 2) >> 0, 0);

      result = radiusList.reduce((result, entry, i) => {
        result[entry.dataKey] = {
          offset: offset + (radius + barGapRadius) * i,
          radius
        };

        return result;
      }, {});
    }

    return result;
  }

  handleMouseEnter = (el, e) => {
    this.setState({
      isTooltipActive: true
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(el, e);
      }
    });
  }

  handleMouseLeave = (e) => {
    this.setState({
      isTooltipActive: false
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseLeave(e);
      }
    });
  }
  /**
   * 渲染图形部分
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderLegend (legendItem) {
    const {data, width, height} = this.props;

    const legendData = data.map(entry => {
      return {
        type: 'square',
        color: entry.fill || '#000',
        value: entry.name
      }
    });

    return React.cloneElement(legendItem, {
      width: legendItem.props.width || width,
      height: legendItem.props.height || height,
      data: legendData
    });
  }

  renderTooltip () {
    const {children} = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }
  }
  /**
   * 绘制图形部分
   * @param  {Array[ReactComponet]} items 柱图元素
   * @return {ReactComponent}
   */
  renderItems(items, radiusScale, center) {
    if (!items || !items.length) {return;}

    const {children} = this.props;
    const {activeBarKey} = this.state;
    const radiusList = this.getRadiusList(items);
    const bandRadius = radiusScale.rangeBand()
    const barPosition = this.getBarPosition(bandRadius, radiusList);

    return items.map((child, i) => {
      const {dataKey, ...other} = child.props;

      return (
        <RadialBar
          {...other}
          {...center}
          key={'radial-bar-' + i}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter.bind(null, dataKey)}
          data={this.getComposeData(barPosition, radiusScale, center, dataKey)}/>
      );
    }, this);
  }

  render () {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, RadialBarItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);
    const center = this.getCenter();
    const radiusScale = this.getRadiusScale(center);

    return (
      <div className='recharts-wrapper'
        style={{cursor: 'default', ...style, position: 'relative'}}>

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(legendItem)
        }

        <Surface {...this.props}>
          {this.renderItems(items, radiusScale, center)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(legendItem)}

        {this.renderTooltip(items)}
      </div>
    );
  }

};

export default RadialBarChart;
