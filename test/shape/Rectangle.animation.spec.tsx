import React from 'react';
import { beforeAll, describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { Rectangle, Surface } from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { trim } from '../helper/trim';
import { mockGetTotalLength } from '../helper/mockGetTotalLength';
import { assertNotNull } from '../helper/assertNotNull';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

function getFirstRect(container: Element) {
  const rects = container.querySelectorAll('.recharts-rectangle');
  expect(rects).toHaveLength(1);
  const rect = rects[0];
  assertNotNull(rect);
  return rect;
}

function getRectPath(container: Element) {
  assertNotNull(container);
  const rect = getFirstRect(container);
  expect(rect).toHaveAttribute('d');
  return trim(rect.getAttribute('d'));
}

function getStyle(container: Element): string | null {
  assertNotNull(container);
  const rect = getFirstRect(container);
  expect(rect).toHaveAttribute('style');
  return rect.getAttribute('style');
}

const expectedPathBeforeWidthChange =
  'M 50,54 A 4,4,0,0,1,54,50 L 126,50 A 4,4,0,0,1,130,54 L 130,146 A 4,4,0,0,1,126,150 L 54,150 A 4,4,0,0,1,50,146 Z';

const expectedPathAfterWidthChange =
  'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z';

async function expectPathDoesNotAnimate(container: HTMLElement, animationManager: MockAnimationManager) {
  const initialPath = getRectPath(container);
  expect(initialPath).toBe(expectedPathBeforeWidthChange);
  expect(getRectPath(container)).toBe(initialPath);

  await animationManager.setAnimationProgress(0.1);
  expect(getRectPath(container)).toBe(initialPath);

  await animationManager.setAnimationProgress(0.5);
  expect(getRectPath(container)).toBe(initialPath);

  await animationManager.setAnimationProgress(1);
  expect(getRectPath(container)).toBe(initialPath);
}

async function expectAnimatedPath(
  container: HTMLElement,
  animationManager: MockAnimationManager,
): Promise<ReadonlyArray<string>> {
  const initialPath = getRectPath(container);
  assertNotNull(initialPath);

  const allPaths: string[] = [];
  allPaths.push(initialPath);

  for (let i = 0.1; i <= 1; i += 0.3) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(i);
    const currentPath = getRectPath(container);
    assertNotNull(currentPath);
    // expect(allPaths).not.toContain(currentPath);
    allPaths.push(currentPath);
  }

  await animationManager.completeAnimation();
  const finalPath = getRectPath(container);
  // expect(finalPath).toBe(expectedPathAfterWidthChange);
  expect(allPaths[allPaths.length - 1]).toEqual(finalPath);

  return allPaths;
}

function expectNoStrokeDasharray(container: Element) {
  const rect = getFirstRect(container);
  const style = rect.getAttribute('style');
  expect(style).toBe(null);
}

async function expectAnimatedStrokeDasharray(container: HTMLElement, animationManager: MockAnimationManager) {
  const initialStyle = getStyle(container);

  const allStyles: Array<string | null> = [];
  allStyles.push(initialStyle);

  await animationManager.setAnimationProgress(0.1);
  const currentStyle = getStyle(container);
  allStyles.push(currentStyle);

  return allStyles;
}

function RectangleTestCase({
  isAnimationActive,
  isUpdateAnimationActive,
  children,
}: {
  isAnimationActive: boolean;
  isUpdateAnimationActive: boolean;
  children: React.ReactNode;
}) {
  const [width, setWidth] = React.useState(80);
  return (
    <>
      <button type="button" onClick={() => setWidth(w => (w === 100 ? 80 : 100))}>
        Change width
      </button>
      <Surface width={400} height={400}>
        <Rectangle
          x={50}
          y={50}
          width={width}
          height={100}
          radius={4}
          fill="#ff7300"
          isAnimationActive={isAnimationActive}
          isUpdateAnimationActive={isUpdateAnimationActive}
        />
        {children}
      </Surface>
    </>
  );
}

