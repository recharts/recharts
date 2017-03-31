/**
 * @fileOverview Render a group of error bar
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layer from '../container/Layer';
import { getPresentationAttributes } from '../util/ReactUtils';

class ErrorBar extends Component {

  static propTypes = {
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
    data: PropTypes.array,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object,
    layout: PropTypes.string,
    dataPointFormatter: PropTypes.func,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    width: PropTypes.number,
    offset: PropTypes.number,
  };

  static defaultProps = {
    stroke: 'black',
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: 'horizontal',
  };

  renderErrorBars() {
    const { offset, layout, width, dataKey, data,
      dataPointFormatter, xAxis, yAxis, ...others } = this.props;
    const props = getPresentationAttributes(others);

    return data.map((entry, i) => {
      const { x, y, value, errorVal } = dataPointFormatter(entry, dataKey);

      if (!errorVal) { return null; }

      let xMid, yMid, xMin, yMin, xMax, yMax, scale, coordsTop, coordsMid, coordsBot, lowBound,
        highBound;

      if (Array.isArray(errorVal)) {
        lowBound = errorVal[0];
        highBound = errorVal[1];
      } else {
        lowBound = errorVal;
        highBound = errorVal;
      }

      if (layout === 'vertical') {
        scale = xAxis.scale;
        xMid = value;
        yMid = y + offset;
        xMin = scale(xMid - lowBound);
        yMin = yMid + width;
        xMax = scale(xMid + highBound);
        yMax = yMid - width;
        coordsTop = { x1: xMax, y1: yMin, x2: xMax, y2: yMax };
        coordsMid = { x1: xMin, y1: yMid, x2: xMax, y2: yMid };
        coordsBot = { x1: xMin, y1: yMin, x2: xMin, y2: yMax };
      } else if (layout === 'horizontal') {
        scale = yAxis.scale;
        xMid = x + offset;
        yMid = value;
        xMin = xMid - width;
        xMax = xMid + width;
        yMin = scale(yMid - lowBound);
        yMax = scale(yMid + highBound);
        coordsTop = { x1: xMin, y1: yMax, x2: xMax, y2: yMax };
        coordsMid = { x1: xMid, y1: yMin, x2: xMid, y2: yMax };
        coordsBot = { x1: xMin, y1: yMin, x2: xMax, y2: yMin };
      }

      return (
        <Layer className="recharts-errorBar" key={i} {...props}>
          <line {...coordsTop} />
          <line {...coordsMid} />
          <line {...coordsBot} />
        </Layer>
      );

    });
  }

  render() {
    return (
      <Layer className="recharts-errorBars">
        {this.renderErrorBars()}
      </Layer>
    );
  }

}

export default ErrorBar;
