/**
 * @fileOverview Area
 */
import React, { PropTypes } from 'react';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import pureRender from 'pure-render-decorator';

@pureRender
class Area extends React.Component {

  static displayName = 'Area';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    legendType: PropTypes.string,
    formatter: PropTypes.func,
    // dot configuration
    dot: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.bool]),
    // have curve configuration
    curve: PropTypes.bool,
    baseLineType: PropTypes.oneOf(['horizontal', 'vertical', 'curve']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    strokeWidth: 1,
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    // points of area
    points: [],
    dot: false,
    label: false,
    curve: true,
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  renderArea() {
    const { stroke, className, ...other } = this.props;

    return <Curve {...other} stroke="none"/>;
  }

  renderCurve() {
    const { points, type } = this.props;

    return <Curve {...ReactUtils.getPresentationAttributes(this.props)} points={points} type={type} fill="none" />;
  }

  renderDots() {
    const { dot, points } = this.props;
    const areaProps = ReactUtils.getPresentationAttributes(this.props);
    const customDotProps = ReactUtils.getPresentationAttributes(dot);
    const isDotElement = React.isValidElement(dot);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...areaProps,
        ...customDotProps,
        cx: entry.x,
        cy: entry.y,
        index: i,
        playload: entry,
      };

      return isDotElement ? React.cloneElement(dot, dotProps) : <Dot {...dotProps}/>;
    });

    return <Layer className="recharts-layer-area-dots">{dots}</Layer>;
  }

  renderLabels() {
    const { points, label } = this.props;
    const areaProps = ReactUtils.getPresentationAttributes(this.props);
    const customLabelProps = ReactUtils.getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const labels = points.map((entry, i) => {
      const labelProps = {
        textAnchor: 'middle',
        ...entry,
        ...areaProps,
        ...customLabelProps,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return isLabelElement ? React.cloneElement(label, labelProps) : (
        <text {...labelProps}>{entry.value}</text>
      );
    });

    return <Layer className="recharts-layer-area-labels">{labels}</Layer>;
  }

  render() {
    const { dot, curve, label, points, className, ...other } = this.props;

    if (!points || !points.length) {
      return null;
    }
    const hasSinglePoint = points.length === 1;

    return (
      <Layer className={`recharts-line ${className || ''}`}>
        {curve && !hasSinglePoint && this.renderCurve()}
        {!hasSinglePoint && this.renderArea()}

        {(dot || hasSinglePoint) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Area;
