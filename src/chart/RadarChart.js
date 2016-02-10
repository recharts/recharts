/**
 * @fileOverview Radar Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import invariant from 'invariant';
import D3Scale from 'd3-scale';
import { getNiceTickValues } from 'recharts-scale';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Legend from '../component/Legend';

import Radar from '../polar/Radar';
import PolarGrid from '../polar/PolarGrid';
import PolarAngleAxis from '../polar/PolarAngleAxis';
import PolarRadiusAxis from '../polar/PolarRadiusAxis';

import _ from 'lodash';
import { validateWidthHeight, findChildByType, findAllByType,
  getPresentationAttributes } from '../util/ReactUtils';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { getPercentValue } from '../util/DataUtils';
import pureRender from '../util/PureRender';

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

  getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius) {
    const { children } = this.props;
    let domain;
    let tickCount;
    let ticks;

    if (radiusAxis && radiusAxis.props.domain) {
      tickCount = Math.max(radiusAxis.props.tickCount || PolarRadiusAxis.defaultProps.tickCount, 2);
      domain = radiusAxis.props.domain;
      invariant(domain.length === 2 && domain[0] === +domain[0] && domain[1] === +domain[1],
        `domain in PolarRadiusAxis should be an array which has two numbers`
      );
    } else if (radiusAxis && radiusAxis.props.ticks) {
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
      scale: D3Scale.linear().domain(domain).range([innerRadius, outerRadius]),
    };
  }

  getTicksByItems(axisItem, tickCount) {
    const { data, children } = this.props;
    const radarItems = findAllByType(children, Radar);
    const dataKeys = radarItems.map(item => item.props.dataKey);
    const max = data.reduce((prev, current) => {
      const currentMax = Math.max.apply(null, dataKeys.map(v => current[v] || 0));

      return Math.max(prev, currentMax);
    }, 0);
    const tickValues = getNiceTickValues([0, max], tickCount);

    return tickValues;
  }

  getGridRadius(gridCount, innerRadius, outerRadius) {
    const domain = _.range(0, gridCount);
    const scale = D3Scale.point().domain(domain)
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

  getComposedData(item, scale, cx, cy, innerRadius, outerRadius) {
    const { dataKey } = item.props;
    const { data, startAngle, clockWise } = this.props;
    const len = data.length;

    return data.map((entry, i) => {
      const value = entry[dataKey] || 0;
      const angle = this.getAngle(i, len, startAngle, clockWise);
      const radius = scale(value);

      return {
        ...polarToCartesian(cx, cy, radius, angle),
        value,
        cx, cy, radius, angle,
        payload: entry,
      };
    });
  }

  renderRadars(items, scale, cx, cy, innerRadius, outerRadius) {
    if (!items || !items.length) {return null;}

    const baseProps = getPresentationAttributes(this.props);
    return items.map((el, index) => (
      React.cloneElement(el, {
        ...baseProps,
        ...getPresentationAttributes(el),
        points: this.getComposedData(el, scale, cx, cy, innerRadius, outerRadius),
        key: `radar-${index}`,
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

    const { data, width, height, startAngle, clockWise } = this.props;
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
    if (!radiusAxis || radiusAxis.props.hide) {return null;}

    const { startAngle } = this.props;
    return React.cloneElement(radiusAxis, {
      angle: radiusAxis.props.angle || startAngle,
      ticks: this.getRadiusTicks(radiusAxisCfg),
      cx, cy,
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
    if (!legendItem) {return null;}

    const { width, height, margin } = this.props;
    const legendData = items.map((child) => {
      const { dataKey, name, legendType } = child.props;

      return {
        type: legendType || 'square',
        color: child.props.stroke || child.props.fill,
        value: name || dataKey,
      };
    }, this);

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width, height),
      payload: legendData,
      chartWidth: width,
      chartHeight: height,
      margin,
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }
    const { className, data, width, height, margin, children, style } = this.props;
    const cx = getPercentValue(this.props.cx, width, width / 2);
    const cy = getPercentValue(this.props.cy, height, height / 2);
    const maxRadius = getMaxRadius(width, height, cx, cy, margin);
    const innerRadius = getPercentValue(this.props.innerRadius, maxRadius, 0);
    const outerRadius = getPercentValue(this.props.outerRadius, maxRadius, maxRadius * 0.8);

    if (outerRadius <= 0 || !data || !data.length) {
      invariant(outerRadius > 0,
        `outerRadius should be greater than 0.`
      );
      invariant(data && data.length,
        `data(${data}) should not be null, undefined, or an empty array.`
      );
      return null;
    }
    invariant(outerRadius > innerRadius,
      `outerRadius(${this.props.outerRadius}) should be ` +
      `greater than innerRadius(${this.props.innerRadius}). `
    );

    const items = findAllByType(children, Radar);
    const radiusAxis = findChildByType(children, PolarRadiusAxis);
    const radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius);

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
      >
        <Surface width={width} height={height}>
          {this.renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius)}
          {this.renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy)}
          {this.renderAngleAxis(cx, cy, outerRadius, maxRadius)}
          {this.renderRadars(items, radiusAxisCfg.scale, cx, cy, innerRadius, outerRadius)}
        </Surface>

        {this.renderLegend(items)}
      </div>
    );
  }
}

export default RadarChart;
