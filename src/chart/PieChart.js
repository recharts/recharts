/**
 * @fileOverview Pie Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Pie from '../polar/Pie';
import { getPercentValue } from '../util/DataUtils';
import { findChildByType, findAllByType, validateWidthHeight } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import pureRender from '../util/PureRender';

@pureRender
class PieChart extends Component {

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

  state = {
    activeTooltipLabel: '',
    activeTooltipCoord: { x: 0, y: 0 },
    activeTooltipPayload: [],
    isTooltipActive: false,
  };

  getComposedData(item) {
    const { fill, stroke, strokeWidth, strokeDasharray, data } = item.props;

    return data.map((entry) => ({
      fill, stroke, strokeWidth, strokeDasharray,
      ...entry,
    }));
  }

  handleMouseEnter(el, index, e) {
    const { onMouseEnter } = this.props;
    const { cx, cy, outerRadius, midAngle } = el;

    this.setState({
      isTooltipActive: true,
      activeTooltipCoord: polarToCartesian(cx, cy, outerRadius, midAngle),
      activeTooltipPayload: [el.payload],
    }, () => {
      if (onMouseEnter) {
        onMouseEnter(el, index, e);
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
   * @param  {Array} items             The instances of Pie
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items) {
    const { children } = this.props;
    const legendItem = findChildByType(children, Legend);
    if (!legendItem) {return null;}

    const { width, height, margin } = this.props;
    const legendData = items.reduce((result, child) => {
      const { nameKey } = child.props;
      const data = this.getComposedData(child);

      return result.concat(data.map((entry) => {
        const { name, value, ...rest } = entry;

        return { value: entry[nameKey], color: entry.fill, ...rest };
      }));
    }, []);

    return React.cloneElement(legendItem, {
      ...Legend.getWithHeight(legendItem, width, height),
      payload: legendData,
      chartWidth: width,
      chartHeight: height,
      margin,
    });
  }

  renderTooltip() {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) { return null;}

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
    const { width, height, margin } = this.props;

    return items.map((child, i) => {
      const { innerRadius, outerRadius, data } = child.props;
      const cx = getPercentValue(child.props.cx, width, width / 2);
      const cy = getPercentValue(child.props.cy, height, height / 2);
      const maxRadius = getMaxRadius(width, height, cx, cy, margin);

      return React.cloneElement(child, {
        key: `recharts-pie-${i}`,
        cx,
        cy,
        innerRadius: getPercentValue(innerRadius, maxRadius, 0),
        outerRadius: getPercentValue(outerRadius, maxRadius, maxRadius * 0.8),
        data: this.getComposedData(child),
        onMouseEnter: ::this.handleMouseEnter,
        onMouseLeave: ::this.handleMouseLeave,
      });
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }

    const { style, children, className, width, height } = this.props;
    const items = findAllByType(children, Pie);

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
      >
        <Surface width={width} height={height}>
          {this.renderItems(items)}
        </Surface>

        {this.renderLegend(items)}
        {this.renderTooltip(items)}
      </div>
    );
  }
}

export default PieChart;
