import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RadialBarChart, RadialBar, Legend, Sector, Tooltip, Cell, SectorProps, XAxis, YAxis } from '../../src';
import { testChartLayoutContext } from '../util/context';

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
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(data.length);
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
    expect(container.querySelectorAll('.recharts-radial-bar-sector')).toHaveLength(0);
  });

  test("Don't renders any sectors when width or height is smaller than 0", () => {
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
      />,
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

    const sectorNodes = container.querySelectorAll('.recharts-sector');
    const [sector] = Array.from(sectorNodes);
    fireEvent.mouseOver(sector, { clientX: 200, clientY: 200 });

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
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

    const sectorNodes = container.querySelectorAll('.recharts-sector');
    const [sector] = Array.from(sectorNodes);
    fireEvent.mouseOver(sector, { clientX: 200, clientY: 200 });

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
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

    const sectorNodes = container.querySelectorAll('.recharts-sector');
    const [sector] = Array.from(sectorNodes);
    fireEvent.mouseOver(sector, { clientX: 200, clientY: 200 });

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
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

    const sectorNodes = container.querySelectorAll('.recharts-sector');

    const [sector] = Array.from(sectorNodes);
    fireEvent.mouseOver(sector, { clientX: 200, clientY: 200 });

    const activeSector = container.querySelectorAll('.recharts-active-shape');
    expect(activeSector).toHaveLength(1);
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

    /**
     * This test is skipped because generateCategoricalChart throws an error if axes are provided to FunnelChart.
     * TODO un-skip this level if fixing the exception.
     */
    it.skip(
      'should provide axisMaps: undefined even if axes are specified',
      testChartLayoutContext(
        props => (
          <RadialBarChart width={100} height={50} barSize={20}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
            {props.children}
          </RadialBarChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 10, width: 30, x: 65, y: 5 });
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );
  });
});
