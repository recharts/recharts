import React from 'react';
import { render, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { CalendarChart, ResponsiveContainer } from '../../src';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

const data = [
  { date: '2025-01-06', commits: 3 },
  { date: '2025-01-07', commits: 5 },
  { date: '2025-01-10', commits: 8 },
];

describe('<CalendarChart />', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  it('renders one heatmap cell per day in the selected range', () => {
    const { container } = render(
      <ResponsiveContainer width={480} height={260}>
        <CalendarChart
          data={data}
          dateKey="date"
          dataKey="commits"
          startDate="2025-01-06"
          endDate="2025-01-12"
          showTooltip={false}
        />
      </ResponsiveContainer>,
    );

    expect(container.querySelectorAll('.recharts-heatmap-rectangle .recharts-rectangle')).toHaveLength(7);
    expect(container.querySelectorAll('.recharts-calendar-month-label')).not.toHaveLength(0);
    expect(container.querySelectorAll('.recharts-calendar-month-boundary')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-calendar-legend-swatch')).toHaveLength(5);
  });

  it('shows the calendar day label in the tooltip', async () => {
    const { container, findByText } = render(
      <ResponsiveContainer width={480} height={260}>
        <CalendarChart
          data={data}
          dateKey="date"
          dataKey="commits"
          name="Commits"
          startDate="2025-01-06"
          endDate="2025-01-12"
        />
      </ResponsiveContainer>,
    );

    showTooltip(container, '.recharts-heatmap-rectangle');

    expect(await findByText('Jan 6, 2025')).toBeInTheDocument();
    expect(await findByText('Day')).toBeInTheDocument();
    expect(await findByText('Commits')).toBeInTheDocument();

    const tooltip = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
    expect(tooltip).toBeInTheDocument();
    const tooltipQueries = within(tooltip!);
    expect(tooltipQueries.getByText('Mon')).toBeInTheDocument();
    expect(tooltipQueries.getByText('3')).toBeInTheDocument();
  });

  it('can render a workweek-only calendar layout', () => {
    const { container } = render(
      <ResponsiveContainer width={480} height={220}>
        <CalendarChart
          data={data}
          dateKey="date"
          dataKey="commits"
          startDate="2025-01-06"
          endDate="2025-01-12"
          showTooltip={false}
          showWeekends={false}
        />
      </ResponsiveContainer>,
    );

    expect(container.querySelectorAll('.recharts-heatmap-rectangle .recharts-rectangle')).toHaveLength(5);
    expect(container).toHaveTextContent('M');
    expect(container).toHaveTextContent('T');
    expect(container).not.toHaveTextContent('Sat');
    expect(container).not.toHaveTextContent('Sun');
  });

  it('does not label padded spillover days as a separate month', () => {
    const { container } = render(
      <ResponsiveContainer width={480} height={220}>
        <CalendarChart
          data={[{ date: '1991-01-02', commits: 2 }]}
          dateKey="date"
          dataKey="commits"
          startDate="1991-01-01"
          endDate="1991-02-28"
          showTooltip={false}
          showWeekends={false}
          showLegend={false}
        />
      </ResponsiveContainer>,
    );

    expect(container).toHaveTextContent('Jan');
    expect(container).not.toHaveTextContent('Dec');
  });
});
