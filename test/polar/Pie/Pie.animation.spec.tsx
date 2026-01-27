import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { PageData } from '../../_data';
import { Pie, PieChart } from '../../../src';
import {
  expectPieSectors,
  selectPieSectors,
  getPieSectorAngles,
  expectPieSectorAngles,
} from '../../helper/expectPieSectors';
import { assertNotNull } from '../../helper/assertNotNull';
import { trim } from '../../helper/trim';
import { MockAnimationManager } from '../../animation/MockProgressAnimationManager';

const smallerData = PageData.slice(0, 3);

/**
 * This is what we expect the final sector paths to be after the animation.
 */
const finalSectorPaths = [
  { d: 'M 86,50 A 36,36,0, 0,0, 32,18.8231 L 50,50 Z' },
  { d: 'M 32,18.8231 A 36,36,0, 0,0, 32,81.1769 L 50,50 Z' },
  { d: 'M 32,81.1769 A 36,36,0, 0,0, 86,50 L 50,50 Z' },
];

async function expectAnimatedPiePaths(
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

async function expectAnimatedPieAngles(
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
        { endAngle: 120, startAngle: 0 },
        { endAngle: 240, startAngle: 120 },
        { endAngle: 0, startAngle: 240 },
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

    it('should call onAnimationEnd callback when the animation ends', async () => {
      const { animationManager } = renderTestCase();

      expect(onAnimationEnd).not.toHaveBeenCalled();
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
          'M 86,50 A 36,36,0, 0,0, 69.7423,19.8961 L 50,50 Z',
          'M 69.7423,19.8961 A 36,36,0, 0,0, 35.6532,16.9823 L 50,50 Z',
          'M 35.6532,16.9823 A 36,36,0, 0,0, 14.5223,43.8902 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 49.2784,14.0072 L 50,50 Z',
          'M 49.2784,14.0072 A 36,36,0, 0,0, 14.0289,51.443 L 50,50 Z',
          'M 14.0289,51.443 A 36,36,0, 0,0, 52.1638,85.9349 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 38.1402,16.0096 L 50,50 Z',
          'M 38.1402,16.0096 A 36,36,0, 0,0, 21.8141,72.3955 L 50,50 Z',
          'M 21.8141,72.3955 A 36,36,0, 0,0, 80.4308,69.2345 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 33.2853,18.1156 L 50,50 Z',
          'M 33.2853,18.1156 A 36,36,0, 0,0, 29.5212,79.6078 L 50,50 Z',
          'M 29.5212,79.6078 A 36,36,0, 0,0, 85.7312,54.3908 L 50,50 Z',
        ],
        [
          'M 86,50 A 36,36,0, 0,0, 32,18.8231 L 50,50 Z',
          'M 32,18.8231 A 36,36,0, 0,0, 32,81.1769 L 50,50 Z',
          'M 32,81.1769 A 36,36,0, 0,0, 86,50 L 50,50 Z',
        ],
      ]);
    });

    it('should render sectors with animated angles', async () => {
      const { container, animationManager } = renderTestCase();

      const angles = await expectAnimatedPieAngles(container, animationManager, 4);

      expect(angles).toEqual([
        [
          { endAngle: 67.2973, startAngle: 0 },
          { endAngle: 134.5946, startAngle: 67.2973 },
          { endAngle: 201.8918, startAngle: 134.5946 },
        ],
        [
          { endAngle: 101.7302, startAngle: 0 },
          { endAngle: 203.4603, startAngle: 101.7302 },
          { endAngle: 305.1906, startAngle: 203.4603 },
        ],
        [
          { endAngle: 116.2289, startAngle: 0 },
          { endAngle: 232.4579, startAngle: 116.2289 },
          { endAngle: 348.6866, startAngle: 232.4579 },
        ],
        [
          { endAngle: 120, startAngle: 0 },
          { endAngle: 240, startAngle: 120 },
          { endAngle: 0, startAngle: 240 },
        ],
      ]);
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState<'amt' | 'pv'>('amt');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'amt' ? 'pv' : 'amt'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <PieChart width={100} height={100}>
            <Pie
              data={smallerData}
              dataKey={dataKey}
              isAnimationActive
              onAnimationStart={onAnimationStart}
              onAnimationEnd={onAnimationEnd}
            />
            {children}
          </PieChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('interaction after initial animation completes', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        // The test begins initially with the 'amt' dataKey, so we need to run the animation to completion.
        await animationManager.completeAnimation();

        // change the dataKey prop
        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should animate the pie sector angles', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const angles = await expectAnimatedPieAngles(container, animationManager, 3);
        expect(angles).toEqual([
          [
            { endAngle: 108.593, startAngle: 0 },
            { endAngle: 280.8398, startAngle: 108.593 },
            { endAngle: 0, startAngle: 280.8398 },
          ],
          [
            { endAngle: 104.2775, startAngle: 0 },
            { endAngle: 296.2907, startAngle: 104.2775 },
            { endAngle: 0, startAngle: 296.2907 },
          ],
          [
            { endAngle: 103.2874, startAngle: 0 },
            { endAngle: 299.835, startAngle: 103.2874 },
            { endAngle: 0, startAngle: 299.835 },
          ],
        ]);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
        // The test begins initially with the 'amt' dataKey, so we let the animation run half way
        await animationManager.setAnimationProgress(0.5);

        // change the dataKey prop
        const button = container.querySelector('button');
        assertNotNull(button);
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should animate the pie sector angles from the intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const angles = await expectAnimatedPieAngles(container, animationManager, 3);
        expect(angles).toEqual([
          // The Pie is 337/360 rendered when the dataKey changes, and it continues from there
          [
            { endAngle: 101.0656, startAngle: 0 },
            { endAngle: 265.785, startAngle: 101.0656 },
            { endAngle: 337.4176, startAngle: 265.785 },
          ],
          [
            { endAngle: 102.8729, startAngle: 0 },
            { endAngle: 293.4815, startAngle: 102.8729 },
            { endAngle: 355.7862, startAngle: 293.4815 },
          ],
          [
            { endAngle: 103.2874, startAngle: 0 },
            { endAngle: 299.835, startAngle: 103.2874 },
            { endAngle: 0, startAngle: 299.835 },
          ],
        ]);
      });
    });
  });

  describe('when the Pie has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState<'amt' | 'pv'>('amt');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'amt' ? 'pv' : 'amt'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <PieChart width={100} height={100}>
            <Pie
              key={dataKey}
              data={smallerData}
              dataKey={dataKey}
              isAnimationActive
              onAnimationStart={onAnimationStart}
              onAnimationEnd={onAnimationEnd}
            />
            {children}
          </PieChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      // The test begins initially with the 'amt' dataKey, so we need to run the animation to completion.
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

      expectPieSectors(container, []);

      const angles = await expectAnimatedPieAngles(container, animationManager, 3);
      expect(angles).toEqual([
        [
          { endAngle: 70.4979, startAngle: 0 },
          { endAngle: 204.6496, startAngle: 70.4979 },
          { endAngle: 245.7145, startAngle: 204.6496 },
        ],
        [
          { endAngle: 97.1692, startAngle: 0 },
          { endAngle: 282.0742, startAngle: 97.1692 },
          { endAngle: 338.6753, startAngle: 282.0742 },
        ],
        [
          { endAngle: 103.2874, startAngle: 0 },
          { endAngle: 299.835, startAngle: 103.2874 },
          { endAngle: 0, startAngle: 299.835 },
        ],
      ]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData.slice(0, 2);
    const data2 = smallerData;

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
          <PieChart width={100} height={100}>
            <Pie data={data} dataKey="amt" isAnimationActive />
            {children}
          </PieChart>
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

      it('should animate from 2 to 3 sectors', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const angles = await expectAnimatedPieAngles(container, animationManager, 3);
        expect(angles).toEqual([
          [
            { endAngle: 139.0477, startAngle: 0 },
            { endAngle: 278.0953, startAngle: 139.0477 },
            { endAngle: 0.0002, startAngle: 278.0953 },
          ],
          [
            { endAngle: 123.5542, startAngle: 0 },
            { endAngle: 247.1082, startAngle: 123.5542 },
            { endAngle: 0, startAngle: 247.1082 },
          ],
          [
            { endAngle: 120, startAngle: 0 },
            { endAngle: 240, startAngle: 120 },
            { endAngle: 0, startAngle: 240 },
          ],
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

      it('should animate from 2 to 3 sectors from the intermediate state', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);

        const angles = await expectAnimatedPieAngles(container, animationManager, 3);
        expect(angles).toEqual([
          [
            { endAngle: 127.7564, startAngle: 0 },
            { endAngle: 255.5128, startAngle: 127.7564 },
            { endAngle: 337.4176, startAngle: 255.5128 },
          ],
          [
            { endAngle: 121.4473, startAngle: 0 },
            { endAngle: 242.8946, startAngle: 121.4473 },
            { endAngle: 355.7864, startAngle: 242.8946 },
          ],
          [
            { endAngle: 120, startAngle: 0 },
            { endAngle: 240, startAngle: 120 },
            { endAngle: 0, startAngle: 240 },
          ],
        ]);
      });
    });
  });

  describe('when the pie element hides during the animation', () => {
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
          <PieChart width={100} height={100}>
            <Pie data={smallerData} dataKey="amt" isAnimationActive hide={!isVisible} />
            {children}
          </PieChart>
        </div>
      );
    });

    it('should not crash when the pie hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.3);

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      expectPieSectors(container, []);
    });

    it('should restart the animation from the beginning when the pie appears again', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.3);

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      expectPieSectors(container, []);

      act(() => {
        button.click();
      });

      expectPieSectors(container, []);

      const angles = await expectAnimatedPieAngles(container, animationManager, 3);
      expect(angles).toEqual([
        [
          { endAngle: 81.9049, startAngle: 0 },
          { endAngle: 163.8098, startAngle: 81.9049 },
          { endAngle: 245.7147, startAngle: 163.8098 },
        ],
        [
          { endAngle: 112.8918, startAngle: 0 },
          { endAngle: 225.7836, startAngle: 112.8918 },
          { endAngle: 338.6755, startAngle: 225.7836 },
        ],
        [
          { endAngle: 120, startAngle: 0 },
          { endAngle: 240, startAngle: 120 },
          { endAngle: 0, startAngle: 240 },
        ],
      ]);
    });
  });
});
