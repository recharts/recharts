import _isObject from 'lodash/isObject';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _last from 'lodash/last';
import _isArray from 'lodash/isArray';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import Layer from '../container/Layer';
import { getPresentationAttributes, findAllByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';

var propTypes = {
  id: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  valueAccessor: PropTypes.func,
  clockWise: PropTypes.bool,
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func])
};

var defaultProps = {
  valueAccessor: function valueAccessor(entry) {
    return _isArray(entry.value) ? _last(entry.value) : entry.value;
  }
};

function LabelList(props) {
  var data = props.data,
      valueAccessor = props.valueAccessor,
      dataKey = props.dataKey,
      clockWise = props.clockWise,
      id = props.id,
      others = _objectWithoutProperties(props, ['data', 'valueAccessor', 'dataKey', 'clockWise', 'id']);

  if (!data || !data.length) {
    return null;
  }

  return React.createElement(
    Layer,
    { className: 'recharts-label-list' },
    data.map(function (entry, index) {
      var value = _isNil(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
      var idProps = _isNil(id) ? {} : {
        id: id + '-' + index
      };

      return React.createElement(Label, _extends({}, getPresentationAttributes(entry), others, idProps, {
        index: index,
        value: value,
        viewBox: Label.parseViewBox(_isNil(clockWise) ? entry : _extends({}, entry, { clockWise: clockWise })),
        key: 'label-' + index
      }));
    })
  );
}

LabelList.propTypes = propTypes;
LabelList.displayName = 'LabelList';

var parseLabelList = function parseLabelList(label, data) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return React.createElement(LabelList, { key: 'labelList-implicit', data: data });
  }

  if (React.isValidElement(label) || _isFunction(label)) {
    return React.createElement(LabelList, { key: 'labelList-implicit', data: data, content: label });
  }

  if (_isObject(label)) {
    return React.createElement(LabelList, _extends({ data: data }, label, { key: 'labelList-implicit' }));
  }

  return null;
};

var renderCallByParent = function renderCallByParent(parentProps, data) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;


  var explicitChilren = findAllByType(children, LabelList).map(function (child, index) {
    return cloneElement(child, {
      data: data,
      key: 'labelList-' + index
    });
  });
  if (!ckeckPropsLabel) {
    return explicitChilren;
  }

  var implicitLabelList = parseLabelList(parentProps.label, data);

  return [implicitLabelList].concat(_toConsumableArray(explicitChilren));
};

LabelList.renderCallByParent = renderCallByParent;
LabelList.defaultProps = defaultProps;

export default LabelList;