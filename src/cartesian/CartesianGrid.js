/**
 * @fileOverview Cartesian Grid
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

@pureRender
class CartesianGrid extends Component {

  static displayName = 'CartesianGrid';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    horizontalPoints: PropTypes.arrayOf(PropTypes.number),
    verticalPoints: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [],
    // The abscissas of vertical grid lines
    verticalPoints: [],

    stroke: '#ccc',
    fill: 'none',
  };

  /**
   * Draw the horizontal grid lines
   * @return {Group} Horizontal lines
   */
  renderHorizontal() {
    const { x, width, horizontalPoints } = this.props;

    if (!horizontalPoints || !horizontalPoints.length) { return null; }

    const props = getPresentationAttributes(this.props);
    const items = horizontalPoints.map((entry, i) =>
      (<line {...props} key={`line-${i}`} x1={x} y1={entry} x2={x + width} y2={entry} />));

    return <g className="recharts-cartesian-grid-horizontal">{items}</g>;
  }

  /**
   * Draw vertical grid lines
   * @return {Group} Vertical lines
   */
  renderVertical() {
    const { y, height, verticalPoints } = this.props;

    if (!verticalPoints || !verticalPoints.length) { return null; }

    const props = getPresentationAttributes(this.props);

    const items = verticalPoints.map((entry, i) =>
      (<line {...props} key={`line-${i}`} x1={entry} y1={y} x2={entry} y2={y + height} />));

    return <g className="recharts-cartesian-grid-vertical">{items}</g>;
  }

  render() {
    const { width, height, horizontal, vertical } = this.props;

    if (width <= 0 || height <= 0) {
      return null;
    }

    return (
      <g className="recharts-cartesian-grid">
        {horizontal && this.renderHorizontal()}
        {vertical && this.renderVertical()}
      </g>
    );
  }
}

export default CartesianGrid;
