/**
 * @fileOverview Render a group of radial bar
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Sector from '../shape/Sector';
import Layer from '../container/Layer';
import { getStringSize } from '../util/DOMUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventsOfChild } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { polarToCartesian } from '../util/PolarUtils';
import Animate from '../lib/reactSmooth';
import _ from 'lodash';

const RADIAN = Math.PI / 180;

@pureRender
class RadialBar extends Component {

  static displayName = 'RadialBar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    activeShape: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element,
    ]),
    activeIndex: PropTypes.number,

    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    maxAngle: PropTypes.number,
    minAngle: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      innerRadius: PropTypes.number,
      outerRadius: PropTypes.number,
      value: PropTypes.value,
    })),
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square',
      'star', 'triangle', 'wye',
    ]),
    label: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.element, PropTypes.object,
    ]),
    background: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element,
    ]),

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf([
      'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'spring',
    ]),
  };

  static defaultProps = {
    startAngle: 180,
    endAngle: 0,
    maxAngle: 135,
    minAngle: 0,
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    data: [],
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = {
    isAnimationFinished: false,
  };

  getDeltaAngle() {
    const { startAngle, endAngle } = this.props;
    const sign = Math.sign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  }

  getSectors() {
    const { cx, cy, startAngle, endAngle,
           data, minAngle, maxAngle } = this.props;
    const maxValue = Math.max.apply(null, data.map(entry => Math.abs(entry.value)));
    const absMinAngle = Math.abs(minAngle);
    const absMaxAngle = Math.abs(maxAngle);
    const deltaAngle = this.getDeltaAngle();
    const gapAngle = Math.min(Math.abs(absMaxAngle - absMinAngle), 360);

    const sectors = data.map((entry) => {
      const value = entry.value;
      const tempEndAngle = maxValue === 0 ? startAngle :
        startAngle + Math.sign(value * deltaAngle) * (
          absMinAngle + gapAngle * Math.abs(entry.value) / maxValue
        );

      return {
        ...entry,
        cx, cy,
        startAngle,
        endAngle: tempEndAngle,
        payload: entry,
      };
    });

    return sectors;
  }

  getLabelPathArc(data, labelContent, style) {
    const { label } = this.props;
    const labelProps = React.isValidElement(label) ? label.props : label;
    const offsetRadius = labelProps.offsetRadius || 2;
    const orientation = labelProps.orientation || 'inner';
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = data;
    const clockWise = this.getDeltaAngle() < 0 && (data.value > 0);
    const radius = clockWise ?
      innerRadius + offsetRadius :
      Math.max(outerRadius - offsetRadius, 0);

    if (radius <= 0) { return ''; }

    const labelSize = getStringSize(labelContent, style);
    const deltaAngle = labelSize.width / (radius * RADIAN);
    let tempStartAngle;
    let tempEndAngle;

    if (clockWise) {
      tempStartAngle = orientation === 'inner' ?
        Math.min(endAngle + deltaAngle, startAngle) : endAngle;
      tempEndAngle = tempStartAngle - deltaAngle;
    } else {
      tempStartAngle = orientation === 'inner' ?
        Math.max(endAngle - deltaAngle, startAngle) : endAngle;
      tempEndAngle = tempStartAngle + deltaAngle;
    }

    const startPoint = polarToCartesian(cx, cy, radius, tempStartAngle);
    const endPoint = polarToCartesian(cx, cy, radius, tempEndAngle);

    return `M${startPoint.x},${startPoint.y}
            A${radius},${radius},0,
            ${deltaAngle >= 180 ? 1 : 0},
            ${clockWise ? 1 : 0},
            ${endPoint.x},${endPoint.y}`;
  }

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  renderSectorShape(shape, props) {
    let sectorShape;

    if (React.isValidElement(shape)) {
      sectorShape = React.cloneElement(shape, props);
    } else if (_.isFunction(shape)) {
      sectorShape = shape(props);
    } else {
      sectorShape = React.createElement(Sector, props);
    }

    return sectorShape;
  }

  renderSectors(sectors) {
    const { className, shape, activeShape, activeIndex, data } = this.props;
    const {
      animationEasing,
      animationDuration,
      animationBegin,
      isAnimationActive,
    } = this.props;
    const baseProps = getPresentationAttributes(this.props);

    return sectors.map((entry, i) => {
      const { startAngle, endAngle } = entry;

      return (
        <Animate
          from={{ angle: startAngle }}
          to={{ angle: endAngle }}
          begin={animationBegin}
          isActive={isAnimationActive}
          duration={animationDuration}
          easing={animationEasing}
          shouldReAnimate
          key={`aniamte-${i}`}
          onAnimationStart={this.handleAnimationStart}
          onAnimationEnd={this.handleAnimationEnd}
        >
        {
          ({ angle }) => {
            const props = {
              ...baseProps,
              ...entry,
              ...filterEventsOfChild(this.props, entry, i),
              endAngle: angle,
              key: `sector-${i}`,
              className: 'recharts-radial-bar-sector',
            };

            return this.renderSectorShape(i === activeIndex ? activeShape : shape, props);
          }
        }
        </Animate>
      );
    });
  }

  renderBackground(sectors) {
    const { startAngle, endAngle, background } = this.props;
    const backgroundProps = getPresentationAttributes(background);

    return sectors.map((entry, i) => {
      const { value, ...rest } = entry;
      const props = {
        ...rest,
        fill: '#eee',
        ...backgroundProps,
        startAngle,
        endAngle,
        index: i,
        key: `sector-${i}`,
        className: 'recharts-radial-bar-background-sector',
      };

      return this.renderSectorShape(background, props);
    });
  }

  renderLabels(sectors) {
    const { isAnimationActive } = this.props;
    if (isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { label } = this.props;
    const isElement = React.isValidElement(label);
    const formatter = isElement ? label.props.formatter : label.formatter;
    const hasFormatter = _.isFunction(formatter);

    return sectors.map((entry, i) => {
      const content = hasFormatter ? formatter(entry.value) : entry.value;
      const id = _.uniqueId('recharts-defs-');

      const style = getPresentationAttributes(label) || { fontSize: 10, fill: '#000' };
      const path = this.getLabelPathArc(entry, content, style);

      return (
        <text {...style} key={`label-${i}`} className="recharts-radial-bar-label">
          <defs><path id={id} d={path} /></defs>
          <textPath xlinkHref={`#${id}`}>{content}</textPath>
        </text>
      );
    });
  }

  render() {
    const { data, className, background, label } = this.props;

    if (!data || !data.length) { return null; }

    const sectors = this.getSectors();
    const layerClass = classNames('recharts-area', className);

    return (
      <Layer className={layerClass}>
        {
          background && (
            <Layer className="recharts-radial-bar-background">
              {this.renderBackground(sectors)}
            </Layer>
          )
        }

        <Layer className="recharts-radial-bar-sectors">
          {this.renderSectors(sectors)}
        </Layer>

        {
          label && (
            <Layer className="recharts-radial-bar-labels">
              {this.renderLabels(sectors)}
            </Layer>
          )
        }
      </Layer>
    );
  }
}

export default RadialBar;