function rectangleTestCase({
  isAnimationActive,
  isUpdateAnimationActive,
}: {
  isAnimationActive: boolean;
  isUpdateAnimationActive: boolean;
}) {
  return createSelectorTestCase(({ children }) => (
    <RectangleTestCase isUpdateAnimationActive={isUpdateAnimationActive} isAnimationActive={isAnimationActive}>
      {children}
    </RectangleTestCase>
  ));
}

async function prime(container: HTMLElement) {
  const button = container.querySelector('button');
  assertNotNull(button);
  act(() => button.click());
}

describe('Rectangle animation', () => {
  beforeAll(() => {
    mockGetTotalLength(1234);
  });

  describe.each([{ isAnimationActive: false, isUpdateAnimationActive: false }])(
    'isAnimationActive=$isAnimationActive, isUpdateAnimationActive=$isUpdateAnimationActive',
    params => {
      const renderTestCase = rectangleTestCase(params);

      describe('initial render', () => {
        it('should render the rectangle without initial animation', () => {
          const { animationManager } = renderTestCase();
          expect(animationManager.isAnimating()).toBe(false);
        });

        it('should render rectangle path without initial animation', () => {
          const { container } = renderTestCase();
          expect(getRectPath(container)).toBe(expectedPathBeforeWidthChange);
        });

        it('should not add stroke-dasharray style', () => {
          const { container } = renderTestCase();
          expectNoStrokeDasharray(container);
        });
      });

      describe('when width changes', () => {
        it('should not animate anything', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(animationManager.isAnimating()).toBe(false);
        });

        it('should change the rectangle path immediately', async () => {
          const { container } = renderTestCase();
          await prime(container);
          expect(getRectPath(container)).toBe(expectedPathAfterWidthChange);
        });

        it('should not add stroke-dasharray style', async () => {
          const { container } = renderTestCase();
          await prime(container);
          expectNoStrokeDasharray(container);
        });
      });
    },
  );

  describe.each([{ isAnimationActive: false, isUpdateAnimationActive: true }])(
    'isAnimationActive=$isAnimationActive, isUpdateAnimationActive=$isUpdateAnimationActive',
    params => {
      const renderTestCase = rectangleTestCase(params);

      describe('initial render', () => {
        // fails because the Rectangle does activate the animation manager but doesn't actually animate anything
        it.fails('should render the rectangle without animation', () => {
          const { animationManager } = renderTestCase();
          expect(animationManager.isAnimating()).toBe(false);
        });

        it('should render rectangle path, and do not change the path during the animation', async () => {
          const { container, animationManager } = renderTestCase();
          return expectPathDoesNotAnimate(container, animationManager);
        });

        it('should not animate stroke-dasharray property', () => {
          const { container } = renderTestCase();
          expect(getStyle(container)).toEqual('stroke-dasharray: 1234px 1234px;');
        });
      });

      describe('when width changes', () => {
        it('should animate', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(animationManager.isAnimating()).toBe(true);
        });

        it('should animate the rectangle path', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(await expectAnimatedPath(container, animationManager)).toEqual([
            'M 50,54 A 4,4,0,0,1,54,50 L 126,50 A 4,4,0,0,1,130,54 L 130,146 A 4,4,0,0,1,126,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 127.8959,50 A 4,4,0,0,1,131.8959,54 L 131.8959,146 A 4,4,0,0,1,127.8959,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 139.6508,50 A 4,4,0,0,1,143.6508,54 L 143.6508,146 A 4,4,0,0,1,139.6508,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.8153,50 A 4,4,0,0,1,148.8153,54 L 148.8153,146 A 4,4,0,0,1,144.8153,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
        });

        it('should not animate stroke-dasharray property', () => {
          const { container } = renderTestCase();
          expect(getStyle(container)).toEqual('stroke-dasharray: 1234px 1234px;');
        });
      });
    },
  );

  describe.each([{ isAnimationActive: true, isUpdateAnimationActive: false }])(
    'isAnimationActive=$isAnimationActive, isUpdateAnimationActive=$isUpdateAnimationActive',
    params => {
      const renderTestCase = rectangleTestCase(params);

      describe('initial render', () => {
        it('should render the rectangle without animation', () => {
          const { animationManager } = renderTestCase();
          // this is weird - the isAnimationActive is true! but there is no animation
          expect(animationManager.isAnimating()).toBe(false);
        });

        it('should render rectangle path without initial animation', () => {
          const { container } = renderTestCase();
          expect(getRectPath(container)).toBe(expectedPathBeforeWidthChange);
        });

        it('should not add stroke-dasharray style', () => {
          const { container } = renderTestCase();
          expectNoStrokeDasharray(container);
        });
      });

      describe('when width changes', () => {
        it('should not animate anything', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(animationManager.isAnimating()).toBe(false);
        });

        it('should change the rectangle path immediately', async () => {
          const { container } = renderTestCase();
          await prime(container);
          expect(getRectPath(container)).toBe(expectedPathAfterWidthChange);
        });

        it('should not add stroke-dasharray style', async () => {
          const { container } = renderTestCase();
          await prime(container);
          expectNoStrokeDasharray(container);
        });
      });
    },
  );

  describe.each([{ isAnimationActive: true, isUpdateAnimationActive: true }])(
    'isAnimationActive=$isAnimationActive, isUpdateAnimationActive=$isUpdateAnimationActive',
    params => {
      const renderTestCase = rectangleTestCase(params);

      describe('initial render', () => {
        it('should render the rectangle with animation', () => {
          const { animationManager } = renderTestCase();
          expect(animationManager.isAnimating()).toBe(true);
        });

        it('should render rectangle path, and do not change the path during the animation', async () => {
          const { container, animationManager } = renderTestCase();
          await expectPathDoesNotAnimate(container, animationManager);
        });

        it('should animate stroke-dasharray', async () => {
          const { container, animationManager } = renderTestCase();
          expect(await expectAnimatedStrokeDasharray(container, animationManager)).toEqual([
            'stroke-dasharray: 0px 1234px;',
            'stroke-dasharray: 1234px 1234px; transition: stroke-dasharray 1500ms ease;',
          ]);
        });
      });

      describe('when width changes', () => {
        it('should animate', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(animationManager.isAnimating()).toBe(true);
        });

        it('should animate the rectangle path', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          // animation when the rectangle width increases
          expect(await expectAnimatedPath(container, animationManager)).toEqual([
            'M 50,54 A 4,4,0,0,1,54,50 L 126,50 A 4,4,0,0,1,130,54 L 130,146 A 4,4,0,0,1,126,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 127.8959,50 A 4,4,0,0,1,131.8959,54 L 131.8959,146 A 4,4,0,0,1,127.8959,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 139.6508,50 A 4,4,0,0,1,143.6508,54 L 143.6508,146 A 4,4,0,0,1,139.6508,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.8153,50 A 4,4,0,0,1,148.8153,54 L 148.8153,146 A 4,4,0,0,1,144.8153,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
          await prime(container);
          // animation when the rectangle width decreases
          expect(await expectAnimatedPath(container, animationManager)).toEqual([
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.1041,50 A 4,4,0,0,1,148.1041,54 L 148.1041,146 A 4,4,0,0,1,144.1041,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 132.3492,50 A 4,4,0,0,1,136.3492,54 L 136.3492,146 A 4,4,0,0,1,132.3492,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 127.1847,50 A 4,4,0,0,1,131.1847,54 L 131.1847,146 A 4,4,0,0,1,127.1847,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 126,50 A 4,4,0,0,1,130,54 L 130,146 A 4,4,0,0,1,126,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
        });

        it('should animate stroke-dasharray', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(await expectAnimatedStrokeDasharray(container, animationManager)).toEqual([
            'stroke-dasharray: 0px 1234px;',
            'stroke-dasharray: 1234px 1234px; transition: stroke-dasharray 1500ms ease;',
          ]);
        });
      });
    },
  );

  describe('when the height changes to zero', () => {
    function HeightTestCase({
      startHeight,
      isUpdateAnimationActive,
      children,
    }: {
      startHeight: number;
      isUpdateAnimationActive: boolean;
      children: React.ReactNode;
    }) {
      const [height, setHeight] = React.useState(startHeight);
      return (
        <>
          <button type="button" onClick={() => setHeight(h => (h === 0 ? 100 : 0))}>
            Change height
          </button>
          <Surface width={400} height={400}>
            <Rectangle
              x={50}
              y={50}
              width={80}
              height={height}
              radius={0}
              fill="#ff7300"
              isAnimationActive
              isUpdateAnimationActive={isUpdateAnimationActive}
            />
            {children}
          </Surface>
        </>
      );
    }

    function heightTestCase({
      startHeight,
      isUpdateAnimationActive,
    }: {
      startHeight: number;
      isUpdateAnimationActive: boolean;
    }) {
      return createSelectorTestCase(({ children }) => (
        <HeightTestCase startHeight={startHeight} isUpdateAnimationActive={isUpdateAnimationActive}>
          {children}
        </HeightTestCase>
      ));
    }

    function countRectangles(container: Element): number {
      return container.querySelectorAll('.recharts-rectangle').length;
    }

    /*
     * The test case renders with radius={0}, so the path is always
     * "M 50,50 h 80 v {height} h -80 Z" and the height is the argument of the v command.
     */
    function getRectHeight(container: Element): number {
      const path = getRectPath(container);
      assertNotNull(path);
      const match = /v ([\d.-]+)/.exec(path);
      assertNotNull(match);
      return Number(match[1]);
    }

    it('should keep the rectangle rendered so that it can animate out', async () => {
      const renderTestCase = heightTestCase({ startHeight: 100, isUpdateAnimationActive: true });
      const { container } = renderTestCase();
      expect(countRectangles(container)).toBe(1);

      await prime(container);
      expect(countRectangles(container)).toBe(1);
    });

    it('should shrink the height through the animation and unmount the rectangle at the end', async () => {
      const renderTestCase = heightTestCase({ startHeight: 100, isUpdateAnimationActive: true });
      const { container, animationManager } = renderTestCase();
      expect(getRectHeight(container)).toBe(100);

      await prime(container);

      const heights: Array<number> = [getRectHeight(container)];
      for (const progress of [0.25, 0.5, 0.75]) {
        // eslint-disable-next-line no-await-in-loop
        await animationManager.setAnimationProgress(progress);
        heights.push(getRectHeight(container));
      }

      // the rectangle shrinks frame by frame instead of snapping straight to zero
      const [firstHeight, ...laterHeights] = heights;
      expect(firstHeight).toBe(100);
      laterHeights.forEach((currentHeight, index) => {
        expect(currentHeight).toBeLessThan(heights[index]);
        expect(currentHeight).toBeGreaterThanOrEqual(0);
      });
      expect(countRectangles(container)).toBe(1);

      // and it is gone once the animation is over
      await animationManager.completeAnimation();
      expect(countRectangles(container)).toBe(0);
    });

    it('should remove the rectangle immediately when isUpdateAnimationActive is false', async () => {
      const renderTestCase = heightTestCase({ startHeight: 100, isUpdateAnimationActive: false });
      const { container } = renderTestCase();
      expect(countRectangles(container)).toBe(1);

      await prime(container);
      expect(countRectangles(container)).toBe(0);
    });

    it('should render nothing when the height is zero on the initial render', () => {
      const renderTestCase = heightTestCase({ startHeight: 0, isUpdateAnimationActive: true });
      const { container } = renderTestCase();
      expect(countRectangles(container)).toBe(0);
    });
  });
});
