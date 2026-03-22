import React from 'react';
import { render } from '@testing-library/react';
import { DefaultTooltipContent, DefaultTooltipContentProps } from '../../src';

describe('DefaultTooltipContent', () => {
  const mockProps: DefaultTooltipContentProps = {
    accessibilityLayer: true,
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
    separator: ' : ',
    label: 2,
    payload: [
      {
        stroke: '#3182bd',
        fill: '#3182bd',
        fillOpacity: 0.6,
        dataKey: 'uv',
        name: 'uv',
        color: '#3182bd',
        value: 200,
        graphicalItemId: 'recharts-area-0',
      },
    ],
    itemSorter: d => d.name,
    labelFormatter: () => `mock labelFormatter`,
  };

  it('renders without crashing, finds div with default class attr', () => {
    const { container } = render(<DefaultTooltipContent {...mockProps} />);
    expect(container.querySelectorAll('div.recharts-default-tooltip').length).toBe(1);
  });

  it('does not render any name or value when tooltip formatter returns null', () => {
    const mockPropsWithFormatter = {
      ...mockProps,
      formatter: (): null => null,
    };
    const { container } = render(<DefaultTooltipContent {...mockPropsWithFormatter} />);
    const tooltip = container.querySelectorAll('div.recharts-default-tooltip');
    expect(tooltip.length).toBe(1);

    expect(tooltip[0]).toHaveTextContent('mock labelFormatter');
  });

  it('renders the value returned by the formatter as a recharts tooltip item', () => {
    const mockPropsWithFormatter = {
      ...mockProps,
      formatter: (): string => 'SOME VALUE',
    };
    const { container } = render(<DefaultTooltipContent {...mockPropsWithFormatter} />);
    const tooltip = container.querySelectorAll('div.recharts-default-tooltip');
    expect(tooltip.length).toBe(1);

    expect(tooltip[0]).toHaveTextContent('mock labelFormatteruv : SOME VALUE');
  });

  it('renders the name and value returned by the formatter as a recharts tooltip item', () => {
    const mockPropsWithFormatter = {
      ...mockProps,
      formatter: (): [string, string] => ['SOME VALUE', 'SOME NAME'],
    };
    const { container } = render(<DefaultTooltipContent {...mockPropsWithFormatter} />);
    const tooltip = container.querySelectorAll('div.recharts-default-tooltip');
    expect(tooltip.length).toBe(1);

    expect(tooltip[0]).toHaveTextContent('mock labelFormatterSOME NAME : SOME VALUE');
  });

  it('renders without crashing when payload contains null or undefined entries', () => {
    const mockPropsWithSparsePayload: DefaultTooltipContentProps = {
      ...mockProps,
      payload: [
        {
          stroke: '#3182bd',
          fill: '#3182bd',
          fillOpacity: 0.6,
          dataKey: 'uv',
          name: 'A',
          color: '#3182bd',
          value: 10,
          graphicalItemId: 'recharts-area-0',
        },
        undefined,
        null,
        {
          stroke: '#3182bd',
          fill: '#3182bd',
          fillOpacity: 0.6,
          dataKey: 'uv',
          name: 'B',
          color: '#3182bd',
          value: 20,
          graphicalItemId: 'recharts-area-1',
        },
      ] as any,
    };
    const { container } = render(<DefaultTooltipContent {...mockPropsWithSparsePayload} />);
    const tooltipItems = container.querySelectorAll('li.recharts-tooltip-item');
    expect(tooltipItems.length).toBe(2);
  });
});
