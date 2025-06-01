import React, { ReactNode, useState } from 'react';
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
import { expectTooltipNotVisible, expectTooltipPayload, getTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { PageData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { clickOn } from '../helper/clickOn';

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

function getMainSurface(container: HTMLElement | SVGElement): HTMLElement | SVGElement {
  // DefaultLegendContent renders its own SVG surface, so we need to exclude it
  const mainSurface = container.querySelector(
    'svg.recharts-surface:not(.recharts-default-legend svg.recharts-surface)',
  );
  assertNotNull(mainSurface);
  if (!(mainSurface instanceof HTMLElement || mainSurface instanceof SVGElement)) {
    throw new Error('Main surface is not an HTMLElement or SVGElement');
  }
  return mainSurface;
}

function assertNoKeyboardInteractions(container: HTMLElement) {
  const svg = getMainSurface(container);
  assertNotNull(svg);
  expectTooltipNotVisible(container);
  act(() => {
    svg.focus();
  });
  expectTooltipNotVisible(container);
  arrowRight(svg);
  expectTooltipNotVisible(container);
  arrowLeft(svg);
  expectTooltipNotVisible(container);
}

describe.each([true, undefined])('AccessibilityLayer with accessibilityLayer=%s', accessibilityLayer => {
  describe('AreaChart horizontal', () => {
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

      expectTooltipNotVisible(container);

      // Once the chart receives focus, the tooltip should display
      act(() => getMainSurface(container).focus());

      expectTooltipPayload(container, 'Page A', ['uv : 400']);
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
      act(() => container.querySelector('svg').focus());
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

      const svg = getMainSurface(container);
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      const cursor = container.querySelector('.recharts-tooltip-cursor');
      expect(cursor).not.toBeNull();

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
      const cursorPathA = cursor.getAttribute('d');

      // Respect right arrow when there's something to the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');
      const cursorPathB = cursor.getAttribute('d');

      expect(cursorPathA).not.toEqual(cursorPathB);

      // Page C
      arrowRight(svg);

      // Page D
      arrowRight(svg);

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page E');

      // Ignore right arrow when you're already at the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page F');

      // Respect left arrow when there's something to the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page E');

      // Chart ignores non-arrow keys
      fireEvent.keyDown(svg, {
        key: 'a',
      });
      expect(tooltip).toHaveTextContent('Page E');

      // Keyboard controls no longer spoof mouse events!
      expect(mockMouseMovements).toHaveBeenCalledTimes(0);
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

      const svg = getMainSurface(container);
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      // Once the chart receives focus, the tooltip should display
      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      // Ignore right arrow when you're already at the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page A');

      // Respect left arrow when there's something to the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page B');

      // Page C
      arrowLeft(svg);

      // Page D
      arrowLeft(svg);

      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page E');

      // Ignore left arrow when you're already at the left
      arrowLeft(svg);
      expect(tooltip).toHaveTextContent('Page F');

      // Respect right arrow when there's something to the right
      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page E');

      // Chart ignores non-arrow keys
      fireEvent.keyDown(svg, {
        key: 'a',
      });
      expect(tooltip).toHaveTextContent('Page E');
      expect(mockMouseMovements).toHaveBeenCalledTimes(0);
    });

    describe('changing data prop in the middle of keyboard interaction', () => {
      const Expand = ({ children }: { children: ReactNode }) => {
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
              {children}
            </AreaChart>
          </div>
        );
      };

      const clickOn3 = clickOn('#my3');
      const clickOn5 = clickOn('#my5');

      const renderTestCase = createSelectorTestCase(Expand);

      it('should start with tooltip not visible', () => {
        const { container } = renderTestCase();
        expectTooltipNotVisible(container);
      });

      it('should select smaller data array when the button is clicked', () => {});

      test('When chart updates and some data get removed, keyboard interaction state should update too', () => {
        const { container } = renderTestCase();

        const pre = container.querySelector('pre');
        assertNotNull(pre);
        const svg = getMainSurface(container);
        assertNotNull(svg);

        expect(pre.textContent).toBe('6');

        // Once the chart receives focus, the tooltip should display
        act(() => svg.focus());
        expectTooltipPayload(container, 'Page A', ['uv : 400']);

        arrowRight(svg);
        expectTooltipPayload(container, 'Page B', ['uv : 300']);

        // Page C
        arrowRight(svg);

        // Page D
        arrowRight(svg);

        // Page E
        arrowRight(svg);

        // Page F
        arrowRight(svg);
        expectTooltipPayload(container, 'Page F', ['uv : 189']);

        clickOn3(container);
        expect(pre.textContent).toBe('3');

        // The chart only goes from A - C now, so the AccessibilityManager should think "C" is active.
        expectTooltipPayload(container, 'Page C', ['uv : 300']);

        arrowLeft(svg);
        // after next arrow, it should follow the new data length, and not iterate through all the previous items that are now gone
        expectTooltipPayload(container, 'Page B', ['uv : 300']);

        clickOn5(container);
        expect(pre.textContent).toBe('5');

        // The chart now goes from A - E. Since the focus was already on B, B can remain active.
        expectTooltipPayload(container, 'Page B', ['uv : 300']);

        arrowRight(svg);
        expectTooltipPayload(container, 'Page C', ['uv : 300']);

        arrowRight(svg);
        expectTooltipPayload(container, 'Page D', ['uv : 200']);

        arrowRight(svg);
        expectTooltipPayload(container, 'Page E', ['uv : 278']);

        // The chart only goes from A - E, so we shouldn't be able to go right any further.
        arrowRight(svg);
        expectTooltipPayload(container, 'Page E', ['uv : 278']);
      });
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

      const svg = getMainSurface(container);
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

      const svg = getMainSurface(container);
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

      const svg = getMainSurface(container);
      assertNotNull(svg);
      const tooltip = getTooltip(container);

      expect(tooltip.textContent).toBe('');

      act(() => svg.focus());
      expect(tooltip).toHaveTextContent('Page A');

      arrowRight(svg);
      expect(tooltip).toHaveTextContent('Page B');

      const button = container.querySelector('button') as HTMLButtonElement;
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

      const svg = getMainSurface(container);
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

      const svg = getMainSurface(container);
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

      act(() => getMainSurface(container).focus());
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

      const svg = getMainSurface(container);
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

      const svg = getMainSurface(container);
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
  });

  describe('FunnelChart', () => {
    test('does not add tabindex and role to the svg element', () => {
      const { container } = render(
        <FunnelChart width={100} height={50} data={PageData} accessibilityLayer={accessibilityLayer}>
          <Funnel type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        </FunnelChart>,
      );

      const svg = getMainSurface(container);
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

      const svg = getMainSurface(container);
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

describe('AreaChart horizontal', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <AreaChart width={100} height={50} data={PageData}>
      <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      <Tooltip />
      <Legend />
      <XAxis dataKey="name" />
      <YAxis />
      {children}
    </AreaChart>
  ));

  test('When chart receives focus, show the tooltip for the first point', () => {
    const { container } = renderTestCase();

    expectTooltipNotVisible(container);
    const svg = getMainSurface(container);
    assertNotNull(svg);

    act(() => svg.focus());
    expectTooltipPayload(container, 'Page A', ['uv : 400']);
  });

  test('when arrow right is pressed, tooltip moves to second data point', () => {
    const { container } = renderTestCase();

    expectTooltipNotVisible(container);
    const svg = getMainSurface(container);
    assertNotNull(svg);

    act(() => svg.focus());
    expectTooltipPayload(container, 'Page A', ['uv : 400']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page B', ['uv : 300']);
  });

  test('should stay on the first index after pressing left', () => {
    const { container } = renderTestCase();

    expectTooltipNotVisible(container);
    const svg = getMainSurface(container);
    assertNotNull(svg);

    act(() => svg.focus());
    expectTooltipPayload(container, 'Page A', ['uv : 400']);

    arrowLeft(svg);
    expectTooltipPayload(container, 'Page A', ['uv : 400']);
  });

  test('after it arrives at the end of the available data and then press arrow right again, it will continue showing the last item', () => {
    const { container } = renderTestCase();

    expectTooltipNotVisible(container);
    const svg = getMainSurface(container);
    assertNotNull(svg);

    act(() => svg.focus());
    expectTooltipPayload(container, 'Page A', ['uv : 400']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page B', ['uv : 300']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page C', ['uv : 300']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page D', ['uv : 200']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page E', ['uv : 278']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page F', ['uv : 189']);

    arrowRight(svg);
    expectTooltipPayload(container, 'Page F', ['uv : 189']);
  });
});

describe('AreaChart vertical', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <AreaChart width={100} height={50} data={PageData} layout="vertical">
      <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      <Tooltip />
      <Legend />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      {children}
    </AreaChart>
  ));

  test('When chart receives focus, show the tooltip for the first point', () => {
    const { container } = renderTestCase();

    expectTooltipNotVisible(container);

    // Once the chart receives focus, the tooltip should display
    act(() => getMainSurface(container).focus());

    expectTooltipPayload(container, 'Page A', ['uv : 400']);
  });
});
