/**
 * @fileOverview Render sectors of a pie
 */
import React, { PropTypes } from 'react';
import Layer from '../container/Layer';
import Sector from '../shape/Sector';
import Curve from '../shape/Curve';
import pureRender from 'pure-render-decorator';
import raf, { cancel as caf } from 'raf';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
const RADIAN = Math.PI / 180;

@pureRender
class Pie extends React.Component {

  static displayName = 'Pie';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    startAngle: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    clockWise: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      value: PropTypes.number,
    })),
    minAngle: PropTypes.number,
    legendType: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.bool]),


    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
  };

  static defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'line',
    // The abscissa of pole
    cx: 0,
    // The ordinate of pole
    cy: 0,
    // The start angle of first sector
    startAngle: 0,
    // The inner radius of sectors
    innerRadius: 0,
    // The outer radius of sectors
    outerRadius: 0,
    // The direction of drawing sectors
    clockWise: true,
    data: [],
    minAngle: 0,
    onMouseEnter() {},
    onMouseLeave() {},
    onClick() {},
    onAnimationEnd() {},
    isAnimationActive: true,
    animationBegin: 400,
    animationDuration: 1500,
  };

  state = {
    endAngle: this.props.startAngle,
  };

  componentDidMount() {
    const { isAnimationActive, animationBegin, animationDuration } = this.props;
    if (!isAnimationActive) {
      return;
    }

    const { endAngle } = this.state;

    this.velocity = -360 / animationDuration;
    setTimeout(() => {
      raf(this.update.bind(this));
    }, animationBegin);
  }

  getSectors() {
    const { cx, cy, innerRadius, outerRadius, startAngle, data, minAngle, clockWise } = this.props;
    const len = data.length;

    const sum = data.reduce((result, entry) => {
      return result + entry.value;
    }, 0);

    let sectors = [];
    let prev;

    if (sum > 0) {
      sectors = data.map((entry, i) => {
        const percent = entry.value / sum;
        let _startAngle;
        let _endAngle;

        if (i) {
          _startAngle = clockWise ? prev.endAngle : prev.startAngle;
        } else {
          _startAngle = startAngle;
        }

        _endAngle = _startAngle + (clockWise ? 1 : -1) * (minAngle + percent * (360 - len * minAngle));

        prev = {
          ...entry,
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle: clockWise ? _startAngle : _endAngle,
          endAngle: clockWise ? _endAngle : _startAngle,
          payload: entry,
        };

        return prev;
      });
    }

    return sectors;
  }

  update(timestamp) {
    if (!this.beginTime) {
      this.beginTime = timestamp;
    }

    const { startAngle } = this.props;
    const passedTime = timestamp - this.beginTime;

    if (passedTime > this.props.animationDuration) {
      this.setState({
        endAngle: startAngle + 360,
      });
      return;
    }

    const endAngle = this.velocity * passedTime + startAngle;
    this.setState({
      endAngle,
    });

    raf(this.update.bind(this));
  }

  handleSectorEnter(data, e) {
    this.props.onMouseEnter(data, e);
  }

  renderClipPath() {
    const { cx, cy, outerRadius, innerRadius, startAngle, isAnimationActive } = this.props;

    if (!isAnimationActive) {
      return null;
    }

    return (
      <defs>
        <clipPath id={this.id}>
          <Sector cx={cx}
            cy={cy}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            startAngle={startAngle}
            endAngle={this.state.endAngle}
          />
        </clipPath>
      </defs>
    );
  }

  getTextAnchor(x, cx) {
    if (x > cx) {
      return 'start';
    } else if (x < cx) {
      return 'end';
    }

    return 'middle';
  }

  renderLabels(sectors) {
    const { label } = this.props;
    const pieProps = ReactUtils.getPresentationAttributes(this.props);
    const customLabelProps = ReactUtils.getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);
    const offsetRadius = (customLabelProps && customLabelProps.offsetRadius) || 20;

    const labels = sectors.map((entry, i) => {
      const midAngle = -RADIAN * (entry.startAngle + entry.endAngle) / 2;
      const x = entry.cx + (entry.outerRadius + offsetRadius) * Math.cos(midAngle);
      const y = entry.cy + (entry.outerRadius + offsetRadius) * Math.sin(midAngle);
      const labelProps = {
        ...pieProps,
        ...entry,
        stroke: 'none',
        ...customLabelProps,
        index: i,
        textAnchor: this.getTextAnchor(x, entry.cx),
        x, y,
      };
      const lineProps = {
        ...pieProps,
        ...entry,
        fill: 'none',
        stroke: entry.fill,
        ...customLabelProps,
        points: [{
          x: entry.cx + entry.outerRadius * Math.cos(midAngle),
          y: entry.cy + entry.outerRadius * Math.sin(midAngle),
        }, {x, y}],
      };

      return isLabelElement ? React.cloneElement(label, {labelProps, key: `label-${i}`}) : (
        <g key={`label-${i}`}>
          <Curve {...lineProps} type="linear" className="recharts-cursor"/>
          <text {...labelProps}>{entry.value}</text>
        </g>
      );
    });

    return <Layer className="recharts-layer-line-labels">{labels}</Layer>;
  }

  renderSectors(sectors) {
    const { onMouseLeave, onClick } = this.props;

    return sectors.map((entry, i) => {
      return (
        <Sector
          {...entry}
          onMouseEnter={this.handleSectorEnter.bind(this, entry)}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          key={'sector-' + i}
        />
      );
    });
  }

  render() {
    const { data, className, label } = this.props;

    if (!this.id) {
      this.id = 'clipPath' + Date.now();
    }

    if (!data || !data.length) {
      return null;
    }

    const sectors = this.getSectors();

    return (
      <g className={'layer-pie ' + (className || '')}>
        {this.renderClipPath()}
        <g clipPath={`url(#${this.id})`}>
        {this.renderSectors(sectors)}
        </g>
        {label && this.renderLabels(sectors)}
      </g>
    );
  }
}

export default Pie;
