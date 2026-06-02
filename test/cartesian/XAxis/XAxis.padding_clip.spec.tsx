import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Bar, BarChart, XAxis, YAxis } from '../../../src';

describe('XAxis padding with allowDataOverflow', () => {
  it('should clip data reaching into the padding area when allowDataOverflow is true', () => {
    const { container } = render(
      <BarChart
        width={400}
        height={400}
        data={[
          { x: 0, y: 10 },
          { x: 100, y: 30 },
        ]}
      >
        <XAxis dataKey="x" type="number" domain={[0, 100]} allowDataOverflow padding={{ left: 10, right: 50 }} />
        <YAxis />
        <Bar dataKey="y" isAnimationActive={false} />
      </BarChart>,
    );

    const clipPathRect = container.querySelectorAll('clipPath rect');
    const itemClipPath = Array.from(clipPathRect).find(rect => rect.getAttribute('width') === '270');

    expect(itemClipPath).toBeDefined();
    expect(itemClipPath?.getAttribute('x')).toBe('75');
    expect(itemClipPath?.getAttribute('width')).toBe('270');
  });

  it('should not clip padding area when allowDataOverflow is false (default behavior)', () => {
    const { container } = render(
      <BarChart
        width={400}
        height={400}
        data={[
          { x: 0, y: 10 },
          { x: 100, y: 30 },
        ]}
      >
        <XAxis
          dataKey="x"
          type="number"
          domain={[0, 100]}
          allowDataOverflow={false}
          padding={{ left: 10, right: 50 }}
        />
        <YAxis />
        <Bar dataKey="y" isAnimationActive={false} />
      </BarChart>,
    );

    const clipPathRects = Array.from(container.querySelectorAll('clipPath rect'));
    const narrowClipPath = clipPathRects.find(rect => rect.getAttribute('width') === '270');

    expect(narrowClipPath).toBeUndefined();
  });
});
