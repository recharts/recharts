import React from 'react';
import { render } from '@testing-library/react';
import { Bar, BarChart, Line, LineChart, ErrorBar, XAxis, YAxis } from '../../src';
import { mockAnimation, cleanupMockAnimation } from '../helper/animation-frame-helper';
import { expectXAxisTicks, expectYAxisTicks } from '../helper/expectAxisTicks';
import { AxisDomainType } from '../../src/util/types';

// asserts an error bar has both a start and end position
const assertErrorBars = (container: HTMLElement, barsExpected: number) => {
  const errorBars = container.querySelectorAll('.recharts-errorBar');
  expect(errorBars).toHaveLength(barsExpected);

  errorBars.forEach(bar => {
    const lineElements = bar.getElementsByTagName('line');

    for (let i = 0; i < lineElements.length; i++) {
      const line = lineElements[i];
      expect(line.getAttribute('y1')).toEqual(expect.any(String));
      expect(line.getAttribute('y2')).toEqual(expect.any(String));
      expect(line.getAttribute('x1')).toEqual(expect.any(String));
      expect(line.getAttribute('x2')).toEqual(expect.any(String));
    }
  });
};

function assertAnimationStyles(
  container: HTMLElement,
  animation: boolean = true,
  expectedStyles: { [key: string]: string } = {},
) {
  const errorBars = container.querySelectorAll('.recharts-errorBar');
  errorBars.forEach(bar => {
    const lineElements = bar.querySelectorAll('line');
    lineElements.forEach(line => {
      if (animation) {
        const style = line.getAttribute('style');
        Object.entries(expectedStyles).forEach(([key, value]) => {
          expect(style).toContain(`${key}: ${value}`);
        });
      } else {
        expect(line.getAttribute('style')).toBeNull();
      }
    });
  });
}

describe('<ErrorBar />', () => {
  const barData = [
    { name: 'food', uv: 2000, pv: 2013, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, time: 2, uvError: [120, 140], pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, time: 4, uvError: [100, 200], pvError: 30 },
  ];

  beforeEach(() => {
    mockAnimation();
  });

  afterEach(() => {
    cleanupMockAnimation();
  });

  test('Renders Error Bars in Bar', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
  });

  test('Renders Multiple Error Bars in Bar', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500} layout="vertical">
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" direction="x" />
          <ErrorBar dataKey="pvError" direction="x" />
        </Bar>
        {/* Axes are needed in order to actually render anything useful in a vertical chart */}
        <XAxis dataKey="uv" type="number" />
        <YAxis dataKey="name" type="category" />
      </BarChart>,
    );

    assertErrorBars(container, 8);
  });

  test('Renders Error Bars in stacked Bar', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv" stackId="1">
          <ErrorBar dataKey="uvError" />
        </Bar>
        <Bar isAnimationActive={false} dataKey="pv" stackId="1">
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 8);
  });

  const lineData = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20], pvError: [90, 40] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40], pvError: [75, 20] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40, pvError: 20 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20, pvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28, pvError: 40 },
  ];

  test('Renders Error Bars in Line', () => {
    const { container } = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
        </Line>
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(5);
  });

  test('Renders Multiple Error Bars in Line', () => {
    const { container } = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
          <ErrorBar dataKey="pvError" />
        </Line>
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(10);
  });

  test('Renders Error Bars with animation', async () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms ease-in-out,transform-origin 400ms ease-in-out',
      transform: 'scaleY(1)',
    });
  });

  test('Renders Error Bars without animation', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive={false} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
    assertAnimationStyles(container, false);
  });

  test('Renders Error Bars with animation delay', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive begin={200} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms ease-in-out,transform-origin 400ms ease-in-out',
      transform: 'scaleY(1)',
    });

    const errorBars = container.querySelectorAll('.recharts-errorBar');
    errorBars.forEach(bar => {
      expect(bar.getAttribute('begin')).toBe('200');
    });
  });

  test('Renders Error Bars with animation duration', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive animationDuration={400} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms ease-in-out,transform-origin 400ms ease-in-out',
      transform: 'scaleY(1)',
    });
  });

  test('Renders Error Bars with animation easing', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    assertErrorBars(container, 4);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms linear,transform-origin 400ms linear',
      transform: 'scaleY(1)',
    });
  });

  test.each(['category', undefined])('throws when direction=x and XAxis id type=%s', (domainType: AxisDomainType) => {
    expect(() => {
      render(
        <BarChart data={barData} width={500} height={500}>
          <XAxis dataKey="name" type={domainType} />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" direction="x" />
          </Bar>
        </BarChart>,
      );
    }).toThrow('Invariant failed: ErrorBar requires Axis type property to be "number".');
  });

  describe('ErrorBar and axis domain interaction', () => {
    test('ErrorBar should extend YAxis domain', () => {
      const { container, rerender } = render(
        <BarChart data={barData} width={500} height={500}>
          <YAxis dataKey="uv" />
          <Bar isAnimationActive={false} dataKey="uv" />
        </BarChart>,
      );

      assertErrorBars(container, 0);
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '495',
        },
        {
          textContent: '850',
          x: '57',
          y: '372.5',
        },
        {
          textContent: '1700',
          x: '57',
          y: '250',
        },
        {
          textContent: '2550',
          x: '57',
          y: '127.5',
        },
        {
          textContent: '3400',
          x: '57',
          y: '5',
        },
      ]);
      rerender(
        <BarChart data={barData} width={500} height={500}>
          <YAxis dataKey="uv" />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" />
          </Bar>
        </BarChart>,
      );
      assertErrorBars(container, 4);
      // these ticks are in the same position but going higher because the ErrorBar pushed YAxis domain
      expectYAxisTicks(container, [
        {
          textContent: '0',
          x: '57',
          y: '495',
        },
        {
          textContent: '900',
          x: '57',
          y: '372.5',
        },
        {
          textContent: '1800',
          x: '57',
          y: '250',
        },
        {
          textContent: '2700',
          x: '57',
          y: '127.5',
        },
        {
          textContent: '3600',
          x: '57',
          y: '5',
        },
      ]);
    });

    test('ErrorBar not extend XAxis domain - this looks like a bug to me!', () => {
      const { container, rerender } = render(
        <BarChart data={barData} width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Bar isAnimationActive={false} dataKey="uv" />
        </BarChart>,
      );

      assertErrorBars(container, 0);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '473',
        },
        {
          textContent: '850',
          x: '127.5',
          y: '473',
        },
        {
          textContent: '1700',
          x: '250',
          y: '473',
        },
        {
          textContent: '2550',
          x: '372.5',
          y: '473',
        },
        {
          textContent: '3400',
          x: '495',
          y: '473',
        },
      ]);
      rerender(
        <BarChart data={barData} width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" direction="x" />
          </Bar>
        </BarChart>,
      );
      assertErrorBars(container, 4);
      // IMHO the same extension should happen here, but it does not. The ticks are the exact same.
      // Perhaps the Redux refactor can fix it?
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '473',
        },
        {
          textContent: '850',
          x: '127.5',
          y: '473',
        },
        {
          textContent: '1700',
          x: '250',
          y: '473',
        },
        {
          textContent: '2550',
          x: '372.5',
          y: '473',
        },
        {
          textContent: '3400',
          x: '495',
          y: '473',
        },
      ]);
    });
  });
});
