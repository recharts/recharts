import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PageData } from '../_data';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import {
  ExpectedRadarDot,
  expectRadarDots,
  expectRadarPolygons,
  getRadarDots,
  getRadarPolygons,
} from '../helper/expectRadarPolygons';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';

const RADAR_RADIUS = 40;
const CX = 50;
const CY = 50;

const smallerData = PageData.slice(0, 3);

function getDotRadius(dot: SVGCircleElement): number {
  const cx = parseFloat(dot.getAttribute('cx') || '0');
  const cy = parseFloat(dot.getAttribute('cy') || '0');
  return Math.sqrt((cx - CX) ** 2 + (cy - CY) ** 2);
}

function getPolygonPath(container: Element): string {
  const allPolygons = getRadarPolygons(container);
  if (allPolygons.length !== 1) {
    throw new Error(`Expected exactly one polygon, but found ${allPolygons.length}`);
  }
  const polygon = allPolygons[0];
  const d = polygon.getAttribute('d');
  if (!d) {
    throw new Error('Polygon does not have a "d" attribute or it is empty');
  }
  return d;
}

async function expectAnimatedRadarPolygons(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<string>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPath = getPolygonPath(container);

  const polygonsDuringAnimation: Array<string> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentPath = getPolygonPath(container);
    polygonsDuringAnimation.push(currentPath);
    expect(currentPath).not.toBe(initialPath);
  }

  await animationManager.completeAnimation();
  const finalPath = getPolygonPath(container);
  expect(finalPath).not.toBe(initialPath);

  polygonsDuringAnimation.push(finalPath);

  expect(polygonsDuringAnimation).toHaveLength(steps);

  return polygonsDuringAnimation;
}

function getRadarDotRadii(container: Element): ReadonlyArray<number> {
  const radarPoints = getRadarDots(container);
  return Array.from(radarPoints).map(getDotRadius);
}

async function expectAnimatedDotRadii(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<number>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialRadii = getRadarDotRadii(container);

  const radiiDuringAnimation: Array<ReadonlyArray<number>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentRadii = getRadarDotRadii(container);
    radiiDuringAnimation.push(currentRadii);

    initialRadii.forEach((initial, index) => {
      expect(currentRadii[index]).not.toBe(initial);
    });
  }

  await animationManager.completeAnimation();
  const finalRadii = getRadarDotRadii(container);
  finalRadii.forEach((final, index) => {
    expect(final).not.toBe(initialRadii[index]);
  });

  radiiDuringAnimation.push(finalRadii);

  expect(radiiDuringAnimation).toHaveLength(steps);

  return radiiDuringAnimation;
}

function getDotPosition(dot: SVGCircleElement): { cx: string; cy: string } {
  return {
    cx: dot.getAttribute('cx') || '',
    cy: dot.getAttribute('cy') || '',
  };
}

async function expectAnimatedRadarDots(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<ExpectedRadarDot>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialDots = getRadarDots(container).map(getDotPosition);

  const dotsDuringAnimation: Array<ReadonlyArray<ExpectedRadarDot>> = [];
  for (animationProgress += stepSize; animationProgress < 1; animationProgress += stepSize) {
    // eslint-disable-next-line no-await-in-loop
    await animationManager.setAnimationProgress(animationProgress);
    const currentDots = getRadarDots(container).map(getDotPosition);
    dotsDuringAnimation.push(currentDots);

    initialDots.forEach((initial, index) => {
      /*
       * When the dot is exactly at multiple of 90 degrees, the cx and cy may not change inbetween animation steps.
       * But definitely either cx or cy will change, so we check that at least one of them is different.
       */
      if (initial.cx === currentDots[index].cx && initial.cy === currentDots[index].cy) {
        throw new Error(
          `Dot at index ${index} did not change during animation step. Initial: ${JSON.stringify(initial)}, Current: ${JSON.stringify(currentDots[index])}`,
        );
      }
    });
  }

  await animationManager.completeAnimation();
  const finalDots = getRadarDots(container).map(getDotPosition);
  finalDots.forEach((final, index) => {
    // Same story here. One of the coordinates must change.
    if (final.cx === initialDots[index].cx && final.cy === initialDots[index].cy) {
      throw new Error(
        `Final dot at index ${index} did not change after animation. Initial: ${JSON.stringify(initialDots[index])}, Final: ${JSON.stringify(final)}`,
      );
    }
  });

  dotsDuringAnimation.push(finalDots);

  expect(dotsDuringAnimation).toHaveLength(steps);

  return dotsDuringAnimation;
}

