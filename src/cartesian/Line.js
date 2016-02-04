/**
 * @fileOverview Line
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import { findDOMNode } from 'react-dom';
import Animate from 'react-smooth';

@pureRender
class Line extends Component {

  static displayName = 'Line';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    legendType: PropTypes.string,
    formatter: PropTypes.func,

     // whether have dot in line
    dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),

    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value,
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
    xAxisId: 0,
    yAxisId: 0,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = {
    isAnimationFinished: false,
    totalLength: 0,
  };

  componentDidMount() {
    const { isAnimationActive } = this.props;

    if (!isAnimationActive) {
      return;
    }

    const curveDom = findDOMNode(this.refs.curve);
    const totalLength = (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;

    this.setState({ totalLength });
  }

  handleAnimationEnd() {
    this.setState({ isAnimationFinished: true });
  }

  renderDots() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }

    const { dot, points } = this.props;
    const lineProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);
    const isDotElement = React.isValidElement(dot);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        cx: entry.x,
        cy: entry.y,
        index: i,
        payload: entry,
      };

      return isDotElement ?
            React.cloneElement(dot, dotProps) :
            <Dot className="recharts-line-dot" {...dotProps}/>;
    });

    return <Layer className="recharts-line-dots">{dots}</Layer>;
  }

  renderLabels() {
    const { points, label } = this.props;
    const lineProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const labels = points.map((entry, i) => {
      const x = entry.x + entry.width / 2;
      const y = entry.y;
      const labelProps = {
        textAnchor: 'middle',
        ...entry,
        ...lineProps,
        ...customLabelProps,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return isLabelElement ? React.cloneElement(label, labelProps) : (
        <text {...labelProps} className="recharts-line-label">{entry.value}</text>
      );
    });

    return <Layer className="recharts-line-labels">{labels}</Layer>;
  }

  render() {
    const {
      dot,
      points,
      label,
      className,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      ...other,
    } = this.props;
    const { totalLength } = this.state;

    if (!points || !points.length) {
      return null;
    }
    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-line', className);

    return (
      <Layer className={layerClass}>
        {!hasSinglePoint && (
          <Animate isActive={isAnimationActive}
            begin={animationBegin}
            canBegin={totalLength > 0}
            from={'0px ' + (totalLength === 0 ? 1 : totalLength) + 'px'}
            to={totalLength + 'px 0px'}
            easing={animationEasing}
            duration={animationDuration}
            attributeName="strokeDasharray"
            onAnimationEnd={::this.handleAnimationEnd}
          >
            <Curve
              {...other}
              className="recharts-line-curve"
              fill="none"
              onMouseEnter={this.props.onMouseEnter}
              onMouseLeave={this.props.onMouseLeave}
              onClick={this.props.onClick}
              points={points}
              ref="curve"
            />
          </Animate>
        )}
        {(hasSinglePoint || dot) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Line;
