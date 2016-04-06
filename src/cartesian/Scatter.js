/**
 * @fileOverview Render a group of scatters
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import Curve from '../shape/Curve';
import Animate from 'react-smooth';
import _ from 'lodash';

@pureRender
class Scatter extends Component {

  static displayName = 'Scatter';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,

    legendType: PropTypes.string,
    xAxisId: PropTypes.number,
    yAxisId: PropTypes.number,
    zAxisId: PropTypes.number,
    line: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object, PropTypes.func, PropTypes.element
    ]),
    lineType: PropTypes.oneOf(['fitting', 'joint']),
    className: PropTypes.string,

    points: PropTypes.arrayOf(PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      r: PropTypes.number,
      payload: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        z: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
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
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'scatter',
    lineType: 'joint',
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},

    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = {
    activeIndex: -1,
  };

  handleCircleMouseEnter(data, index, e) {
    const { onMouseEnter } = this.props;

    this.setState({
      activeIndex: index,
    }, () => {
      onMouseEnter(data, e);
    });
  }

  handleCircleMouseLeave = () => {
    const { onMouseLeave } = this.props;

    this.setState({
      activeIndex: -1,
    }, onMouseLeave);
  };

  renderCircles() {
    const {
      points,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
    } = this.props;
    const { activeIndex } = this.state;
    const baseProps = getPresentationAttributes(this.props);

    return points.map((entry, i) => {
      const { r, ...rest } = entry;

      return (
        <Animate from="scale(0)" to="scale(1)"
          attributeName="transform"
          easing="ease"
          key={`circle-${i}`}
        >
          <circle
            style={{
              transformOrigin: 'center center',
            }}
            {...baseProps}
            {...rest}
            r={i === activeIndex ? r * 1.1 : r}
            onMouseEnter={this.handleCircleMouseEnter.bind(this, entry, i)}
            onMouseLeave={this.handleCircleMouseLeave}
          />
        </Animate>
      );
    });
  }

  renderLine() {
    const { points, line, lineType } = this.props;
    const scatterProps = getPresentationAttributes(this.props);
    const customLineProps = getPresentationAttributes(line);
    let linePoints;

    if (lineType === 'joint') {
      linePoints = points.map(entry => ({ x: entry.cx, y: entry.cy }));
    }
    const lineProps = {
      ...scatterProps,
      fill: 'none',
      stroke: scatterProps.fill,
      ...customLineProps,
      points: linePoints,
    };
    let lineItem;
    if (React.isValidElement(line)) {
      lineItem = React.cloneElement(line, lineProps);
    } else if (_.isFunction(line)) {
      lineItem = line(lineProps);
    } else {
      lineItem = <Curve {...lineProps} />;
    }

    return <Layer className="recharts-scatter-line">{lineItem}</Layer>;
  }

  render() {
    const { points, line, className } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-scatter', className);

    return (
      <Layer className={layerClass}>
        {line && this.renderLine()}
        {this.renderCircles()}
      </Layer>
    );
  }
}

export default Scatter;
