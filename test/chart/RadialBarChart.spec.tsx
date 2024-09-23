import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, test, it, expect, vi } from 'vitest';
import {
  Cell,
  Customized,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Sector,
  SectorProps,
  Tooltip,
} from '../../src';
import { testChartLayoutContext } from '../util/context';
import { expectRadialBarLabels, expectRadialBars } from '../helper/expectRadialBars';
import { selectRootBarSize } from '../../src/state/selectors/rootPropsSelectors';
import { useAppSelector } from '../../src/state/hooks';

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
        d: 'M 174.42857142857144,150 A 24.42857142857143,24.42857142857143,0, 1,0, 174.42857142485076,150.00042635900297 L 164.42857142637382,150.00025182607777 A 14.428571428571429,14.428571428571429,0, 1,1, 164.42857142857142,150 Z',
      },
      {
        d: 'M 191.57142857142856,150 A 41.57142857142857,41.57142857142857,0, 1,0, 174.03382483750931,183.91988999317817 L 168.2524924023696,175.76046628347896 A 31.57142857142857,31.57142857142857,0, 1,1, 181.57142857142856,150 Z',
      },
      {
        d: 'M 208.71428571428572,150 A 58.714285714285715,58.714285714285715,0, 0,0, 91.28808403359318,149.47248650030528 L 101.28768042689848,149.56233064867178 A 48.714285714285715,48.714285714285715,0, 0,1, 198.71428571428572,150 Z',
      },
      {
        d: 'M 225.85714285714286,150 A 75.85714285714286,75.85714285714286,0, 0,0, 144.66566673215513,74.33064681764127 L 145.36887450757726,84.30589111663394 A 65.85714285714286,65.85714285714286,0, 0,1, 215.85714285714286,150 Z',
      },
      {
        d: 'M 243,150 A 93,93,0, 0,0, 135.89649488247633,58.07562269234573 L 137.41300080909178,67.95996433833005 A 83,83,0, 0,1, 233,150 Z',
      },
      {
        d: 'M 260.1428571428571,150 A 110.14285714285714,110.14285714285714,0, 0,0, 245.30394021780546,94.78579930350523 L 236.65118299958704,99.79876175325185 A 100.14285714285714,100.14285714285714,0, 0,1, 250.14285714285714,150 Z',
      },
      {
        d: 'M 277.2857142857143,150 A 127.28571428571429,127.28571428571429,0, 0,0, 180.14343779521477,26.335024282901713 L 177.7752664757254,36.05056670736511 A 117.28571428571429,117.28571428571429,0, 0,1, 267.2857142857143,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M169.35463984863964,148.30668842661692 A19.42857142857143,19.42857142857143,0,1,0, 169.38124440504802,148.644731367257',
        textContent: '31.47',
      },
      {
        d: 'M186.43226324449813,146.81258997951423 A36.57142857142857,36.57142857142857,0,1,0, 186.48234240950214,147.448906103072',
        textContent: '26.69',
      },
      {
        d: 'M203.50988664035663,145.3184915324115 A53.714285714285715,53.714285714285715,0,1,0, 203.58344041395628,146.253080838887',
        textContent: '15.69',
      },
      {
        d: 'M220.58751003621512,143.8243930853088 A70.85714285714286,70.85714285714286,0,1,0, 220.6845384184104,145.057255574702',
        textContent: '8.22',
      },
      {
        d: 'M237.66513343207362,142.33029463820608 A88,88,0,1,0, 237.78563642286454,143.861430310517',
        textContent: '8.63',
      },
      {
        d: 'M254.7427568279321,140.83619619110337 A105.14285714285714,105.14285714285714,0,1,0, 254.8867344273187,142.665605046332',
        textContent: '2.63',
      },
      {
        d: 'M271.8203802237906,139.34209774400065 A122.28571428571429,122.28571428571429,0,1,0, 271.9878324317728,141.469779782147',
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
        d: 'M 176.85714285714286,150 A 26.857142857142858,26.857142857142858,0, 1,0, 176.85714285305227,150.00046874557052 L 161.42857142683076,150.00019946620023 A 11.428571428571429,11.428571428571429,0, 1,1, 161.42857142857142,150 Z',
      },
      {
        d: 'M 194,150 A 44,44,0, 1,0, 175.43786271461465,185.90146432267656 L 166.5180926718277,173.31263917056918 A 28.57142857142857,28.57142857142857,0, 1,1, 178.57142857142856,150 Z',
      },
      {
        d: 'M 211.14285714285714,150 A 61.142857142857146,61.142857142857146,0, 0,0, 88.85961062379047,149.45066720713055 L 104.28755934489007,149.58928389318172 A 45.714285714285715,45.714285714285715,0, 0,1, 195.71428571428572,150 Z',
      },
      {
        d: 'M 228.28571428571428,150 A 78.28571428571429,78.28571428571429,0, 0,0, 144.4948877009812,71.90808748788591 L 145.57983684020388,87.29846440633175 A 62.85714285714286,62.85714285714286,0, 0,1, 212.85714285714286,150 Z',
      },
      {
        d: 'M 245.42857142857144,150 A 95.42857142857143,95.42857142857143,0, 0,0, 135.5282005860126,55.6751397211781 L 137.86795258707642,70.92526683212536 A 80,80,0, 0,1, 230,150 Z',
      },
      {
        d: 'M 262.57142857142856,150 A 112.57142857142857,112.57142857142857,0, 0,0, 247.40532411365848,93.56836556570963 L 234.05535583412154,101.30265048817583 A 97.14285714285714,97.14285714285714,0, 0,1, 247.14285714285714,150 Z',
      },
      {
        d: 'M 279.7142857142857,150 A 129.71428571428572,129.71428571428572,0, 0,0, 180.7185651156622,23.975535408389177 L 177.06481507987857,38.96522943470411 A 114.28571428571429,114.28571428571429,0, 0,1, 264.2857142857143,150 Z',
      },
    ]);

    expectRadialBarLabels(container, [
      {
        d: 'M169.07001279204198,148.33159006740198 A19.142857142857142,19.142857142857142,0,1,0, 169.09622610497377,148.66466178832675',
        textContent: '31.47',
      },
      {
        d: 'M186.14763618790047,146.83749162029926 A36.285714285714285,36.285714285714285,0,1,0, 186.1973241094279,147.46883652414175',
        textContent: '26.69',
      },
      {
        d: 'M203.22525958375897,145.34339317319655 A53.42857142857143,53.42857142857143,0,1,0, 203.29842211388205,146.27301125995675',
        textContent: '15.69',
      },
      {
        d: 'M220.3028829796175,143.84929472609383 A70.57142857142858,70.57142857142858,0,1,0, 220.39952011833617,145.07718599577174',
        textContent: '8.22',
      },
      {
        d: 'M237.380506375476,142.35519627899112 A87.71428571428572,87.71428571428572,0,1,0, 237.5006181227903,143.88136073158674',
        textContent: '8.63',
      },
      {
        d: 'M254.45812977133448,140.8610978318884 A104.85714285714286,104.85714285714286,0,1,0, 254.60171612724446,142.68553546740173',
        textContent: '2.63',
      },
      {
        d: 'M271.535753167193,139.36699938478571 A122,122,0,1,0, 271.7028141316986,141.48971020321673',
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
    expect(barSizeSpy).toHaveBeenCalledTimes(3);

    expectRadialBars(container, [
      {
        d: 'M 176.85714285714286,150 A 26.857142857142858,26.857142857142858,0, 1,0, 176.85714285305227,150.00046874557052 L 161.42857142683076,150.00019946620023 A 11.428571428571429,11.428571428571429,0, 1,1, 161.42857142857142,150 Z',
      },
      {
        d: 'M 194,150 A 44,44,0, 1,0, 175.43786271461465,185.90146432267656 L 166.5180926718277,173.31263917056918 A 28.57142857142857,28.57142857142857,0, 1,1, 178.57142857142856,150 Z',
      },
      {
        d: 'M 211.14285714285714,150 A 61.142857142857146,61.142857142857146,0, 0,0, 88.85961062379047,149.45066720713055 L 104.28755934489007,149.58928389318172 A 45.714285714285715,45.714285714285715,0, 0,1, 195.71428571428572,150 Z',
      },
      {
        d: 'M 228.28571428571428,150 A 78.28571428571429,78.28571428571429,0, 0,0, 144.4948877009812,71.90808748788591 L 145.57983684020388,87.29846440633175 A 62.85714285714286,62.85714285714286,0, 0,1, 212.85714285714286,150 Z',
      },
      {
        d: 'M 245.42857142857144,150 A 95.42857142857143,95.42857142857143,0, 0,0, 135.5282005860126,55.6751397211781 L 137.86795258707642,70.92526683212536 A 80,80,0, 0,1, 230,150 Z',
      },
      {
        d: 'M 262.57142857142856,150 A 112.57142857142857,112.57142857142857,0, 0,0, 247.40532411365848,93.56836556570963 L 234.05535583412154,101.30265048817583 A 97.14285714285714,97.14285714285714,0, 0,1, 247.14285714285714,150 Z',
      },
      {
        d: 'M 279.7142857142857,150 A 129.71428571428572,129.71428571428572,0, 0,0, 180.7185651156622,23.975535408389177 L 177.06481507987857,38.96522943470411 A 114.28571428571429,114.28571428571429,0, 0,1, 264.2857142857143,150 Z',
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
    expect(barSizeSpy).toHaveBeenCalledTimes(5);

    expectRadialBars(container, [
      {
        d: 'M 171.42857142857144,150 A 21.42857142857143,21.42857142857143,0, 1,0, 171.42857142530767,150.0003739991254 L 168.4285714257646,150.00032163924786 A 18.42857142857143,18.42857142857143,0, 1,1, 168.42857142857144,150 Z',
      },
      {
        d: 'M 188.57142857142856,150 A 38.57142857142857,38.57142857142857,0, 1,0, 172.2994251069674,181.4720628802684 L 170.5650253764255,179.02423576735865 A 35.57142857142857,35.57142857142857,0, 1,1, 185.57142857142856,150 Z',
      },
      {
        d: 'M 205.71428571428572,150 A 55.714285714285715,55.714285714285715,0, 0,0, 94.28796295158477,149.49943974481522 L 97.28784186957637,149.52639298932516 A 52.714285714285715,52.714285714285715,0, 0,1, 202.71428571428572,150 Z',
      },
      {
        d: 'M 222.85714285714286,150 A 72.85714285714286,72.85714285714286,0, 0,0, 144.87662906478178,77.32322010733907 L 145.0875913974084,80.31579339703687 A 69.85714285714286,69.85714285714286,0, 0,1, 219.85714285714286,150 Z',
      },
      {
        d: 'M 240,150 A 90,90,0, 0,0, 136.35144666046097,61.040925186141024 L 136.8063984384456,64.00622767993633 A 87,87,0, 0,1, 237,150 Z',
      },
      {
        d: 'M 257.1428571428571,150 A 107.14285714285714,107.14285714285714,0, 0,0, 242.7081130523399,96.28968803842922 L 240.11228588687442,97.79357677335321 A 104.14285714285714,104.14285714285714,0, 0,1, 254.14285714285714,150 Z',
      },
      {
        d: 'M 274.2857142857143,150 A 124.28571428571429,124.28571428571429,0, 0,0, 179.43298639936796,29.249687010240734 L 178.72253500352113,32.16434973757974 A 121.28571428571429,121.28571428571429,0, 0,1, 271.2857142857143,150 Z',
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
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <RadialBarChart width={100} height={50} barSize={20}>
            {props.children}
          </RadialBarChart>
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
          <RadialBarChart width={100} height={50} barSize={20}>
            {props.children}
          </RadialBarChart>
        ),
        ({ width, height }) => {
          expect(width).toBe(100);
          expect(height).toBe(50);
        },
      ),
    );

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

    it(
      'should provide axisMaps: undefined even if axes are specified',
      testChartLayoutContext(
        props => (
          <RadialBarChart width={100} height={50} barSize={20}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            {props.children}
          </RadialBarChart>
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
});
