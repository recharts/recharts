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
import { PageData as data, SankeyData, TreemapData, exampleSunburstData } from '../_data';

describe('Static scanning for accessibility markup issues', () => {
  test('Area chart', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('chart with accessibilityLayer', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    expect((await axe(container)).violations).toHaveLength(0);
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
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Bar chart', async () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300" />
      </BarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Funnel chart', async () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Line chart', async () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Pie chart', async () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={[data[0]]} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Radar chart', async () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Radial bar chart', async () => {
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
  });

  test.skip('Sankey chart', async () => {
    const { container } = render(<Sankey width={1000} height={500} data={SankeyData} />);
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Scatter chart', async () => {
    const { container } = render(
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
        <Tooltip />
      </ScatterChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Sunburst', async () => {
    const { container } = render(<SunburstChart data={exampleSunburstData} />);

    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Treemap', async () => {
    const { container } = render(
      <Treemap width={500} height={250} data={TreemapData} isAnimationActive={false} nameKey="name" dataKey="value" />,
    );

    expect((await axe(container)).violations).toHaveLength(0);
  });
});
