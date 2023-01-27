import React from 'react';
import { render } from '@testing-library/react';
import { Legend, LineChart, Line } from '../../src';

describe('<Legend />', () => {
  const data = [
    { value: 'Apple', color: '#ff7300' },
    { value: 'Samsung', color: '#bb7300' },
    { value: 'Huawei', color: '#887300' },
    { value: 'Sony', color: '#667300' },
  ];

  test('Render 4 legend items in simple Legend', () => {
    const { container } = render(<Legend width={500} height={30} payload={data} />);

    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(4);
  });

  test('Render customized legend when content is set to be a react element', () => {
    const CustomizedLegend = () => <div className="customized-legend">test</div>;
    const { container } = render(<Legend width={500} height={30} payload={data} content={<CustomizedLegend />} />);

    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
    expect(container.querySelectorAll('.customized-legend')).toHaveLength(1);
  });

  test('Does not render items with a type of `none`', () => {
    const dataWithNone = [
      { value: 'Apple', color: '#ff7300' },
      { value: 'Samsung', color: '#bb7300' },
      { value: 'Huawei', color: '#887300' },
      { value: 'Sony', type: 'none' },
    ];
    const { container } = render(<Legend width={500} height={30} payload={dataWithNone as any} />);

    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(3);
  });

  test('Renders `strokeDasharray` (if present) in Legend when iconType is set to `plainline`', () => {
    const { container } = render(
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <Legend iconType="plainline" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item path')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item line')).toHaveLength(2);
  });

  test('Does not render `strokeDasharray` (if not present) in Legend when iconType is set to something else than `plainline`', () => {
    const { container } = render(
      <LineChart width={600} height={300} data={data}>
        <Legend iconType="line" />
        <Line dataKey="pv" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item path')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item line')).toHaveLength(0);
  });
});
