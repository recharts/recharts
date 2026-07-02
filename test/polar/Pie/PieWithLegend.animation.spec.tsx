import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Legend, Pie, PieChart } from '../../../src';
import { expectPieSectors } from '../../helper/expectPieSectors';
import { PageData } from '../../_data';
import { expectAnimatedPiePaths } from '../../helper/expectAnimatedPiePaths';
import { expectAnimatedPieAngles } from '../../helper/expectAnimatedPieAngles';

const smallerData = PageData.slice(0, 3);

describe('initial animation when the chart has Legend in it (https://github.com/recharts/recharts/issues/7254)', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <PieChart width={100} height={100}>
      <Pie
        data={smallerData}
        dataKey="amt"
        isAnimationActive
        onAnimationStart={onAnimationStart}
        onAnimationEnd={onAnimationEnd}
      />
      <Legend />
      {children}
    </PieChart>
  ));

  it('should first render nothing', () => {
    const { container } = renderTestCase();

    // Initially, no sectors should be rendered
    expectPieSectors(container, []);
  });

  it('should call onAnimationStart callback when the animation begins', async () => {
    const { animationManager } = renderTestCase();
    expect(onAnimationStart).toHaveBeenCalledTimes(1);

    await animationManager.setAnimationProgress(0.1);
    expect(onAnimationStart).toHaveBeenCalledTimes(1);
    expect(onAnimationStart).toHaveBeenCalledWith();

    await animationManager.completeAnimation();
    expect(onAnimationStart).toHaveBeenCalledTimes(1);
  });

  it('should call onAnimationEnd callback when the animation ends', async () => {
    const { animationManager } = renderTestCase();

    expect(onAnimationEnd).not.toHaveBeenCalled();
    await animationManager.setAnimationProgress(0.9);
    expect(onAnimationEnd).not.toHaveBeenCalled();

    await animationManager.completeAnimation();
    expect(onAnimationEnd).toHaveBeenCalledTimes(1);
    expect(onAnimationEnd).toHaveBeenCalledWith();
  });

  it('should render sectors with animation', async () => {
    const { container, animationManager } = renderTestCase();

    const pathDs = await expectAnimatedPiePaths(container, animationManager, 5);

    expect(pathDs).toEqual([
      [
        'M 86,50 A 36,36,0, 0,0, 69.7423,19.8961 L 50,50 Z',
        'M 69.7423,19.8961 A 36,36,0, 0,0, 35.6532,16.9823 L 50,50 Z',
        'M 35.6532,16.9823 A 36,36,0, 0,0, 14.5223,43.8902 L 50,50 Z',
      ],
      [
        'M 86,50 A 36,36,0, 0,0, 49.2784,14.0072 L 50,50 Z',
        'M 49.2784,14.0072 A 36,36,0, 0,0, 14.0289,51.443 L 50,50 Z',
        'M 14.0289,51.443 A 36,36,0, 0,0, 52.1638,85.9349 L 50,50 Z',
      ],
      [
        'M 86,50 A 36,36,0, 0,0, 38.1402,16.0096 L 50,50 Z',
        'M 38.1402,16.0096 A 36,36,0, 0,0, 21.8141,72.3955 L 50,50 Z',
        'M 21.8141,72.3955 A 36,36,0, 0,0, 80.4308,69.2345 L 50,50 Z',
      ],
      [
        'M 86,50 A 36,36,0, 0,0, 33.2853,18.1156 L 50,50 Z',
        'M 33.2853,18.1156 A 36,36,0, 0,0, 29.5212,79.6078 L 50,50 Z',
        'M 29.5212,79.6078 A 36,36,0, 0,0, 85.7312,54.3908 L 50,50 Z',
      ],
      [
        'M 86,50 A 36,36,0, 0,0, 32,18.8231 L 50,50 Z',
        'M 32,18.8231 A 36,36,0, 0,0, 32,81.1769 L 50,50 Z',
        'M 32,81.1769 A 36,36,0, 0,0, 86,50 L 50,50 Z',
      ],
    ]);
  });

  it('should render sectors with animated angles', async () => {
    const { container, animationManager } = renderTestCase();

    const angles = await expectAnimatedPieAngles(container, animationManager, 4);

    expect(angles).toEqual([
      [
        { endAngle: 67.2973, startAngle: 0 },
        { endAngle: 134.5946, startAngle: 67.2973 },
        { endAngle: 201.8918, startAngle: 134.5946 },
      ],
      [
        { endAngle: 101.7302, startAngle: 0 },
        { endAngle: 203.4603, startAngle: 101.7302 },
        { endAngle: 305.1906, startAngle: 203.4603 },
      ],
      [
        { endAngle: 116.2289, startAngle: 0 },
        { endAngle: 232.4579, startAngle: 116.2289 },
        { endAngle: 348.6866, startAngle: 232.4579 },
      ],
      [
        { endAngle: 120, startAngle: 0 },
        { endAngle: 240, startAngle: 120 },
        { endAngle: 0, startAngle: 240 },
      ],
    ]);
  });
});
