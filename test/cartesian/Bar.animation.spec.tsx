import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { BarChart, Bar } from '../../src';
import { PageData } from '../_data';
import { getAllBarPaths } from '../helper/expectBars';
import { assertNotNull } from '../helper/assertNotNull';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

const smallerData = PageData.slice(0, 2);

/**
 * Helper: parse a numeric attribute from an SVG element, returning 0 if missing.
 */
function numAttr(el: Element, attr: string): number {
  return Number(el.getAttribute(attr)) || 0;
}

/**
 * Collect numeric heights from all bar paths in the container.
 */
function getBarHeights(container: Element): number[] {
  return Array.from(getAllBarPaths(container)).map(bar => numAttr(bar, 'height'));
}

function getBarYCoords(container: Element): number[] {
  return Array.from(getAllBarPaths(container)).map(bar => numAttr(bar, 'y'));
}

/**
 * Run the animation and assert behavioral properties at each step:
 * - Bar count stays constant
 * - Non-animated attributes (x, width, radius) remain stable
 *
 * When `expectMonotonicGrowth` is true (default — for initial animations from zero),
 * also asserts heights grow and y-coords shrink monotonically at each step.
 * Set to false for data transitions where bars may shrink.
 *
 * Returns the heights at each animation step for further behavioral assertions.
 */
async function runAnimationAndAssertBehavior(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
  expectMonotonicGrowth: boolean = true,
): Promise<{ heightsPerStep: number[][]; yPerStep: number[][] }> {
  assertNotNull(container);

  // Start at 0.1 (bars at 0% progress do not render at all)
  let progress = 0.1;
  await animationManager.setAnimationProgress(progress);

  const initialPaths = getAllBarPaths(container);
  const barCount = initialPaths.length;
  expect(barCount).toBeGreaterThan(0);

  // Record initial non-animated attributes for stability checks
  const stableAttrs = Array.from(initialPaths).map(bar => ({
    x: bar.getAttribute('x'),
    width: bar.getAttribute('width'),
    radius: bar.getAttribute('radius'),
  }));

  const heightsPerStep: number[][] = [getBarHeights(container)];
  const yPerStep: number[][] = [getBarYCoords(container)];

  const stepSize = (1 - progress) / steps;

  for (let i = 1; i < steps; i++) {
    progress += stepSize;
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(progress);

    const paths = getAllBarPaths(container);
    expect(paths).toHaveLength(barCount);

    // Non-animated attributes must be stable throughout animation
    Array.from(paths).forEach((bar, idx) => {
      expect(bar.getAttribute('x')).toBe(stableAttrs[idx].x);
      expect(bar.getAttribute('width')).toBe(stableAttrs[idx].width);
      expect(bar.getAttribute('radius')).toBe(stableAttrs[idx].radius);
    });

    const currentHeights = getBarHeights(container);
    const currentYs = getBarYCoords(container);

    if (expectMonotonicGrowth) {
      // For initial animations from zero: heights grow, y-coords shrink
      const prevHeights = heightsPerStep[heightsPerStep.length - 1];
      currentHeights.forEach((h, idx) => {
        expect(h).toBeGreaterThanOrEqual(prevHeights[idx]);
      });
      const prevYs = yPerStep[yPerStep.length - 1];
      currentYs.forEach((y, idx) => {
        expect(y).toBeLessThanOrEqual(prevYs[idx]);
      });
    }

    heightsPerStep.push(currentHeights);
    yPerStep.push(currentYs);
  }

  // Complete the animation
  await animationManager.completeAnimation();
  const finalPaths = getAllBarPaths(container);
  expect(finalPaths).toHaveLength(barCount);

  heightsPerStep.push(getBarHeights(container));
  yPerStep.push(getBarYCoords(container));

  return { heightsPerStep, yPerStep };
}

