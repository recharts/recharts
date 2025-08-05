import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { pageDataWithFillColor } from '../../storybook/stories/data';
import { RadialBar, RadialBarChart } from '../../src';
import { getRadialBarPaths } from '../helper/expectRadialBars';
import { assertNotNull } from '../helper/assertNotNull';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

const smallerData = pageDataWithFillColor.slice(0, 2);

function getRadialBarPathStrings(container: Element): ReadonlyArray<string> {
  return getRadialBarPaths(container).map(bar => bar.d);
}

async function expectAnimatedRadialBarPaths(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPaths = getRadialBarPathStrings(container);

  const pathsDuringAnimation: Array<ReadonlyArray<string>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPaths = getRadialBarPathStrings(container);
    pathsDuringAnimation.push(currentPaths);

    initialPaths.forEach((initial, index) => {
      expect(currentPaths[index]).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  const finalPaths = getRadialBarPathStrings(container);
  finalPaths.forEach((final, index) => {
    expect(final).not.toBe(initialPaths[index]);
  });

  pathsDuringAnimation.push(finalPaths);

  expect(pathsDuringAnimation).toHaveLength(steps);

  return pathsDuringAnimation;
}

describe('RadialBar animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={smallerData}>
        <RadialBar dataKey="uv" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should render all bars without animation', () => {
      const { container } = renderTestCase();
      const expected = [
        'M 269.8,200 A 69.8,69.8,0, 1,0, 269.79999998936887,200.00121823981783 L 207.79999999881198,200.00013613568166 A 7.8,7.8,0, 1,1, 207.8,200 Z',
        'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4480933913647,320.59628242935446 L 249.60383229349858,270.00785542921926 A 85.8,85.8,0, 1,1, 285.8,200 Z',
      ];
      expect(getRadialBarPathStrings(container)).toEqual(expected);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={smallerData}>
        <RadialBar dataKey="uv" isAnimationActive onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd} />
        {children}
      </RadialBarChart>
    ));

    it('should render paths with animation', async () => {
      const { container, animationManager } = renderTestCase();
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 131.21257345858842,188.15390571496638 L 192.3131529079798,198.67622442087017 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 79.86486981496763,113.90475915925825 L 130.2598500008405,150.0204894172149 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 204.195234652005,269.67381148045956 L 200.46880845681432,207.78589870412011 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 108.82624973282272,316.3279298458388 L 147.07234253772793,267.5300161080715 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 259.0019191142576,237.29361260101533 L 206.59333766606318,204.16748106429685 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 220.38805430372406,346.3870460174274 L 211.8355552047329,284.97976013731574 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.2789081443424,208.5131008644187 L 207.74176910495518,200.9513207269694 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 272.50599845012084,328.79332354105577 L 242.09076229377789,274.76635426131656 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.79999998936887,200.00121823981783 L 207.79999999881198,200.00013613568166 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4480933913647,320.59628242935446 L 249.60383229349858,270.00785542921926 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
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
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar dataKey={dataKey} isAnimationActive />
            {children}
          </RadialBarChart>
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

    it('should animate the bar paths', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 211.19337685229613,268.8966495168124 L 201.2508358087093,207.69905252480137 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 329.48768816499864,271.2585336200801 L 275.16944279131855,241.36659123547273 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 155.3694718051256,253.66708444704744 L 195.0126343851,205.99718135654686 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 343.92624748550867,233.61659240226635 L 283.5512316255524,219.5149095271614 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 136.48844281983716,228.9537925762914 L 192.9027199712712,203.2355240987833 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.25863269752153,212.63863505511765 L 285.48572858895363,207.33690722414812 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.85646560417115,215.11617412060633 L 192.38510647152629,201.6891999733629 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.77451267634615,202.74470458672843 L 285.78520424648514,201.59334001042828 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.09463332404022,211.1395890072987 L 192.29997335139706,201.24482513262078 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.7999999774888,200.00257959663432 L 285.7999999869319,200.00149749249815 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });

  describe('when the RadialBar has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar key={dataKey} dataKey={dataKey} isAnimationActive />
            {children}
          </RadialBarChart>
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
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 200.66178535990568,130.20313731880628 L 200.0739530917946,192.2003505886345 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 54.34410253838638,174.9161499236681 L 115.44468198777776,185.43846862957187 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 143.74748047435656,158.67574505188142 L 193.71390182951262,195.38210331525323 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 208.88331922014817,347.53279852166077 L 205.15689302495747,285.64488574532135 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 130.84390711697887,190.54088708414204 L 192.27195523656783,198.94296445925943 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 324.93529577488925,278.96842324398375 L 272.52671432669484,245.84229170726525 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 130.52155909724496,206.69225296311885 L 192.23593353808755,200.7478448869961 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 346.69659919389414,218.02630813411292 L 285.15946015450686,210.46452799666366 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 131.09463332404022,211.1395890072987 L 192.29997335139706,201.24482513262078 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 347.7999999774888,200.00257959663432 L 285.7999999869319,200.00149749249815 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData;
    const data2 = pageDataWithFillColor.slice(3, 6);

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(data1);
      const changeData = () => setData(prevData => (prevData === data1 ? data2 : data1));
      return (
        <div>
          <button type="button" onClick={changeData}>
            Change data
          </button>
          <RadialBarChart width={400} height={400} data={data}>
            <RadialBar dataKey="uv" isAnimationActive />
            {children}
          </RadialBarChart>
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

    it('should animate from 2 to 3 bars', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadialBarPaths(container, animationManager)).toEqual([
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 245.74052959896923,206.4995347530281 L 205.1482847167671,200.73154936614168 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 286.0330918660546,247.3449797123942 L 250.11296186087904,227.57772749031517 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 292.72547985199947,81.83898533688684 L 267.41426364739243,114.09332356050626 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 245.01751984175118,210.3857068751982 L 205.06690699517546,201.1689540205851 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 295.62623479754365,222.3352461021824 L 255.7008210837016,213.00993968477425 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 217.4384567669171,50.815750745635484 L 212.6782921367999,91.5384819002889 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.50487142456655,212.39985562346592 L 205.00920630752697,201.39565474549832 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 297.8403094106672,208.39725279034204 L 256.9904857259691,204.89127148276543 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 174.25864035150607,52.022223278470335 L 181.2852431849831,92.41562438088522 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.23507490068687,213.33034690211116 L 204.9788395992115,201.50038536560558 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 298.18306593245734,201.8236129256883 L 257.1901361643234,201.06222667361885 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 154.64554613849813,56.81126610335261 L 167.02592302479357,95.89740518299669 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
        [
          'M 246.2,200 A 46.2,46.2,0, 1,0, 244.15689543087166,213.58707422173984 L 204.9700401783665,201.52928108123479 A 5.2,5.2,0, 1,1, 205.2,200 Z',
          'M 298.2,200 A 98.2,98.2,0, 1,0, 298.1999999850433,200.00171391332537 L 257.19999999128794,200.0009983283321 A 57.2,57.2,0, 1,1, 257.2,200 Z',
          'M 350.2,200 A 150.2,150.2,0, 0,0, 149.3428403409397,58.60023983303057 L 163.17069351019052,97.19804387328188 A 109.2,109.2,0, 0,1, 309.2,200 Z',
        ],
      ]);
    });
  });

  describe('when the radial bar element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <RadialBarChart width={400} height={400} data={smallerData}>
            <RadialBar dataKey="uv" isAnimationActive hide={!isVisible} />
            {children}
          </RadialBarChart>
        </div>
      );
    });

    it('should not crash when the bar hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getRadialBarPaths(container)).toHaveLength(0);
    });

    it('should restart the animation from the beginning when the bar appears again', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getRadialBarPaths(container)).toHaveLength(0);
      act(() => button.click());
      const paths = await expectAnimatedRadialBarPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 269.8,200 A 69.8,69.8,0, 0,0, 131.21257345858842,188.15390571496638 L 192.3131529079798,198.67622442087017 A 7.8,7.8,0, 0,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 0,0, 79.86486981496763,113.90475915925825 L 130.2598500008405,150.0204894172149 A 85.8,85.8,0, 0,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 204.195234652005,269.67381148045956 L 200.46880845681432,207.78589870412011 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 108.82624973282272,316.3279298458388 L 147.07234253772793,267.5300161080715 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 259.0019191142576,237.29361260101533 L 206.59333766606318,204.16748106429685 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 220.38805430372406,346.3870460174274 L 211.8355552047329,284.97976013731574 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.2789081443424,208.5131008644187 L 207.74176910495518,200.9513207269694 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 272.50599845012084,328.79332354105577 L 242.09076229377789,274.76635426131656 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
        [
          'M 269.8,200 A 69.8,69.8,0, 1,0, 269.79999998936887,200.00121823981783 L 207.79999999881198,200.00013613568166 A 7.8,7.8,0, 1,1, 207.8,200 Z',
          'M 347.8,200 A 147.8,147.8,0, 1,0, 285.4480933913647,320.59628242935446 L 249.60383229349858,270.00785542921926 A 85.8,85.8,0, 1,1, 285.8,200 Z',
        ],
      ]);
    });
  });
});
