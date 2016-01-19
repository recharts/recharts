/**
 * @fileOverview Render a group of bar
 */
import React, { PropTypes } from 'react';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';
import ReactUtils from '../util/ReactUtils';

@pureRender
class Bar extends React.Component {

  static displayName = 'Bar';

  static propTypes = {
    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
    barSize: PropTypes.number,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    formatter: PropTypes.func,

    customContent: PropTypes.element,
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.element,
    ]),

    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,

    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    // data of bar
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  constructor(props) {
    super(props);
  }

  renderRectangles() {
    const { data, className, customContent, ...others } = this.props;

    return data.map((entry, i) => {
      const { value, ...rest } = entry;

      return React.isValidElement(customContent) ? React.cloneElement(customContent, {
        ...others, ...rest,
        index: i,
        key: 'rectangle-' + i,
      }) : React.createElement(Rectangle, {
        ...others, ...rest,
        key: 'rectangle-' + i,
      });
    });
  }

  renderLabels() {
    const { data, label } = this.props;
    const barProps = ReactUtils.getPresentationAttributes(this.props);
    const customLabelProps = ReactUtils.getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const labels = data.map((entry, i) => {
      const x = entry.x + entry.width / 2;
      const labelProps = {
        textAnchor: 'middle',
        ...entry,
        ...barProps,
        ...customLabelProps,
        x,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return isLabelElement ? React.cloneElement(label, labelProps) : (
        <text {...labelProps}>{entry.value}</text>
      );
    });

    return <Layer className="recharts-layer-bar-labels">{labels}</Layer>;
  }

  render() {
    const { data, className, label } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Layer className={`recharts-layer-bar ${className || ''}`}>
        <Layer className="recharts-layer-rectangles">
          {this.renderRectangles()}
        </Layer>
        { label && (
          <Layer className="recharts-layer-rectangle-labels">
            {this.renderLabels()}
          </Layer>
        )}
      </Layer>
    );
  }
}

export default Bar;
