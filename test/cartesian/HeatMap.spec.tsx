import React from 'react';
import { render, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Cell, HeatMap, HeatMapChart, Tooltip, XAxis, YAxis } from '../../src';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';
import { HeatMapSettings } from '../../src/state/types/HeatMapSettings';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

const data = [
  { hour: '00:00', day: 'Mon', value: 4 },
  { hour: '06:00', day: 'Mon', value: 8 },
  { hour: '00:00', day: 'Tue', value: 12 },
  { hour: '06:00', day: 'Tue', value: 16 },
];

describe('<HeatMap />', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  it('renders one rectangle per data point', () => {
    const { container } = render(
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" isAnimationActive={false} />
      </HeatMapChart>,
    );

    const rectangles = container.querySelectorAll('.recharts-heatmap-rectangle .recharts-rectangle');
    expect(rectangles).toHaveLength(data.length);

    rectangles.forEach(rectangle => {
      expect(Number(rectangle.getAttribute('width'))).toBeGreaterThan(0);
      expect(Number(rectangle.getAttribute('height'))).toBeGreaterThan(0);
    });
  });

  it('aligns repeated categories into the same columns and rows', () => {
    const { container } = render(
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" isAnimationActive={false} />
      </HeatMapChart>,
    );

    const rectangles = Array.from(
      container.querySelectorAll('.recharts-heatmap-rectangle .recharts-rectangle'),
    ) as SVGRectElement[];

    expect(rectangles).toHaveLength(data.length);

    const xByIndex = rectangles.map(rectangle => Number(rectangle.getAttribute('x')));
    const yByIndex = rectangles.map(rectangle => Number(rectangle.getAttribute('y')));

    expect(xByIndex[0]).toBe(xByIndex[2]);
    expect(xByIndex[1]).toBe(xByIndex[3]);
    expect(yByIndex[0]).toBe(yByIndex[1]);
    expect(yByIndex[2]).toBe(yByIndex[3]);
  });

  it('supports per-cell fill overrides through Cell children', () => {
    const { container } = render(
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" isAnimationActive={false}>
          {data.map(entry => (
            <Cell key={`${entry.day}-${entry.hour}`} fill={entry.value > 10 ? '#ff7300' : '#413ea0'} />
          ))}
        </HeatMap>
      </HeatMapChart>,
    );

    expect(container.querySelector('[fill="#413ea0"]')).toBeInTheDocument();
    expect(container.querySelector('[fill="#ff7300"]')).toBeInTheDocument();
  });

  it('publishes its configuration to redux state', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" xAxisId="xaxis id" yAxisId="yaxis id" name="Traffic" />
        {children}
      </HeatMapChart>
    ));
    const { spy, rerender } = renderTestCase(selectUnfilteredCartesianItems);

    const expected: HeatMapSettings = {
      id: expect.stringMatching('recharts-heat-map'),
      type: 'heatMap',
      data: undefined,
      dataKey: 'value',
      hide: false,
      isPanorama: false,
      name: 'Traffic',
      tooltipType: undefined,
      unit: undefined,
      xAxisId: 'xaxis id',
      yAxisId: 'yaxis id',
      zAxisId: 0,
      cellGap: 0,
      cellSize: undefined,
    };

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenLastCalledWith([expected]);
    const initialCallCount = spy.mock.calls.length;

    rerender(({ children }) => (
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" xAxisId="xaxis id" yAxisId="yaxis id" name="Heat" />
        {children}
      </HeatMapChart>
    ));

    expect(spy.mock.calls.length).toBeGreaterThan(initialCallCount);
    expect(spy).toHaveBeenLastCalledWith([
      {
        ...expected,
        name: 'Heat',
      },
    ]);
  });

  it('ignores nullish data entries when computing cells', () => {
    const sparseData = [
      { hour: '00:00', day: 'Mon', value: 4 },
      null,
      undefined,
      { hour: '06:00', day: 'Tue', value: 16 },
    ];

    const { container } = render(
      <HeatMapChart width={400} height={240} data={sparseData}>
        <XAxis type="category" dataKey="hour" />
        <YAxis type="category" dataKey="day" />
        <HeatMap dataKey="value" isAnimationActive={false} />
      </HeatMapChart>,
    );

    const rectangles = container.querySelectorAll('.recharts-heatmap-rectangle .recharts-rectangle');
    expect(rectangles).toHaveLength(2);
  });

  it('shows x, y, and value entries in the tooltip', async () => {
    const { container, findByText } = render(
      <HeatMapChart width={400} height={240} data={data}>
        <XAxis type="category" dataKey="hour" name="Hour" />
        <YAxis type="category" dataKey="day" name="Day" />
        <Tooltip />
        <HeatMap dataKey="value" name="Intensity" isAnimationActive={false} fill="#8884d8" />
      </HeatMapChart>,
    );

    showTooltip(container, '.recharts-heatmap-rectangle');

    expect(await findByText('Hour')).toBeInTheDocument();
    expect(await findByText('Day')).toBeInTheDocument();
    expect(await findByText('Intensity')).toBeInTheDocument();

    const tooltip = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
    expect(tooltip).toBeInTheDocument();
    const tooltipQueries = within(tooltip!);
    expect(tooltipQueries.getByText('00:00')).toBeInTheDocument();
    expect(tooltipQueries.getByText('Mon')).toBeInTheDocument();
    expect(tooltipQueries.getByText('4')).toBeInTheDocument();
  });
});
