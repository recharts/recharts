/**
 * @fileOverview Default Tooltip Content
 */
import _ from 'lodash';
import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import { isNumOrStr } from '../util/DataUtils';

function defaultFormatter<TValue extends ValueType>(value: TValue) {
  return _.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? (value.join(' ~ ') as TValue) : value;
}

export type TooltipType = 'none';
export type ValueType = number | string | Array<number | string>;
export type NameType = number | string;
export type Formatter<TValue extends ValueType, TName extends NameType> = (
  value: TValue,
  name: TName,
  item: Payload<TValue, TName>,
  index: number,
  payload: Array<Payload<TValue, TName>>,
) => [React.ReactNode, TName] | React.ReactNode;

export interface Payload<TValue extends ValueType, TName extends NameType> {
  type?: TooltipType;
  color?: string;
  formatter?: Formatter<TValue, TName>;
  name?: TName;
  value?: TValue;
  unit?: ReactNode;
  dataKey?: string | number;
  payload?: any;
  chartType?: string;
  stroke?: string;
  strokeDasharray?: string | number;
  strokeWidth?: number | string;
}

export interface Props<TValue extends ValueType, TName extends NameType> {
  separator?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  formatter?: Formatter<TValue, TName>;
  contentStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  labelFormatter?: (label: any, payload: Array<Payload<TValue, TName>>) => ReactNode;
  label?: any;
  payload?: Array<Payload<TValue, TName>>;
  itemSorter?: (item: Payload<TValue, TName>) => number | string;
}

export const DefaultTooltipContent = <TValue extends ValueType, TName extends NameType>(
  props: Props<TValue, TName>,
) => {
  const {
    separator = ' : ',
    contentStyle = {},
    itemStyle = {},
    labelStyle = {},
    payload,
    formatter,
    itemSorter,
    wrapperClassName,
    labelClassName,
    label,
    labelFormatter,
  } = props;

  const renderContent = () => {
    if (payload && payload.length) {
      const listStyle = { padding: 0, margin: 0 };

      const items = (itemSorter ? _.sortBy(payload, itemSorter) : payload).map((entry, i) => {
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
        const { value, name } = entry;
        let finalValue: React.ReactNode = value;
        let finalName: React.ReactNode = name;
        if (finalFormatter && finalValue != null && finalName != null) {
          const formatted = finalFormatter(value, name, entry, i, payload);
          if (Array.isArray(formatted)) {
            [finalValue, finalName] = formatted;
          } else {
            finalValue = formatted;
          }
        }

        return (
          // eslint-disable-next-line react/no-array-index-key
          <li className="recharts-tooltip-item" key={`tooltip-item-${i}`} style={finalItemStyle}>
            {isNumOrStr(finalName) ? <span className="recharts-tooltip-item-name">{finalName}</span> : null}
            {isNumOrStr(finalName) ? <span className="recharts-tooltip-item-separator">{separator}</span> : null}
            <span className="recharts-tooltip-item-value">{finalValue}</span>
            <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
          </li>
        );
      });

      return (
        <ul className="recharts-tooltip-item-list" style={listStyle}>
          {items}
        </ul>
      );
    }

    return null;
  };

  const finalStyle: React.CSSProperties = {
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
  const hasLabel = !_.isNil(label);
  let finalLabel = hasLabel ? label : '';
  const wrapperCN = classNames('recharts-default-tooltip', wrapperClassName);
  const labelCN = classNames('recharts-tooltip-label', labelClassName);

  if (hasLabel && labelFormatter && payload !== undefined && payload !== null) {
    finalLabel = labelFormatter(label, payload);
  }

  return (
    <div className={wrapperCN} style={finalStyle}>
      <p className={labelCN} style={finalLabelStyle}>
        {React.isValidElement(finalLabel) ? finalLabel : `${finalLabel}`}
      </p>
      {renderContent()}
    </div>
  );
};
