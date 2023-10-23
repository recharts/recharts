import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Area, AreaChart, ComposedChart, Line, Tooltip, XAxis, YAxis } from '../../src';

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
    fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });

    // After the mouse over event over the chart, the tooltip wrapper still is not set to visible,
    // but the content is already created based on the nearest data point.
    const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
    const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
    expect(tooltipContentName).toBeInTheDocument();
    expect(tooltipContentValue).toBeInTheDocument();
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
    fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });

    // After the mouse over event over the chart, the tooltip wrapper still is not set to visible,
    // but the content is already created based on the nearest data point.
    const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
    const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
    expect(tooltipContentName).toBeInTheDocument();
    expect(tooltipContentValue).toBeInTheDocument();
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

    fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });

    const customizedContent = container.querySelector('.customized');
    expect(customizedContent).toBeInTheDocument();
  });
});

// Tests to add:
// Test for each chart type Composed, Area, Line, Scatter, ...
// Test for Tooltip properties (i.e. shared on BarChart)
// Test for visibility
