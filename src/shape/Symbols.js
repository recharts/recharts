/**
 * @fileOverview Curve
 */
import React, { Component, PropTypes } from 'react';
import { symbol as shapeSymbol, symbolCircle, symbolCross, symbolDiamond,
 symbolSquare, symbolStar, symbolTriangle, symbolWye } from 'd3-shape';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import _ from 'lodash';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';

const SYMBOL_FACTORIES = {
  symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye,
};

const getSymbolFactory = (type) => {
  const name = `symbol${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  return SYMBOL_FACTORIES[name] || symbolCircle;
};

@pureRender
class Symbols extends Component {

  static displayName = 'Symbols';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    cx: PropTypes.number,
    cy: PropTypes.number,
    size: PropTypes.number,
  };

  static defaultProps = {
    type: 'circle',
    stroke: 'none',
    fill: '#000',
    size: 64,
  };

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { size, type } = this.props;
    const symbolFactory = getSymbolFactory(type);
    const symbol = shapeSymbol().type(symbolFactory).size(size);

    return symbol();
  }

  render() {
    const { className, cx, cy, size } = this.props;

    if (cx === +cx && cy === +cy && size === +size) {

      return (
        <path
          {...getPresentationAttributes(this.props)}
          {...filterEventAttributes(this.props)}
          className={classNames('recharts-symbols', className)}
          transform={`translate(${cx}, ${cy})`}
          d={this.getPath()}
        />
      );
    }

    return null;
  }
}

export default Symbols;
