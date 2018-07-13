/**
 * @fileOverview Curve
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { symbol as shapeSymbol, symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye } from 'd3-shape';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';

const SYMBOL_FACTORIES = {
  symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye,
};
const RADIAN = Math.PI / 180;

const getSymbolFactory = (type) => {
  const name = `symbol${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  return SYMBOL_FACTORIES[name] || symbolCircle;
};

const calculateAreaSize = (size, sizeType, type) => {
  if (sizeType === 'area') { return size; }

  switch (type) {
    case 'cross':
      return 5 * size * size / 9;
    case 'diamond':
      return 0.5 * size * size / Math.sqrt(3);
    case 'square':
      return size * size;
    case 'star': {
      const angle = 18 * RADIAN;

      return 1.25 * size * size * (
        Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2
      );
    }
    case 'triangle':
      return Math.sqrt(3) * size * size / 4;
    case 'wye':
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;
    default:
      return Math.PI * size * size / 4;
  }
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
    sizeType: PropTypes.oneOf(['area', 'diameter']),
  };

  static defaultProps = {
    type: 'circle',
    size: 64,
    sizeType: 'area',
  };

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { size, sizeType, type } = this.props;
    const symbolFactory = getSymbolFactory(type);
    const symbol = shapeSymbol().type(symbolFactory)
      .size(calculateAreaSize(size, sizeType, type));

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
