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

      const dots = container.querySelectorAll('.recharts-dot');
      expect(dots).toHaveLength(6);
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

      const dots = container.querySelectorAll('.recharts-dot');
      expect(dots).toHaveLength(6);
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

    // this test should fail because I can see this bug in the storybook
    it.fails('should not move the path during the animation', async () => {
      const { container, animationManager } = renderTestCase();

      const line = getLine(container);
      expect(line).toBeInTheDocument();
      // the path is fully rendered
      const initialPath = line.getAttribute('d');
      expect(initialPath).toBe('M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475');
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
      expectLabels(container, [
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

      // after the animation is completed, the labels should appear again
      expectLabels(container, expectedPvLabels);
    });

    it('should start a new animation when the dataKey prop changes', async () => {
      const { container, animationManager } = renderTestCase();

      await prime(container, animationManager);

      const initialPath = 'M5,5L23,27.5L41,27.5L59,50L77,32.45L95,52.475';
      /*
       * Immediately after clicking the button, line should receive new dataKey immediately, but path should be the same
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
  });

  describe.todo('tests that change data array');
  describe.todo('tests that interrupt the animation in the middle');
  describe.todo('tests that hide and show the line element itself during the animation');
  describe.todo('tests that force the animation to restart by changing the key prop');
});
