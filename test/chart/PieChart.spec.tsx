import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mock, vi } from 'vitest';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Sector,
  SectorProps,
  Tooltip,
} from '../../src';
import { testChartLayoutContext } from '../util/context';

function assertActiveShapeInteractions(container: HTMLElement, selectors: string) {
  const sectorNodes = container.querySelectorAll('.recharts-pie-sector');
  expect(sectorNodes.length).toBeGreaterThanOrEqual(2);
  const [sector1, sector2] = Array.from(sectorNodes);

  fireEvent.mouseOver(sector1, { pageX: 200, pageY: 200 });
  expect(container.querySelectorAll(selectors)).toHaveLength(1);

  fireEvent.mouseOver(sector2, { pageX: 200, pageY: 200 });
  expect(container.querySelectorAll(selectors)).toHaveLength(1);

  fireEvent.mouseOut(sector2);
  expect(container.querySelectorAll(selectors)).toHaveLength(0);
}

describe('<PieChart />', () => {
  const data = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 300, v: 100 },
    { name: 'Group C', value: 200, v: 200 },
    { name: 'Group D', value: 200, v: 20 },
    { name: 'Group E', value: 278, v: 40 },
    { name: 'Group F', value: 189, v: 60 },
  ];

  test('Renders 1 sector with animation, simple PieChart', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive
          data={[data[0]]}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(1);
  });

  test('Renders 6 sectors circles in simple PieChart', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive
          data={data}
          animationDuration={0}
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

  test('Renders 6 sectors circles in simple PieChart with animation', () => {
    const { container } = render(
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
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

    assertActiveShapeInteractions(container, '.recharts-active-shape');
    assertActiveShapeInteractions(container, '.customized-active-shape');
  });

  test('With Tooltip render customized active sector when activeShape is set to be a function', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          activeShape={(props: SectorProps) => <Sector {...props} fill="#ff7300" className="customized-active-shape" />}
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

    assertActiveShapeInteractions(container, '.recharts-active-shape');
    assertActiveShapeInteractions(container, '.customized-active-shape');
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

    assertActiveShapeInteractions(container, '.recharts-active-shape');
    assertActiveShapeInteractions(container, '.customized-active-shape');
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

    assertActiveShapeInteractions(container, '.recharts-active-shape');
  });

  test('Renders 6 sectors circles when add Cell to specified props of each slice', () => {
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

  const getPieChart = (eventProps: { onClick?: Mock; onMouseEnter?: Mock; onMouseLeave?: Mock }) => {
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
    const onClick = vi.fn();

    const { container } = render(getPieChart({ onClick }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.click(sector);
    expect(onClick).toBeCalled();
  });

  test('onMouseEnter Sector should invoke onMouseEnter callback', async () => {
    const onMouseEnter = vi.fn();

    const { container } = render(getPieChart({ onMouseEnter }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.hover(sector);
    expect(onMouseEnter).toBeCalled();
  });

  test('onMouseLeave Sector should invoke onMouseLeave callback', async () => {
    const onMouseLeave = vi.fn();

    const { container } = render(getPieChart({ onMouseLeave }));
    const sectors = container.querySelectorAll('.recharts-sector');
    const sector = sectors[2];

    await userEvent.unhover(sector);
    expect(onMouseLeave).toBeCalled();
  });

  describe('PieChart layout context', () => {
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <PieChart width={100} height={50} barSize={20}>
            {props.children}
          </PieChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );

    it(
      'should set width and height in context',
      testChartLayoutContext(
        props => (
          <PieChart width={100} height={50} barSize={20}>
            {props.children}
          </PieChart>
        ),
        ({ width, height }) => {
          expect(width).toBe(100);
          expect(height).toBe(50);
        },
      ),
    );

    it(
      'should provide axisMaps: undefined even if axes are specified',
      testChartLayoutContext(
        props => (
          <PieChart width={100} height={50} barSize={20}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            {props.children}
          </PieChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ x: 5, y: 5, width: 90, height: 40 });
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );
  });

  test('classNames can be given to label and labelLine.', () => {
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
          label={{ className: 'label-custom-className' }}
          labelLine={{ className: 'label-line-custom-className' }}
        />
        <Tooltip />
      </PieChart>,
    );

    expect(container.querySelectorAll('.label-custom-className')).toHaveLength(6);
    expect(container.querySelectorAll('.label-line-custom-className')).toHaveLength(6);
  });
});
