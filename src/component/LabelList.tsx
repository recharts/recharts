import React, { cloneElement, ReactElement, SVGProps } from 'react';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import last from 'lodash/last';
import isArray from 'lodash/isArray';
import { Label, ContentType, Props as LabelProps } from './Label';
import { Layer } from '../container/Layer';
import { findAllByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { filterProps, DataKey, ViewBox } from '../util/types';

interface Data {
  value?: number | string | Array<number | string>;
  payload?: any;
  parentViewBox?: ViewBox;
}

interface LabelListProps<T extends Data> {
  id?: string;
  data?: Array<T>;
  valueAccessor?: Function;
  clockWise?: boolean;
  dataKey?: DataKey<T>;
  content?: ContentType;
  textBreakAll?: boolean;
  position?: LabelProps['position'];
  angle?: number;
  formatter?: Function;
}

export type Props<T> = SVGProps<SVGElement> & LabelListProps<T>;

export type ImplicitLabelListType<T> =
  | boolean
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props<T>;

const defaultProps = {
  valueAccessor: (entry: Data) => (isArray(entry.value) ? last(entry.value) : entry.value),
};

export function LabelList<T extends Data>(props: Props<T>) {
  const { data, valueAccessor, dataKey, clockWise, id, textBreakAll, ...others } = props;

  if (!data || !data.length) {
    return null;
  }

  return (
    <Layer className="recharts-label-list">
      {data.map((entry, index) => {
        const value = isNil(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
        const idProps = isNil(id) ? {} : { id: `${id}-${index}` };

        return (
          <Label
            {...(filterProps(entry, true) as any)}
            {...others}
            {...idProps}
            parentViewBox={entry.parentViewBox}
            index={index}
            value={value}
            textBreakAll={textBreakAll}
            viewBox={Label.parseViewBox(isNil(clockWise) ? entry : { ...entry, clockWise })}
            key={`label-${index}`} // eslint-disable-line react/no-array-index-key
          />
        );
      })}
    </Layer>
  );
}

LabelList.displayName = 'LabelList';

function parseLabelList<T extends Data>(label: any, data: Array<T>) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <LabelList key="labelList-implicit" data={data} />;
  }

  if (React.isValidElement(label) || isFunction(label)) {
    return <LabelList key="labelList-implicit" data={data} content={label} />;
  }

  if (isObject(label)) {
    return <LabelList data={data} {...label} key="labelList-implicit" />;
  }

  return null;
}

function renderCallByParent<T extends Data>(parentProps: any, data: Array<T>, ckeckPropsLabel = true) {
  if (!parentProps || (!parentProps.children && ckeckPropsLabel && !parentProps.label)) {
    return null;
  }
  const { children } = parentProps;

  const explicitChilren = findAllByType(children, LabelList.displayName).map((child: any, index: number) =>
    cloneElement(child, {
      data,
      key: `labelList-${index}`,
    }),
  );
  if (!ckeckPropsLabel) {
    return explicitChilren;
  }

  const implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList, ...explicitChilren];
}

LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;
