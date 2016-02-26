/**
 * @fileOverview Radar
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Animate from 'react-smooth';

@pureRender
class Radar extends Component {

  static displayName = 'Radar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.string.isRequired,

    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      cx: PropTypes.number,
      cy: PropTypes.number,
      angle: PropTypes.number,
      radius: PropTypes.number,
      value: PropTypes.number,
      payload: PropTypes.object,
    })),
    shape: PropTypes.element,
    dot: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.bool]),

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    dot: false,
    label: false,
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  renderPolygon() {
    const { shape, points } = this.props;
    const isShapeElement = React.isValidElement(shape);

    if (isShapeElement) {
      return React.cloneElement(shape, this.props);
    }
    const point = points[0];
    const transformPoints = points.map(p => (
      { x: p.x - point.cx, y: p.y - point.cy }
    ));

    return (
      <Layer className="recharts-radar-polygon" transform={`translate(${point.cx}, ${point.cy})`}>
        <Polygon {...getPresentationAttributes(this.props)} points={transformPoints}/>
      </Layer>
    );
  }

  renderLabels() {
    const { points, label } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const labels = points.map((entry, i) => {
      const labelProps = {
        textAnchor: 'middle',
        ...baseProps,
        stroke: 'none',
        fill: (baseProps && baseProps.stroke) || '#666',
        ...customLabelProps,
        ...entry,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return isLabelElement ? React.cloneElement(label, labelProps) : (
        <text {...labelProps} className="recharts-radar-label">{entry.value}</text>
      );
    });

    return <Layer className="recharts-radar-labels">{labels}</Layer>;
  }

  renderDots() {
    const { dot, points } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);
    const isDotElement = React.isValidElement(dot);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...baseProps,
        ...customDotProps,
        cx: entry.x,
        cy: entry.y,
        index: i,
        playload: entry,
      };

      return isDotElement ?
        React.cloneElement(dot, dotProps) :
        <Dot {...dotProps} className="recharts-radar-dot"/>;
    });

    return <Layer className="recharts-radar-dots">{dots}</Layer>;
  }

  render() {
    const { className, points, label, dot } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-radar', className);
    const transformOrigin = 'center center';

    return (
      <Layer className={layerClass}>
        <Animate from="scale(1)"
          to="scale(1)"
          attributeName="transform"
        >
          {this.renderPolygon()}
        </Animate>
        {label && this.renderLabels()}
        {dot && this.renderDots()}
      </Layer>
    );
  }
}

export default Radar;
