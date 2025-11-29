import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { describe, test, it, expect, vi, beforeEach } from 'vitest';
import { Cell, Customized, Legend, RadialBar, RadialBarChart, Sector, SectorProps, Tooltip } from '../../src';
import { expectRadialBarLabels, expectRadialBars } from '../helper/expectRadialBars';
import { selectRootBarSize } from '../../src/state/selectors/rootPropsSelectors';
import { useAppSelector } from '../../src/state/hooks';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { useClipPathId } from '../../src/container/ClipPathProvider';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

function assertActiveShapeInteractions(container: HTMLElement) {
  const sectorNodes = container.querySelectorAll('.recharts-sector');
  expect(sectorNodes.length).toBeGreaterThanOrEqual(2);
  const [sector1, sector2] = Array.from(sectorNodes);

  fireEvent.mouseOver(sector1, { clientX: 200, clientY: 200 });
  act(() => {
    vi.runOnlyPendingTimers();
  });

  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(1);

  fireEvent.mouseOver(sector2, { clientX: 200, clientY: 200 });
  act(() => {
    vi.runOnlyPendingTimers();
  });

  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(1);

  fireEvent.mouseOut(sector2);
  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(0);
}

describe('<RadialBarChart />', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
    { name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658' },
  ];

  test('Renders sectors in simple RadialBarChart', () => {
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
        <RadialBar label={{ position: 'insideStart' }} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );

    expectRadialBars(container, [
      {
        d: 'M 183,150 A 33,33,0, 1,0, 183,150.0006 L 173,150.0004 A 23,23,0, 1,1, 173,150 Z',
      },
      {
        d: 'M 200.1429,150 A 50.1429,50.1429,0, 1,0, 178.9893,190.9137 L 173.2079,182.7543 A 40.1429,40.1429,0, 1,1, 190.1429,150 Z',
      },
      {
        d: 'M 217.2857,150 A 67.2857,67.2857,0, 0,0, 82.717,149.3955 L 92.7166,149.4853 A 57.2857,57.2857,0, 0,1, 207.2857,150 Z',
      },
      {
        d: 'M 234.4286,150 A 84.4286,84.4286,0, 0,0, 144.0629,65.7804 L 144.7661,75.7557 A 74.4286,74.4286,0, 0,1, 224.4286,150 Z',
      },
      {
        d: 'M 251.5714,150 A 101.5714,101.5714,0, 0,0, 134.5966,49.6033 L 136.1131,59.4877 A 91.5714,91.5714,0, 0,1, 241.5714,150 Z',
      },
      {
        d: 'M 268.7143,150 A 118.7143,118.7143,0, 0,0, 252.7206,90.489 L 244.0678,95.5019 A 108.7143,108.7143,0, 0,1, 258.7143,150 Z',
      },
      {
        d: 'M 285.8571,150 A 135.8571,135.8571,0, 0,0, 182.1733,18.0074 L 179.8051,27.723 A 125.8571,125.8571,0, 0,1, 275.8571,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M177.89345154656888,147.55963920306556 A28,28,0,1,0, 177.93179340727508,148.0468187351645',
        textContent: '31.47',
      },
      {
        d: 'M194.97107494242738,146.06554075596287 A45.14285714285714,45.14285714285714,0,1,0, 195.03289141172922,146.8509934709795',
        textContent: '26.69',
      },
      {
        d: 'M212.04869833828587,144.57144230886016 A62.28571428571428,62.28571428571428,0,1,0, 212.13398941618334,145.65516820679449',
        textContent: '15.69',
      },
      {
        d: 'M229.12632173414437,143.07734386175744 A79.42857142857143,79.42857142857143,0,1,0, 229.23508742063746,144.45934294260948',
        textContent: '8.22',
      },
      {
        d: 'M246.20394513000286,141.58324541465473 A96.57142857142857,96.57142857142857,0,1,0, 246.3361854250916,143.26351767842448',
        textContent: '8.63',
      },
      {
        d: 'M263.28156852586136,140.089146967552 A113.71428571428571,113.71428571428571,0,1,0, 263.43728342954574,142.06769241423947',
        textContent: '2.63',
      },
      {
        d: 'M280.35919192171986,138.5950485204493 A130.85714285714286,130.85714285714286,0,1,0, 280.53838143399986,140.87186715005447',
        textContent: '6.67',
      },
    ]);
  });

  test('Renders bigger sectors with larger barSize', () => {
    const { container } = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={20}
        data={data}
      >
        <RadialBar label={{ position: 'insideStart' }} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );

    expectRadialBars(container, [
      {
        d: 'M 185.4286,150 A 35.4286,35.4286,0, 1,0, 185.4286,150.0006 L 170,150.0003 A 20,20,0, 1,1, 170,150 Z',
      },
      {
        d: 'M 202.5714,150 A 52.5714,52.5714,0, 1,0, 180.3933,192.8953 L 171.4735,180.3064 A 37.1429,37.1429,0, 1,1, 187.1429,150 Z',
      },
      {
        d: 'M 219.7143,150 A 69.7143,69.7143,0, 0,0, 80.2885,149.3737 L 95.7165,149.5123 A 54.2857,54.2857,0, 0,1, 204.2857,150 Z',
      },
      {
        d: 'M 236.8571,150 A 86.8571,86.8571,0, 0,0, 143.8921,63.3579 L 144.9771,78.7483 A 71.4286,71.4286,0, 0,1, 221.4286,150 Z',
      },
      {
        d: 'M 254,150 A 104,104,0, 0,0, 134.2283,47.2028 L 136.5681,62.453 A 88.5714,88.5714,0, 0,1, 238.5714,150 Z',
      },
      {
        d: 'M 271.1429,150 A 121.1429,121.1429,0, 0,0, 254.822,89.2715 L 241.472,97.0058 A 105.7143,105.7143,0, 0,1, 255.7143,150 Z',
      },
      {
        d: 'M 288.2857,150 A 138.2857,138.2857,0, 0,0, 182.7484,15.6479 L 179.0947,30.6376 A 122.8571,122.8571,0, 0,1, 272.8571,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M177.60882448997123,147.58454084385062 A27.714285714285715,27.714285714285715,0,1,0, 177.64677510720085,148.06674915623424',
        textContent: '31.47',
      },
      {
        d: 'M194.68644788582972,146.0904423967479 A44.857142857142854,44.857142857142854,0,1,0, 194.74787311165497,146.87092389204923',
        textContent: '26.69',
      },
      {
        d: 'M211.76407128168822,144.5963439496452 A62,62,0,1,0, 211.8489711161091,145.67509862786423',
        textContent: '15.69',
      },
      {
        d: 'M228.8416946775467,143.10224550254247 A79.14285714285714,79.14285714285714,0,1,0, 228.95006912056323,144.47927336367923',
        textContent: '8.22',
      },
      {
        d: 'M245.9193180734052,141.60814705543976 A96.28571428571428,96.28571428571428,0,1,0, 246.05116712501734,143.28344809949422',
        textContent: '8.63',
      },
      {
        d: 'M262.9969414692637,140.11404860833707 A113.42857142857142,113.42857142857142,0,1,0, 263.1522651294715,142.08762283530925',
        textContent: '2.63',
      },
      {
        d: 'M280.07456486512217,138.61995016123436 A130.57142857142856,130.57142857142856,0,1,0, 280.25336313392563,140.89179757112424',
        textContent: '6.67',
      },
    ]);
  });

  // This is interesting because I can see it broken in storybook - but it works in jsdom. Interesting.
  test('re-renders when barSize prop changes', () => {
    const barSizeSpy = vi.fn();
    const Comp = (): null => {
      barSizeSpy(useAppSelector(state => selectRootBarSize(state)));
      return null;
    };
    const { container, rerender } = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={20}
        data={data}
      >
        <RadialBar label={{ position: 'insideStart' }} background dataKey="uv" isAnimationActive={false} />
        <Customized component={<Comp />} />
      </RadialBarChart>,
    );
    expect(barSizeSpy).toHaveBeenLastCalledWith(20);
    expect(barSizeSpy).toHaveBeenCalledTimes(1);

    expectRadialBars(container, [
      {
        d: 'M 185.4286,150 A 35.4286,35.4286,0, 1,0, 185.4286,150.0006 L 170,150.0003 A 20,20,0, 1,1, 170,150 Z',
      },
      {
        d: 'M 202.5714,150 A 52.5714,52.5714,0, 1,0, 180.3933,192.8953 L 171.4735,180.3064 A 37.1429,37.1429,0, 1,1, 187.1429,150 Z',
      },
      {
        d: 'M 219.7143,150 A 69.7143,69.7143,0, 0,0, 80.2885,149.3737 L 95.7165,149.5123 A 54.2857,54.2857,0, 0,1, 204.2857,150 Z',
      },
      {
        d: 'M 236.8571,150 A 86.8571,86.8571,0, 0,0, 143.8921,63.3579 L 144.9771,78.7483 A 71.4286,71.4286,0, 0,1, 221.4286,150 Z',
      },
      {
        d: 'M 254,150 A 104,104,0, 0,0, 134.2283,47.2028 L 136.5681,62.453 A 88.5714,88.5714,0, 0,1, 238.5714,150 Z',
      },
      {
        d: 'M 271.1429,150 A 121.1429,121.1429,0, 0,0, 254.822,89.2715 L 241.472,97.0058 A 105.7143,105.7143,0, 0,1, 255.7143,150 Z',
      },
      {
        d: 'M 288.2857,150 A 138.2857,138.2857,0, 0,0, 182.7484,15.6479 L 179.0947,30.6376 A 122.8571,122.8571,0, 0,1, 272.8571,150 Z',
      },
    ]);

    rerender(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={3}
        data={data}
      >
        <RadialBar label={{ position: 'insideStart' }} background dataKey="uv" isAnimationActive={false} />
        <Customized component={<Comp />} />
      </RadialBarChart>,
    );
    expect(barSizeSpy).toHaveBeenLastCalledWith(3);
    expect(barSizeSpy).toHaveBeenCalledTimes(3);

    expectRadialBars(container, [
      {
        d: 'M 180,150 A 30,30,0, 1,0, 180,150.0005 L 177,150.0005 A 27,27,0, 1,1, 177,150 Z',
      },
      {
        d: 'M 197.1429,150 A 47.1429,47.1429,0, 1,0, 177.2549,188.4659 L 175.5205,186.018 A 44.1429,44.1429,0, 1,1, 194.1429,150 Z',
      },
      {
        d: 'M 214.2857,150 A 64.2857,64.2857,0, 0,0, 85.7169,149.4224 L 88.7168,149.4494 A 61.2857,61.2857,0, 0,1, 211.2857,150 Z',
      },
      {
        d: 'M 231.4286,150 A 81.4286,81.4286,0, 0,0, 144.2739,68.773 L 144.4848,71.7656 A 78.4286,78.4286,0, 0,1, 228.4286,150 Z',
      },
      {
        d: 'M 248.5714,150 A 98.5714,98.5714,0, 0,0, 135.0516,52.5686 L 135.5065,55.5339 A 95.5714,95.5714,0, 0,1, 245.5714,150 Z',
      },
      {
        d: 'M 265.7143,150 A 115.7143,115.7143,0, 0,0, 250.1248,91.9929 L 247.5289,93.4968 A 112.7143,112.7143,0, 0,1, 262.7143,150 Z',
      },
      {
        d: 'M 282.8571,150 A 132.8571,132.8571,0, 0,0, 181.4628,20.9221 L 180.7524,23.8367 A 129.8571,129.8571,0, 0,1, 279.8571,150 Z',
      },
    ]);
  });

  test('Adds className when set on radial bar and radial bar background', () => {
    const label = { orientation: 'outer' };
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
        <RadialBar
          className="test-radial-bar"
          label={label}
          background={{ className: 'test-custom-background' }}
          dataKey="uv"
          isAnimationActive={false}
        />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.test-radial-bar')).toHaveLength(1);
    expect(container.querySelectorAll('.test-custom-background')).toHaveLength(data.length);
  });

  test("Don't renders any sectors when no RadialBar is added", () => {
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
      />,
    );

    expectRadialBars(container, []);
  });

  test("Don't renders any sectors when width is 0", () => {
    const { container } = render(
      <RadialBarChart
        width={0}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(0);
  });

  test("Don't renders any sectors when height is 0", () => {
    const { container } = render(
      <RadialBarChart
        width={10}
        height={0}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(0);
  });

  test('Renders sectors when barSize is not specified', () => {
    const label = { orientation: 'outer' };
    const { container } = render(
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} data={data}>
        <RadialBar label={label} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(7);
  });

  test('Renders 7 sectors in simple RadialBarChart', () => {
    const label = { orientation: 'outer' };
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
        <RadialBar label={label} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(7);
  });

  test('Renders 7 customized shape when shape is set to be a react element', () => {
    const label = { orientation: 'outer' };
    const Shape = (props: any) => <Sector {...props} className="customized-shape" />;
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
        <RadialBar shape={<Shape />} label={label} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.customized-shape')).toHaveLength(7);
  });

  test('Renders 7 customized shape when shape is set to be a function', () => {
    const label = { orientation: 'outer' };
    const renderShape = (props: any) => <Sector {...props} className="customized-shape" />;
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
        <RadialBar shape={renderShape} label={label} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.customized-shape')).toHaveLength(7);
  });

  test('Renders 7 legend item when add a Legend element', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} />
        <Legend />
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.recharts-legend-wrapper')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(7);
  });

  test('Renders tooltip when add a Tooltip element', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} />
        <Tooltip />
      </RadialBarChart>,
    );

    expect(container.querySelectorAll('.recharts-tooltip-wrapper')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-default-tooltip')).toHaveLength(1);
  });

  test('Renders Cell children component className prop', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false}>
          {data.map(cell => (
            <Cell key={`cell-${cell.name}`} className="unit-test-class" />
          ))}
        </RadialBar>
      </RadialBarChart>,
    );
    expect(container.querySelectorAll('.unit-test-class')).toHaveLength(data.length);
  });

  test('Renders customized active shape when activeShape set to be a function', () => {
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
        <RadialBar
          background
          dataKey="uv"
          isAnimationActive={false}
          activeShape={(props: SectorProps) => <Sector {...props} fill="red" />}
        />
        <Tooltip />
      </RadialBarChart>,
    );

    assertActiveShapeInteractions(container);
  });

  test('Renders customized active bar when activeBar set to be a ReactElement', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} activeShape={<Sector fill="red" />} />
        <Tooltip />
      </RadialBarChart>,
    );

    assertActiveShapeInteractions(container);
  });

  test('Renders customized active bar when activeBar is set to be a truthy boolean', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} activeShape />
        <Tooltip />
      </RadialBarChart>,
    );

    assertActiveShapeInteractions(container);
  });

  test('Does not render customized active bar when activeBar set to be a falsy boolean', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} activeShape={false} />
        <Tooltip />
      </RadialBarChart>,
    );

    const sectorNodes = container.querySelectorAll('.recharts-sector');
    const [sector] = Array.from(sectorNodes);
    fireEvent.mouseOver(sector, { pageX: 200, pageY: 200 });

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(0);
  });

  test('Renders customized active bar when activeBar set to be an object', () => {
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
        <RadialBar background dataKey="uv" isAnimationActive={false} activeShape={{ fill: 'red' }} />
        <Tooltip />
      </RadialBarChart>,
    );

    assertActiveShapeInteractions(container);
  });

  describe('RadialBarChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };

      render(
        <RadialBarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadialBarChart>,
      );

      expectLastCalledWith(spy, { height: 40, width: 90, x: 5, y: 5 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };

      render(
        <RadialBarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadialBarChart>,
      );

      expectLastCalledWith(spy, expect.stringMatching(/recharts\d+-clip/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };

      render(
        <RadialBarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadialBarChart>,
      );

      expectLastCalledWith(spy, 100);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };

      render(
        <RadialBarChart width={100} height={50} barSize={20}>
          <Comp />
        </RadialBarChart>,
      );

      expectLastCalledWith(spy, 50);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('renders background in the exact same position as foreground', () => {
      const preparedData = [{ value: 42, fill: '#241084' }];
      const emptyBackgroundColor = '#D8BDF3';

      const { container } = render(
        <RadialBarChart data={preparedData} height={280} width={340} cx="47%" startAngle={180} endAngle={0}>
          <RadialBar
            background={{
              fill: emptyBackgroundColor,
            }}
            dataKey="value"
            isAnimationActive={false}
          />
        </RadialBarChart>,
      );
      const background = container.querySelector('.recharts-radial-bar-background-sector');
      expect(background).toBeInTheDocument();
      const foreground = container.querySelector('.recharts-radial-bar-sector');
      expect(foreground).not.toBeNull();
      expect(foreground).toBeInTheDocument();
      expect(foreground!.getAttribute('d')).toEqual(background!.getAttribute('d'));
    });
  });
});
