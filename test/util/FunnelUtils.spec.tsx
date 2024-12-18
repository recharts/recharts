import React from 'react';
import { render } from '@testing-library/react';
import { typeGuardTrapezoidProps, FunnelTrapezoid } from '../../src/util/FunnelUtils';
import { Coordinate } from '../../src/util/types';
import { FunnelTrapezoidItem } from '../../src/cartesian/Funnel';
import { Props as TrapezoidProps } from '../../src/shape/Trapezoid';

describe('funnelUtils', () => {
  const mockTooltipPosition: Coordinate = { x: 10, y: 10 };
  const mockOptions = {
    x: 10,
    y: 10,
    height: 100,
  };
  const mockProps: FunnelTrapezoidItem = {
    x: 11,
    y: 11,
    isActive: false,
    tooltipPosition: undefined,
  };
  it('typeGuardTrapezoidProps returns object from options + props', () => {
    const mockRes: TrapezoidProps = {
      x: mockProps.x,
      y: mockProps.y,
      // @ts-expect-error the types do not match what the function is doing
      isActive: mockProps.isActive,
      height: mockOptions.height,
    };
    const res = typeGuardTrapezoidProps(mockOptions, mockProps);

    expect(res).toEqual(mockRes);
  });
  it('<FunnelTrapezoid /> returns a trapezoid shape with no options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid tooltipPosition={mockTooltipPosition} option={{}} {...mockProps} isActive={Boolean(true)} />
      </svg>,
    );
    expect(container.querySelector('g')).toHaveClass('recharts-active-shape');
  });
  it('<FunnelTrapezoid /> returns a trapezoid shape with x & y from options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid
          tooltipPosition={mockTooltipPosition}
          option={{ x: 10, y: 10 }}
          {...{
            isActive: true,
            height: 100,
          }}
          isActive={Boolean(true)}
        />
      </svg>,
    );
    expect(container.querySelector('g')).toHaveClass('recharts-active-shape');
  });
});
