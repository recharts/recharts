/**
 * @fileOverview Line
 */
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Animate from 'react-smooth';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

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
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

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
    animationEasing: PropTypes.oneOf([
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'linear',
    ]),
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

  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      isAnimationFinished: false,
      steps: [],
      totalLength: 0,
    };
  }

  componentDidMount() {
    const { isAnimationActive } = this.props;

    if (!isAnimationActive) {
      return;
    }

    const curveDom = findDOMNode(this.refs.animate);
    const totalLength = (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;

    this.setState({ totalLength });
  }

  getStrokeDasharray(length, totalLength, lines) {
    const lineLength = lines.reduce((pre, next) => pre + next);

    const count = parseInt(length / lineLength, 10);
    const remainLength = length % lineLength;
    const restLength = totalLength - length;

    let remainLines = [];
    for (let i = 0, sum = 0; true; sum += lines[i], ++i) {
      if (sum + lines[i] > remainLength) {
        remainLines = [...lines.slice(0, i), remainLength - sum];
        break;
      }
    }

    const emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

    return [...this.repeat(lines, count), ...remainLines, ...emptyLines]
      .map(line => `${line}px`)
      .join(', ');
  }

  repeat(lines, count) {
    const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
    let result = [];

    for (let i = 0; i < count; ++i) {
      result = [...result, ...linesUnit];
    }

    return result;
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

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

      return isLabelElement ?
        React.cloneElement(label, labelProps) :
        (<text {...labelProps} className="recharts-line-label">{entry.value}</text>);
    });

    return <Layer className="recharts-line-labels">{labels}</Layer>;
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
        <Dot className="recharts-line-dot" {...dotProps} />;
    });

    return <Layer className="recharts-line-dots">{dots}</Layer>;
  }

  renderCurve() {
    const {
      dot, points, label, className,
      isAnimationActive, animationBegin, animationDuration, animationEasing,
      onClick, onMouseEnter, onMouseLeave,
      strokeDasharray,
      ...other,
    } = this.props;

    const { totalLength } = this.state;
    const animationProps = {
      isActive: isAnimationActive,
      begin: animationBegin,
      canBegin: totalLength > 0,
      easing: animationEasing,
      duration: animationDuration,
      onAnimationEnd: this.handleAnimationEnd,
      ref: 'animate',
    };
    const curveProps = {
      ...other,
      className: 'recharts-line-curve',
      fill: 'none',
      onClick,
      onMouseEnter,
      onMouseLeave,
      points,
    };

    if (strokeDasharray) {
      const lines = strokeDasharray.split(/[,\s]+/gim)
        .map(num => parseFloat(num));

      return (
        <Animate { ...animationProps }
          from={{ length: 0 }}
          to={{ length: totalLength }}
        >
          {
            ({ length }) => (
              <Curve { ...curveProps }
                strokeDasharray={this.getStrokeDasharray(length, totalLength, lines)}
              />
            )
          }
        </Animate>
      );
    }

    return (
      <Animate { ...animationProps }
        from={`0px ${totalLength}px`}
        to={`${totalLength}px 0px`}
        attributeName="strokeDasharray"
      >
        <Curve { ...curveProps } />
      </Animate>
    );
  }

  render() {
    const {
      dot, points, label, className,
      onClick, onMouseEnter, onMouseLeave,
    } = this.props;

    if (!points || !points.length) {
      return null;
    }

    const hasSinglePoint = points.length === 1;
    const layerClass = classNames('recharts-line', className);

    return (
      <Layer className={layerClass}>
        {!hasSinglePoint && this.renderCurve()}
        {(hasSinglePoint || dot) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Line;
