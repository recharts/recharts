/**
 * @fileOverview Render sectors of a pie
 */
import React, { PropTypes } from 'react';
import Sector from '../shape/Sector';
import pureRender from 'pure-render-decorator';

@pureRender
class Pie extends React.Component {

  static displayName = 'Pie';

  static propTypes = {
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

    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
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
  };

  constructor(props) {
    super(props);
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
          fill: entry.fill,
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle: clockWise ? _startAngle : _endAngle,
          endAngle: clockWise ? _endAngle : _startAngle,
        };

        return prev;
      });
    }

    return sectors;
  }

  handleSectorEnter(data, e) {
    this.props.onMouseEnter(data, e);
  }

  renderSectors() {
    const sectors = this.getSectors();
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
    const { data, className } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <g className={'layer-pie ' + (className || '')}>
        {this.renderSectors()}
      </g>
    );
  }
}

export default Pie;
