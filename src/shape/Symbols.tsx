/**
 * @fileOverview Curve
 */
import React, { PureComponent } from 'react';
import { symbol as shapeSymbol, symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye, SymbolType as D3SymbolType } from 'd3-shape';
import classNames from 'classnames';
import { PresentationAttributes, SymbolType, filterProps } from '../util/types';

type SizeType = 'area' | 'diameter';

interface SymbolFactory {
  [type: string]: D3SymbolType
}

const SYMBOL_FACTORIES: SymbolFactory = {
  symbolCircle, symbolCross, symbolDiamond,
  symbolSquare, symbolStar, symbolTriangle, symbolWye,
};
const RADIAN = Math.PI / 180;

const getSymbolFactory = (type: SymbolType) => {
  const name = `symbol${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  return SYMBOL_FACTORIES[name] || symbolCircle;
};

const calculateAreaSize = (size: number, sizeType: SizeType, type: SymbolType) => {
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

interface SymbolsProp {
  className?: string;
  type: SymbolType;
  cx?: number;
  cy?: number;
  size?: number;
  sizeType?: SizeType;
}

export type Props = PresentationAttributes<SVGPathElement> & SymbolsProp;

class Symbols extends PureComponent<Props> {
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
          {...filterProps(this.props, true)}
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
