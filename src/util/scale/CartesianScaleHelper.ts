import { BandPosition, RechartsScale } from './RechartsScale';
import { CategoricalDomainItem, Coordinate, NullableCoordinate } from '../types';

export interface CartesianScaleHelper<
  XDomain extends CategoricalDomainItem = CategoricalDomainItem,
  YDomain extends CategoricalDomainItem = CategoricalDomainItem,
> {
  map(value: { x: XDomain; y: YDomain }, { position }: { position: BandPosition }): Coordinate;

  mapWithFallback(
    value: { x?: XDomain | null | undefined; y?: YDomain | null | undefined },
    { position, fallback }: { position?: BandPosition; fallback: 'rangeMin' | 'rangeMax' },
  ): Coordinate;

  isInRange({ x, y }: Partial<NullableCoordinate>): boolean;
}

/**
 * Groups X and Y scale functions together and provides helper methods.
 */
export class CartesianScaleHelperImpl<
  XDomain extends CategoricalDomainItem = CategoricalDomainItem,
  YDomain extends CategoricalDomainItem = CategoricalDomainItem,
> implements CartesianScaleHelper<XDomain, YDomain> {
  private xAxisScale: RechartsScale<XDomain>;

  private yAxisScale: RechartsScale<YDomain>;

  constructor({ x, y }: { x: RechartsScale<XDomain>; y: RechartsScale<YDomain> }) {
    this.xAxisScale = x;
    this.yAxisScale = y;
  }

  map(value: { x: XDomain; y: YDomain }, { position }: { position: BandPosition }): Coordinate {
    return {
      x: this.xAxisScale.map(value.x, { position }) ?? 0,
      y: this.yAxisScale.map(value.y, { position }) ?? 0,
    };
  }

  mapWithFallback(
    value: { x?: XDomain | null | undefined; y?: YDomain | null | undefined },
    { position, fallback }: { position?: BandPosition; fallback: 'rangeMin' | 'rangeMax' },
  ): Coordinate {
    let fallbackY: number, fallbackX: number;
    if (fallback === 'rangeMin') {
      fallbackY = this.yAxisScale.rangeMin();
    } else if (fallback === 'rangeMax') {
      fallbackY = this.yAxisScale.rangeMax();
    } else {
      fallbackY = 0;
    }
    if (fallback === 'rangeMin') {
      fallbackX = this.xAxisScale.rangeMin();
    } else if (fallback === 'rangeMax') {
      fallbackX = this.xAxisScale.rangeMax();
    } else {
      fallbackX = 0;
    }
    return {
      x: this.xAxisScale.map(value.x, { position }) ?? fallbackX,
      y: this.yAxisScale.map(value.y, { position }) ?? fallbackY,
    };
  }

  isInRange({ x, y }: Partial<NullableCoordinate>): boolean {
    const xInRange = x == null || this.xAxisScale.isInRange(x);
    const yInRange = y == null || this.yAxisScale.isInRange(y);
    return xInRange && yInRange;
  }
}
