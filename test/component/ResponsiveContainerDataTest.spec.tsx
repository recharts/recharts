import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ResponsiveContainer, BarChart, Bar } from '../../src';

describe('ResponsiveContainer Data Attributes', () => {
  test('should pass down data-testid to the root div', () => {
    const { container } = render(
      <ResponsiveContainer data-testid="my-container" initialDimension={{ width: 100, height: 100 }}>
        <BarChart width={100} height={100} data={[]}>
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>,
    );

    const div = container.querySelector('[data-testid="my-container"]');
    expect(div).not.toBeNull();
  });
});
