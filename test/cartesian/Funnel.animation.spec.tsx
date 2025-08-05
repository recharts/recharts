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

function getFunnelPathStrings(container: Element): ReadonlyArray<string> {
  return getFunnelPaths(container).map(path => path.getAttribute('d'));
}

async function expectAnimatedFunnelPaths(
  container: Element,
  animationManager: MockAnimationManager,
  steps: number = 5,
): Promise<ReadonlyArray<ReadonlyArray<string>>> {
  assertNotNull(container);
  let animationProgress = 0.1;
  await animationManager.setAnimationProgress(animationProgress);
  const stepSize = (1 - animationProgress) / steps;
  const initialPaths = getFunnelPathStrings(container);

  const pathsDuringAnimation: Array<ReadonlyArray<string>> = [];
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
        'M 30,5L 460,5L 406.25,145L 83.75,145L 30,5 Z',
        'M 83.75,145L 406.25,145L 245,285L 245,285L 83.75,145 Z',
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
          'M 143.3356007008128,41.899963018869286L 346.66439929918715,41.899963018869286L 321.24829947439036,108.10003698113071L 168.75170052560958,108.10003698113071L 143.3356007008128,41.899963018869286 Z',
          'M 168.7517005256096,181.8999630188693L 321.24829947439036,181.8999630188693L 244.99999999999997,248.10003698113073L 244.99999999999997,248.10003698113073L 168.7517005256096,181.8999630188693 Z',
        ],
        [
          'M 81.69211429229358,21.829990699816513L 408.3078857077064,21.829990699816513L 367.4809142807798,128.1700093001835L 122.51908571922019,128.1700093001835L 81.69211429229358,21.829990699816513 Z',
          'M 122.51908571922019,161.8299906998165L 367.4809142807798,161.8299906998165L 245,268.1700093001835L 245,268.1700093001835L 122.51908571922019,161.8299906998165 Z',
        ],
        [
          'M 49.28785271780626,11.279766001146228L 440.71214728219377,11.279766001146228L 391.78411046164535,138.72023399885376L 98.21588953835476,138.72023399885376L 49.28785271780626,11.279766001146228 Z',
          'M 98.2158895383547,151.27976600114624L 391.7841104616453,151.27976600114624L 245,278.7202339988538L 245,278.7202339988538L 98.2158895383547,151.27976600114624 Z',
        ],
        [
          'M 34.183825637020846,6.362175788797487L 455.81617436297915,6.362175788797487L 403.11213077223437,143.6378242112025L 86.88786922776563,143.6378242112025L 34.183825637020846,6.362175788797487 Z',
          'M 86.88786922776563,146.3621757887975L 403.11213077223437,146.3621757887975L 245,283.63782421120254L 245,283.63782421120254L 86.88786922776563,146.3621757887975 Z',
        ],
        ['M 30,5L 460,5L 406.25,145L 83.75,145L 30,5 Z', 'M 83.75,145L 406.25,145L 245,285L 245,285L 83.75,145 Z'],
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
          'M 78.23883365039165,5L 411.76116634960835,5L 431.6660998247968,145L 58.33390017520321,145L 78.23883365039165,5 Z',
          'M 58.3339001752032,145L 431.6660998247968,145L 245,285L 245,285L 58.3339001752032,145 Z',
        ],
        [
          'M 107.48810780131372,5L 382.51189219868627,5L 447.0769714269266,145L 42.923028573073395,145L 107.48810780131372,5 Z',
          'M 42.923028573073395,145L 447.0769714269266,145L 245,285L 245,285L 42.923028573073395,145 Z',
        ],
        [
          'M 122.86363546321738,5L 367.1363645367826,5L 455.1780368205484,145L 34.82196317945153,145L 122.86363546321738,5 Z',
          'M 34.821963179451565,145L 455.17803682054847,145L 245.00000000000003,285L 245.00000000000003,285L 34.821963179451565,145 Z',
        ],
        [
          'M 130.03035906384406,5L 359.969640936156,5L 458.95404359074485,145L 31.04595640925527,145L 130.03035906384406,5 Z',
          'M 31.04595640925521,145L 458.9540435907448,145L 245,285L 245,285L 31.04595640925521,145 Z',
        ],
        [
          'M 132.01554631048828,5L 357.9844536895117,5L 460,145L 30,145L 132.01554631048828,5 Z',
          'M 30,145L 460,145L 245,285L 245,285L 30,145 Z',
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
          'M 191.57443435120445,41.899963018869286L 298.42556564879555,41.899963018869286L 346.6643992991872,108.10003698113071L 143.33560070081282,108.10003698113071L 191.57443435120445,41.899963018869286 Z',
          'M 143.3356007008128,181.8999630188693L 346.66439929918715,181.8999630188693L 244.99999999999994,248.10003698113073L 244.99999999999994,248.10003698113073L 143.3356007008128,181.8999630188693 Z',
        ],
        [
          'M 159.1802220936073,21.829990699816513L 330.8197779063927,21.829990699816513L 408.3078857077064,128.1700093001835L 81.69211429229358,128.1700093001835L 159.1802220936073,21.829990699816513 Z',
          'M 81.69211429229358,161.8299906998165L 408.3078857077064,161.8299906998165L 245,268.1700093001835L 245,268.1700093001835L 81.69211429229358,161.8299906998165 Z',
        ],
        [
          'M 142.15148818102364,11.279766001146228L 347.84851181897636,11.279766001146228L 440.71214728219377,138.72023399885376L 49.28785271780629,138.72023399885376L 142.15148818102364,11.279766001146228 Z',
          'M 49.28785271780626,151.27976600114624L 440.71214728219377,151.27976600114624L 245.00000000000003,278.7202339988538L 245.00000000000003,278.7202339988538L 49.28785271780626,151.27976600114624 Z',
        ],
        [
          'M 134.2141847008649,6.362175788797487L 355.7858152991351,6.362175788797487L 455.81617436297915,143.6378242112025L 34.183825637020846,143.6378242112025L 134.2141847008649,6.362175788797487 Z',
          'M 34.183825637020846,146.3621757887975L 455.81617436297915,146.3621757887975L 245,283.63782421120254L 245,283.63782421120254L 34.183825637020846,146.3621757887975 Z',
        ],
        [
          'M 132.01554631048828,5L 357.9844536895117,5L 460,145L 30,145L 132.01554631048828,5 Z',
          'M 30,145L 460,145L 245,285L 245,285L 30,145 Z',
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
          'M 58.52454368826116,5L 431.47545631173887,5L 431.6660998247968,122.93330867924618L 58.33390017520321,122.93330867924618L 58.52454368826116,5 Z',
          'M 58.3339001752032,122.93330867924618L 431.6660998247968,122.93330867924618L 314.1171635523251,240.86661735849236L 175.8828364476749,240.86661735849236L 58.3339001752032,122.93330867924618 Z',
          'M 175.8828364476749,216.2666420125795L 314.1171635523251,216.2666420125795L 245,260.40002465408713L 245,260.40002465408713L 175.8828364476749,216.2666420125795 Z',
        ],
        [
          'M 75.8201981482054,5L 414.1798018517946,5L 447.0769714269266,109.55332713321101L 42.923028573073395,109.55332713321101L 75.8201981482054,5 Z',
          'M 42.923028573073395,109.55332713321101L 447.0769714269266,109.55332713321101L 356.02586474372845,214.10665426642203L 133.97413525627152,214.10665426642203L 42.923028573073395,109.55332713321101 Z',
          'M 133.97413525627155,202.88666046654433L 356.02586474372845,202.88666046654433L 245,273.78000620012233L 245,273.78000620012233L 133.97413525627155,202.88666046654433 Z',
        ],
        [
          'M 84.91204132378098,5L 405.08795867621905,5L 455.17803682054847,102.51984400076415L 34.821963179451586,102.51984400076415L 84.91204132378098,5 Z',
          'M 34.821963179451565,102.51984400076415L 455.17803682054847,102.51984400076415L 378.0561001307001,200.0396880015283L 111.94389986929997,200.0396880015283L 34.821963179451565,102.51984400076415 Z',
          'M 111.94389986929994,195.85317733409747L 378.0561001307001,195.85317733409747L 245.00000000000003,280.81348933256913L 245.00000000000003,280.81348933256913L 111.94389986929994,195.85317733409747 Z',
        ],
        [
          'M 89.14986187162724,5L 400.85013812837275,5L 458.9540435907448,99.24145052586499L 31.04595640925521,99.24145052586499L 89.14986187162724,5 Z',
          'M 31.04595640925521,99.24145052586499L 458.9540435907448,99.24145052586499L 388.32466530432754,193.48290105172998L 101.67533469567246,193.48290105172998L 31.04595640925521,99.24145052586499 Z',
          'M 101.67533469567246,192.5747838591983L 388.32466530432754,192.5747838591983L 245,284.0918828074683L 245,284.0918828074683L 101.67533469567246,192.5747838591983 Z',
        ],
        [
          'M 90.32374100719424,5L 399.67625899280574,5L 460,98.33333333333333L 30,98.33333333333333L 90.32374100719424,5 Z',
          'M 30,98.33333333333333L 460,98.33333333333333L 391.16906474820144,191.66666666666666L 98.83093525179856,191.66666666666666L 30,98.33333333333333 Z',
          'M 98.83093525179856,191.66666666666666L 391.16906474820144,191.66666666666666L 245,285L 245,285L 98.83093525179856,191.66666666666666 Z',
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
          'M 143.3356007008128,41.899963018869286L 346.66439929918715,41.899963018869286L 321.24829947439036,108.10003698113071L 168.75170052560958,108.10003698113071L 143.3356007008128,41.899963018869286 Z',
          'M 168.7517005256096,181.8999630188693L 321.24829947439036,181.8999630188693L 244.99999999999997,248.10003698113073L 244.99999999999997,248.10003698113073L 168.7517005256096,181.8999630188693 Z',
        ],
        [
          'M 81.69211429229358,21.829990699816513L 408.3078857077064,21.829990699816513L 367.4809142807798,128.1700093001835L 122.51908571922019,128.1700093001835L 81.69211429229358,21.829990699816513 Z',
          'M 122.51908571922019,161.8299906998165L 367.4809142807798,161.8299906998165L 245,268.1700093001835L 245,268.1700093001835L 122.51908571922019,161.8299906998165 Z',
        ],
        [
          'M 49.28785271780626,11.279766001146228L 440.71214728219377,11.279766001146228L 391.78411046164535,138.72023399885376L 98.21588953835476,138.72023399885376L 49.28785271780626,11.279766001146228 Z',
          'M 98.2158895383547,151.27976600114624L 391.7841104616453,151.27976600114624L 245,278.7202339988538L 245,278.7202339988538L 98.2158895383547,151.27976600114624 Z',
        ],
        [
          'M 34.183825637020846,6.362175788797487L 455.81617436297915,6.362175788797487L 403.11213077223437,143.6378242112025L 86.88786922776563,143.6378242112025L 34.183825637020846,6.362175788797487 Z',
          'M 86.88786922776563,146.3621757887975L 403.11213077223437,146.3621757887975L 245,283.63782421120254L 245,283.63782421120254L 86.88786922776563,146.3621757887975 Z',
        ],
        ['M 30,5L 460,5L 406.25,145L 83.75,145L 30,5 Z', 'M 83.75,145L 406.25,145L 245,285L 245,285L 83.75,145 Z'],
      ]);
    });
  });
});
