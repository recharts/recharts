/**
 * @fileOverview Line
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';
import ErrorBar from './ErrorBar';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES,
  getPresentationAttributes, isSsr, findChildByType } from '../util/ReactUtils';

const FACTOR = 1.0000001;

@pureRender
class Line extends Component {

  static displayName = 'Line';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    yAxis: PropTypes.object,
    xAxis: PropTypes.object,
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
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

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
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
  };

  state = {
    isAnimationFinished: true,
    totalLength: 0,
  };

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
    const { animationId } = this.props;

    if (animationId !== prevProps.animationId) {
      const cur = this.getTotalLength();
      const { totalLength } = prevState;
      // A hack method to trigger animation
      this.setState({
        totalLength: cur === totalLength ? cur * FACTOR : cur,
      });
    }
  }

  getTotalLength() {
    const curveDom = this.animate;
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

  pathRef = (node) => {
    this.animate = node;
  };

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
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
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
      const labelProps = {
        textAnchor: 'middle',
        ...entry,
        ...lineProps,
        ...customLabelProps,
        index: i,
        key: `label-${i}`,
      };

      return this.renderLabelItem(label, labelProps, entry.value);
    });

    return <Layer className="recharts-line-labels">{labels}</Layer>;
  }

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { points, xAxis, yAxis, layout, children } = this.props;
    const errorBarItem = findChildByType(children, ErrorBar);

    if (!errorBarItem) { return null; }

    function dataPointFormatter(dataPoint, dataKey) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: dataPoint.payload[dataKey],
      };
    }

    return React.cloneElement(errorBarItem, {
      data: points,
      xAxis,
      yAxis,
      layout,
      dataPointFormatter,
    });
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
        value: entry.value,
        cx: entry.x, cy: entry.y, index: i, payload: entry.payload,
      };

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-line-dots" key="dots">{dots}</Layer>;
  }

  renderCurve() {
    const { points, strokeDasharray, isAnimationActive,
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
      shouldReAnimate: true,
      pathRef: this.pathRef,
    };
    const curveProps = { ...other, className: 'recharts-line-curve', fill: 'none',
      onClick, onMouseEnter, onMouseLeave, points };

    if (!isAnimationActive) {
      return <Curve {...curveProps} strokeDasharray={strokeDasharray} />;
    }

    if (strokeDasharray && totalLength) {
      const lines = strokeDasharray.split(/[,\s]+/gim)
        .map(num => parseFloat(num));

      return (
        <Animate
          {...animationProps}
          from={{ curveLen: 0 }}
          to={{ curveLen: totalLength }}
        >
          {
            ({ curveLen }) => (
              <Curve
                {...curveProps}
                strokeDasharray={this.getStrokeDasharray(curveLen, totalLength, lines)}
              />
            )
          }
        </Animate>
      );
    } else if (strokeDasharray) {
      return (
        <Curve
          {...curveProps}
          pathRef={this.pathRef}
          strokeDasharray={strokeDasharray}
        />
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
        {this.renderErrorBar()}
        {(hasSinglePoint || dot) && this.renderDots()}
        {label && this.renderLabels()}
      </Layer>
    );
  }
}

export default Line;
