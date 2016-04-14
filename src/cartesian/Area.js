/**
 * @fileOverview Area
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Animate from 'react-smooth';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

@pureRender
class Area extends Component {

  static displayName = 'Area';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    legendType: PropTypes.string,
    formatter: PropTypes.func,

    activeDot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    // dot configuration
    dot: PropTypes.oneOfType([
      PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.func, PropTypes.element, PropTypes.object, PropTypes.bool,
    ]),
    // have curve configuration
    curve: PropTypes.bool,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
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
    activeDot: true,

    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  constructor(props, ctx) {
    super(props, ctx);

    const { points } = props;
    this.state = {
      isAnimationFinished: (!points || points.length <= 1),
    };
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  renderCurve(points, opacity) {
    const { layout, type, curve } = this.props;
    let animProps = {
      points: this.props.points,
    };

    if (points) {
      animProps = {
        points,
        opacity,
      };
    }

    return (
      <g>
        { curve && (
          <Curve {...getPresentationAttributes(this.props)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            fill="none"
            { ...animProps }
          />
        )}
        <Curve { ...this.props }
          stroke="none"
          className="recharts-area-area"
          { ...animProps }
        />
      </g>
    );
  }

  renderAreaCurve() {
    const { points, type, layout, baseLine, curve, isAnimationActive,
      animationBegin, animationDuration, animationEasing } = this.props;

    const animationProps = {
      isActive: isAnimationActive,
      begin: animationBegin,
      easing: animationEasing,
      duration: animationDuration,
      onAnimationEnd: this.handleAnimationEnd,
    };

    if (!baseLine || !baseLine.length) {
      const transformOrigin = layout === 'vertical' ? 'left center' : 'center bottom';
      const scaleType = layout === 'vertical' ? 'scaleX' : 'scaleY';

      return (
        <Animate attributeName="transform"
          from={`${scaleType}(0)`}
          to={`${scaleType}(1)`}
          { ...animationProps }
        >
          <g style={{ transformOrigin }}>
            { this.renderCurve() }
          </g>
        </Animate>
      );
    }

    return (
      <Animate from={{ alpha: 0 }}
        to={{ alpha: 1 }}
        { ...animationProps }
      >
      {
        ({ alpha }) => this.renderCurve(
          points.map(
            ({ x, y }, i) => ({
              x,
              y: (y - baseLine[i].y) * alpha + baseLine[i].y,
            })
          ),
          +(alpha > 0)
        )
      }
      </Animate>
    );
  }

  renderDotItem(option, props) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = <Dot {...props} className="recharts-area-dot" />;
    }

    return dotItem;
  }

  renderDots() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { dot, points } = this.props;
    const areaProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);

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

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-area-dots">{dots}</Layer>;
  }

  renderLabelItem(option, props, value) {
    let labelItem;

    if (React.isValidElement(option)) {
      labelItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      labelItem = option(props);
    } else {
      labelItem = (
        <text {...props} className="recharts-area-label">
          {_.isArray(value) ? value[1] : value}
        </text>
      );
    }

    return labelItem;
  }

  renderLabels() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { points, label } = this.props;
    const areaProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);

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

      return this.renderLabelItem(label, labelProps, entry.value);
    });

    return <Layer className="recharts-area-labels">{labels}</Layer>;
  }

  render() {
    const { dot, label, points, className } = this.props;

    if (!points || !points.length) { return null; }

    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-area', className);

    return (
      <Layer className={layerClass}>
        {!hasSinglePoint && this.renderAreaCurve() }
        {(dot || hasSinglePoint) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Area;