describe('Radar animation', () => {
  const onAnimationStart = vi.fn();
  const onAnimationEnd = vi.fn();

  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
  });

  const renderRadarChart = (children: ReactNode) => (
    <RadarChart cx={CX} cy={CY} outerRadius={RADAR_RADIUS} width={100} height={100} data={smallerData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      {children}
    </RadarChart>
  );

  describe('with isAnimationActive=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) =>
      renderRadarChart(
        <Radar
          dataKey="pv"
          isAnimationActive={false}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
          dot
        >
          {children}
        </Radar>,
      ),
    );

    it('should render one path without animation', async () => {
      const { container } = renderTestCase();
      expectRadarPolygons(container, [
        {
          d: 'M50,34L76.3676,65.2233L41.9286,54.66L50,34Z',
          fill: null,
          fillOpacity: null,
        },
      ]);
    });

    it('should render dots without animation', async () => {
      const { container } = renderTestCase();
      expectRadarDots(container, [
        { cx: '50', cy: '34' },
        { cx: '76.36758679389021', cy: '65.22333333333333' },
        { cx: '41.92864323672903', cy: '54.66' },
      ]);
    });

    it('should render path at the final radius', () => {
      const { container } = renderTestCase();
      const radii = getRadarDotRadii(container);
      expect(radii.map(r => r.toFixed(2))).toEqual(['16.00', '30.45', '9.32']);
    });

    it('should not call animation start or end callbacks', () => {
      renderTestCase();
      expect(onAnimationStart).not.toHaveBeenCalled();
      expect(onAnimationEnd).not.toHaveBeenCalled();
    });
  });

  describe('initial animation with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) =>
      renderRadarChart(
        <Radar dot dataKey="amt" isAnimationActive onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd}>
          {children}
        </Radar>,
      ),
    );

    it('should render dots with initial animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '31.0857' },
          { cx: '66.3803', cy: '59.4572' },
          { cx: '33.6197', cy: '59.4572' },
        ],
        [
          { cx: '50', cy: '19.6171' },
          { cx: '76.3123', cy: '65.1914' },
          { cx: '23.6877', cy: '65.1914' },
        ],
        [
          { cx: '50', cy: '13.5884' },
          { cx: '81.5333', cy: '68.2058' },
          { cx: '18.4667', cy: '68.2058' },
        ],
        [
          { cx: '50', cy: '10.7784' },
          { cx: '83.9669', cy: '69.6108' },
          { cx: '16.0331', cy: '69.6108' },
        ],
        [
          { cx: '50', cy: '10' },
          { cx: '84.64101615137756', cy: '70' },
          { cx: '15.35898384862245', cy: '70' },
        ],
      ]);
    });

    it('should render points radii with animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [18.9143, 18.914355921627365, 18.91435592162736],
        [30.3829, 30.382820231999524, 30.38282023199953],
        [36.4116, 36.41153886517294, 36.41153886517294],
        [39.2216, 39.221598287805655, 39.221598287805655],
        [40, 40.00000000000001, 40],
      ]);
    });

    it('should render polygons with animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,31.0857L66.3803,59.4572L33.6197,59.4572L50,31.0857Z',
        'M50,19.6171L76.3123,65.1914L23.6877,65.1914L50,19.6171Z',
        'M50,13.5884L81.5333,68.2058L18.4667,68.2058L50,13.5884Z',
        'M50,10.7784L83.9669,69.6108L16.0331,69.6108L50,10.7784Z',
        'M50,10L84.641,70L15.359,70L50,10Z',
      ]);
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('amt');
      const changeDataKey = () => setDataKey(prev => (prev === 'amt' ? 'pv' : 'amt'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          {renderRadarChart(<Radar dot dataKey={dataKey} isAnimationActive />)}
          {children}
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

    it('should animate the radar radii', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [28.6514, 35.482658030367446, 25.49270264703215],
        [21.7703, 32.743609170035, 16.69639432602141],
        [18.1531, 31.303725491544938, 12.07230899414027],
        [16.467, 30.632591526836247, 9.91702257787084],
        [16, 30.446666666666665, 9.32],
      ]);
    });

    it('should animate the radar polygons', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,31.0857L66.3803,59.4572L33.6197,59.4572L50,31.0857Z',
        'M50,19.6171L76.3123,65.1914L23.6877,65.1914L50,19.6171Z',
        'M50,13.5884L81.5333,68.2058L18.4667,68.2058L50,13.5884Z',
        'M50,10.7784L83.9669,69.6108L16.0331,69.6108L50,10.7784Z',
        'M50,10L84.641,70L15.359,70L50,10Z',
      ]);
    });

    it('should animate the radar dots', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '31.0857' },
          { cx: '66.3803', cy: '59.4572' },
          { cx: '33.6197', cy: '59.4572' },
        ],
        [
          { cx: '50', cy: '19.6171' },
          { cx: '76.3123', cy: '65.1914' },
          { cx: '23.6877', cy: '65.1914' },
        ],
        [
          { cx: '50', cy: '13.5884' },
          { cx: '81.5333', cy: '68.2058' },
          { cx: '18.4667', cy: '68.2058' },
        ],
        [
          { cx: '50', cy: '10.7784' },
          { cx: '83.9669', cy: '69.6108' },
          { cx: '16.0331', cy: '69.6108' },
        ],
        [
          { cx: '50', cy: '10' },
          { cx: '84.64101615137756', cy: '70' },
          { cx: '15.35898384862245', cy: '70' },
        ],
      ]);
    });
  });

  describe('when the Radar has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('amt');
      const changeDataKey = () => setDataKey(prev => (prev === 'amt' ? 'pv' : 'amt'));
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          {renderRadarChart(<Radar dot key={dataKey} dataKey={dataKey} isAnimationActive />)}
          {children}
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

    it('should re-run the initial radii animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [7.5657, 14.3969413369646, 4.40702255610293],
        [12.153100000000002, 23.12644338954868, 7.079228545540821],
        [14.564599999999999, 27.715228344179305, 8.48389844941581],
        [15.688600000000001, 29.85420380214485, 9.138634853193333],
        [16, 30.446666666666665, 9.32],
      ]);
    });

    it('should re-run the initial polygon animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,42.4343L62.4681,57.1985L46.1834,52.2035L50,42.4343Z',
        'M50,37.8469L70.0281,61.5632L43.8692,53.5396L50,37.8469Z',
        'M50,35.4354L74.0021,63.8576L42.6527,54.2419L50,35.4354Z',
        'M50,34.3114L75.8545,64.9271L42.0857,54.5693L50,34.3114Z',
        'M50,34L76.3676,65.2233L41.9286,54.66L50,34Z',
      ]);
    });

    it('should re-run the initial dot animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '42.4343' },
          { cx: '62.4681', cy: '57.1985' },
          { cx: '46.1834', cy: '52.2035' },
        ],
        [
          { cx: '50', cy: '37.8469' },
          { cx: '70.0281', cy: '61.5632' },
          { cx: '43.8692', cy: '53.5396' },
        ],
        [
          { cx: '50', cy: '35.4354' },
          { cx: '74.0021', cy: '63.8576' },
          { cx: '42.6527', cy: '54.2419' },
        ],
        [
          { cx: '50', cy: '34.3114' },
          { cx: '75.8545', cy: '64.9271' },
          { cx: '42.0857', cy: '54.5693' },
        ],
        [
          { cx: '50', cy: '34' },
          { cx: '76.36758679389021', cy: '65.22333333333333' },
          { cx: '41.92864323672903', cy: '54.66' },
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
          <RadarChart cx={CX} cy={CY} outerRadius={RADAR_RADIUS} width={100} height={100} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dot dataKey="pv" isAnimationActive />
            {children}
          </RadarChart>
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

    it('should animate radii from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [26.9703, 23.44144511970198, 13.991839625295881],
        [33.6221, 19.19387067190982, 16.82457314584831],
        [37.118700000000004, 16.961037348582188, 18.31364950658388],
        [38.7485, 15.920288652219844, 19.007767376785733],
        [39.2, 15.632000000000005, 19.2],
      ]);
    });

    it('should animate polygons from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,23.0297L70.3009,61.7207L37.8827,56.9959L50,23.0297Z',
        'M50,16.3779L66.6224,59.5969L35.4295,58.4123L50,16.3779Z',
        'M50,12.8813L64.6887,58.4805L34.1399,59.1568L50,12.8813Z',
        'M50,11.2515L63.7874,57.9601L33.5388,59.5039L50,11.2515Z',
        'M50,10.8L63.5377,57.816L33.3723,59.6L50,10.8Z',
      ]);
    });

    it('should animate dots from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '23.0297' },
          { cx: '70.3009', cy: '61.7207' },
          { cx: '37.8827', cy: '56.9959' },
        ],
        [
          { cx: '50', cy: '16.3779' },
          { cx: '66.6224', cy: '59.5969' },
          { cx: '35.4295', cy: '58.4123' },
        ],
        [
          { cx: '50', cy: '12.8813' },
          { cx: '64.6887', cy: '58.4805' },
          { cx: '34.1399', cy: '59.1568' },
        ],
        [
          { cx: '50', cy: '11.2515' },
          { cx: '63.7874', cy: '57.9601' },
          { cx: '33.5388', cy: '59.5039' },
        ],
        [
          { cx: '50', cy: '10.799999999999997' },
          { cx: '63.53770911195835', cy: '57.816' },
          { cx: '33.372312247338776', cy: '59.599999999999994' },
        ],
      ]);
    });
  });

  describe('when the radar element hides during the animation', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [isVisible, setIsVisible] = useState(true);
      const toggleVisibility = () => setIsVisible(prev => !prev);
      return (
        <div>
          <button type="button" onClick={toggleVisibility}>
            Toggle visibility
          </button>
          {renderRadarChart(<Radar dot dataKey="pv" isAnimationActive hide={!isVisible} />)}
          {children}
        </div>
      );
    });

    async function prime(container: HTMLElement, animationManager: MockAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
      expect(getRadarPolygons(container)).toHaveLength(0);
      act(() => button.click());
    }

    it('should animate polygons from the start again', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,42.4343L62.4681,57.1985L46.1834,52.2035L50,42.4343Z',
        'M50,37.8469L70.0281,61.5632L43.8692,53.5396L50,37.8469Z',
        'M50,35.4354L74.0021,63.8576L42.6527,54.2419L50,35.4354Z',
        'M50,34.3114L75.8545,64.9271L42.0857,54.5693L50,34.3114Z',
        'M50,34L76.3676,65.2233L41.9286,54.66L50,34Z',
      ]);
    });

    it('should animate dots from the start again', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '42.4343' },
          { cx: '62.4681', cy: '57.1985' },
          { cx: '46.1834', cy: '52.2035' },
        ],
        [
          { cx: '50', cy: '37.8469' },
          { cx: '70.0281', cy: '61.5632' },
          { cx: '43.8692', cy: '53.5396' },
        ],
        [
          { cx: '50', cy: '35.4354' },
          { cx: '74.0021', cy: '63.8576' },
          { cx: '42.6527', cy: '54.2419' },
        ],
        [
          { cx: '50', cy: '34.3114' },
          { cx: '75.8545', cy: '64.9271' },
          { cx: '42.0857', cy: '54.5693' },
        ],
        [
          { cx: '50', cy: '34' },
          { cx: '76.36758679389021', cy: '65.22333333333333' },
          { cx: '41.92864323672903', cy: '54.66' },
        ],
      ]);
    });

    it('should animate radii from the start again', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [7.5657, 14.3969413369646, 4.40702255610293],
        [12.153100000000002, 23.12644338954868, 7.079228545540821],
        [14.564599999999999, 27.715228344179305, 8.48389844941581],
        [15.688600000000001, 29.85420380214485, 9.138634853193333],
        [16, 30.446666666666665, 9.32],
      ]);
    });
  });
});
