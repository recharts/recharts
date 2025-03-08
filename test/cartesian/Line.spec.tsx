import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, test, beforeEach } from 'vitest';
import { Line, ErrorBar, LineChart, Customized, XAxis, LineProps, Tooltip } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectErrorBarsSettings } from '../../src/state/selectors/axisSelectors';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectTooltipPayload } from '../../src/state/selectors/selectors';
import { expectLines } from '../helper/expectLine';
import { PageData } from '../_data';
import { ActiveDotProps, ActiveDotType } from '../../src/util/types';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';

describe('<Line />', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  it('Renders a path in a simple Line', () => {
    const { container } = render(
      <LineChart width={500} height={500}>
        <Line isAnimationActive={false} data={data} dataKey="y" />
      </LineChart>,
    );

    expectLines(container, [{ d: 'M5,86.667L127.5,86.667L250,86.667L372.5,86.667L495,86.667' }]);
  });

  it('Does not fall into infinite loop if strokeDasharray is 0', () => {
    const { container } = render(
      <LineChart width={500} height={500}>
        <Line data={data} dataKey="y" strokeDasharray="0" />
      </LineChart>,
    );

    const line = container.querySelectorAll('.recharts-line-curve');
    expect(line).toHaveLength(1);

    expect(line[0].getAttribute('stroke-dasharray')).toEqual('0px 0px');
  });

  it('Can be rendered in custom component', () => {
    const CustomLine = (props: LineProps) => {
      return <Line {...props} />;
    };

    const { container } = render(
      <LineChart width={500} height={500}>
        <CustomLine isAnimationActive={false} data={data} dataKey="value" />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(5);
  });

  it('Does not throw when dot is null', () => {
    const { container } = render(
      <LineChart width={500} height={500}>
        {/* Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
        <Line isAnimationActive={false} data={data} dataKey="value" dot={null} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(0);
  });

  it('Does not render clip dot when clipDot is false', () => {
    const { container } = render(
      <LineChart width={500} height={500} data={data}>
        <Line isAnimationActive={false} dataKey="x" dot={{ clipDot: false }} />
        {/* Line must have an XAxis or YAxis in order for clips to render */}
        <XAxis allowDataOverflow />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);

    const dotsWrapper = container.querySelector('.recharts-line-dots');
    // Well this is confusing. When clipDot is false the className contains 'dots'. AKA clip path name includes what is showing, rather than what is clipped.
    expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-dots-recharts-line');
  });

  it('Does render clip dot when clipDot is true', () => {
    const { container } = render(
      <LineChart width={500} height={500} data={data}>
        <Line isAnimationActive={false} dataKey="x" dot={{ clipDot: true }} />
        {/* Line must have an XAxis or YAxis in order for clips to render */}
        <XAxis allowDataOverflow />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);

    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);

    const dotsWrapper = container.querySelector('.recharts-line-dots');
    expect(dotsWrapper.hasAttribute('clip-path')).toBe(true);
    expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-recharts-line');
  });

  it("Don't render any path when data is empty", () => {
    const { container } = render(
      <LineChart width={500} height={500}>
        <Line data={[]} />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(0);
  });

  it('should report its ErrorBars to state', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      spy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', 0)));
      return null;
    };
    render(
      <LineChart width={500} height={500}>
        <Line data={data} isAnimationActive={false} dataKey="y">
          <ErrorBar dataKey="x" />
        </Line>
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(spy).toHaveBeenLastCalledWith([
      {
        dataKey: 'x',
        // this defaults to y even in an absence of explicit prop
        direction: 'y',
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should report its ErrorBars to state in vertical chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      spy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', 0)));
      return null;
    };
    render(
      <LineChart width={500} height={500} layout="vertical">
        <Line data={data} isAnimationActive={false} dataKey="y">
          <ErrorBar dataKey="x" />
        </Line>
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(spy).toHaveBeenLastCalledWith([
      {
        dataKey: 'x',
        // in horizontal chart the default direction is y, in vertical it's x
        direction: 'x',
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  describe('activeDot', () => {
    test('Renders active dot when activeDot=true', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line activeDot type="monotone" dataKey="uv" />
          <Tooltip />
        </LineChart>,
      );

      showTooltip(container, lineChartMouseHoverTooltipSelector);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(1);
    });

    test('Renders no active dot when activeDot=false', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line activeDot={false} type="monotone" dataKey="uv" />
          <Tooltip />
        </LineChart>,
      );

      showTooltip(container, lineChartMouseHoverTooltipSelector);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(0);
    });

    test('passes props to activeDot function', () => {
      const spy: ActiveDotType = vi.fn();
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line activeDot={spy} type="monotone" dataKey="uv" />
          <Tooltip />
        </LineChart>,
      );

      expect(spy).toHaveBeenCalledTimes(0);

      showTooltip(container, lineChartMouseHoverTooltipSelector);

      const expectedProps: ActiveDotProps = {
        cx: 161,
        cy: 102.5,
        fill: '#3182bd',
        dataKey: 'uv',
        index: 2,
        payload: {
          amt: 2400,
          name: 'Page C',
          pv: 1398,
          uv: 300,
        },
        r: 4,
        stroke: '#fff',
        strokeWidth: 2,
        value: 300,
      };

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expectedProps);
    });
  });

  describe('Tooltip integration', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100}>
        <Line data={data} dataKey="y" isAnimationActive={false} />
        {children}
      </LineChart>
    ));

    it('should select tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#3182bd',
          dataKey: 'y',
          fill: '#fff',
          hide: false,
          name: 'y',
          nameKey: undefined,
          payload: {
            value: 100,
            x: 10,
            y: 50,
          },
          stroke: '#3182bd',
          strokeWidth: 1,
          type: undefined,
          unit: undefined,
          value: 50,
        },
      ]);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});
