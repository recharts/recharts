/**
 * @fileOverview https://github.com/recharts/recharts/issues/5388
 */
import type { Locator } from '@playwright/test';
import { expect, testWithThemes } from './fixtures';

const SAMPLE_INTERVAL = 50;
const SAMPLE_DURATION = 1000;
/*
 * The chart renders with the size it first measures, and then keeps that size.
 * With the bug it grew by the 20px margin on every ResizeObserver callback,
 * so within a second it was several thousand pixels tall.
 */
const GRID_HEIGHT = 300;

function sampleContainerHeights(component: Locator): Promise<number[]> {
  return component.evaluate(
    (element: HTMLElement, settings: { interval: number; duration: number }) =>
      new Promise<number[]>(resolve => {
        const samples: number[] = [];
        const sampler = setInterval(() => {
          const container = element.querySelector('.recharts-responsive-container');
          samples.push(container === null ? -1 : container.getBoundingClientRect().height);
        }, settings.interval);
        setTimeout(() => {
          clearInterval(sampler);
          resolve(samples);
        }, settings.duration);
      }),
    { interval: SAMPLE_INTERVAL, duration: SAMPLE_DURATION },
  );
}

testWithThemes('does not grow inside a 1fr grid row when an ancestor has a margin', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer.5388/ChartInGridRowInsidePanelWithMargin');

  const heights = await sampleContainerHeights(component);

  // The last samples are all identical: the chart has settled.
  const settled = heights.slice(-10);
  expect(new Set(settled).size, `container heights sampled every ${SAMPLE_INTERVAL}ms: ${heights.join(', ')}`).toBe(1);
  // It settled on a real size, not on an empty container.
  expect(settled[settled.length - 1]).toBeGreaterThan(100);
  // It never outgrew the grid.
  expect(Math.max(...heights)).toBeLessThanOrEqual(GRID_HEIGHT);
});
