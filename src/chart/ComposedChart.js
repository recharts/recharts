/**
 * @fileOverview Composed Chart
 */
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Line from '../cartesian/Line';
import Bar from '../cartesian/Bar';
import Area from '../cartesian/Area';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import Rectangle from '../shape/Rectangle';
import generateCategoricalChart from './generateCategoricalChart';
import { getPercentValue, getBandSizeOfScale } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType,
  findAllByType, validateWidthHeight } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { getTicksOfAxis } from '../util/CartesianUtils';
import { AreaChart } from './AreaChart';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';

@pureRender
class ComposedChart extends Component {

  static displayName = 'ComposedChart';

  static propTypes = {
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: PropTypes.number,
    dataEndIndex: PropTypes.number,
    isTooltipActive: PropTypes.bool,
    activeTooltipIndex: PropTypes.number,
    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,
    offset: PropTypes.object,
    graphicalItems: PropTypes.array,
    stackGroups: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  renderCursor(xAxisMap, yAxisMap, offset) {
    const { children, isTooltipActive } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive) {return null;}

    const { layout, activeTooltipIndex } = this.props;
    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const ids = Object.keys(axisMap);
    const axis = axisMap[ids[0]];
    const bandSize = getBandSizeOfScale(axis.scale);

    const ticks = getTicksOfAxis(axis);
    const start = ticks[activeTooltipIndex].coordinate;
    const cursorProps = {
      fill: '#f1f1f1',
      ...getPresentationAttributes(tooltipItem.props.cursor),
      x: layout === 'horizontal' ? start : offset.left + 0.5,
      y: layout === 'horizontal' ? offset.top + 0.5 : start,
      width: layout === 'horizontal' ? bandSize : offset.width - 1,
      height: layout === 'horizontal' ? offset.height - 1 : bandSize,
    };

    return React.isValidElement(tooltipItem.props.cursor) ?
      React.cloneElement(tooltipItem.props.cursor, cursorProps) :
      React.createElement(Rectangle, cursorProps);
  }

  render() {
    const { xAxisMap, yAxisMap, offset, graphicalItems, stackGroups } = this.props;
    const areaItems = graphicalItems.filter(item => item.type.displayName === 'Area');
    const lineItems = graphicalItems.filter(item => item.type.displayName === 'Line');
    const barItems = graphicalItems.filter(item => item.type.displayName === 'Bar');

    return (
      <Layer className="recharts-composed">
        {this.renderCursor(xAxisMap, yAxisMap, offset)}

        <AreaChart {...this.props} graphicalItems={areaItems} isComposed/>
        <BarChart {...this.props} graphicalItems={barItems} isComposed/>
        <LineChart {...this.props} graphicalItems={lineItems} isComposed/>
      </Layer>
    );
  }
}

export default generateCategoricalChart(ComposedChart, [Line, Area, Bar]);
