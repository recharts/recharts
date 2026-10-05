import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Bar, BarChart, Brush, LineChart, Line, RadialBar, RadialBarChart, XAxis } from '../../src';

function attributesContainingUndefined(container: Element): string[] {
  const hits: string[] = [];
  container.querySelectorAll('*').forEach(element => {
    Array.from(element.attributes).forEach(attribute => {
      if (/\bundefined\b/.test(attribute.value)) {
        hits.push(`${element.tagName.toLowerCase()}[${attribute.name}="${attribute.value}"]`);
      }
    });
  });
  return hits;
}

const data = [
  { label: 'a', value: 5 },
  { label: 'b', value: 3 },
];

describe('no "undefined" text in rendered attributes', () => {
  it('Bar without a name prop does not render name="undefined"', () => {
    const { container } = render(
      <BarChart width={300} height={200} data={data}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle path').length).toBe(2);
    expect(attributesContainingUndefined(container)).toEqual([]);
  });

  it('RadialBar sectors do not get an "undefined" class', () => {
    const { container } = render(
      <RadialBarChart width={300} height={200} data={data}>
        <RadialBar dataKey="value" isAnimationActive={false} background />
      </RadialBarChart>,
    );

    expect(container.querySelectorAll('.recharts-radial-bar-sector').length).toBe(2);
    expect(container.querySelectorAll('.recharts-radial-bar-background-sector').length).toBe(2);
    expect(attributesContainingUndefined(container)).toEqual([]);
  });

  it('Brush uses the dataKey value in the traveller label when the data has no name field', () => {
    const { container } = render(
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="label" />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush dataKey="label" />
      </LineChart>,
    );

    const labels = Array.from(container.querySelectorAll('.recharts-brush-traveller')).map(el =>
      el.getAttribute('aria-label'),
    );
    expect(labels).toEqual(['Min value: a, Max value: b', 'Min value: a, Max value: b']);
    expect(attributesContainingUndefined(container)).toEqual([]);
  });

  it('Brush leaves out the traveller label when it has no name to show', () => {
    const { container } = render(
      <LineChart width={300} height={200} data={data}>
        <Line dataKey="value" isAnimationActive={false} />
        <Brush />
      </LineChart>,
    );

    const travellers = container.querySelectorAll('.recharts-brush-traveller');
    expect(travellers.length).toBeGreaterThan(0);
    travellers.forEach(el => expect(el.getAttribute('aria-label')).toBeNull());
    expect(attributesContainingUndefined(container)).toEqual([]);
  });
});
