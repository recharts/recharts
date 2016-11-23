/**
 * @fileOverview Pie Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Pie from '../polar/Pie';
import Cell from '../component/Cell';
import { getPercentValue, combineEventHandlers } from '../util/DataUtils';
import { findChildByType, findAllByType, validateWidthHeight, filterSvgElements,
  getPresentationAttributes } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import composedDataDecorator from '../util/ComposedDataDecorator';

const getComposedData = ({ item }) => {
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

@composedDataDecorator({ getComposedData, ChildComponent: Pie })
export class PieChart extends Component {

  static displayName = 'PieChart';

  static propTypes = {
    allComposedData: PropTypes.array,
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

  state = {
    activeTooltipLabel: '',
    activeTooltipCoord: { x: 0, y: 0 },
    activeTooltipPayload: [],
    isTooltipActive: false,
  };

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
    const { children, allComposedData } = this.props;
    const legendItem = findChildByType(children, Legend);
    if (!legendItem) { return null; }

    const { width, height, margin } = this.props;
    const legendData = (legendItem.props && legendItem.props.payload) ||
      items.reduce((result, child, i) => {
        const { nameKey } = child.props;
        const data = allComposedData[i];

        return result.concat(data.map(entry => (
          {
            type: child.props.legendType, value: entry[nameKey],
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
   * Draw the main part of bar chart
   * @param  {Array} items    All the instance of Pie
   * @return {ReactComponent} All the instance of Pie
   */
  renderItems(items) {
    const { width, height, margin, allComposedData, onMouseEnter, onMouseLeave,
      onClick } = this.props;

    return items.map((child, i) => {
      const { innerRadius, outerRadius, onMouseEnter: childOnMouseEnter,
        onMouseLeave: childOnMouseLeave, onClick: childOnClick } = child.props;
      const cx = getPercentValue(child.props.cx, width, width / 2);
      const cy = getPercentValue(child.props.cy, height, height / 2);
      const maxRadius = getMaxRadius(width, height, margin);

      return React.cloneElement(child, {
        key: `recharts-pie-${i}`,
        cx,
        cy,
        maxRadius: child.props.maxRadius || Math.sqrt(width * width + height * height) / 2,
        innerRadius: getPercentValue(innerRadius, maxRadius, 0),
        outerRadius: getPercentValue(outerRadius, maxRadius, maxRadius * 0.8),
        composedData: allComposedData[i],
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
