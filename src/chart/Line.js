/**
 * @fileOverview Line
 */
import React, { PropTypes } from 'react';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';
import ReactUtils from '../util/ReactUtils';
import { findDOMNode } from 'react-dom';

@pureRender
class Line extends React.Component {

  static displayName = 'Line';

  static propTypes = {
    type: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
     // whether have dot in line
    dot: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    animation: PropTypes.shape({
      isActive: PropTypes.bool,
      delay: PropTypes.number,
      duration: PropTypes.number,
      timing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    }),
  };

  static defaultProps = {
    strokeWidth: 1,
    points: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
    animation: {
      isActive: true,
      delay: 400,
      duration: 1500,
      timing: 'ease',
    },
  };

  constructor(props) {
    super(props);
  }

  state = {
    isAppearActive: false,
    totalLength: 0,
  };

  componentDidMount() {
    const { isActive, delay } = this.props.animation;

    if (!isActive) {
      return;
    }

    const totalLength = findDOMNode(this.refs.curve).getTotalLength() || 0;

    this.setState({ totalLength });

    setTimeout(() => {
      this.setState({ isAppearActive: true });
    }, delay);
  }

  renderDots() {
    const { dot, points } = this.props;
    const lineProps = ReactUtils.getPresentationAttributes(this.props);
    const customDotProps = ReactUtils.getPresentationAttributes(dot);
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
        playload: entry,
      };

      return isDotElement ? React.cloneElement(dot, dotProps) : <Dot {...dotProps}/>;
    });

    return <Layer className="recharts-layer-line-dots">{dots}</Layer>;
  }

  render() {
    const { dot, points, className, animation, ...other } = this.props;
    const { isActive, delay, duration, timing } = animation;
    const { isAppearActive, totalLength } = this.state;
    let style = {};

    if (!points || !points.length) {
      return null;
    }
    const hasSinglePoint = points.length === 1;

    if (isActive && totalLength) {
      if (isAppearActive) {
        style = {
          strokeDasharray: totalLength + 'px 0px',
          transition: `stroke-dasharray ${duration}ms ${timing} ${delay}ms`,
        };
      } else {
        style = {
          strokeDasharray: '0px ' + totalLength + 'px',
        };
      }
    }

    return (
      <Layer className={'recharts-line ' + (className || '')}>
        {!hasSinglePoint && (
          <Curve
            {...other}
            fill="none"
            style={style}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            onClick={this.props.onClick}
            points={points}
            ref="curve"
          />
        )}
        {(hasSinglePoint || dot) && this.renderDots()}
      </Layer>
    );
  }
}

export default Line;
