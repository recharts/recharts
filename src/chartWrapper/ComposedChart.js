import React, { PropTypes } from 'react';
import CartesianChart from './CartesianChart';

import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Line from '../chart/Line';
import Bar from '../chart/Bar';
import Area from '../chart/Area';

import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Rectangle from '../shape/Rectangle';

import ReactUtils from '../util/ReactUtils';
import LodashUtils from '../util/LodashUtils';

class ComposedChart extends CartesianChart {

  static displayName = 'ComposedChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    style: {},
    barCategoryGap: '10%',
    barGap: 4,
    layout: 'horizontal',
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };
  /**
   * Compose the data of each line
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  getLineComposeData(xAxis, yAxis, dataKey) {
    const { data, layout } = this.props;
    const bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);

    return data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord + bandSize / 2,
        value: entry[dataKey],
      };
    });
  }
  /**
   * Compose the data of each area
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array} Composed data
   */
  getAreaComposeData(xAxis, yAxis, dataKey) {
    const { data, layout } = this.props;
    const bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const points = data.map((entry, index) => {
      return {
        x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(entry[dataKey]),
        y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord + bandSize / 2,
        value: entry[dataKey],
      };
    });

    let range;
    let baseLine;

    if (layout === 'horizontal') {
      range = yAxis.scale.range();
      baseLine = xAxis.orient === 'top' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
    } else {
      range = xAxis.scale.range();
      baseLine = yAxis.orient === 'left' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
    }

    return {
      points,
      baseLine,
      baseLineType: layout,
    };
  }
  /**
   * Compose the data of each bar
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} offset      The offset of main part in the svg element
   * @param  {String} dataKey     The unique key of a group
   * @return {Array} Composed data
   */
  getBarComposeData(barPosition, xAxis, yAxis, offset, dataKey) {
    const { layout } = this.props;
    const { dataStartIndex, dataEndIndex } = this.state;
    const data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
    const pos = barPosition[dataKey];
    const xTicks = this.getAxisTicks(xAxis);
    const yTicks = this.getAxisTicks(yAxis);
    const baseline = this.getBaseLine(xAxis, yAxis);
    return data.map((entry, index) => {
      const value = entry[dataKey];
      let x;
      let y;
      let width;
      let height;

      if (layout === 'horizontal') {
        x = xTicks[index].coord + pos.offset;
        y = xAxis.orient === 'top' ? offset.top : yAxis.scale(value);
        width = pos.size;
        height = xAxis.orient === 'top' ?
                yAxis.scale(value) - baseline :
                baseline - yAxis.scale(value);
      } else {
        x = yAxis.orient === 'left' ? offset.left : xAxis.scale(value);
        y = yTicks[index].coord + pos.offset;
        width = yAxis.orient === 'left' ?
                xAxis.scale(value) - baseline :
                baseline - xAxis.scale(value);
        height = pos.size;
      }

      return { ...entry, x, y, width, height, value };
    });
  }

  getBaseLine(xAxis, yAxis) {
    const { layout } = this.props;
    const scale = layout === 'horizontal' ? yAxis.scale : xAxis.scale;
    const domain = scale.domain();
    const min = Math.max(Math.min(domain[0], domain[1]), 0);

    return scale(min);
  }
  /**
   * Calculate the size of each bar and the gap between two bars
   * @param  {Number}   bandSize  The size of each category
   * @param  {sizeList} sizeList  The size of all groups
   * @return {Number} The size of each bar and the gap between two bars
   */
  getBarPosition(bandSize, sizeList) {
    const { barGap, barCategoryGap } = this.props;
    const len = sizeList.length;
    let result;

    // whether or not is barSize setted by user
    if (sizeList[0].barSize === +sizeList[0].barSize) {
      let sum = sizeList.reduce((res, entry) => {
        return res + entry.barSize;
      }, 0);
      sum += (len - 1) * barGap;
      const offset = ((bandSize - sum) / 2) >> 0;
      let prev = { offset: offset - barGap, size: 0 };

      result = sizeList.reduce((res, entry) => {
        res[entry.dataKey] = {
          offset: prev.offset + prev.size + barGap,
          size: entry.barSize,
        };
        prev = res[entry.dataKey];

        return res;
      }, {});
    } else {
      const offset = LodashUtils.getPercentValue(barCategoryGap, bandSize);
      const size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

      result = sizeList.reduce((res, entry, i) => {
        res[entry.dataKey] = {
          offset: offset + (size + barGap) * i,
          size,
        };

        return res;
      }, {});
    }

    return result;
  }
  /**
   * Calculate the size of all groups
   * @param  {Array} items All the instance of Bar
   * @return {Object} The size of all groups
   */
  getSizeList(items) {
    const { layout, barSize } = this.props;

    const sizeList = items.reduce((result, child) => {
      const { xAxisId, yAxisId, dataKey } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;

      const list = result[axisId] || [];

      list.push({ dataKey, barSize: child.props.barSize || barSize });

      result[axisId] = list;

      return result;
    }, {});

    return sizeList;
  }
  /**
   * Calculate the size between two category
   * @param  {Function} scale Scale function
   * @return {Number} Size
   */
  getBandSize(scale) {
    if (scale && scale.bandwidth) {
      return scale.bandwidth();
    }
    return 0;
  }
  /**
   * Handler of mouse entering bar chart
   * @param {String} key  The unique key of a group of data
   * @return {Object}     null
   */
  handleBarMouseEnter(key) {
    this.setState({
      activeBarKey: key,
    });
  }
  /**
   * Handler of mouse leaving area chart
   * @return {Object} null
   */
  handleBarMouseLeave() {
    this.setState({
      activeBarKey: null,
    });
  }
  /**
   * Handler of mouse entering line chart
   * @param {String}       key The unique key of a group of data
   * @return {Object} no return
   */
  handleLineMouseEnter(key) {
    this.setState({
      activeLineKey: key,
    });
  }
  /**
   * Handler of mouse leaving line chart
   * @return {Object} no return
   */
  handleLineMouseLeave() {
    this.setState({
      activeLineKey: null,
    });
  }
  /**
   * Handler of mouse entering area chart
   * @param {String} key  The unique key of a group of data
   * @return {Object} null
   */
  handleAreaMouseEnter(key) {
    this.setState({
      activeAreaKey: key,
    });
  }
  /**
   * Handler of mouse leaving area chart
   * @return {Object} null
   */
  handleAreaMouseLeave() {
    this.setState({
      activeAreaKey: null,
    });
  }

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);
    if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {return null;}

    const { layout } = this.props;
    const { activeTooltipIndex } = this.state;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const bandSize = this.getBandSize(axis.scale);

    const ticks = this.getAxisTicks(axis);
    const start = ticks[activeTooltipIndex].coord;
    const cursorProps = {
      fill: '#f1f1f1',
      ...ReactUtils.getPresentationAttributes(tooltipItem.props.cursor),
      x: layout === 'horizontal' ? start : offset.left + 0.5,
      y: layout === 'horizontal' ? offset.top + 0.5 : start,
      width: layout === 'horizontal' ? bandSize : offset.width - 1,
      height: layout === 'horizontal' ? offset.height - 1 : bandSize,
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      React.createElement(Rectangle, cursorProps);
  }

  /**
   * Draw the lines
   * @param  {Array} items     All the instance of Line
   * @param  {Object} xAxisMap The configuration of all x-axes
   * @param  {Object} yAxisMap The configuration of all y-axes
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Line
   */
  renderLineItems(items, xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const { activeLineKey, isTooltipActive, activeTooltipIndex } = this.state;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const lineItems = items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey, strokeWidth, stroke } = child.props;
      const points = this.getLineComposeData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
      const activePoint = points[activeTooltipIndex];
      const pointStyle = { fill: stroke, strokeWidth: 2, stroke: '#fff' };

      let finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      finalStrokeWidth = activeLineKey === dataKey ? finalStrokeWidth + 2 : finalStrokeWidth;

      if (hasDot && activePoint) {
        dotItems.push(<Dot key={'area-dot-' + i} cx={activePoint.x} cy={activePoint.y} r={4} {...pointStyle}/>);
      }

      return React.cloneElement(child, {
        key: 'line-' + i,
        ...offset,
        strokeWidth: finalStrokeWidth,
        onMouseLeave: ::this.handleLineMouseLeave,
        onMouseEnter: this.handleLineMouseEnter.bind(this, dataKey),
        points,
      });
    }, this);

    return (
      <g key="recharts-line-wrapper">
        <g key="recharts-line">{lineItems}</g>
        <g key="recharts-line-dot">{dotItems}</g>
      </g>
    );
  }

  /**
   * Draw the areas
   * @param  {Array} items     React elements of Area
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent} The instances of Area
   */
  renderAreaItems(items, xAxisMap, yAxisMap, offset) {
    const { children } = this.props;
    const { activeAreaKey, isTooltipActive, activeTooltipIndex } = this.state;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);
    const hasDot = tooltipItem && isTooltipActive;
    const dotItems = [];

    const areaItems = items.reduce((result, child, i) => {
      const { xAxisId, yAxisId, dataKey, fillOpacity, fill } = child.props;
      const composeData = this.getAreaComposeData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);

      const activePoint = composeData.points && composeData.points[activeTooltipIndex];
      const pointStyle = { fill, strokeWidth: 2, stroke: '#fff' };

      if (hasDot && activePoint) {
        dotItems.push(<Dot key={'area-dot-' + i} cx={activePoint.x} cy={activePoint.y} r={4} {...pointStyle}/>);
      }

      let finalFillOpacity = fillOpacity === +fillOpacity ? fillOpacity : Area.defaultProps.fillOpacity;
      finalFillOpacity = activeAreaKey === dataKey ? Math.min(finalFillOpacity * 1.2, 1) : finalFillOpacity;

      const area = React.cloneElement(child, {
        key: 'area-' + i,
        ...offset,
        ...composeData,
        fillOpacity: finalFillOpacity,
        onMouseLeave: ::this.handleAreaMouseLeave,
        onMouseEnter: this.handleAreaMouseEnter.bind(this, dataKey),
      });

      return activeAreaKey === dataKey ? [...result, area] : [area, ...result];
    }, []);

    return (
      <g key="recharts-area-wrapper">
        <g key="recharts-area">{areaItems}</g>
        <g key="recharts-area-dot">{dotItems}</g>
      </g>
    );
  }

  /**
   * Draw the bars
   * @param  {Array} items     All the instance of Bar
   * @param  {Object} xAxisMap The configuration of all x-axis
   * @param  {Object} yAxisMap The configuration of all y-axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @return {ReactComponent}  All the instances of Bar
   */
  renderBarItems(items, xAxisMap, yAxisMap, offset) {
    if (!items || !items.length) {return null;}

    const { layout } = this.props;
    const sizeList = this.getSizeList(items);

    const barPositionMap = {};

    return items.map((child, i) => {
      const { xAxisId, yAxisId, dataKey } = child.props;
      const axisId = layout === 'horizontal' ? xAxisId : yAxisId;
      const bandSize = this.getBandSize(
                        layout === 'horizontal' ?
                        xAxisMap[xAxisId].scale :
                        yAxisMap[yAxisId].scale
                      );
      const barPosition = barPositionMap[axisId] || this.getBarPosition(bandSize, sizeList[axisId]);

      return React.cloneElement(child, {
        key: 'bar-' + i,
        layout,
        onMouseLeave: ::this.handleBarMouseLeave,
        onMouseEnter: this.handleBarMouseEnter.bind(this, dataKey),
        data: this.getBarComposeData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey),
      });
    }, this);
  }

  render() {
    const { style, children } = this.props;
    const lineItems = ReactUtils.findAllByType(children, Line);
    const barItems = ReactUtils.findAllByType(children, Bar);
    const areaItems = ReactUtils.findAllByType(children, Area);
    const items = [...lineItems, ...barItems, ...areaItems];
    const legendItem = ReactUtils.findChildByType(children, Legend);

    let xAxisMap = this.getAxisMap('xAxis', items);
    let yAxisMap = this.getAxisMap('yAxis', items);
    const offset = this.getOffset(xAxisMap, yAxisMap);

    xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
    yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

    return (
      <div className="recharts-wrapper"
        style={{ position: 'relative', cursor: 'default', ...style }}
        onMouseEnter={this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseMove={this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap)}
        onMouseLeave={::this.handleMouseLeave}
      >

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, offset, legendItem)
        }

        <Surface {...this.props}>
          {this.renderGrid(xAxisMap, yAxisMap, offset)}
          {this.renderReferenceLines(xAxisMap, yAxisMap, offset)}
          {this.renderXAxis(xAxisMap)}
          {this.renderYAxis(yAxisMap)}
          {this.renderCursor(xAxisMap, yAxisMap, offset)}
          {this.renderAreaItems(areaItems, xAxisMap, yAxisMap, offset)}
          {this.renderBarItems(barItems, xAxisMap, yAxisMap, offset)}
          {this.renderLineItems(lineItems, xAxisMap, yAxisMap, offset)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, offset)}
      </div>
    );
  }
}

export default ComposedChart;
