import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PieChart, Pie, Legend, Cell, Tooltip, Sector } from '../../src';
import { mockMouseEvent } from '../helper/mockMouseEvent';

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

  test('With Tooltip render customized active sector when activeShape is set to be an element', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          activeShape={<Sector fill="#ff7300" className="customized-active-shape" />}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Tooltip />
      </PieChart>,
    );
    const sectorNodes = container.querySelectorAll('.recharts-pie-sector');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('With Tooltip render customized active sector when activeShape is set to be a function', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          activeShape={props => <Sector {...props} fill="#ff7300" className="customized-active-shape" />}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Tooltip />
      </PieChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-pie-sector');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 200, pageY: 200 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('With Tooltip render customized active sector when activeShape is set to be an object', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          activeShape={{ fill: '#ff7300', className: 'customized-active-shape' }}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Tooltip />
      </PieChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-pie-sector');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
    expect(container.querySelectorAll('.customized-active-shape')).toHaveLength(1);
  });

  test('With Tooltip render customized active sector when activeShape is set to be a truthy boolean', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          activeShape
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Tooltip />
      </PieChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-pie-sector');
    const [sector] = Array.from(sectorNodes);
    const mouseOverEvent = mockMouseEvent('mouseover', sector, { pageX: 100, pageY: 100 });

    mouseOverEvent.fire();

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
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

  test('Renders tooltip when add a Tooltip element', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Tooltip />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-tooltip-wrapper')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-tooltip')).toHaveLength(1);
  });

  test('click on Sector should invoke onClick callback', async () => {
    const onClick = jest.fn();

    const { container } = render(getPieChart({ onClick }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.click(sector);
    expect(onClick).toBeCalled();
  });

  test('onMouseEnter Sector should invoke onMouseEnter callback', async () => {
    const onMouseEnter = jest.fn();

    const { container } = render(getPieChart({ onMouseEnter }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.hover(sector);
    expect(onMouseEnter).toBeCalled();
  });

  test('onMouseLeave Sector should invoke onMouseLeave callback', async () => {
    const onMouseLeave = jest.fn();

    const { container } = render(getPieChart({ onMouseLeave }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.unhover(sector);
    expect(onMouseLeave).toBeCalled();
  });
});
