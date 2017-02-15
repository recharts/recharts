import React, { PropTypes, cloneElement } from 'react';
import _ from 'lodash';
import Label from './Label';
import Layer from '../container/Layer';
import { getPresentationAttributes, findAllByType } from '../util/ReactUtils';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueAccessor: PropTypes.func,
  clockWise: PropTypes.bool,
};

const defaultProps = {
  valueAccessor: entry => (_.isArray(entry.value) ? _.last(entry.value) : entry.value),
};

function LabelList(props) {
  const { data, valueAccessor, clockWise, ...others } = props;

  if (!data || !data.length) { return null; }

  return (
    <Layer>
      {
        data.map((entry, index) => (
          <Label
            {...getPresentationAttributes(entry)}
            {...others}
            value={valueAccessor(entry, index)}
            viewBox={Label.parseViewBox(_.isNil(clockWise) ? entry : { ...entry, clockWise })}
            key={`label-${index}`}
          />
        ))
      }
    </Layer>
  );
}

LabelList.propTypes = propTypes;
LabelList.displayName = 'LabelList';


const renderCallByParent = (parentProps, data) => {
  if (!parentProps || !parentProps.children) { return null; }
  const { children } = parentProps;

  return findAllByType(children, LabelList).map((child, index) =>
    cloneElement(child, {
      data,
      key: `labelList-${index}`,
    })
  );
};
LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;

export default LabelList;
