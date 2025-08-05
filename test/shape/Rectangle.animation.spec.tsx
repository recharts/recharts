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

function getStyle(container: Element): string {
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

  const allPaths: string[] = [];
  allPaths.push(initialPath);

  for (let i = 0.1; i <= 1; i += 0.3) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(i);
    const currentPath = getRectPath(container);
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

  const allStyles: string[] = [];
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

        it('should not add stroke-dasharray property', () => {
          const { container } = renderTestCase();
          expectNoStrokeDasharray(container);
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
            'M 50,54 A 4,4,0,0,1,54,50 L 127.89592611432087,50 A 4,4,0,0,1,131.89592611432087,54 L 131.89592611432087,146 A 4,4,0,0,1,127.89592611432087,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 139.65081011956278,50 A 4,4,0,0,1,143.65081011956278,54 L 143.65081011956278,146 A 4,4,0,0,1,139.65081011956278,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.8152922859528,50 A 4,4,0,0,1,148.8152922859528,54 L 148.8152922859528,146 A 4,4,0,0,1,144.8152922859528,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
        });

        it('should not add stroke-dasharray property', () => {
          const { container } = renderTestCase();
          expectNoStrokeDasharray(container);
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
            'stroke-dasharray: 1234px 0px; transition: stroke-dasharray 1500ms ease;',
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
            'M 50,54 A 4,4,0,0,1,54,50 L 127.89592611432087,50 A 4,4,0,0,1,131.89592611432087,54 L 131.89592611432087,146 A 4,4,0,0,1,127.89592611432087,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 139.65081011956278,50 A 4,4,0,0,1,143.65081011956278,54 L 143.65081011956278,146 A 4,4,0,0,1,139.65081011956278,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.8152922859528,50 A 4,4,0,0,1,148.8152922859528,54 L 148.8152922859528,146 A 4,4,0,0,1,144.8152922859528,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
          await prime(container);
          // animation when the rectangle width decreases
          expect(await expectAnimatedPath(container, animationManager)).toEqual([
            'M 50,54 A 4,4,0,0,1,54,50 L 146,50 A 4,4,0,0,1,150,54 L 150,146 A 4,4,0,0,1,146,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 144.10407388567913,50 A 4,4,0,0,1,148.10407388567913,54 L 148.10407388567913,146 A 4,4,0,0,1,144.10407388567913,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 132.34918988043722,50 A 4,4,0,0,1,136.34918988043722,54 L 136.34918988043722,146 A 4,4,0,0,1,132.34918988043722,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 127.18470771404719,50 A 4,4,0,0,1,131.1847077140472,54 L 131.1847077140472,146 A 4,4,0,0,1,127.18470771404719,150 L 54,150 A 4,4,0,0,1,50,146 Z',
            'M 50,54 A 4,4,0,0,1,54,50 L 126,50 A 4,4,0,0,1,130,54 L 130,146 A 4,4,0,0,1,126,150 L 54,150 A 4,4,0,0,1,50,146 Z',
          ]);
        });

        it('should animate stroke-dasharray', async () => {
          const { container, animationManager } = renderTestCase();
          await prime(container);
          expect(await expectAnimatedStrokeDasharray(container, animationManager)).toEqual([
            'stroke-dasharray: 0px 1234px;',
            'stroke-dasharray: 1234px 0px; transition: stroke-dasharray 1500ms ease;',
          ]);
        });
      });
    },
  );
});
