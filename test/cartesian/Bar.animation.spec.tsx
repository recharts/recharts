import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { BarChart, Bar } from '../../src';
import { PageData } from '../_data';
import { expectBars, getAllBarPaths } from '../helper/expectBars';
import { assertNotNull } from '../helper/assertNotNull';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

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
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<{
  heights: ReadonlyArray<ReadonlyArray<string | null>>;
  yCoordinates: ReadonlyArray<ReadonlyArray<string | null>>;
  pathDs: ReadonlyArray<ReadonlyArray<string | null>>;
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

  const heightsDuringAnimation: (string | null)[][] = [];
  const yCoordinatesDuringAnimation: (string | null)[][] = [];
  const pathDsDuringAnimation: (string | null)[][] = [];
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

    it('should animate bars', async () => {
      const { container, animationManager } = renderTestCase();

      const { heights, yCoordinates, pathDs } = await expectBarHeightAnimation(container, animationManager, 5);

      expect(heights).toEqual([
        ['17.0229', '32.3931'],
        ['27.3446', '52.0344'],
        ['32.7704', '62.3594'],
        ['35.2995', '67.1719'],
        ['36', '68.505'],
      ]);
      expect(yCoordinates).toEqual([
        ['77.9771', '62.6069'],
        ['67.6554', '42.9656'],
        ['62.2296', '32.6406'],
        ['59.7005', '27.8281'],
        ['59', '26.495'],
      ]);
      expect(pathDs).toEqual([
        ['M 9.5,77.9771 h 36 v 17.0229 h -36 Z', 'M 54.5,62.6069 h 36 v 32.3931 h -36 Z'],
        ['M 9.5,67.6554 h 36 v 27.3446 h -36 Z', 'M 54.5,42.9656 h 36 v 52.0344 h -36 Z'],
        ['M 9.5,62.2296 h 36 v 32.7704 h -36 Z', 'M 54.5,32.6406 h 36 v 62.3594 h -36 Z'],
        ['M 9.5,59.7005 h 36 v 35.2995 h -36 Z', 'M 54.5,27.8281 h 36 v 67.1719 h -36 Z'],
        ['M 9.5,59 h 36 v 36 h -36 Z', 'M 54.5,26.495 h 36 v 68.505 h -36 Z'],
      ]);
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
        // The test begins initially with the 'pv' dataKey, so we need to run the animation to completion.
        await animationManager.completeAnimation();

        // change the dataKey prop
        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should animate bar heights', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
        expect(heights).toEqual([
          // the second bar is the same because the amt value in the data is the same
          ['72.8572', '67.819'],
          ['86.8013', '67.5595'],
          ['90', '67.5'],
        ]);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        // The test begins initially with the 'pv' dataKey, so we let the animation run half way
        await animationManager.setAnimationProgress(0.5);

        // change the dataKey prop
        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should animate the bar heights from the intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
        expect(heights).toEqual([
          ['70.5989', '63.5218'],
          ['86.3799', '66.7577'],
          ['90', '67.5'],
        ]);
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
      // The test begins initially with the 'pv' dataKey, so we need to run the animation to completion.
      await animationManager.completeAnimation();

      // change the dataKey prop
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      // now the chart is ready for assertions
    }

    it('should re-run the initial animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      expectBars(container, []);

      const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
      expect(heights).toEqual([
        ['61.4286', '46.0715'],
        ['84.6688', '63.5016'],
        ['90', '67.5'],
      ]);
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

      it('should animate from 2 to 10 bars', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
        expect(heights).toEqual([
          ['20.0163', '81.9476'],
          ['13.9692', '87.0334'],
          ['12.582', '88.2'],
        ]);
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

      it('should animate from 2 to 10 bars from the intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
        expect(heights).toEqual([
          ['17.758', '77.6504'],
          ['13.5478', '86.2315'],
          ['12.582', '88.2'],
        ]);
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

      expectBars(container, []);
    });

    it('should restart the animation from the beginning when the bar appears again', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.3);

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      expectBars(container, []);

      act(() => {
        button.click();
      });

      expectBars(container, []);

      const { heights } = await expectBarHeightAnimation(container, animationManager, 3);
      expect(heights).toEqual([
        ['24.5715', '46.7574'],
        ['33.8675', '64.4471'],
        ['36', '68.505'],
      ]);
    });
  });
});
