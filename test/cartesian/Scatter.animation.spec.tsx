import React, { useState, ReactNode } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { ScatterChart, Scatter, Legend, YAxis } from '../../src';
import { PageData } from '../_data';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { ExpectedPoint, expectScatterPoints, getAllScatterPoints } from '../helper/expectScatterPoints';

function getDotsXY(container: Element): ReadonlyArray<{ cx: string; cy: string }> {
  return getAllScatterPoints(container).map(dot => ({
    cx: dot.getAttribute('cx'),
    cy: dot.getAttribute('cy'),
  }));
}

/**
 * During the animation, the dots should not move.
 * This function will assert that the dots' positions
 * do not change during the animation steps.
 * It returns the initial positions of the dots.
 * @param container chart container
 * @param animationManager mock animation manager
 * @return Promise that resolves to x, y coordinates of all the dots
 */
async function dotsDoNotMove(container: Element, animationManager: MockProgressAnimationManager) {
  const initial = getDotsXY(container);

  await animationManager.setAnimationProgress(0.1);
  expect(getDotsXY(container)).toEqual(initial);

  await animationManager.setAnimationProgress(0.9);
  expect(getDotsXY(container)).toEqual(initial);

  await animationManager.setAnimationProgress(10);
  expect(getDotsXY(container)).toEqual(initial);

  await animationManager.completeAnimation();
  expect(getDotsXY(container)).toEqual(initial);

  return initial;
}

/**
 * During the animation, the dots should be moving vertically but their x-coordinates should not change.
 * This function will assert that the dots' positions are changing in the y-axis
 * while their x-coordinates do not change.
 * It returns array of objects with cx and cy properties
 * @param container chart container
 * @param animationManager mock animation manager
 * @return Promise that resolves to x, y coordinates of the first dot during four selected steps of the animation
 */
async function dotsAnimate(
  container: Element,
  animationManager: MockProgressAnimationManager,
): Promise<ReadonlyArray<{ cx: string; cy: string }>> {
  const initial = getDotsXY(container);

  await animationManager.setAnimationProgress(0.1);
  const step1 = getDotsXY(container);
  expect(step1).not.toEqual(initial);
  expect(step1.map(dot => dot.cx)).toEqual(initial.map(dot => dot.cx));

  await animationManager.setAnimationProgress(0.5);
  const step2 = getDotsXY(container);
  expect(step2).not.toEqual(initial);
  expect(step2).not.toEqual(step1);
  expect(step2.map(dot => dot.cx)).toEqual(initial.map(dot => dot.cx));

  await animationManager.setAnimationProgress(0.9);
  const step3 = getDotsXY(container);
  expect(step3).not.toEqual(initial);
  expect(step3).not.toEqual(step1);
  expect(step3).not.toEqual(step2);
  expect(step3.map(dot => dot.cx)).toEqual(initial.map(dot => dot.cx));

  await animationManager.setAnimationProgress(1);
  const final = getDotsXY(container);
  expect(final).not.toEqual(initial);
  expect(final).not.toEqual(step1);
  expect(final).not.toEqual(step2);
  expect(final).not.toEqual(step3);
  expect(final.map(dot => dot.cx)).toEqual(initial.map(dot => dot.cx));

  await animationManager.completeAnimation();
  expect(getDotsXY(container)).toEqual(final);

  return [initial[0], step1[0], step2[0], step3[0], final[0]];
}

function getAllScatterPointPathsDs(container: Element): ReadonlyArray<string> {
  return Array.from(getAllScatterPoints(container)).map(path => path.getAttribute('d'));
}

function assertAllItemsAreEqual<T>(arr: ReadonlyArray<T>): void {
  if (arr.length === 0) {
    return;
  }
  const head = arr[0];
  for (let i = 1; i < arr.length; i++) {
    expect(arr[i]).toEqual(head);
  }
}

/**
 * During the animation, the dots should be increasing their size.
 * This function will assert two things:
 * 1. The shape of all dots is the same in the same step of the animation.
 * 2. The shape is changing and is different in each step of the animation.
 * @param container chart container
 * @param animationManager mock animation manager
 * @return Array of the path.d's of the dots during four selected steps of the animation.
 */
