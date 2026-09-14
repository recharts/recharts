import { describe, it, expect } from 'vitest';
import { combineCoordinateForDefaultIndex } from '../../../../src/state/selectors/combiners/combineCoordinateForDefaultIndex';
import type { ChartOffsetInternal, PolarViewBoxRequired, TickItem } from '../../../../src/util/types';

const offset: ChartOffsetInternal = {
  top: 10,
  left: 20,
  width: 400,
  height: 260,
  bottom: 0,
  right: 0,
  brushBottom: 0,
};

const polarViewBox: PolarViewBoxRequired = {
  cx: 200,
  cy: 130,
  innerRadius: 10,
  outerRadius: 100,
  startAngle: 0,
  endAngle: 180,
  clockWise: false,
};

const radialTick: TickItem = {
  coordinate: 55,
  index: 1,
  value: 55,
} as unknown as TickItem;

const radialTick2: TickItem = {
  coordinate: 80,
  index: 1,
  value: 80,
} as unknown as TickItem;

describe('combineCoordinateForDefaultIndex', () => {
  it('returns a PolarCoordinate for radial layout when polarViewBox is available', () => {
    const result = combineCoordinateForDefaultIndex(
      400,
      260,
      'radial',
      offset,
      [radialTick, radialTick2],
      '0',
      [],
      polarViewBox,
    );

    expect(result).toMatchObject({
      cx: 200,
      cy: 130,
      innerRadius: 10,
      outerRadius: 100,
      startAngle: 0,
      endAngle: 180,
      radius: 55,
      clockWise: false,
    });
  });

  it('falls back to Cartesian coordinate for radial layout when polarViewBox is missing', () => {
    const result = combineCoordinateForDefaultIndex(
      400,
      260,
      'radial',
      offset,
      [radialTick, radialTick2],
      '0',
      [],
      undefined,
    );

    expect(result).toEqual({ x: 210, y: 55 });
  });

  it('returns Cartesian coordinate for vertical layout', () => {
    const result = combineCoordinateForDefaultIndex(
      400,
      260,
      'vertical',
      offset,
      [radialTick, radialTick2],
      '0',
      [],
      undefined,
    );

    expect(result).toEqual({ x: 210, y: 55 });
  });
});
