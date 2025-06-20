import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, Mock, vi } from 'vitest';
import { Cell, Legend, Pie, PieChart, Sector, SectorProps, Tooltip } from '../../src';
import { useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

import { useClipPathId } from '../../src/container/ClipPathProvider';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

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

function selectPieSectors(container: HTMLElement) {
  return container.querySelectorAll('.recharts-pie-sector');
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

    expect(selectPieSectors(container)).toHaveLength(data.length);
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
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };

      render(
        <PieChart width={100} height={50} barSize={20}>
          <Comp />
        </PieChart>,
      );

      expect(spy).toBeCalledWith({ height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };

      render(
        <PieChart width={100} height={50} barSize={20}>
          <Comp />
        </PieChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
    });

    it('should provide chart width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };

      render(
        <PieChart width={100} height={50} barSize={20}>
          <Comp />
        </PieChart>,
      );

      expect(spy).toBeCalledWith(100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide chart height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };

      render(
        <PieChart width={100} height={50} barSize={20}>
          <Comp />
        </PieChart>,
      );

      expect(spy).toBeCalledWith(100);
      expect(spy).toHaveBeenCalledTimes(1);
    });
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

  describe('PieChart sector radius rendering', () => {
    const assertSectorRadius = (element: Element, radius: number) => {
      // Checks if the 'd' attribute has an arc with the specified radius.
      const dAttribute = element.getAttribute('d');
      const arcRadius = new RegExp(`A ${radius},${radius}`);
      expect(dAttribute).toMatch(arcRadius);
    };

    it('renders sectors with a constant radius', () => {
      const outerRadius = 80;
      const { container } = render(
        <PieChart width={800} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={[
              { name: 'Group A', value: 400 },
              { name: 'Group B', value: 300 },
            ]}
            cx={200}
            cy={200}
            outerRadius={outerRadius}
            fill="#ff7300"
          />
        </PieChart>,
      );

      const elementA = container.querySelector('path[name="Group A"]');
      assertSectorRadius(elementA, outerRadius);

      const elementB = container.querySelector('path[name="Group B"]');
      assertSectorRadius(elementB, outerRadius);
    });

    it('renders sectors with radius based on outerRadius function', () => {
      const { container } = render(
        <PieChart width={800} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={[
              { name: 'Group A', value: 400 },
              { name: 'Group B', value: 300 },
            ]}
            cx={200}
            cy={200}
            outerRadius={(element: any) => {
              return element.value / 10;
            }}
            fill="#ff7300"
          />
        </PieChart>,
      );

      const elementA = container.querySelector('path[name="Group A"]');
      assertSectorRadius(elementA, 40);

      const elementB = container.querySelector('path[name="Group B"]');
      assertSectorRadius(elementB, 30);
    });
  });

  describe('without dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={100} height={100}>
        <Pie
          data={[
            { name: 'A', value: 100 },
            { name: 'B', value: 200 },
          ]}
          cx={50}
          cy={50}
          outerRadius={40}
          isAnimationActive={false}
        />
        {children}
      </PieChart>
    ));

    it('should default to dataKey = value', () => {
      const { container } = renderTestCase();
      expect(selectPieSectors(container)).toHaveLength(2);
    });
  });
});
