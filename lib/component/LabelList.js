'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _last2 = require('lodash/last');

var _last3 = _interopRequireDefault(_last2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _ReactUtils = require('../util/ReactUtils');

var _ChartUtils = require('../util/ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  id: _propTypes2.default.string,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object),
  valueAccessor: _propTypes2.default.func,
  clockWise: _propTypes2.default.bool,
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.func])
};

var defaultProps = {
  valueAccessor: function valueAccessor(entry) {
    return (0, _isArray3.default)(entry.value) ? (0, _last3.default)(entry.value) : entry.value;
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

  return _react2.default.createElement(
    _Layer2.default,
    { className: 'recharts-label-list' },
    data.map(function (entry, index) {
      var value = (0, _isNil3.default)(dataKey) ? valueAccessor(entry, index) : (0, _ChartUtils.getValueByDataKey)(entry && entry.payload, dataKey);
      var idProps = (0, _isNil3.default)(id) ? {} : {
        id: id + '-' + index
      };

      return _react2.default.createElement(_Label2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(entry), others, idProps, {
        index: index,
        value: value,
        viewBox: _Label2.default.parseViewBox((0, _isNil3.default)(clockWise) ? entry : _extends({}, entry, { clockWise: clockWise })),
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
    return _react2.default.createElement(LabelList, { key: 'labelList-implicit', data: data });
  }

  if (_react2.default.isValidElement(label) || (0, _isFunction3.default)(label)) {
    return _react2.default.createElement(LabelList, { key: 'labelList-implicit', data: data, content: label });
  }

  if ((0, _isObject3.default)(label)) {
    return _react2.default.createElement(LabelList, _extends({ data: data }, label, { key: 'labelList-implicit' }));
  }

  return null;
};

var renderCallByParent = function renderCallByParent(parentProps, data) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;


  var explicitChilren = (0, _ReactUtils.findAllByType)(children, LabelList).map(function (child, index) {
    return (0, _react.cloneElement)(child, {
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

exports.default = LabelList;