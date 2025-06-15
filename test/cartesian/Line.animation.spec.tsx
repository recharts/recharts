import React from 'react';
import { describe, it, expect, beforeAll } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Line, LineChart } from '../../src';
import { PageData } from '../_data';
import { mockGetTotalLength } from '../helper/mockGetTotalLength';
import { ExpectedLabel, expectLabels } from '../helper/expectLabel';

function getLine(container: HTMLElement) {
  return container.querySelector('.recharts-line-curve');
}

describe('Line animation', () => {
  beforeAll(() => {
    mockGetTotalLength(100);
  });

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
      ]);
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

      // ... the very first tick, the first render, shows all labels. This looks like a bug. Same happens in browser,
      // but it's too quick to notice I suppose.
      const expectedLabels: ReadonlyArray<ExpectedLabel> = [
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
      expectLabels(container, expectedLabels);

      // but after the first tick, all labels are hidden
      await animationManager.setAnimationProgress(0.1);

      expectLabels(container, []);

      // just before the end, still hidden
      await animationManager.setAnimationProgress(0.9);
      expectLabels(container, []);

      // and after the animation is completed, all labels pop up all at once
      await animationManager.completeAnimation();
      expectLabels(container, expectedLabels);
    });
  });

  describe.todo('with stroke-dasharray prop');
  describe.todo('tests that change dataKey');
  describe.todo('tests that change data array');
  describe.todo('tests that interrupt the animation in the middle');
  describe.todo('tests that hide and show the line element itself during the animation');
  describe.todo('tests that force the animation to restart by changing the key prop');
});
