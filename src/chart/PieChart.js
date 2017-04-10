/**
 * @fileOverview Pie Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Pie from '../polar/Pie';
import Cell from '../component/Cell';
import { getPercentValue, combineEventHandlers, getValueByDataKey } from '../util/DataUtils';
import { findChildByType, findAllByType, validateWidthHeight, filterSvgElements,
  getPresentationAttributes, isChildrenEqual } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import { shallowEqual } from '../util/PureRender';

export class PieChart extends Component {

  static displayName = 'PieChart';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
    title: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  };

  static createDefaultState = () => ({
    activeTooltipLabel: '',
    activeTooltipCoord: { x: 0, y: 0 },
    activeTooltipPayload: [],
    isTooltipActive: false,
  });

  static getComposedData = (item) => {
    const { data, children } = item.props;
    const presentationProps = getPresentationAttributes(item.props);
    const cells = findAllByType(children, Cell);

    if (data && data.length) {
      return data.map((entry, index) => ({
        payload: entry,
        ...presentationProps,
        ...entry,
        ...(cells && cells[index] && cells[index].props),
      }));
    }

    if (cells && cells.length) {
      return cells.map(cell => ({ ...presentationProps, ...cell.props }));
    }

    return [];
  };

  static parseDeltaAngle = ({ startAngle, endAngle }) => {
    const sign = Math.sign(endAngle - startAngle);
    const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

    return sign * deltaAngle;
  };

  static calculateSectors = (data, childProps) => {
    if (!data || !data.length) { return []; }

    const { cx, cy, innerRadius, outerRadius, cornerRadius, startAngle, paddingAngle,
      minAngle, nameKey, valueKey } = childProps;
    const len = data.length;
    const deltaAngle = PieChart.parseDeltaAngle(childProps);
    const absDeltaAngle = Math.abs(deltaAngle);
    const totalPadingAngle = (absDeltaAngle >= 360 ? len : (len - 1)) * paddingAngle;
    const sum = data.reduce((result, entry) => (result + getValueByDataKey(entry, valueKey, 0)), 0);
    let sectors = [];
    let prev;

    if (sum > 0) {
      sectors = data.map((entry, i) => {
        const percent = getValueByDataKey(entry, valueKey, 0) / sum;
        let tempStartAngle;

        if (i) {
          tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle)
            + Math.sign(deltaAngle) * paddingAngle;
        } else {
          tempStartAngle = startAngle;
        }

        const tempEndAngle = tempStartAngle + Math.sign(deltaAngle) * (
          minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle)
        );

        prev = {
          percent,
          cornerRadius,
          ...entry,
          cx,
          cy,
          innerRadius,
          outerRadius,
          name: getValueByDataKey(entry, nameKey),
          value: getValueByDataKey(entry, valueKey),
          startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
          endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
          midAngle: (tempStartAngle + tempEndAngle) / 2,
        };

        return prev;
      });
    }

    return sectors;
  }

  constructor(props) {
    super(props);

    const defaultState = this.constructor.createDefaultState(props);

    this.state = {
      ...defaultState,
      allComposedData: this.calculateExpensiveState(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { children, width, height, margin } = this.props;

    if (nextProps.width !== width || nextProps.height !== height ||
      !shallowEqual(nextProps.margin, margin) ||
      !isChildrenEqual(nextProps.children, children)) {
      const defaultState = this.constructor.createDefaultState(nextProps);
      this.setState({ ...defaultState, allComposedData: this.calculateExpensiveState(nextProps) });
    }
  }

  calculateExpensiveState(props) {
    const { width, height, margin } = props;
    const graphicalItems = findAllByType(props.children, Pie);
    const maxPieRadius = getMaxRadius(width, height, margin);

    return graphicalItems.map((item) => {
      const cx = getPercentValue(item.props.cx, width, width / 2);
      const cy = getPercentValue(item.props.cy, height, height / 2);
      const innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
      const outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
      const maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;
      const composedData = this.constructor.getComposedData(item);
      const sectors = this.constructor.calculateSectors(composedData, {
        ...item.props, cx, cy, innerRadius, outerRadius,
      });

      return { cx, cy, innerRadius, outerRadius, maxRadius, sectors };
    });
  }

  handleMouseEnter = (el) => {
    const { children } = this.props;
    const { cx, cy, outerRadius, midAngle } = el;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        isTooltipActive: true,
        activeTooltipCoord: polarToCartesian(cx, cy, outerRadius, midAngle),
        activeTooltipPayload: [el],
      });
    }
  };

  handleMouseLeave = () => {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        isTooltipActive: false,
      });
    }
  };
  /**
   * Draw legend
   * @param  {Array} items             The instances of Pie
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items) {
    const { allComposedData } = this.state;
    const { children } = this.props;
    const legendItem = findChildByType(children, Legend);
    if (!legendItem) { return null; }

    const { width, height, margin } = this.props;
    const legendData = (legendItem.props && legendItem.props.payload) ||
      items.reduce((result, child, i) => {
        const { hide } = child.props;
        const sectors = allComposedData[i].sectors;

        return result.concat(sectors.map(entry => (
          {
            inactive: hide,
            type: legendItem.props.iconType || child.props.legendType,
            value: entry.name,
            color: entry.fill,
            payload: entry,
          }
        )));
      }, []);

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width),
      payload: legendData,
      chartWidth: width,
      chartHeight: height,
      margin,
    });
  }

  renderTooltip() {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) { return null; }

    const { width, height } = this.props;
    const { isTooltipActive, activeTooltipLabel, activeTooltipCoord,
      activeTooltipPayload } = this.state;
    const viewBox = { x: 0, y: 0, width, height };

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      label: activeTooltipLabel,
      payload: activeTooltipPayload,
      coordinate: activeTooltipCoord,
    });
  }

  /**
   * Draw the main part of pie chart
   * @param  {Array} items    All the instance of Pie
   * @return {ReactComponent} All the instance of Pie
   */
  renderItems(items) {
    const { allComposedData } = this.state;
    const { onMouseEnter, onMouseLeave, onClick } = this.props;

    return items.map((child, i) => {
      const { onMouseEnter: childOnMouseEnter, onMouseLeave: childOnMouseLeave,
        onClick: childOnClick } = child.props;

      return React.cloneElement(child, {
        ...allComposedData[i],
        key: child.key || `recharts-pie-${i}`,
        onMouseEnter: combineEventHandlers(this.handleMouseEnter, onMouseEnter, childOnMouseEnter),
        onMouseLeave: combineEventHandlers(this.handleMouseLeave, onMouseLeave, childOnMouseLeave),
        onClick: combineEventHandlers(null, onClick, childOnClick),
      });
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }

    const { style, children, className, width, height, ...others } = this.props;
    const items = findAllByType(children, Pie);
    const attrs = getPresentationAttributes(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ ...style, position: 'relative', cursor: 'default', width, height }}
      >
        <Surface {...attrs} width={width} height={height}>
          {this.renderItems(items)}
          {filterSvgElements(children)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip()}
      </div>
    );
  }
}

export default PieChart;
