import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PageData } from '../_data';
import { Pie, PieChart } from '../../src';
import { expectPieSectors } from '../helper/expectPieSectors';

/**
 * This is what we expect the final sector paths to be after the animation.
 */
const finalSectorPaths = [
  { d: 'M 86,50 A 36,36,0, 0,0, 68,18.82308546376021 L 50,50 Z' },
  { d: 'M 68,18.82308546376021 A 36,36,0, 0,0, 32.00000000000001,18.823085463760208 L 50,50 Z' },
  { d: 'M 32.00000000000001,18.823085463760208 A 36,36,0, 0,0, 14,49.99999999999999 L 50,50 Z' },
  { d: 'M 14,49.99999999999999 A 36,36,0, 0,0, 31.999999999999986,81.17691453623979 L 50,50 Z' },
  { d: 'M 31.999999999999986,81.17691453623979 A 36,36,0, 0,0, 68,81.17691453623979 L 50,50 Z' },
  { d: 'M 68,81.17691453623979 A 36,36,0, 0,0, 86,50.00000000000001 L 50,50 Z' },
];

describe('Pie animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={100} height={100}>
        <Pie
          data={PageData}
          dataKey="amt"
          isAnimationActive={false}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        />
        {children}
      </PieChart>
    ));

    it('should render sectors without animation', () => {
      const { container } = renderTestCase();

      expectPieSectors(container, finalSectorPaths);
    });

    it('should not call animation start or end callbacks', () => {
      renderTestCase();

      expect(onAnimationStart).not.toHaveBeenCalled();
      expect(onAnimationEnd).not.toHaveBeenCalled();
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={100} height={100}>
        <Pie
          data={PageData}
          dataKey="amt"
          isAnimationActive
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        />
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
      expect(onAnimationStart).not.toHaveBeenCalled();

      await animationManager.setAnimationProgress(0.1);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
      expect(onAnimationStart).toHaveBeenCalledWith();

      await animationManager.completeAnimation();
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
    });

    // It appears that Pie calls the onAnimationEnd callback too early and so this test fails.
    it.fails('should call onAnimationEnd callback when the animation ends', async () => {
      const { animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.9);
      expect(onAnimationEnd).not.toHaveBeenCalled();

      await animationManager.completeAnimation();
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledWith();
    });

    it('should render sectors with animation', () => {
      const { container } = renderTestCase();

      expectPieSectors(container, finalSectorPaths);
    });
  });
});
