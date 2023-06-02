/**
 * @fileOverview Curve
 */
import React, { SVGProps } from 'react';
import _ from 'lodash';
import {
  symbol as shapeSymbol,
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
  SymbolType as D3SymbolType,
} from 'victory-vendor/d3-shape';
import classNames from 'classnames';
import { SymbolType } from '../util/types';
import { filterProps } from '../util/ReactUtils';

type SizeType = 'area' | 'diameter';

interface SymbolFactory {
  [type: string]: D3SymbolType;
}

const symbolFactories: SymbolFactory = {
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
};
const RADIAN = Math.PI / 180;

const getSymbolFactory = (type: SymbolType) => {
  const name = `symbol${_.upperFirst(type)}`;

  return symbolFactories[name] || symbolCircle;
};

const calculateAreaSize = (size: number, sizeType: SizeType, type: SymbolType) => {
  if (sizeType === 'area') {
    return size;
  }

  switch (type) {
    case 'cross':
      return (5 * size * size) / 9;
    case 'diamond':
      return (0.5 * size * size) / Math.sqrt(3);
    case 'square':
      return size * size;
    case 'star': {
      const angle = 18 * RADIAN;

      return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
    }
    case 'triangle':
      return (Math.sqrt(3) * size * size) / 4;
    case 'wye':
      return ((21 - 10 * Math.sqrt(3)) * size * size) / 8;
    default:
      return (Math.PI * size * size) / 4;
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

export type Props = SVGProps<SVGPathElement> & SymbolsProp;

const symbolsDefaultProps = {
  type: 'circle',
  size: 64,
  sizeType: 'area',
};

const registerSymbol = (key: string, factory: D3SymbolType) => {
  symbolFactories[`symbol${_.upperFirst(key)}`] = factory;
};

export const Symbols = (props: Props) => {
  /**
   * Calculate the path of curve
   * @return {String} path
   */
  const getPath = () => {
    const { size, sizeType, type } = props;
    const symbolFactory = getSymbolFactory(type);
    const symbol = shapeSymbol().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));

    return symbol();
  };

  const { className, cx, cy, size } = props;
  const filteredProps = filterProps(props, true);

  if (cx === +cx && cy === +cy && size === +size) {
    return (
      <path
        {...filteredProps}
        className={classNames('recharts-symbols', className)}
        transform={`translate(${cx}, ${cy})`}
        d={getPath()}
      />
    );
  }

  return null;
};

Symbols.defaultProps = symbolsDefaultProps;
Symbols.registerSymbol = registerSymbol;
