import React, { PropTypes } from 'react';
import { getNiceTickValues } from 'recharts-scale';
import { linear } from 'd3-scale';

import Surface from '../container/Surface';
import Layer from '../container/Layer';
import CartesianAxis from '../component/CartesianAxis';
import CartesianGrid from '../component/CartesianGrid';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Scatter from '../chart/Scatter';

import ReactUtils from '../util/ReactUtils';
import XAxis from './XAxis';
import YAxis from './YAxis';
import ZAxis from './ZAxis';
import Cross from '../shape/Cross';


class ScatterChart extends React.Component {
  static displayName = 'ScatterChart';

  displayName = 'ScatterChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    title: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };


  static defaultProps = {
    style: {},
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  constructor(props) {
    super(props);
  }

  state = {
    activeTooltipCoord: { x: 0, y: 0 },
    isTooltipActive: false,
    activeItem: null,
  };
  /**
   * Compose the data of each group
   * @param  {Array}  data        The original data
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} zAxis       The configuration of z-axis
   * @return {Array} Composed data
   */
  getComposeData(data, xAxis, yAxis, zAxis) {
    const xAxisDataKey = xAxis.dataKey;
    const yAxisDataKey = yAxis.dataKey;
    const zAxisDataKey = zAxis.dataKey;

    return data.map(entry => {
      return {
        cx: xAxis.scale(entry[xAxisDataKey]),
        cy: yAxis.scale(entry[yAxisDataKey]),
        r: zAxisDataKey !== undefined ? zAxis.scale(entry[zAxisDataKey]) : zAxis.range[0],
        value: {
          x: entry[xAxisDataKey],
          y: entry[yAxisDataKey],
          z: (zAxisDataKey !== undefined && entry[zAxisDataKey]) || '-',
        },
      };
    });
  }
  /**
   * Get the ticks of an axis
   * @param  {Object}  axis The configuration of an axis
   * @param {Boolean} isGrid Whether or not are the ticks in grid
   * @return {Array}  Ticks
   */
  getAxisTicks(axis, isGrid = false) {
    const scale = axis.scale;

    if (axis.ticks) {
      return axis.ticks.map(entry => {
        return {
          coord: scale(entry),
          value: entry,
        };
      });
    }

    if (scale.ticks) {
      return scale.ticks(axis.tickCount).map(entry => {
        return {
          coord: scale(entry),
          value: entry,
        };
      });
    }

    return scale.domain().map((entry) => {
      return {
        coord: scale(entry),
        value: entry,
      };
    });
  }
  /**
   * Calculate the ticks of grid
   * @param  {Array} ticks The ticks in axis
   * @param {Number} min   The minimun value of axis
   * @param {Number} max   The maximun value of axis
   * @return {Array}       Ticks
   */
  getGridTicks(ticks, min, max) {
    let hasMin;
    let hasMax;
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
   * get domain of ticks
   * @param  {Array} ticks Ticks of axis
   * @return {Array} domain
   */
  getDomainOfTicks(ticks) {
    return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
  }

  getDomain(items, dataKey) {
    const domain = items.reduce((result, item) => {
      return result.concat(item.props.data.map(entry => entry[dataKey]));
    }, []);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }
  /**
   * Get the configuration of x-axis or y-axis
   * @param  {String} axisType The type of axis
   * @param  {Array} items     The instances of item
   * @return {Object}          Configuration
   */
  getAxis(axisType = 'xAxis', items) {
    const { children } = this.props;
    const Axis = axisType === 'xAxis' ? XAxis : YAxis;
    const axis = ReactUtils.findChildByType(children, Axis);

    if (axis) {
      const domain = this.getDomain(items, axis.props.dataKey);

      return {
        ...axis.props,
        axisType,
        domain,
      };
    }

    console.info('recharts: ScatterChart must has %s', Axis.displayName);

    return null;
  }
  /**
   * Get the configuration of z-axis
   * @param  {Array} items The instances of item
   * @return {Object}      Configuration
   */
  getZAxis(items) {
    const { children } = this.props;
    const axisItem = ReactUtils.findChildByType(children, ZAxis);
    const axisProps = (axisItem && axisItem.props) || ZAxis.defaultProps;
    const domain = axisProps.dataKey ? this.getDomain(items, axisProps.dataKey) : [-1, 1];

    return {
      ...axisProps,
      domain,
      scale: linear().domain(domain).range(axisProps.range),
    };
  }

  getOffset(xAxis, yAxis) {
    const { width, height, margin } = this.props;
    const offset = { ...margin };

    offset[xAxis.orient] += xAxis.height;
    offset[yAxis.orient] += yAxis.width;

    return {
      ...offset,
      width: width - offset.left - offset.right,
      height: height - offset.top - offset.bottom,
    };
  }
  /**
   * Configure the scale function of axis
   * @param {Object} scale The scale function
   * @param {Object} opts  The configuration of axis
   * @return {Object}      null
   */
  setTicksOfScale(scale, opts) {
    // Give priority to use the options of ticks
    if (opts.ticks && opts.ticks) {
      opts.domain = this.getDomainOfTicks(opts.ticks, opts.type);
      scale.domain(opts.domain)
           .ticks(opts.ticks.length);
    } else {
    // Calculate the ticks by the number of grid
      const domain = scale.domain();
      const tickValues = getNiceTickValues(domain, opts.tickCount);

      opts.ticks = tickValues;
      opts.domain = this.getDomainOfTicks(tickValues, opts.type);
      scale.domain(opts.domain)
          .ticks(opts.tickCount);
    }
  }
    /**
   * Calculate the scale function, position, width, height of axes
   * @param  {Object} axis     The configuration of axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} axisType The type of axis, x-axis or y-axis
   * @return {Object} Configuration
   */
  getFormatAxis(axis, offset, axisType) {
    const { orient, domain, tickFormat } = axis;
    const range = axisType === 'xAxis' ?
                  [offset.left, offset.left + offset.width] :
                  [offset.top + offset.height, offset.top];
    const scale = linear().domain(domain).range(range);

    this.setTicksOfScale(scale, axis);
    if (tickFormat) {
      scale.tickFormat(tickFormat);
    }

    let x;
    let y;

    if (axisType === 'xAxis') {
      x = offset.left;
      y = orient === 'top' ? offset.top - axis.height : offset.top + offset.height;
    } else {
      x = orient === 'left' ? offset.left - axis.width : offset.right;
      y = offset.top;
    }


    return {
      ...axis,
      scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height,
      x, y,
    };
  }
  /**
   * Get the content to be displayed in the tooltip
   * @param  {Object} data  The data of active item
   * @param  {Object} xAxis The configuration of x-axis
   * @param  {Object} yAxis The configuration of y-axis
   * @param  {Object} zAxis The configuration of z-axis
   * @return {Array}        The content of tooltip
   */
  getTooltipContent(data, xAxis, yAxis, zAxis) {
    if (!data) {return null;}

    const content = [{
      key: xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || '',
      value: data.x,
    }, {
      key: yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || '',
      value: data.y,
    }];

    if (data.z && data.z !== '-') {
      content.push({
        key: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        value: data.z,
      });
    }

    return content;
  }
  /**
   * The handler of mouse entering a scatter
   * @param {Object} el      The active scatter
   * @param {Object} e       Event object
   * @return {Object} no return
   */
  handleScatterMouseEnter(el, e) {
    this.setState({
      isTooltipActive: true,
      activeItem: el,
      activeTooltipCoord: { x: el.cx, y: el.cy },
    });
  }
  /**
   * The handler of mouse leaving a scatter
   * @return {Object} no return
   */
  handleScatterMouseLeave() {
    this.setState({
      isTooltipActive: false,
    });
  }
  /**
   * Draw Tooltip
   * @param  {Array} items   The instances of Scatter
   * @param  {Object} xAxis  The configuration of x-axis
   * @param  {Object} yAxis  The configuration of y-axis
   * @param  {Object} zAxis  The configuration of z-axis
   * @param  {Object} offset The offset of main part in the svg element
   * @return {ReactElement}  The instance of Tooltip
   */
  renderTooltip(items, xAxis, yAxis, zAxis, offset) {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return null;
    }

    const { chartX, chartY, isTooltipActive,
          activeItem, activeTooltipCoord } = this.state;
    const scope = {
      x1: offset.left,
      x2: offset.left + offset.width,
      y1: offset.top,
      y2: offset.top + offset.height,
    };

    return React.cloneElement(tooltipItem, {
      scope,
      active: isTooltipActive,
      label: '',
      data: this.getTooltipContent(activeItem && activeItem.value, xAxis, yAxis, zAxis),
      coordinate: activeTooltipCoord,
      mouseX: chartX,
      mouseY: chartY,
    });
  }
  /**
   * Draw grid
   * @param  {Object} xAxis  The configuration of x-axis
   * @param  {Object} yAxis  The configuration of y-axis
   * @param  {Object} offset The offset of main part in the svg element
   * @return {ReactElement} The instance of grid
   */
  renderGrid(xAxis, yAxis, offset) {
    const { children, width, height } = this.props;
    const gridItem = ReactUtils.findChildByType(children, CartesianGrid);

    if (!gridItem) {return null;}

    const verticalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...xAxis,
      ticks: this.getAxisTicks(xAxis),
      viewBox: { x: 0, y: 0, width, height },
    }), offset.left, offset.left + offset.width);

    const horizontalPoints = this.getGridTicks(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...yAxis,
      ticks: this.getAxisTicks(yAxis),
      viewBox: { x: 0, y: 0, width, height },
    }), offset.top, offset.top + offset.height);

    return React.cloneElement(gridItem, {
      key: 'grid',
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
      verticalPoints,
      horizontalPoints,
    });
  }
  /**
   * Draw legend
   * @param  {Array} items             The instances of Scatters
   * @param  {Object} offset           The offset of main part in the svg element
   * @param  {ReactElement} legendItem The instance of Legend
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items, offset, legendItem) {
    const legendData = items.map((child) => {
      const { name, fill, legendType } = child.props;

      return {
        type: legendType || 'square',
        color: fill,
        value: name || '',
      };
    }, this);

    return React.cloneElement(legendItem, {
      width: offset.width,
      data: legendData,
    });
  }
  /**
   * Draw axis
   * @param {Object} axis     The configuration of axis
   * @param {String} layerKey The key of layer
   * @return {ReactElement}   The instance of axis
   */
  renderAxis(axis, layerKey) {
    const { width, height } = this.props;

    if (axis && !axis.hide) {
      return (
        <Layer key={layerKey} className={layerKey}>
          <CartesianAxis
            x={axis.x}
            y={axis.y}
            width={axis.width}
            height={axis.height}
            orient={axis.orient}
            viewBox={{ x: 0, y: 0, width, height }}
            ticks={this.getAxisTicks(axis)}
          />
        </Layer>
      );
    }
  }
  renderCursor(xAxis, yAxis, offset) {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem || !this.state.isTooltipActive) {return null;}
    const { activeItem } = this.state;

    const cursorProps = {
      fill: '#f1f1f1',
      ...ReactUtils.getPresentationAttributes(tooltipItem.props.cursor),
      ...offset,
      x: activeItem.cx,
      y: activeItem.cy,
      payload: activeItem,
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      React.createElement(Cross, cursorProps);
  }
  /**
   * Draw the main part of scatter chart
   * @param  {Array} items   All the instance of Scatter
   * @param  {Object} xAxis  The configuration of all x-axis
   * @param  {Object} yAxis  The configuration of all y-axis
   * @param  {Object} zAxis  The configuration of all z-axis
   * @return {ReactComponent}  All the instances of Scatter
   */
  renderItems(items, xAxis, yAxis, zAxis) {
    const { activeGroupId } = this.state;
    return items.map((child, i) => {
      const { strokeWidth, data } = child.props;

      let finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
      finalStrokeWidth = activeGroupId === 'scatter-' + i ? finalStrokeWidth + 2 : finalStrokeWidth;

      return React.cloneElement(child, {
        key: 'scatter-' + i,
        groupId: 'scatter-' + i,
        strokeWidth: finalStrokeWidth,
        onMouseLeave: ::this.handleScatterMouseLeave,
        onMouseEnter: ::this.handleScatterMouseEnter,
        data: this.getComposeData(data, xAxis, yAxis, zAxis),
      });
    }, this);
  }

  render() {
    const { style, children } = this.props;
    const items = ReactUtils.findAllByType(children, Scatter);
    const legendItem = ReactUtils.findChildByType(children, Legend);
    const zAxis = this.getZAxis(items);
    let xAxis = this.getAxis('xAxis', items);
    let yAxis = this.getAxis('yAxis', items);

    const offset = this.getOffset(xAxis, yAxis);
    xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
    yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');

    return (
      <div className="recharts-wrapper"
        style={{ position: 'relative', cursor: 'default', ...style }}
      >

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, offset, legendItem)
        }

        <Surface {...this.props}>
          {this.renderGrid(xAxis, yAxis, offset)}
          {this.renderAxis(xAxis, 'x-axis-layer')}
          {this.renderAxis(yAxis, 'y-axis-layer')}
          {this.renderCursor(xAxis, yAxis, offset)}
          {this.renderItems(items, xAxis, yAxis, zAxis, offset)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, offset, legendItem)}
        {this.renderTooltip(items, xAxis, yAxis, zAxis, offset)}
      </div>
    );
  }

}

export default ScatterChart;
