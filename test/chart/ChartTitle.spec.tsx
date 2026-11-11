import * as React from 'react';
import { render } from '@testing-library/react';
import { Brush, Legend, Line, LineChart, Pie, PieChart, PolarGrid, RadarChart, XAxis, YAxis } from '../../src';

const data = [{ value: 1 }, { value: 2 }];

describe('visible chart title', () => {
  it('centers the title on the plot and reserves space above a top axis as the chart resizes', () => {
    const chart = (width: number, showTitle: boolean) => (
      <LineChart
        width={width}
        height={200}
        margin={{ left: 10, right: 20, top: 6, bottom: 10 }}
        data={data}
        title="Daily visits"
        showTitle={showTitle}
      >
        <YAxis width={70} />
        <XAxis orientation="top" height={30} />
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>
    );
    const { container, rerender } = render(chart(400, false));
    const plot = () => container.querySelector('clipPath rect');
    const heading = () => container.querySelector('.recharts-chart-title');

    expect(container.querySelector('svg > title')).toHaveTextContent('Daily visits');
    expect(heading()).toBeNull();
    expect(plot()).toHaveAttribute('y', '36');

    rerender(chart(400, true));
    expect(heading()).toHaveTextContent('Daily visits');
    expect(heading()).toHaveAttribute('aria-hidden', 'true');
    expect(heading()).toHaveAttribute('x', '230');
    expect(heading()).toHaveAttribute('y', '18');
    expect(plot()).toHaveAttribute('y', '60');
    expect(plot()).toHaveAttribute('height', '130');

    rerender(chart(600, true));
    expect(heading()).toHaveAttribute('x', '330');

    rerender(chart(600, false));
    expect(heading()).toBeNull();
    expect(plot()).toHaveAttribute('height', '154');
    expect(container.querySelector('svg > title')).toHaveTextContent('Daily visits');
  });

  it.each([false, true])('places a top legend below the heading (position prop: %s)', usePosition => {
    const { container } = render(
      <LineChart width={400} height={200} data={data} title="Daily visits" showTitle>
        <Legend {...(usePosition ? { position: 'top' as const } : { verticalAlign: 'top' as const })} />
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>,
    );
    expect(container.querySelector('.recharts-chart-title')).toHaveAttribute('y', '17');
    expect(container.querySelector('.recharts-legend-wrapper')).toHaveStyle({ top: '29px' });
  });

  it('reserves space in a PieChart only when there is title text to display', () => {
    const chart = (title?: string) => (
      <PieChart width={300} height={200} title={title} showTitle>
        <Pie data={data} dataKey="value" isAnimationActive={false} />
      </PieChart>
    );
    const { container, rerender } = render(chart());
    expect(container.querySelector('.recharts-chart-title')).toBeNull();
    expect(container.querySelector('clipPath rect')).toHaveAttribute('y', '5');
    rerender(chart('Traffic by source'));
    expect(container.querySelector('.recharts-chart-title')).toHaveAttribute('x', '150');
    expect(container.querySelector('clipPath rect')).toHaveAttribute('y', '29');
    expect(container.querySelector('.recharts-pie-sector path')).toBeInTheDocument();
    rerender(chart(' '));
    expect(container.querySelector('.recharts-chart-title')).toBeNull();
    expect(container.querySelector('clipPath rect')).toHaveAttribute('y', '5');
  });

  it('moves a percentage-based polar center below the heading and honors an explicit pixel center', () => {
    const chart = (cy: string | number) => (
      <RadarChart width={300} height={200} cy={cy} title="Activity" showTitle>
        <PolarGrid gridType="circle" polarAngles={[0, 90, 180, 270]} polarRadius={[60]} />
      </RadarChart>
    );
    const { container, rerender } = render(chart('50%'));
    const grid = () => container.querySelector('.recharts-polar-grid-concentric-circle');
    expect(container.querySelector('.recharts-chart-title')).toHaveTextContent('Activity');
    expect(grid()).toHaveAttribute('cy', '112');
    rerender(chart(65));
    expect(grid()).toHaveAttribute('cy', '65');
  });

  it('keeps a Brush panorama from overriding the main chart title', () => {
    const { container } = render(
      <LineChart data={data} width={300} height={200} title="Daily visits" showTitle>
        <Line dataKey="value" isAnimationActive={false} />
        <Brush>
          <LineChart title="Preview" showTitle>
            <Line dataKey="value" isAnimationActive={false} />
          </LineChart>
        </Brush>
      </LineChart>,
    );
    expect(container.querySelector('.recharts-brush')).toBeInTheDocument();
    expect(container.querySelectorAll('.recharts-chart-title')).toHaveLength(1);
    expect(container.querySelector('.recharts-chart-title')).toHaveTextContent('Daily visits');
  });
});
