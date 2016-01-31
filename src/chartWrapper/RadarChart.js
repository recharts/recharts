import React, { PropTypes } from 'react';

import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Radar from '../chart/Radar';
import PolarGrid from '../component/PolarGrid';
import PolarAngleAxis from '../component/PolarAngleAxis';
import PolarRadiusAxis from '../component/PolarRadiusAxis';

import ReactUtils from '../util/ReactUtils';
import LodashUtils from '../util/LodashUtils';
import D3Scale from 'd3-scale';
import invariant from 'invariant';

const RADIAN = Math.PI / 180;

class RadarChart extends React.Component {
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
  };

  static defaultProps = {
    width: 0,
    height: 0,

    cx: 0,
    cy: 0,
    startAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    clockWise: true,

    data: [],
  };

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

  getRadiusTicks(valuePerPxRatio, radiusArray) {
    return radiusArray.map(v => ({
      radius: v,
      value: v * valuePerPxRatio,
    }));
  }

  polarToCartesian(cx, cy, angle, radius) {
    return {
      x: cx + Math.cos(-RADIAN * angle) * radius,
      y: cy + Math.sin(-RADIAN * angle) * radius,
    };
  }

  getComposedData(item, max) {
    const { dataKey } = item.props;
    const { data, cx, cy, innerRadius, outerRadius, startAngle, clockWise } = this.props;
    const len = data.length;

    return data.map((entry, i) => {
      const value = entry[dataKey];
      const angle = this.getAngle(i, len, startAngle, clockWise);
      const radius = innerRadius + (outerRadius - innerRadius) * value / max;

      return {
        ...this.polarToCartesian(cx, cy, angle, radius),
        value,
        cx, cy, radius, angle,
        payload: entry,
      };
    });
  }


  renderRadars() {
    const { data, children, shape } = this.props;
    const radarElements = ReactUtils.findAllByType(children, Radar);

    if (radarElements) {
      const baseProps = ReactUtils.getPresentationAttributes(this.props);
      const dataKeys = radarElements.map((v) => (v.props.dataKey));

      const max = data.reduce((prev, current) => {
        const currentMax = Math.max(...dataKeys.map((v) => (current[v])));

        return prev > currentMax ? prev : currentMax;
      }, 0);

      return radarElements.map((el, index) => {

        return React.cloneElement(el, {
          ...baseProps,
          ...ReactUtils.getPresentationAttributes(el),
          points: this.getComposedData(el, max),
          key: 'radar-' + index,
        });
      });
    }

    return null;
  }

  renderGrid() {
    const { data, children } = this.props;
    const len = data.length;
    const grid = ReactUtils.findChildByType(children, PolarGrid);

    if (grid) {
      const { cx, cy, startAngle, innerRadius, outerRadius, clockWise } = this.props;
      const { gridCount } = grid.props;

      return React.cloneElement(grid, {
        polarAngles: this.getAngleTicks(len, startAngle, clockWise),
        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
        cx, cy, startAngle, innerRadius, outerRadius, clockWise,
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

      return React.cloneElement(angleAxis, {
        ticks: data.map((v, i) => (
                 { value: v.name, angle: this.getAngle(i, len, startAngle, clockWise) }
               )),
        cx, cy, radius,
        axisLineType: (grid && grid.props && grid.props.gridType)
                      || PolarGrid.defaultProps.gridType,
        key: 'layer-angle-axis',
      });
    }

    return null;
  }

  renderRadiusAxis() {
    const { data, children, cx, cy, startAngle,
        innerRadius, outerRadius, clockWise } = this.props;
    const len = data.length;
    const radiusAxis = ReactUtils.findChildByType(children, PolarRadiusAxis);
    const grid = ReactUtils.findChildByType(children, PolarGrid);
    const radarElements = ReactUtils.findAllByType(children, Radar);

    if (radarElements && grid && radiusAxis) {
      const dataKeys = radarElements.map(v => v.props.dataKey);
      const max = data.reduce((prev, current) => {
        const currentMax = Math.max(...dataKeys.map(v => current[v]));
        return prev > currentMax ? prev : currentMax;
      }, 0);

      const { gridCount } = grid.props;

      return React.cloneElement(radiusAxis, {
        angle: radiusAxis.props.angle || this.getAngleTicks(len, startAngle, clockWise)[len - 1],
        ticks: this.getRadiusTicks(
                max / this.props.outerRadius,
                this.getGridRadius(gridCount, innerRadius, outerRadius)
              ),
        cx, cy,
      });
    }

    return null;
  }

  render() {
    const { innerRadius, outerRadius, gridCount, data, width, height } = this.props;

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

    return (
      <div className="recharts-wrapper">
        <Surface width={width} height={height}>
          {this.renderGrid()}
          {this.renderRadiusAxis()}
          {this.renderAngleAxis()}
          {this.renderRadars()}
        </Surface>
      </div>
    );
  }
}

export default RadarChart;
