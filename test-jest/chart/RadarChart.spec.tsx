import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from '../../src';

describe('<RadarChart />', () => {
  const data = [
    { name: 'iPhone 3GS', value: 420, half: 210 },
    { name: 'iPhone 4', value: 460, half: 230 },
    { name: 'iPhone 4s', value: 999, half: 500 },
    { name: 'iPhone 5', value: 500, half: 250 },
    { name: 'iPhone 5s', value: 864, half: 432 },
    { name: 'iPhone 6', value: 650, half: 325 },
    { name: 'iPhone 6s', value: 765, half: 383 },
    { name: 'iPhone 5se', value: 365, half: 183 },
  ];

  test('Render 1 polygon in a simple Radar', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-polygon')).toHaveLength(1);
  });

  test('Render 8 dots when dot is setted to be true', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar isAnimationActive={false} dot dataKey="value" />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-radar-dot')).toHaveLength(8);
  });

  test('Render 8 labels when dot is setted to be true', () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar isAnimationActive={false} label dataKey="value" />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(8);
  });

  test('Render 1 PolarGrid 1 PolarAngleAxis and 1 PolarRadiusAxis in simple Radar', () => {
    const { container } = render(
      <RadarChart
        cx={300}
        cy={250}
        startAngle={45}
        innerRadius={20}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-polar-grid')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-polar-angle-axis')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-polar-radius-axis')).toHaveLength(1);
  });

  test('Render 8 angle grid angle line, 8 angle axis ticks, and 3 radius axis ticks', () => {
    const { container } = render(
      <RadarChart
        cx={300}
        cy={250}
        startAngle={45}
        innerRadius={20}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>,
    );
    expect(container.querySelectorAll('.recharts-polar-grid .recharts-polar-grid-angle line')).toHaveLength(8);
    expect(container.querySelectorAll('.recharts-polar-angle-axis .recharts-polar-angle-axis-tick')).toHaveLength(8);
    expect(container.querySelectorAll('.recharts-polar-radius-axis .recharts-polar-radius-axis-tick')).toHaveLength(5);
  });

  test('click on Sector should invoke onClick callback', () => {
    const onClick = jest.fn();
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" onClick={onClick} />
      </RadarChart>,
    );
    const radar = container.querySelector('.recharts-polygon');
    if (!radar) {
      throw new Error('Radar not found');
    }
    fireEvent.click(radar);
    expect(onClick).toBeCalled();
  });
});
