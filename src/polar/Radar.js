/**
 * @fileOverview Radar
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, isSsr } from '../util/ReactUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import Text from '../component/Text';

@pureRender
class Radar extends Component {

  static displayName = 'Radar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    dataKey: PropTypes.string.isRequired,

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
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square',
      'star', 'triangle', 'wye',
    ]),

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
    dot: false,
    label: false,
    legendType: 'rect',
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
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
          className="recharts-radar-label"
        >
          {value}
        </Text>
      );
    }

    return labelItem;
  }

  renderLabels() {
    const { points, label } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);

    const labels = points.map((entry, i) => {
      const labelProps = {
        textAnchor: 'middle',
        ...baseProps,
        stroke: 'none',
        fill: (baseProps && baseProps.stroke) || '#666',
        ...customLabelProps,
        ...entry,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return this.renderLabelItem(label, labelProps, entry.value);
    });

    return <Layer className="recharts-radar-labels">{labels}</Layer>;
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
    const { className, points, label, dot } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-radar', className);

    return (
      <Layer className={layerClass}>
        {this.renderPolygon()}
        {label && this.renderLabels()}
        {dot && this.renderDots()}
      </Layer>
    );
  }
}

export default Radar;
