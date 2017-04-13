/**
 * @fileOverview Radar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, isSsr } from '../util/ReactUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';

@pureRender
class Radar extends Component {

  static displayName = 'Radar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]).isRequired,
    angleAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radiusAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
    shape: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    dot: PropTypes.oneOfType([
      PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool,
    ]),
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    hide: PropTypes.bool,

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    isAnimationActive: PropTypes.bool,
    animationId: PropTypes.number,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    dot: false,
    legendType: 'rect',
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = { isAnimationFinished: false };

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  handleMouseEnter = (e) => {
    const { onMouseEnter } = this.props;

    if (onMouseEnter) {
      onMouseEnter(this.props, e);
    }
  };

  handleMouseLeave = (e) => {
    const { onMouseLeave } = this.props;

    if (onMouseLeave) {
      onMouseLeave(this.props, e);
    }
  };

  renderPolygon() {
    /* eslint-disable no-unused-vars */
    const { shape, points, animationDuration, animationEasing, animationBegin,
      isAnimationActive, animationId, dataKey, className, ...others } = this.props;
    /* eslint-enable no-unused-vars */

    if (React.isValidElement(shape)) {
      return React.cloneElement(shape, { ...others, points });
    } else if (_.isFunction(shape)) {
      return shape(this.props);
    }

    const point = points[0];
    const transformPoints = points.map(p => (
      { x: p.x - point.cx, y: p.y - point.cy }
    ));

    return (
      <Layer className="recharts-radar-polygon" transform={`translate(${point.cx}, ${point.cy})`}>
        <Animate
          from="scale(0)"
          to="scale(1)"
          attributeName="transform"
          isActive={isAnimationActive}
          begin={animationBegin}
          easing={animationEasing}
          duration={animationDuration}
          key={animationId}
          onAnimationEnd={this.handleAnimationEnd}
          onAnimationStart={this.handleAnimationStart}
        >
          <Polygon
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            {...getPresentationAttributes(this.props)}
            points={transformPoints}
          />
        </Animate>
      </Layer>
    );
  }

  renderDotItem(option, props) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = <Dot {...props} className="recharts-radar-dot" />;
    }

    return dotItem;
  }

  renderDots() {
    const { dot, points } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const customDotProps = getPresentationAttributes(dot);

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

      return this.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-radar-dots">{dots}</Layer>;
  }

  render() {
    const { hide, className, points, dot, isAnimationActive } = this.props;

    if (hide || !points || !points.length) { return null; }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-radar', className);

    return (
      <Layer className={layerClass}>
        {this.renderPolygon()}
        {dot && this.renderDots()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

export default Radar;
