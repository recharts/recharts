import React, { PropTypes } from 'react';

import Surface from '../container/Surface';
import Layer from '../container/Layer';
import ReactUtils from '../util/ReactUtils';
import Radar from '../chart/Radar';
import PolarGrid from '../component/PolarGrid';
import PolarAngleAxis from '../component/PolarAngleAxis';
import PolarRadiusAxis from '../component/PolarRadiusAxis';
import Polygon from '../shape/Polygon';

const RADIAN = Math.PI / 180;

class RadarChart extends React.Component {
  static displayName = 'Radar';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,

    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,

    shape: PropTypes.element,

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

  constructor(props) {
    super(props);
  }

  getGridRadius(gridCount, inner, outer) {
    let innerRadius = inner;
    let outerRadius = outer;

    const result = [];

    if (innerRadius === outerRadius) {
      return result;
    }

    if (innerRadius > outerRadius) {
      [innerRadius, outerRadius] = [outerRadius, innerRadius];
    }

    // generate grid of same gap
    const step = (outerRadius - innerRadius) / gridCount;

    for (let i = 0; i < gridCount; i++) {
      if (i === 0 && innerRadius > 0) {
        result.push(innerRadius);
      }

      result.push(innerRadius + step * (i + 1));
    }

    return result;
  }

  getAngle(i, len, startAngle, clockWise) {
    const sign = clockWise ? -1 : 1;
    const angleInterval = 360 / len;

    return startAngle + i * sign * angleInterval;
  }

  getAngleTicks(len, startAngle, clockWise) {
    const angles = [];

    for (let i = 0; i < len; i++) {
      angles.push(this.getAngle(i, len, startAngle, clockWise));
    }

    return angles;
  }

  polarToCartesian(cx, cy, angle, radius) {
    return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  }

  calculateCoordinate(data, dataKey, max) {
    const { cx, cy, innerRadius, outerRadius, startAngle, clockWise } = this.props;

    return {
      name: data.map((v) => (v.name)),
      radius: data.map((v) => (
                (outerRadius - innerRadius) * v[dataKey] / max + innerRadius)
              ),
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      clockWise,
    };
  }

  renderDefaultRadar({ radar, ...otherProps }) {
    const { cx, cy, startAngle, clockWise } = radar;
    const len = radar.radius.length;
    const points = radar.radius.map((v, i) => (
      this.polarToCartesian(cx, cy, -this.getAngle(i, len, startAngle, clockWise) * RADIAN, v)
    ));

    return (
      <Polygon points={points} {...otherProps} />
    );
  }

  renderRadars() {
    const { data, children, shape } = this.props;
    const radarElements = ReactUtils.findAllByType(children, Radar);
    if (radarElements) {
      const dataKeys = radarElements.map((v) => (v.props.dataKey));

      const max = data.reduce((prev, current) => {
        const currentMax = Math.max(...dataKeys.map((v) => (current[v])));

        return prev > currentMax ? prev : currentMax;
      }, 0);

      return radarElements.map((v, i) => {
        const radar = this.calculateCoordinate(data, v.props.dataKey, max);
        const presentationAttributes = ReactUtils.getPresentationAttributes(v);

        return (
          <Layer key={`recharts-radar-${i}`}>
            {
              React.isValidElement(shape) ?
              React.cloneElement(shape, { radar, ...presentationAttributes }) :
              this.renderDefaultRadar({ radar, ...presentationAttributes })
            }
          </Layer>
        );
      });
    }

    return null;
  }

  renderGrid() {
    const { data, children } = this.props;
    const len = data.length;
    const grid = ReactUtils.findChildByType(children, PolarGrid);

    if (grid) {
      const cx = grid.props.cx || this.props.cx;
      const cy = grid.props.cy || this.props.cy;
      const startAngle = grid.props.startAngle || this.props.startAngle;
      const innerRadius = grid.props.innerRadius || this.props.innerRadius;
      const outerRadius = grid.props.outerRadius || this.props.outerRadius;
      const clockWise = grid.props.clockWise || this.props.clockWise;
      const { gridCount } = grid.props;

      return React.cloneElement(grid, {
        polarAngles: this.getAngleTicks(len, startAngle, clockWise),
        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
        cx, cy, startAngle, innerRadius, outerRadius, clockWise,
        ...grid.props,
      });
    }

    return null;
  }

  renderAngleAxis() {
    const { data, children } = this.props;
    const len = data.length;
    const angleAxis = ReactUtils.findChildByType(children, PolarAngleAxis);

    if (angleAxis) {
      const cx = angleAxis.props.cx || this.props.cx;
      const cy = angleAxis.props.cy || this.props.cy;
      const startAngle = angleAxis.props.startAngle || this.props.startAngle;
      const innerRadius = angleAxis.props.innerRadius || this.props.innerRadius;
      const outerRadius = angleAxis.props.outerRadius || this.props.outerRadius;
      const clockWise = angleAxis.props.clockWise || this.props.clockWise;

      return React.cloneElement(angleAxis, {
        ticks: data.map((v, i) => (
                 { name: v.name, angle: this.getAngle(i, len, startAngle, clockWise) }
               )),
        cx, cy, startAngle, innerRadius, outerRadius, clockWise,
        ...angleAxis.props,
      });
    }

    return null;
  }

  renderRadiusAxis() {
    const { data, children } = this.props;
    const len = data.length;
    const radiusAxis = ReactUtils.findChildByType(children, PolarRadiusAxis);
    const grid = ReactUtils.findChildByType(children, PolarGrid);

    if (grid && radiusAxis) {
      const cx = radiusAxis.props.cx || grid.props.cx || this.props.cx;
      const cy = radiusAxis.props.cy || grid.props.cy || this.props.cy;
      const startAngle = radiusAxis.props.startAngle || grid.props.startAngle || this.props.startAngle;
      const innerRadius = radiusAxis.props.innerRadius || grid.props.innerRadius || this.props.innerRadius;
      const outerRadius = radiusAxis.props.outerRadius || grid.props.outerRadius || this.props.outerRadius;
      const clockWise = radiusAxis.props.clockWise || grid.props.clockWise || this.props.clockWise;
      const { gridCount } = grid.props;

      return React.cloneElement(radiusAxis, {
        angle: this.getAngleTicks(len, startAngle, clockWise)[len - 1],
        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
        cx, cy, startAngle, innerRadius, outerRadius, clockWise,
        ...radiusAxis.props,
      });
    }

    return null;
  }

  render() {
    const { outerRadius, data, width, height } = this.props;

    if (outerRadius <= 0 || !data || !data.length) {
      return null;
    }

    return (
      <Surface width={width} height={height}>
        {this.renderGrid()}
        {this.renderRadiusAxis()}
        {this.renderAngleAxis()}
        {this.renderRadars()}
      </Surface>
    );
  }
}

export default RadarChart;
