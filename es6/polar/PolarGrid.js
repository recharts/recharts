var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Polar Grid
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from '../util/PureRender';
import { polarToCartesian } from '../util/PolarUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

var PolarGrid = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(PolarGrid, _Component);

  function PolarGrid() {
    _classCallCheck(this, PolarGrid);

    return _possibleConstructorReturn(this, (PolarGrid.__proto__ || Object.getPrototypeOf(PolarGrid)).apply(this, arguments));
  }

  _createClass(PolarGrid, [{
    key: 'getPolygonPath',
    value: function getPolygonPath(radius) {
      var _props = this.props,
          cx = _props.cx,
          cy = _props.cy,
          polarAngles = _props.polarAngles;


      var path = '';

      polarAngles.forEach(function (angle, i) {
        var point = polarToCartesian(cx, cy, radius, angle);

        if (i) {
          path += 'L ' + point.x + ',' + point.y;
        } else {
          path += 'M ' + point.x + ',' + point.y;
        }
      });
      path += 'Z';

      return path;
    }
    /**
     * Draw axis of radial line
     * @return {[type]} The lines
     */

  }, {
    key: 'renderPolarAngles',
    value: function renderPolarAngles() {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          innerRadius = _props2.innerRadius,
          outerRadius = _props2.outerRadius,
          polarAngles = _props2.polarAngles;


      if (!polarAngles || !polarAngles.length) {
        return null;
      }
      var props = _extends({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props));

      return React.createElement(
        'g',
        { className: 'recharts-polar-grid-angle' },
        polarAngles.map(function (entry, i) {
          var start = polarToCartesian(cx, cy, innerRadius, entry);
          var end = polarToCartesian(cx, cy, outerRadius, entry);

          return React.createElement('line', _extends({}, props, {
            key: 'line-' + i,
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y
          }));
        })
      );
    }
    /**
     * Draw concentric circles
     * @param {Number} radius The radius of circle
     * @param {Number} index  The index of circle
     * @param {Object} extraProps Extra props
     * @return {ReactElement} circle
     */

  }, {
    key: 'renderConcentricCircle',
    value: function renderConcentricCircle(radius, index, extraProps) {
      var _props3 = this.props,
          cx = _props3.cx,
          cy = _props3.cy;

      var props = _extends({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props), {
        fill: 'none'
      }, extraProps);

      return React.createElement('circle', _extends({}, props, {
        className: 'recharts-polar-grid-concentric-circle',
        key: 'circle-' + index,
        cx: cx,
        cy: cy,
        r: radius
      }));
    }
    /**
     * Draw concentric polygons
     * @param {Number} radius     The radius of polygon
     * @param {Number} index      The index of polygon
     * @param {Object} extraProps Extra props
     * @return {ReactElement} polygon
     */

  }, {
    key: 'renderConcentricPolygon',
    value: function renderConcentricPolygon(radius, index, extraProps) {
      var props = _extends({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props), {
        fill: 'none'
      }, extraProps);

      return React.createElement('path', _extends({}, props, {
        className: 'recharts-polar-grid-concentric-polygon',
        key: 'path-' + index,
        d: this.getPolygonPath(radius)
      }));
    }

    /**
     * Draw concentric axis
     * @return {ReactElement} Concentric axis
     * @todo Optimize the name
     */

  }, {
    key: 'renderConcentricPath',
    value: function renderConcentricPath() {
      var _this2 = this;

      var _props4 = this.props,
          polarRadius = _props4.polarRadius,
          gridType = _props4.gridType;


      if (!polarRadius || !polarRadius.length) {
        return null;
      }

      return React.createElement(
        'g',
        { className: 'recharts-polar-grid-concentric' },
        polarRadius.map(function (entry, i) {
          return gridType === 'circle' ? _this2.renderConcentricCircle(entry, i) : _this2.renderConcentricPolygon(entry, i);
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var outerRadius = this.props.outerRadius;


      if (outerRadius <= 0) {
        return null;
      }

      return React.createElement(
        'g',
        { className: 'recharts-polar-grid' },
        this.renderPolarAngles(),
        this.renderConcentricPath()
      );
    }
  }]);

  return PolarGrid;
}(Component), _class2.displayName = 'PolarGrid', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,

  polarAngles: PropTypes.arrayOf(PropTypes.number),
  polarRadius: PropTypes.arrayOf(PropTypes.number),
  gridType: PropTypes.oneOf(['polygon', 'circle'])
}), _class2.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  gridType: 'polygon'
}, _temp)) || _class;

export default PolarGrid;