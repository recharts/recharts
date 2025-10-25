import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Funnel, FunnelChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { PageData } from '../_data';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

const smallerData = PageData.slice(0, 2);

function getFunnelPaths(container: Element): ReadonlyArray<SVGPathElement> {
  return Array.from(container.querySelectorAll('.recharts-funnel-trapezoid path'));
}

function getFunnelPathStrings(container: Element): ReadonlyArray<string | null> {
  return getFunnelPaths(container).map(path => path.getAttribute('d'));
}

async function expectAnimatedFunnelPaths(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string | null>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPaths = getFunnelPathStrings(container);

  const pathsDuringAnimation: Array<ReadonlyArray<string | null>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPaths = getFunnelPathStrings(container);
    pathsDuringAnimation.push(currentPaths);

    initialPaths.forEach((initial, index) => {
      expect(currentPaths[index]).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  const finalPaths = getFunnelPathStrings(container);
  finalPaths.forEach((final, index) => {
    expect(final).not.toBe(initialPaths[index]);
  });

  pathsDuringAnimation.push(finalPaths);

  expect(pathsDuringAnimation).toHaveLength(steps);

  return pathsDuringAnimation;
}

describe('Funnel animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <FunnelChart width={500} height={300}>
        <Funnel data={smallerData} dataKey="uv" isAnimationActive={false} />
        {children}
      </FunnelChart>
    ));

    it('should render all trapezoids without animation', () => {
      const { container } = renderTestCase();
      const expected = [
        'M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z',
        'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z',
      ];
      expect(getFunnelPathStrings(container)).toEqual(expected);
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <FunnelChart width={500} height={300}>
        <Funnel
          data={smallerData}
          dataKey="uv"
          isAnimationActive
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        />
        {children}
      </FunnelChart>
    ));

    it('should render paths with animation', async () => {
      const { container, animationManager } = renderTestCase();
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 134.1498705660425,43.21781884097176L 365.8501294339575,43.21781884097176L 336.8875970754681,111.78218115902824L 163.1124029245318,111.78218115902824L 134.1498705660425,43.21781884097176 Z',
          'M 163.11240292453186,188.21781884097174L 336.88759707546814,188.21781884097174L 250,256.78218115902826L 250,256.78218115902826L 163.11240292453186,188.21781884097174 Z',
        ],
        [
          'M 63.9049674493578,22.43106179623853L 436.0950325506422,22.43106179623853L 389.57127441298167,132.56893820376146L 110.42872558701839,132.56893820376146L 63.9049674493578,22.43106179623853 Z',
          'M 110.42872558701836,167.43106179623854L 389.57127441298167,167.43106179623854L 250.00000000000003,277.5689382037615L 250.00000000000003,277.5689382037615L 110.42872558701836,167.43106179623854 Z',
        ],
        [
          'M 26.979181004011792,11.504043358330023L 473.0208189959882,11.504043358330023L 417.26561424699116,143.49595664166998L 82.73438575300884,143.49595664166998L 26.979181004011792,11.504043358330023 Z',
          'M 82.73438575300884,156.50404335833002L 417.26561424699116,156.50404335833002L 250,288.49595664167L 250,288.49595664167L 82.73438575300884,156.50404335833002 Z',
        ],
        [
          'M 9.767615260791217,6.4108249241116795L 490.2323847392088,6.4108249241116795L 430.1742885544066,148.5891750758883L 69.82571144559341,148.5891750758883L 9.767615260791217,6.4108249241116795 Z',
          'M 69.82571144559341,151.4108249241117L 430.1742885544066,151.4108249241117L 250,293.5891750758883L 250,293.5891750758883L 69.82571144559341,151.4108249241117 Z',
        ],
        ['M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z', 'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z'],
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
          <FunnelChart width={500} height={300}>
            <Funnel data={smallerData} dataKey={dataKey} isAnimationActive />
            {children}
          </FunnelChart>
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

    it('should animate the trapezoid paths', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 59.96983369463234,5L 440.03016630536763,5L 462.71253235848934,150L 37.2874676415106,150L 59.96983369463234,5 Z',
          'M 37.287467641510624,150L 462.71253235848934,150L 249.99999999999997,295L 249.99999999999997,295L 37.287467641510624,150 Z',
        ],
        [
          'M 93.30040191312494,5L 406.6995980868751,5L 480.27375813766054,150L 19.726241862339464,150L 93.30040191312494,5 Z',
          'M 19.72624186233945,150L 480.27375813766054,150L 250,295L 250,295L 19.72624186233945,150 Z',
        ],
        [
          'M 110.82135203948027,5L 389.1786479605198,5L 489.50520474899713,150L 10.49479525100304,150L 110.82135203948027,5 Z',
          'M 10.494795251002948,150L 489.505204748997,150L 249.99999999999997,295L 249.99999999999997,295L 10.494795251002948,150 Z',
        ],
        [
          'M 118.98808358438043,5L 381.01191641561957,5L 493.8080961848022,150L 6.191903815197804,150L 118.98808358438043,5 Z',
          'M 6.191903815197804,150L 493.8080961848022,150L 250,295L 250,295L 6.191903815197804,150 Z',
        ],
        [
          'M 121.25027370264944,5L 378.7497262973506,5L 495,150L 5,150L 121.25027370264944,5 Z',
          'M 5,150L 495,150L 250,295L 250,295L 5,150 Z',
        ],
      ]);
    });
  });

  describe('when the Funnel has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel key={dataKey} data={smallerData} dataKey={dataKey} isAnimationActive />
            {children}
          </FunnelChart>
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
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 189.11970426067484,43.21781884097176L 310.88029573932516,43.21781884097176L 365.8501294339575,111.78218115902824L 134.14987056604247,111.78218115902824L 189.11970426067484,43.21781884097176 Z',
          'M 134.1498705660425,188.21781884097174L 365.8501294339575,188.21781884097174L 249.99999999999997,256.78218115902826L 249.99999999999997,256.78218115902826L 134.1498705660425,188.21781884097174 Z',
        ],
        [
          'M 152.20536936248277,22.43106179623853L 347.7946306375173,22.43106179623853L 436.09503255064226,132.56893820376146L 63.904967449357855,132.56893820376146L 152.20536936248277,22.43106179623853 Z',
          'M 63.9049674493578,167.43106179623854L 436.0950325506422,167.43106179623854L 250,277.5689382037615L 250,277.5689382037615L 63.9049674493578,167.43106179623854 Z',
        ],
        [
          'M 132.80053304349207,11.504043358330023L 367.19946695650793,11.504043358330023L 473.0208189959882,143.49595664166998L 26.979181004011764,143.49595664166998L 132.80053304349207,11.504043358330023 Z',
          'M 26.979181004011792,156.50404335833002L 473.0208189959882,156.50404335833002L 249.99999999999997,288.49595664167L 249.99999999999997,288.49595664167L 26.979181004011792,156.50404335833002 Z',
        ],
        [
          'M 123.75569884517165,6.4108249241116795L 376.2443011548284,6.4108249241116795L 490.2323847392088,148.5891750758883L 9.767615260791217,148.5891750758883L 123.75569884517165,6.4108249241116795 Z',
          'M 9.767615260791217,151.4108249241117L 490.2323847392088,151.4108249241117L 250,293.5891750758883L 250,293.5891750758883L 9.767615260791217,151.4108249241117 Z',
        ],
        [
          'M 121.25027370264944,5L 378.7497262973506,5L 495,150L 5,150L 121.25027370264944,5 Z',
          'M 5,150L 495,150L 250,295L 250,295L 5,150 Z',
        ],
      ]);
    });
  });

  describe('tests that change data array', () => {
    const data1 = smallerData;
    const data2 = PageData.slice(3, 6);

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(data1);
      const changeData = () => setData(prevData => (prevData === data1 ? data2 : data1));
      return (
        <div>
          <button type="button" onClick={changeData}>
            Change data
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel data={data} dataKey="uv" isAnimationActive />
            {children}
          </FunnelChart>
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

    it('should animate from 2 to 3 trapezoids', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedFunnelPaths(container, animationManager)).toEqual([
        [
          'M 37.504712574995274,5L 462.49528742500473,5L 462.7125323584894,127.14521256064785L 37.28746764151066,127.14521256064785L 37.504712574995274,5 Z',
          'M 37.287467641510624,127.14521256064785L 462.71253235848934,127.14521256064785L 328.7614189317193,249.2904251212957L 171.23858106828067,249.2904251212957L 37.287467641510624,127.14521256064785 Z',
          'M 171.2385810682807,223.81187922731453L 328.7614189317193,223.81187922731453L 249.99999999999997,269.52145410601884L 249.99999999999997,269.52145410601884L 171.2385810682807,223.81187922731453 Z',
        ],
        [
          'M 57.21371416888522,5L 442.7862858311147,5L 480.2737581376605,113.2873745308257L 19.726241862339407,113.2873745308257L 57.21371416888522,5 Z',
          'M 19.72624186233945,113.2873745308257L 480.27375813766054,113.2873745308257L 376.5178458707603,221.5747490616514L 123.48215412923963,221.5747490616514L 19.72624186233945,113.2873745308257 Z',
          'M 123.48215412923966,209.95404119749236L 376.5178458707603,209.95404119749236L 249.99999999999997,283.37929213584096L 249.99999999999997,283.37929213584096L 123.48215412923966,209.95404119749236 Z',
        ],
        [
          'M 67.57418662477366,5L 432.4258133752263,5L 489.505204748997,106.00269557222002L 10.494795251002927,106.00269557222002L 67.57418662477366,5 Z',
          'M 10.494795251002948,106.00269557222002L 489.505204748997,106.00269557222002L 401.6220675907977,207.00539114444004L 98.37793240920223,207.00539114444004L 10.494795251002948,106.00269557222002 Z',
          'M 98.37793240920226,202.6693622388867L 401.62206759079777,202.6693622388867L 250.00000000000003,290.66397109444665L 250.00000000000003,290.66397109444665L 98.37793240920226,202.6693622388867 Z',
        ],
        [
          'M 72.40333096999383,5L 427.5966690300061,5L 493.80809618480214,102.60721661607445L 6.1919038151977475,102.60721661607445L 72.40333096999383,5 Z',
          'M 6.191903815197804,102.60721661607445L 493.8080961848022,102.60721661607445L 413.32345581190816,200.2144332321489L 86.6765441880919,200.2144332321489L 6.191903815197804,102.60721661607445 Z',
          'M 86.67654418809187,199.27388328274114L 413.32345581190816,199.27388328274114L 250.00000000000003,294.0594500505922L 250.00000000000003,294.0594500505922L 86.67654418809187,199.27388328274114 Z',
        ],
        [
          'M 73.7410071942446,5L 426.2589928057554,5L 495,101.66666666666667L 5,101.66666666666667L 73.7410071942446,5 Z',
          'M 5,101.66666666666667L 495,101.66666666666667L 416.5647482014389,198.33333333333334L 83.43525179856118,198.33333333333334L 5,101.66666666666667 Z',
          'M 83.43525179856115,198.33333333333334L 416.5647482014389,198.33333333333334L 250.00000000000003,295L 250.00000000000003,295L 83.43525179856115,198.33333333333334 Z',
        ],
      ]);
    });
  });

  describe('when the funnel element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          <FunnelChart width={500} height={300}>
            <Funnel data={smallerData} dataKey="uv" isAnimationActive hide={!isVisible} />
            {children}
          </FunnelChart>
        </div>
      );
    });

    it('should not crash when the funnel hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getFunnelPaths(container)).toHaveLength(0);
    });

    it('should restart the animation from the beginning when the funnel appears again', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.setAnimationProgress(0.3);
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getFunnelPaths(container)).toHaveLength(0);
      act(() => button.click());
      const paths = await expectAnimatedFunnelPaths(container, animationManager);
      expect(paths).toEqual([
        [
          'M 134.1498705660425,43.21781884097176L 365.8501294339575,43.21781884097176L 336.8875970754681,111.78218115902824L 163.1124029245318,111.78218115902824L 134.1498705660425,43.21781884097176 Z',
          'M 163.11240292453186,188.21781884097174L 336.88759707546814,188.21781884097174L 250,256.78218115902826L 250,256.78218115902826L 163.11240292453186,188.21781884097174 Z',
        ],
        [
          'M 63.9049674493578,22.43106179623853L 436.0950325506422,22.43106179623853L 389.57127441298167,132.56893820376146L 110.42872558701839,132.56893820376146L 63.9049674493578,22.43106179623853 Z',
          'M 110.42872558701836,167.43106179623854L 389.57127441298167,167.43106179623854L 250.00000000000003,277.5689382037615L 250.00000000000003,277.5689382037615L 110.42872558701836,167.43106179623854 Z',
        ],
        [
          'M 26.979181004011792,11.504043358330023L 473.0208189959882,11.504043358330023L 417.26561424699116,143.49595664166998L 82.73438575300884,143.49595664166998L 26.979181004011792,11.504043358330023 Z',
          'M 82.73438575300884,156.50404335833002L 417.26561424699116,156.50404335833002L 250,288.49595664167L 250,288.49595664167L 82.73438575300884,156.50404335833002 Z',
        ],
        [
          'M 9.767615260791217,6.4108249241116795L 490.2323847392088,6.4108249241116795L 430.1742885544066,148.5891750758883L 69.82571144559341,148.5891750758883L 9.767615260791217,6.4108249241116795 Z',
          'M 69.82571144559341,151.4108249241117L 430.1742885544066,151.4108249241117L 250,293.5891750758883L 250,293.5891750758883L 69.82571144559341,151.4108249241117 Z',
        ],
        ['M 5,5L 495,5L 433.75,150L 66.25,150L 5,5 Z', 'M 66.25,150L 433.75,150L 250,295L 250,295L 66.25,150 Z'],
      ]);
    });
  });
});
