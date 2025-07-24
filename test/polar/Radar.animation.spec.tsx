import React, { ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PageData } from '../_data';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from '../../src';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertNotNull } from '../helper/assertNotNull';
import {
  ExpectedRadarDot,
  expectRadarDots,
  expectRadarPolygons,
  getRadarDots,
  getRadarPolygons,
} from '../helper/expectRadarPolygons';

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
  animationManager: MockProgressAnimationManager,
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
  animationManager: MockProgressAnimationManager,
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
  animationManager: MockProgressAnimationManager,
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
          d: 'M50,34L76.36758679389021,65.22333333333333L41.92864323672903,54.66L50,34Z',
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
          { cx: '50', cy: '31.08569315363959' },
          { cx: '66.38027022392205', cy: '59.4571534231802' },
          { cx: '33.61972977607795', cy: '59.4571534231802' },
        ],
        [
          { cx: '50', cy: '19.617137542752296' },
          { cx: '76.31233072766501', cy: '65.19143122862386' },
          { cx: '23.68766927233499', cy: '65.19143122862386' },
        ],
        [
          { cx: '50', cy: '13.588437714940703' },
          { cx: '81.53333793034072', cy: '68.20578114252964' },
          { cx: '18.466662069659282', cy: '68.20578114252964' },
        ],
        [
          { cx: '50', cy: '10.778386165027136' },
          { cx: '83.9669139585097', cy: '69.61080691748643' },
          { cx: '16.0330860414903', cy: '69.61080691748643' },
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
        [18.91430684636041, 18.914306846360414, 18.914306846360407],
        [30.382862457247704, 30.382862457247715, 30.38286245724771],
        [36.4115622850593, 36.411562285059304, 36.4115622850593],
        [39.221613834972864, 39.221613834972864, 39.221613834972864],
        [40, 40.00000000000001, 40],
      ]);
    });

    it('should render polygons with animation', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,31.08569315363959L66.38027022392205,59.4571534231802L33.61972977607795,59.4571534231802L50,31.08569315363959Z',
        'M50,19.617137542752296L76.31233072766501,65.19143122862386L23.68766927233499,65.19143122862386L50,19.617137542752296Z',
        'M50,13.588437714940703L81.53333793034072,68.20578114252964L18.466662069659282,68.20578114252964L50,13.588437714940703Z',
        'M50,10.778386165027136L83.9669139585097,69.61080691748643L16.0330860414903,69.61080691748643L50,10.778386165027136Z',
        'M50,10L84.64101615137756,70L15.35898384862245,70L50,10Z',
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

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should animate the radar radii', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [28.651415892183756, 35.48263304819426, 25.492726648841572],
        [21.770282525651375, 32.743559683127344, 16.696344495291008],
        [18.15306262896442, 31.303705207585, 12.07233172735952],
        [16.46703169901628, 30.632571229080654, 9.917022188575816],
        [16, 30.446666666666665, 9.32],
      ]);
    });

    it('should animate the radar polygons', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,31.08569315363959L66.38027022392205,59.4571534231802L33.61972977607795,59.4571534231802L50,31.08569315363959Z',
        'M50,19.617137542752296L76.31233072766501,65.19143122862386L23.68766927233499,65.19143122862386L50,19.617137542752296Z',
        'M50,13.588437714940703L81.53333793034072,68.20578114252964L18.466662069659282,68.20578114252964L50,13.588437714940703Z',
        'M50,10.778386165027136L83.9669139585097,69.61080691748643L16.0330860414903,69.61080691748643L50,10.778386165027136Z',
        'M50,10L84.64101615137756,70L15.35898384862245,70L50,10Z',
      ]);
    });

    it('should animate the radar dots', async () => {
      const { container, animationManager } = renderTestCase();
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '31.08569315363959' },
          { cx: '66.38027022392205', cy: '59.4571534231802' },
          { cx: '33.61972977607795', cy: '59.4571534231802' },
        ],
        [
          { cx: '50', cy: '19.617137542752296' },
          { cx: '76.31233072766501', cy: '65.19143122862386' },
          { cx: '23.68766927233499', cy: '65.19143122862386' },
        ],
        [
          { cx: '50', cy: '13.588437714940703' },
          { cx: '81.53333793034072', cy: '68.20578114252964' },
          { cx: '18.466662069659282', cy: '68.20578114252964' },
        ],
        [
          { cx: '50', cy: '10.778386165027136' },
          { cx: '83.9669139585097', cy: '69.61080691748643' },
          { cx: '16.0330860414903', cy: '69.61080691748643' },
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

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should re-run the initial radii animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [7.565722738544167, 14.396939894554666, 4.4070334952019765],
        [12.153144982899079, 23.12642214037505, 7.079206952538713],
        [14.564624914023717, 27.71526749264431, 8.483894012418816],
        [15.688645533989146, 29.854185064053514, 9.138636023548678],
        [16, 30.446666666666665, 9.32],
      ]);
    });

    it('should re-run the initial polygon animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,42.43427726145583L62.468115685442,57.19846994727733L46.18339703782616,52.203516747600986L50,42.43427726145583Z',
        'M50,37.84685501710092L70.02806907220769,61.56321107018752L43.869226940454055,53.539603476269356L50,37.84685501710092Z',
        'M50,35.43537508597628L74.00212572131102,63.85763374632215L42.652732262230614,54.24194700620941L50,35.43537508597628Z',
        'M50,34.311354466010854L75.8544826747523,64.92709253202675L42.08570904766724,54.569318011774335L50,34.311354466010854Z',
        'M50,34L76.36758679389021,65.22333333333333L41.92864323672903,54.66L50,34Z',
      ]);
    });

    it('should re-run the initial dot animation from the beginning', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '42.43427726145583' },
          { cx: '62.468115685442', cy: '57.19846994727733' },
          { cx: '46.18339703782616', cy: '52.203516747600986' },
        ],
        [
          { cx: '50', cy: '37.84685501710092' },
          { cx: '70.02806907220769', cy: '61.56321107018752' },
          { cx: '43.869226940454055', cy: '53.539603476269356' },
        ],
        [
          { cx: '50', cy: '35.43537508597628' },
          { cx: '74.00212572131102', cy: '63.85763374632215' },
          { cx: '42.652732262230614', cy: '54.24194700620941' },
        ],
        [
          { cx: '50', cy: '34.311354466010854' },
          { cx: '75.8544826747523', cy: '64.92709253202675' },
          { cx: '42.08570904766724', cy: '54.569318011774335' },
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

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      await animationManager.completeAnimation();
      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => button.click());
    }

    it('should animate radii from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedDotRadii(container, animationManager)).toEqual([
        [26.97029797088904, 23.44143788766965, 13.991833791051022],
        [33.62206022520367, 19.193867174584028, 16.82456702694018],
        [37.1187061253344, 16.96103771502354, 18.313655884409652],
        [38.74853602428426, 15.920288289320558, 19.007738617238296],
        [39.2, 15.632000000000005, 19.2],
      ]);
    });

    it('should animate polygons from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarPolygons(container, animationManager)).toEqual([
        'M50,23.02970202911096L70.30088071195695,61.720718943834825L37.88271649142028,56.995916895525504L50,23.02970202911096Z',
        'M50,16.377939774796328L66.62237657005402,59.596933587292014L35.429497546995776,58.412283513470086L50,16.377939774796328Z',
        'M50,12.881293874665605L64.68868953575635,58.48051885751177L34.13990876793487,59.15682794220482L50,12.881293874665605Z',
        'M50,11.251463975715737L63.78737409412351,57.960144144660276L33.538815488977136,59.503869308619144L50,11.251463975715737Z',
        'M50,10.799999999999997L63.53770911195835,57.816L33.372312247338776,59.599999999999994L50,10.799999999999997Z',
      ]);
    });

    it('should animate dots from 3 to 2 points', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '23.02970202911096' },
          { cx: '70.30088071195695', cy: '61.720718943834825' },
          { cx: '37.88271649142028', cy: '56.995916895525504' },
        ],
        [
          { cx: '50', cy: '16.377939774796328' },
          { cx: '66.62237657005402', cy: '59.596933587292014' },
          { cx: '35.429497546995776', cy: '58.412283513470086' },
        ],
        [
          { cx: '50', cy: '12.881293874665605' },
          { cx: '64.68868953575635', cy: '58.48051885751177' },
          { cx: '34.13990876793487', cy: '59.15682794220482' },
        ],
        [
          { cx: '50', cy: '11.251463975715737' },
          { cx: '63.78737409412351', cy: '57.960144144660276' },
          { cx: '33.538815488977136', cy: '59.503869308619144' },
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

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
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
        'M50,42.43427726145583L62.468115685442,57.19846994727733L46.18339703782616,52.203516747600986L50,42.43427726145583Z',
        'M50,37.84685501710092L70.02806907220769,61.56321107018752L43.869226940454055,53.539603476269356L50,37.84685501710092Z',
        'M50,35.43537508597628L74.00212572131102,63.85763374632215L42.652732262230614,54.24194700620941L50,35.43537508597628Z',
        'M50,34.311354466010854L75.8544826747523,64.92709253202675L42.08570904766724,54.569318011774335L50,34.311354466010854Z',
        'M50,34L76.36758679389021,65.22333333333333L41.92864323672903,54.66L50,34Z',
      ]);
    });

    it('should animate dots from the start again', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      expect(await expectAnimatedRadarDots(container, animationManager)).toEqual([
        [
          { cx: '50', cy: '42.43427726145583' },
          { cx: '62.468115685442', cy: '57.19846994727733' },
          { cx: '46.18339703782616', cy: '52.203516747600986' },
        ],
        [
          { cx: '50', cy: '37.84685501710092' },
          { cx: '70.02806907220769', cy: '61.56321107018752' },
          { cx: '43.869226940454055', cy: '53.539603476269356' },
        ],
        [
          { cx: '50', cy: '35.43537508597628' },
          { cx: '74.00212572131102', cy: '63.85763374632215' },
          { cx: '42.652732262230614', cy: '54.24194700620941' },
        ],
        [
          { cx: '50', cy: '34.311354466010854' },
          { cx: '75.8544826747523', cy: '64.92709253202675' },
          { cx: '42.08570904766724', cy: '54.569318011774335' },
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
        [7.565722738544167, 14.396939894554666, 4.4070334952019765],
        [12.153144982899079, 23.12642214037505, 7.079206952538713],
        [14.564624914023717, 27.71526749264431, 8.483894012418816],
        [15.688645533989146, 29.854185064053514, 9.138636023548678],
        [16, 30.446666666666665, 9.32],
      ]);
    });
  });
});
