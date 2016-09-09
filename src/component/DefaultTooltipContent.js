/**
 * @fileOverview Default Tooltip Content
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import _ from 'lodash';

@pureRender
class DefaultTooltipContent extends Component {

  static displayName = 'DefaultTooltipContent';

  static propTypes = {
    separator: PropTypes.string,
    formatter: PropTypes.func,
    wrapperStyle: PropTypes.object,
    itemStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    labelFormatter: PropTypes.func,
    label: PropTypes.any,
    payload: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      unit: PropTypes.any,
    })),
    itemSorter: PropTypes.func,
  };

  static defaultProps = {
    separator: ' : ',
    itemStyle: {},
    labelStyle: {},
  };

  renderContent() {
    const { payload, separator, formatter, itemStyle, itemSorter } = this.props;

    if (payload && payload.length) {
      const listStyle = { padding: 0, margin: 0 };

      const items = payload.filter(entry => (_.isNumber(entry.value) || _.isString(entry.value)))
      .sort(itemSorter)
      .map((entry, i) => {
        const finalItemStyle = {
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#000',
          ...itemStyle,
        };
        const finalFormatter = entry.formatter || formatter;

        return (
          <li className="recharts-tooltip-item" key={`tooltip-item-${i}`} style={finalItemStyle}>
            <span className="recharts-tooltip-item-name">{entry.name}</span>
            <span className="recharts-tooltip-item-separator">{separator}</span>
            <span className="recharts-tooltip-item-value">
              {finalFormatter ? finalFormatter(entry.value, entry.name, entry) : entry.value}
            </span>
            <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
          </li>
        );
      });

      return <ul className="recharts-tooltip-item-list" style={listStyle}>{items}</ul>;
    }

    return null;
  }

  render() {
    const { labelStyle, label, labelFormatter, wrapperStyle } = this.props;
    const finalStyle = {
      margin: 0,
      padding: 10,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      whiteSpace: 'nowrap',
      ...wrapperStyle,
    };
    const finalLabelStyle = {
      margin: 0,
      ...labelStyle,
    };
    const hasLabel = _.isNumber(label) || _.isString(label);
    let finalLabel = hasLabel ? label : '';

    if (hasLabel && labelFormatter) { finalLabel = labelFormatter(label); }

    return (
      <div className="recharts-default-tooltip" style={finalStyle}>
        <p className="recharts-tooltip-label" style={finalLabelStyle}>{finalLabel}</p>
        {this.renderContent()}
      </div>
    );
  }
}

export default DefaultTooltipContent;
