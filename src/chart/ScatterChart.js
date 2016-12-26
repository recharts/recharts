/**
 * @fileOverview Scatter Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Cell from '../component/Cell';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Cross from '../shape/Cross';
import CartesianAxis from '../cartesian/CartesianAxis';
import CartesianGrid from '../cartesian/CartesianGrid';
import Scatter from '../cartesian/Scatter';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import ZAxis from '../cartesian/ZAxis';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceArea from '../cartesian/ReferenceArea';
import { EVENT_ATTRIBUTES,
  getPresentationAttributes, findChildByType, filterSvgElements,
  findAllByType, validateWidthHeight, getDisplayName, filterEventAttributes,
} from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { parseSpecifiedDomain, isNumber, parseScale } from '../util/DataUtils';
import { warn } from '../util/LogUtils';
import { appendOffsetOfLegend, detectReferenceElementsDomain, getTicksOfAxis,
  getCoordinatesOfGrid, getLegendProps, getTicksOfScale } from '../util/CartesianUtils';

@pureRender
class ScatterChart extends Component {
  static displayName = 'ScatterChart';

  static propTypes = {
    ...EVENT_ATTRIBUTES,
    width: PropTypes.number,
    height: PropTypes.number,
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
    className: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  state = {
    activeTooltipCoord: { x: 0, y: 0 },
    isTooltipActive: false,
    activeItem: null,
  };

  componentDidMount() {
    if (this.legendInstance) {
      this.forceUpdate();
    }
  }
  /**
   * Compose the data of each group
   * @param  {Object} item        An instance of Scatter
   * @param  {Array}  data        The original data
   * @param  {Object} xAxis       The configuration of x-axis
   * @param  {Object} yAxis       The configuration of y-axis
   * @param  {Object} zAxis       The configuration of z-axis
   * @return {Array} Composed data
   */
  getComposedData(item, data, xAxis, yAxis, zAxis) {
    const { children } = item.props;
    const xAxisDataKey = xAxis.dataKey;
    const yAxisDataKey = yAxis.dataKey;
    const zAxisDataKey = zAxis.dataKey;
    const cells = findAllByType(children, Cell);

    return data.map((entry, index) => ({
      ...entry,
      cx: isNumber(entry[xAxisDataKey]) ? xAxis.scale(entry[xAxisDataKey]) : null,
      cy: isNumber(entry[yAxisDataKey]) ? yAxis.scale(entry[yAxisDataKey]) : null,
      size: zAxisDataKey !== undefined && isNumber(entry[zAxisDataKey]) ?
        zAxis.scale(entry[zAxisDataKey]) :
        zAxis.range[0],
      node: {
        x: entry[xAxisDataKey],
        y: entry[yAxisDataKey],
        z: (zAxisDataKey !== undefined && entry[zAxisDataKey]) || '-',
      },
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    }));
  }

  getDomain(items, dataKey, axisId, axisType) {
    let domain = items.reduce((result, item) => (
      result.concat(item.props.data.map(entry => entry[dataKey]))
    ), []);

    if (axisType === 'xAxis' || axisType === 'yAxis') {
      domain = detectReferenceElementsDomain(
        this.props.children, domain, axisId, axisType
      );
    }

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
    const axis = findChildByType(children, Axis);

    warn(axis, 'recharts: ScatterChart must has %s', Axis.displayName);

    if (axis) {
      const domain = parseSpecifiedDomain(
        axis.props.domain,
        this.getDomain(items, axis.props.dataKey, axis.props[`${axisType}Id`], axisType),
        axis.props.allowDataOverflow
      );

      return {
        ...axis.props,
        axisType,
        domain,
        type: 'number',
        originalDomain: axis.props.domain,
      };
    }

    return null;
  }

  /**
   * Get the configuration of z-axis
   * @param  {Array} items The instances of item
   * @return {Object}      Configuration
   */
  getZAxis(items) {
    const { children } = this.props;
    const axisItem = findChildByType(children, ZAxis);
    const axisProps = (axisItem && axisItem.props) || ZAxis.defaultProps;
    const domain = axisProps.dataKey ?
                  this.getDomain(items, axisProps.dataKey) :
                  [-1, 1];

    return {
      ...axisProps,
      domain,
      scale: parseScale(axisProps).domain(domain).range(axisProps.range),
    };
  }

  getOffset(items, xAxis, yAxis) {
    const { width, height, margin, children } = this.props;
    const legendItem = findChildByType(children, Legend);

    let offset = {
      left: margin.left || 0, right: margin.right || 0,
      top: margin.top || 0, bottom: margin.bottom || 0,
    };

    offset[xAxis.orientation] += xAxis.height;
    offset[yAxis.orientation] += yAxis.width;

    if (legendItem && this.legendInstance) {
      const legendBox = this.legendInstance.getBBox();
      offset = appendOffsetOfLegend(offset, items, this.props, legendBox);
    }

    return {
      ...offset,
      width: width - offset.left - offset.right,
      height: height - offset.top - offset.bottom,
    };
  }
  /**
   * Calculate the scale function, position, width, height of axes
   * @param  {Object} axis     The configuration of axis
   * @param  {Object} offset   The offset of main part in the svg element
   * @param  {Object} axisType The type of axis, x-axis or y-axis
   * @return {Object} Configuration
   */
  getFormatAxis(axis, offset, axisType) {
    const { orientation, domain, tickFormat, padding = {} } = axis;
    const range = axisType === 'xAxis' ? [
      offset.left + (padding.left || 0),
      offset.left + offset.width - (padding.right || 0),
    ] : [
      offset.top + offset.height - (padding.bottom || 0),
      offset.top + (padding.top || 0),
    ];

    const scale = parseScale(axis).domain(domain).range(range);

    const ticks = getTicksOfScale(scale, axis);

    if (tickFormat) {
      scale.tickFormat(tickFormat);
    }

    let x, y;

    if (axisType === 'xAxis') {
      x = offset.left;
      y = orientation === 'top' ? offset.top - axis.height : offset.top + offset.height;
    } else {
      x = orientation === 'left' ? offset.left - axis.width : offset.right;
      y = offset.top;
    }

    return {
      ...axis,
      ...ticks,
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
    if (!data) { return null; }

    const { payload, node } = data;

    const content = [{
      name: xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || '',
      value: node.x,
      payload,
    }, {
      name: yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || '',
      value: node.y,
      payload,
    }];

    if (node.z && node.z !== '-') {
      content.push({
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        value: node.z,
        payload,
      });
    }

    return content;
  }
  /**
   * The handler of mouse entering a scatter
   * @param {Object} el The active scatter
   * @param {Object} e  Event object
   * @return {Object} no return
   */
  handleScatterMouseEnter = (el) => {
    this.setState({
      isTooltipActive: true,
      activeItem: el,
      activeTooltipCoord: { x: el.cx, y: el.cy },
    });
  };

  /**
   * The handler of mouse leaving a scatter
   * @return {Object} no return
   */
  handleScatterMouseLeave = () => {
    this.setState({
      isTooltipActive: false,
    });
  };

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
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
      return null;
    }

    const { isTooltipActive, activeItem, activeTooltipCoord } = this.state;
    const viewBox = {
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
    };

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      label: '',
      payload: this.getTooltipContent(activeItem, xAxis, yAxis, zAxis),
      coordinate: activeTooltipCoord,
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
    const gridItem = findChildByType(children, CartesianGrid);

    if (!gridItem) { return null; }

    const verticalPoints = getCoordinatesOfGrid(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...xAxis,
      ticks: getTicksOfAxis(xAxis, true),
      viewBox: { x: 0, y: 0, width, height },
    }), offset.left, offset.left + offset.width);

    const horizontalPoints = getCoordinatesOfGrid(CartesianAxis.getTicks({
      ...CartesianAxis.defaultProps, ...yAxis,
      ticks: getTicksOfAxis(yAxis, true),
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
   * @param  {Array} items     The instances of Scatters
   * @return {ReactElement}    The instance of Legend
   */
  renderLegend(items) {
    const { children, width, height, margin } = this.props;
    const legendWidth = width - (margin.left || 0) - (margin.right || 0);
    const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
    const props = getLegendProps(children, items, legendWidth, legendHeight);

    if (!props) { return null; }

    return React.createElement(Legend, {
      ...props,
      chartWidth: width,
      chartHeight: height,
      margin,
      ref: (legend) => { this.legendInstance = legend; },
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
            {...axis}
            viewBox={{ x: 0, y: 0, width, height }}
            ticks={getTicksOfAxis(axis, true)}
          />
        </Layer>
      );
    }

    return null;
  }

  renderCursor(xAxis, yAxis, offset) {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem || !this.state.isTooltipActive) { return null; }
    const { activeItem } = this.state;

    const cursorProps = {
      stroke: '#ccc',
      strokeDasharray: '5 5',
      ...getPresentationAttributes(tooltipItem.props.cursor),
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
      finalStrokeWidth = activeGroupId === `scatter-${i}` ? finalStrokeWidth + 2 : finalStrokeWidth;

      return React.cloneElement(child, {
        key: `scatter-${i}`,
        groupId: `scatter-${i}`,
        strokeWidth: finalStrokeWidth,
        onMouseLeave: this.handleScatterMouseLeave,
        onMouseEnter: this.handleScatterMouseEnter,
        points: this.getComposedData(child, data, xAxis, yAxis, zAxis),
        xAxis,
        yAxis,
      });
    }, this);
  }

  renderReferenceElements(xAxis, yAxis, offset, isFront, Compt) {
    const { children } = this.props;
    const elements = findAllByType(children, Compt);

    if (!elements || !elements.length) { return null; }

    const keyPrefix = `${getDisplayName(Compt)}-${isFront ? 'front' : 'back'}`;

    return elements.filter(entry => (isFront === entry.props.isFront)).map((entry, i) =>
      React.cloneElement(entry, {
        key: `${keyPrefix}-${i}`,
        xAxis, yAxis,
        viewBox: {
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
        },
      })
    );
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }

    // eslint-disable-next-line no-unused-vars
    const { style, children, className, width, height, ...others } = this.props;
    const items = findAllByType(children, Scatter);
    const zAxis = this.getZAxis(items);
    let xAxis = this.getAxis('xAxis', items);
    let yAxis = this.getAxis('yAxis', items);

    const offset = this.getOffset(items, xAxis, yAxis);
    xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
    yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');
    const events = filterEventAttributes(this.props);
    const attrs = getPresentationAttributes(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', width, height }}
        {...events}
      >
        <Surface {...attrs} width={width} height={height}>
          {this.renderGrid(xAxis, yAxis, offset)}
          {this.renderReferenceElements(xAxis, yAxis, offset, false, ReferenceArea)}
          {this.renderReferenceElements(xAxis, yAxis, offset, false, ReferenceLine)}
          {this.renderReferenceElements(xAxis, yAxis, offset, false, ReferenceDot)}
          {this.renderAxis(xAxis, 'recharts-x-axis')}
          {this.renderAxis(yAxis, 'recharts-y-axis')}
          {this.renderCursor(xAxis, yAxis, offset)}
          {this.renderItems(items, xAxis, yAxis, zAxis, offset)}
          {this.renderReferenceElements(xAxis, yAxis, offset, true, ReferenceArea)}
          {this.renderReferenceElements(xAxis, yAxis, offset, true, ReferenceLine)}
          {this.renderReferenceElements(xAxis, yAxis, offset, true, ReferenceDot)}
          {filterSvgElements(children)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip(items, xAxis, yAxis, zAxis, offset)}
      </div>
    );
  }
}

export default ScatterChart;
