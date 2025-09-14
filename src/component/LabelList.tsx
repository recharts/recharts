import * as React from 'react';
import { createContext, PropsWithoutRef, SVGProps, useContext } from 'react';
import last from 'es-toolkit/compat/last';

import { LabelContentType, isLabelContentAFunction, Label, LabelPosition } from './Label';
import { Layer } from '../container/Layer';
import { filterProps } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { CartesianViewBoxRequired, DataKey, PolarViewBoxRequired } from '../util/types';
import { isNullish } from '../util/DataUtils';
import { LabelProps } from '../index';

interface BaseLabelListEntry {
  /**
   * Value is what renders in the UI as the label content.
   */
  value: number | string | Array<number | string>;
  /**
   * Payload is the source data object for this entry. The shape of this depends on what the user has passed
   * as the data prop to the chart.
   */
  payload: unknown;
  fill: string | undefined;
}

/**
 * This is public API because we expose it as the valueAccessor parameter.
 *
 * The properties of "viewBox" are repeated as the root props of the entry object.
 * So it doesn't matter if you read entry.x or entry.viewBox.x, they are the same.
 *
 * It's not necessary to pass redundant data, but we keep it for backward compatibility.
 */
export interface CartesianLabelListEntry extends BaseLabelListEntry, CartesianViewBoxRequired {
  /**
   * The bounding box of the graphical element that this label is attached to.
   * This will be an individual Bar for example.
   */
  viewBox: CartesianViewBoxRequired;
  parentViewBox?: CartesianViewBoxRequired;
}

export interface PolarLabelListEntry extends BaseLabelListEntry {
  viewBox: PolarViewBoxRequired;
  parentViewBox?: PolarViewBoxRequired;
  clockWise?: boolean;
}

interface LabelListProps {
  id?: string;
  valueAccessor?: (entry: CartesianLabelListEntry | PolarLabelListEntry, index: number) => string | number | undefined;
  clockWise?: boolean;
  dataKey?: DataKey<Record<string, any>>;
  content?: LabelContentType;
  textBreakAll?: boolean;
  position?: LabelPosition;
  offset?: LabelProps['offset'];
  angle?: number;
  formatter?: (label: React.ReactNode) => React.ReactNode;
}

/**
 * LabelList props do not allow refs because the same props are reused in multiple elements so we don't have a good single place to ref to.
 */
type SvgTextProps = PropsWithoutRef<SVGProps<SVGTextElement>>;
export type Props = SvgTextProps & LabelListProps;

/**
 * This is the type accepted for the `label` prop on various graphical items.
 * It accepts:
 *
 * boolean:
 *    true = labels show,
 *    false = labels don't show
 * React element:
 *    will be cloned with extra props
 * function:
 *    is used as <Label content={function} />, so this will be called once for each individual label (so typically once for each data point)
 * object:
 *    the props to be passed to a LabelList component
 */
export type ImplicitLabelListType = boolean | LabelContentType | Props;

const defaultAccessor = (entry: BaseLabelListEntry) => (Array.isArray(entry.value) ? last(entry.value) : entry.value);

const CartesianLabelListContext = createContext<ReadonlyArray<CartesianLabelListEntry> | undefined>(undefined);

export const CartesianLabelListContextProvider = CartesianLabelListContext.Provider;

const PolarLabelListContext = createContext<ReadonlyArray<PolarLabelListEntry> | undefined>(undefined);

export const PolarLabelListContextProvider = PolarLabelListContext.Provider;

function useCartesianLabelListContext(): ReadonlyArray<CartesianLabelListEntry> | undefined {
  return useContext(CartesianLabelListContext);
}

function usePolarLabelListContext(): ReadonlyArray<PolarLabelListEntry> | undefined {
  return useContext(PolarLabelListContext);
}

export function LabelList({ valueAccessor = defaultAccessor, ...restProps }: Props) {
  const { dataKey, clockWise, id, textBreakAll, ...others } = restProps;
  const cartesianData = useCartesianLabelListContext();
  const polarData = usePolarLabelListContext();
  const data = cartesianData || polarData;

  if (!data || !data.length) {
    return null;
  }

  return (
    <Layer className="recharts-label-list">
      {data.map((entry, index) => {
        const value = isNullish(dataKey)
          ? valueAccessor(entry, index)
          : (getValueByDataKey(entry && entry.payload, dataKey) as string | number);

        const idProps = isNullish(id) ? {} : { id: `${id}-${index}` };

        return (
          <Label
            {...filterProps(entry, true)}
            {...others}
            {...idProps}
            /*
             * Prefer to use the explicit fill from LabelList props.
             * Only in an absence of that, fall back to the fill of the entry.
             * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
             * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
             */
            fill={restProps.fill ?? entry.fill}
            parentViewBox={entry.parentViewBox}
            value={value}
            textBreakAll={textBreakAll}
            viewBox={entry.viewBox}
            key={`label-${index}`} // eslint-disable-line react/no-array-index-key
            index={index}
          />
        );
      })}
    </Layer>
  );
}

LabelList.displayName = 'LabelList';

export function LabelListFromLabelProp({ label }: { label?: ImplicitLabelListType }) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <LabelList key="labelList-implicit" />;
  }

  if (React.isValidElement(label) || isLabelContentAFunction(label)) {
    return <LabelList key="labelList-implicit" content={label} />;
  }

  if (typeof label === 'object') {
    return <LabelList key="labelList-implicit" {...label} type={String(label.type)} />;
  }

  return null;
}