describe('Bar animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  beforeEach(() => {
    mockSequenceOfGetBoundingClientRect([
      { width: 0, height: 0, left: 0, top: 50 },
      { width: 50, height: 50, left: 0, top: 50 },
    ]);
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={100} height={100} data={smallerData}>
        <Bar
          dataKey="pv"
          isAnimationActive={false}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        />
        {children}
      </BarChart>
    ));

    it('should render all bars immediately with positive dimensions', () => {
      const { container } = renderTestCase();
      const bars = getAllBarPaths(container);
      expect(bars).toHaveLength(2);

      const heights = getBarHeights(container);
      heights.forEach(h => expect(h).toBeGreaterThan(0));

      // Second data point (pv=4567) should produce a taller bar than first (pv=2400)
      expect(heights[1]).toBeGreaterThan(heights[0]);
    });

    it('should render bars proportional to data values', () => {
      const { container } = renderTestCase();
      const heights = getBarHeights(container);

      // pv values: 2400, 4567 — ratio should be approximately preserved
      const ratio = heights[1] / heights[0];
      const expectedRatio = 4567 / 2400;
      expect(ratio).toBeCloseTo(expectedRatio, 0);
    });

    it('should not call animation start or end callbacks', () => {
      renderTestCase();

      expect(onAnimationStart).not.toHaveBeenCalled();
      expect(onAnimationEnd).not.toHaveBeenCalled();
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={100} height={100} data={smallerData}>
        <Bar dataKey="pv" onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd} />
        {children}
      </BarChart>
    ));

    it('should first render with no bars at all', () => {
      const { container } = renderTestCase();
      const bars = getAllBarPaths(container);
      expect(bars).toHaveLength(0);
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

    it('should call onAnimationEnd callback when the animation ends', async () => {
      const { animationManager } = renderTestCase();

      expect(onAnimationEnd).not.toHaveBeenCalled();
      await animationManager.setAnimationProgress(0.9);
      expect(onAnimationEnd).not.toHaveBeenCalled();

      await animationManager.completeAnimation();
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledWith();
    });

    it('should animate bars with monotonically increasing heights', async () => {
      const { container, animationManager } = renderTestCase();
      const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 5);

      // Verify final heights preserve data proportionality (pv: 2400, 4567)
      const finalHeights = heightsPerStep[heightsPerStep.length - 1];
      expect(finalHeights[1]).toBeGreaterThan(finalHeights[0]);
      const ratio = finalHeights[1] / finalHeights[0];
      expect(ratio).toBeCloseTo(4567 / 2400, 0);
    });

    it('should have larger heights at end than at start of animation', async () => {
      const { container, animationManager } = renderTestCase();
      const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 5);

      const firstHeights = heightsPerStep[0];
      const lastHeights = heightsPerStep[heightsPerStep.length - 1];

      firstHeights.forEach((h, idx) => {
        expect(lastHeights[idx]).toBeGreaterThan(h);
      });
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('pv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'pv' ? 'uv' : 'pv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <BarChart width={100} height={100} data={smallerData}>
            <Bar
              dataKey={dataKey}
              isAnimationActive
              onAnimationStart={onAnimationStart}
              onAnimationEnd={onAnimationEnd}
            />
            {children}
          </BarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('interaction after initial animation completes', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        await animationManager.completeAnimation();

        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });
      }

      it('should animate to new data values after dataKey change', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        // Transition animation — bars may grow or shrink, so disable monotonic check
        const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3, false);

        // After switching to 'uv' (400, 300), bar 0 should be taller than bar 1
        const finalHeights = heightsPerStep[heightsPerStep.length - 1];
        expect(finalHeights[0]).toBeGreaterThan(finalHeights[1]);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        await animationManager.setAnimationProgress(0.5);

        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });
      }

      it('should animate to new data values from intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3, false);

        // After switching to 'uv' (400, 300), final: bar 0 > bar 1
        const finalHeights = heightsPerStep[heightsPerStep.length - 1];
        expect(finalHeights[0]).toBeGreaterThan(finalHeights[1]);
      });
    });
  });

  describe('when the Bar has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('pv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'pv' ? 'uv' : 'pv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <BarChart width={100} height={100} data={smallerData}>
            <Bar
              key={dataKey}
              dataKey={dataKey}
              isAnimationActive
              onAnimationStart={onAnimationStart}
              onAnimationEnd={onAnimationEnd}
            />
            {children}
          </BarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      await animationManager.completeAnimation();

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });
    }

    it('should re-run the initial animation from the beginning (no bars visible)', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      // Because key changed, React unmounts + remounts — bars start from zero
      const bars = getAllBarPaths(container);
      expect(bars).toHaveLength(0);
    });

    it('should animate to correct final proportions after key change', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3);

      // Switched to 'uv' (400, 300): bar 0 should be taller
      const finalHeights = heightsPerStep[heightsPerStep.length - 1];
      expect(finalHeights[0]).toBeGreaterThan(finalHeights[1]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData;
    const data2 = PageData.slice(2, 4);

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(data1);
      const changeData = () => {
        setData(prevData => (prevData === data1 ? data2 : data1));
      };
      return (
        <div>
          <button type="button" onClick={changeData}>
            Change data
          </button>
          <BarChart width={100} height={100} data={data}>
            <Bar dataKey="pv" isAnimationActive />
            {children}
          </BarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('interaction after initial animation completes', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        await animationManager.completeAnimation();

        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });
      }

      it('should animate to new data proportions', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        // Data transition — bars may grow or shrink
        const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3, false);

        // data2 pv values: Page C = 1398, Page D = 9800
        // bar 1 (9800) should be much taller than bar 0 (1398)
        const finalHeights = heightsPerStep[heightsPerStep.length - 1];
        expect(finalHeights[1]).toBeGreaterThan(finalHeights[0]);
        const ratio = finalHeights[1] / finalHeights[0];
        expect(ratio).toBeCloseTo(9800 / 1398, 0);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        await animationManager.setAnimationProgress(0.5);

        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });
      }

      it('should animate to new data proportions from intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        // Data transition from intermediate state
        const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3, false);

        // Same final state: bar 1 (pv=9800) > bar 0 (pv=1398)
        const finalHeights = heightsPerStep[heightsPerStep.length - 1];
        expect(finalHeights[1]).toBeGreaterThan(finalHeights[0]);
      });
    });
  });

  describe('when the bar element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => {
        setIsVisible(prev => !prev);
      };
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <BarChart width={100} height={100} data={smallerData}>
            <Bar dataKey="pv" isAnimationActive hide={!isVisible} />
            {children}
          </BarChart>
        </div>
      );
    });

    it('should not crash when the bar hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.3);

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      const bars = getAllBarPaths(container);
      expect(bars).toHaveLength(0);
    });

    it('should restart the animation from the beginning when the bar appears again', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.3);

      const button = container.querySelector('button');
      assertNotNull(button);
      // Hide
      act(() => {
        button.click();
      });
      expect(getAllBarPaths(container)).toHaveLength(0);

      // Show again
      act(() => {
        button.click();
      });
      expect(getAllBarPaths(container)).toHaveLength(0); // Animation restarts from 0

      const { heightsPerStep } = await runAnimationAndAssertBehavior(container, animationManager, 3);

      // Should end at correct proportions (pv: 2400, 4567)
      const finalHeights = heightsPerStep[heightsPerStep.length - 1];
      expect(finalHeights[1]).toBeGreaterThan(finalHeights[0]);
    });
  });
});
