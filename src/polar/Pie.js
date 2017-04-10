/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Text from '../component/Text';
import Label from '../component/Label';
import LabelList from '../component/LabelList';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import { isNumber, getValueByDataKey, uniqueId, mathSign } from '../util/DataUtils';

@AnimationDecorator
@pureRender
class Pie extends Component {

  static displayName = 'Pie';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    animationId: PropTypes.number,
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    paddingAngle: PropTypes.number,
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    nameKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    valueKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    data: PropTypes.arrayOf(PropTypes.object),
    minAngle: PropTypes.number,
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    maxRadius: PropTypes.number,

    hide: PropTypes.bool,
    labelLine: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element, PropTypes.bool,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.shape({
        offsetRadius: PropTypes.number,
      }),
      PropTypes.func, PropTypes.element, PropTypes.bool,
    ]),
    activeShape: PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.element,
    ]),
    activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf([
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'spring',
      'linear',
    ]),
  };

  static defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    // The abscissa of pole
    cx: '50%',
    // The ordinate of pole
    cy: '50%',
    // The start angle of first sector
    startAngle: 0,
    // The direction of drawing sectors
    endAngle: 360,
    // The inner radius of sectors
    innerRadius: 0,
    // The outer radius of sectors
    outerRadius: '80%',
    paddingAngle: 0,
    nameKey: 'name',
    valueKey: 'value',
    labelLine: true,
    hide: false,
    data: [],
    minAngle: 0,
    isAnimationActive: !isSsr(),
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = { isAnimationFinished: false };

  getTextAnchor(x, cx) {
    if (x > cx) {
      return 'start';
    } else if (x < cx) {
      return 'end';
    }

    return 'middle';
  }


  id = uniqueId('recharts-pie-');

  isActiveIndex(i) {
    const { activeIndex } = this.props;

    if (Array.isArray(activeIndex)) {
      return activeIndex.indexOf(i) !== -1;
    }

    return i === activeIndex;
  }

  handleAnimationEnd = () => {
    this.setState({
      isAnimationFinished: true,
    });
  };

  renderClipPath() {
    const { cx, cy, maxRadius, startAngle, isAnimationActive, animationDuration,
      animationEasing, animationBegin, animationId } = this.props;

    return (
      <defs>
        <clipPath id={this.id}>
          <Animate
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
            key={animationId}
            animationBegin={animationBegin}
            onAnimationEnd={this.handleAnimationEnd}
            from={{
              endAngle: startAngle,
            }}
            to={{
              outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
              innerRadius: 0,
              endAngle: this.props.endAngle,
            }}
          >
            {
              ({ outerRadius, innerRadius, endAngle }) => (
                <Sector
                  cx={cx}
                  cy={cy}
                  outerRadius={outerRadius}
                  innerRadius={innerRadius}
                  startAngle={startAngle}
                  endAngle={endAngle}
                />
              )
            }
          </Animate>
        </clipPath>
      </defs>
    );
  }

  renderLabelLineItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      return option(props);
    }

    return <Curve {...props} type="linear" className="recharts-pie-label-line" />;
  }

  renderLabelItem(option, props, value) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    let label = value;
    if (_.isFunction(option)) {
      label = option(props);
      if (React.isValidElement(label)) {
        return label;
      }
    }

    return (
      <Text
        {...props}
        alignmentBaseline="middle"
        className="recharts-pie-label-text"
      >
        {label}
      </Text>
    );
  }

  renderLabels(sectors) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { label, labelLine, valueKey } = this.props;
    const pieProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const customLabelLineProps = getPresentationAttributes(labelLine);
    const offsetRadius = (label && label.offsetRadius) || 20;

    const labels = sectors.map((entry, i) => {
      const midAngle = (entry.startAngle + entry.endAngle) / 2;
      const endPoint = polarToCartesian(
        entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle
      );
      const labelProps = {
        ...pieProps,
        ...entry,
        stroke: 'none',
        ...customLabelProps,
        index: i,
        textAnchor: this.getTextAnchor(endPoint.x, entry.cx),
        ...endPoint,
      };
      const lineProps = {
        ...pieProps,
        ...entry,
        fill: 'none',
        stroke: entry.fill,
        ...customLabelLineProps,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      };

      return (
        <Layer key={`label-${i}`}>
          {labelLine && this.renderLabelLineItem(labelLine, lineProps)}
          {this.renderLabelItem(label, labelProps, getValueByDataKey(entry, valueKey))}
        </Layer>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  renderSectorItem(option, props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      return option(props);
    } else if (_.isPlainObject(option)) {
      return <Sector {...props} {...option} />;
    }

    return <Sector {...props} />;
  }

  renderSectors(sectors) {
    const { activeShape } = this.props;

    return sectors.map((entry, i) => (
      <Layer
        className="recharts-pie-sector"
        {...filterEventsOfChild(this.props, entry, i)}
        key={`sector-${i}`}
      >
        {this.renderSectorItem(this.isActiveIndex(i) ? activeShape : null, entry)}
      </Layer>
    ));
  }

  render() {
    const { hide, sectors, className, label, cx, cy, innerRadius,
      outerRadius, isAnimationActive } = this.props;

    if (hide || !sectors || !sectors.length || !isNumber(cx)
      || !isNumber(cy) || !isNumber(innerRadius)
      || !isNumber(outerRadius)) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-pie', className);

    return (
      <Layer className={layerClass}>
        {this.renderClipPath()}
        <g clipPath={`url(#${this.id})`}>
          {this.renderSectors(sectors)}
        </g>
        {label && this.renderLabels(sectors)}
        {Label.renderCallByParent(this.props, null, false)}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, sectors, false)}
      </Layer>
    );
  }
}

export default Pie;