async function animatedScatterPoint(
  container: Element,
  animationManager: MockProgressAnimationManager,
): Promise<ReadonlyArray<string>> {
  const initialPaths = getAllScatterPointPathsDs(container);
  assertAllItemsAreEqual(initialPaths);

  await animationManager.setAnimationProgress(0.1);
  const step1Paths = getAllScatterPointPathsDs(container);
  assertAllItemsAreEqual(step1Paths);
  expect(step1Paths).not.toEqual(initialPaths);

  await animationManager.setAnimationProgress(0.5);
  const step2Paths = getAllScatterPointPathsDs(container);
  assertAllItemsAreEqual(step2Paths);
  expect(step2Paths).not.toEqual(initialPaths);
  expect(step2Paths).not.toEqual(step1Paths);

  await animationManager.setAnimationProgress(0.9);
  const step3Paths = getAllScatterPointPathsDs(container);
  assertAllItemsAreEqual(step3Paths);
  expect(step3Paths).not.toEqual(initialPaths);
  expect(step3Paths).not.toEqual(step1Paths);
  expect(step3Paths).not.toEqual(step2Paths);

  await animationManager.setAnimationProgress(1);
  const finalPaths = getAllScatterPointPathsDs(container);
  assertAllItemsAreEqual(finalPaths);
  expect(finalPaths).not.toEqual(initialPaths);
  expect(finalPaths).not.toEqual(step1Paths);
  expect(finalPaths).not.toEqual(step2Paths);
  expect(finalPaths).not.toEqual(step3Paths);

  await animationManager.completeAnimation();
  const pathsAfterCompletion = getAllScatterPointPathsDs(container);
  expect(pathsAfterCompletion).toEqual(finalPaths);

  return [initialPaths[0], step1Paths[0], step2Paths[0], step3Paths[0], finalPaths[0]];
}

const expectedUvPoints: ReadonlyArray<ExpectedPoint> = [
  {
    cx: '12.5',
    cy: '5',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(12.5, 5)',
    width: '9.0270333367641',
  },
  {
    cx: '27.5',
    cy: '27.5',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(27.5, 27.5)',
    width: '9.0270333367641',
  },
  {
    cx: '42.5',
    cy: '27.5',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(42.5, 27.5)',
    width: '9.0270333367641',
  },
  {
    cx: '57.5',
    cy: '50',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(57.5, 50)',
    width: '9.0270333367641',
  },
  {
    cx: '72.5',
    cy: '32.45',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(72.5, 32.45)',
    width: '9.0270333367641',
  },
  {
    cx: '87.5',
    cy: '52.475',
    d: 'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
    height: '9.0270333367641',
    transform: 'translate(87.5, 52.475)',
    width: '9.0270333367641',
  },
];

