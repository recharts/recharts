import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {getNiceTickValues} from 'recharts-scale';
import {linear, ordinal} from 'd3-scale';

import Layer from '../container/Layer';
import CartesianAxis from '../component/CartesianAxis';
import CartesianGrid from '../component/CartesianGrid';

import ReactUtils from '../util/ReactUtils';
import EventUtils from '../util/EventUtils';
import DOMUtils from '../util/DOMUtils';
import LodashUtils from '../util/LodashUtils';

import XAxis from './XAxis';
import YAxis from './YAxis';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Brush from '../component/Brush';
import ReferenceLine from '../component/ReferenceLine';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};

/**
 * 欧式坐标系图表基类
 */
class CartesianChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataStartIndex: 0,
      dataEndIndex: props.data.length - 1,
      activeTooltipIndex: -1,
      activeTooltipLabel: '',
      activeTooltipPosition: 'left-bottom',
      activeTooltipCoord: {x: 0, y: 0},
      isTooltipActive: false,
      activeLineKey: null,
      activeBarKey: null
    };
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    stackType: PropTypes.oneOf(['value', 'percent']),
    title: PropTypes.string,
    style: PropTypes.object,
    barOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barGap: PropTypes.number,
    barSize: PropTypes.number
  };


  static defaultProps = {
    style: {},
    barOffset: '10%',
    barGap: 4,
    layout: 'horizontal',
    margin: {top: 5, right: 5, bottom: 5, left: 5}
  };

  /**
   * 取ticks的定义域
   * @param  {Array} ticks
   * @param  {String} type  刻度类型
   * @return {Array}
   */
  getDomainOfTicks(ticks, type) {
    if (type === 'number') {
      return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    }

    return ticks;
  }
  /**
   * 根据指标名称获取 定义域
   * @param  {String} key
   * @param  {String} type 刻度类型
   * @return {Array}
   */
  getDomainByKey(key, type) {
    const {data} = this.props;
    const {dataStartIndex, dataEndIndex} = this.state;
    const domain = data.slice(dataStartIndex, dataEndIndex + 1)
                       .map(entry => entry[key]);

    return type === 'number' ? [
            Math.min.apply(null, domain),
            Math.max.apply(null, domain)
          ] : domain;
  }
  /**
   * 根据LineItem或者Bar计算数据的定义域
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @param  {String} type  相应的坐标轴类型，number - 数值类型的坐标轴, category - 类目轴
   * @return {Array}        取值范围
   */
  getDomainOfItems(items, type) {
    const domain = items.map(item => {
      return this.getDomainByKey(item.props.dataKey, type);
    });

    if (type === 'number') {
      // 计算数值类型的轴的取值范围
      return domain.reduce((result, entry) => {
        return [
          Math.min(result[0], entry[0]),
          Math.max(result[1], entry[1])
        ];
      }, [Infinity, -Infinity]);
    }

    let tag = {}, result = [];

    // 类目轴，计算类目轴的并集
    domain.forEach(entry => {
      for (let i = 0, len = entry.length; i < len; i++) {
        if (!tag[entry[i]]) {
          tag[entry[i]] = true;

          result.push(entry[i]);
        }
      }
    });

    return result;
  }

  /**
   * 计算X轴 或者 Y轴的配置
   */
  getAxisMap(axisType = 'xAxis', items) {
    const {children} = this.props;
    const Axis = axisType === 'xAxis' ? XAxis : YAxis;
    const axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
    //所有定义的XAxis组件
    const axes = ReactUtils.findAllByType(children, Axis);

    let axisMap = {};

    // 根据用户显性配置的轴来计算轴的配置
    if (axes && axes.length) {
      axisMap = this.getAxisMapByAxes(axes, items, axisType, axisIdKey);
    } else if (items && items.length) {
      axisMap = this.getAxisMapByItems(items, Axis, axisType, axisIdKey)
    }

    return axisMap;
  }
  /**
   * 根据用户显性配置的轴来计算轴的配置
   * @param {Array[ReactComponent]} axes 轴对象
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @param  {String} axes 轴的类型, xAxis - x轴, yAxis - y轴
   * @param  {String} axisIdKey 标识轴的id的key
   * @return {Object}      刻度配置对象
   */
  getAxisMapByAxes (axes, items, axisType, axisIdKey) {
    // 需要去除重复的情况
    const axisMap = axes.reduce((result, child, i) => {
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

    return axisMap;
  }
  /**
   * 根据用户配置的图形元素来计算轴的配置，但是这种轴不会显示
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @param  {ReactComponent} Axis 轴对象
   * @param  {String} axes 轴的类型, xAxis - x轴, yAxis - y轴
   * @param  {String} axisIdKey 标识轴的id的key
   * @return {Object}      刻度配置对象
   */
  getAxisMapByItems (items, Axis, axisType, axisIdKey) {
    const {dataEndIndex, dataStartIndex} = this.state;
    const len = dataEndIndex - dataStartIndex + 1;
    let index = -1;

    // 当没有创建XAxis时，默认X轴为类目轴，根据data的序号来决定X轴绘制内容
    const axisMap = items.reduce((result, child, i) => {
      let {dataKey} = child.props;
      let axisId = child.props[axisIdKey];

      if (!result[axisId]) {
        index++;
        return {
          ...result,
          [axisId]: {
            axisType,
            type: Axis.defaultProps.type,
            hide: true,
            width: Axis.defaultProps.width,
            height: Axis.defaultProps.height,
            tickCount: Axis.defaultProps.tickCount,
            orient: ORIENT_MAP[axisType][index % 2],
            domain: axisType === 'xAxis' ? LodashUtils.range(0, len) : this.getDomainOfItems(
              items.filter(entry => entry.props[axisIdKey] === axisId), 'number'
            )
          }
        };
      }

      return result;
    }, {});

    return axisMap;
  }

    /**
   * 计算图表中图形区域的偏移量
   * @param  {Object} xAxisMap
   * @param  {Object} yAxisMap
   * @return {Object}
   */
  getOffset(xAxisMap, yAxisMap) {
    const {width, height, margin, children} = this.props;
    const brushItem = ReactUtils.findChildByType(children, Brush);

    const offsetH = Object.keys(yAxisMap).reduce((result, id) => {
      const entry = yAxisMap[id];
      const orient = entry.orient;

      result[orient] += entry.hide ? 0 : entry.width;

      return result;
    }, {left: margin.left, right: margin.right});

    const offsetV = Object.keys(xAxisMap).reduce((result, id) => {
      const entry = xAxisMap[id];
      const orient = entry.orient;

      result[orient] += entry.hide ? 0 : entry.height;

      return result;
    }, {top: margin.top, bottom: margin.bottom});

    if (brushItem) {
      offsetV.bottom += brushItem.props.height || Brush.defaultProps.height;
    }

    return {
      ...offsetH,
      ...offsetV,
      width: width - offsetH.left - offsetH.right,
      height: height - offsetV.top - offsetV.bottom
    };
  }
  /**
   * 获取图形元素的主色调
   * @param  {ReactElement} item 图形元素
   * @return {String}       颜色
   */
  getMainColorOfItem (item) {
    const displayName = item.type.displayName;
    let result;

    switch (displayName) {
      case 'LineItem':
        result = item.props.stroke;
        break;
      case 'BarItem':
        result = item.props.fill;
        break;
    };

    return result;
  }
  /**
   * 设置刻度函数的刻度值
   * @param {Object} scale 刻度对象
   * @param {Object} opts  配置
   */
  setTicksOfScale(scale, opts) {
    // 优先使用用户配置的刻度
    if (opts.ticks && opts.ticks) {
      scale.domain(this.getDomainOfTicks(opts.ticks, opts.type))
           .ticks(opts.ticks.length);

      return;
    }
    // 数值类型的刻度，指定了刻度的个数后，根据范围动态计算
    if (opts.tickCount && opts.type === 'number' && !opts.hide) {
      let domain = scale.domain();
      let tickValues = getNiceTickValues(domain, opts.tickCount)

      opts.ticks = tickValues;
      scale.domain(this.getDomainOfTicks(tickValues, opts.type))
          .ticks(opts.tickCount);
    } else if (opts.type === 'number' && opts.hide && scale.domain()[0] > 0) {
      scale.domain([0, scale.domain()[1]]);
    }
  }
  /**
   * 计算轴的刻度函数，位置，大小等信息
   * @param  {Object} axisMap  刻度对象
   * @param  {Object} offset   图形区域的偏移量
   * @param  {Object} axisType 刻度类型，x轴或者y轴
   * @return {Object}
   */
  getFormatAxisMap(axisMap, offset, axisType) {
    const {width, height, layout} = this.props;
    const ids = Object.keys(axisMap);
    let steps = {
      left: offset.left,
      right: width - offset.right,
      top: offset.top,
      bottom: height - offset.bottom
    };

    return ids.reduce((result, id) => {
      let axis = axisMap[id];
      let {orient, type, domain, tickCount, tickFormatter} = axis;
      let range = axisType === 'xAxis' ?
                  [offset.left, offset.left + offset.width] :
                  (
                    layout === 'horizontal' ?
                    [offset.top + offset.height, offset.top]:
                    [offset.top, offset.top + offset.height]
                  );
      let scale;

      // 数值类型的刻度使用 linear刻度，类目轴使用 ordinal刻度
      if (type === 'number') {
        scale = linear().domain(domain).range(range);
      } else {
        scale = ordinal().domain(domain)
                        .rangeRoundPoints(range, this.displayName === 'LineChart' || this.displayName === 'AreaChart' ? 0 : 1);
      }

      this.setTicksOfScale(scale, axis);
      tickFormatter && scale.tickFormat(tickFormatter);

      result[id] = {...axis,
        x: axisType === 'xAxis' ? offset.left : ( orient === 'left' ? steps[orient] - axis.width : steps[orient]),
        y: axisType === 'xAxis' ? (orient === 'top' ? steps[orient] - axis.height : steps[orient]) : offset.top,
        width: axisType === 'xAxis' ? offset.width : axis.width,
        height: axisType === 'yAxis' ? offset.height : axis.height,
        scale
      };

      steps[orient] += axis.hide ? 0 : (
                        axisType ==='xAxis' ?
                        (orient === 'top' ? -1 : 1) * result[id].height :
                        (orient === 'left' ? -1 : 1) * result[id].width
                      );

      return result;
    }, {});
  }

  /**
   * 计算x轴，y轴的刻度
   * @param  {Object}  axis 刻度对象
   * @return {Array}
   */
  getAxisTicks(axis, fn) {
    const scale = axis.scale;

    if (axis.ticks) {
      return axis.ticks.map(entry => {
        const result = {coord: scale(entry), value: entry};

        return fn ? fn(result) : result;
      })
    }

    if (scale.ticks) {
      return scale.ticks(axis.tickCount).map(entry => {
        const result = {coord: scale(entry), value: entry};

        return fn ? fn(result) : result;
      });
    }

    return scale.domain().map((entry, index) => {
      const result = {coord: scale(entry), value: entry};

      return fn ? fn(result) : result;
    });
  }

  /**
   * 计算网格的刻度
   * @param  {Object} axis 刻度对象
   * @return {Array}
   */
  getGridTicks(ticks, min, max) {
    let hasMin, hasMax;
    let values;

    values = ticks.map(entry => {
      if (entry.coord === min) { hasMin = true;}
      if (entry.coord === max) { hasMax = true;}

      return entry.coord;
    });

    if (!hasMin) { values.push(min);}
    if (!hasMax) { values.push(max);}

    return values;
  }

  /**
   * 判断鼠标是否在图表的图形区域
   * @param  {Object}  offset 图形区域距离容器的偏移量
   * @param  {Object}  e      事件对象
   * @return {Boolean}
   */
  getMouseInfo(xAxisMap, yAxisMap, offset, e) {
    let isIn = e.chartX >= offset.left && e.chartX <= offset.left + offset.width
      && e.chartY >= offset.top && e.chartY <= offset.top + offset.height;

    if (!isIn) {return null};

    let {layout} = this.props;
    let axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    let pos = layout === 'horizontal' ? e.chartX : e.chartY;
    let ids = Object.keys(axisMap);
    let axis = axisMap[ids[0]];
    let ticks = this.getAxisTicks(axis);
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
  }

  handleBrushChange = ({startIndex, endIndex}) => {
    this.setState({
      dataStartIndex: startIndex,
      dataEndIndex: endIndex
    });
  }

  /**
   * 鼠标进入图形区域
   * @param  {Object} offset   图形区域距离容器的偏移量
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} e        事件对象
   */
  handleMouseEnter = (offset, xAxisMap, yAxisMap, e) => {
    let container = ReactDOM.findDOMNode(this);
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
  }
  /**
   * 鼠标在图形区域移动
   * @param  {Object} offset   图形区域距离容器的偏移量
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} e        事件对象
   */
  handleMouseMove = (offset, xAxisMap, yAxisMap, e) => {
    let container = ReactDOM.findDOMNode(this);
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
  }
  /**
   * 鼠标离开图形区域的响应事件
   * @param  {Object} e 事件对象
   */
  handleMouseLeave = (e) => {
    this.setState({
      isTooltipActive: false
    });
  }

  /**
   * 渲染x轴部分
   * @return {[type]} [description]
   */
  renderXAxis(xAxisMap) {
    const {width, height} = this.props;
    let ids;

    if (xAxisMap && (ids = Object.keys(xAxisMap)) && ids.length) {
      const xAxes = [];

      for (let i = 0, len = ids.length; i < len; i++) {
        let axis = xAxisMap[ids[i]];

        if (!axis.hide) {
          xAxes.push((
            <CartesianAxis
              {...axis}
              key={'x-axis-' + ids[i]}
              x={axis.x}
              y={axis.y}
              width={axis.width}
              height={axis.height}
              key={'x-axis-' + ids[i]}
              orient={axis.orient}
              viewBox={{x: 0, y: 0, width, height}}
              ticks={this.getAxisTicks(axis)}/>
          ));
        }
      }

      return xAxes.length ? <Layer key='x-axis-layer' className='x-axis-layer'>{xAxes}</Layer> : null;
    }
  }
  /**
   * 渲染Y轴部分
   * @param  {Object} yAxisMap 所有的Y轴配置
   * @return {ReactComponent}
   */
  renderYAxis(yAxisMap) {
    const {width, height} = this.props;
    let ids;

    if (yAxisMap && (ids = Object.keys(yAxisMap)) && ids.length) {
      const yAxes = [];
      for (let i = 0, len = ids.length; i < len; i++) {
        let axis = yAxisMap[ids[i]];

        if (!axis.hide) {
          yAxes.push((
            <CartesianAxis
              {...axis}
              key={'y-axis-' + ids[i]}
              x={axis.x}
              y={axis.y}
              width={axis.width}
              height={axis.height}
              key={'y-axis-' + ids[i]}
              orient={axis.orient}
              viewBox={{x: 0, y: 0, width, height}}
              ticks={this.getAxisTicks(axis)}/>
          ));
        }
      }

      return yAxes.length ? <Layer key='y-axis-layer' className='y-axis-layer'>{yAxes}</Layer> : null;
    }
  }
  /**
   * 渲染网格部分
   * @param  {Object} xAxisMap x轴刻度
   * @param  {Object} yAxisMap y轴刻度
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderGrid(xAxisMap, yAxisMap, offset) {
    const {children, width, height} = this.props;
    const gridItem = ReactUtils.findChildByType(children, CartesianGrid);

    if (!gridItem) {return;}

    const xIds = Object.keys(xAxisMap);
    const yIds = Object.keys(yAxisMap);
    const xAxis = xAxisMap[xIds[0]];
    const yAxis = yAxisMap[yIds[0]];

    const verticalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...xAxis,
      ticks: this.getAxisTicks(xAxis),
      viewBox: {x: 0, y: 0, width, height}
    }), offset.left, offset.left + offset.width);

    const horizontalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...yAxis,
      ticks: this.getAxisTicks(yAxis),
      viewBox: {x: 0, y: 0, width, height}
    }), offset.top, offset.top + offset.height);

    return React.cloneElement(gridItem, {
      key: 'grid',
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
      verticalPoints, horizontalPoints
    });
  }
  /**
   * 绘制图例部分
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @param  {Object} offset 图形区域的偏移量
   * @return {ReactComponent}
   */
  renderLegend(items, offset, legendItem) {
    const legendData = items.map((child, i) => {
      let {dataKey, name, stroke, fill, legendType} = child.props;

      return {
        type: legendType || 'square',
        color: this.getMainColorOfItem(child),
        value: name || dataKey
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
  getTooltipContent(items) {
    const {activeLineKey, activeTooltipIndex, dataStartIndex, dataEndIndex} = this.state;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);

    if (activeTooltipIndex < 0 || !items || !items.length) {
      return;
    }

    items = activeLineKey ?
            items.filter(item => item.props.dataKey === activeLineKey) :
            items;

    return items.map((child, index) => {
      let {dataKey, name, unit, formatter} = child.props;

      return {
        key: name || dataKey,
        unit: unit || '',
        color: this.getMainColorOfItem(child),
        value: data[activeTooltipIndex][dataKey],
        formatter: formatter
      };
    });
  }
  /**
   * 渲染浮层
   * @param  {Array[ReactComponet]} items 线图元素或者柱图元素
   * @return {ReactComponent}
   */
  renderTooltip(items) {
    const {children} = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }

    let {chartX, chartY, isTooltipActive, activeTooltipIndex,
          activeTooltipLabel, activeTooltipCoord,
          activeTooltipPosition} = this.state;

    return React.cloneElement(tooltipItem, {
      position: activeTooltipPosition,
      active: isTooltipActive,
      label: activeTooltipLabel,
      data: isTooltipActive ? this.getTooltipContent(items) : [],
      coordinate: activeTooltipCoord,
      mouseX: chartX,
      mouseY: chartY
    });
  }

  renderBrush (xAxisMap, yAxisMap, offset) {
    const {layout, children, data} = this.props;
    const brushItem = ReactUtils.findChildByType(children, Brush);

    if (!brushItem) {return;}

    const dataKey = brushItem.props.dataKey;
    const height = (brushItem.props.height || Brush.defaultProps.height) + 1;

    return React.cloneElement(brushItem, {
      onBrushChange: this.handleBrushChange,
      data: data.map(entry => entry[dataKey]),
      x: offset.left,
      y: offset.top + offset.height + offset.bottom - height,
      width: offset.width
    });

  }

  renderReferenceLines (xAxisMap, yAxisMap, offset) {
    const {children} = this.props;
    const lines = ReactUtils.findAllByType(children, ReferenceLine);

    if (!lines || !lines.length) {return;}

    return lines.map((entry, i) => {
      return React.cloneElement(entry, {
        key: 'reference-line-' + i,
        xAxisMap, yAxisMap,
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height
      });
    });

  }
};

export default CartesianChart;
