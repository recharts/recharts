/**
 * @fileOverview Render a group of radial bar
 */
import React, { PropTypes } from 'react';
import Sector from '../shape/Sector';
import Layer from '../container/Layer';
import LodashUtils from '../util/LodashUtils';
import DOMUtils from '../util/DOMUtils';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import pureRender from 'pure-render-decorator';

const RADIAN = Math.PI / 180;

@pureRender
class RadialBar extends React.Component {

  static displayName = 'RadialBar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    shape: PropTypes.object,

    cx: PropTypes.number,
    cy: PropTypes.number,
    clockWise: PropTypes.bool,
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
    legendType: PropTypes.string,

    label: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.element, PropTypes.object,
    ]),

    background: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object, PropTypes.element,
    ]),

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    startAngle: 180,
    endAngle: 0,
    maxAngle: 135,
    minAngle: 0,
    clockWise: true,
    stroke: '#fff',
    fill: '#808080',
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  getSectors() {
    const { cx, cy, startAngle,
           data, minAngle, maxAngle, clockWise } = this.props;
    const maxValue = Math.max.apply(null, data.map(entry => entry.value));
    const absMinAngle = Math.abs(minAngle);
    const gapAngle = Math.abs(maxAngle) - absMinAngle;

    const sectors = data.map((entry) => {
      const _endAngle = (maxValue <= 0 || entry.value <= 0)
                        ? startAngle
                        : startAngle + (clockWise ? -1 : 1) * (absMinAngle + gapAngle * entry.value / maxValue);

      return {
        ...entry,
        cx, cy,
        clockWise,
        startAngle,
        endAngle: _endAngle,
      };
    });

    return sectors;
  }

  getLabelPathArc(data, labelContent, style) {
    const { label } = this.props;
    const labelProps = React.isValidElement(label) ? label.props : label;
    const offsetRadius = labelProps.offsetRadius || 2;
    const orient = labelProps.orient || 'inner';
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = data;
    const radius = clockWise ? innerRadius + offsetRadius : Math.max(outerRadius - offsetRadius, 0);

    if (radius <= 0) {return '';}

    const labelSize = DOMUtils.getStringSize(labelContent, style);
    const deltaAngle = labelSize.width / (radius * RADIAN);
    let _startAngle;
    let _endAngle;

    if (clockWise) {
      _startAngle = orient === 'inner' ? Math.min(endAngle + deltaAngle, startAngle) : endAngle;
      _endAngle = _startAngle - deltaAngle;
    } else {
      _startAngle = orient === 'inner' ? Math.max(endAngle - deltaAngle, startAngle) : endAngle;
      _endAngle = _startAngle + deltaAngle;
    }

    return `M${cx + radius * Math.cos(-RADIAN * _startAngle)}
            ${cy + radius * Math.sin(-RADIAN * _startAngle)}
            A${radius},${radius},0,
            ${deltaAngle >= 180 ? 1 : 0},
            ${clockWise ? 1 : 0},
            ${cx + radius * Math.cos(-RADIAN * _endAngle)},
            ${cy + radius * Math.sin(-RADIAN * _endAngle)}`;
  }


  renderSectors(sectors) {
    const { className, shape, data } = this.props;
    const baseProps = ReactUtils.getPresentationAttributes(this.props);
    const isShapeElement = React.isValidElement(shape);

    return sectors.map((entry, i) => {
      const { value, ...rest } = entry;
      const props = {
        ...baseProps,
        ...rest,
        key: `sector-${i}`,
        className: 'recharts-radial-bar-sector',
      }

      return isShapeElement ?
             React.cloneElement(shape, props) :
             React.createElement(Sector, props);
    });
  }

  renderBackground(sectors) {
    const { startAngle, endAngle, clockWise, background } = this.props;
    const isBackgroundElement = React.isValidElement(background);
    const backgroundProps = ReactUtils.getPresentationAttributes(background);

    return sectors.map((entry, i) => {
      const { value, ...rest } = entry;
      const props = {
        ...rest,
        fill: '#eee',
        ...backgroundProps,
        clockWise,
        startAngle,
        endAngle,
        index: i,
        key: `sector-${i}`,
        className: 'recharts-radial-bar-background-sector',
      };

      return isBackgroundElement ?
            React.cloneElement(background, props) :
            React.createElement(Sector, props);
    });
  }

  renderLabels(sectors) {
    const { label } = this.props;
    const isElement = React.isValidElement(label);
    const formatter = isElement ? label.props.formatter : label.formatter;
    const hasFormatter = LodashUtils.isFunction(formatter);

    return sectors.map((entry, i) => {
      const content = hasFormatter ? formatter(entry.value) : entry.value;
      const id = LodashUtils.getUniqueId('recharts-defs-');
      const style = ReactUtils.getPresentationAttributes(label) || { fontSize: 10, fill: '#000' };
      const path = this.getLabelPathArc(entry, content, style);

      return (
        <text {...style} key={'label-' + i} className="recharts-radial-bar-label">
          <defs><path id={id} d={path} /></defs>
          <textPath xlinkHref={'#' + id}>{content}</textPath>
        </text>
      );
    });
  }

  render() {
    const { data, className, background, label } = this.props;

    if (!data || !data.length) {
      return null;
    }
    const sectors = this.getSectors();

    return (
      <Layer className={'recharts-radial-bar ' + (className || '')}>
        {background && (
          <Layer className="recharts-radial-bar-background">
            {this.renderBackground(sectors)}
          </Layer>
        )}

        <Layer className="recharts-radial-bar-sectors">
          {this.renderSectors(sectors)}
        </Layer>

        {label && (
          <Layer className="recharts-radial-bar-labels">
            {this.renderLabels(sectors)}
          </Layer>
        )}
      </Layer>
    );
  }
}

export default RadialBar;
