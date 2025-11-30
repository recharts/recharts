import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Funnel, FunnelChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { PageData } from '../_data';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

const smallerData = PageData.slice(0, 2);

function getFunnelPaths(container: Element): ReadonlyArray<SVGPathElement> {
  return Array.from(container.querySelectorAll('.recharts-funnel-trapezoid path'));
}

function getFunnelPathStrings(container: Element): ReadonlyArray<string | null> {
  return getFunnelPaths(container).map(path => path.getAttribute('d'));
}

async function expectAnimatedFunnelPaths(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string | null>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPaths = getFunnelPathStrings(container);

  const pathsDuringAnimation: Array<ReadonlyArray<string | null>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPaths = getFunnelPathStrings(container);
    pathsDuringAnimation.push(currentPaths);

    initialPaths.forEach((initial, index) => {
      expect(currentPaths[index]).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  const finalPaths = getFunnelPathStrings(container);
  finalPaths.forEach((final, index) => {
    expect(final).not.toBe(initialPaths[index]);
  });

  pathsDuringAnimation.push(finalPaths);

  expect(pathsDuringAnimation).toHaveLength(steps);

  return pathsDuringAnimation;
}

describe('Funnel animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <FunnelChart width={500} height={300}>
        <Funnel data={smallerData} dataKey="uv" isAnimationActive={false} />
        {children}
      </FunnelChart>
    ));

    it('should render all trapezoids without animation', () => {
      const { container } = renderTestCase();
      const expected = [
        'M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z',
        'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z',
      ];
      expect(getFunnelPathStrings(container)).toEqual(expected);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <FunnelChart width={500} height={300}>
        <Funnel
          data={smallerData}
          dataKey="uv"
          isAnimationActive
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        />
        {children}
      </FunnelChart>
    ));

    it('should render paths with animation', async () => {
      const { container, animationManager } = renderTestCase();
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 134.1499,43.2178L 365.8502,43.2178L 336.8877,111.7822L 163.1125,111.7822L 134.1499,43.2178 Z',
          'M 163.1124,188.2178L 336.8876,188.2178L 250,256.7822L 250,256.7822L 163.1124,188.2178 Z',
        ],
        [
          'M 63.905,22.4311L 436.0951,22.4311L 389.5713,132.569L 110.4288,132.569L 63.905,22.4311 Z',
          'M 110.4287,167.4311L 389.5712,167.4311L 250,277.569L 250,277.569L 110.4287,167.4311 Z',
        ],
        [
          'M 26.9792,11.504L 473.0208,11.504L 417.2656,143.4959L 82.7344,143.4959L 26.9792,11.504 Z',
          'M 82.7344,156.504L 417.2656,156.504L 250,288.4959L 250,288.4959L 82.7344,156.504 Z',
        ],
        [
          'M 9.7676,6.4108L 490.2324,6.4108L 430.1743,148.5892L 69.8257,148.5892L 9.7676,6.4108 Z',
          'M 69.8257,151.4108L 430.1743,151.4108L 250,293.5892L 250,293.5892L 69.8257,151.4108 Z',
        ],
        ['M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z', 'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z'],
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
          <FunnelChart width={500} height={300}>
            <Funnel data={smallerData} dataKey={dataKey} isAnimationActive />
            {children}
          </FunnelChart>
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

    it('should animate the trapezoid paths', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 59.9698,5L 440.0301,5L 462.7125,150L 37.2874,150L 59.9698,5 Z',
          'M 37.2875,150L 462.7126,150L 250.0001,295L 250.0001,295L 37.2875,150 Z',
        ],
        [
          'M 93.3004,5L 406.6996,5L 480.2738,150L 19.7263,150L 93.3004,5 Z',
          'M 19.7262,150L 480.2737,150L 250,295L 250,295L 19.7262,150 Z',
        ],
        [
          'M 110.8214,5L 389.1787,5L 489.5053,150L 10.4948,150L 110.8214,5 Z',
          'M 10.4948,150L 489.5052,150L 250,295L 250,295L 10.4948,150 Z',
        ],
        [
          'M 118.9881,5L 381.0119,5L 493.8081,150L 6.1919,150L 118.9881,5 Z',
          'M 6.1919,150L 493.8081,150L 250,295L 250,295L 6.1919,150 Z',
        ],
        ['M 121.2503,5L 378.7497,5L 495,150L 5,150L 121.2503,5 Z', 'M 5,150L 495,150L 250,295L 250,295L 5,150 Z'],
      ]);
    });
  });

  describe('when the Funnel has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel key={dataKey} data={smallerData} dataKey={dataKey} isAnimationActive />
            {children}
          </FunnelChart>
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
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 189.1197,43.2178L 310.8803,43.2178L 365.8502,111.7822L 134.1498,111.7822L 189.1197,43.2178 Z',
          'M 134.1499,188.2178L 365.8502,188.2178L 250.0001,256.7822L 250.0001,256.7822L 134.1499,188.2178 Z',
        ],
        [
          'M 152.2054,22.4311L 347.7947,22.4311L 436.0951,132.569L 63.905,132.569L 152.2054,22.4311 Z',
          'M 63.905,167.4311L 436.0951,167.4311L 250.0001,277.569L 250.0001,277.569L 63.905,167.4311 Z',
        ],
        [
          'M 132.8005,11.504L 367.1994,11.504L 473.0208,143.4959L 26.9791,143.4959L 132.8005,11.504 Z',
          'M 26.9792,156.504L 473.0208,156.504L 250,288.4959L 250,288.4959L 26.9792,156.504 Z',
        ],
        [
          'M 123.7557,6.4108L 376.2443,6.4108L 490.2324,148.5892L 9.7676,148.5892L 123.7557,6.4108 Z',
          'M 9.7676,151.4108L 490.2324,151.4108L 250,293.5892L 250,293.5892L 9.7676,151.4108 Z',
        ],
        ['M 121.2503,5L 378.7497,5L 495,150L 5,150L 121.2503,5 Z', 'M 5,150L 495,150L 250,295L 250,295L 5,150 Z'],
      ]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData;
    const data2 = PageData.slice(3, 6);

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(data1);
      const changeData = () => setData(prevData => (prevData === data1 ? data2 : data1));
      return (
        <div>
          <button type="button" onClick={changeData}>
            Change data
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel data={data} dataKey="uv" isAnimationActive />
            {children}
          </FunnelChart>
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

    it('should animate from 2 to 3 trapezoids', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedFunnelPaths(container, animationManager)).toEqual([
        [
          'M 37.5047,5L 462.4953,5L 462.7126,127.1452L 37.2874,127.1452L 37.5047,5 Z',
          'M 37.2875,127.1452L 462.7126,127.1452L 328.7615,249.2904L 171.2387,249.2904L 37.2875,127.1452 Z',
          'M 171.2386,223.8119L 328.7614,223.8119L 250,269.5215L 250,269.5215L 171.2386,223.8119 Z',
        ],
        [
          'M 57.2137,5L 442.7863,5L 480.2738,113.2874L 19.7263,113.2874L 57.2137,5 Z',
          'M 19.7262,113.2874L 480.2737,113.2874L 376.5178,221.5748L 123.4821,221.5748L 19.7262,113.2874 Z',
          'M 123.4822,209.954L 376.5179,209.954L 250.0001,283.3793L 250.0001,283.3793L 123.4822,209.954 Z',
        ],
        [
          'M 67.5742,5L 432.4258,5L 489.5052,106.0027L 10.4948,106.0027L 67.5742,5 Z',
          'M 10.4948,106.0027L 489.5052,106.0027L 401.6221,207.0054L 98.378,207.0054L 10.4948,106.0027 Z',
          'M 98.3779,202.6694L 401.622,202.6694L 250,290.664L 250,290.664L 98.3779,202.6694 Z',
        ],
        [
          'M 72.4033,5L 427.5966,5L 493.8081,102.6072L 6.1918,102.6072L 72.4033,5 Z',
          'M 6.1919,102.6072L 493.8081,102.6072L 413.3235,200.2144L 86.6765,200.2144L 6.1919,102.6072 Z',
          'M 86.6765,199.2739L 413.3234,199.2739L 250,294.0595L 250,294.0595L 86.6765,199.2739 Z',
        ],
        [
          'M 73.741,5L 426.259,5L 495,101.6667L 5,101.6667L 73.741,5 Z',
          'M 5,101.6667L 495,101.6667L 416.5647,198.3333L 83.4353,198.3333L 5,101.6667 Z',
          'M 83.4353,198.3333L 416.5647,198.3333L 250,295L 250,295L 83.4353,198.3333 Z',
        ],
      ]);
    });
  });

  describe('when the funnel element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel data={smallerData} dataKey="uv" isAnimationActive hide={!isVisible} />
            {children}
          </FunnelChart>
        </div>
      );
    });

    it('should not crash when the funnel hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getFunnelPaths(container)).toHaveLength(0);
    });

    it('should restart the animation from the beginning when the funnel appears again', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getFunnelPaths(container)).toHaveLength(0);
      act(() => button.click());
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 134.1499,43.2178L 365.8502,43.2178L 336.8877,111.7822L 163.1125,111.7822L 134.1499,43.2178 Z',
          'M 163.1124,188.2178L 336.8876,188.2178L 250,256.7822L 250,256.7822L 163.1124,188.2178 Z',
        ],
        [
          'M 63.905,22.4311L 436.0951,22.4311L 389.5713,132.569L 110.4288,132.569L 63.905,22.4311 Z',
          'M 110.4287,167.4311L 389.5712,167.4311L 250,277.569L 250,277.569L 110.4287,167.4311 Z',
        ],
        [
          'M 26.9792,11.504L 473.0208,11.504L 417.2656,143.4959L 82.7344,143.4959L 26.9792,11.504 Z',
          'M 82.7344,156.504L 417.2656,156.504L 250,288.4959L 250,288.4959L 82.7344,156.504 Z',
        ],
        [
          'M 9.7676,6.4108L 490.2324,6.4108L 430.1743,148.5892L 69.8257,148.5892L 9.7676,6.4108 Z',
          'M 69.8257,151.4108L 430.1743,151.4108L 250,293.5892L 250,293.5892L 69.8257,151.4108 Z',
        ],
        ['M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z', 'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z'],
      ]);
    });
  });
});
