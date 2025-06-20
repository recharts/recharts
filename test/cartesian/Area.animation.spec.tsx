import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Area, AreaChart, Legend, YAxis } from '../../src';
import { PageData } from '../_data';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { expectAreaCurve, ExpectedArea } from '../helper/expectAreaCurve';
import { assertNotNull } from '../helper/assertNotNull';
import { ExpectedLabel, expectLabels } from '../helper/expectLabel';

function d(points: string): ExpectedArea {
  // Helper to build the expected area path string
  return { d: points };
}

function getAreaCurve(container: Element): Element {
  const curve = container.querySelector('.recharts-area-curve');
  assertNotNull(curve);
  return curve;
}

function getAreaCurveD(container: Element): string {
  return getAreaCurve(container).getAttribute('d');
}

const expectedUvLabels: ReadonlyArray<ExpectedLabel> = [
  {
    height: null,
    offset: '5',
    textContent: '400',
    width: null,
    x: '5',
    y: '5',
  },
  {
    height: null,
    offset: '5',
    textContent: '300',
    width: null,
    x: '23',
    y: '27.5',
  },
  {
    height: null,
    offset: '5',
    textContent: '300',
    width: null,
    x: '41',
    y: '27.5',
  },
  {
    height: null,
    offset: '5',
    textContent: '200',
    width: null,
    x: '59',
    y: '50',
  },
  {
    height: null,
    offset: '5',
    textContent: '278',
    width: null,
    x: '77',
    y: '32.45',
  },
  {
    height: null,
    offset: '5',
    textContent: '189',
    width: null,
    x: '95',
    y: '52.475',
  },
];

/*
 * Will assert that the area curve does not change during the animation.
 */
async function expectAreaCurveDoesNotChange(container: Element, animationManager: MockProgressAnimationManager) {
  const initialPath = getAreaCurve(container).getAttribute('d');

  await animationManager.setAnimationProgress(0.1);
  expect(getAreaCurveD(container)).toBe(initialPath);

  await animationManager.setAnimationProgress(0.9);
  expect(getAreaCurveD(container)).toBe(initialPath);

  await animationManager.completeAnimation();
  expect(getAreaCurveD(container)).toBe(initialPath);
}

function getDotsX(container: Element) {
  return Array.from(container.querySelectorAll<SVGCircleElement>('circle.recharts-dot')).map(
    dot => dot.getAttribute('cx') || '',
  );
}

function getDotsY(container: Element) {
  return Array.from(container.querySelectorAll<SVGCircleElement>('circle.recharts-dot')).map(
    dot => dot.getAttribute('cy') || '',
  );
}

/*
 * When animating area dots in horizontal layout chart,
 * the Y coordinates of the dots should change,
 * but the X coordinates should remain the same.
 */
async function animatedHorizontalDots(
  container: Element,
  animationManager: MockProgressAnimationManager,
): Promise<ReadonlyArray<string>> {
  const initialDotsX: ReadonlyArray<string> = getDotsX(container);
  // the Y coordinates of the dots should not change during the animation
  const initialDotsY: ReadonlyArray<string> = getDotsY(container);

  await animationManager.setAnimationProgress(0.1);
  const dotsX1 = getDotsX(container);
  expect(dotsX1).toEqual(initialDotsX);
  const dotsY1 = getDotsY(container);
  expect(dotsY1).not.toEqual(initialDotsY);

  await animationManager.setAnimationProgress(0.9);
  const dotsX2 = getDotsX(container);
  expect(dotsX2).toEqual(initialDotsX);
  const dotsY2 = getDotsY(container);
  expect(dotsY2).not.toEqual(dotsY1);

  await animationManager.setAnimationProgress(1);
  const dotsX3 = getDotsX(container);
  expect(dotsX3).toEqual(initialDotsX);
  const dotsY3 = getDotsY(container);
  expect(dotsY3).not.toEqual(dotsY2);

  await animationManager.completeAnimation();
  const finalXDots = getDotsX(container);
  expect(finalXDots).toEqual(initialDotsX);
  const finalYDots = getDotsY(container);
  expect(finalYDots).toEqual(dotsY3);

  return [initialDotsX.join(','), dotsY1.join(','), dotsY2.join(','), dotsY3.join(',')];
}

