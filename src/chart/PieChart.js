/**
 * @fileOverview Pie Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Pie from '../polar/Pie';
import ReactUtils from '../util/ReactUtils';

class PieChart extends Component {

  static displayName = 'PieChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
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
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: { x: 0, y: 0 },
    isTooltipActive: false,
  };

  getComposedData(item) {
    const { fill, stroke, strokeWidth, strokeDasharray, data } = item.props;

    return data.map((entry) => {
      return {
        fill, stroke, strokeWidth, strokeDasharray,
        ...entry,
      };
    });
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
   * @param  {Array} items             The instances of Pie
   * @return {ReactElement}            The instance of Legend
   */
  renderLegend(items) {
    const { children } = this.props;
    const legendItem = ReactUtils.findChildByType(children, Legend);
    if (!legendItem) {return null;}

    const { width, height } = this.props;
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
   * @param  {Array} items    All the instance of Pie
   * @return {ReactComponent} All the instance of Pie
   */
  renderItems(items) {
    const { width, height } = this.props;

    return items.map((child, i) => {
      const { cx, cy, outerRadius, data } = child.props;
      const maxRadius = Math.min(width, height) / 2;

      return React.cloneElement(child, {
        key: 'recharts-pie-' + i,
        cx: cx || width / 2,
        cy: cy || height / 2,
        data: this.getComposedData(child),
        onMouseEnter: ::this.handleMouseEnter,
        onMouseLeave: ::this.handleMouseLeave,
        outerRadius: outerRadius || maxRadius * 0.8,
      });
    });
  }

  render() {
    const { style, children, className, width, height } = this.props;
    const items = ReactUtils.findAllByType(children, Pie);

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
