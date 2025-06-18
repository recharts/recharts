import React, { ReactNode, useState } from 'react';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Legend, Line, LineChart, YAxis } from '../../src';
import { PageData } from '../_data';
import { mockGetTotalLength } from '../helper/mockGetTotalLength';
import { ExpectedLabel, expectLabels } from '../helper/expectLabel';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { MockProgressAnimationManager } from '../animation/MockProgressAnimationManager';
import { expectDots } from '../helper/expectDots';
import { expectLines } from '../helper/expectLine';

function getLine(container: HTMLElement) {
  return container.querySelector('.recharts-line-curve');
}

describe('Line animation', () => {
  beforeEach(() => {
    mockSequenceOfGetBoundingClientRect([
      { width: 0, height: 0, left: 0, top: 50 },
      { width: 50, height: 50, left: 0, top: 50 },
    ]);
  });

  beforeAll(() => {
    mockGetTotalLength(100);
  });

  const expectedUvLabels: ReadonlyArray<ExpectedLabel> = [
    {
      height: null,
      offset: '5',
      textContent: '400',
      width: null,
      x: '5',
      y: '5',
    },
    {
      height: null,
      offset: '5',
      textContent: '300',
      width: null,
      x: '23',
      y: '27.5',
    },
    {
      height: null,
      offset: '5',
      textContent: '300',
      width: null,
      x: '41',
      y: '27.5',
    },
    {
      height: null,
      offset: '5',
      textContent: '200',
      width: null,
      x: '59',
      y: '50',
    },
    {
      height: null,
      offset: '5',
      textContent: '278',
      width: null,
      x: '77',
      y: '32.45',
    },
    {
      height: null,
      offset: '5',
      textContent: '189',
      width: null,
      x: '95',
      y: '52.475',
    },
  ];

  const expectedPvLabels: ReadonlyArray<ExpectedLabel> = [
    {
      height: null,
      offset: '5',
      textContent: '2400',
      width: null,
      x: '5',
      y: '73.4',
    },
    {
      height: null,
      offset: '5',
      textContent: '4567',
      width: null,
      x: '23',
      y: '53.897000000000006',
    },
    {
      height: null,
      offset: '5',
      textContent: '1398',
      width: null,
      x: '41',
      y: '82.41799999999999',
    },
    {
      height: null,
      offset: '5',
      textContent: '9800',
      width: null,
      x: '59',
      y: '6.8000000000000025',
    },
    {
      height: null,
      offset: '5',
      textContent: '3908',
      width: null,
      x: '77',
      y: '59.827999999999996',
    },
    {
      height: null,
      offset: '5',
      textContent: '4800',
      width: null,
      x: '95',
      y: '51.8',
    },
  ];

  /*
   * The expected labels for the PV dataKey, but with UV positions.
   * This is a bug; labels flash with the new text content at the old positions.
   * Because it happens so quickly, it is not visible in the browser so we can just live with it.
   */
  const pvLabelsWithUvPositions: ReadonlyArray<ExpectedLabel> = [
    {
      height: null,
      offset: '5',
      textContent: '2400',
      width: null,
      x: '5',
      y: '5',
    },
    {
      height: null,
      offset: '5',
      textContent: '4567',
      width: null,
      x: '23',
      y: '27.5',
    },
    {
      height: null,
      offset: '5',
      textContent: '1398',
      width: null,
      x: '41',
      y: '27.5',
    },
    {
      height: null,
      offset: '5',
      textContent: '9800',
      width: null,
      x: '59',
      y: '50',
    },
    {
      height: null,
      offset: '5',
      textContent: '3908',
      width: null,
      x: '77',
      y: '32.45',
    },
    {
      height: null,
      offset: '5',
      textContent: '4800',
      width: null,
      x: '95',
      y: '52.475',
    },
  ];

  describe('with isAnimationActive={false}', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart data={PageData} width={100} height={100}>
        <Line dataKey="uv" isAnimationActive={false} label />
        {children}
      </LineChart>
    ));

    it('should render the line without stroke-dasharray', () => {
      const { container } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      expect(line).toHaveAttribute('d', 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
      // the line never receives stroke-dasharray, so it is fully visible straight away
      expect(line).not.toHaveAttribute('stroke-dasharray');
    });

    it('should render all the dots without animation', () => {
      const { container } = renderTestCase();

      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '23',
          cy: '27.5',
        },
        {
          cx: '41',
          cy: '27.5',
        },
        {
          cx: '59',
          cy: '50',
        },
        {
          cx: '77',
          cy: '32.45',
        },
        {
          cx: '95',
          cy: '52.475',
        },
      ]);
    });

    it('should render all labels without animation', () => {
      const { container } = renderTestCase();

      expectLabels(container, expectedUvLabels);
    });
  });

  describe('with simple props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart data={PageData} width={100} height={100}>
        <Line dataKey="uv" animationEasing="linear" label />
        {children}
      </LineChart>
    ));

    it('should start the line with fully generated path but 0 stroke-dasharray', () => {
      const { container } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      expect(line).toHaveAttribute('d', 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
      // but the strokeDasharray is 0 so the line is not visible
      expect(line).toHaveAttribute('stroke-dasharray', '0px 0px');
    });

    it('should animate line left-to-right by continually extending the stroke-dasharray', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(0.1);

      const line = getLine(container);
      // after travelling 10% of the path, the stroke-dasharray should be 10px visible and 90px hidden
      // ... Animate does not round the {t} value, so we get 10.000000000000002px visible and 90px hidden
      expect(line).toHaveAttribute('stroke-dasharray', '10.000000000000002px 90px');

      await animationManager.setAnimationProgress(0.2);

      // after travelling 20% of the path, the stroke-dasharray should be 20px visible and 80px hidden
      expect(line).toHaveAttribute('stroke-dasharray', '20px 80px');

      await animationManager.setAnimationProgress(1);
      // after travelling 100% of the path, the stroke-dasharray should be 100px visible and 0px hidden
      expect(line).toHaveAttribute('stroke-dasharray', '100px 0px');

      await animationManager.completeAnimation();
      /*
       * After the animation is completed, the stroke-dasharray should remain 100px visible and 0px hidden.
       * It would also be acceptable to remove the stroke-dasharray attribute altogether. But no harm if it remains.
       */
      expect(line).toHaveAttribute('stroke-dasharray', '100px 0px');
    });

    it('should set the stroke-dasharray to 100, 0 when the animation is completed', async () => {
      const { container, animationManager } = renderTestCase();

      await animationManager.setAnimationProgress(1);

      const line = getLine(container);
      expect(line).toHaveAttribute('stroke-dasharray', '100px 0px');
    });

    it('should render all the dots without animation', () => {
      const { container } = renderTestCase();

      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '23',
          cy: '27.5',
        },
        {
          cx: '41',
          cy: '27.5',
        },
        {
          cx: '59',
          cy: '50',
        },
        {
          cx: '77',
          cy: '32.45',
        },
        {
          cx: '95',
          cy: '52.475',
        },
      ]);
    });

    it('should hide all labels until the animation is completed', async () => {
      const { container, animationManager } = renderTestCase();

      /*
       * ... the very first tick, the first render, shows all labels. This looks like a bug. Same happens in browser,
       * but it's too quick to notice I suppose.
       */
      expectLabels(container, expectedUvLabels);

      // but after the first tick, all labels are hidden
      await animationManager.setAnimationProgress(0.1);

      expectLabels(container, []);

      // just before the end, still hidden
      await animationManager.setAnimationProgress(0.9);
      expectLabels(container, []);

      // and after the animation is completed, all labels pop up all at once
      await animationManager.completeAnimation();
      expectLabels(container, expectedUvLabels);
    });

    it('should not move the path itself during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      const initialPath = line.getAttribute('d');
      expect(initialPath).toBe('M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
      expect(line.getAttribute('d')).toBe(initialPath);

      // the path should not move during the animation

      await animationManager.setAnimationProgress(0.1);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.setAnimationProgress(0.9);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.completeAnimation();
      expect(line.getAttribute('d')).toBe(initialPath);
    });
  });

  describe('with stroke-dasharray prop', () => {
    describe('with isAnimationActive={false}', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart data={PageData} width={100} height={100}>
          <Line dataKey="uv" strokeDasharray="5 5" isAnimationActive={false} />
          {children}
        </LineChart>
      ));

      it('should render the line with stroke-dasharray', () => {
        const { container } = renderTestCase();

        const line = getLine(container);
        expect(line).toBeInTheDocument();
        // the path is fully rendered
        expect(line).toHaveAttribute('d', 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
        // the line has stroke-dasharray set to 5 5
        expect(line).toHaveAttribute('stroke-dasharray', '5 5');
      });
    });

    describe('with isAnimationActive={true}', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart data={PageData} width={100} height={100}>
          <Line dataKey="uv" animationEasing="linear" strokeDasharray="7 3" />
          {children}
        </LineChart>
      ));

      it('should start the line with fully generated path but 0 stroke-dasharray', () => {
        const { container } = renderTestCase();

        const line = getLine(container);
        expect(line).toBeInTheDocument();
        // the path is fully rendered
        expect(line).toHaveAttribute('d', 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
        // but the strokeDasharray is 0 so the line is not visible
        expect(line).toHaveAttribute('stroke-dasharray', '0px, 0px');
      });

      it('should animate line left-to-right by continually extending the stroke-dasharray', async () => {
        const { container, animationManager } = renderTestCase();

        await animationManager.setAnimationProgress(0.1);

        const line = getLine(container);
        // after travelling 10% of the path, the stroke-dasharray should be 10px visible and 90px hidden
        // but as the line grows, it leaves behind the 7,3 dashed stroke as instructed by the prop
        expect(line).toHaveAttribute('stroke-dasharray', '7px, 3px, 1.7763568394002505e-15px, 90px');

        await animationManager.setAnimationProgress(0.2);

        // after travelling 20% of the path, the stroke-dasharray should be 20px visible and 80px hidden
        expect(line).toHaveAttribute('stroke-dasharray', '7px, 3px, 7px, 3px, 0px, 80px');

        await animationManager.setAnimationProgress(1);
        // after travelling 100% of the path, the stroke-dasharray should be 100px visible and 0px hidden
        expect(line).toHaveAttribute(
          'stroke-dasharray',
          '7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 0px, 0px',
        );

        await animationManager.completeAnimation();
        /*
         * After the animation is completed, the stroke-dasharray should remain 100px visible and 0px hidden.
         * This could be shortened to just '7,3' but no harm if it remains as is.
         */
        expect(line).toHaveAttribute(
          'stroke-dasharray',
          '7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 7px, 3px, 0px, 0px',
        );
      });
    });
  });

  describe('with <Legend /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart data={PageData} width={100} height={100}>
        <Legend />
        <Line dataKey="uv" animationEasing="linear" label />
        {children}
      </LineChart>
    ));

    it('should not move the path during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      const initialPath = line.getAttribute('d');
      expect(initialPath).toBe('M5,5L23,15L41,15L59,25L77,17.2L95,26.1');
      expect(line.getAttribute('d')).toBe(initialPath);

      // the path should not move during the animation but unfortunately it does
      await animationManager.setAnimationProgress(0.1);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.setAnimationProgress(0.9);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.completeAnimation();
      expect(line.getAttribute('d')).toBe(initialPath);
    });
  });

  describe('with <YAxis width="auto" /> sibling', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart data={PageData} width={100} height={100}>
        <YAxis width="auto" />
        <Line dataKey="uv" animationEasing="linear" label />
        {children}
      </LineChart>
    ));

    it('should not move the path during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      const initialPath = line.getAttribute('d');
      expect(initialPath).toBe('M63,5L69.4,27.5L75.8,27.5L82.2,50L88.6,32.45L95,52.475');
      expect(line.getAttribute('d')).toBe(initialPath);

      // the path should not move during the animation
      await animationManager.setAnimationProgress(0.1);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.setAnimationProgress(0.9);
      expect(line.getAttribute('d')).toBe(initialPath);

      await animationManager.completeAnimation();
      expect(line.getAttribute('d')).toBe(initialPath);
    });
  });

  describe('when changing dataKey prop', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <LineChart data={PageData} width={100} height={100}>
            <Line dataKey={dataKey} animationEasing="linear" label />
            {children}
          </LineChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('interrupting the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        /*
         * In this test, we wait for the initial animation to start, but not to complete.
         * We interrupt it by changing the dataKey prop, in the middle.
         */
        await animationManager.setAnimationProgress(0.3);

        // change the dataKey prop
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should continue growing the line where it left off', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        const fullyVisibleLine = '100px 0px';

        /*
         * The path ref has not been updated yet, so this will hide the whole line for a single tick.
         * Looks like a bug, but it's invisible in the browser because the animation is so quick.
         */
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '0px 0px');

        /*
         * Now, the line should continue growing from where it left off. Previously it was 30% of the path, so 30px visible and 70px hidden.
         * Even though a new animation is started, it should not reset the stroke-dasharray
         * and it should continue growing from the most recent length.
         */
        await animationManager.setAnimationProgress(0.1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '40px 60px');

        await animationManager.setAnimationProgress(0.2);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '50px 50px');

        await animationManager.setAnimationProgress(0.3);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '60px 40px');

        // Because the animation had a head start, it will arrive to full length quicker than the initial animation would.
        await animationManager.setAnimationProgress(0.7);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.completeAnimation();
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);
      });

      it('should hide labels during the animation', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        /*
         * The labels should still be hidden! But all labels now appear again.
         * Why? Because the animation is not started yet, but they swap to PV label values immediately.
         * Unfortunately the labels still show at the UV position so we have a flash of new labels at the old position.
         * This looks like a bug, but in the browser the labels disappear so quickly that I can't see it.
         */
        expectLabels(container, pvLabelsWithUvPositions);
        await animationManager.setAnimationProgress(0.2);
        // the labels should be hidden by now because the animation is in progress
        expectLabels(container, []);

        await animationManager.setAnimationProgress(0.5);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.setAnimationProgress(1);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.completeAnimation();

        // after the animation is completed, the labels should appear again
        expectLabels(container, expectedPvLabels);
      });

      it('should animate the line path', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        const initialPath = 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475';
        /*
         * Immediately after clicking the button, line should receive new dataKey, but path should be the same
         * and then animate to the new path slowly.
         */
        expect(getLine(container).getAttribute('d')).toBe(initialPath);

        // path changes little by little as the animation progresses
        await animationManager.setAnimationProgress(0.2);
        expect(getLine(container).getAttribute('d')).toBe('M5,18.68L23,32.779L41,38.484L59,41.36L77,37.926L95,52.34');
        expect(getLine(container).getAttribute('d')).not.toBe(initialPath);

        await animationManager.setAnimationProgress(0.5);
        expect(getLine(container).getAttribute('d')).toBe('M5,39.2L23,40.699L41,54.959L59,28.4L77,46.139L95,52.138');

        await animationManager.setAnimationProgress(1);
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');

        // path should not change after the animation is completed
        await animationManager.completeAnimation();
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');
      });

      it('should animate the dots', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        // dots should be at the UV position initially
        expectDots(container, [
          {
            cx: '5',
            cy: '5',
          },
          {
            cx: '23',
            cy: '27.5',
          },
          {
            cx: '41',
            cy: '27.5',
          },
          {
            cx: '59',
            cy: '50',
          },
          {
            cx: '77',
            cy: '32.45',
          },
          {
            cx: '95',
            cy: '52.475',
          },
        ]);

        // dots should animate to the new position
        await animationManager.setAnimationProgress(0.2);
        expectDots(container, [
          {
            cx: '5',
            cy: '18.68',
          },
          {
            cx: '23',
            cy: '32.7794',
          },
          {
            cx: '41',
            cy: '38.483599999999996',
          },
          {
            cx: '59',
            cy: '41.36',
          },
          {
            cx: '77',
            cy: '37.9256',
          },
          {
            cx: '95',
            cy: '52.34',
          },
        ]);

        await animationManager.setAnimationProgress(0.5);
        expectDots(container, [
          {
            cx: '5',
            cy: '39.2',
          },
          {
            cx: '23',
            cy: '40.6985',
          },
          {
            cx: '41',
            cy: '54.958999999999996',
          },
          {
            cx: '59',
            cy: '28.400000000000002',
          },
          {
            cx: '77',
            cy: '46.138999999999996',
          },
          {
            cx: '95',
            cy: '52.1375',
          },
        ]);

        await animationManager.setAnimationProgress(1);
        const finalDotPositions = [
          {
            cx: '5',
            cy: '73.4',
          },
          {
            cx: '23',
            cy: '53.897000000000006',
          },
          {
            cx: '41',
            cy: '82.41799999999999',
          },
          {
            cx: '59',
            cy: '6.8000000000000025',
          },
          {
            cx: '77',
            cy: '59.827999999999996',
          },
          {
            cx: '95',
            cy: '51.8',
          },
        ];
        expectDots(container, finalDotPositions);

        // dots should not change after the animation is completed
        await animationManager.completeAnimation();
        expectDots(container, finalDotPositions);
      });
    });

    describe('interaction after initial animation completes', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        // The test begins initially with the UV dataKey, so we need to run the animation to completion.
        await animationManager.completeAnimation();

        // change the dataKey prop
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should keep the whole line visible during the animation', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        const fullyVisibleLine = '100px 0px';

        /*
         * stroke-dasharray should still be 100px visible and 0px hidden because the animation works by changing the path, not the dasharray
         * but unfortunately the path ref has not been updated yet, so this will hide the whole line for a single tick.
         * Looks like a bug, but it's invisible in the browser because the animation is so quick.
         */
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '0px 0px');

        await animationManager.setAnimationProgress(0.1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.setAnimationProgress(0.5);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.setAnimationProgress(1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.completeAnimation();
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);
      });

      it('should hide labels during the animation', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        /*
         * The labels should still be hidden! But all labels now appear again.
         * Why? Because the animation is not started yet, but they swap to PV label values immediately.
         * Unfortunately the labels still show at the UV position so we have a flash of new labels at the old position.
         * This looks like a bug, but in the browser the labels disappear so quickly that I can't see it.
         */
        expectLabels(container, pvLabelsWithUvPositions);
        await animationManager.setAnimationProgress(0.2);
        // the labels should be hidden by now because the animation is in progress
        expectLabels(container, []);

        await animationManager.setAnimationProgress(0.5);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.setAnimationProgress(1);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.completeAnimation();

        // after the animation is completed, the labels should appear again
        expectLabels(container, expectedPvLabels);
      });

      it('should animate the line path', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        const initialPath = 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475';
        /*
         * Immediately after clicking the button, line should receive new dataKey, but path should be the same
         * and then animate to the new path slowly.
         */
        expect(getLine(container).getAttribute('d')).toBe(initialPath);

        // path changes little by little as the animation progresses
        await animationManager.setAnimationProgress(0.2);
        expect(getLine(container).getAttribute('d')).toBe('M5,18.68L23,32.779L41,38.484L59,41.36L77,37.926L95,52.34');
        expect(getLine(container).getAttribute('d')).not.toBe(initialPath);

        await animationManager.setAnimationProgress(0.5);
        expect(getLine(container).getAttribute('d')).toBe('M5,39.2L23,40.699L41,54.959L59,28.4L77,46.139L95,52.138');

        await animationManager.setAnimationProgress(1);
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');

        // path should not change after the animation is completed
        await animationManager.completeAnimation();
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');
      });

      it('should animate the dots', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        // dots should be at the UV position initially
        expectDots(container, [
          {
            cx: '5',
            cy: '5',
          },
          {
            cx: '23',
            cy: '27.5',
          },
          {
            cx: '41',
            cy: '27.5',
          },
          {
            cx: '59',
            cy: '50',
          },
          {
            cx: '77',
            cy: '32.45',
          },
          {
            cx: '95',
            cy: '52.475',
          },
        ]);

        // dots should animate to the new position
        await animationManager.setAnimationProgress(0.2);
        expectDots(container, [
          {
            cx: '5',
            cy: '18.68',
          },
          {
            cx: '23',
            cy: '32.7794',
          },
          {
            cx: '41',
            cy: '38.483599999999996',
          },
          {
            cx: '59',
            cy: '41.36',
          },
          {
            cx: '77',
            cy: '37.9256',
          },
          {
            cx: '95',
            cy: '52.34',
          },
        ]);

        await animationManager.setAnimationProgress(0.5);
        expectDots(container, [
          {
            cx: '5',
            cy: '39.2',
          },
          {
            cx: '23',
            cy: '40.6985',
          },
          {
            cx: '41',
            cy: '54.958999999999996',
          },
          {
            cx: '59',
            cy: '28.400000000000002',
          },
          {
            cx: '77',
            cy: '46.138999999999996',
          },
          {
            cx: '95',
            cy: '52.1375',
          },
        ]);

        await animationManager.setAnimationProgress(1);
        const finalDotPositions = [
          {
            cx: '5',
            cy: '73.4',
          },
          {
            cx: '23',
            cy: '53.897000000000006',
          },
          {
            cx: '41',
            cy: '82.41799999999999',
          },
          {
            cx: '59',
            cy: '6.8000000000000025',
          },
          {
            cx: '77',
            cy: '59.827999999999996',
          },
          {
            cx: '95',
            cy: '51.8',
          },
        ];
        expectDots(container, finalDotPositions);

        // dots should not change after the animation is completed
        await animationManager.completeAnimation();
        expectDots(container, finalDotPositions);
      });
    });
  });

  describe('when the Line has a key prop to force re-animation', () => {
    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = useState('uv');
      const changeDataKey = () => {
        setDataKey(prev => (prev === 'uv' ? 'pv' : 'uv'));
      };
      return (
        <div>
          <button type="button" onClick={changeDataKey}>
            Change dataKey
          </button>
          <LineChart data={PageData} width={100} height={100}>
            {/* Thanks to the key prop, React will force re-render.
             * This effectively makes it so that the Line always does the initial animation
             * even if it has already been rendered before.
             */}
            <Line dataKey={dataKey} animationEasing="linear" label key={dataKey} />
            {children}
          </LineChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      // The test begins initially with the UV dataKey, so we need to run the animation to completion.
      await animationManager.completeAnimation();

      // change the dataKey prop
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      // now the chart is ready for assertions
    }

    it('should animate the line length from 0 to full length', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);

      const initialPath = 'M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8';
      /*
       * Immediately after clicking the button, line should receive new dataKey, but thanks to the key prop,
       * this renders the "appear" animation from 0 to full length.
       */
      expect(getLine(container).getAttribute('d')).toBe(initialPath);
      // stroke-dasharray should be 0px, 0px because the animation is not started yet
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '0px 0px');

      // path changes little by little as the animation progresses
      await animationManager.setAnimationProgress(0.2);
      expect(getLine(container).getAttribute('d')).toBe(initialPath);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '20px 80px');

      await animationManager.setAnimationProgress(0.5);
      expect(getLine(container).getAttribute('d')).toBe(initialPath);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '50px 50px');

      await animationManager.setAnimationProgress(1);
      expect(getLine(container).getAttribute('d')).toBe(initialPath);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '100px 0px');

      // path should not change after the animation is completed
      await animationManager.completeAnimation();
      expect(getLine(container).getAttribute('d')).toBe(initialPath);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '100px 0px');
    });
  });

  describe('tests that change data array', () => {
    type DataType = Array<{
      name: string;
      val: number;
    }>;
    const uvData: DataType = PageData.map(d => ({ name: d.name, val: d.uv }));
    const pvData: DataType = PageData.map(d => ({ name: d.name, val: d.pv }));

    const MyTestCase = ({ children }: { children: ReactNode }) => {
      const [data, setData] = useState(uvData);
      const changeData = () => {
        setData(prevData => {
          // switch between uv and pv data
          if (prevData === uvData) {
            return pvData;
          }
          return uvData;
        });
      };
      return (
        <div>
          <button type="button" onClick={changeData}>
            Add data
          </button>
          <LineChart data={data} width={100} height={100}>
            <Line dataKey="val" animationEasing="linear" label />
            {children}
          </LineChart>
        </div>
      );
    };

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('interrupting the initial animation', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        /*
         * In this test, we wait for the initial animation to start, but not to complete.
         * We interrupt it by changing the data array, in the middle.
         */
        await animationManager.setAnimationProgress(0.3);

        // change the data array
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should continue growing the line where it left off', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        const fullyVisibleLine = '100px 0px';

        /*
         * The path had arrived at 30% of the path, so it should be 30px visible and 70px hidden
         * before the next animation starts.
         */
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '30px 70px');

        /*
         * Now, the line should continue growing from where it left off. Previously it was 30% of the path, so 30px visible and 70px hidden.
         * Even though a new animation is started, it should not reset the stroke-dasharray
         * and it should continue growing from the most recent length.
         */
        await animationManager.setAnimationProgress(0.1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '40px 60px');

        await animationManager.setAnimationProgress(0.2);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '50px 50px');

        await animationManager.setAnimationProgress(0.3);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', '60px 40px');

        // Because the animation had a head start, it will arrive to full length quicker than the initial animation would.
        await animationManager.setAnimationProgress(0.7);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.completeAnimation();
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);
      });

      it('should hide labels during the animation', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        /*
         * The labels should still be hidden! But all labels now appear again.
         * Why? Because the animation is not started yet, but they swap to new label values immediately.
         * Unfortunately the labels still show at the old position so we have a flash of new labels at the old position.
         * This looks like a bug, but in the browser the labels disappear so quickly that I can't see it.
         */
        expectLabels(container, pvLabelsWithUvPositions);
        await animationManager.setAnimationProgress(0.2);
        // the labels should be hidden by now because the animation is in progress
        expectLabels(container, []);

        await animationManager.setAnimationProgress(0.5);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.setAnimationProgress(1);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.completeAnimation();

        // after the animation is completed, the labels should appear again
        expectLabels(container, expectedPvLabels);
      });
    });

    describe('interaction after initial animation completes', () => {
      async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
        // The test begins initially with the UV dataKey, so we need to run the animation to completion.
        await animationManager.completeAnimation();

        // change the data array
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
        act(() => {
          button.click();
        });

        // now the chart is ready for assertions
      }

      it('should keep the whole line visible during the animation', async () => {
        const { container, animationManager } = renderTestCase();
        await prime(container, animationManager);
        const fullyVisibleLine = '100px 0px';

        /*
         * stroke-dasharray should still be 100px visible and 0px hidden because the animation works by changing the path, not the dasharray
         */
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.setAnimationProgress(0.1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.setAnimationProgress(0.5);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.setAnimationProgress(1);
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

        await animationManager.completeAnimation();
        expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);
      });

      it('should hide labels during the animation', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        /*
         * The labels should still be hidden! But all labels now appear again.
         * Why? Because the animation is not started yet, but they swap to new label values immediately.
         * Unfortunately the labels still show at the old position so we have a flash of new labels at the old position.
         * This looks like a bug, but in the browser the labels disappear so quickly that I can't see it.
         */
        expectLabels(container, pvLabelsWithUvPositions);

        await animationManager.setAnimationProgress(0.2);
        // the labels should be hidden by now because the animation is in progress
        expectLabels(container, []);

        await animationManager.setAnimationProgress(0.5);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.setAnimationProgress(1);
        // the labels should still be hidden
        expectLabels(container, []);

        await animationManager.completeAnimation();

        // after the animation is completed, the labels should appear again, this time at the new position
        expectLabels(container, expectedPvLabels);
      });

      it('should animate the line path', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        const initialPath = 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475';
        /*
         * Immediately after clicking the button, line should receive new data, but path should be the same
         * and then animate to the new path slowly.
         */
        expect(getLine(container).getAttribute('d')).toBe(initialPath);

        // path changes little by little as the animation progresses
        await animationManager.setAnimationProgress(0.2);
        expect(getLine(container).getAttribute('d')).toBe('M5,18.68L23,32.779L41,38.484L59,41.36L77,37.926L95,52.34');
        expect(getLine(container).getAttribute('d')).not.toBe(initialPath);

        await animationManager.setAnimationProgress(0.5);
        expect(getLine(container).getAttribute('d')).toBe('M5,39.2L23,40.699L41,54.959L59,28.4L77,46.139L95,52.138');

        await animationManager.setAnimationProgress(1);
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');

        // path should not change after the animation is completed
        await animationManager.completeAnimation();
        expect(getLine(container).getAttribute('d')).toBe('M5,73.4L23,53.897L41,82.418L59,6.8L77,59.828L95,51.8');
      });

      it('should animate the dots', async () => {
        const { container, animationManager } = renderTestCase();

        await prime(container, animationManager);

        // dots should be at the UV position initially
        expectDots(container, [
          {
            cx: '5',
            cy: '5',
          },
          {
            cx: '23',
            cy: '27.5',
          },
          {
            cx: '41',
            cy: '27.5',
          },
          {
            cx: '59',
            cy: '50',
          },
          {
            cx: '77',
            cy: '32.45',
          },
          {
            cx: '95',
            cy: '52.475',
          },
        ]);

        // dots should animate to the new position
        await animationManager.setAnimationProgress(0.2);
        expectDots(container, [
          {
            cx: '5',
            cy: '18.68',
          },
          {
            cx: '23',
            cy: '32.7794',
          },
          {
            cx: '41',
            cy: '38.483599999999996',
          },
          {
            cx: '59',
            cy: '41.36',
          },
          {
            cx: '77',
            cy: '37.9256',
          },
          {
            cx: '95',
            cy: '52.34',
          },
        ]);

        await animationManager.setAnimationProgress(0.5);
        expectDots(container, [
          {
            cx: '5',
            cy: '39.2',
          },
          {
            cx: '23',
            cy: '40.6985',
          },
          {
            cx: '41',
            cy: '54.958999999999996',
          },
          {
            cx: '59',
            cy: '28.400000000000002',
          },
          {
            cx: '77',
            cy: '46.138999999999996',
          },
          {
            cx: '95',
            cy: '52.1375',
          },
        ]);

        await animationManager.setAnimationProgress(1);
        const finalDotPositions = [
          {
            cx: '5',
            cy: '73.4',
          },
          {
            cx: '23',
            cy: '53.897000000000006',
          },
          {
            cx: '41',
            cy: '82.41799999999999',
          },
          {
            cx: '59',
            cy: '6.8000000000000025',
          },
          {
            cx: '77',
            cy: '59.827999999999996',
          },
          {
            cx: '95',
            cy: '51.8',
          },
        ];
        expectDots(container, finalDotPositions);

        // dots should not change after the animation is completed
        await animationManager.completeAnimation();
        expectDots(container, finalDotPositions);
      });
    });
  });

  describe('tests that add more elements to the data array', () => {
    const data1 = PageData.slice(0, 2);
    const data2 = PageData.slice(0, 4);

    const renderTestCase = createSelectorTestCase(({ children }) => {
      const [data, setData] = useState(data1);
      const addMoreData = () => {
        setData(prevData => {
          if (prevData === data1) {
            return data2;
          }
          return data1;
        });
      };
      return (
        <div>
          <button type="button" onClick={addMoreData}>
            Add more data
          </button>
          <LineChart data={data} width={100} height={100}>
            <Line dataKey="uv" animationEasing="linear" label />
            {children}
          </LineChart>
        </div>
      );
    });

    async function prime(container: HTMLElement, animationManager: MockProgressAnimationManager) {
      // The test begins initially with the first data array, so we need to run the animation to completion.
      await animationManager.completeAnimation();

      // change the data array
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      // now the chart is ready for assertions
    }

    it('should keep the whole line visible during the animation', async () => {
      const { container, animationManager } = renderTestCase();
      await prime(container, animationManager);
      const fullyVisibleLine = '100px 0px';

      /*
       * stroke-dasharray should still be 100px visible and 0px hidden because the animation works by changing the path, not the dasharray
       */
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

      await animationManager.setAnimationProgress(0.1);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

      await animationManager.setAnimationProgress(0.5);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

      await animationManager.setAnimationProgress(1);
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);

      await animationManager.completeAnimation();
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', fullyVisibleLine);
    });

    it('should hide labels during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      await prime(container, animationManager);

      /*
       * The labels should still be hidden! But all labels now appear again.
       * Why? Because the animation is not started yet, but they swap to new label values immediately.
       * Unfortunately the labels still show at the old position so we have a flash of new labels at the old position.
       * This looks like a bug, but in the browser the labels disappear so quickly that I can't see it.
       *
       * What's worse, we get 4 labels because the new data is larger.
       */
      expectLabels(container, [
        {
          height: null,
          offset: '5',
          textContent: '400',
          width: null,
          x: '5',
          y: '5',
        },
        {
          height: null,
          offset: '5',
          textContent: '300',
          width: null,
          x: '5',
          y: '5',
        },
        {
          height: null,
          offset: '5',
          textContent: '300',
          width: null,
          x: '95',
          y: '27.5',
        },
        {
          height: null,
          offset: '5',
          textContent: '200',
          width: null,
          x: '95',
          y: '27.5',
        },
      ]);

      await animationManager.setAnimationProgress(0.2);
      // the labels should be hidden by now because the animation is in progress
      expectLabels(container, []);

      await animationManager.setAnimationProgress(0.5);
      // the labels should still be hidden
      expectLabels(container, []);

      await animationManager.setAnimationProgress(1);
      // the labels should still be hidden
      expectLabels(container, []);

      await animationManager.completeAnimation();

      // after the animation is completed, the labels should appear again, this time at the new position
      expectLabels(container, [
        {
          height: null,
          offset: '5',
          textContent: '400',
          width: null,
          x: '5',
          y: '5',
        },
        {
          height: null,
          offset: '5',
          textContent: '300',
          width: null,
          x: '35',
          y: '27.5',
        },
        {
          height: null,
          offset: '5',
          textContent: '300',
          width: null,
          x: '65',
          y: '27.5',
        },
        {
          height: null,
          offset: '5',
          textContent: '200',
          width: null,
          x: '95',
          y: '50',
        },
      ]);
    });

    it('should animate the line path', async () => {
      const { container, animationManager } = renderTestCase();

      await prime(container, animationManager);

      const initialPath = 'M5,5L5,5L95,27.5L95,27.5';
      /*
       * Immediately after clicking the button, line should receive new data, but path should be the same
       * and then animate to the new path slowly.
       */
      expect(getLine(container).getAttribute('d')).toBe(initialPath);

      // path changes little by little as the animation progresses
      await animationManager.setAnimationProgress(0.2);
      expect(getLine(container).getAttribute('d')).toBe('M5,5L11,9.5L89,27.5L95,32');
      expect(getLine(container).getAttribute('d')).not.toBe(initialPath);

      await animationManager.setAnimationProgress(0.5);
      expect(getLine(container).getAttribute('d')).toBe('M5,5L20,16.25L80,27.5L95,38.75');

      await animationManager.setAnimationProgress(1);
      expect(getLine(container).getAttribute('d')).toBe('M5,5L35,27.5L65,27.5L95,50');

      // path should not change after the animation is completed
      await animationManager.completeAnimation();
      expect(getLine(container).getAttribute('d')).toBe('M5,5L35,27.5L65,27.5L95,50');
    });

    it('should add more dots and animate them', async () => {
      const { container, animationManager } = renderTestCase();

      // at the beginning, there are only 2 dots because the source data has only 2 elements
      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '95',
          cy: '27.5',
        },
      ]);

      await prime(container, animationManager);

      /*
       * After animation begins, two new dots appear.
       * They begin at the same position as the nearest previous, but they animate to the new position.
       */
      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '95',
          cy: '27.5',
        },
        {
          cx: '95',
          cy: '27.5',
        },
      ]);

      // dots should animate to the new position
      await animationManager.setAnimationProgress(0.2);
      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '11',
          cy: '9.5',
        },
        {
          cx: '89',
          cy: '27.5',
        },
        {
          cx: '95',
          cy: '32',
        },
      ]);

      await animationManager.setAnimationProgress(0.5);
      expectDots(container, [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '20',
          cy: '16.25',
        },
        {
          cx: '80',
          cy: '27.5',
        },
        {
          cx: '95',
          cy: '38.75',
        },
      ]);

      await animationManager.setAnimationProgress(1);
      const finalDotPositions = [
        {
          cx: '5',
          cy: '5',
        },
        {
          cx: '35',
          cy: '27.5',
        },
        {
          cx: '65',
          cy: '27.5',
        },
        {
          cx: '95',
          cy: '50',
        },
      ];
      expectDots(container, finalDotPositions);

      // dots should not change after the animation is completed
      await animationManager.completeAnimation();
      expectDots(container, finalDotPositions);
    });
  });

  describe('when the line element hides during the animation', () => {
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
          <LineChart data={PageData} width={100} height={100}>
            <Line dataKey="uv" animationEasing="linear" label hide={!isVisible} />
            {children}
          </LineChart>
        </div>
      );
    });

    it('should not crash when the line hides during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      // start the initial animation but do not complete it
      await animationManager.setAnimationProgress(0.3);

      // hide the line element
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      // the chart should not crash and should not throw any errors
      expectLines(container, []);
    });

    it('should restart the animation from the beginning when the line element appears again', async () => {
      const { container, animationManager } = renderTestCase();

      // start the initial animation but do not complete it
      await animationManager.setAnimationProgress(0.3);

      // hide the line element
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      act(() => {
        button.click();
      });

      expectLines(container, []);

      // show the line element again
      act(() => {
        button.click();
      });

      // the animation should restart from the beginning
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '0px 0px');
      expect(getLine(container).getAttribute('d')).toBe('M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');

      await animationManager.setAnimationProgress(0.3);
      // the line should be partially visible again
      expect(getLine(container)).toHaveAttribute('stroke-dasharray', '30px 70px');

      // complete the animation
      await animationManager.completeAnimation();

      // now the chart should show the full line
      expectLines(container, [{ d: 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475' }]);
    });
  });
});
