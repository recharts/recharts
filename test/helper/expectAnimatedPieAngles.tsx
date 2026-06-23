import { expect } from 'vitest';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertNotNull } from './assertNotNull';
import { getPieSectorAngles, selectPieSectors } from './expectPieSectors';

export async function expectAnimatedPieAngles(
  container: Element,
  animationManager: MockAnimationManager,
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
  const initialAttributes = Array.from(initialPieSectors).map(sector => ({
    fill: sector.getAttribute('fill'),
    stroke: sector.getAttribute('stroke'),
  }));

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
      const currentSector = currentPieSectors[index];
      expect(currentSector.getAttribute('fill')).toBe(initialAttributes[index].fill);
      expect(currentSector.getAttribute('stroke')).toBe(initialAttributes[index].stroke);
      if (index === 0) {
        // Because the pie grows from the same position, the start angle should remain the same for the first sector
        expect(current.startAngle).toBe(initial.startAngle);
      } else {
        // For all other sectors, the start angle should change
        expect(current.startAngle).not.toBe(initial.startAngle);
      }
      if (index !== currentAngles.length - 1) {
        /*
         * This is true for all sectors except the last one because the Pie is always a full circle.
         * During the initial animation the Pie "grows" from the center, so the end angle of the last sector
         * will indeed be different from the initial end angle,
         * but during the "rearrange angles" animation the end angle of the last sector
         * will always be 360 degrees, same as the initial end angle.
         */
        expect(current.endAngle).not.toBe(initial.endAngle);
      }
    });
  }

  await animationManager.completeAnimation();
  // Final check to ensure the animation completed
  const finalPieSectors = selectPieSectors(container);
  expect(finalPieSectors).toHaveLength(initialPieSectors.length);
  const finalAngles = getPieSectorAngles(finalPieSectors);
  finalAngles.forEach((final, index) => {
    const initial = initialAngles[index];
    const finalSector = finalPieSectors[index];
    expect(finalSector.getAttribute('fill')).toBe(initialAttributes[index].fill);
    expect(finalSector.getAttribute('stroke')).toBe(initialAttributes[index].stroke);
    if (index === 0) {
      // Because the pie grows from the same position, the start angle should remain the same for the first sector
      expect(final.startAngle).toBe(initial.startAngle);
    } else {
      // For all other sectors, the start angle should change
      expect(final.startAngle).not.toBe(initial.startAngle);
    }
    if (index !== finalAngles.length - 1) {
      /*
       * This is true for all sectors except the last one because the Pie is always a full circle.
       * During the initial animation the Pie "grows" from the center, so the end angle of the last sector
       * will indeed be different from the initial end angle,
       * but during the "rearrange angles" animation the end angle of the last sector
       * will always be 360 degrees, same as the initial end angle.
       */
      expect(final.endAngle).not.toBe(initial.endAngle);
    }
  });

  // Also, because the Pie is always a full circle, the end angle of the last sector should be 360 degrees
  expect(finalAngles[finalAngles.length - 1].endAngle).toBe(0);

  // collect the angles one last time, at the end of the animation
  anglesDuringAnimation.push(finalAngles);

  // Return the collected angles
  expect(anglesDuringAnimation).toHaveLength(steps);

  return anglesDuringAnimation;
}
