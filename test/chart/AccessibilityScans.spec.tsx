import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'vitest-axe';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Funnel,
  FunnelChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from '../../src';
import { PageData as data, exampleSankeyData, exampleTreemapData, exampleSunburstData } from '../_data';
import { expectScatterPoints } from '../helper/expectScatterPoints';

describe('Static scanning for accessibility markup issues', () => {
  test('Area chart', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('chart with accessibilityLayer', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('chart with accessibilityLayer=false', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer={false}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Chart with tooltip, legend, axes, brush, grid, margins', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Brush />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Bar chart', async () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300" />
      </BarChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Funnel chart', async () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Line chart', async () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Pie chart', async () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={[data[0]]} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Radar chart', async () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Radial bar chart', async () => {
    const { container } = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar label={{ orientation: 'outer' }} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Sankey chart', async () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);
    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Scatter chart', async () => {
    const { container } = render(
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="uv" name="stature" unit="cm" />
        <YAxis dataKey="pv" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
        <Tooltip />
      </ScatterChart>,
    );
    expectScatterPoints(container, [
      {
        cx: '92.5',
        cy: '278.59999999999997',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(92.5, 278.59999999999997)',
        width: '9.0270333367641',
      },
      {
        cx: '147.5',
        cy: '200.588',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(147.5, 200.588)',
        width: '9.0270333367641',
      },
      {
        cx: '202.5',
        cy: '314.672',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(202.5, 314.672)',
        width: '9.0270333367641',
      },
      {
        cx: '257.5',
        cy: '12.200000000000006',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(257.5, 12.200000000000006)',
        width: '9.0270333367641',
      },
      {
        cx: '312.5',
        cy: '224.31199999999998',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(312.5, 224.31199999999998)',
        width: '9.0270333367641',
      },
      {
        cx: '367.5',
        cy: '192.20000000000002',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(367.5, 192.20000000000002)',
        width: '9.0270333367641',
      },
    ]);
    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Sunburst', async () => {
    const { container } = render(<SunburstChart data={exampleSunburstData} />);

    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });

  test('Treemap', async () => {
    const { container } = render(
      <Treemap
        width={500}
        height={250}
        data={exampleTreemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
      />,
    );

    expect((await axe(container)).violations).toHaveLength(0);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'application');
  });
});
