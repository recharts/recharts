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

const svgTagMustHaveLabelViolation = expect.objectContaining({
  description: 'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
  help: '<svg> elements with an img role must have an alternative text',
  helpUrl: 'https://dequeuniversity.com/rules/axe/4.7/svg-img-alt?application=axeAPI',
  id: 'svg-img-alt',
  impact: 'serious',
});

describe('Static scanning for accessibility markup issues', () => {
  test('Area chart', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('chart with accessibilityLayer', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
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
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Bar chart', async () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300" />
      </BarChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Funnel chart', async () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect((await axe(container)).violations).toEqual([svgTagMustHaveLabelViolation]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Line chart', async () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Pie chart', async () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={[data[0]]} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Radar chart', async () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expect((await axe(container)).violations).toEqual([]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
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
    expect((await axe(container)).violations).toEqual([svgTagMustHaveLabelViolation]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Sankey chart', async () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);
    expect((await axe(container)).violations).toEqual([svgTagMustHaveLabelViolation]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'region');
  });

  test('Scatter chart', async () => {
    const { container } = render(
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
        <Tooltip />
      </ScatterChart>,
    );
    expect((await axe(container)).violations).toEqual([svgTagMustHaveLabelViolation]);
    expect(document.querySelector('.recharts-wrapper')).not.toHaveAttribute('role');
  });

  test('Sunburst', async () => {
    const { container } = render(<SunburstChart data={exampleSunburstData} />);

    expect((await axe(container)).violations).toEqual([
      expect.objectContaining({
        description: "Ensures ARIA attributes are allowed for an element's role",
        help: 'Elements must only use allowed ARIA attributes',
        helpUrl: 'https://dequeuniversity.com/rules/axe/4.7/aria-allowed-attr?application=axeAPI',
        id: 'aria-allowed-attr',
        impact: 'serious',
      }),
      svgTagMustHaveLabelViolation,
    ]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'region');
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

    expect((await axe(container)).violations).toEqual([svgTagMustHaveLabelViolation]);
    expect(document.querySelector('.recharts-wrapper')).toHaveAttribute('role', 'region');
  });
});
