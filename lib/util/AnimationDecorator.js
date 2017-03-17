'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (WrappedComponent) {
  var _class, _temp2;

  var AnimationDecorator = (_temp2 = _class = function (_Component) {
    _inherits(AnimationDecorator, _Component);

    function AnimationDecorator() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AnimationDecorator);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimationDecorator.__proto__ || Object.getPrototypeOf(AnimationDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        animationId: 0
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AnimationDecorator, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var animationId = this.state.animationId;


        if (this.props.data !== nextProps.data) {
          this.setState({
            animationId: animationId + 1
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { animationId: this.state.animationId }));
      }
    }]);

    return AnimationDecorator;
  }(_react.Component), _class.displayName = 'AnimationDecorator(' + (0, _ReactUtils.getDisplayName)(WrappedComponent) + ')', _class.propTypes = _extends({}, WrappedComponent.propTypes, {
    data: _react.PropTypes.array
  }), _class.WrappedComponent = WrappedComponent, _class.defaultProps = WrappedComponent.defaultProps, _temp2);


  return AnimationDecorator;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactUtils = require('./ReactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }