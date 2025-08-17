import * as React from 'react';
import { cloneElement, createContext, ReactElement, ReactNode, SVGProps, useContext } from 'react';
import last from 'es-toolkit/compat/last';

import { ContentType, isLabelContentAFunction, Label, LabelPosition, Props as LabelProps } from './Label';
import { Layer } from '../container/Layer';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { CartesianViewBoxRequired, DataKey, PolarViewBoxRequired } from '../util/types';
import { isNullish } from '../util/DataUtils';

/**
 * This is public API because we expose it as the valueAccessor parameter.
 *
 * The properties of "viewBox" are repeated as the root props of the entry object.
 * So it doesn't matter if you read entry.x or entry.viewBox.x, they are the same.
 *
 * It's not necessary to pass redundant data, but we keep it for backward compatibility.
 */
export interface CartesianLabelListEntry extends CartesianViewBoxRequired {
  /**
   * Value is what renders in the UI as the label content.
   */
  value: number | string | Array<number | string>;
  /**
   * Payload is the source data object for this entry. The shape of this depends on what the user has passed
   * as the data prop to the chart.
   */
  payload: unknown;
  /**
   * The bounding box of the graphical element that this label is attached to.
   * This will be an individual Bar for example.
   */
  viewBox: CartesianViewBoxRequired;
  parentViewBox?: CartesianViewBoxRequired;
}

export interface PolarLabelListEntry {
  value?: number | string | Array<number | string>;
  payload?: unknown;
  viewBox: PolarViewBoxRequired;
  parentViewBox?: PolarViewBoxRequired;
  clockWise?: boolean;
}

interface LabelListProps {
  id?: string;
  valueAccessor?: (entry: CartesianLabelListEntry | PolarLabelListEntry, index: number) => string | number;
  clockWise?: boolean;
  dataKey?: DataKey<Record<string, any>>;
  content?: ContentType;
  textBreakAll?: boolean;
  position?: LabelPosition;
  offset?: LabelProps['offset'];
  angle?: number;
  formatter?: (label: React.ReactNode) => React.ReactNode;
}

export type Props = SVGProps<SVGTextElement> & LabelListProps;

export type ImplicitLabelListType =
  | boolean
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props;

const defaultAccessor = (entry: CartesianLabelListEntry) =>
  Array.isArray(entry.value) ? last(entry.value) : entry.value;

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

function parseLabelList<T extends CartesianLabelListEntry>(label: unknown, data: ReadonlyArray<T>) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <LabelList key="labelList-implicit" data={data} />;
  }

  if (React.isValidElement(label) || isLabelContentAFunction(label)) {
    return <LabelList key="labelList-implicit" data={data} content={label} />;
  }

  if (typeof label === 'object') {
    return <LabelList data={data} {...label} key="labelList-implicit" />;
  }

  return null;
}

function renderCallByParent<T extends CartesianLabelListEntry>(
  parentProps: { children?: ReactNode; label?: unknown },
  data: ReadonlyArray<T>,
) {
  if (!parentProps || (!parentProps.children && !parentProps.label)) {
    return null;
  }
  const { children } = parentProps;

  const explicitChildren = findAllByType(children, LabelList).map((child, index) =>
    cloneElement(child, {
      data,
      // eslint-disable-next-line react/no-array-index-key
      key: `labelList-${index}`,
    }),
  );

  const implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList, ...explicitChildren];
}

LabelList.renderCallByParent = renderCallByParent;

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
    return <LabelList key="labelList-implicit" {...label} />;
  }

  return null;
}
