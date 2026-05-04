import React from 'react';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { ComposedChart, Line, XAxis } from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetTotalLength } from '../helper/mockGetTotalLength';
import { mockSequenceOfGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

const data = [
  { index: 10000, red: 1643, blue: 790 },
  { index: 1666, red: 182, blue: 42 },
  { index: 625, red: 56, blue: 11 },
  { index: 300, redLine: 0 },
  { index: 10000, redLine: 1522 },
  { index: 600, blueLine: 0 },
  { index: 10000, blueLine: 678 },
];

function getAnimatedLines(container: HTMLElement): SVGPathElement[] {
  return Array.from(container.querySelectorAll<SVGPathElement>('.recharts-line-curve'));
}

function getPathCommands(path: SVGPathElement): string[] {
  const d = path.getAttribute('d');
  if (d == null) {
    throw new Error('Expected line path to have a d attribute');
  }

  return Array.from(d.matchAll(/[A-Za-z]/g), match => match[0]);
}

describe('Line sparse animation path commands', () => {
  beforeEach(() => {
    mockSequenceOfGetBoundingClientRect([
      { width: 0, height: 0, left: 0, top: 50 },
      { width: 50, height: 50, left: 0, top: 50 },
    ]);
  });

  beforeAll(() => {
    mockGetTotalLength(100);
  });

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <ComposedChart data={data} width={100} height={100}>
      <XAxis dataKey="index" type="number" />
      <Line dataKey="redLine" stroke="red" />
      {children}
    </ComposedChart>
  ));

  it('should keep a line-to command in the animated sparse line path', async () => {
    const { container, animationManager } = renderTestCase();

    await animationManager.setAnimationProgress(0.5);

    const lines = getAnimatedLines(container);
    expect(lines).toHaveLength(1);
    expect(getPathCommands(lines[0])).toContain('L');
  });

  it('should contain a line-to command after the animation completes', async () => {
    const { container, animationManager } = renderTestCase();

    await animationManager.completeAnimation();

    const lines = getAnimatedLines(container);
    expect(lines).toHaveLength(1);
    expect(getPathCommands(lines[0])).toContain('L');
  });
});
