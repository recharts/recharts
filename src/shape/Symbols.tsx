import * as React from 'react';
import { SVGProps } from 'react';

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
import { clsx } from 'clsx';
import { SymbolType } from '../util/types';
import { isNumber, upperFirst } from '../util/DataUtils';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

/**
 * @public
 */
export type SizeType = 'area' | 'diameter';

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
  const name = `symbol${upperFirst(type)}`;

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

/**
 * Returns how far a symbol reaches horizontally from its center, in pixels.
 * Useful to connect a line to the edge of a symbol, because most symbols are narrower than their size.
 *
 * @param type symbol type
 * @param size symbol size, interpreted according to `sizeType`
 * @param sizeType how to interpret `size`
 * @returns the largest horizontal distance of the symbol outline from its center
 */
export function getSymbolHalfWidth(type: SymbolType, size: number, sizeType: SizeType): number {
  let halfWidth = 0;
  const track = (x: number) => {
    halfWidth = Math.max(halfWidth, Math.abs(x));
  };
  // d3 symbols draw themselves through a canvas-like path context; we only need the x coordinates
  const context = {
    moveTo: track,
    lineTo: track,
    closePath: () => {},
    arc: (x: number, _y: number, r: number) => track(Math.abs(x) + r),
    bezierCurveTo: (_x1: number, _y1: number, _x2: number, _y2: number, x: number) => track(x),
    quadraticCurveTo: (_x1: number, _y1: number, x: number) => track(x),
    arcTo: (_x1: number, _y1: number, x2: number) => track(x2),
    rect: (x: number, _y: number, w: number) => {
      track(x);
      track(x + w);
    },
    ellipse: (x: number, _y: number, radiusX: number) => track(Math.abs(x) + radiusX),
  };
  getSymbolFactory(type).draw(context, calculateAreaSize(size, sizeType, type));
  return halfWidth;
}

export interface InnerSymbolsProp {
  className?: string;
  type?: SymbolType;
  cx?: number;
  cy?: number;
  size?: number;
  sizeType?: SizeType;
}

/**
 * @public
 */
export type SymbolsProps = Omit<SVGProps<SVGPathElement>, 'type'> & InnerSymbolsProp;

const registerSymbol = (key: string, factory: D3SymbolType) => {
  symbolFactories[`symbol${upperFirst(key)}`] = factory;
};

/**
 * Renders a symbol from a set of predefined shapes.
 * @public
 */
export const Symbols = ({ type = 'circle', size = 64, sizeType = 'area', ...rest }: SymbolsProps) => {
  const props = { ...rest, type, size, sizeType };
  let realType: SymbolType = 'circle';
  if (typeof type === 'string') {
    /*
     * Our type guard is not as strong as it could be (i.e. non-existent),
     * and so despite the typescript type saying that `type` is a `SymbolType`,
     * we can get numbers or really anything, so let's have a runtime check here to fix the exception.
     *
     * https://github.com/recharts/recharts/issues/6197
     */
    realType = type;
  }

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  const getPath = (): string | undefined => {
    const symbolFactory = getSymbolFactory(realType);
    const symbol = shapeSymbol()
      .type(symbolFactory)
      .size(calculateAreaSize(size, sizeType, realType));

    const s = symbol();
    if (s === null) {
      return undefined;
    }
    return s;
  };

  const { className, cx, cy } = props;
  const filteredProps = svgPropertiesAndEvents(props);

  if (isNumber(cx) && isNumber(cy) && isNumber(size)) {
    return (
      <path
        {...filteredProps}
        className={clsx('recharts-symbols', className)}
        transform={`translate(${cx}, ${cy})`}
        d={getPath()}
      />
    );
  }

  return null;
};

Symbols.registerSymbol = registerSymbol;
