import React, {PropTypes} from 'react';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Pie from '../chart/Pie';
import PieItem from './PieItem';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';

/**
 *  <PieChart className="my-pie-cahrt">
 *    <PieItem dataKey={}/>
 *    <PieItem dataKey={}>
 *  </PieChart>
 */

class PieChart extends React.Component {

  static displayName = 'PieChart';

  displayName = 'PieChart';

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
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };


  static defaultProps = {
    style: {},
    margin: {top: 0, right: 0, bottom: 0, left: 0},
  };

  constructor(props) {
    super(props);
  }

  state = {
    activeTooltipLabel: '',
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: {x: 0, y: 0},
    isTooltipActive: false,
  };

  getComposeData(item) {
    const {fill, stroke, strokeWidth, strokeDasharray, data} = item.props;

    return data.map((entry) => {
      return {
        fill, stroke, strokeWidth, strokeDasharray,
        ...entry,
      };
    });
  }

  handleMouseEnter = (el, e) => {
    this.setState({
      isTooltipActive: true,
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(el, e);
      }
    });
  }

  handleMouseLeave = (e) => {
    this.setState({
      isTooltipActive: false,
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseLeave(e);
      }
    });
  }
  /**
   * 渲染图形部分
   * @param  {Array} items 饼图元素
   * @param  {ReactElement} legendItem   图例对象
   * @return {ReactElement} 图例
   */
  renderLegend(items, legendItem) {
    const {width} = this.props;

    const legendData = items.reduce((result, child) => {
      const data = this.getComposeData(child);

      return result.concat(data.map((entry) => {
        const {name, value, ...rest} = entry;

        return {value: entry.name, color: entry.fill, ...rest};
      }));
    }, []);

    return React.cloneElement(legendItem, {
      width,
      data: legendData,
    });
  }

  renderTooltip() {
    const {children} = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }
  }
  /**
   * 渲染图形部分
   * @param  {Array} items 饼图元素
   * @return {ReactComponent} 饼图元素
   */
  renderItems(items) {
    const {width, height} = this.props;

    return items.map((child, i) => {
      const {cx, cy, outerRadius, data, ...others} = child.props;
      const maxRadius = Math.min(width, height) / 2;

      return (
        <Pie
          {...others}
          cx={cx || width / 2}
          cy={cy || height / 2}
          key={'recharts-pie-' + i}
          data={this.getComposeData(child)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          outerRadius={outerRadius || maxRadius * 0.8}/>
      );
    });
  }

  render() {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, PieItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    return (
      <div className="recharts-wrapper"
        style={{position: 'relative', cursor: 'default', ...style}}>

        {legendItem && legendItem.props.layout === 'horizontal'
          && legendItem.props.verticalAlign === 'top'
          && this.renderLegend(items, legendItem)
        }

        <Surface {...this.props}>
          {this.renderItems(items)}
        </Surface>

        {legendItem && (legendItem.props.layout !== 'horizontal'
          || legendItem.props.verticalAlign !== 'top')
        && this.renderLegend(items, legendItem)}
        {this.renderTooltip(items)}
      </div>
    );
  }

}

export default PieChart;
