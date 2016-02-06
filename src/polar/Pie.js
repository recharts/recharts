/**
 * @fileOverview Render sectors of a pie
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import Animate from 'react-smooth';
import _ from 'lodash';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';

@pureRender
class Pie extends Component {

  static displayName = 'Pie';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    nameKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    valueKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    data: PropTypes.arrayOf(PropTypes.object),
    minAngle: PropTypes.number,
    legendType: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
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
    nameKey: 'name',
    valueKey: 'value',
    data: [],
    minAngle: 0,
    onMouseEnter() {},
    onMouseLeave() {},
    onClick() {},
    onAnimationEnd() {},
    isAnimationActive: true,
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

  getSectors() {
    const { cx, cy, innerRadius, outerRadius, startAngle,
      data, minAngle, endAngle, valueKey } = this.props;
    const len = data.length;
    const deltaAngle = this.getDeltaAngle();
    const absDeltaAngle = Math.abs(deltaAngle);

    const sum = data.reduce((result, entry) => (result + entry[valueKey]), 0);

    let sectors = [];
    let prev;

    if (sum > 0) {
      sectors = data.map((entry, i) => {
        const percent = entry[valueKey] / sum;
        let _startAngle;
        let _endAngle;

        if (i) {
          _startAngle = deltaAngle < 0 ? prev.endAngle : prev.startAngle;
        } else {
          _startAngle = startAngle;
        }

        _endAngle = _startAngle + Math.sign(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle));

        prev = {
          ...entry,
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle: deltaAngle < 0 ? _startAngle : _endAngle,
          endAngle: deltaAngle < 0 ? _endAngle : _startAngle,
          payload: entry,
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

  handleAnimationEnd() {
    this.setState({
      isAnimationFinished: true,
    });
  }

  handleSectorEnter(data, e) {
    this.props.onMouseEnter(data, e);
  }

  renderClipPath() {
    const {
      cx,
      cy,
      outerRadius,
      innerRadius,
      startAngle,
      isAnimationActive,
      animationDuration,
      animationEasing,
      animationBegin,
    } = this.props;

    return (
      <defs>
        <clipPath id={this.id}>
          <Animate easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
            animationBegin={animationBegin}
            onAnimationEnd={::this.handleAnimationEnd}
            from={{ endAngle: startAngle }}
            to = {{ endAngle: this.props.endAngle }}
          >
            {
              ({ endAngle }) => (
                <Sector cx={cx}
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

  renderLabels(sectors) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { label, valueKey } = this.props;
    const pieProps = getPresentationAttributes(this.props);
    const customLabelProps = getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);
    const offsetRadius = (customLabelProps && customLabelProps.offsetRadius) || 20;

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
        ...customLabelProps,
        points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      };

      return isLabelElement ? React.cloneElement(label, { labelProps, key: `label-${i}` }) : (
        <g key={`label-${i}`}>
          <Curve {...lineProps} type="linear" className="recharts-pie-label-line"/>
          <text {...labelProps} className="recharts-pie-label-text">{entry[valueKey]}</text>
        </g>
      );
    });

    return <Layer className="recharts-pie-labels">{labels}</Layer>;
  }

  renderSectors(sectors) {
    const { onMouseLeave, onClick } = this.props;

    return sectors.map((entry, i) => (
      <Sector
        {...entry}
        className="recharts-pie-sector"
        onMouseEnter={this.handleSectorEnter.bind(this, entry)}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        key={`sector-${i}`}
      />
    ));
  }

  render() {
    const { data, className, label, cx, cy, innerRadius, outerRadius } = this.props;

    if (!data || !data.length || !_.isNumber(cx)
      || !_.isNumber(cy) || !_.isNumber(innerRadius)
      || !_.isNumber(outerRadius)) {
      return null;
    }

    const sectors = this.getSectors();
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
