import React, {PropTypes} from 'react';
import {getNiceTickValues} from 'recharts-scale';
import {linear} from 'd3-scale';


import Surface from '../container/Surface';
import Layer from '../container/Layer';
import CartesianAxis from '../component/CartesianAxis';
import CartesianGrid from '../component/CartesianGrid';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Scatter from '../chart/Scatter';

import CartesianChart from './CartesianChart';
import ReactUtils from '../util/ReactUtils';
import ScatterItem from './ScatterItem';
import XAxis from './XAxis';
import YAxis from './YAxis';
import ZAxis from './ZAxis';


class ScatterChart extends React.Component {
  static displayName = 'ScatterChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    title: PropTypes.string,
    style: PropTypes.object
  };


  static defaultProps = {
    style: {},
    margin: {top: 20, right: 20, bottom: 20, left: 20}
  };

  state = {
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: {x: 0, y: 0},
    isTooltipActive: false,
    activeGroupId: null,
    activeItem: null
  };
    /**
   * 组装曲线数据
   * @param  {Object} xAxis   x轴刻度
   * @param  {Object} yAxis   y轴刻度
   * @param  {String} dataKey 该组数据所对应的key
   * @return {Array}
   */
  getComposeData(data, xAxis, yAxis, zAxis) {
    const xAxisDataKey = xAxis.dataKey;
    const yAxisDataKey = yAxis.dataKey;
    const zAxisDataKey = zAxis.dataKey;

    return data.map((entry, index) => {
      return {
        cx: xAxis.scale(entry[xAxisDataKey]),
        cy: yAxis.scale(entry[yAxisDataKey]),
        r: zAxisDataKey !== undefined ? zAxis.scale(entry[zAxisDataKey]) : zAxis.range[0],
        value: {
          x: entry[xAxisDataKey],
          y: entry[yAxisDataKey],
          z: (zAxisDataKey !== undefined && entry[zAxisDataKey]) || '-'
        }
      };
    });
  }
  /**
   * 计算x轴，y轴的刻度
   * @param  {Object}  axis 刻度对象
   * @return {Array}
   */
  getAxisTicks(axis) {
    const scale = axis.scale;

    if (axis.ticks) {
      return axis.ticks.map(entry => {
        return {
          coord: scale(entry),
          value: entry
        };
      })
    }

    if (scale.ticks) {
      return scale.ticks(axis.tickCount).map(entry => {
        return {
          coord: scale(entry),
          value: entry
        };
      });
    }

    return scale.domain().map((entry, index) => {
      return {
        coord: scale(entry),
        value: entry
      };
    });
  }

   /**
   * 计算网格的刻度
   * @param  {Object} axis 刻度对象
   * @return {Array}
   */
  getGridTicks(axis) {
    const scale = axis.scale;

    if (axis.ticks) {
      return axis.ticks.map(entry => {
        return scale(entry);
      });
    }
    if (scale.ticks) {
      return scale.ticks(axis.tickCount).map(entry => {
        return scale(entry);
      });
    }

    return scale.domain().map(entry => {
      return scale(entry);
    });
  }
  /**
   * 取ticks的定义域
   * @param  {Array} ticks
   * @param  {String} type  刻度类型
   * @return {Array}
   */
  getDomainOfTicks(ticks, type) {
    return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
  }

  getDomain (items, dataKey) {
    const domain = items.reduce((result, item) => {
      return result.concat(item.props.data.map(entry => entry[dataKey]));
    }, []);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }
  /**
   * 计算X轴 或者 Y轴的配置
   */
  getAxis(axisType = 'xAxis', items) {
    const {children, data} = this.props;
    const Axis = axisType === 'xAxis' ? XAxis : YAxis;
    const axis = ReactUtils.findChildByType(children, Axis);

    if (axis) {
      const domain = this.getDomain(items, axis.props.dataKey);

      return {
        ...axis.props,
        axisType,
        domain
      };
    } else {
      console.info('recharts: 散点图必须创建 %s 组件', Axis.displayName);
    }

    return null;
  }
  /**
   * 计算Z轴的配置
   */
  getZAxis (items) {
    const {children} = this.props;
    const axisItem = ReactUtils.findChildByType(children, ZAxis);
    const axisProps = (axisItem && axisItem.props) || ZAxis.defaultProps;
    const domain = axisProps.dataKey ? this.getDomain(items, axisProps.dataKey) : [-1, 1];

    return {
      ...axisProps,
      domain,
      scale: linear().domain(domain).range(axisProps.range)
    };
  }

  getOffset(xAxis, yAxis) {
    const {width, height, margin} = this.props;
    const offset = {...margin};

    offset[xAxis.orient] += xAxis.height;
    offset[yAxis.orient] += yAxis.width;

    return {
      ...offset,
      width: width - offset.left - offset.right,
      height: height - offset.top - offset.bottom
    };
  }
  /**
   * 设置刻度函数的刻度值
   * @param {Object} scale 刻度对象
   * @param {Object} opts  配置
   */
  setTicksOfScale(scale, opts) {
    // 优先使用用户配置的刻度
    if (opts.ticks && opts.ticks) {
      opts.domain = this.getDomainOfTicks(opts.ticks, opts.type);
      scale.domain(opts.domain)
           .ticks(opts.ticks.length);

      return;
    }
    // 数值类型的刻度，指定了刻度的个数后，根据范围动态计算
    const domain = scale.domain();
    const tickValues = getNiceTickValues(domain, opts.tickCount)

    opts.ticks = tickValues;
    opts.domain = this.getDomainOfTicks(tickValues, opts.type);
    scale.domain(opts.domain)
        .ticks(opts.tickCount);
  }
  /**
   * 计算轴的刻度函数，位置，大小等信息
   * @param  {Object} axisMap  刻度对象
   * @param  {Object} offset   图形区域的偏移量
   * @param  {Object} axisType 刻度类型，x轴或者y轴
   * @return {Object}
   */
  getFormatAxis(axis, offset, axisType) {
    const {width, height} = this.props;
    const {orient, type, domain, tickCount, tickFormat} = axis;
    const range = axisType === 'xAxis' ?
                  [offset.left, offset.left + offset.width] :
                  [offset.top + offset.height, offset.top];
    const scale = linear().domain(domain).range(range);

    this.setTicksOfScale(scale, axis);
    tickFormat && scale.tickFormat(tickFormat);

    return {
      ...axis,
      scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height,
      x: axisType === 'xAxis' ? offset.left : ( orient === 'left' ? offset.left - axis.width : offset.right),
      y: axisType === 'xAxis' ? (orient === 'top' ? offset.top - axis.height : offset.top + offset.height) : offset.top
    };
  }
  /**
   * 鼠标进入曲线的响应事件
   * @param {String} groupId 散点所对应的组
   * @param {Object} el  散点对象
   * @param {Object} e   事件对象
   */
  handleScatterMouseEnter = (groupId, el, e) => {
    this.setState({
      isTooltipActive: true,
      activeGroupId: groupId,
      activeItem: el,
      activeTooltipCoord: {x: el.cx, y: el.cy}
    });
  }
  /**
   * 鼠标离开散点的响应事件
   */
  handleScatterMouseLeave = () => {
    this.setState({
      isTooltipActive: false
    });
  }
    /**
   * 渲染轴
   * @return {[type]} [description]
   */
  renderAxis(axis, layerKey) {
    const {width, height} = this.props;

    if (axis) {
      return (
        <Layer key={layerKey} className={layerKey}>
          <CartesianAxis
            x={axis.x}
            y={axis.y}
            width={axis.width}
            height={axis.height}
            orient={axis.orient}
            viewBox={{x: 0, y: 0, width, height}}
            ticks={this.getAxisTicks(axis)}/>
        </Layer>
      );
    }
  }
  /**
   * 渲染网格部分
   * @param  {Object} xAxis x轴刻度
   * @param  {Object} yAxis y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderGrid(xAxis, yAxis, offset) {
    return (
      <CartesianGrid
        key={'grid'}
        x={offset.left}
        y={offset.top}
        width={offset.width}
        height={offset.height}
        verticalPoints={this.getGridTicks(xAxis)}
        horizontalPoints={this.getGridTicks(yAxis)}/>
    );
  }
  /**
   * 绘制图例部分
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @param  {Object} offset 图形区域的偏移量
   * @return {ReactComponent}
   */
  renderLegend(items, offset, legendItem) {
    const legendData = items.map((child, i) => {
      let {name, stroke, fill, legendType} = child.props;

      return {
        type: legendType || 'square',
        color: fill,
        value: name || ''
      };
    }, this);

    return React.cloneElement(legendItem, {
      width: offset.width,
      data: legendData
    });
  }
  /**
   * 更具图形元素计算tooltip的显示内容
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @return {Array}
   */
  getTooltipContent(data, xAxis, yAxis, zAxis) {
    if (!data) {return;}

    const content = [{
      key: xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || '',
      value: data.x
    }, {
      key: yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || '',
      value: data.y
    }];

    if (data.z && data.z !== '-') {
      content.push({
        key: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        value: data.z
      });
    }

    return content;
  }
  /**
   * 渲染浮层
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @return {ReactComponent}
   */
  renderTooltip(items, xAxis, yAxis, zAxis) {
    const {children} = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }

    const {chartX, chartY, isTooltipActive,
          activeItem, activeTooltipCoord,
          activeTooltipPosition} = this.state;

    return React.cloneElement(tooltipItem, {
        position: activeTooltipPosition,
        active: isTooltipActive,
        label: '',
        data: this.getTooltipContent(activeItem && activeItem.value, xAxis, yAxis, zAxis),
        coordinate: activeTooltipCoord,
        mouseX: chartX,
        mouseY: chartY
    });
  }
  /**
   * 绘制图形部分
   * @param  {Array[ReactComponet]} items 线图元素
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderItems(items, xAxis, yAxis, zAxis, offset) {
    const {activeScatterKey} = this.state;

    return items.map((child, i) => {
      let {strokeWidth, data, ...other} = child.props;

      strokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      strokeWidth = activeScatterKey === i ? strokeWidth + 2 : strokeWidth;

      return (
        <Scatter
          {...other}
          key={'scatter-' + i}
          groupId={'scatter-' + i}
          strokeWidth={strokeWidth}
          onMouseLeave={this.handleScatterMouseLeave}
          onMouseEnter={this.handleScatterMouseEnter}
          data={this.getComposeData(data, xAxis, yAxis, zAxis)}/>
      );
    }, this);
  }

  render() {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, ScatterItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);
    const zAxis = this.getZAxis(items);
    let xAxis = this.getAxis('xAxis', items);
    let yAxis = this.getAxis('yAxis', items);

    const offset = this.getOffset(xAxis, yAxis);
    xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
    yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');

    return (
      <div className='recharts-wrapper'
        style={{position: 'relative', cursor: 'default', ...style}}>

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, offset, legendItem)
        }

        <Surface {...this.props}>
          {this.renderGrid(xAxis, yAxis, offset)}
          {this.renderAxis(xAxis, 'x-axis-layer')}
          {this.renderAxis(yAxis, 'y-axis-layer')}
          {this.renderItems(items, xAxis, yAxis, zAxis, offset)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, xAxis, yAxis, zAxis)}
      </div>
    );
  }
};

export default ScatterChart;
