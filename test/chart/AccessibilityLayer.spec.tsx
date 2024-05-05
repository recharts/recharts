import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Funnel,
  FunnelChart,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { getTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { PageData } from '../_data';

function assertChartA11yAttributes(svg: Element) {
  expect(svg).not.toBeNull();
  expect(svg).not.toBeUndefined();
  expect(svg).toHaveAttribute('role', 'application');
  expect(svg).toHaveAttribute('tabindex', '0');
}

function assertNoA11yAttributes(svg: Element) {
  expect(svg).not.toBeNull();
  expect(svg).not.toBeUndefined();
  expect(svg).not.toHaveAttribute('role');
  expect(svg).not.toHaveAttribute('tabindex');
}

function arrowRight(container: Element) {
  fireEvent.keyDown(container, {
    key: 'ArrowRight',
  });
}

function arrowLeft(container: Element) {
  fireEvent.keyDown(container, {
    key: 'ArrowLeft',
  });
}

function assertNoKeyboardInteractions(container: HTMLElement) {
  const svg = container.querySelector('svg');
  assertNotNull(svg);
  const tooltip = getTooltip(container);
  expect(tooltip).toHaveTextContent('');
  act(() => {
    svg.focus();
  });
  expect(tooltip).toHaveTextContent('');
  arrowRight(svg);
  expect(tooltip).toHaveTextContent('');
  arrowLeft(svg);
  expect(tooltip).toHaveTextContent('');
}

describe.each([true, undefined])('AccessibilityLayer with accessibilityLayer=%s', accessibilityLayer => {
  describe('AreaChart', () => {
    test('Add tabindex and role to the svg element', () => {
      const { container } = render(
        <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        </AreaChart>,
      );

      const svg = container.querySelector('svg');
      assertChartA11yAttributes(svg);
    });

    test('When chart receives focus, show the tooltip for the first point', () => {
      const { container } = render(
        <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </AreaChart>,
      );

      // Confirm that the tooltip container exists, but isn't displaying anything
      const tooltip = getTooltip(container);
      expect(tooltip.textContent).toBe('');

      // Once the chart receives focus, the tooltip should display
      act(() => container.querySelector('svg')?.focus());
      expect(tooltip).toHaveTextContent('Page A');
    });

    test('accessibilityLayer works, even without *Axis elements', () => {
      const { container } = render(
        <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
        </AreaChart>,
      );

      // Confirm that the tooltip container exists, but isn't displaying anything
      const tooltip = getTooltip(container);
      expect(tooltip.textContent).toBe('');

      // Once the chart receives focus, the tooltip should display
      act(() => container.querySelector('svg')?.focus());
      expect(tooltip).toHaveTextContent('uv : 400');

      // Use keyboard to move around
      fireEvent.keyDown(document.querySelector('svg'), {
        key: 'ArrowRight',
      });
      expect(tooltip).toHaveTextContent('uv : 300');
    });

    test('Chart updates when it receives left/right arrow keystrokes', () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <AreaChart
          width={100}
          height={50}
          data={PageData}
          accessibilityLayer={accessibilityLayer}
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
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');
      expect(mockMouseMovements.mock.instances).toHaveLength(1);

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page A');
      expect(mockMouseMovements.mock.instances).toHaveLength(2);

      // Respect right arrow when there's something to the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');
      expect(mockMouseMovements.mock.instances).toHaveLength(3);

      // Page C
      arrowRight(svg);

      // Page D
      arrowRight(svg);

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements.mock.instances).toHaveLength(6);

      // Ignore right arrow when you're already at the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page F');
      expect(mockMouseMovements.mock.instances).toHaveLength(7);

      // Respect left arrow when there's something to the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements.mock.instances).toHaveLength(8);

      // Chart ignores non-arrow keys
      fireEvent.keyDown(svg, {
        key: 'a',
      });
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements.mock.instances).toHaveLength(8);
    });

    test('Vertical chart ignores arrow keys because vertical charts are not supported (why?)', () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <AreaChart
          layout="vertical"
          width={100}
          height={50}
          data={PageData}
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

      assertNoKeyboardInteractions(container);
      expect(mockMouseMovements.mock.instances).toHaveLength(0);
    });

    test('Left/right arrow pays attention to if the XAxis is reversed', () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <AreaChart
          width={100}
          height={50}
          data={PageData}
          accessibilityLayer={accessibilityLayer}
          onMouseMove={mockMouseMovements}
        >
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" reversed />
          <YAxis />
        </AreaChart>,
      );

      const svg = container.querySelector('svg');
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');
      expect(mockMouseMovements).toHaveBeenCalledTimes(0);

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');
      expect(mockMouseMovements).toHaveBeenCalledTimes(1);

      // Ignore right arrow when you're already at the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page A');
      expect(mockMouseMovements).toHaveBeenCalledTimes(2);

      // Respect left arrow when there's something to the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page B');
      expect(mockMouseMovements).toHaveBeenCalledTimes(3);

      // Page C
      arrowLeft(svg);

      // Page D
      arrowLeft(svg);

      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements).toHaveBeenCalledTimes(6);

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page F');
      expect(mockMouseMovements).toHaveBeenCalledTimes(7);

      // Respect right arrow when there's something to the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements).toHaveBeenCalledTimes(8);

      // Chart ignores non-arrow keys
      fireEvent.keyDown(svg, {
        key: 'a',
      });
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements).toHaveBeenCalledTimes(8);
    });

    const Expand = () => {
      const [width, setWidth] = useState(6);
      const myData = PageData.slice(0, width);

      return (
        <div>
          <pre>{myData.length}</pre>

          <button id="my3" type="button" onClick={() => setWidth(3)}>
            Show 3
          </button>
          <button id="my5" type="button" onClick={() => setWidth(5)}>
            Show 5
          </button>

          <AreaChart width={100} height={50} data={myData} accessibilityLayer={accessibilityLayer}>
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
      assertNotNull(pre);
      const svg = container.querySelector('svg');
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');
      expect(pre.textContent).toBe('6');

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');

      // Page C
      arrowRight(svg);

      // Page D
      arrowRight(svg);

      // Page E
      arrowRight(svg);

      // Page F
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page F');

      fireEvent.click(container.querySelector('#my3') as HTMLButtonElement);
      expect(pre.textContent).toBe('3');

      // The chart only goes from A - C now, so the AccessibilityManager should think "C" is active.

      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page B');

      fireEvent.click(container.querySelector('#my5') as HTMLButtonElement);
      expect(pre.textContent).toBe('5');

      // The chart now goes from A - E. Since the focus was already on B, B can remain active.
      expect(tooltip).toHaveTextContent('Page B');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page C');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page D');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page E');

      // The chart only goes from A - E, so we shouldn't be able to go right any further.
      arrowRight(svg);
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

          <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
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
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
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
            data={PageData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            accessibilityLayer={accessibilityLayer}
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

    test('When a tooltip is removed, the AccessibilityLayer does not throw', () => {
      const { container } = render(<BugExample />);

      const svg = container.querySelector('svg');
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      // Make sure we move around, to get the AccessibilityManager's active index above 0
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');

      // Remove tooltip component
      fireEvent.click(container.querySelector('button') as HTMLButtonElement);

      expect(container.querySelector('.recharts-tooltip-wrapper')).toBeNull();

      expect(() => {
        act(() => svg.focus());
        fireEvent.keyDown(svg, {
          key: 'ArrowRight',
        });
      }).not.toThrowError();
    });

    const DirectionSwitcher = () => {
      const [reversed, setReversed] = useState(false);

      return (
        <div>
          <button type="button" onClick={() => setReversed(!reversed)}>
            Change directions
          </button>

          <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
            <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
            <Tooltip />
            <Legend />
            <XAxis dataKey="name" reversed={reversed} />
            <YAxis orientation={reversed ? 'right' : 'left'} />
          </AreaChart>
        </div>
      );
    };

    test('AccessibilityLayer respects dynamic changes to the XAxis orientation', () => {
      const { container } = render(<DirectionSwitcher />);

      const svg = container.querySelector('svg');
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');

      const button = container.querySelector('BUTTON') as HTMLButtonElement;
      fireEvent.click(button);

      // Key events should now go in reverse
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page A');
    });
  });

  describe('PieChart', () => {
    test('Add tabindex and role to the svg element', () => {
      const { container } = render(
        <PieChart width={100} height={50} accessibilityLayer={accessibilityLayer}>
          <Pie data={PageData} dataKey="uv" />
        </PieChart>,
      );

      const svg = container.querySelector('svg');
      assertChartA11yAttributes(svg);
    });

    test('does not show tooltip using keyboard', async () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <PieChart width={100} height={50} accessibilityLayer={accessibilityLayer} onMouseMove={mockMouseMovements}>
          <Pie dataKey="uv" data={PageData} />
          <Tooltip />
        </PieChart>,
      );

      assertNoKeyboardInteractions(container);
    });
  });

  describe('FunnelChart', () => {
    test('Add tabindex and role to the svg element', () => {
      const { container } = render(
        <FunnelChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        </FunnelChart>,
      );

      const svg = container.querySelector('svg');
      assertChartA11yAttributes(svg);
    });

    test('tooltip does not show when chart receives focus', () => {
      const { container } = render(
        <FunnelChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
        </FunnelChart>,
      );

      const tooltip = getTooltip(container);
      expect(tooltip).toHaveTextContent('');

      act(() => container.querySelector('svg')?.focus());
      expect(tooltip).toHaveTextContent('');
    });

    test('Chart does not update when it receives left/right arrow keystrokes', () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <FunnelChart
          width={100}
          height={50}
          data={PageData}
          accessibilityLayer={accessibilityLayer}
          onMouseMove={mockMouseMovements}
        >
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
        </FunnelChart>,
      );

      const svg = container.querySelector('svg');
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Respect right arrow when there's something to the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Page C
      arrowRight(svg);

      // Page D
      arrowRight(svg);

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Ignore right arrow when you're already at the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Respect left arrow when there's something to the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);

      // Chart ignores non-arrow keys
      fireEvent.keyDown(svg, {
        key: 'a',
      });
      expect(tooltip).toHaveTextContent('');
      expect(mockMouseMovements.mock.instances).toHaveLength(0);
    });
  });
});

