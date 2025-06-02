import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, test, it, expect, vi, beforeEach } from 'vitest';
import { Cell, Customized, Legend, RadialBar, RadialBarChart, Sector, SectorProps, Tooltip } from '../../src';
import { expectRadialBarLabels, expectRadialBars } from '../helper/expectRadialBars';
import { selectRootBarSize } from '../../src/state/selectors/rootPropsSelectors';
import { useAppSelector } from '../../src/state/hooks';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';

import { useClipPathId } from '../../src/container/ClipPathProvider';

function assertActiveShapeInteractions(container: HTMLElement) {
  const sectorNodes = container.querySelectorAll('.recharts-sector');
  expect(sectorNodes.length).toBeGreaterThanOrEqual(2);
  const [sector1, sector2] = Array.from(sectorNodes);

  fireEvent.mouseOver(sector1, { clientX: 200, clientY: 200 });
  expect(container.querySelectorAll('.recharts-active-shape')).toHaveLength(1);

  fireEvent.mouseOver(sector2, { clientX: 200, clientY: 200 });
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
        d: 'M 183,150 A 33,33,0, 1,0, 182.99999999497382,150.00057595865312 L 172.9999999964969,150.00040142572794 A 23,23,0, 1,1, 173,150 Z',
      },
      {
        d: 'M 200.14285714285714,150 A 50.14285714285714,50.14285714285714,0, 1,0, 178.9892526390576,190.91368174434893 L 173.20792020391792,182.7542580346497 A 40.14285714285714,40.14285714285714,0, 1,1, 190.14285714285714,150 Z',
      },
      {
        d: 'M 217.28571428571428,150 A 67.28571428571428,67.28571428571428,0, 0,0, 82.71700141076008,149.39547723027684 L 92.71659780406537,149.48532137864333 A 57.285714285714285,57.285714285714285,0, 0,1, 207.28571428571428,150 Z',
      },
      {
        d: 'M 234.42857142857144,150 A 84.42857142857143,84.42857142857143,0, 0,0, 144.06291721036476,65.78043741850469 L 144.76612498578686,75.75568171749737 A 74.42857142857143,74.42857142857143,0, 0,1, 224.42857142857144,150 Z',
      },
      {
        d: 'M 251.57142857142856,150 A 101.57142857142857,101.57142857142857,0, 0,0, 134.5966326596631,49.603329852930585 L 136.11313858627855,59.48767149891492 A 91.57142857142857,91.57142857142857,0, 0,1, 241.57142857142856,150 Z',
      },
      {
        d: 'M 268.7142857142857,150 A 118.71428571428571,118.71428571428571,0, 0,0, 252.72058926199264,90.48897434657957 L 244.06783204377425,95.50193679632619 A 108.71428571428571,108.71428571428571,0, 0,1, 258.7142857142857,150 Z',
      },
      {
        d: 'M 285.8571428571429,150 A 135.85714285714286,135.85714285714286,0, 0,0, 182.17329892620566,18.00741649050451 L 179.80512760671627,27.72295891496792 A 125.85714285714286,125.85714285714286,0, 0,1, 275.8571428571429,150 Z',
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
        d: 'M 185.42857142857144,150 A 35.42857142857143,35.42857142857143,0, 1,0, 185.42857142317536,150.0006183452207 L 169.99999999695382,150.00034906585037 A 20,20,0, 1,1, 170,150 Z',
      },
      {
        d: 'M 202.57142857142856,150 A 52.57142857142857,52.57142857142857,0, 1,0, 180.39329051616295,192.89525607384732 L 171.473520473376,180.30643092173995 A 37.14285714285714,37.14285714285714,0, 1,1, 187.14285714285714,150 Z',
      },
      {
        d: 'M 219.71428571428572,150 A 69.71428571428571,69.71428571428571,0, 0,0, 80.28852800095737,149.3736579371021 L 95.71647672205697,149.5122746231533 A 54.285714285714285,54.285714285714285,0, 0,1, 204.28571428571428,150 Z',
      },
      {
        d: 'M 236.85714285714286,150 A 86.85714285714286,86.85714285714286,0, 0,0, 143.89213817919082,63.35787808874933 L 144.9770873184135,78.74825500719517 A 71.42857142857143,71.42857142857143,0, 0,1, 221.42857142857144,150 Z',
      },
      {
        d: 'M 254,150 A 104,104,0, 0,0, 134.22833836319936,47.202846881762966 L 136.56809036426318,62.45297399271021 A 88.57142857142857,88.57142857142857,0, 0,1, 238.57142857142856,150 Z',
      },
      {
        d: 'M 271.1428571428571,150 A 121.14285714285714,121.14285714285714,0, 0,0, 254.82197315784566,89.27154060878397 L 241.47200487830872,97.00582553125017 A 105.71428571428571,105.71428571428571,0, 0,1, 255.71428571428572,150 Z',
      },
      {
        d: 'M 288.2857142857143,150 A 138.28571428571428,138.28571428571428,0, 0,0, 182.74842624665308,15.64792761599199 L 179.09467621086947,30.637621642306925 A 122.85714285714286,122.85714285714286,0, 0,1, 272.8571428571429,150 Z',
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
        d: 'M 185.42857142857144,150 A 35.42857142857143,35.42857142857143,0, 1,0, 185.42857142317536,150.0006183452207 L 169.99999999695382,150.00034906585037 A 20,20,0, 1,1, 170,150 Z',
      },
      {
        d: 'M 202.57142857142856,150 A 52.57142857142857,52.57142857142857,0, 1,0, 180.39329051616295,192.89525607384732 L 171.473520473376,180.30643092173995 A 37.14285714285714,37.14285714285714,0, 1,1, 187.14285714285714,150 Z',
      },
      {
        d: 'M 219.71428571428572,150 A 69.71428571428571,69.71428571428571,0, 0,0, 80.28852800095737,149.3736579371021 L 95.71647672205697,149.5122746231533 A 54.285714285714285,54.285714285714285,0, 0,1, 204.28571428571428,150 Z',
      },
      {
        d: 'M 236.85714285714286,150 A 86.85714285714286,86.85714285714286,0, 0,0, 143.89213817919082,63.35787808874933 L 144.9770873184135,78.74825500719517 A 71.42857142857143,71.42857142857143,0, 0,1, 221.42857142857144,150 Z',
      },
      {
        d: 'M 254,150 A 104,104,0, 0,0, 134.22833836319936,47.202846881762966 L 136.56809036426318,62.45297399271021 A 88.57142857142857,88.57142857142857,0, 0,1, 238.57142857142856,150 Z',
      },
      {
        d: 'M 271.1428571428571,150 A 121.14285714285714,121.14285714285714,0, 0,0, 254.82197315784566,89.27154060878397 L 241.47200487830872,97.00582553125017 A 105.71428571428571,105.71428571428571,0, 0,1, 255.71428571428572,150 Z',
      },
      {
        d: 'M 288.2857142857143,150 A 138.28571428571428,138.28571428571428,0, 0,0, 182.74842624665308,15.64792761599199 L 179.09467621086947,30.637621642306925 A 122.85714285714286,122.85714285714286,0, 0,1, 272.8571428571429,150 Z',
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
    expect(barSizeSpy).toHaveBeenCalledTimes(4);

    expectRadialBars(container, [
      {
        d: 'M 180,150 A 30,30,0, 1,0, 179.99999999543073,150.00052359877557 L 176.99999999588766,150.000471238898 A 27,27,0, 1,1, 177,150 Z',
      },
      {
        d: 'M 197.14285714285714,150 A 47.14285714285714,47.14285714285714,0, 1,0, 177.25485290851572,188.46585463143916 L 175.5204531779738,186.0180275185294 A 44.14285714285714,44.14285714285714,0, 1,1, 194.14285714285714,150 Z',
      },
      {
        d: 'M 214.28571428571428,150 A 64.28571428571428,64.28571428571428,0, 0,0, 85.71688032875167,149.4224304747868 L 88.71675924674325,149.44938371929675 A 61.285714285714285,61.285714285714285,0, 0,1, 211.28571428571428,150 Z',
      },
      {
        d: 'M 231.42857142857144,150 A 81.42857142857143,81.42857142857143,0, 0,0, 144.27387954299138,68.77301070820249 L 144.48484187561803,71.7655839979003 A 78.42857142857143,78.42857142857143,0, 0,1, 228.42857142857144,150 Z',
      },
      {
        d: 'M 248.57142857142856,150 A 98.57142857142857,98.57142857142857,0, 0,0, 135.05158443764773,52.56863234672589 L 135.50653621563237,55.533934840521184 A 95.57142857142857,95.57142857142857,0, 0,1, 245.57142857142856,150 Z',
      },
      {
        d: 'M 265.7142857142857,150 A 115.71428571428571,115.71428571428571,0, 0,0, 250.12476209652712,91.99286308150356 L 247.5289349310616,93.49675181642755 A 112.71428571428571,112.71428571428571,0, 0,1, 262.7142857142857,150 Z',
      },
      {
        d: 'M 282.8571428571429,150 A 132.85714285714286,132.85714285714286,0, 0,0, 181.46284753035883,20.92207921784353 L 180.75239613451203,23.836741945182553 A 129.85714285714286,129.85714285714286,0, 0,1, 279.8571428571429,150 Z',
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
        <RadialBar startAngle={0} endAngle={180} label={label} background dataKey="uv" isAnimationActive={false} />
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

      expect(spy).toHaveBeenLastCalledWith({ height: 40, width: 90, x: 5, y: 5 });
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

      expect(spy).toHaveBeenLastCalledWith(expect.stringMatching(/recharts\d+-clip/));
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

      expect(spy).toHaveBeenLastCalledWith(100);
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

      expect(spy).toHaveBeenLastCalledWith(50);
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
