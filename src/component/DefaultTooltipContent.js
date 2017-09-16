/**
 * @fileOverview Default Tooltip Content
 */
import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';
import { isNumOrStr } from '../util/DataUtils';

const defaultFormatter = value => (
  (_.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1])) ?
    value.join(' ~ ') :
    value
);

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
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
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

      const items = payload.sort(itemSorter)
      .map((entry, i) => {
        const finalItemStyle = {
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#000',
          ...itemStyle,
        };
        const hasName = isNumOrStr(entry.name);
        const finalFormatter = entry.formatter || formatter || defaultFormatter;

        return (
          <li className="recharts-tooltip-item" key={`tooltip-item-${i}`} style={finalItemStyle}>
            {hasName ? <span className="recharts-tooltip-item-name">{entry.name}</span> : null}
            {
              hasName ?
                <span className="recharts-tooltip-item-separator">{separator}</span> :
                null
            }
            <span className="recharts-tooltip-item-value">
              {finalFormatter ? finalFormatter(entry.value, entry.name, entry, i) : entry.value}
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
    const hasLabel = isNumOrStr(label);
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
