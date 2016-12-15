/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component, PropTypes } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Text from '../component/Text';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, getPresentationAttributes,
  filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import { isNumber } from '../util/DataUtils';

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
    composedData: PropTypes.arrayOf(PropTypes.object),
    minAngle: PropTypes.number,
    legendType: PropTypes.oneOf([
      'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star',
      'triangle', 'wye',
    ]),
    maxRadius: PropTypes.number,

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
    data: [],
    minAngle: 0,
    isAnimationActive: !isSsr(),
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      isAnimationFinished: false,
    };

    if (!this.id) {
      this.id = `clipPath${Date.now()}`;
    }
  }

  getDeltaAngle() {
    const { startAngle, endAngle } = this.props;
    const sign = Math.sign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  }

  getSectors(data) {
    const { cx, cy, innerRadius, outerRadius, cornerRadius, startAngle, paddingAngle,
      minAngle, nameKey, valueKey } = this.props;
    const len = data.length;
    const deltaAngle = this.getDeltaAngle();
    const absDeltaAngle = Math.abs(deltaAngle);
    const totalPadingAngle = (absDeltaAngle >= 360 ? len : (len - 1)) * paddingAngle;
    const sum = data.reduce((result, entry) => (result + entry[valueKey]), 0);
    const deltaRadius = Math.abs(outerRadius - innerRadius);

    let sectors = [];
    let prev;

    if (sum > 0) {
      sectors = data.map((entry, i) => {
        const percent = entry[valueKey] / sum;

        let tempStartAngle;

        if (i) {
          tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle)
            + Math.sign(deltaAngle) * paddingAngle;
        } else {
          tempStartAngle = startAngle;
        }

        const tempEndAngle = tempStartAngle + Math.sign(deltaAngle) * (
          minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle)
        );

        prev = {
          percent,
          cornerRadius,
          ...entry,
          cx,
          cy,
          innerRadius,
          outerRadius,
          name: entry[nameKey],
          value: entry[valueKey],
          startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
          endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
          midAngle: (tempStartAngle + tempEndAngle) / 2,
        };

        return prev;
      });
    }

    return sectors;
  }

  getTextAnchor(x, cx) {
    if (x > cx) {
      return 'start';
    } else if (x < cx) {
      return 'end';
    }

    return 'middle';
  }

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
          {this.renderLabelItem(label, labelProps, entry[valueKey])}
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
    const { data, composedData, className, label, cx, cy, innerRadius,
      outerRadius } = this.props;
    const pieData = composedData || data;

    if (!pieData || !pieData.length || !isNumber(cx)
      || !isNumber(cy) || !isNumber(innerRadius)
      || !isNumber(outerRadius)) {
      return null;
    }

    const sectors = this.getSectors(pieData);
    const layerClass = classNames('recharts-pie', className);

    return (
      <Layer className={layerClass}>
        {this.renderClipPath()}
        <g clipPath={`url(#${this.id})`}>
          {this.renderSectors(sectors)}
        </g>
        {label && this.renderLabels(sectors)}
      </Layer>
    );
  }
}

export default Pie;
