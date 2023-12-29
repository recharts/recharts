import React from 'react';
import { render } from '@testing-library/react';
import { Brush, BrushY, BarChart } from '../../src';

describe('<BrushY />', () => {
  const data = [
    { date: '2023-01-01', value: 10 },
    { date: '2023-01-02', value: 20 },
    { date: '2023-01-03', value: 10 },
    { date: '2023-01-04', value: 30 },
    { date: '2023-01-05', value: 50 },
    { date: '2023-01-06', value: 10 },
    { date: '2023-01-07', value: 30 },
    { date: '2023-01-08', value: 20 },
    { date: '2023-01-09', value: 10 },
    { date: '2023-01-10', value: 70 },
    { date: '2023-01-11', value: 40 },
    { date: '2023-01-12', value: 20 },
    { date: '2023-01-13', value: 10 },
    { date: '2023-01-14', value: 10 },
  ];

  test('Render 2 travelers and 1 slide in simple BrushY', () => {
    const { container } = render(
      <BarChart width={400} height={100} data={data}>
        <BrushY dataKey="value" x={100} y={50} width={40} height={400} />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-brush-traveller')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-brush-slide')).toHaveLength(1);
  });
});
