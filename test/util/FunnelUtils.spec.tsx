import React from 'react';
import { render } from '@testing-library/react';
import { FunnelTrapezoid, FunnelTrapezoidProps } from '../../src/util/FunnelUtils';
import { Coordinate, TrapezoidViewBox } from '../../src/util/types';

describe('funnelUtils', () => {
  const mockTooltipPosition: Coordinate = { x: 10, y: 10 };

  const viewBox: TrapezoidViewBox = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    width: 0,
    height: 0,
  };
  const mockProps: FunnelTrapezoidProps = {
    width: 100,
    upperWidth: 80,
    lowerWidth: 60,
    x: 11,
    y: 11,
    isActive: false,
    tooltipPosition: mockTooltipPosition,
    height: 0,
    name: '',
    option: undefined,
    labelViewBox: viewBox,
    parentViewBox: viewBox,
    val: 1,
    tooltipPayload: [],
  };

  it('<FunnelTrapezoid /> returns a trapezoid shape with no options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid {...mockProps} isActive={Boolean(true)} />
      </svg>,
    );
    expect(container.querySelector('g')).toHaveClass('recharts-active-shape');
  });

  it('<FunnelTrapezoid /> returns a trapezoid shape with x & y from options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid
          {...mockProps}
          width={100}
          tooltipPosition={mockTooltipPosition}
          option={{ x: 10, y: 10 }}
          isActive
          height={100}
          x={0}
          y={0}
          upperWidth={0}
          lowerWidth={0}
          name="my name"
        />
      </svg>,
    );
    expect(container.querySelector('g')).toHaveClass('recharts-active-shape');
  });
});
