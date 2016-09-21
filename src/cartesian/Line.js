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
import Text from '../component/Text';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

const FACTOR = 1.0000001;

@pureRender
class Line extends Component {

  static displayName = 'Line';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star',
      'triangle', 'wye',
    ]),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    connectNulls: PropTypes.bool,

     // whether have dot in line
    activeDot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    dot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),

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
    animationId: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  constructor(props, ctx) {
    super(props, ctx);

    const { points } = props;
    this.state = {
      isAnimationFinished: true,
      totalLength: 0,
    };
  }
  /* eslint-disable  react/no-did-mount-set-state */
  componentDidMount() {
    const { isAnimationActive } = this.props;

    if (!isAnimationActive) {
      return;
    }

    const totalLength = this.getTotalLength();

    this.setState({ totalLength });
  }
  /* eslint-disable  react/no-did-update-set-state */
  componentDidUpdate(prevProps, prevState) {
    const { animationId, points } = this.props;

    if (animationId !== prevProps.animationId || points !== prevProps.points) {
      const cur = this.getTotalLength();
      const { totalLength } = prevState;
      // A hack method to trigger animation
      this.setState({
        totalLength: cur === totalLength ? cur * FACTOR : cur,
      });
    }
  }

  getTotalLength() {
    const curveDom = findDOMNode(this.refs.animate);
    const totalLength = (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;

    return totalLength;
  }

  getStrokeDasharray(length, totalLength, lines) {
    const lineLength = lines.reduce((pre, next) => pre + next);

    const count = parseInt(length / lineLength, 10);
    const remainLength = length % lineLength;
    const restLength = totalLength - length;

    let remainLines = [];
    for (let i = 0, sum = 0; ; sum += lines[i], ++i) {
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

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

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
          className="recharts-line-label"
        >
          {value}
        </Text>
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
    const lineProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);

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

      return this.renderLabelItem(label, labelProps, entry.value);
    });

    return <Layer className="recharts-line-labels">{labels}</Layer>;
  }

  renderDotItem(option, props) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = <Dot {...props} className="recharts-line-dot" />;
    }

    return dotItem;
  }

  renderDots() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { dot, points } = this.props;
    const lineProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);
    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        cx: entry.x, cy: entry.y, index: i, payload: entry,
      };

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-line-dots" key="dots">{dots}</Layer>;
  }

  renderCurve() {
    const { points, className, strokeDasharray, isAnimationActive,
      animationBegin, animationDuration, animationEasing, onClick, onMouseEnter,
      onMouseLeave, ...other } = this.props;
    const { totalLength } = this.state;
    const animationProps = {
      isActive: isAnimationActive,
      begin: animationBegin,
      canBegin: totalLength > 0,
      easing: animationEasing,
      duration: animationDuration,
      onAnimationEnd: this.handleAnimationEnd,
      onAnimationStart: this.handleAnimationStart,
      ref: 'animate',
      shouldReAnimate: true,
    };
    const curveProps = { ...other, className: 'recharts-line-curve', fill: 'none',
      onClick, onMouseEnter, onMouseLeave, points };

    if (strokeDasharray) {
      const lines = strokeDasharray.split(/[,\s]+/gim)
        .map(num => parseFloat(num));

      return (
        <Animate
          {...animationProps}
          from={{ length: 0 }}
          to={{ length: totalLength }}
        >
          {
            ({ length }) => (
              <Curve
                {...curveProps}
                strokeDasharray={this.getStrokeDasharray(length, totalLength, lines)}
              />
            )
          }
        </Animate>
      );
    }

    return (
      <Animate
        {...animationProps}
        from={`0px ${totalLength === 0 ? 1 : totalLength}px`}
        to={`${totalLength}px 0px`}
        attributeName="strokeDasharray"
      >
        <Curve {...curveProps} />
      </Animate>
    );
  }

  render() {
    const { dot, points, label, className } = this.props;

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
