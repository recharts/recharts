/**
 * @fileOverview Proof-of-concept for Playwright animation capture in visual regression testing.
 *
 * Existing VR tests set `isAnimationActive={false}` and compare a single static screenshot.
 * These tests capture multiple frames during chart animations to verify:
 * 1. The animation actually occurs (frames differ over time)
 * 2. The final rendered state matches a baseline snapshot (visual regression)
 *
 * See https://github.com/recharts/recharts/issues/7013
 */
import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import type { Locator, Page } from '@playwright/test';
import { Bar, BarChart, XAxis, YAxis, Line, LineChart, CartesianGrid, Area, AreaChart } from '../../src';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 500 },
  { name: 'D', value: 200 },
  { name: 'E', value: 350 },
];

/**
 * Captures a sequence of screenshots at intervals during the animation window.
 * Returns the raw PNG buffers so we can compare them.
 */
async function captureAnimationFrames(
  component: Locator,
  page: Page,
  {
    totalDuration,
    frameCount,
  }: {
    /** Total time to capture over, in milliseconds */
    totalDuration: number;
    /** Number of frames to capture */
    frameCount: number;
  },
): Promise<Buffer[]> {
  const interval = totalDuration / (frameCount - 1);
  const frames: Buffer[] = [];

  for (let i = 0; i < frameCount; i++) {
    const buffer = await component.screenshot();
    frames.push(buffer);
    if (i < frameCount - 1) {
      // eslint-disable-next-line no-await-in-loop, playwright/no-wait-for-timeout
      await page.waitForTimeout(interval);
    }
  }

  return frames;
}

/**
 * Checks whether two PNG buffers are visually different.
 * Uses a simple byte comparison -- if the buffers differ, the images differ.
 * This is sufficient for detecting animation progress because animated charts
 * produce meaningfully different pixel content at different time points.
 */
function framesAreDifferent(a: Buffer, b: Buffer): boolean {
  if (a.length !== b.length) return true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return true;
  }
  return false;
}

test.describe('Animation capture - BarChart', () => {
  const ANIMATION_DURATION = 800;

  test('captures animation frames that show visual progress', async ({ mount, page }) => {
    const component = await mount(
      <BarChart data={data} width={400} height={300}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" isAnimationActive animationDuration={ANIMATION_DURATION} />
      </BarChart>,
    );

    // Capture frames across the animation window.
    // We start immediately (animation begins on mount) and capture over the full duration.
    const frames = await captureAnimationFrames(component, page, {
      totalDuration: ANIMATION_DURATION + 200, // add buffer for mount overhead
      frameCount: 5,
    });

    // The first frame should differ from the last frame -- this proves animation occurred.
    // If the chart rendered statically (no animation), all frames would be identical.
    const firstFrame = frames[0];
    const lastFrame = frames[frames.length - 1];
    expect(framesAreDifferent(firstFrame, lastFrame)).toBe(true);
  });

  test('final frame after animation matches baseline snapshot', async ({ mount, page }) => {
    const component = await mount(
      <BarChart data={data} width={400} height={300}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" isAnimationActive animationDuration={ANIMATION_DURATION} />
      </BarChart>,
    );

    // Wait for animation to complete, then take the baseline snapshot.
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(ANIMATION_DURATION + 300);
    await expect(component).toHaveScreenshot();
  });
});

test.describe('Animation capture - LineChart', () => {
  const ANIMATION_DURATION = 800;

  test('captures line drawing animation', async ({ mount, page }) => {
    const component = await mount(
      <LineChart data={data} width={400} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          isAnimationActive
          animationDuration={ANIMATION_DURATION}
        />
      </LineChart>,
    );

    const frames = await captureAnimationFrames(component, page, {
      totalDuration: ANIMATION_DURATION + 200,
      frameCount: 5,
    });

    const firstFrame = frames[0];
    const lastFrame = frames[frames.length - 1];
    expect(framesAreDifferent(firstFrame, lastFrame)).toBe(true);
  });

  test('final frame after line animation matches baseline snapshot', async ({ mount, page }) => {
    const component = await mount(
      <LineChart data={data} width={400} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          isAnimationActive
          animationDuration={ANIMATION_DURATION}
        />
      </LineChart>,
    );

    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(ANIMATION_DURATION + 300);
    await expect(component).toHaveScreenshot();
  });
});

test.describe('Animation capture - AreaChart', () => {
  const ANIMATION_DURATION = 800;

  test('captures area fill animation', async ({ mount, page }) => {
    const component = await mount(
      <AreaChart data={data} width={400} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          isAnimationActive
          animationDuration={ANIMATION_DURATION}
        />
      </AreaChart>,
    );

    const frames = await captureAnimationFrames(component, page, {
      totalDuration: ANIMATION_DURATION + 200,
      frameCount: 5,
    });

    const firstFrame = frames[0];
    const lastFrame = frames[frames.length - 1];
    expect(framesAreDifferent(firstFrame, lastFrame)).toBe(true);
  });

  test('final frame after area animation matches baseline snapshot', async ({ mount, page }) => {
    const component = await mount(
      <AreaChart data={data} width={400} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          isAnimationActive
          animationDuration={ANIMATION_DURATION}
        />
      </AreaChart>,
    );

    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(ANIMATION_DURATION + 300);
    await expect(component).toHaveScreenshot();
  });
});
