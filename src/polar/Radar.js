/**
 * @fileOverview Radar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import { interpolateNumber } from '../util/DataUtils';
import animationDecorator from '../util/AnimationDecorator/';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, LEGEND_TYPES, filterEventAttributes,
  getPresentationAttributes, isSsr } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import Polygon from '../shape/Polygon';
import Dot from '../shape/Dot';
import Layer from '../container/Layer';
import LabelList from '../component/LabelList';

@animationDecorator
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
    activeDot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    // whether have dot in poly line
    dot: PropTypes.oneOfType([
      PropTypes.object, PropTypes.element, PropTypes.func, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.element, PropTypes.func, PropTypes.object, PropTypes.bool,
    ]),
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    hide: PropTypes.bool,

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    activeDot: true,
    dot: false,
    legendType: 'rect',
  };

  static getComposedData = ({ radiusAxis, angleAxis, displayedData, dataKey }) => {
    const { cx, cy } = angleAxis;
    const points = displayedData.map((entry, i) => {
      const name = getValueByDataKey(entry, angleAxis.dataKey, i);
      const value = getValueByDataKey(entry, dataKey, 0);
      const angle = angleAxis.scale(name);
      const radius = radiusAxis.scale(value);

      return {
        ...polarToCartesian(cx, cy, radius, angle),
        name, value, cx, cy, radius, angle,
        payload: entry,
      };
    });

    return { points };
  };

  state = {};

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

  renderDots(points) {
    const { dot } = this.props;
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

  renderPolygonStatically(points) {
    const { shape, dot } = this.props;

    let radar;
    if (React.isValidElement(shape)) {
      radar = React.cloneElement(shape, { ...this.props, points });
    } else if (_.isFunction(shape)) {
      radar = shape({ ...this.props, points });
    } else {
      radar = (
        <Polygon
          {...filterEventAttributes(this.props)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...getPresentationAttributes(this.props)}
          points={points}
        />
      );
    }

    return (
      <Layer className="recharts-radar-polygon">
        {radar}
        {dot ? this.renderDots(points) : null}
      </Layer>
    );
  }

  renderPolygonWithAnimation({ t }) {
    const { points } = this.props;
    const { prevPoints } = this.state;

    const stepData = points.map((entry, index) => {
      const prev = prevPoints && prevPoints[index];

      if (prev) {
        const interpolatorX = interpolateNumber(prev.x, entry.x);
        const interpolatorY = interpolateNumber(prev.y, entry.y);

        return {
          ...entry,
          x: interpolatorX(t),
          y: interpolatorY(t),
        };
      }

      const interpolatorX = interpolateNumber(entry.cx, entry.x);
      const interpolatorY = interpolateNumber(entry.cy, entry.y);

      return {
        ...entry,
        x: interpolatorX(t),
        y: interpolatorY(t),
      };
    });

    return this.renderPolygonStatically(stepData);
  }

  renderPolygon() {
    const { points, isAnimationActive } = this.props;
    const { prevPoints } = this.state;

    if (isAnimationActive && points && points.length &&
      (!prevPoints || !_.isEqual(prevPoints, points))) {
      return this.renderWithAnimation(this.renderPolygonWithAnimation);
    }

    return this.renderPolygonStatically(points);
  }

  renderLabelList() {
    const { points } = this.props;
    return LabelList.renderCallByParent(this.props, points);
  }

  render() {
    const { hide, className, points } = this.props;

    if (hide || !points || !points.length) { return null; }

    const layerClass = classNames('recharts-radar', className);

    return (
      <Layer className={layerClass}>
        {this.renderPolygon()}
        {this.renderLabelList()}
      </Layer>
    );
  }
}

export default Radar;
