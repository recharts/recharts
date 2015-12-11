import React, {PropTypes} from 'react';

import Surface from '../container/Surface';
import ReactUtils from '../util/ReactUtils';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Triangles from '../chart/Triangles';
import TriangleItem from './TriangleItem';
/**
 *  <PieChart className="my-pie-cahrt">
 *    <PieItem dataKey={}/>
 *    <PieItem dataKey={}>
 *  </PieChart>
 */
const RADIAN = Math.PI / 180;
class TriangleChart extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName = 'TriangleChart';

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    // viewBox 对象
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    title: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  };


  static defaultProps = {
    style: {},
    margin: {top: 0, right: 0, bottom: 0, left: 0}
  };

  state = {
    activeTooltipLabel: '',
    activeTooltipPosition: 'left-bottom',
    activeTooltipCoord: {x: 0, y: 0},
    isTooltipActive: false
  };

  getComposeData (item) {
    const {data, ...others} = item.props;

    return data.map(entry => {
      return {...others, ...entry};
    });
  }

  handleMouseEnter = (el, e) => {
    this.setState({
      isTooltipActive: true
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(el, e);
      }
    });
  }

  handleMouseLeave = (e) => {
    this.setState({
      isTooltipActive: false
    }, () => {
      if (this.props.onMouseEnter) {
        this.props.onMouseLeave(e);
      }
    });
  }
  /**
   * 渲染图形部分
   * @param  {Array[ReactComponet]} items 线图元素
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderLegend (items, legendItem) {
    const {width} = this.props;

    const legendData = items.reduce((result, child) => {
      const data = this.getComposeData(child);

      return result.concat(data.map((entry, i) => {
        const {name, value, ...rest} = entry;

        return {value: entry.name, color: entry.fill, ...rest};
      }));
    }, []);

    return React.cloneElement(legendItem, {
      width,
      data: legendData
    });
  }

  renderTooltip () {
    const {children} = this.props;
    const tooltipItem = ReactUtils.findChildByType(children, Tooltip);

    if (!tooltipItem) {
      return;
    }
  }
  /**
   * 渲染图形部分
   * @param  {Array[ReactComponet]} items 线图元素
   * @param  {Object} offset   图形区域的偏移量
   * @return {ReactComponent}
   */
  renderItems (items, offset) {
    const {width, height} = this.props;

    return items.map((child, i) => {
      const {baseAngle, data, ...others} = child.props;

      if (baseAngle <= 0 || baseAngle >= 90) {
        console.info('Recharts: baseAngle must bigger than 0 and smaller than 90, now is %d', baseAngle);
      }

      return (
        <Triangles
          {...others}
          baseAngle={baseAngle}
          width={width}
          height={height}
          key={'recharts-triangles-' + i}
          data={this.getComposeData(child)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}/>
      );
    });
  }

  render () {
    const {style, children} = this.props;
    const items = ReactUtils.findAllByType(children, TriangleItem);
    const legendItem = ReactUtils.findChildByType(children, Legend);

    return (
      <div className='recharts-wrapper'
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

};

export default TriangleChart;
