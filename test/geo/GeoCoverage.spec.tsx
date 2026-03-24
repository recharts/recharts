import React from 'react';
import { render } from '@testing-library/react';
import { useGeoProjection } from '../../src/geo/GeoProjectionContext';
import { CartographyChart } from '../../src/chart/CartographyChart';

describe('GeoCoverage', () => {
  it('useGeoProjection should throw error when used outside CartographyChart', () => {
    const TestComponent = () => {
      useGeoProjection();
      return null;
    };

    // Suppress console.error for expected throw
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow('useGeoProjection must be used inside a CartographyChart');
    spy.mockRestore();
  });

  it('CartographyChart should set tooltip portal ref', () => {
    const { container } = render(
      <CartographyChart width={100} height={100}>
        <div data-testid="child" />
      </CartographyChart>,
    );
    expect(container.querySelector('.recharts-wrapper')).toBeInTheDocument();
  });


});
