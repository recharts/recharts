import React, { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Pie, PieChart, Cell } from '../../../src';
import { selectPieSectors, getPieSectorAngles } from '../../helper/expectPieSectors';
import { assertNotNull } from '../../helper/assertNotNull';

describe('Pie paddingAngle animation', () => {
  /*
   * Regression test for https://github.com/recharts/recharts/issues/5307
   * When a segment's value changes to or from zero, its paddingAngle changes too
   * (segments with a value of zero get no leading padding). The animation used to apply
   * the new paddingAngle immediately on the first frame instead of interpolating it,
   * which threw off the position of every sector after it - including the closing gap
   * of the very last sector, wrapping back around to the first one.
   */
  const dataWithNonZeroMiddle = [
    { name: 'A', value: 40 },
    { name: 'Z', value: 10 },
    { name: 'B', value: 50 },
  ];
  const dataWithZeroMiddle = [
    { name: 'A', value: 40 },
    { name: 'Z', value: 0 },
    { name: 'B', value: 60 },
  ];

  const renderTestCase = createSelectorTestCase(({ children }) => {
    const [data, setData] = useState(dataWithNonZeroMiddle);
    const toggle = () => setData(prev => (prev === dataWithNonZeroMiddle ? dataWithZeroMiddle : dataWithNonZeroMiddle));
    return (
      <div>
        <button type="button" onClick={toggle}>
          toggle
        </button>
        <PieChart width={100} height={100}>
          <Pie data={data} dataKey="value" isAnimationActive paddingAngle={10}>
            {data.map(entry => (
              <Cell key={entry.name} />
            ))}
          </Pie>
          {children}
        </PieChart>
      </div>
    );
  });

  it('should keep the closing gap between the last and first sector stable while a middle value animates to zero', async () => {
    const { container, animationManager } = renderTestCase();
    await animationManager.completeAnimation();

    const button = container.querySelector('button');
    assertNotNull(button);
    act(() => {
      button.click();
    });

    const closingGaps: number[] = [];
    for (const progress of [0.1, 0.3, 0.5, 0.7, 0.9]) {
      // eslint-disable-next-line no-await-in-loop
      await animationManager.setAnimationProgress(progress);
      const angles = getPieSectorAngles(selectPieSectors(container));
      const lastSector = angles[angles.length - 1];
      closingGaps.push(360 - lastSector.endAngle);
    }
    await animationManager.completeAnimation();
    const finalAngles = getPieSectorAngles(selectPieSectors(container));
    closingGaps.push(360 - finalAngles[finalAngles.length - 1].endAngle);

    // The closing gap should stay close to the configured paddingAngle (10) throughout,
    // not collapse partway through the transition.
    closingGaps.forEach(gap => {
      expect(gap).toBeGreaterThan(9.9);
      expect(gap).toBeLessThanOrEqual(10);
    });
  });
});
