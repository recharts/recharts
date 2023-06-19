import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from '../../src';

describe('AccessibilityLayer', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  test('Add tabindex and role to the svg element', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).not.toBeUndefined();
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('tabindex', '0');
  });

  test('When chart receives focus, show the tooltip for the first point', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>,
    );

    // Confirm that the tooltip container exists, but isn't displaying anything
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip?.textContent).toBe('');

    // Once the chart receives focus, the tooltip should display
    container.querySelector('svg')?.focus();
    expect(tooltip).toHaveTextContent('Page A');
  });

  test('Chart updates when it receives left/right arrow keystrokes', () => {
    const mockMouseMovements = jest.fn();

    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer onMouseMove={mockMouseMovements}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>,
    );

    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');
    expect(mockMouseMovements.mock.instances).toHaveLength(0);

    // Once the chart receives focus, the tooltip should display
    svg?.focus();
    expect(tooltip).toHaveTextContent('Page A');
    expect(mockMouseMovements.mock.instances).toHaveLength(1);

    if (svg === null) {
      return;
    }

    // Ignore left arrow when you're already at the left
    fireEvent.keyDown(svg, {
      key: 'ArrowLeft',
    });
    expect(tooltip).toHaveTextContent('Page A');
    expect(mockMouseMovements.mock.instances).toHaveLength(2);

    // Respect right arrow when there's something to the right
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page B');
    expect(mockMouseMovements.mock.instances).toHaveLength(3);

    // Page C
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    // Page D
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page E');
    expect(mockMouseMovements.mock.instances).toHaveLength(6);

    // Ignore right arrow when you're already at the right
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page F');
    expect(mockMouseMovements.mock.instances).toHaveLength(7);

    // Respect left arrow when there's something to the left
    fireEvent.keyDown(svg, {
      key: 'ArrowLeft',
    });
    expect(tooltip).toHaveTextContent('Page E');
    expect(mockMouseMovements.mock.instances).toHaveLength(8);

    // Chart ignores non-arrow keys
    fireEvent.keyDown(svg, {
      key: 'a',
    });
    expect(tooltip).toHaveTextContent('Page E');
    expect(mockMouseMovements.mock.instances).toHaveLength(8);
  });

  test('Vertical chart ignores arrow keys', () => {
    const mockMouseMovements = jest.fn();

    const { container } = render(
      <AreaChart
        layout="vertical"
        width={100}
        height={50}
        data={data}
        accessibilityLayer
        onMouseMove={mockMouseMovements}
      >
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>,
    );

    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');
    expect(mockMouseMovements.mock.instances).toHaveLength(0);

    // Once the chart receives focus, the tooltip should display
    svg?.focus();
    expect(tooltip).toHaveTextContent('');
    expect(mockMouseMovements.mock.instances).toHaveLength(0);

    if (svg === null) {
      return;
    }

    // Vertical charts aren't supported, so right arrow key should be ignored
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('');
    expect(mockMouseMovements.mock.instances).toHaveLength(0);

    // Left arrow key should also be ignored
    fireEvent.keyDown(svg, {
      key: 'ArrowLeft',
    });
    expect(tooltip).toHaveTextContent('');
    expect(mockMouseMovements.mock.instances).toHaveLength(0);
  });

  const Expand = () => {
    const [width, setWidth] = useState(6);
    const myData = data.slice(0, width);

    return (
      <div>
        <pre>{width}</pre>

        <button id="my3" type="button" onClick={() => setWidth(3)}>
          Show 3
        </button>
        <button id="my5" type="button" onClick={() => setWidth(5)}>
          Show 5
        </button>

        <AreaChart width={100} height={50} data={myData} accessibilityLayer>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </AreaChart>
      </div>
    );
  };

  test('When chart updates, arrow keys still work', () => {
    const { container } = render(<Expand />);

    const pre = container.querySelector('pre');
    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');
    expect(pre?.textContent).toBe('6');

    // Once the chart receives focus, the tooltip should display
    svg?.focus();
    expect(tooltip).toHaveTextContent('Page A');

    if (svg === null) {
      return;
    }

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page B');

    // Page C
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    // Page D
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    // Page E
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page F');

    fireEvent.click(container.querySelector('#my3') as HTMLButtonElement);
    expect(pre?.textContent).toBe('3');

    // The chart only goes from A - C now, so the AccessibilityManager should think "C" is active.

    fireEvent.keyDown(svg, {
      key: 'ArrowLeft',
    });
    expect(tooltip).toHaveTextContent('Page B');

    fireEvent.click(container.querySelector('#my5') as HTMLButtonElement);
    expect(pre?.textContent).toBe('5');

    // The chart now goes from A - E. Since the focus was already on B, B can remain active.
    expect(tooltip).toHaveTextContent('Page B');

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page C');

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page D');

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page E');

    // The chart only goes from A - E, so we shouldn't be able to go right any further.
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page E');
  });

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h1>
          This is:
          {count}
        </h1>

        <button type="button" onClick={() => setCount(count + 1)}>
          Bump counter
        </button>

        <AreaChart width={100} height={50} data={data} accessibilityLayer>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </AreaChart>
      </div>
    );
  };

  // Q: What is the point of this test?
  // A: Well, I was thinking, what was a way this could break and would be hard to figure out?
  //    If the elements and their event listeners got disconnected. But how would that happen
  //    outside of something weird happening with React rendering? I don't know, but if it DID
  //    happen, it would take a while for someone to notice, and could be potentially hard to
  //    reproduce or debug. It's not that hard to test, and could potentially save someone some
  //    stress down the line. That trade-off feels worth it!
  test('When chart is forced to rerender without a redraw, arrow keys still work', () => {
    const { container } = render(<Counter />);

    expect(container.querySelectorAll('button')).toHaveLength(1);

    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');

    // Once the chart receives focus, the tooltip should display
    svg?.focus();
    expect(tooltip).toHaveTextContent('Page A');

    if (svg === null) {
      return;
    }

    // Ignore left arrow when you're already at the left
    fireEvent.keyDown(svg, {
      key: 'ArrowLeft',
    });
    expect(tooltip).toHaveTextContent('Page A');
  });

  const BugExample = () => {
    const [toggle, setToggle] = useState(true);

    return (
      <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>

        {/* Original bug only appeared when the margin property was used. Do not remove this property. */}
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          accessibilityLayer
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {toggle && <Tooltip />}
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
    );
  };

  test('When a tooltip is removed, the AccessibilityLayer responds gracefully', () => {
    const { container } = render(<BugExample />);

    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');

    svg?.focus();
    expect(tooltip).toHaveTextContent('Page A');

    // This makes typescript happy
    if (svg === null) {
      return;
    }

    // Make sure we move around, to get the AccessibilityManager's active index above 0
    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });
    expect(tooltip).toHaveTextContent('Page B');

    // Remove tooltip component
    fireEvent.click(container.querySelector('button') as HTMLButtonElement);

    expect(container.querySelector('.recharts-tooltip-wrapper')).toBeNull();

    expect(() => {
      svg?.focus();
      fireEvent.keyDown(svg, {
        key: 'ArrowRight',
      });
    }).not.toThrowError();
  });
});
