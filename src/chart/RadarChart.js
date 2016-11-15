/**
 * @fileOverview Radar Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { scalePoint } from 'd3-scale';
import { getNiceTickValues } from 'recharts-scale';
import _ from 'lodash';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';

import Radar from '../polar/Radar';
import PolarGrid from '../polar/PolarGrid';
import PolarAngleAxis from '../polar/PolarAngleAxis';
import PolarRadiusAxis from '../polar/PolarRadiusAxis';

import { validateWidthHeight, findChildByType, findAllByType, filterSvgElements,
  getPresentationAttributes } from '../util/ReactUtils';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { getPercentValue, parseSpecifiedDomain, combineEventHandlers,
  parseScale } from '../util/DataUtils';
import pureRender from '../util/PureRender';
import AnimationDecorator from '../util/AnimationDecorator';

@AnimationDecorator
@pureRender
class RadarChart extends Component {
  static displayName = 'RadarChart';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),

    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    startAngle: PropTypes.number,
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    clockWise: PropTypes.bool,

    data: PropTypes.array,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
    animationId: PropTypes.number,

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    width: 0,
    height: 0,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',

    startAngle: 90,
    clockWise: true,
    data: [],
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };

  state = this.createDefaultState();

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState(this.createDefaultState());
    }
  }

  getTooltipContent(itemProps) {
    const { points, dataKey, unit } = itemProps;

    return points.map((entry) => {
      const { name, value, payload } = entry;

      return {
        ...getPresentationAttributes(itemProps),
        dataKey, unit, name, value, payload,
      };
    });
  }

  getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius) {
    const props = radiusAxis ? radiusAxis.props : PolarRadiusAxis.defaultProps;
    let domain, tickCount, ticks;

    if (radiusAxis && radiusAxis.props.ticks) {
      ticks = radiusAxis.props.ticks;

      tickCount = ticks.length;
      domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    } else {
      tickCount = Math.max(
        radiusAxis && radiusAxis.props.tickCount || PolarRadiusAxis.defaultProps.tickCount, 2
      );
      ticks = this.getTicksByItems(radiusAxis, tickCount);

      domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    }

    return {
      tickCount,
      ticks,
      scale: parseScale(props).domain(domain).range([innerRadius, outerRadius]),
    };
  }

  getTicksByItems(axisItem, tickCount) {
    const { data, children } = this.props;
    const { domain, allowDataOverflow } = axisItem ? axisItem.props : PolarRadiusAxis.defaultProps;
    const radarItems = findAllByType(children, Radar);
    const dataKeys = radarItems.map(item => item.props.dataKey);
    const extent = data.reduce((prev, current) => {
      const values = dataKeys.map(v => current[v] || 0);
      const currentMax = Math.max.apply(null, values);
      const currentMin = Math.min.apply(null, values);

      return [Math.min(prev[0], currentMin), Math.max(prev[1], currentMax)];
    }, [Infinity, -Infinity]);
    const finalDomain = parseSpecifiedDomain(domain, extent, allowDataOverflow);

    if (domain && (domain[0] === 'auto' || domain[1] === 'auto')) {
      return getNiceTickValues(finalDomain, tickCount);
    }

    return finalDomain;
  }

  getGridRadius(gridCount, innerRadius, outerRadius) {
    const domain = _.range(0, gridCount);
    const scale = scalePoint().domain(domain)
             .range([innerRadius, outerRadius]);

    return domain.map(v => scale(v));
  }

  getAngle(index, dataLength, startAngle, clockWise) {
    const sign = clockWise ? -1 : 1;
    const angleInterval = 360 / dataLength;

    return startAngle + index * sign * angleInterval;
  }

  getAngleTicks(dataLength, startAngle, clockWise) {
    const angles = [];

    for (let i = 0; i < dataLength; i++) {
      angles.push(this.getAngle(i, dataLength, startAngle, clockWise));
    }

    return angles;
  }

  getRadiusTicks(axisCfg) {
    const { ticks, scale } = axisCfg;

    if (ticks && ticks.length) {
      return ticks.map(entry => ({
        radius: scale(entry),
        value: entry,
      }));
    }
    const { tickCount } = axisCfg;
    const domain = scale.domain();

    return _.range(0, tickCount).map((v, i) => {
      const value = domain[0] + i * (domain[1] - domain[0]) / (tickCount - 1);
      return {
        value,
        radius: scale(value),
      };
    });
  }

  getComposedData(item, scale, cx, cy) {
    const { dataKey } = item.props;
    const { data, startAngle, clockWise, children } = this.props;
    const angleAxis = findChildByType(children, PolarAngleAxis);
    const nameKey = angleAxis && angleAxis.props.dataKey;
    const len = data.length;

    return data.map((entry, i) => {
      const value = entry[dataKey] || 0;
      const angle = this.getAngle(i, len, startAngle, clockWise);
      const radius = scale(value);

      return {
        ...polarToCartesian(cx, cy, radius, angle),
        value,
        name: nameKey ? (entry[nameKey] || i) : i,
        cx, cy, radius, angle,
        payload: entry,
      };
    });
  }
  /**
   * Returns default, reset state for the radar chart.
   * @return {Object} Whole new state
   */
  createDefaultState() {
    return {
      activeTooltipLabel: '',
      activeTooltipCoord: { x: 0, y: 0 },
      isTooltipActive: false,
    };
  }

  handleMouseEnter = (itemProps, e) => {
    const { children } = this.props;
    const { points } = itemProps;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem && points.length) {
      const container = this.container;
      const containerOffset = getOffset(container);
      const ne = calculateChartCoordinate(e, containerOffset);

      this.setState({
        isTooltipActive: true,
        activeTooltipLabel: itemProps.name || itemProps.dataKey,
        activeTooltipCoord: { x: ne.chartX, y: ne.chartY },
        activeTooltipPayload: this.getTooltipContent(itemProps),
      });
    }
  };

  handleMouseLeave = () => {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        isTooltipActive: false,
      });
    }
  };

  renderRadars(items, scale, cx, cy) {
    if (!items || !items.length) { return null; }

    const { onMouseEnter, onMouseLeave, onClick } = this.props;
    const baseProps = getPresentationAttributes(this.props);

    return items.map((el, index) => (
      React.cloneElement(el, {
        ...baseProps,
        ...getPresentationAttributes(el),
        animationId: this.props.animationId,
        points: this.getComposedData(el, scale, cx, cy),
        key: `radar-${index}`,
        onMouseEnter: combineEventHandlers(
          this.handleMouseEnter, onMouseEnter, el.props.onMouseEnter),
        onMouseLeave: combineEventHandlers(
          this.handleMouseLeave, onMouseLeave, el.props.onMouseLeave),
        onClick: combineEventHandlers(null, onClick, el.props.onClick),
      })));
  }

  renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius) {
    const { children } = this.props;
    const grid = findChildByType(children, PolarGrid);

    if (!grid) { return null; }

    const { startAngle, clockWise, data } = this.props;
    const len = data.length;
    const gridCount = radiusAxisCfg.tickCount;

    return React.cloneElement(grid, {
      polarAngles: this.getAngleTicks(len, startAngle, clockWise),
      polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
      cx, cy, innerRadius, outerRadius,
      key: 'layer-grid',
    });
  }

  renderAngleAxis(cx, cy, outerRadius, maxRadius) {
    const { children } = this.props;
    const angleAxis = findChildByType(children, PolarAngleAxis);

    if (!angleAxis || angleAxis.props.hide) { return null; }

    const { data, startAngle, clockWise } = this.props;
    const len = data.length;
    const grid = findChildByType(children, PolarGrid);
    const radius = getPercentValue(angleAxis.props.radius, maxRadius, outerRadius);
    const { dataKey } = angleAxis.props;

    return React.cloneElement(angleAxis, {
      ticks: data.map((v, i) => ({
        value: dataKey ? v[dataKey] : i,
        angle: this.getAngle(i, len, startAngle, clockWise),
      })),
      cx, cy, radius,
      axisLineType: (grid && grid.props && grid.props.gridType)
                    || PolarGrid.defaultProps.gridType,
      key: 'layer-angle-axis',
    });
  }

  renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy) {
    if (!radiusAxis || radiusAxis.props.hide) { return null; }

    const { startAngle } = this.props;
    return React.cloneElement(radiusAxis, {
      angle: radiusAxis.props.angle || startAngle,
      ticks: this.getRadiusTicks(radiusAxisCfg),
      cx, cy,
    });
  }

  renderTooltip() {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) { return null; }

    const { width, height } = this.props;
    const { isTooltipActive, activeTooltipLabel, activeTooltipCoord,
      activeTooltipPayload } = this.state;
    const viewBox = { x: 0, y: 0, width, height };

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      label: activeTooltipLabel,
      payload: activeTooltipPayload,
      coordinate: activeTooltipCoord,
    });
  }

  /**
   * Draw legend
   * @param  {Array} items             The instances of item
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items) {
    const { children } = this.props;
    const legendItem = findChildByType(children, Legend);
    if (!legendItem) { return null; }

    const { width, height, margin } = this.props;
    const legendData = (legendItem.props && legendItem.props.payload) ||
      items.map((child) => {
        const { dataKey, name, legendType } = child.props;

        return {
          dataKey,
          type: legendType || 'square',
          color: child.props.stroke || child.props.fill,
          value: name || dataKey,
          payload: child.props,
        };
      }, this);

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width),
      payload: legendData,
      chartWidth: width,
      chartHeight: height,
      margin,
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }
    const { className, data, width, height, margin, children, style, ...others } = this.props;
    const cx = getPercentValue(this.props.cx, width, width / 2);
    const cy = getPercentValue(this.props.cy, height, height / 2);
    const maxRadius = getMaxRadius(width, height, margin);
    const innerRadius = getPercentValue(this.props.innerRadius, maxRadius, 0);
    const outerRadius = getPercentValue(this.props.outerRadius, maxRadius, maxRadius * 0.8);

    if (outerRadius <= 0 || !data || !data.length) {
      return null;
    }

    const items = findAllByType(children, Radar);
    const radiusAxis = findChildByType(children, PolarRadiusAxis);
    const radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius);
    const attrs = getPresentationAttributes(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ ...style, position: 'relative', cursor: 'default', width, height }}
        ref={(node) => { this.container = node; }}
      >
        <Surface {...attrs} width={width} height={height}>
          {this.renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius)}
          {this.renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy)}
          {this.renderAngleAxis(cx, cy, outerRadius, maxRadius)}
          {this.renderRadars(items, radiusAxisCfg.scale, cx, cy)}
          {filterSvgElements(children)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip()}
      </div>
    );
  }
}

export default RadarChart;
