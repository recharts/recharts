import React, {PropTypes} from 'react';

const Tooltip = React.createClass({
  propTypes: {
    component: PropTypes.element,
    active: PropTypes.bool,
    position: PropTypes.string,
    separator: PropTypes.string,
    formatter: PropTypes.func,
    itemStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    style: PropTypes.object,
    mouseX: PropTypes.number,
    mouseY: PropTypes.number,
    coordinate: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    label: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.number,
      unit: PropTypes.any,
    })),
  },

  getDefaultProps() {
    return {
      active: false,
      position: 'left-bottom',
      coordinate: {x: 0, y: 0},
      separator: ' : ',
      style: {},
      itemStyle: {},
      labelStyle: {},
      mouseX: 0,
      mouseY: 0,
    };
  },

  getMargin() {
    const {position} = this.props;
    const ary = position.split('-');
    const orientH = ary[0];
    const result = {};

    if (orientH === 'right') {
      result.marginLeft = '-100%';
    }
    if (orientH === 'bottom') {
      result.marginTop = '-100%';
    }

    return result;
  },

  renderContent() {
    const {data, separator, formatter, itemStyle} = this.props;

    if (data && data.length) {
      const listStyle = {padding: 0, margin: 0};
      const items = data.map((entry, i) => {
        const finalItemStyle = {
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#000',
          ...itemStyle,
        };
        const finalFormatter = entry.formatter || formatter;

        return (
          <li className="tooltip-item" key={'tooltip-item-' + i} style={finalItemStyle}>
            <span className="name">{entry.key}</span>
            <span className="separator">{separator}</span>
            <span className="value">{finalFormatter ? finalFormatter(entry.value, entry.key) : entry.value}</span>
            <span className="unit">{entry.unit || ''}</span>
          </li>
        );
      });

      return <ul className="tooltip-item-list" style={listStyle}>{items}</ul>;
    }
  },

  render() {
    const {component, coordinate, active,
        label, style, labelStyle} = this.props;
    const wrapperStyle = {
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#ccc',
      backgroundColor: '#fff',
      display: active ? 'block' : 'none',
      position: 'absolute',
      top: coordinate.y + 20,
      left: coordinate.x + 10,
      ...style,
    };
    const finalLabelStyle = {
      margin: 0,
      ...labelStyle,
    };

    return (
      <div className="tooltip" style={wrapperStyle}>
        {
          component ? React.cloneElement(component, this.props) : (
            <div className="tooltip-default">
              <p className="tooltip-label" style={finalLabelStyle}>{label}</p>
              {this.renderContent()}
            </div>
          )
        }
      </div>
    );
  },
});

export default Tooltip;
