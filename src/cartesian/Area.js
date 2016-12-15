/**
 * @fileOverview Area
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Animate from 'react-smooth';
import _ from 'lodash';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES,
  getPresentationAttributes, isSsr } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';

@pureRender
class Area extends Component {

  static displayName = 'Area';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star',
      'triangle', 'wye',
    ]),
    connectNulls: PropTypes.bool,

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
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

    animationId: PropTypes.number,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    connectNulls: false,
    // points of area
    points: [],
    dot: false,
    label: false,
    curve: true,
    activeDot: true,


    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
  };

  constructor(props, ctx) {
    super(props, ctx);

    this.state = { isAnimationFinished: true };
    if (!this.id) {
      this.id = `clipPath${Date.now()}`;
    }
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
  };

  renderCurve() {
    const { layout, type, curve, points, connectNulls } = this.props;

    return (
      <g>
        {curve && (
          <Curve
            {...getPresentationAttributes(this.props)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            connectNulls={connectNulls}
            fill="none"
            points={points}
          />
        )}
        <Curve
          {...this.props}
          stroke="none"
          className="recharts-area-area"
        />
      </g>
    );
  }

  renderHorizontalRect(alpha) {
    const { baseLine, points, strokeWidth } = this.props;
    const startX = points[0].x;
    const endX = points[points.length - 1].x;
    const width = alpha * Math.abs(startX - endX);
    let maxY = Math.max.apply(null, points.map(entry => (entry.y || 0)));

    if (isNumber(baseLine)) {
      maxY = Math.max(baseLine, maxY);
    } else {
      maxY = Math.max(Math.max.apply(null, baseLine.map(entry => (entry.y || 0))), maxY);
    }

    return (
      <rect
        x={startX < endX ? startX : startX - width}
        y={0}
        width={width}
        height={maxY + (strokeWidth || 1)}
      />
    );
  }

  renderVerticalRect(alpha) {
    const { baseLine, points, strokeWidth } = this.props;
    const startY = points[0].y;
    const endY = points[points.length - 1].y;
    const height = alpha * Math.abs(startY - endY);
    let maxX = Math.max.apply(null, points.map(entry => (entry.x || 0)));

    if (isNumber(baseLine)) {
      maxX = Math.max(baseLine, maxX);
    } else {
      maxX = Math.max(Math.max.apply(null, baseLine.map(entry => (entry.x || 0))), maxX);
    }

    return (
      <rect
        x={0}
        y={startY < endY ? startY : startY - height}
        width={maxX + (strokeWidth || 1)}
        height={height}
      />
    );
  }

  renderClipRect(alpha) {
    const { layout } = this.props;

    if (layout === 'vertical') {
      return this.renderVerticalRect(alpha);
    }

    return this.renderHorizontalRect(alpha);
  }

  renderClipPath() {
    const { isAnimationActive, animationDuration, animationEasing,
      animationBegin, animationId } = this.props;

    return (
      <defs>
        <clipPath id={this.id}>
          <Animate
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
            key={animationId}
            animationBegin={animationBegin}
            onAnimationStart={this.handleAnimationStart}
            onAnimationEnd={this.handleAnimationEnd}
            from={{ alpha: 0 }}
            to={{ alpha: 1 }}
          >
            {({ alpha }) => this.renderClipRect(alpha)}
          </Animate>
        </clipPath>
      </defs>
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

    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

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
        value: entry.value,
        payload: entry.payload,
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
        <Text
          key={props.key}
          {...props}
          className="recharts-area-label"
        >
          {_.isArray(value) ? value[1] : value}
        </Text>
      );
    }

    return labelItem;
  }

  renderLabels() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

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
        value: entry.value,
        payload: entry.payload,
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
        {
          !hasSinglePoint ? this.renderClipPath() : null
        }
        {
          !hasSinglePoint ? (
            <g clipPath={`url(#${this.id})`}>
              {this.renderCurve()}
            </g>
          ) : null
        }
        {(dot || hasSinglePoint) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Area;
