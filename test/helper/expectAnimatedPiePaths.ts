import { expect } from 'vitest';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertNotNull } from './assertNotNull';
import { selectPieSectors } from './expectPieSectors';
import { trim } from './trim';

export async function expectAnimatedPiePaths(
  container: Element,
  animationManager: MockAnimationManager,
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
  expect(initialPieSectors.length).toBeGreaterThan(0);
  const getD = (sector: Element) => {
    const trimmed = trim(sector.getAttribute('d'));
    assertNotNull(trimmed);
    return trimmed;
  };
  const initialPathDs = Array.from(initialPieSectors).map(getD);
  const initialAttributes = Array.from(initialPieSectors).map(sector => ({
    fill: sector.getAttribute('fill'),
    stroke: sector.getAttribute('stroke'),
  }));

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
      expect(trim(currentSector.getAttribute('d'))).not.toBe(initial);
      expect(currentSector.getAttribute('fill')).toBe(initialAttributes[index].fill);
      expect(currentSector.getAttribute('stroke')).toBe(initialAttributes[index].stroke);
    });
  }

  await animationManager.completeAnimation();
  // Final check to ensure the animation completed
  const finalPieSectors = selectPieSectors(container);
  expect(finalPieSectors).toHaveLength(initialPieSectors.length);
  finalPieSectors.forEach((sector, index) => {
    expect(trim(sector.getAttribute('d'))).not.toBe(initialPathDs[index]);
    expect(sector.getAttribute('fill')).toBe(initialAttributes[index].fill);
    expect(sector.getAttribute('stroke')).toBe(initialAttributes[index].stroke);
  });

  // collect the path.d-s one last time, at the end of the animation
  const finalPathDs = Array.from(finalPieSectors).map(getD);
  pathDsDuringAnimation.push(finalPathDs);

  // Return the collected path.d-s
  expect(pathDsDuringAnimation).toHaveLength(steps);

  return pathDsDuringAnimation;
}
