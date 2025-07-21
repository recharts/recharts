import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PageData } from '../_data';
import { Pie, PieChart } from '../../src';
import {
  expectPieSectors,
  selectPieSectors,
  getPieSectorAngles,
  expectPieSectorAngles,
} from '../helper/expectPieSectors';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertNotNull } from '../helper/assertNotNull';
import { trim } from '../helper/trim';

const smallerData = PageData.slice(0, 3);

/**
 * This is what we expect the final sector paths to be after the animation.
 */
const finalSectorPaths = [
  { d: 'M 86,50 A 36,36,0, 0,0, 32.00000000000001,18.823085463760208 L 50,50 Z' },
  { d: 'M 32.00000000000001,18.823085463760208 A 36,36,0, 0,0, 31.999999999999986,81.17691453623979 L 50,50 Z' },
  { d: 'M 31.999999999999986,81.17691453623979 A 36,36,0, 0,0, 86,50.00000000000001 L 50,50 Z' },
];

async function expectAnimatedPiePaths(
  container: Element,
  animationManager: MockProgressAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string>>> {
  assertNotNull(container);
  /*
   * Pie sectors at 0% progress do not render at all, so we
   * start from 0.1 so that the sectors have rendered a little bit.
   */
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPieSectors = selectPieSectors(container);
  const getD = (sector: Element) => trim(sector.getAttribute('d'));
  const initialPathDs = Array.from(initialPieSectors).map(getD);

  const pathDsDuringAnimation: string[][] = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPieSectors = selectPieSectors(container);
    const currentPathDs = Array.from(currentPieSectors).map(getD);
    pathDsDuringAnimation.push(currentPathDs);

    // Assert that all d attributes change
    initialPathDs.forEach((initial, index) => {
      const currentSector = currentPieSectors[index];
      expect(currentSector.getAttribute('d')).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  // Final check to ensure the animation completed
  const finalPieSectors = selectPieSectors(container);
  expect(finalPieSectors).toHaveLength(initialPieSectors.length);
  finalPieSectors.forEach((sector, index) => {
    expect(sector.getAttribute('d')).not.toBe(initialPathDs[index]);
  });

  // collect the path.d-s one last time, at the end of the animation
  const finalPathDs = Array.from(finalPieSectors).map(getD);
  pathDsDuringAnimation.push(finalPathDs);

  // Return the collected path.d-s
  expect(pathDsDuringAnimation).toHaveLength(steps);

  return pathDsDuringAnimation;
}

async function expectAnimatedPieAngles(
  container: Element,
  animationManager: MockProgressAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<{ startAngle: number; endAngle: number }>>> {
  assertNotNull(container);
  /*
   * Pie sectors at 0% progress do not render at all, so we
   * start from 0.1 so that the sectors have rendered a little bit.
   */
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPieSectors = selectPieSectors(container);
  const initialAngles = getPieSectorAngles(initialPieSectors);

  const anglesDuringAnimation: { startAngle: number; endAngle: number }[][] = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPieSectors = selectPieSectors(container);
    const currentAngles = getPieSectorAngles(currentPieSectors);
    anglesDuringAnimation.push(currentAngles);

    // Assert that all angles change
    initialAngles.forEach((initial, index) => {
      const current = currentAngles[index];
      if (index === 0) {
        // Because the pie grows from the same position, the start angle should remain the same for the first sector
        expect(current.startAngle).toBe(initial.startAngle);
      } else {
        // For all other sectors, the start angle should change
        expect(current.startAngle).not.toBe(initial.startAngle);
      }
      expect(current.endAngle).not.toBe(initial.endAngle);
    });
  }

  await animationManager.completeAnimation();
  // Final check to ensure the animation completed
  const finalPieSectors = selectPieSectors(container);
  expect(finalPieSectors).toHaveLength(initialPieSectors.length);
  const finalAngles = getPieSectorAngles(finalPieSectors);
  finalAngles.forEach((final, index) => {
    const initial = initialAngles[index];
    if (index === 0) {
      // Because the pie grows from the same position, the start angle should remain the same for the first sector
      expect(final.startAngle).toBe(initial.startAngle);
    } else {
      // For all other sectors, the start angle should change
      expect(final.startAngle).not.toBe(initial.startAngle);
    }
    expect(final.endAngle).not.toBe(initial.endAngle);
  });

  // Also, because the Pie is always a full circle, the end angle of the last sector should be 360 degrees
  expect(finalAngles[finalAngles.length - 1].endAngle).toBe(360);

  // collect the angles one last time, at the end of the animation
  anglesDuringAnimation.push(finalAngles);

  // Return the collected angles
  expect(anglesDuringAnimation).toHaveLength(steps);

  return anglesDuringAnimation;
}

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
          data={smallerData}
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
      expectPieSectorAngles(container, [
        { startAngle: -0, endAngle: 120.00000000000001 },
        { startAngle: 120.00000000000001, endAngle: 240 },
        { startAngle: 240, endAngle: 360 },
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
      <PieChart width={100} height={100}>
        <Pie
          data={smallerData}
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

    it('should render sectors with animation', async () => {
      const { container, animationManager } = renderTestCase();

      const pathDs = await expectAnimatedPiePaths(container, animationManager, 5);

      expect(pathDs).toEqual([
        [
          'M 86,50 A 36,36,0, 0,0, 69.74227604371825,19.896137513374992 L 50,50 Z',
          'M 69.74227604371825,19.896137513374992 A 36,36,0, 0,0, 35.65319241035398,16.98229093371748 L 50,50 Z',
          'M 35.65319241035398,16.98229093371748 A 36,36,0, 0,0, 14.522244190675977,43.890266557862304 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 49.278369605743315,14.007233371494145 L 50,50 Z',
          'M 49.278369605743315,14.007233371494145 A 36,36,0, 0,0, 14.028930579217501,51.4429707984732 L 50,50 Z',
          'M 14.028930579217501,51.4429707984732 A 36,36,0, 0,0, 52.16373133914299,85.93491709593903 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 38.140220777669974,16.00962435044901 L 50,50 Z',
          'M 38.140220777669974,16.00962435044901 A 36,36,0, 0,0, 21.814131289022832,72.39546393820763 L 50,50 Z',
          'M 21.814131289022832,72.39546393820763 A 36,36,0, 0,0, 80.43078922798387,69.23452798906231 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 33.28524849833249,18.11556677252199 L 50,50 Z',
          'M 33.28524849833249,18.11556677252199 A 36,36,0, 0,0, 29.52127320902757,79.60779878715586 L 50,50 Z',
          'M 29.52127320902757,79.60779878715586 A 36,36,0, 0,0, 85.73124202287002,54.390711047551186 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 32.00000000000001,18.823085463760208 L 50,50 Z',
          'M 32.00000000000001,18.823085463760208 A 36,36,0, 0,0, 31.999999999999986,81.17691453623979 L 50,50 Z',
          'M 31.999999999999986,81.17691453623979 A 36,36,0, 0,0, 86,50.00000000000001 L 50,50 Z',
        ],
      ]);
    });

    it('should render sectors with animated angles', async () => {
      const { container, animationManager } = renderTestCase();

      const angles = await expectAnimatedPieAngles(container, animationManager, 4);

      expect(angles).toEqual([
        [
          { startAngle: -0, endAngle: 67.29731279103035 },
          { startAngle: 67.29731279103035, endAngle: 134.5946255820607 },
          { startAngle: 134.5946255820607, endAngle: 201.89193837309108 },
        ],
        [
          { startAngle: -0, endAngle: 101.7302266741997 },
          { startAngle: 101.7302266741997, endAngle: 203.4604533483994 },
          { startAngle: 203.4604533483994, endAngle: 305.19068002259905 },
        ],
        [
          { startAngle: -0, endAngle: 116.2289291971026 },
          { startAngle: 116.2289291971026, endAngle: 232.45785839420515 },
          { startAngle: 232.45785839420515, endAngle: 348.6867875913077 },
        ],
        [
          { startAngle: -0, endAngle: 120.00000000000001 },
          { startAngle: 120.00000000000001, endAngle: 240 },
          { startAngle: 240, endAngle: 360 },
        ],
      ]);
    });
  });
});
