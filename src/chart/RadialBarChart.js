/**
 * @fileOverview Radar Bar Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import D3Scale from 'd3-scale';
import Surface from '../container/Surface';
import RadialBar from '../polar/RadialBar';
import LodashUtils from '../util/LodashUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import ReactUtils from '../util/ReactUtils';
import { getMaxRadius } from '../util/PolarUtils';

class RadialBarChart extends Component {

  static displayName = 'RadialBarChart';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    data: PropTypes.array,
    innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // The offset radius between two categorys
    barCategoryGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // The gap radius of two radial bar in one category
    barGap: PropTypes.number,
    // The radius of each radial bar
    barSize: PropTypes.number,

    title: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
  };


  static defaultProps = {
    innerRadius: '30%',
    outerRadius: '100%',
    barGap: 2,
    barCategoryGap: '10%',
    style: {},
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };

  state = {
    activeTooltipLabel: '',
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: { x: 0, y: 0 },
    isTooltipActive: false,
  };
 /**
   * Compose the data of each group
   * @param  {Array}  barPosition The offset and size of each bar
   * @param  {Object} radiusScale The scale function of radius of bars
   * @param  {Object} center      The coordinate of center
   * @param  {String} dataKey     The unique key of a group
   * @return {Array}              Composed data
   */
  getComposedData(barPosition, radiusScale, center, dataKey) {
    const { data } = this.props;
    const pos = barPosition[dataKey];

    return data.map((entry, index) => {
      const value = entry[dataKey];
      const radius = radiusScale(index);

      return {
        ...entry,
        ...center,
        value,
        innerRadius: radius - pos.offset,
        outerRadius: radius - pos.offset + pos.radius,
      };
    });
  }
   /**
   * Calculate the size of all groups
   * @param  {Array} items All the instance of RadialBar
   * @return {Object} The size of all groups
   */
  getRadiusList(items) {
    const { barSize } = this.props;

    return items.map((child) => {
      return {
        ...child.props,
        barSize: child.props.barSize || barSize,
      };
    });
  }

  /**
   * Calculate the scale function of radius
   * @param {Number} innerRadius The outer radius
   * @param {Number} outerRadius The inner radius
   * @return {Object}            A scale function
   */
  getRadiusScale(innerRadius, outerRadius) {
    const { data } = this.props;
    const bandCount = Math.max(data.length, 1);
    const range = [outerRadius, innerRadius];

    const scale = D3Scale.band().domain(LodashUtils.range(0, bandCount))
                    .range(range);

    return scale;
  }
    /**
   * Calculate the size of each bar and the gap between two bars
   * @param  {Number} bandRadius  The radius of each category
   * @param  {Array} radiusList   The radius of all groups
   * @return {Number} The size of each bar and the gap between two bars
   */
  getBarPosition(bandRadius, radiusList) {
    const { barGap, barCategoryGap } = this.props;
    const len = radiusList.length;
    let result;

    // whether or not is barSize setted by user
    if (len && radiusList[0].barSize === +radiusList[0].barSize) {
      let sum = radiusList.reduce((res, entry) => {
        return res + entry.barSize;
      }, 0);
      sum += (len - 1) * barGap;
      const offset = -sum / 2 >> 0;
      let prev = { offset: offset - barGap, radius: 0 };

      result = radiusList.reduce((res, entry) => {
        res[entry.dataKey] = {
          offset: prev.offset + prev.radius + barGap,
          radius: entry.barSize,
        };
        prev = res[entry.dataKey];

        return res;
      }, {});
    } else {
      let offset = LodashUtils.getPercentValue(barCategoryGap, bandRadius);
      const radius = (bandRadius - 2 * offset - (len - 1) * barGap) / len >> 0;
      offset = -Math.max(((radius * len + (len - 1) * barGap) / 2) >> 0, 0);

      result = radiusList.reduce((res, entry, i) => {
        res[entry.dataKey] = {
          offset: offset + (radius + barGap) * i,
          radius,
        };

        return res;
      }, {});
    }

    return result;
  }

  handleMouseEnter(el, e) {
    this.setState({
      isTooltipActive: true,
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(el, e);
      }
    });
  }

  handleMouseLeave(e) {
    this.setState({
      isTooltipActive: false,
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseLeave(e);
      }
    });
  }
  /**
   * Draw legend
   * @param  {ReactElement} legendItem The instance of Legend
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend() {
    const { children } = this.props;
    const legendItem = ReactUtils.findChildByType(children, Legend);
    if (!legendItem) {return null;}

    const { data, width, height } = this.props;

    const legendData = data.map(entry => {
      return {
        type: 'square',
        color: entry.fill || '#000',
        value: entry.name,
      };
    });

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width, height),
      payload: legendData,
    });
  }

  renderTooltip() {
    const { children } = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }
  }
  /**
   * Draw the main part of bar chart
   * @param  {Array} items     All the instance of RadialBar
   * @param  {Object} radiusScale The scale function of radius of bars
   * @param  {Object} center      The coordinate of center
   * @return {ReactComponent}  All the instances of RadialBar
   */
  renderItems(items, radiusScale, center) {
    if (!items || !items.length) {return null;}

    const radiusList = this.getRadiusList(items);
    const bandRadius = radiusScale.bandwidth();
    const barPosition = this.getBarPosition(bandRadius, radiusList);

    return items.map((child, i) => {
      const { dataKey } = child.props;

      return React.cloneElement(child, {
        ...center,
        key: 'radial-bar-' + i,
        onMouseLeave: ::this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter.bind(this, dataKey),
        data: this.getComposedData(barPosition, radiusScale, center, dataKey),
      });
    }, this);
  }

  render() {
    if (!ReactUtils.validateWidthHeight(this)) {return null;}

    const { style, children, className, width, height, margin } = this.props;
    const items = ReactUtils.findAllByType(children, RadialBar);

    const cx = LodashUtils.getPercentValue(this.props.cx, width, width / 2);
    const cy = LodashUtils.getPercentValue(this.props.cy, height, height / 2);
    const maxRadius = getMaxRadius(width, height, cx, cy, margin);
    const innerRadius = LodashUtils.getPercentValue(this.props.innerRadius, maxRadius, 0);
    const outerRadius = LodashUtils.getPercentValue(this.props.outerRadius, maxRadius, maxRadius * 0.8);
    const radiusScale = this.getRadiusScale(innerRadius, outerRadius);

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ cursor: 'default', ...style, position: 'relative' }}
      >

        <Surface width={width} height={height}>
          {this.renderItems(items, radiusScale, {cx, cy})}
        </Surface>

        {this.renderLegend()}

        {this.renderTooltip(items)}
      </div>
    );
  }

}

export default RadialBarChart;
