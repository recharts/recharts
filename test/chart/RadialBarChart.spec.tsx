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
        d: 'M 184,150 A 34,34,0, 1,0, 184,150.0006 L 174,150.0004 A 24,24,0, 1,1, 174,150 Z',
      },
      {
        d: 'M 201.1429,150 A 51.1429,51.1429,0, 1,0, 179.5674,191.7296 L 173.7861,183.5702 A 41.1429,41.1429,0, 1,1, 191.1429,150 Z',
      },
      {
        d: 'M 218.2857,150 A 68.2857,68.2857,0, 0,0, 81.717,149.3865 L 91.7166,149.4763 A 58.2857,58.2857,0, 0,1, 208.2857,150 Z',
      },
      {
        d: 'M 235.4286,150 A 85.4286,85.4286,0, 0,0, 143.9926,64.7829 L 144.6958,74.7582 A 75.4286,75.4286,0, 0,1, 225.4286,150 Z',
      },
      {
        d: 'M 252.5714,150 A 102.5714,102.5714,0, 0,0, 134.445,48.6149 L 135.9615,58.4992 A 92.5714,92.5714,0, 0,1, 242.5714,150 Z',
      },
      {
        d: 'M 269.7143,150 A 119.7143,119.7143,0, 0,0, 253.5859,89.9877 L 244.9331,95.0006 A 109.7143,109.7143,0, 0,1, 259.7143,150 Z',
      },
      {
        d: 'M 286.8571,150 A 136.8571,136.8571,0, 0,0, 182.4101,17.0359 L 180.0419,26.7514 A 126.8571,126.8571,0, 0,1, 276.8571,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M178.8896462446606,147.4724834603179 A29,29,0,1,0, 178.9293574575349,147.97706226142037',
        textContent: '31.47',
      },
      {
        d: 'M195.9672696405191,145.9783850132152 A46.14285714285714,46.14285714285714,0,1,0, 196.03045546198905,146.78123699723537',
        textContent: '26.69',
      },
      {
        d: 'M213.0448930363776,144.4842865661125 A63.28571428571428,63.28571428571428,0,1,0, 213.13155346644317,145.58541173305036',
        textContent: '15.69',
      },
      {
        d: 'M230.12251643223613,142.9901881190098 A80.42857142857143,80.42857142857143,0,1,0, 230.23265147089728,144.38958646886536',
        textContent: '8.22',
      },
      {
        d: 'M247.2001398280946,141.49608967190707 A97.57142857142857,97.57142857142857,0,1,0, 247.33374947535142,143.19376120468036',
        textContent: '8.63',
      },
      {
        d: 'M264.2777632239531,140.00199122480436 A114.71428571428571,114.71428571428571,0,1,0, 264.43484747980557,141.99793594049535',
        textContent: '2.63',
      },
      {
        d: 'M281.3553866198116,138.50789277770164 A131.85714285714286,131.85714285714286,0,1,0, 281.5359454842597,140.80211067631035',
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
        d: 'M 186.4286,150 A 36.4286,36.4286,0, 1,0, 186.4286,150.0006 L 171,150.0004 A 21,21,0, 1,1, 171,150 Z',
      },
      {
        d: 'M 203.5714,150 A 53.5714,53.5714,0, 1,0, 180.9714,193.7112 L 172.0517,181.1224 A 38.1429,38.1429,0, 1,1, 188.1429,150 Z',
      },
      {
        d: 'M 220.7143,150 A 70.7143,70.7143,0, 0,0, 79.2886,149.3647 L 94.7165,149.5033 A 55.2857,55.2857,0, 0,1, 205.2857,150 Z',
      },
      {
        d: 'M 237.8571,150 A 87.8571,87.8571,0, 0,0, 143.8218,62.3604 L 144.9068,77.7507 A 72.4286,72.4286,0, 0,1, 222.4286,150 Z',
      },
      {
        d: 'M 255,150 A 105,105,0, 0,0, 134.0767,46.2144 L 136.4164,61.4645 A 89.5714,89.5714,0, 0,1, 239.5714,150 Z',
      },
      {
        d: 'M 272.1429,150 A 122.1429,122.1429,0, 0,0, 255.6872,88.7702 L 242.3373,96.5045 A 106.7143,106.7143,0, 0,1, 256.7143,150 Z',
      },
      {
        d: 'M 289.2857,150 A 139.2857,139.2857,0, 0,0, 182.9852,14.6764 L 179.3315,29.6661 A 123.8571,123.8571,0, 0,1, 273.8571,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M178.60501918806298,147.49738510110296 A28.714285714285715,28.714285714285715,0,1,0, 178.64433915746068,147.99699268249012',
        textContent: '31.47',
      },
      {
        d: 'M195.68264258392148,146.00328665400025 A45.857142857142854,45.857142857142854,0,1,0, 195.7454371619148,146.8011674183051',
        textContent: '26.69',
      },
      {
        d: 'M212.76026597977997,144.50918820689753 A63,63,0,1,0, 212.84653516636894,145.6053421541201',
        textContent: '15.69',
      },
      {
        d: 'M229.83788937563844,143.01508975979482 A80.14285714285714,80.14285714285714,0,1,0, 229.94763317082305,144.4095168899351',
        textContent: '8.22',
      },
      {
        d: 'M246.91551277149694,141.5209913126921 A97.28571428571428,97.28571428571428,0,1,0, 247.04873117527717,143.2136916257501',
        textContent: '8.63',
      },
      {
        d: 'M263.99313616735543,140.0268928655894 A114.42857142857142,114.42857142857142,0,1,0, 264.14982917973134,142.0178663615651',
        textContent: '2.63',
      },
      {
        d: 'M281.0707595632139,138.5327944184867 A131.57142857142856,131.57142857142856,0,1,0, 281.25092718418546,140.8220410973801',
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
        d: 'M 186.4286,150 A 36.4286,36.4286,0, 1,0, 186.4286,150.0006 L 171,150.0004 A 21,21,0, 1,1, 171,150 Z',
      },
      {
        d: 'M 203.5714,150 A 53.5714,53.5714,0, 1,0, 180.9714,193.7112 L 172.0517,181.1224 A 38.1429,38.1429,0, 1,1, 188.1429,150 Z',
      },
      {
        d: 'M 220.7143,150 A 70.7143,70.7143,0, 0,0, 79.2886,149.3647 L 94.7165,149.5033 A 55.2857,55.2857,0, 0,1, 205.2857,150 Z',
      },
      {
        d: 'M 237.8571,150 A 87.8571,87.8571,0, 0,0, 143.8218,62.3604 L 144.9068,77.7507 A 72.4286,72.4286,0, 0,1, 222.4286,150 Z',
      },
      {
        d: 'M 255,150 A 105,105,0, 0,0, 134.0767,46.2144 L 136.4164,61.4645 A 89.5714,89.5714,0, 0,1, 239.5714,150 Z',
      },
      {
        d: 'M 272.1429,150 A 122.1429,122.1429,0, 0,0, 255.6872,88.7702 L 242.3373,96.5045 A 106.7143,106.7143,0, 0,1, 256.7143,150 Z',
      },
      {
        d: 'M 289.2857,150 A 139.2857,139.2857,0, 0,0, 182.9852,14.6764 L 179.3315,29.6661 A 123.8571,123.8571,0, 0,1, 273.8571,150 Z',
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
