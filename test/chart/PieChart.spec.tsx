import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, Mock, vi } from 'vitest';
import { Cell, Legend, Pie, PieChart, Sector, SectorProps, Tooltip, useChartHeight } from '../../src';
import { useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { useClipPathId } from '../../src/container/ClipPathProvider';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { expectPieSectorAngles, expectPieSectors, selectPieSectors } from '../helper/expectPieSectors';
import { expectLegendLabels } from '../helper/expectLegendLabels';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { selectDisplayedData, selectPieLegend } from '../../src/state/selectors/pieSelectors';
import { selectPieLegend } from '../../src/state/selectors/pieSelectors';
import { ResolvedPieSettings, selectDisplayedData, selectPieLegend } from '../../src/state/selectors/pieSelectors';

describe('<PieChart />', () => {
  const data = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 300, v: 100 },
    { name: 'Group C', value: 200, v: 200 },
    { name: 'Group D', value: 200, v: 20 },
    { name: 'Group E', value: 278, v: 40 },
    { name: 'Group F', value: 189, v: 60 },
  ];

  test('Renders 1 sector in simple PieChart', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={[data[0]]}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expectPieSectors(container, [{ d: 'M 285,205 A 80,80,0, 1,0, 284.9999999878153,205.00139626340152 L 205,205 Z' }]);
  });

  test('render 4 equal sectors in PieChart with 4 data points', () => {
    const crossData = [
      { name: 'Group A', value: 100 },
      { name: 'Group B', value: 100 },
      { name: 'Group C', value: 100 },
      { name: 'Group D', value: 100 },
    ];

    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={crossData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expectPieSectorAngles(container, [
      { startAngle: -0, endAngle: 90 },
      { startAngle: 90, endAngle: 180 },
      { startAngle: 180, endAngle: 270 },
      { startAngle: 270, endAngle: 360 },
    ]);
  });

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

    expectPieSectors(container, [
      { d: 'M 285,205 A 80,80,0, 0,0, 202.35408677088503,125.0437673274685 L 205,205 Z' },
      { d: 'M 202.35408677088503,125.0437673274685 A 80,80,0, 0,0, 129.44215754650043,178.7128844531748 L 205,205 Z' },
      { d: 'M 129.44215754650043,178.7128844531748 A 80,80,0, 0,0, 133.5708108622496,241.02597589411673 L 205,205 Z' },
      { d: 'M 133.5708108622496,241.02597589411673 A 80,80,0, 0,0, 181.22625959949275,281.3859232278388 L 205,205 Z' },
      { d: 'M 181.22625959949275,281.3859232278388 A 80,80,0, 0,0, 263.1062563242316,259.9878438928341 L 205,205 Z' },
      { d: 'M 263.1062563242316,259.9878438928341 A 80,80,0, 0,0, 285,205.00000000000003 L 205,205 Z' },
    ]);
  });

  describe('active shape interactions', () => {
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
            activeShape={(props: SectorProps) => (
              <Sector {...props} fill="#ff7300" className="customized-active-shape" />
            )}
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

    expectPieSectors(container, [
      { d: 'M 285,205 A 80,80,0, 0,0, 202.35408677088503,125.0437673274685 L 205,205 Z' },
      { d: 'M 202.35408677088503,125.0437673274685 A 80,80,0, 0,0, 129.44215754650043,178.7128844531748 L 205,205 Z' },
      { d: 'M 129.44215754650043,178.7128844531748 A 80,80,0, 0,0, 133.5708108622496,241.02597589411673 L 205,205 Z' },
      { d: 'M 133.5708108622496,241.02597589411673 A 80,80,0, 0,0, 181.22625959949275,281.3859232278388 L 205,205 Z' },
      { d: 'M 181.22625959949275,281.3859232278388 A 80,80,0, 0,0, 263.1062563242316,259.9878438928341 L 205,205 Z' },
      { d: 'M 263.1062563242316,259.9878438928341 A 80,80,0, 0,0, 285,205.00000000000003 L 205,205 Z' },
    ]);
  });

  describe('when all values are zero', () => {
    const emptyData = [
      { name: 'Group A', value: 0 },
      { name: 'Group B', value: 0 },
      { name: 'Group C', value: 0 },
      { name: 'Group D', value: 0 },
      { name: 'Group E', value: 0 },
      { name: 'Group F', value: 0 },
    ];
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          data={emptyData}
          isAnimationActive={false}
          cx={200}
          cy={200}
          outerRadius={80}
          id="empty-pie"
        />
        <Legend />
        {children}
      </PieChart>
    ));

    test('selectDisplayedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'empty-pie', undefined));
      expectLastCalledWith(spy, emptyData);
    });

    test('selectPieLegend', () => {
      const { spy } = renderTestCase(state => selectPieLegend(state, 'empty-pie', undefined));
      expectLastCalledWith(spy, [
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group A',
            value: 0,
          },
          type: 'rect',
          value: 'Group A',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group B',
            value: 0,
          },
          type: 'rect',
          value: 'Group B',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group C',
            value: 0,
          },
          type: 'rect',
          value: 'Group C',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group D',
            value: 0,
          },
          type: 'rect',
          value: 'Group D',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group E',
            value: 0,
          },
          type: 'rect',
          value: 'Group E',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group F',
            value: 0,
          },
          type: 'rect',
          value: 'Group F',
        },
      ]);
    });

    test('Renders legend when all the values are 0', () => {
      const { container } = renderTestCase();
      expectLegendLabels(container, [
        { fill: '#808080', stroke: undefined, textContent: 'Group A' },
        { fill: '#808080', stroke: undefined, textContent: 'Group B' },
        { fill: '#808080', stroke: undefined, textContent: 'Group C' },
        { fill: '#808080', stroke: undefined, textContent: 'Group D' },
        { fill: '#808080', stroke: undefined, textContent: 'Group E' },
        { fill: '#808080', stroke: undefined, textContent: 'Group F' },
      ]);
    });
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

    expectPieSectors(container, []);
  });

  describe('with Legend', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
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
          id="pie1"
        />
        <Legend />
        {children}
      </PieChart>
    ));

    test('selectDisplayedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'pie1', undefined));
      expectLastCalledWith(spy, data);
    });

    test('selectPieLegend', () => {
      const { spy } = renderTestCase(state => selectPieLegend(state, 'pie1', undefined));
      expectLastCalledWith(spy, [
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group A',
            v: 89,
            value: 400,
          },
          type: 'rect',
          value: 'Group A',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group B',
            v: 100,
            value: 300,
          },
          type: 'rect',
          value: 'Group B',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group C',
            v: 200,
            value: 200,
          },
          type: 'rect',
          value: 'Group C',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group D',
            v: 20,
            value: 200,
          },
          type: 'rect',
          value: 'Group D',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group E',
            v: 40,
            value: 278,
          },
          type: 'rect',
          value: 'Group E',
        },
        {
          color: '#ff7300',
          payload: {
            // @ts-expect-error extra properties not expected in the type
            name: 'Group F',
            v: 60,
            value: 189,
          },
          type: 'rect',
          value: 'Group F',
        },
      ]);
    });

    test('Renders 6 legend items', () => {
      const { container } = renderTestCase();

      expectLegendLabels(container, [
        { fill: '#ff7300', stroke: undefined, textContent: 'Group A' },
        { fill: '#ff7300', stroke: undefined, textContent: 'Group B' },
        { fill: '#ff7300', stroke: undefined, textContent: 'Group C' },
        { fill: '#ff7300', stroke: undefined, textContent: 'Group D' },
        { fill: '#ff7300', stroke: undefined, textContent: 'Group E' },
        { fill: '#ff7300', stroke: undefined, textContent: 'Group F' },
      ]);
    });
  });

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

  describe('mouse events', () => {
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

    test('click on Sector should invoke onClick callback', async () => {
      const onClick = vi.fn();

      const { container } = render(getPieChart({ onClick }));
      const sectors = container.querySelectorAll('.recharts-sector');
      const sector = sectors[2];

      expect(onClick).toHaveBeenCalledTimes(0);
      await userEvent.click(sector);
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenLastCalledWith(
        {
          activeCoordinate: {
            x: 165.08751071020006,
            y: 207.64446567223055,
          },
          activeDataKey: 'value',
          activeIndex: '2',
          activeLabel: 2,
          activeTooltipIndex: '2',
          isTooltipActive: true,
        },
        // second argument is the synthetic event from React
        expect.any(Object),
      );
    });

    test('onMouseEnter Sector should invoke onMouseEnter callback', async () => {
      const onMouseEnter = vi.fn();

      const { container } = render(getPieChart({ onMouseEnter }));
      const sectors = container.querySelectorAll('.recharts-sector');
      const sector = sectors[2];

      expect(onMouseEnter).toHaveBeenCalledTimes(0);
      await userEvent.hover(sector);
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expect(onMouseEnter).toHaveBeenLastCalledWith(
        {
          activeCoordinate: undefined,
          activeDataKey: undefined,
          activeIndex: null,
          activeLabel: undefined,
          activeTooltipIndex: null,
          isTooltipActive: false,
        },
        // second argument is the synthetic event from React
        expect.any(Object),
      );
    });

    test('onMouseLeave Sector should invoke onMouseLeave callback', async () => {
      const onMouseLeave = vi.fn();

      const { container } = render(getPieChart({ onMouseLeave }));
      const sectors = container.querySelectorAll('.recharts-sector');
      const sector = sectors[2];

      expect(onMouseLeave).toHaveBeenCalledTimes(0);
      await userEvent.unhover(sector);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
      expect(onMouseLeave).toHaveBeenLastCalledWith(
        {
          activeCoordinate: undefined,
          activeDataKey: undefined,
          activeIndex: null,
          activeLabel: undefined,
          activeTooltipIndex: null,
          isTooltipActive: false,
        },
        // second argument is the synthetic event from React
        expect.any(Object),
      );
    });
  });

  describe('PieChart layout context', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={100} height={50} barSize={20}>
        {children}
      </PieChart>
    ));

    it('should provide viewBox', () => {
      const { spy } = renderTestCase(useViewBox);

      expectLastCalledWith(spy, { height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const { spy } = renderTestCase(useClipPathId);

      expectLastCalledWith(spy, expect.stringMatching(/recharts\d+-clip/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide chart width', () => {
      const { spy } = renderTestCase(useChartWidth);

      expectLastCalledWith(spy, 100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide chart height', () => {
      const { spy } = renderTestCase(useChartHeight);

      expectLastCalledWith(spy, 50);
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
