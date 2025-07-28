import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
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

    it('should call onAnimationEnd callback when the animation ends', async () => {
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

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('amt');
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
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
            { startAngle: -0, endAngle: 108.59304689351539 },
            { startAngle: 108.59304689351539, endAngle: 280.8398295340321 },
            { startAngle: 280.8398295340321, endAngle: 360 },
          ],
          [
            { startAngle: -0, endAngle: 104.27747841257502 },
            { startAngle: 104.27747841257502, endAngle: 296.2906760009867 },
            { startAngle: 296.2906760009867, endAngle: 360 },
          ],
          [
            { startAngle: -0, endAngle: 103.28750747160791 },
            { startAngle: 103.28750747160791, endAngle: 299.8350268977884 },
            { startAngle: 299.8350268977884, endAngle: 360 },
          ],
        ]);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
          [
            // The Pie is 337/360 rendered when the dataKey changes, and it continues from there
            { startAngle: -0, endAngle: 101.06557642178599 },
            { startAngle: 101.06557642178599, endAngle: 265.78488859057325 },
            { startAngle: 265.78488859057325, endAngle: 337.41758858481177 },
          ],
          [
            { startAngle: -0, endAngle: 102.87291302658812 },
            { startAngle: 102.87291302658812, endAngle: 293.481545229013 },
            { startAngle: 293.481545229013, endAngle: 355.78630384203933 },
          ],
          [
            { startAngle: -0, endAngle: 103.28750747160791 },
            { startAngle: 103.28750747160791, endAngle: 299.8350268977884 },
            { startAngle: 299.8350268977884, endAngle: 360 },
          ],
        ]);
      });
    });
  });

  describe('when the Pie has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('amt');
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

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
          { startAngle: -0, endAngle: 70.49790761089213 },
          { startAngle: 70.49790761089213, endAngle: 204.64955096878555 },
          { startAngle: 204.64955096878555, endAngle: 245.71458215213022 },
        ],
        [
          { startAngle: -0, endAngle: 97.16923212829177 },
          { startAngle: 97.16923212829177, endAngle: 282.0741834324203 },
          { startAngle: 282.0741834324203, endAngle: 338.6752611471502 },
        ],
        [
          { startAngle: -0, endAngle: 103.28750747160791 },
          { startAngle: 103.28750747160791, endAngle: 299.8350268977884 },
          { startAngle: 299.8350268977884, endAngle: 360 },
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
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
            { startAngle: -0, endAngle: 139.0475696413116 },
            { startAngle: 139.0475696413116, endAngle: 278.0951392826232 },
            { startAngle: 278.0951392826232, endAngle: 360 },
          ],
          [
            { startAngle: -0, endAngle: 123.55412314214162 },
            { startAngle: 123.55412314214162, endAngle: 247.10824628428324 },
            { startAngle: 247.10824628428324, endAngle: 360 },
          ],
          [
            { startAngle: -0, endAngle: 120.00000000000001 },
            { startAngle: 120.00000000000001, endAngle: 240 },
            { startAngle: 240, endAngle: 360 },
          ],
        ]);
      });
    });

    describe('interaction in the middle of the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
            { startAngle: -0, endAngle: 127.75636393371754 },
            { startAngle: 127.75636393371754, endAngle: 255.51272786743505 },
            { startAngle: 255.51272786743505, endAngle: 337.4175885848118 },
          ],
          [
            { startAngle: -0, endAngle: 121.4472750631613 },
            { startAngle: 121.4472750631613, endAngle: 242.89455012632249 },
            { startAngle: 242.89455012632249, endAngle: 355.7863038420393 },
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
          { startAngle: -0, endAngle: 81.90486071737675 },
          { startAngle: 81.90486071737675, endAngle: 163.8097214347535 },
          { startAngle: 163.8097214347535, endAngle: 245.71458215213022 },
        ],
        [
          { startAngle: -0, endAngle: 112.89175371571675 },
          { startAngle: 112.89175371571675, endAngle: 225.7835074314335 },
          { startAngle: 225.7835074314335, endAngle: 338.6752611471502 },
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
