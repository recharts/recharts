import { fireEvent, getByText, render } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import {
  Area,
  AreaChart,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Scatter,
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

  describe('Tooltip - includeHidden', () => {
    test('False - Should not render tooltip for hidden items', () => {
      let tooltipPayload: any[] | undefined = [];

      const { container } = render(
        <ComposedChart width={400} height={400} data={data}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="uv" hide name="2" />
          <Line dataKey="uv" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="uv" name="5" />
          <Tooltip
            includeHidden
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />
        </ComposedChart>,
      );

      expect(tooltipPayload).toHaveLength(0);

      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('12345');
    });

    test('True - Should render tooltip for hidden items', () => {
      let tooltipPayload: any[] | undefined = [];

      const { container } = render(
        <ComposedChart width={400} height={400} data={data}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="uv" hide name="2" />
          <Line dataKey="uv" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="uv" name="5" />
          <Tooltip
            includeHidden={false}
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />
        </ComposedChart>,
      );

      expect(tooltipPayload).toHaveLength(0);

      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('5');
    });
  });
});
