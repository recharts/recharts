/**
 * @fileOverview Composed Chart
 */
import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Line from '../cartesian/Line';
import Bar from '../cartesian/Bar';
import Area from '../cartesian/Area';
import Rectangle from '../shape/Rectangle';
import generateCategoricalChart from './generateCategoricalChart';
import { getBandSizeOfAxis, getAnyElementOfObject } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { AreaChart } from './AreaChart';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import composedDataDecorator from '../util/ComposedDataDecorator';

const GRAPHICAL_TYPES = ['Area', 'Bar', 'Line'];
const GRAPHICAL_MAP = { Area: AreaChart, Bar: BarChart, Line: LineChart };

@pureRender
@composedDataDecorator({})
class ComposedChart extends Component {

  static displayName = 'ComposedChart';

  static propTypes = {
    allComposedData: PropTypes.array,
    axisTicks: PropTypes.array,
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

  filterGraphicalItems() {
    const { graphicalItems } = this.props;
    const record = {};
    const result = [];

    for (let i = 0, len = graphicalItems.length; i < len; i++) {
      const item = graphicalItems[i];
      const displayName = item.type.displayName;

      if (GRAPHICAL_TYPES.indexOf(displayName) >= 0) {
        if (!_.isNil(record[displayName])) {
          const index = record[displayName];

          result[index].items = [...result[index].items, item];
        } else {
          record[displayName] = result.length;
          result.push({ items: [item], type: displayName });
        }
      }
    }

    return result;
  }

  renderCursor({ xAxisMap, yAxisMap, offset }) {
    const { children, isTooltipActive, layout, activeTooltipIndex, axisTicks } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);
    if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive ||
      activeTooltipIndex < 0) { return null; }

    const axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
    const axis = getAnyElementOfObject(axisMap);
    const ticks = axisTicks;

    if (!ticks || !ticks[activeTooltipIndex]) { return null; }

    const bandSize = getBandSizeOfAxis(axis);
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
    const { xAxisMap, yAxisMap, offset } = this.props;
    const filteredItems = this.filterGraphicalItems();

    return (
      <Layer className="recharts-composed">
        {this.renderCursor({ xAxisMap, yAxisMap, offset })}

        {
          filteredItems.map(({ items, type }) => {
            const Chart = GRAPHICAL_MAP[type];

            return (
              <Chart key={type} {...this.props} graphicalItems={items} isComposed />
            );
          })
        }

      </Layer>
    );
  }
}

export default generateCategoricalChart(ComposedChart, [Line, Area, Bar]);