async function expectLabelsHideDuringAnimation(container: Element, animationManager: MockProgressAnimationManager) {
  expectLabels(container, []);

  await animationManager.setAnimationProgress(0.1);
  expectLabels(container, []);

  await animationManager.setAnimationProgress(0.9);
  expectLabels(container, []);

  await animationManager.completeAnimation();
  expectLabels(container, []);
}

async function expectLabelsRemainVisible(container: Element, animationManager: MockProgressAnimationManager) {
  expectLabels(container, expectedUvLabels);

  await animationManager.setAnimationProgress(0.1);
  expectLabels(container, expectedUvLabels);

  await animationManager.setAnimationProgress(0.9);
  expectLabels(container, expectedUvLabels);

  await animationManager.completeAnimation();
  expectLabels(container, expectedUvLabels);
}

function getClipPathRect(container: Element) {
  const clipPathRect = container.querySelector('.recharts-area clipPath rect');
  assertNotNull(clipPathRect);
  return clipPathRect;
}

async function horizontalClipPathAnimation(
  container: Element,
  animationManager: MockProgressAnimationManager,
): Promise<ReadonlyArray<string>> {
  const clipPathRect = getClipPathRect(container);
  const x = clipPathRect.getAttribute('x');
  const y = clipPathRect.getAttribute('y');
  const width1 = clipPathRect.getAttribute('width');
  const height = clipPathRect.getAttribute('height');

  await animationManager.setAnimationProgress(0.1);
  // all properties except width should remain the same
  expect(clipPathRect).toHaveAttribute('x', x);
  expect(clipPathRect).toHaveAttribute('y', y);
  expect(clipPathRect).toHaveAttribute('height', height);
  // width should grow
  const width2 = clipPathRect.getAttribute('width');
  expect(parseFloat(width2)).toBeGreaterThan(parseFloat(width1));

  await animationManager.setAnimationProgress(0.2);
  expect(clipPathRect).toHaveAttribute('x', x);
  expect(clipPathRect).toHaveAttribute('y', y);
  expect(clipPathRect).toHaveAttribute('height', height);
  const width3 = clipPathRect.getAttribute('width');
  expect(parseFloat(width3)).toBeGreaterThan(parseFloat(width2));

  await animationManager.setAnimationProgress(1);
  expect(clipPathRect).toHaveAttribute('x', x);
  expect(clipPathRect).toHaveAttribute('y', y);
  expect(clipPathRect).toHaveAttribute('height', height);
  const width4 = clipPathRect.getAttribute('width');
  expect(parseFloat(width4)).toBeGreaterThan(parseFloat(width3));

  await animationManager.completeAnimation();
  expect(clipPathRect).toHaveAttribute('x', x);
  expect(clipPathRect).toHaveAttribute('y', y);
  expect(clipPathRect).toHaveAttribute('height', height);
  expect(clipPathRect).toHaveAttribute('width', width4);

  return [width1, width2, width3, width4];
}

function assertClipPathNotPresent(container: Element) {
  const clipPath = container.querySelector('.recharts-area clipPath');
  expect(clipPath).toBeNull();
}

async function animatedPath(container: HTMLElement, animationManager: MockProgressAnimationManager) {
  const d1 = getAreaCurveD(container);

  await animationManager.setAnimationProgress(0.1);
  const d2 = getAreaCurveD(container);
  expect(d2).not.toBe(d1);

  await animationManager.setAnimationProgress(0.9);
  const d3 = getAreaCurveD(container);
  expect(d3).not.toBe(d2);

  await animationManager.setAnimationProgress(1);
  const d4 = getAreaCurveD(container);
  expect(d4).not.toBe(d3);

  await animationManager.completeAnimation();
  const finalD = getAreaCurveD(container);
  expect(finalD).toBe(d4);

  return [d1, d2, d3, d4];
}

