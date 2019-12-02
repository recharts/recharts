import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Label, { ContentType } from './Label';
import Layer from '../container/Layer';
import { findAllByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { filterProps, DataKey } from '../util/types';

const propTypes = {
  id: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  valueAccessor: PropTypes.func,
  clockWise: PropTypes.bool,
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
};

interface Data {
  value?: number | string | Array<number | string>;
  payload?: any
}

interface Props<T extends Data> {
  id?: string;
  data: Array<T>;
  valueAccessor?: Function;
  clockWise?: boolean;
  dataKey?: DataKey<T>;
  content?: ContentType;
}

const defaultProps = {
  valueAccessor: (entry: Data) => (_.isArray(entry.value) ? _.last(entry.value) : entry.value),
};

function LabelList<T extends Data>(props: Props<T>) {
  const { data, valueAccessor, dataKey, clockWise, id, ...others } = props;

  if (!data || !data.length) { return null; }

  return (
    <Layer className="recharts-label-list">
      {
        data.map((entry, index) => {
          const value = _.isNil(dataKey) ?
            valueAccessor(entry, index) :
            getValueByDataKey(entry && entry.payload, dataKey);
          const idProps = _.isNil(id) ? {} : {
            id: `${id}-${index}`,
          };

          return (
            <Label
              {...filterProps(entry, true) as any}
              {...others}
              {...idProps}
              index={index}
              value={value}
              viewBox={Label.parseViewBox(_.isNil(clockWise) ? entry : { ...entry, clockWise })}
              key={`label-${index}`} // eslint-disable-line react/no-array-index-key
            />
          );
        })
      }
    </Layer>
  );
}

LabelList.propTypes = propTypes;
LabelList.displayName = 'LabelList';

function parseLabelList<T extends Data>(label: any, data: Array<T>) {
  if (!label) { return null; }

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
};

function renderCallByParent<T extends Data>(parentProps: any, data: Array<T>, ckeckPropsLabel = true) {
  if (!parentProps || (!parentProps.children && (ckeckPropsLabel && !parentProps.label))) {
    return null;
  }
  const { children } = parentProps;

  const explicitChilren =
    findAllByType(children, LabelList.displayName).map((child: any, index: number) => cloneElement(child, {
      data,
      key: `labelList-${index}`,
    }));
  if (!ckeckPropsLabel) { return explicitChilren; }

  const implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList, ...explicitChilren];
};

LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;

export default LabelList;
