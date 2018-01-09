import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Label from './Label';
import Layer from '../container/Layer';
import { getPresentationAttributes, findAllByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';

const propTypes = {
  id: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  valueAccessor: PropTypes.func,
  clockWise: PropTypes.bool,
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
};

const defaultProps = {
  valueAccessor: entry => (_.isArray(entry.value) ? _.last(entry.value) : entry.value),
};

function LabelList(props) {
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
              {...getPresentationAttributes(entry)}
              {...others}
              {...idProps}
              index={index}
              value={value}
              viewBox={Label.parseViewBox(_.isNil(clockWise) ? entry : { ...entry, clockWise })}
              key={`label-${index}`}
            />
          );
        })
      }
    </Layer>
  );
}

LabelList.propTypes = propTypes;
LabelList.displayName = 'LabelList';

const parseLabelList = (label, data) => {
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

const renderCallByParent = (parentProps, data, ckeckPropsLabel = true) => {
  if (!parentProps || (!parentProps.children && (ckeckPropsLabel && !parentProps.label))) {
    return null;
  }
  const { children } = parentProps;

  const explicitChilren = findAllByType(children, LabelList).map((child, index) =>
    cloneElement(child, {
      data,
      key: `labelList-${index}`,
    })
  );
  if (!ckeckPropsLabel) { return explicitChilren; }

  const implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList, ...explicitChilren];
};

LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;

export default LabelList;
