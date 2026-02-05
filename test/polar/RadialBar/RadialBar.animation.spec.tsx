import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { pageDataWithFillColor } from '../../../storybook/stories/data';
import { RadialBar, RadialBarChart } from '../../../src';
import { getRadialBarPaths } from '../../helper/expectRadialBars';
import { assertNotNull } from '../../helper/assertNotNull';
import { MockAnimationManager } from '../../animation/MockProgressAnimationManager';

const smallerData = pageDataWithFillColor.slice(0, 2);

function getRadialBarPathStrings(container: Element): ReadonlyArray<string> {
  return getRadialBarPaths(container).map(bar => bar.d);
}

async function expectAnimatedRadialBarPaths(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPaths = getRadialBarPathStrings(container);

  const pathsDuringAnimation: Array<ReadonlyArray<string>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPaths = getRadialBarPathStrings(container);
    pathsDuringAnimation.push(currentPaths);

    initialPaths.forEach((initial, index) => {
      expect(currentPaths[index]).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  const finalPaths = getRadialBarPathStrings(container);
  finalPaths.forEach((final, index) => {
    expect(final).not.toBe(initialPaths[index]);
  });

  pathsDuringAnimation.push(finalPaths);

  expect(pathsDuringAnimation).toHaveLength(steps);

  return pathsDuringAnimation;
}

describe('RadialBar animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={smallerData}>
        <RadialBar dataKey="uv" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should render all bars without animation', () => {
      const { container } = renderTestCase();
      const expected = [
        'M 269.8,200 A 69.8,69.8,0, 1,0, 269.8,200.0012 L 207.8,200.0001 A 7.8,7.8,0, 1,1, 207.8,200 Z',
        'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4481,320.5963 L 249.6038,270.0079 A 85.8,85.8,0, 1,1, 285.8,200 Z',
      ];
      expect(getRadialBarPathStrings(container)).toEqual(expected);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={smallerData}>
        <RadialBar dataKey="uv" isAnimationActive onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd} />
        {children}
      </RadialBarChart>
    ));

    it('should render paths with animation', async () => {
      const { container, animationManager } = renderTestCase();
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 131.2126,188.154 L 192.3132,198.6762 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 79.8649,113.9048 L 130.2598,150.0205 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 204.1953,269.6738 L 200.4688,207.7859 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 108.8263,316.3279 L 147.0723,267.53 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 259.0019,237.2936 L 206.5933,204.1675 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 220.3881,346.387 L 211.8356,284.9798 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.2789,208.5131 L 207.7418,200.9513 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 272.5059,328.7934 L 242.0907,274.7664 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.8,200.0012 L 207.8,200.0001 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4481,320.5963 L 249.6038,270.0079 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar dataKey={dataKey} isAnimationActive />
            {children}
          </RadialBarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should animate the bar paths', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 211.1934,268.8966 L 201.2508,207.6991 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 329.4877,271.2586 L 275.1694,241.3666 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 155.3695,253.6671 L 195.0126,205.9972 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 343.9262,233.6166 L 283.5512,219.5149 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 136.4884,228.9538 L 192.9027,203.2355 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.2586,212.6388 L 285.4857,207.337 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.8565,215.1162 L 192.3851,201.6892 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.7745,202.7448 L 285.7852,201.5934 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.0946,211.1396 L 192.3,201.2448 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.8,200.0026 L 285.8,200.0015 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });

  describe('when the RadialBar has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar key={dataKey} dataKey={dataKey} isAnimationActive />
            {children}
          </RadialBarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should re-run the initial animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 200.6617,130.2031 L 200.0739,192.2004 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 54.3441,174.9162 L 115.4447,185.4385 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 143.7475,158.6757 L 193.7139,195.3821 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 208.8834,347.5328 L 205.1569,285.6449 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 130.8439,190.5409 L 192.272,198.943 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 324.9354,278.9683 L 272.5267,245.8422 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 130.5216,206.6922 L 192.2359,200.7478 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 346.6966,218.0264 L 285.1595,210.4646 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.0946,211.1396 L 192.3,201.2448 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.8,200.0026 L 285.8,200.0015 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData;
    const data2 = pageDataWithFillColor.slice(3, 6);

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(data1);
      const changeData = () => setData(prevData => (prevData === data1 ? data2 : data1));
      return (
        <div>
          <button type="button" onClick={changeData}>
            Change data
          </button>
          <RadialBarChart width={400} height={400} data={data}>
            <RadialBar dataKey="uv" isAnimationActive />
            {children}
          </RadialBarChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should animate from 2 to 3 bars', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadialBarPaths(container, animationManager)).toEqual([
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 245.7405,206.4995 L 205.1483,200.7315 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 286.0331,247.345 L 250.113,227.5777 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 292.7254,81.8389 L 267.4142,114.0933 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 245.0175,210.3857 L 205.0669,201.169 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 295.6262,222.3353 L 255.7008,213.01 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 217.4385,50.8158 L 212.6784,91.5385 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.5049,212.3999 L 205.0092,201.3957 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 297.8403,208.3973 L 256.9905,204.8913 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 174.2586,52.0222 L 181.2852,92.4156 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.2351,213.3303 L 204.9788,201.5004 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 298.1831,201.8237 L 257.1901,201.0623 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 154.6455,56.8113 L 167.0259,95.8974 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.1569,213.5871 L 204.97,201.5293 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 298.2,200.0017 L 257.2,200.001 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 149.3428,58.6002 L 163.1707,97.198 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
      ]);
    });
  });

  describe('when the radial bar element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar dataKey="uv" isAnimationActive hide={!isVisible} />
            {children}
          </RadialBarChart>
        </div>
      );
    });

    it('should not crash when the bar hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getRadialBarPaths(container)).toHaveLength(0);
    });

    it('should restart the animation from the beginning when the bar appears again', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getRadialBarPaths(container)).toHaveLength(0);
      act(() => button.click());
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 131.2126,188.154 L 192.3132,198.6762 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 79.8649,113.9048 L 130.2598,150.0205 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 204.1953,269.6738 L 200.4688,207.7859 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 108.8263,316.3279 L 147.0723,267.53 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 259.0019,237.2936 L 206.5933,204.1675 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 220.3881,346.387 L 211.8356,284.9798 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.2789,208.5131 L 207.7418,200.9513 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 272.5059,328.7934 L 242.0907,274.7664 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.8,200.0012 L 207.8,200.0001 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4481,320.5963 L 249.6038,270.0079 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });
});
