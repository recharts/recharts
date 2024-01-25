import { fireEvent, getByText, render } from '@testing-library/react';
import React, { useState } from 'react';
import { vi } from 'vitest';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';

describe('<Tooltip />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];

  test('Without an event, the wrapper is rendered but not visible', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip />
        </AreaChart>
      </div>,
    );

    const wrapper = container.querySelector('.recharts-tooltip-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeVisible();
  });

  test('No content is rendered without an explicit event', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip />
        </AreaChart>
      </div>,
    );

    const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
    const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
    expect(tooltipContentName).toBeNull();
    expect(tooltipContentValue).toBeNull();
  });

  test('Mouse over renders content', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip />
        </AreaChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    // After the mouse over event over the chart, the tooltip wrapper still is not set to visible,
    // but the content is already created based on the nearest data point.
    const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
    const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
    expect(tooltipContentName).toBeInTheDocument();
    expect(tooltipContentValue).toBeInTheDocument();
  });

  test('Should move when the mouse moves', async () => {
    const mock = vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 10,
      height: 10,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    } as DOMRect);
    const { container } = render(
      <AreaChart width={400} height={400} data={data}>
        <Area dataKey="uv" />
        <Tooltip />
      </AreaChart>,
    );
    mock.mockRestore();

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseMove(chart, { clientX: 200, clientY: 200 });

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip.getAttribute('style').includes('translate')).toBe(true);
  });

  test('Mouse over renders content with multiple data sets', () => {
    const areaData = [
      { category: 'A', value: 0.2 },
      { category: 'B', value: 0.3 },
      { category: 'B', value: 0.5 },
      { category: 'C', value: 0.6 },
      { category: 'C', value: 0.7 },
      { category: 'D', value: 0.4 },
    ];

    const lineData = [
      { category: 'A', value: null },
      { category: 'B', value: null },
      { category: 'B', value: null },
      { category: 'C', value: 0.2 },
      { category: 'C', value: 0.4 },
      { category: 'D', value: 0.6 },
    ];

    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <ComposedChart width={400} height={400} data={areaData}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip />

          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
        </ComposedChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    // After the mouse over event over the chart, the tooltip wrapper still is not set to visible,
    // but the content is already created based on the nearest data point.
    const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
    const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
    expect(tooltipContentName).toBeInTheDocument();
    expect(tooltipContentValue).toBeInTheDocument();
  });

  it('Tooltip payload should be correct for multiple datasets', () => {
    const lineData1 = [
      { category: 'A', value: 0.2 },
      { category: 'B', value: 0.3 },
      { category: 'B', value: 0.5 },
      { category: 'C', value: 0.6 },
      { category: 'C', value: 0.7 },
      { category: 'D', value: 0.4 },
    ];

    const lineData2 = [
      { category: 'A', value: null },
      { category: 'B', value: null },
      { category: 'B', value: null },
      { category: 'C', value: 0.2 },
      { category: 'C', value: 0.4 },
      { category: 'D', value: 0.6 },
    ];

    let tooltipPayload: any[] | null = null;

    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <ComposedChart width={400} height={400}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />

          <Line dataKey="value" data={lineData1} />
          <Line dataKey="value" data={lineData2} />
        </ComposedChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });
    expect(tooltipPayload).not.toBeNull();
    expect(tooltipPayload).toHaveLength(2);
    expect(tooltipPayload[0].payload.value).toEqual(0.7);
    expect(tooltipPayload[1].payload.value).toEqual(0.4);
  });

  it('Render customized tooltip when content is set to be a react element', () => {
    const Customized = () => {
      return <div className="customized" />;
    };
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip content={<Customized />} />
      </AreaChart>,
    );

    const chart = container.querySelector('.recharts-wrapper');

    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    const customizedContent = container.querySelector('.customized');
    expect(customizedContent).toBeInTheDocument();
  });

  describe('Using with Brush', () => {
    it('Should display the correct data', () => {
      const { container } = render(
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Brush dataKey="name" startIndex={1} height={30} stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      const line = container.querySelector('.recharts-cartesian-grid-horizontal line');
      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart, { clientX: +line.getAttribute('x') + 1, clientY: 50 });
      expect(getByText(container, '1398')).toBeVisible();
    });
  });

  describe('Tooltip - active', () => {
    test('True - Should render tooltip even after moving the mouse out of the chart.', () => {
      const { container } = render(
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip active />
        </AreaChart>,
      );

      const tooltip = container.querySelector('.recharts-tooltip-wrapper');
      expect(tooltip).not.toBeVisible();

      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      expect(tooltip).toBeVisible();

      fireEvent.mouseOut(chart);

      // Still visible after moving out of the chart, because active is true.
      expect(tooltip).toBeVisible();
    });
  });

  test('False - Should never render tooltip', () => {
    const { container } = render(
      <AreaChart width={400} height={400} data={data}>
        <Area dataKey="uv" />
        <Tooltip active={false} />
      </AreaChart>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    expect(tooltip).not.toBeVisible();

    fireEvent.mouseOut(chart);

    expect(tooltip).not.toBeVisible();
  });

  test('Unset - Should render the Tooltip only while in the chart', () => {
    const { container } = render(
      <AreaChart width={400} height={400} data={data}>
        <Area dataKey="uv" />
        <Tooltip />
      </AreaChart>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

    expect(tooltip).toBeVisible();

    fireEvent.mouseOut(chart);

    expect(tooltip).not.toBeVisible();
  });

  test('Tooltip should be visible from the beginning if defaultIndex is set to a valid value', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip defaultIndex={2} />
        </AreaChart>
      </div>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // The active dot should also be visible
    expect(container.querySelector('.recharts-active-dot')).toBeVisible();

    // "2uv..." should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('2uv : 200');

    const chart = container.querySelector('.recharts-wrapper') as Element;
    fireEvent.mouseOver(chart, { clientX: 350, clientY: 200 });

    // Tooltip should be able to move when the mouse moves over the chart
    expect(tooltip).toBeVisible();
    expect(tooltip?.textContent).toBe('4uv : 189');

    fireEvent.mouseOut(chart);

    // Since active is false, the tooltip can be dismissed by mousing out
    expect(tooltip).not.toBeVisible();
  });

  test('defaultIndex works for vertical charts', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip defaultIndex={2} active />
          <Legend />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // The active dot should also be visible
    expect(container.querySelector('.recharts-active-dot')).toBeVisible();

    // "2uv..." should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('Page Cuv : 200');

    const chart = container.querySelector('.recharts-wrapper') as Element;
    fireEvent.mouseOver(chart, { clientX: 350, clientY: 200 });

    // Tooltip should be able to move when the mouse moves over the chart
    expect(tooltip).toBeVisible();
    expect(tooltip?.textContent).toBe('Page Duv : 278');
  });

  test('defaultIndex should work with bar charts', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" label fill="#ff7300" />
        <Tooltip defaultIndex={2} />
      </BarChart>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // The box around the active bar should also be visible
    expect(container.querySelector('.recharts-active-bar')).toBeVisible();

    // "2uv..." should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('2uv : 200');
  });

  test('defaultIndex should work with scatter charts', () => {
    const data2 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const { container } = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data2} fill="#ff7300" />
        <Tooltip defaultIndex={2} />
      </ScatterChart>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // "2uv..." should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('170stature : 170cmweight : 300kg');
  });

  test('defaultIndex can be updated by parent control', () => {
    const data2 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const Example = () => {
      const [defaultIndex, setDefaultIndex] = useState(0);

      return (
        <div>
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="x" name="stature" unit="cm" />
            <YAxis dataKey="y" name="weight" unit="kg" />
            <Scatter line name="A school" data={data2} fill="#ff7300" />
            <Tooltip defaultIndex={defaultIndex} active />
          </ScatterChart>
          <button type="button" id="goRight" onClick={() => setDefaultIndex(defaultIndex + 1)}>
            Go right
          </button>
        </div>
      );
    };
    const { container } = render(<Example />);

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // Data should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('100stature : 100cmweight : 200kg');

    fireEvent.click(container.querySelector('#goRight') as HTMLButtonElement);

    // Data should be displayed in the Tooltip payload
    expect(tooltip?.textContent).toBe('120stature : 120cmweight : 100kg');
  });

  test('Invalid defaultIndex value should be ignored', () => {
    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" />
          <Tooltip defaultIndex={20} />
        </AreaChart>
      </div>,
    );

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).not.toBeVisible();
  });
});