describe('AccessibilityLayer with accessibilityLayer=false', () => {
  const accessibilityLayer = false;

  describe('AreaChart', () => {
    test('does not add tabindex and role to the svg element', () => {
      const { container } = render(
        <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        </AreaChart>,
      );

      const svg = container.querySelector('svg');
      assertNoA11yAttributes(svg);
    });

    test('does not show tooltip using keyboard', () => {
      const { container } = render(
        <AreaChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </AreaChart>,
      );

      assertNoKeyboardInteractions(container);
    });

    test('Vertical chart ignores arrow keys', () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <AreaChart
          layout="vertical"
          width={100}
          height={50}
          data={PageData}
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

      assertNoKeyboardInteractions(container);
      expect(mockMouseMovements.mock.instances).toHaveLength(0);
    });
  });

  describe('FunnelChart', () => {
    test('does not add tabindex and role to the svg element', () => {
      const { container } = render(
        <FunnelChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        </FunnelChart>,
      );

      const svg = container.querySelector('svg');
      assertNoA11yAttributes(svg);
    });

    test('does not show tooltip using keyboard', () => {
      const { container } = render(
        <FunnelChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          <Tooltip />
          <Legend />
        </FunnelChart>,
      );

      assertNoKeyboardInteractions(container);
    });
  });

  describe('PieChart', () => {
    test('does not tabindex and role to the svg element', () => {
      const { container } = render(
        <PieChart width={100} height={50} accessibilityLayer={accessibilityLayer}>
          <Pie data={PageData} dataKey="uv" />
        </PieChart>,
      );

      const svg = container.querySelector('svg');
      assertNoA11yAttributes(svg);
    });

    test('does not show tooltip using keyboard', async () => {
      const mockMouseMovements = vi.fn();

      const { container } = render(
        <PieChart width={100} height={50} accessibilityLayer={accessibilityLayer} onMouseMove={mockMouseMovements}>
          <Pie dataKey="uv" data={PageData} />
          <Tooltip />
        </PieChart>,
      );

      assertNoKeyboardInteractions(container);
    });
  });
});
