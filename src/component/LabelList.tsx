import React, { cloneElement, ReactElement, ReactNode, SVGProps } from 'react';
import _ from 'lodash';
import { Label, ContentType, Props as LabelProps } from './Label';
import { Layer } from '../container/Layer';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { DataKey, ViewBox } from '../util/types';

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

export type Props<T extends Data> = SVGProps<SVGElement> & LabelListProps<T>;

export type ImplicitLabelListType<T extends Data> =
  | boolean
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props<T>;

const defaultAccessor = (entry: Data) => (_.isArray(entry.value) ? _.last(entry.value) : entry.value);

export function LabelList<T extends Data>({ valueAccessor = defaultAccessor, ...restProps }: Props<T>) {
  const { data, dataKey, clockWise, id, textBreakAll, ...others } = restProps;

  if (!data || !data.length) {
    return null;
  }

  return (
    <Layer className="recharts-label-list">
      {data.map((entry, index) => {
        const value = _.isNil(dataKey)
          ? valueAccessor(entry, index)
          : getValueByDataKey(entry && entry.payload, dataKey);
        const idProps = _.isNil(id) ? {} : { id: `${id}-${index}` };

        return (
          <Label
            {...(filterProps(entry, true) as any)}
            {...others}
            {...idProps}
            parentViewBox={entry.parentViewBox}
            index={index}
            value={value}
            textBreakAll={textBreakAll}
            viewBox={Label.parseViewBox(_.isNil(clockWise) ? entry : { ...entry, clockWise })}
            key={`label-${index}`} // eslint-disable-line react/no-array-index-key
          />
        );
      })}
    </Layer>
  );
}

LabelList.displayName = 'LabelList';

function parseLabelList<T extends Data>(label: unknown, data: Array<T>) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return <LabelList key="labelList-implicit" data={data} />;
  }

  if (React.isValidElement(label) || _.isFunction(label)) {
    return <LabelList key="labelList-implicit" data={data} content={label} />;
  }

  if (_.isObject(label)) {
    return <LabelList data={data} {...label} key="labelList-implicit" />;
  }

  return null;
}

function renderCallByParent<T extends Data>(
  parentProps: { children?: ReactNode; label?: unknown },
  data: Array<T>,
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
