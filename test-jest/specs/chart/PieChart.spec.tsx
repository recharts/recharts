import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PieChart, Pie, Legend, Cell } from '../../../src';

describe('<PieChart />', () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  test('Renders 6 sectors circles in simple PieChart', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(data.length);
  });

  test('Renders 6 sectors circles when add Cell to specified props of eact slice', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" isAnimationActive={false} cx={200} cy={200} outerRadius={80} fill="#ff7300" label>
          {data.map((entry, index) => (
            <Cell {...entry} key={`cell-${entry.name}`} strokeWidth={index + 1} />
          ))}
        </Pie>
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(6);
  });

  test('Renders legend when all the values are 0', () => {
    const emptyData = [
      { name: 'Group A', value: 0 },
      { name: 'Group B', value: 0 },
      { name: 'Group C', value: 0 },
      { name: 'Group D', value: 0 },
      { name: 'Group E', value: 0 },
      { name: 'Group F', value: 0 },
    ];
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={emptyData} isAnimationActive={false} cx={200} cy={200} outerRadius={80} />
        <Legend />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(emptyData.length);
  });

  test("Don't renders any sectors when width or height is smaller than 0", () => {
    const { container } = render(
      <PieChart width={0} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(0);
  });

  test('Renders 6 legend item when add a Legend element', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Legend />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-legend-wrapper')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(6);
  });

  const getPieChart = (eventProps: { onClick?: jest.Mock; onMouseEnter?: jest.Mock; onMouseLeave?: jest.Mock }) => {
    return (
      <PieChart width={800} height={400} {...eventProps}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>
    );
  };

  test('click on Sector should invoke onClick callback', () => {
    const onClick = jest.fn();

    const { container } = render(getPieChart({ onClick }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const se = sectors[2];

    fireEvent.click(se);
    expect(onClick).toBeCalled();
  });

  test('onMouseEnter Sector should invoke onMouseEnter callback', () => {
    const onMouseEnter = jest.fn();

    const { container } = render(getPieChart({ onMouseEnter }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const se = sectors[2];

    fireEvent.mouseEnter(se);
    expect(onMouseEnter).toBeCalled();
  });

  test('onMouseLeave Sector should invoke onMouseLeave callback', () => {
    const onMouseLeave = jest.fn();

    const { container } = render(getPieChart({ onMouseLeave }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const se = sectors[2];

    fireEvent.mouseLeave(se);
    expect(onMouseLeave).toBeCalled();
  });
});
