import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { CartesianGrid, Scatter, ScatterChart, Surface, Tooltip, XAxis, YAxis, ZAxis } from '../../src';

describe('<ZAxis />', () => {
  const data = [
    {
      name: 'Page A',
      xAxis: 590,
      zAxis: 800,
      yAxis: 1000,
    },
    {
      name: 'Page B',
      xAxis: 490,
      zAxis: 100,
      yAxis: 1400,
    },
  ];
  it("Don't render anything", () => {
    render(
      <Surface width={500} height={500}>
        <ZAxis dataKey="x" name="stature" unit="cm" />
      </Surface>,
    );
    const svg = document.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg?.children).toHaveLength(2);
  });

  it('Renders Scatters symbols and tooltips with Z axis data', async () => {
    const { container } = render(
      <ScatterChart height={400} width={400}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis dataKey="yAxis" />
        <ZAxis dataKey="zAxis" name="test name" range={[0, 2000]} unit="km" />
        <CartesianGrid />
        <Scatter data={data} name="pageData" />
        <Tooltip />
      </ScatterChart>,
    );

    const svg = document.querySelector('svg');
    const gContainers = svg.querySelectorAll('.recharts-layer.recharts-scatter-symbol');

    expect(gContainers).toHaveLength(data.length);

    const firstShape = gContainers[0].querySelector('path');
    const firstShapeName = firstShape.getAttribute('name');
    expect(firstShapeName).toBe(data[0].name);

    const secondShape = gContainers[1].querySelector('path');
    const secondShapeName = secondShape.getAttribute('name');
    expect(secondShapeName).toBe(data[1].name);

    const firstShapeWidth = Number(firstShape.getAttribute('width'));
    const secondShapeWidth = Number(secondShape.getAttribute('width'));

    expect(firstShapeWidth).toBeGreaterThan(secondShapeWidth);

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    await userEvent.hover(firstShape);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(`xAxis : ${data[0].xAxis}yAxis : ${data[0].yAxis}test name : ${data[0].zAxis}km`);

    await userEvent.unhover(firstShape);
    expect(tooltip).not.toBeVisible();

    await userEvent.hover(secondShape);
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(`xAxis : ${data[1].xAxis}yAxis : ${data[1].yAxis}test name : ${data[1].zAxis}km`);
  });
});
