import { getAngledRectangleWidth } from './CartesianUtils';
import { getEveryNthWithCondition } from './getEveryNthWithCondition';
import { Size, CartesianViewBox, CartesianTickItem } from './types';

export function getAngledTickWidth(contentSize: Size, unitSize: Size, angle: number) {
  const size = { width: contentSize.width + unitSize.width, height: contentSize.height + unitSize.height };

  return getAngledRectangleWidth(size, angle);
}

export function getTickBoundaries(viewBox: CartesianViewBox, sign: number, sizeKey: string) {
  const isWidth = sizeKey === 'width';
  const { x, y, width, height } = viewBox;
  if (sign === 1) {
    return {
      start: isWidth ? x : y,
      end: isWidth ? x + width : y + height,
    };
  }
  return {
    start: isWidth ? x + width : y + height,
    end: isWidth ? x : y,
  };
}

export function isVisible(sign: number, tickPosition: number, size: number, start: number, end: number): boolean {
  return sign * (tickPosition - (sign * size) / 2 - start) >= 0 && sign * (tickPosition + (sign * size) / 2 - end) <= 0;
}

export function getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number) {
  return getEveryNthWithCondition(ticks, interval + 1);
}
