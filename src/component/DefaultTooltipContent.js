/**
 * @fileOverview Default Tooltip Content
 */
import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    formatter: PropTypes.func,
    contentStyle: PropTypes.object,
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
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
  };

  renderContent() {
    const { payload, separator, formatter, itemStyle, itemSorter } = this.props;

    if (payload && payload.length) {
      const listStyle = { padding: 0, margin: 0 };

      const items = (itemSorter ? _.sortBy(payload, itemSorter) : payload)
        .map((entry, i) => {
          if (entry.type === 'none') {
            return null;
          }

          const finalItemStyle = {
            display: 'block',
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || '#000',
            ...itemStyle,
          };
          const finalFormatter = entry.formatter || formatter || defaultFormatter;
          let { name, value } = entry;
          if (finalFormatter) {
            const formatted = finalFormatter(value, name, entry, i);
            if (Array.isArray(formatted)) {
              [value, name] = formatted;
            } else {
              value = formatted;
            }
          }
          return (
            <li className="recharts-tooltip-item" key={`tooltip-item-${i}`} style={finalItemStyle}>
              {isNumOrStr(name) ? <span className="recharts-tooltip-item-name">{name}</span> : null}
              {isNumOrStr(name) ? <span className="recharts-tooltip-item-separator">{separator}</span> : null}
              <span className="recharts-tooltip-item-value">{value}</span>
              <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
            </li>
          );
        });

      return <ul className="recharts-tooltip-item-list" style={listStyle}>{items}</ul>;
    }

    return null;
  }

  render() {
    const {
      wrapperClassName,
      contentStyle,
      labelClassName,
      labelStyle,
      label,
      labelFormatter,
    } = this.props;
    const finalStyle = {
      margin: 0,
      padding: 10,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      whiteSpace: 'nowrap',
      ...contentStyle,
    };
    const finalLabelStyle = {
      margin: 0,
      ...labelStyle,
    };
    const hasLabel = isNumOrStr(label);
    let finalLabel = hasLabel ? label : '';
    const wrapperCN = classNames('recharts-default-tooltip', wrapperClassName);
    const labelCN = classNames('recharts-tooltip-label', labelClassName);

    if (hasLabel && labelFormatter) { finalLabel = labelFormatter(label); }

    return (
      <div className={wrapperCN} style={finalStyle}>
        <p className={labelCN} style={finalLabelStyle}>{finalLabel}</p>
        {this.renderContent()}
      </div>
    );
  }
}

export default DefaultTooltipContent;
