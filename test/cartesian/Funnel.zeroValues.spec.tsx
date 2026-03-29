import React from 'react';
import { render } from '@testing-library/react';
import { FunnelChart, Funnel } from '../../src';
import { computeFunnelTrapezoids } from '../../src/cartesian/Funnel';
import type { ChartOffsetInternal } from '../../src/util/types';

describe('Funnel with all-zero values', () => {
  const zeroData = [{ value: 0 }, { value: 0 }];

  it('renders without crashing and produces no trapezoid paths', () => {
    const { container } = render(
      <FunnelChart width={400} height={400}>
        <Funnel dataKey="value" data={zeroData} isAnimationActive={false} />
      </FunnelChart>,
    );

    // One wrapper Layer per data point still exists
    expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(zeroData.length);
    // But the actual trapezoid paths are not rendered because both widths are zero
    expect(container.getElementsByClassName('recharts-trapezoid')).toHaveLength(0);
  });

  it('computes finite coordinates with maxValue === 0 (no NaN)', () => {
    const offset: ChartOffsetInternal = {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
      width: 390, // 400 - left(5) - right(5)
      height: 390, // 400 - top(5) - bottom(5)
      brushBottom: 0,
    };

    const trapezoids = computeFunnelTrapezoids({
      dataKey: 'value',
      nameKey: 'name' as any,
      displayedData: zeroData,
      tooltipType: undefined,
      lastShapeType: 'triangle',
      reversed: false,
      customWidth: undefined,
      // GraphicalItemId is internal; any stable string suffices for testing
      graphicalItemId: 'test-id' as any,
      offset,
    });

    expect(trapezoids).toHaveLength(2);
    for (const t of trapezoids) {
      // x should fall back to offset.left when maxValue === 0
      expect(t.x).toBe(5);
      // widths should be 0, not NaN
      expect(t.upperWidth).toBe(0);
      expect(t.lowerWidth).toBe(0);
      // ensure tooltip position is finite
      expect(Number.isFinite(t.tooltipPosition.x)).toBe(true);
      expect(Number.isFinite(t.tooltipPosition.y)).toBe(true);
    }
  });
});

