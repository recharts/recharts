'use strict';

import React, {PropTypes, cloneElement} from 'react/addons';
import CartesianAxis from '../../component/CartesianAxis';
import CartesianGrid from '../../component/CartesianGrid';
import Surface from '../../container/Surface';
import Layer from '../../container/Layer';

import ReactUtils from '../../util/ReactUtils';
import {getNiceTickValues} from 'recharts-scale';
import EventUtils from '../../util/EventUtils';
import DOMUtils from '../../util/DOMUtils';
import Tool from '../../util/tool';

import {linear, ordinal} from 'd3-scale';
import Line from '../Line';
import LineItem from './LineItem';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from '../../component/Legend';
import Tooltip from '../../component/Tooltip';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};

/**
 *  <LineChart className="my-line-cahrt">
 *    <LineItem data={} yAxis={0}/>
 *    <LineItem data={} yAxis={1}>
 *  </LineChart>
 */
const LineChart = React.createClass({
  propTypes: {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    // viewBox 对象
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    title: PropTypes.string,
    style: PropTypes.object
  },

  getDefaultProps() {
    return {
      style: {},
      layout: 'horizontal',
      margin: {top: 20, right: 20, bottom: 20, left: 20}
    };
  },

  getInitialState () {
    return {
      activeTooltipIndex: -1,
      activeTooltipLabel: '',
      activeTooltipPosition: 'left-bottom',
      activeTooltipCoord: {x: 0, y: 0},
      isTooltipActive: false,
      activeLineKey: null
    };
  },
  /**
   * 取ticks的定义域
   * @param  {Array} ticks
   * @param  {String} type  刻度类型
   * @return {Array}
   */
  getDomainOfTicks (ticks, type) {
    if (type === 'number') {
      return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    }

    return ticks;
  },
  /**
   * 根据指标名称获取 定义域
   * @param  {String} key
   * @param  {String} type 刻度类型
   * @return {Array}
   */
  getDomainByKey (key, type) {
    const {data} = this.props;
    const domain = data.map(entry => entry[key]);

    return type === 'number' ? [
            Math.min.apply(null, domain),
            Math.max.apply(null, domain)
          ] : domain;
  },

  getDomainOfItems (items, type) {
    const domain = items.map(item => {
      return this.getDomainByKey(item.props.dataKey, type);
    });

    if (type === 'number') {
      return domain.reduce((result, entry) => {
        return [
          Math.min(result[0], entry[0]),
          Math.max(result[1], entry[1])
        ];
      }, [Infinity, -Infinity]);
    }

    let tag = {}, result = [];

    domain.forEach(entry => {
      for (let i = 0, len = entry.length; i < len; i++) {
        if (!tag[entry[i]]) {
          tag[entry[i]] = true;

          result.push(entry[i]);
        }
      }
    });

    return result;
  },
  /**
   * 计算X轴 或者 Y轴的配置
   */
  getAxisMap (axisType = 'xAxis', ChartItem) {
    const {children, data} = this.props;
    const Axis = axisType === 'xAxis' ? XAxis : YAxis;
    const axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
    //所有定义的XAxis组件
    const axes = ReactUtils.findAllByType(children, Axis);
    //所有定义的LineItem组件
    const items = ReactUtils.findAllByType(children, ChartItem);

    let axisMap = {};

    if (axes && axes.length) {
      // 去除重复的情况
      axisMap = axes.reduce((result, child, i) => {
        let {type, dataKey} = child.props;
        let axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          return {...result, [axisId]: {
            ...child.props,
            axisType,
            domain: child.props.data ? child.props.data :
                    (dataKey ? this.getDomainByKey(dataKey, type) : this.getDomainOfItems(items.filter(entry => {
                      return entry.props[axisIdKey] === axisId;
                    }), type))
          }};
        }

        return result;
      }, {});
    } else if (items && items.length) {
      let index = -1;
      let len = data.length;
      // 当没有创建XAxis时，默认X轴为类目轴，根据data的序号来决定X轴绘制内容
      axisMap = items.reduce((result, child, i) => {
        let {dataKey} = child.props;
        let axisId = child.props[axisIdKey];

        if (!result[axisId]) {
          index++;
          return {
            ...result,
            [axisId]: {
              axisType,
              type: 'number',
              width: axisType === 'yAxis' ? 60 : 0,
              height: axisType === 'xAxis' ? 20 : 0,
              tickCount: 5,
              orient: ORIENT_MAP[axisType][index % 2],
              domain: axisType === 'xAxis' ? Tool.range(0, len) : this.getDomainOfItems(
                items.filter(entry => entry.props[axisIdKey] === axisId), 'number'
              )
            }
          };
        }

        return result;
      }, {});
    }

    return axisMap;
  },
  /**
   * 计算图表主体区域的偏移量
   * @param  {Object} xAxisMap
   * @param  {Object} yAxisMap
   * @return {Object}
   */
  getOffset (xAxisMap, yAxisMap) {
    const {width, height, margin} = this.props;

    const offsetH = Object.keys(yAxisMap).reduce((result, id) => {
      const entry = yAxisMap[id];
      const orient = entry.orient;

      result[orient] += entry.width;

      return result;
    }, {left: margin.left, right: margin.right});

    const offsetV = Object.keys(xAxisMap).reduce((result, id) => {
      const entry = xAxisMap[id];
      const orient = entry.orient;

      result[orient] += entry.height;

      return result;
    }, {top: margin.top, bottom: margin.bottom});

    return {
      ...offsetH,
      ...offsetV,
      width: width - offsetH.left - offsetH.right,
      height: height - offsetV.top - offsetV.bottom
    };
  },
  /**
   * 设置刻度函数的刻度
   * @param {Object} scale 刻度对象
   * @param {Object} opts  配置
   */
  setTicksOfScale (scale, opts) {
    if (opts.ticks && opts.ticks) {
      scale.domain(this.getDomainOfTicks(opts.ticks, opts.type))
           .ticks(opts.ticks.length);

      return;
    }

    if (opts.tickCount && opts.type === 'number') {
      let domain = scale.domain();
      let tickValues = getNiceTickValues(domain, opts.tickCount)

      opts.ticks = tickValues;
      scale.domain(this.getDomainOfTicks(tickValues, opts.type))
          .ticks(opts.tickCount);
    }
  },
  /**
   * 计算轴的刻度函数，位置，大小等信息
   * @param  {Object} axisMap  刻度对象
   * @param  {Object} offset   图形区域的偏移量
   * @param  {Object} axisType 刻度类型，x轴或者y轴
   * @return {Object}
   */
  getFormatAxisMap (axisMap, offset, axisType) {
    const {width, height} = this.props;
    const ids = Object.keys(axisMap);
    let steps = {
      left: offset.left,
      right: width - offset.right,
      top: offset.top,
      bottom: width - offset.bottom
    };

    return ids.reduce((result, id) => {
      let axis = axisMap[id];
      let {orient, type, domain, tickCount, tickFormat} = axis;
      let range = axisType === 'xAxis' ?
                  [offset.left, offset.left + offset.width] :
                  [offset.top, offset.top + offset.height];
      let scale;

      // 数值类型的刻度使用 linear刻度，类目轴使用 ordinal刻度
      if (type === 'number') {
        scale = linear().domain(domain).range(range);
      } else {
        scale = ordinal().domain(domain).rangeRoundPoints(range, 1);
      }

      this.setTicksOfScale(scale, axis);
      tickFormat && scale.tickFormat(tickFormat);

      result[id] = {...axis,
        x: axisType === 'xAxis' ? offset.left : ( orient === 'left' ? steps[orient] - axis.width : steps[orient]),
        y: axisType === 'xAxis' ? (orient === 'top' ? steps[orient] - axis.height : steps[orient]) : offset.top,
        width: axisType === 'xAxis' ? offset.width : axis.width,
        height: axisType === 'yAxis' ? offset.height : axis.height,
        scale
      };

      steps[orient] += axisType ==='xAxis' ?
                       (orient === 'top' ? -1 : 1) * result[id].height :
                       (orient === 'left' ? -1 : 1) * result[id].width;

      return result;
    }, {});
  },
  /**
   * 组装曲线数据
   * @param  {Object} xAxis   x轴刻度
   * @param  {Object} yAxis   y轴刻度
   * @param  {String} dataKey 该组数据所对应的key
   * @return {Array}
   */
  getComposeData (xAxis, yAxis, dataKey) {
    let {data, layout} = this.props;
    let xTicks = this.getTicks(xAxis);
    let yTicks = this.getTicks(yAxis);

    return data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord,
        value: entry[dataKey]
      };
    });
  },
  /**
   * 计算x轴，y轴的刻度
   * @param  {Function} scale 刻度函数
   * @return {Array}
   */
  getTicks (axis) {
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
  },
  /**
   * 计算网格的刻度
   * @param  {Object} axis 刻度对象
   * @return {Array}
   */
  getGridTick (axis) {
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
  },
  /**
   * 判断鼠标是否在图表的图形区域
   * @param  {Object}  offset 图形区域距离容器的偏移量
   * @param  {Object}  e      事件对象
   * @return {Boolean}
   */
  getMouseInfo (xAxisMap, yAxisMap, offset, e) {
    let isIn = e.chartX >= offset.left && e.chartX <= offset.left + offset.width
      && e.chartY >= offset.top && e.chartY <= offset.top + offset.height;

    if (!isIn) {return null};

    let {layout} = this.props;
    let axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    let pos = layout === 'horizontal' ? e.chartX : e.chartY;
    let ids = Object.keys(axisMap);
    let axis = axisMap[ids[0]];
    let ticks = this.getTicks(axis);
    let index = 0;

    for (let i = 0, len = ticks.length; i < len; i++) {
      if ((i === 0 && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2)
        || (i > 0 && i < len -1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2
          && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2 )
        || (i === len - 1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2) ) {
        index = i;
        break;
      }
    }
    return {
      activeTooltipIndex: index,
      activeTooltipLabel: ticks[index].value,
      activeTooltipPosition: (e.chartX > offset.left + offset.width / 2 ? 'right' : 'left')
                  + '-' + (e.chartY > offset.top + offset.height / 2 ? 'bottom' : 'top'),
      activeTooltipCoord: {
        x: layout === 'horizontal' ? ticks[index].coord : e.chartX,
        y: layout === 'horizontal' ? e.chartY : ticks[index].coord
      }
    };
  },
  /**
   * 鼠标进入图形区域
   * @param  {Object} offset   图形区域距离容器的偏移量
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} e        事件对象
   */
  handleMouseEnter (offset, xAxisMap, yAxisMap, e) {
    let container = React.findDOMNode(this);
    let containerOffset = DOMUtils.offset(container);
    let ne = EventUtils.normalize(e, containerOffset);
    let mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

    if (mouse) {
      this.setState({
        ...mouse,
        isTooltipActive: true,
        chartX: ne.chartX,
        chartY: ne.chartY
      });
    }
  },
  /**
   * 鼠标在图形区域移动
   * @param  {Object} offset   图形区域距离容器的偏移量
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} e        事件对象
   */
  handleMouseMove (offset, xAxisMap, yAxisMap, e) {
    let container = React.findDOMNode(this);
    let containerOffset = DOMUtils.offset(container);
    let ne = EventUtils.normalize(e, containerOffset);
    let mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

    if (mouse) {
      this.setState({
        ...mouse,
        isTooltipActive: true,
        chartX: ne.chartX,
        chartY: ne.chartY
      });
    } else {
      this.setState({
        isTooltipActive: false
      });
    }
  },
  /**
   * 鼠标离开图形区域的响应事件
   * @param  {Object} e 事件对象
   */
  handleMouseLeave (e) {
    this.setState({
      isTooltipActive: false
    });
  },
  /**
   * 鼠标进入曲线的响应事件
   * @param {String} key 曲线唯一对应的key
   * @param {Object} e   事件对象
   */
  handleLineMouseEnter (key, e) {
    this.setState({
      activeLineKey: key
    });
  },
  /**
   * 鼠标离开曲线的响应事件
   */
  handleLineMouseLeave () {
    this.setState({
      activeLineKey: null
    });
  },
  /**
   * 渲染x轴部分
   * @return {[type]} [description]
   */
  renderXAxis (xAxisMap) {
    let ids;

    if (xAxisMap && (ids = Object.keys(xAxisMap)) && ids.length) {
      const xAxes = ids.map(id => {
        let axis = xAxisMap[id];

        return (
          <CartesianAxis
            key={'x-axis-' + axis}
            x={axis.x}
            y={axis.y}
            width={axis.width}
            height={axis.height}
            key={'x-axis-' + id}
            orient={axis.orient}
            ticks={this.getTicks(axis)}/>
        );
      });

      return <Layer key='x-axis-layer' className='x-axis-layer'>{xAxes}</Layer>;
    }
  },
  /**
   * 渲染Y轴部分
   * @param  {Object} yAxisMap 所有的Y轴配置
   * @return {ReactComponent}
   */
  renderYAxis (yAxisMap) {
    let ids;

    if (yAxisMap && (ids = Object.keys(yAxisMap)) && ids.length) {
      const yAxes = ids.map(id => {
        let axis = yAxisMap[id];

        return (
          <CartesianAxis
            key={'y-axis-' + axis}
            x={axis.x}
            y={axis.y}
            width={axis.width}
            height={axis.height}
            key={'y-axis-' + id}
            orient={axis.orient}
            ticks={this.getTicks(axis)}/>
        );
      });

      return <Layer key='y-axis-layer' className='y-axis-layer'>{yAxes}</Layer>;
    }
  },
  /**
   * 渲染网格部分
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderGrid (xAxisMap, yAxisMap, offset) {
    let xIds = Object.keys(xAxisMap);
    let yIds = Object.keys(yAxisMap);
    let xAxis = xAxisMap[xIds[0]];
    let yAxis = yAxisMap[yIds[0]];

    return (
      <CartesianGrid
        key={'grid'}
        x={offset.left}
        y={offset.top}
        width={offset.width}
        height={offset.height}
        verticalPoints={this.getGridTick(xAxis)}
        horizontalPoints={this.getGridTick(yAxis)}/>
    );
  },
  /**
   * 绘制图形部分
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderItems (xAxisMap, yAxisMap, offset) {
    const {children} = this.props;
    const {activeLineKey} = this.state;

    return ReactUtils.findAllByType(children, LineItem).map((child, i) => {
      let {xAxisId, yAxisId, dataKey, strokeWidth, ...other} = child.props;

      strokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      strokeWidth = activeLineKey === dataKey ? strokeWidth + 2 : strokeWidth;

      return (
        <Line
          {...other}
          key={'line-' + i}
          x={offset.x}
          y={offset.y}
          width={offset.width}
          height={offset.height}
          xScale={xAxisMap[xAxisId]}
          yScale={yAxisMap[yAxisId]}
          strokeWidth={strokeWidth}
          onMouseLeave={this.handleLineMouseLeave}
          onMouseEnter={this.handleLineMouseEnter.bind(null, dataKey)}
          data={this.getComposeData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey)}/>
      );
    }, this);
  },
  /**
   * 绘制图例部分
   * @param  {Object} offset 图形区域的偏移量
   * @return {ReactComponent}
   */
  renderLegend (offset) {
    const {children} = this.props;

    const legendData = ReactUtils.findAllByType(children, LineItem).map((child, i) => {
      let {dataKey, stroke} = child.props;

      return {
        type: 'line',
        color: stroke,
        value: dataKey
      };
    }, this);

    return <Legend width={offset.width} height={40} data={legendData}/>
  },

  getTooltipContent () {
    let {children, data} = this.props;
    let {activeLineKey, activeTooltipIndex} = this.state;
    let items = ReactUtils.findAllByType(children, LineItem);

    if (activeTooltipIndex < 0 || !items || !items.length) {
      return;
    }

    items = activeLineKey ?
            items.filter(item => item.props.dataKey === activeLineKey) :
            items;

    return items.map((item, index) => {
      let {dataKey, stroke} = item.props;

      return {
        color: stroke,
        key: dataKey,
        value: data[activeTooltipIndex][dataKey]
      };
    });
  },
  /**
   * 渲染浮层
   * @return {ReactComponent}
   */
  renderTooltip () {
    let {chartX, chartY, isTooltipActive, activeTooltipIndex,
          activeTooltipLabel, activeTooltipCoord,
          activeTooltipPosition} = this.state;

    return (
      <Tooltip
        position={activeTooltipPosition}
        active={isTooltipActive}
        label={activeTooltipLabel}
        data={this.getTooltipContent()}
        coordinate={activeTooltipCoord}
        mouseX={chartX}
        mouseY={chartY}/>
    );
  },

  render () {
    const {style} = this.props;
    let xAxisMap = this.getAxisMap('xAxis', LineItem);
    let yAxisMap = this.getAxisMap('yAxis', LineItem);
    let offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className='recharts-wrapper'
        style={{position: 'relative', cursor: 'default', ...style}}
        onMouseEnter={this.handleMouseEnter.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(null, offset, xAxisMap, yAxisMap)}
        onMouseLeave={this.handleMouseLeave}>

        <Surface {...this.props}>
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderItems(xAxisMap, yAxisMap, offset)}
        </Surface>

        {this.renderLegend(offset)}
        {this.renderTooltip()}
      </div>
    );
  }
});

export default LineChart;