describe('Area animation', () => {
  beforeEach(() => {
    mockSequenceOfGetBoundingClientRect([
      { width: 0, height: 0, left: 0, top: 50 },
      { width: 50, height: 50, left: 0, top: 50 },
    ]);
  });

  describe('with isAnimationActive={false}', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart data={PageData} width={100} height={100}>
        <Area dataKey="uv" isAnimationActive={false} />
        {children}
      </AreaChart>
    ));

    it('should render the area without animation', () => {
      const { container } = renderTestCase();
      expectAreaCurve(container, [d('M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475')]);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart data={PageData} width={100} height={100}>
        <Area dataKey="uv" animationEasing="linear" label />
        {children}
      </AreaChart>
    ));

    it('should start the area with fully generated path and do not change it during the animation', () => {
      const { container, animationManager } = renderTestCase();
      return expectAreaCurveDoesNotChange(container, animationManager);
    });

    it('should animate area left-to-right by extending a clip path', async () => {
      const { container, animationManager } = renderTestCase();

      expect(await horizontalClipPathAnimation(container, animationManager)).toEqual([
        '0',
        '9.000000000000002',
        '18',
        '90',
      ]);
    });

    it('should hide labels during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      return expectLabelsRemainVisible(container, animationManager);
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <AreaChart data={PageData} width={100} height={100}>
            <Area dataKey={dataKey} animationEasing="linear" dot />
            {children}
          </AreaChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('when interrupting the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        await animationManager.setAnimationProgress(0.3);
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });
      }

      it.fails('should continue growing the clipPath rect where it left off', async () => {
        /*
         * There is a bug in Area where interrupting the initial animation
         * will stop rendering the clipPath completely and as a result
         * the animation will "jump" to be fully rendered in a single frame.
         */
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        return horizontalClipPathAnimation(container, animationManager);
      });

      it('should hide labels during the animation', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        return expectLabelsHideDuringAnimation(container, animationManager);
      });

      it('should animate the area path', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        expect(await animatedPath(container, animationManager)).toEqual([
          'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475',
          'M5,11.84L23,30.14L41,32.992L59,45.68L77,35.188L95,52.408',
          'M5,66.56L23,51.257L41,76.926L59,11.12L77,57.09L95,51.868',
          'M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8',
        ]);
      });

      it('should animate the dots', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        expect(await animatedHorizontalDots(container, animationManager)).toEqual([
          '5,23,41,59,77,95',
          '11.840000000000002,30.1397,32.9918,45.68,35.1878,52.4075',
          '66.55999999999997,51.2573,76.92619999999997,11.120000000000019,57.09019999999999,51.8675',
          '73.4,53.897000000000006,82.41799999999999,6.8000000000000025,59.827999999999996,51.8',
        ]);
      });
    });

    describe('when changing dataKey after the initial animation completed', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        await animationManager.completeAnimation();
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });
      }

      it('should not modify the clip path when changing dataKey', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        assertClipPathNotPresent(container);
      });

      it('should animate the area path', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        expect(await animatedPath(container, animationManager)).toEqual([
          'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475',
          'M5,11.84L23,30.14L41,32.992L59,45.68L77,35.188L95,52.408',
          'M5,66.56L23,51.257L41,76.926L59,11.12L77,57.09L95,51.868',
          'M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8',
        ]);
      });
    });
  });

  describe('when the Area has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <AreaChart data={PageData} width={100} height={100}>
            <Area dataKey={dataKey} animationEasing="linear" key={dataKey} />
            {children}
          </AreaChart>
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

    it('should not change the area path', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      return expectAreaCurveDoesNotChange(container, animationManager);
    });

    it('should animate clip path from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      expect(await horizontalClipPathAnimation(container, animationManager)).toEqual([
        '0',
        '9.000000000000002',
        '18',
        '90',
      ]);
    });
  });

  describe('when the area element hides during the animation', () => {
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
          <AreaChart data={PageData} width={100} height={100}>
            <Area dataKey="uv" animationEasing="linear" hide={!isVisible} />
            {children}
          </AreaChart>
        </div>
      );
    });

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      expectAreaCurve(container, []);

      act(() => {
        button.click();
      });
    }

    it.fails('should not start any animations when the area element appears again', async () => {
      /*
       * There is a bug in Area where if the area element is displayed again after being hidden using the `hide` prop,
       * the area path will be animated from the beginning,
       * but the old points and new points are identical, so the path will not change.
       * Visually it looks like the area is not animated at all.
       */
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      expect(animationManager.isAnimating()).toBe(false);
    });
  });

  describe('with <Legend /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart data={PageData} width={100} height={100}>
        <Legend />
        <Area dataKey="uv" animationEasing="linear" />
        {children}
      </AreaChart>
    ));

    it('should not move the area path during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      return expectAreaCurveDoesNotChange(container, animationManager);
    });
  });

  describe('with <YAxis width="auto" /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart data={PageData} width={100} height={100}>
        <YAxis width="auto" />
        <Area dataKey="uv" animationEasing="linear" />
        {children}
      </AreaChart>
    ));

    it('should not move the area path during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      return expectAreaCurveDoesNotChange(container, animationManager);
    });
  });
});
