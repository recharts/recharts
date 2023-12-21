import React from 'react';
import { render } from '@testing-library/react';
import { typeGuardTrapezoidProps, FunnelTrapezoid } from '../../src/util/FunnelUtils';

describe('funnelUtils', () => {
  const mockOptions = {
    x: 10,
    y: 10,
    height: 100,
  };
  const mockProps = {
    x: 11,
    y: 11,
    isActive: false,
  };
  it('typeGuardTrapezoidProps returns object from options + props', () => {
    const mockRes = {
      x: mockProps.x,
      y: mockProps.y,
      isActive: mockProps.isActive,
      height: mockOptions.height,
    };
    const res = typeGuardTrapezoidProps(mockOptions, mockProps);

    expect(res).toEqual(mockRes);
  });
  it('<FunnelTrapezoid /> returns a trapezoid shape with no options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid option={{}} {...mockProps} isActive={Boolean(true)} />
      </svg>,
    );
    expect(container.querySelector('g')).toHaveClass('recharts-active-shape');
  });
  it('<FunnelTrapezoid /> returns a trapezoid shape with x & y from options', () => {
    const { container } = render(
      <svg width={100} height={100}>
        <FunnelTrapezoid
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
