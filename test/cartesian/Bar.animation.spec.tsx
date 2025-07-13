import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { BarChart, Bar } from '../../src';
import { PageData } from '../_data';
import { expectBars, getAllBarPaths } from '../helper/expectBars';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertNotNull } from '../helper/assertNotNull';

const smallerData = PageData.slice(0, 2);

/**
 * This function will run the animation and make some basic assertions.
 * It will assert that:
 * - all bar attributes _except_ height+y+d will remain the same throughout the animation
 * - on contrary the height+y+d of each bar will change in every animation step
 *
 * This function will also collect all heights of all bars during the animation and return them.
 * @param container root of the chart
 * @param animationManager mock animation manager
 * @param steps number of animation steps to run
 * @returns 2d array: first level are animation steps, second level is the heights and y-coordinates and path.d-s of all bars at that step
 */
async function expectBarHeightAnimation(
  container: Element,
  animationManager: MockProgressAnimationManager,
  steps: number = 5,
): Promise<{
  heights: ReadonlyArray<ReadonlyArray<string>>;
  yCoordinates: ReadonlyArray<ReadonlyArray<string>>;
  pathDs: ReadonlyArray<ReadonlyArray<string>>;
}> {
  assertNotNull(container);
  /*
   * Bars at 0% progress do not render at all, so we
   * start from 0.1 so that the bars have rendered a little bit.
   */
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialBarPaths = getAllBarPaths(container);
  const initialHeights = Array.from(initialBarPaths).map(bar => bar.getAttribute('height'));
  const initialYCoordinates = Array.from(initialBarPaths).map(bar => bar.getAttribute('y'));
  const initialPathDs = Array.from(initialBarPaths).map(bar => bar.getAttribute('d'));
  const initialAttributes = Array.from(initialBarPaths).map(bar => ({
    x: bar.getAttribute('x'),
    width: bar.getAttribute('width'),
    radius: bar.getAttribute('radius'),
  }));

  const heightsDuringAnimation: string[][] = [];
  const yCoordinatesDuringAnimation: string[][] = [];
  const pathDsDuringAnimation: string[][] = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentBarPaths = getAllBarPaths(container);
    const currentHeights = Array.from(currentBarPaths).map(bar => bar.getAttribute('height'));
    heightsDuringAnimation.push(currentHeights);
    const currentYCoordinates = Array.from(currentBarPaths).map(bar => bar.getAttribute('y'));
    yCoordinatesDuringAnimation.push(currentYCoordinates);
    const currentPathDs = Array.from(currentBarPaths).map(bar => bar.getAttribute('d'));
    pathDsDuringAnimation.push(currentPathDs);

    // Assert that all attributes except height remain the same
    initialAttributes.forEach((initial, index) => {
      const currentBar = currentBarPaths[index];
      expect(currentBar.getAttribute('x')).toBe(initial.x);
      expect(currentBar.getAttribute('width')).toBe(initial.width);
      expect(currentBar.getAttribute('radius')).toBe(initial.radius);
      // height and y and d should change
      expect(currentBar.getAttribute('height')).not.toBe(initialHeights[index]);
      expect(currentBar.getAttribute('y')).not.toBe(initialYCoordinates[index]);
      expect(currentBar.getAttribute('d')).not.toBe(initialPathDs[index]);
    });
  }

  await animationManager.completeAnimation();
  // Final check to ensure the animation completed
  const finalBarPaths = getAllBarPaths(container);
  expect(finalBarPaths).toHaveLength(initialBarPaths.length);
  finalBarPaths.forEach((bar, index) => {
    expect(bar.getAttribute('x')).toBe(initialAttributes[index].x);
    expect(bar.getAttribute('width')).toBe(initialAttributes[index].width);
    expect(bar.getAttribute('radius')).toBe(initialAttributes[index].radius);
    expect(bar.getAttribute('height')).not.toBe(initialHeights[index]);
    expect(bar.getAttribute('y')).not.toBe(initialYCoordinates[index]);
    expect(bar.getAttribute('d')).not.toBe(initialPathDs[index]);
  });

  // collect the heights, y-coordinates and path.d-s one last time, at the end of the animation
  const finalHeights = Array.from(finalBarPaths).map(bar => bar.getAttribute('height'));
  const finalYCoordinates = Array.from(finalBarPaths).map(bar => bar.getAttribute('y'));
  const finalPathDs = Array.from(finalBarPaths).map(bar => bar.getAttribute('d'));
  heightsDuringAnimation.push(finalHeights);
  yCoordinatesDuringAnimation.push(finalYCoordinates);
  pathDsDuringAnimation.push(finalPathDs);

  // Return the collected heights, y-coordinates and path.d-s
  expect(heightsDuringAnimation).toHaveLength(steps);
  expect(yCoordinatesDuringAnimation).toHaveLength(steps);
  expect(pathDsDuringAnimation).toHaveLength(steps);

  return { heights: heightsDuringAnimation, yCoordinates: yCoordinatesDuringAnimation, pathDs: pathDsDuringAnimation };
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

    it('should render without animation', () => {
      const { container } = renderTestCase();
      expectBars(container, [
        {
          d: 'M 9.5,59 h 36 v 36 h -36 Z',
          height: '36',
          radius: '0',
          width: '36',
          x: '9.5',
          y: '59',
        },
        {
          d: 'M 54.5,26.495 h 36 v 68.505 h -36 Z',
          height: '68.505',
          radius: '0',
          width: '36',
          x: '54.5',
          y: '26.495',
        },
      ]);
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
      expectBars(container, []);
    });

    it('should call onAnimationStart callback when the animation begins', async () => {
      const { animationManager } = renderTestCase();
      expect(onAnimationStart).not.toHaveBeenCalled();

      await animationManager.setAnimationProgress(0.1);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
      expect(onAnimationStart).toHaveBeenCalledWith();

      await animationManager.completeAnimation();
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should call onAnimationEnd callback when the animation ends', async () => {
      const { animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.9);
      expect(onAnimationEnd).not.toHaveBeenCalled();

      await animationManager.completeAnimation();
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledWith();
    });

    it('should animate bars', async () => {
      const { container, animationManager } = renderTestCase();

      const { heights, yCoordinates, pathDs } = await expectBarHeightAnimation(container, animationManager, 5);

      expect(heights).toEqual([
        ['17.02287616172437', '32.39311476274799'],
        ['27.344576211522934', '52.03444981584385'],
        ['32.77040605655337', '62.35935185844968'],
        ['35.299452451475574', '67.1719163941204'],
        ['36', '68.505'],
      ]);
      expect(yCoordinates).toEqual([
        ['77.97712383827563', '62.60688523725201'],
        ['67.65542378847707', '42.96555018415615'],
        ['62.22959394344663', '32.64064814155032'],
        ['59.700547548524426', '27.8280836058796'],
        ['59', '26.495'],
      ]);
      expect(pathDs).toEqual([
        [
          'M 9.5,77.97712383827563 h 36 v 17.02287616172437 h -36 Z',
          'M 54.5,62.60688523725201 h 36 v 32.39311476274799 h -36 Z',
        ],
        [
          'M 9.5,67.65542378847707 h 36 v 27.344576211522934 h -36 Z',
          'M 54.5,42.96555018415615 h 36 v 52.03444981584385 h -36 Z',
        ],
        [
          'M 9.5,62.22959394344663 h 36 v 32.77040605655337 h -36 Z',
          'M 54.5,32.64064814155032 h 36 v 62.35935185844968 h -36 Z',
        ],
        [
          'M 9.5,59.700547548524426 h 36 v 35.299452451475574 h -36 Z',
          'M 54.5,27.8280836058796 h 36 v 67.1719163941204 h -36 Z',
        ],
        ['M 9.5,59 h 36 v 36 h -36 Z', 'M 54.5,26.495 h 36 v 68.505 h -36 Z'],
      ]);
    });
  });
});
