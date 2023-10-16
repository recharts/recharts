import React from 'react';
import { Screen } from '@testing-library/react';
import { measurePerformance } from 'reassure';
import { generateMockData } from '../helper/generateMockData';
import { LineChart, Tooltip, Line } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

describe('Tooltip perf test', () => {
  test('render tooltip', async () => {
    const data = generateMockData(100, 334058656);
    const [surfaceWidth, surfaceHeight] = [600, 300];
    await measurePerformance(
      <LineChart
        width={surfaceWidth}
        height={surfaceHeight}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        data={data}
      >
        <Tooltip />
        <Line dataKey="x" />
        <Line dataKey="y" />
        <Line dataKey="z" />
      </LineChart>,
      {
        async scenario(screen: Screen) {
          const chart = screen.getByRole('region');

          const tooltipContentNameBefore = chart.querySelector('.recharts-tooltip-item-name');
          const tooltipContentValueBefore = chart.querySelector('.recharts-tooltip-item-value');
          expect(tooltipContentNameBefore).not.toBeInTheDocument();
          expect(tooltipContentValueBefore).not.toBeInTheDocument();

          const mouseOverEvent = mockMouseEvent('mouseover', chart, { pageX: 200, pageY: 200 });
          const mouseOutEvent = mockMouseEvent('mouseover', chart, { pageX: 200, pageY: 200 });
          mouseOverEvent.fire();

          const tooltipContentNameAfter = chart.querySelector('.recharts-tooltip-item-name');
          const tooltipContentValueAfter = chart.querySelector('.recharts-tooltip-item-value');
          expect(tooltipContentNameAfter).toBeInTheDocument();
          expect(tooltipContentValueAfter).toBeInTheDocument();

          mouseOutEvent.fire();
          mouseOverEvent.fire();
        },
      },
    );
  });
});
