import React from 'react';
import { describe, expect, it } from 'vitest';
import { Pie, PieChart } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';

describe('numeric id data key labels', () => {
  it('keeps numeric id labels without leaking ids onto DOM elements', () => {
    const { container } = rechartsTestRender(
      <PieChart width={400} height={400}>
        <Pie data={[{ id: 10 }, { id: 20 }]} dataKey="id" label isAnimationActive={false} />
      </PieChart>,
    );
    expect(Array.from(container.querySelectorAll('.recharts-pie-label-text')).map(x => x.textContent)).toEqual([
      '10',
      '20',
    ]);
    expect(container.querySelector('[id="10"], [id="20"]')).toBeNull();
  });
});
