import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reduceCSSCalc from 'reduce-css-calc';
import classNames from 'classnames';

import { isNumber, isNumOrStr } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, isSsr } from '../util/ReactUtils';
import { getStringSize } from '../util/DOMUtils';

var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

var calculateWordWidths = function calculateWordWidths(props) {
  try {
    var words = !_isNil(props.children) ? props.children.toString().split(BREAKING_SPACES) : [];
    var wordsWithComputedWidth = words.map(function (word) {
      return { word: word, width: getStringSize(word, props.style).width };
    });

    var spaceWidth = getStringSize('\xA0', props.style).width;

    return { wordsWithComputedWidth: wordsWithComputedWidth, spaceWidth: spaceWidth };
  } catch (e) {
    return null;
  }
};

var Text = (_temp2 = _class = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wordsByLines: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Text, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateWordsByLines(this.props, true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var needCalculate = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
      this.updateWordsByLines(nextProps, needCalculate);
    }
  }, {
    key: 'updateWordsByLines',
    value: function updateWordsByLines(props, needCalculate) {
      // Only perform calculations if using features that require them (multiline, scaleToFit)
      if ((props.width || props.scaleToFit) && !isSsr()) {
        if (needCalculate) {
          var wordWidths = calculateWordWidths(props);

          if (wordWidths) {
            var wordsWithComputedWidth = wordWidths.wordsWithComputedWidth,
                spaceWidth = wordWidths.spaceWidth;


            this.wordsWithComputedWidth = wordsWithComputedWidth;
            this.spaceWidth = spaceWidth;
          } else {
            this.updateWordsWithoutCalculate(props);

            return;
          }
        }

        var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
        this.setState({ wordsByLines: wordsByLines });
      } else {
        this.updateWordsWithoutCalculate(props);
      }
    }
  }, {
    key: 'updateWordsWithoutCalculate',
    value: function updateWordsWithoutCalculate(props) {
      var words = !_isNil(props.children) ? props.children.toString().split(BREAKING_SPACES) : [];
      this.setState({ wordsByLines: [{ words: words }] });
    }
  }, {
    key: 'calculateWordsByLines',
    value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
      var scaleToFit = this.props.scaleToFit;

      return wordsWithComputedWidth.reduce(function (result, _ref2) {
        var word = _ref2.word,
            width = _ref2.width;

        var currentLine = result[result.length - 1];

        if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
          // Word can be added to an existing line
          currentLine.words.push(word);
          currentLine.width += width + spaceWidth;
        } else {
          // Add first word to line or word is too long to scaleToFit on existing line
          var newLine = { words: [word], width: width };
          result.push(newLine);
        }

        return result;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dx = _props.dx,
          dy = _props.dy,
          textAnchor = _props.textAnchor,
          verticalAnchor = _props.verticalAnchor,
          scaleToFit = _props.scaleToFit,
          angle = _props.angle,
          lineHeight = _props.lineHeight,
          capHeight = _props.capHeight,
          className = _props.className,
          textProps = _objectWithoutProperties(_props, ['dx', 'dy', 'textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'className']);

      var wordsByLines = this.state.wordsByLines;


      if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) {
        return null;
      }
      var x = textProps.x + (isNumber(dx) ? dx : 0);
      var y = textProps.y + (isNumber(dy) ? dy : 0);

      var startDy = void 0;
      switch (verticalAnchor) {
        case 'start':
          startDy = reduceCSSCalc('calc(' + capHeight + ')');
          break;
        case 'middle':
          startDy = reduceCSSCalc('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
          break;
        default:
          startDy = reduceCSSCalc('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
          break;
      }

      var transforms = [];
      if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        transforms.push('scale(' + this.props.width / lineWidth + ')');
      }
      if (angle) {
        transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
      }
      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return React.createElement(
        'text',
        _extends({}, getPresentationAttributes(textProps), {
          x: x,
          y: y,
          className: classNames('recharts-text', className),
          textAnchor: textAnchor
        }),
        wordsByLines.map(function (line, index) {
          return React.createElement(
            'tspan',
            { x: x, dy: index === 0 ? startDy : lineHeight, key: index },
            line.words.join(' ')
          );
        })
      );
    }
  }]);

  return Text;
}(Component), _class.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  scaleToFit: PropTypes.bool,
  angle: PropTypes.number,
  textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  verticalAnchor: PropTypes.oneOf(['start', 'middle', 'end']),
  style: PropTypes.object
}), _class.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em', // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end' // Maintain compat with existing charts / default SVG behavior
}, _temp2);


export default Text;