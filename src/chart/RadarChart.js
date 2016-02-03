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

import ReactUtils from '../util/ReactUtils';
import LodashUtils from '../util/LodashUtils';

const RADIAN = Math.PI / 180;

class RadarChart extends Component {
  static displayName = 'RadarChart';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,

    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
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

    cx: 0,
    cy: 0,
    startAngle: 90,
    innerRadius: 0,
    outerRadius: 0,
    clockWise: true,

    data: [],
  };

  getRadiusAxisCfg(radiusAxis) {
    const { children, innerRadius, outerRadius } = this.props;
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
      tickCount = Math.max(radiusAxis && radiusAxis.props.tickCount || PolarRadiusAxis.defaultProps.tickCount, 2);
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
    const radarItems = ReactUtils.findAllByType(children, Radar);
    const dataKeys = radarItems.map(item => item.props.dataKey);
    const max = data.reduce((prev, current) => {
      const currentMax = Math.max.apply(null, dataKeys.map(v => current[v] || 0));

      return Math.max(prev, currentMax);
    }, 0);
    const tickValues = getNiceTickValues([0, max], tickCount);

    return tickValues;
  }

  getGridRadius(gridCount, innerRadius, outerRadius) {
    const domain = LodashUtils.range(0, gridCount);
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
      return ticks.map(entry => {
        return {
          radius: scale(entry),
          value: entry,
        };
      });
    }
    const { tickCount } = axisCfg;
    const domain = scale.domain();

    return LodashUtils.range(0, tickCount).map((v, i) => {
      const value = domain[0] + i * (domain[1] - domain[0]) / (tickCount - 1);
      return {
        value,
        radius: scale(value),
      };
    });
  }

  getComposedData(item, scale) {
    const { dataKey } = item.props;
    const { data, cx, cy, innerRadius, outerRadius, startAngle, clockWise } = this.props;
    const len = data.length;

    return data.map((entry, i) => {
      const value = entry[dataKey] || 0;
      const angle = this.getAngle(i, len, startAngle, clockWise);
      const radius = scale(value);

      return {
        ...this.polarToCartesian(cx, cy, angle, radius),
        value,
        cx, cy, radius, angle,
        payload: entry,
      };
    });
  }

  polarToCartesian(cx, cy, angle, radius) {
    return {
      x: cx + Math.cos(-RADIAN * angle) * radius,
      y: cy + Math.sin(-RADIAN * angle) * radius,
    };
  }

  renderRadars(items, scale) {
    const { data, children } = this.props;

    if (items && items.length) {
      const baseProps = ReactUtils.getPresentationAttributes(this.props);

      return items.map((el, index) => {

        return React.cloneElement(el, {
          ...baseProps,
          ...ReactUtils.getPresentationAttributes(el),
          points: this.getComposedData(el, scale),
          key: 'radar-' + index,
        });
      });
    }

    return null;
  }

  renderGrid(radiusAxisCfg) {
    const { data, children } = this.props;
    const len = data.length;
    const grid = ReactUtils.findChildByType(children, PolarGrid);

    if (grid) {
      const { cx, cy, innerRadius, outerRadius, startAngle, clockWise } = this.props;
      const gridCount = radiusAxisCfg.tickCount;

      return React.cloneElement(grid, {
        polarAngles: this.getAngleTicks(len, startAngle, clockWise),
        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
        cx, cy, innerRadius, outerRadius,
        key: 'layer-grid',
      });
    }

    return null;
  }

  renderAngleAxis() {
    const { data, children, startAngle, clockWise } = this.props;
    const len = data.length;
    const angleAxis = ReactUtils.findChildByType(children, PolarAngleAxis);
    const grid = ReactUtils.findChildByType(children, PolarGrid);

    if (angleAxis) {
      const { cx, cy } = this.props;
      const radius = angleAxis.props.radius || this.props.outerRadius;
      const { dataKey } = angleAxis.props;

      return React.cloneElement(angleAxis, {
        ticks: data.map((v, i) => {
          return {
            value: dataKey ? v[dataKey] : i,
            angle: this.getAngle(i, len, startAngle, clockWise),
          };
        }),
        cx, cy, radius,
        axisLineType: (grid && grid.props && grid.props.gridType)
                      || PolarGrid.defaultProps.gridType,
        key: 'layer-angle-axis',
      });
    }

    return null;
  }

  renderRadiusAxis(radiusAxis, radiusAxisCfg) {
    const { cx, cy, startAngle } = this.props;
    if (radiusAxis && !radiusAxis.props.hide) {
      return React.cloneElement(radiusAxis, {
        angle: radiusAxis.props.angle || startAngle,
        ticks: this.getRadiusTicks(radiusAxisCfg),
        cx, cy,
      });
    }

    return null;
  }
  /**
   * Draw legend
   * @param  {Array} items             The instances of item
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items) {
    const { children, width, height } = this.props;
    const legendItem = ReactUtils.findChildByType(children, Legend);
    if (!legendItem) {return null;}

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
    });
  }

  render() {
    const { innerRadius, outerRadius, className, data, width,
      height, children, style } = this.props;

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
      `outerRadius should be greater than innerRadius, ` +
      `but now outerRadius(${outerRadius}) is not greater than innerRadius(${innerRadius}).`
    );
    const items = ReactUtils.findAllByType(children, Radar);
    const radiusAxis = ReactUtils.findChildByType(children, PolarRadiusAxis);
    const radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis);

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
      >
        <Surface width={width} height={height}>
          {this.renderGrid(radiusAxisCfg)}
          {this.renderRadiusAxis(radiusAxis, radiusAxisCfg)}
          {this.renderAngleAxis()}
          {this.renderRadars(items, radiusAxisCfg.scale)}
        </Surface>

        {this.renderLegend(items)}
      </div>
    );
  }
}

export default RadarChart;
