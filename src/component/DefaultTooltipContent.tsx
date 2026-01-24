/**
 * @fileOverview Default Tooltip Content
 */

import * as React from 'react';
import { CSSProperties, HTMLAttributes, ReactNode, SVGProps } from 'react';
import sortBy from 'es-toolkit/compat/sortBy';
import { clsx } from 'clsx';
import { isNullish, isNumOrStr } from '../util/DataUtils';
import { DataKey } from '../util/types';
import { TooltipPayload, TooltipPayloadEntry } from '../state/tooltipSlice';

function defaultFormatter(value: ValueType | undefined): React.ReactNode {
  return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(' ~ ') : value;
}

export type TooltipType = 'none';
export type ValueType = number | string | ReadonlyArray<number | string>;
export type NameType = number | string;
export type Formatter<TValue extends ValueType = ValueType, TName extends NameType = NameType> = (
  value: TValue | undefined,
  name: TName | undefined,
  item: Payload<TValue, TName>,
  index: number,
  payload: ReadonlyArray<Payload<TValue, TName>>,
) => [React.ReactNode, TName] | React.ReactNode;

export interface Payload<TValue extends ValueType = ValueType, TName extends NameType = NameType> extends Omit<
  SVGProps<SVGElement>,
  'name'
> {
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
  /**
   * The id of the graphical item that the data point belongs to
   */
  graphicalItemId: string;
}

/**
 * @inline
 */
export type TooltipItemSorter<TValue extends ValueType = ValueType, TName extends NameType = NameType> =
  | 'dataKey'
  | 'value'
  | 'name'
  | ((item: Payload<TValue, TName>) => number | string | undefined);

export interface Props<TValue extends ValueType = ValueType, TName extends NameType = NameType> {
  separator?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  formatter?: Formatter<TValue, TName>;
  contentStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  labelFormatter?: (label: ReactNode, payload: ReadonlyArray<Payload<TValue, TName>>) => ReactNode;
  label?: ReactNode;
  payload?: ReadonlyArray<Payload<TValue, TName>>;
  itemSorter?: TooltipItemSorter<TValue, TName>;
  accessibilityLayer?: boolean;
}

export const defaultDefaultTooltipContentProps = {
  separator: ' : ',
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    whiteSpace: 'nowrap',
  },
  itemStyle: {
    display: 'block',
    paddingTop: 4,
    paddingBottom: 4,
    color: '#000',
  },
  labelStyle: {},
  accessibilityLayer: false,
} as const satisfies Partial<Props<any, any>>;

function lodashLikeSortBy<T>(array: ReadonlyArray<T>, itemSorter: TooltipItemSorter | undefined): ReadonlyArray<T> {
  if (itemSorter == null) {
    return array;
  }
  // @ts-expect-error sortBy types somehow are returning a number type.
  return sortBy(array, itemSorter);
}

/**
 * This component is by default rendered inside the {@link Tooltip} component. You would not use it directly.
 *
 * You can use this component to customize the content of the tooltip,
 * or you can provide your own completely independent content.
 */
export const DefaultTooltipContent = (props: Props) => {
  const {
    separator = defaultDefaultTooltipContentProps.separator,
    contentStyle,
    itemStyle,
    labelStyle = defaultDefaultTooltipContentProps.labelStyle,
    payload,
    formatter,
    itemSorter,
    wrapperClassName,
    labelClassName,
    label,
    labelFormatter,
    accessibilityLayer = defaultDefaultTooltipContentProps.accessibilityLayer,
  } = props;

  const renderContent = () => {
    if (payload && payload.length) {
      const listStyle = { padding: 0, margin: 0 };

      const sortedPayload: TooltipPayload = lodashLikeSortBy(payload, itemSorter);
      const items = sortedPayload.map((entry: TooltipPayloadEntry, i: number) => {
        if (entry.type === 'none') {
          return null;
        }

        const finalFormatter: Formatter = entry.formatter || formatter || defaultFormatter;
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
          ...defaultDefaultTooltipContentProps.itemStyle,
          color: entry.color || defaultDefaultTooltipContentProps.itemStyle.color,
          ...itemStyle,
        };

        return (
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
    ...defaultDefaultTooltipContentProps.contentStyle,
    ...contentStyle,
  };
  const finalLabelStyle = {
    margin: 0,
    ...labelStyle,
  };
  const hasLabel = !isNullish(label);
  let finalLabel: ReactNode = hasLabel ? label : '';
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
