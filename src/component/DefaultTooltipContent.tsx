/**
 * @fileOverview Default Tooltip Content
 */

import * as React from 'react';
import { CSSProperties, HTMLAttributes, ReactNode, SVGProps } from 'react';
import sortBy from 'es-toolkit/compat/sortBy';
import { clsx } from 'clsx';
import { isNullish, isNumOrStr } from '../util/DataUtils';
import { DataKey } from '../util/types';

function defaultFormatter<TValue extends ValueType>(value: TValue) {
  return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? (value.join(' ~ ') as TValue) : value;
}

export type TooltipType = 'none';
export type ValueType = number | string | Array<number | string>;
export type NameType = number | string;
export type Formatter<TValue extends ValueType, TName extends NameType> = (
  value: TValue,
  name: TName,
  item: Payload<TValue, TName>,
  index: number,
  payload: ReadonlyArray<Payload<TValue, TName>>,
) => [React.ReactNode, TName] | React.ReactNode;

export interface Payload<TValue extends ValueType, TName extends NameType> extends Omit<SVGProps<SVGElement>, 'name'> {
  type?: TooltipType;
  color?: string;
  formatter?: Formatter<TValue, TName>;
  name?: TName;
  value?: TValue;
  unit?: ReactNode;
  fill?: string;
  dataKey?: DataKey<any>;
  nameKey?: DataKey<any>;
  payload?: any;
  chartType?: string;
  stroke?: string;
  strokeDasharray?: string | number;
  strokeWidth?: number | string;
  className?: string;
  hide?: boolean;
}

export interface Props<TValue extends ValueType, TName extends NameType> {
  separator?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  formatter?: Formatter<TValue, TName>;
  contentStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  labelFormatter?: (label: any, payload: ReadonlyArray<Payload<TValue, TName>>) => ReactNode;
  label?: any;
  payload?: ReadonlyArray<Payload<TValue, TName>>;
  itemSorter?: 'dataKey' | 'value' | 'name' | ((item: Payload<TValue, TName>) => number | string);
  accessibilityLayer: boolean;
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
    accessibilityLayer = false,
  } = props;

  const renderContent = () => {
    if (payload && payload.length) {
      const listStyle = { padding: 0, margin: 0 };

      const items = (itemSorter ? sortBy(payload, itemSorter) : payload).map(
        (entry: { type?: any; formatter?: any; color?: any; unit?: any; value?: any; name?: any }, i: any) => {
          if (entry.type === 'none') {
            return null;
          }

          const finalFormatter = entry.formatter || formatter || defaultFormatter;
          const { value, name } = entry;
          let finalValue: React.ReactNode = value;
          let finalName: React.ReactNode = name;
          if (finalFormatter) {
            const formatted = finalFormatter(value, name, entry, i, payload);
            if (Array.isArray(formatted)) {
              [finalValue, finalName] = formatted;
            } else if (formatted != null) {
              finalValue = formatted;
            } else {
              return null;
            }
          }

          const finalItemStyle = {
            display: 'block',
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || '#000',
            ...itemStyle,
          };

          return (
            // eslint-disable-next-line react/no-array-index-key
            <li className="recharts-tooltip-item" key={`tooltip-item-${i}`} style={finalItemStyle}>
              {isNumOrStr(finalName) ? <span className="recharts-tooltip-item-name">{finalName}</span> : null}
              {isNumOrStr(finalName) ? <span className="recharts-tooltip-item-separator">{separator}</span> : null}
              <span className="recharts-tooltip-item-value">{finalValue}</span>
              <span className="recharts-tooltip-item-unit">{entry.unit || ''}</span>
            </li>
          );
        },
      );

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
  const hasLabel = !isNullish(label);
  let finalLabel = hasLabel ? label : '';
  const wrapperCN = clsx('recharts-default-tooltip', wrapperClassName);
  const labelCN = clsx('recharts-tooltip-label', labelClassName);

  if (hasLabel && labelFormatter && payload !== undefined && payload !== null) {
    finalLabel = labelFormatter(label, payload);
  }

  const accessibilityAttributes = accessibilityLayer
    ? ({
        role: 'status',
        'aria-live': 'assertive',
      } as HTMLAttributes<HTMLDivElement>)
    : {};

  return (
    <div className={wrapperCN} style={finalStyle} {...accessibilityAttributes}>
      <p className={labelCN} style={finalLabelStyle}>
        {React.isValidElement(finalLabel) ? finalLabel : `${finalLabel}`}
      </p>
      {renderContent()}
    </div>
  );
};