describe('Scatter Animation', () => {
  beforeEach(() => {
    mockSequenceOfGetBoundingClientRect([
      { width: 0, height: 0, left: 0, top: 50 },
      { width: 50, height: 50, left: 0, top: 50 },
    ]);
  });

  describe('with isAnimationActive={false}', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100}>
        <Scatter data={PageData} dataKey="uv" isAnimationActive={false} animationEasing="linear" />
        {children}
      </ScatterChart>
    ));

    it('should not start any animations', () => {
      const { animationManager } = renderTestCase();
      expect(animationManager.isAnimating()).toBe(false);
    });

    it('should render the scatter dots in final position', () => {
      const { container } = renderTestCase();
      expectScatterPoints(container, expectedUvPoints);
    });

    it('should render dots with final size', async () => {
      const { container } = renderTestCase();
      const pathsDs = getAllScatterPointPathsDs(container);
      expect(pathsDs[0]).toEqual('M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0');
      assertAllItemsAreEqual(pathsDs);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100}>
        <Scatter data={PageData} dataKey="uv" animationEasing="linear" />
        {children}
      </ScatterChart>
    ));

    it('should start the animation', () => {
      const { animationManager } = renderTestCase();
      expect(animationManager.isAnimating()).toBe(true);
    });

    it('should not move dots during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await dotsDoNotMove(container, animationManager)).toEqual([
        { cx: '12.5', cy: '5' },
        { cx: '27.5', cy: '27.5' },
        { cx: '42.5', cy: '27.5' },
        { cx: '57.5', cy: '50' },
        { cx: '72.5', cy: '32.45' },
        { cx: '87.5', cy: '52.475' },
      ]);
    });

    it('should animate dots size', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await animatedScatterPoint(container, animationManager)).toEqual([
        'M0,0',
        'M1.427,0A1.427,1.427,0,1,1,-1.427,0A1.427,1.427,0,1,1,1.427,0',
        'M3.192,0A3.192,3.192,0,1,1,-3.192,0A3.192,3.192,0,1,1,3.192,0',
        'M4.282,0A4.282,4.282,0,1,1,-4.282,0A4.282,4.282,0,1,1,4.282,0',
        'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
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
          <ScatterChart width={100} height={100}>
            <Scatter data={PageData} dataKey={dataKey} animationEasing="linear" />
            {children}
          </ScatterChart>
        </div>
      );
    };
    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });
    }

    it('should start the animation', () => {
      const { animationManager } = renderTestCase();
      expect(animationManager.isAnimating()).toBe(true);
    });

    it('should animate dots positions after dataKey change', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await dotsAnimate(container, animationManager)).toEqual([
        { cx: '12.5', cy: '5' },
        { cx: '12.5', cy: '11.840000000000002' },
        { cx: '12.5', cy: '39.2' },
        { cx: '12.5', cy: '66.55999999999997' },
        { cx: '12.5', cy: '73.4' },
      ]);
    });
  });

  describe('when the Scatter has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('pv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <ScatterChart width={100} height={100}>
            <Scatter data={PageData} dataKey={dataKey} animationEasing="linear" key={dataKey} />
            {children}
          </ScatterChart>
        </div>
      );
    };
    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });
    }

    it('should start the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(animationManager.isAnimating()).toBe(true);
    });

    it('should not move dots during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await dotsDoNotMove(container, animationManager)).toEqual([
        { cx: '12.5', cy: '5' },
        { cx: '27.5', cy: '27.5' },
        { cx: '42.5', cy: '27.5' },
        { cx: '57.5', cy: '50' },
        { cx: '72.5', cy: '32.45' },
        { cx: '87.5', cy: '52.475' },
      ]);
    });

    it('should animate dots size', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await animatedScatterPoint(container, animationManager)).toEqual([
        'M0,0',
        'M1.427,0A1.427,1.427,0,1,1,-1.427,0A1.427,1.427,0,1,1,1.427,0',
        'M3.192,0A3.192,3.192,0,1,1,-3.192,0A3.192,3.192,0,1,1,3.192,0',
        'M4.282,0A4.282,4.282,0,1,1,-4.282,0A4.282,4.282,0,1,1,4.282,0',
        'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
      ]);
    });
  });

  describe('when the scatter element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <ScatterChart width={100} height={100}>
            <Scatter data={PageData} dataKey="uv" animationEasing="linear" hide={!isVisible} />
            {children}
          </ScatterChart>
        </div>
      );
    });

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      // The test has animationActive={true} so the Scatter is playing the entrance animation.
      await animationManager.setAnimationProgress(0.3);

      // now click once, that will hide the scatter in the middle of the animation
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      expect(animationManager.isAnimating()).toBe(false);
      expectScatterPoints(container, []);

      // Click again to show the scatter element and then assert what happens
      act(() => {
        button.click();
      });
    }

    it('should start a new entrance animations when the scatter element appears again', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(animationManager.isAnimating()).toBe(true);
    });

    it('should not move dots during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await dotsDoNotMove(container, animationManager)).toEqual([
        { cx: '12.5', cy: '5' },
        { cx: '27.5', cy: '27.5' },
        { cx: '42.5', cy: '27.5' },
        { cx: '57.5', cy: '50' },
        { cx: '72.5', cy: '32.45' },
        { cx: '87.5', cy: '52.475' },
      ]);
    });

    it('should animate dots size', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await animatedScatterPoint(container, animationManager)).toEqual([
        'M0,0',
        'M1.427,0A1.427,1.427,0,1,1,-1.427,0A1.427,1.427,0,1,1,1.427,0',
        'M3.192,0A3.192,3.192,0,1,1,-3.192,0A3.192,3.192,0,1,1,3.192,0',
        'M4.282,0A4.282,4.282,0,1,1,-4.282,0A4.282,4.282,0,1,1,4.282,0',
        'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
      ]);
    });
  });

  describe('with <Legend /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100}>
        <Legend />
        <Scatter data={PageData} dataKey="uv" animationEasing="linear" />
        {children}
      </ScatterChart>
    ));

    it('should not move dots during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await dotsDoNotMove(container, animationManager)).toEqual([
        { cx: '12.5', cy: '5' },
        { cx: '27.5', cy: '15' },
        { cx: '42.5', cy: '15' },
        { cx: '57.5', cy: '25' },
        { cx: '72.5', cy: '17.200000000000003' },
        { cx: '87.5', cy: '26.100000000000005' },
      ]);
    });

    it('should animate dots size', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await animatedScatterPoint(container, animationManager)).toEqual([
        'M0,0',
        'M1.427,0A1.427,1.427,0,1,1,-1.427,0A1.427,1.427,0,1,1,1.427,0',
        'M3.192,0A3.192,3.192,0,1,1,-3.192,0A3.192,3.192,0,1,1,3.192,0',
        'M4.282,0A4.282,4.282,0,1,1,-4.282,0A4.282,4.282,0,1,1,4.282,0',
        'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
      ]);
    });
  });

  describe('with <YAxis width="auto" /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100}>
        <YAxis width="auto" />
        <Scatter data={PageData} dataKey="uv" animationEasing="linear" />
        {children}
      </ScatterChart>
    ));

    it('should not move dots during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await dotsDoNotMove(container, animationManager)).toEqual([
        { cx: '65.66666666666667', cy: '5' },
        { cx: '71', cy: '27.5' },
        { cx: '76.33333333333334', cy: '27.5' },
        { cx: '81.66666666666667', cy: '50' },
        { cx: '87', cy: '32.45' },
        { cx: '92.33333333333333', cy: '52.475' },
      ]);
    });

    it('should animate dots size', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await animatedScatterPoint(container, animationManager)).toEqual([
        'M0,0',
        'M1.427,0A1.427,1.427,0,1,1,-1.427,0A1.427,1.427,0,1,1,1.427,0',
        'M3.192,0A3.192,3.192,0,1,1,-3.192,0A3.192,3.192,0,1,1,3.192,0',
        'M4.282,0A4.282,4.282,0,1,1,-4.282,0A4.282,4.282,0,1,1,4.282,0',
        'M4.514,0A4.514,4.514,0,1,1,-4.514,0A4.514,4.514,0,1,1,4.514,0',
      ]);
    });
  });
});
