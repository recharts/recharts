import * as React from 'react';
import { cloneElement, ReactElement, ReactNode, SVGProps } from 'react';
import last from 'es-toolkit/compat/last';

import { Label, ContentType, Props as LabelProps, LabelPosition, isLabelContentAFunction } from './Label';
import { Layer } from '../container/Layer';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { DataKey, ViewBox } from '../util/types';
import { isNullish } from '../util/DataUtils';

interface Data {
  value?: number | string | Array<number | string>;
  payload?: any;
  parentViewBox?: ViewBox;
}

interface LabelListProps<T extends Data> {
  id?: string;
  // why is data a prop here, shouldn't this only come from chart data?
  data?: ReadonlyArray<T>;
  valueAccessor?: (entry: T, index: number) => string | number;
  clockWise?: boolean;
  dataKey?: DataKey<Record<string, any>>;
  content?: ContentType;
  textBreakAll?: boolean;
  position?: LabelPosition;
  offset?: LabelProps['offset'];
  angle?: number;
  formatter?: (label: React.ReactNode) => React.ReactNode;
}

export type Props<T extends Data> = SVGProps<SVGTextElement> & LabelListProps<T>;

export type ImplicitLabelListType<T extends Data> =
  | boolean
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props<T>;

const defaultAccessor = (entry: Data) => (Array.isArray(entry.value) ? last(entry.value) : entry.value);

export function LabelList<T extends Data>({ valueAccessor = defaultAccessor, ...restProps }: Props<T>) {
  const { data, dataKey, clockWise, id, textBreakAll, ...others } = restProps;

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
            viewBox={Label.parseViewBox(isNullish(clockWise) ? entry : { ...entry, clockWise })}
            key={`label-${index}`} // eslint-disable-line react/no-array-index-key
            index={index}
          />
        );
      })}
    </Layer>
  );
}

LabelList.displayName = 'LabelList';

function parseLabelList<T extends Data>(label: unknown, data: ReadonlyArray<T>) {
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

function renderCallByParent<T extends Data>(
  parentProps: { children?: ReactNode; label?: unknown },
  data: ReadonlyArray<T>,
  checkPropsLabel = true,
) {
  if (!parentProps || (!parentProps.children && checkPropsLabel && !parentProps.label)) {
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
  if (!checkPropsLabel) {
    return explicitChildren;
  }

  const implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList, ...explicitChildren];
}

LabelList.renderCallByParent = renderCallByParent;
