import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
import { assertNotNull } from '../helper/assertNotNull';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { userEventSetup } from '../helper/userEventSetup';

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
        {/* @ts-expect-error Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
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
    assertNotNull(dotsWrapper);
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
    assertNotNull(dotsWrapper);
    expect(dotsWrapper.hasAttribute('clip-path')).toBe(true);
    expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-recharts-line');
  });

  describe('with explicit ID prop', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={500}>
        <Line isAnimationActive={false} data={data} dataKey="y" id="test-line-id" />
        <XAxis allowDataOverflow />
        {children}
      </LineChart>
    ));

    it('should pass id prop to an element in the DOM', () => {
      const { container } = renderTestCase();

      const line = container.querySelector('#test-line-id');
      assertNotNull(line);
      expect(line.tagName).toBe('path');
      expect(line.classList.value).toBe('recharts-curve recharts-line-curve');
    });

    it('should set the ID on the clipPath, if it needs clipping', () => {
      const { container } = renderTestCase();

      const clipPath = container.querySelector('#clipPath-test-line-id');
      assertNotNull(clipPath);
      expect(clipPath.tagName).toBe('clipPath');
    });
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

    expectLastCalledWith(spy, [
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

    expectLastCalledWith(spy, [
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

  describe('events', () => {
    const points = [
      {
        payload: { value: 100, x: 10, y: 50 },
        value: 50,
        x: 5,
        y: 86.66666666666666,
      },
      {
        payload: { value: 100, x: 50, y: 50 },
        value: 50,
        x: 127.5,
        y: 86.66666666666666,
      },
      {
        payload: { value: 100, x: 90, y: 50 },
        value: 50,
        x: 250,
        y: 86.66666666666666,
      },
      {
        payload: { value: 100, x: 130, y: 50 },
        value: 50,
        x: 372.5,
        y: 86.66666666666666,
      },
      {
        payload: { value: 100, x: 170, y: 50 },
        value: 50,
        x: 495,
        y: 86.66666666666666,
      },
    ];
    it('should fire onClick event when clicking on the line', async () => {
      const user = userEventSetup();
      const handleClick = vi.fn();
      const { container } = render(
        <LineChart width={500} height={500} data={data}>
          <Line isAnimationActive={false} dataKey="y" onClick={handleClick} />
        </LineChart>,
      );

      const linePath = container.querySelector('.recharts-line-curve');
      assertNotNull(linePath);
      await user.click(linePath);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleClick,
        {
          className: 'recharts-line-curve',
          clipPath: undefined,
          connectNulls: false,
          fill: 'none',
          height: 490,
          id: expect.stringMatching(/recharts-line-.*/),
          layout: 'horizontal',
          onClick: handleClick,
          pathRef: expect.objectContaining({
            current: expect.any(Object),
          }),
          stroke: '#3182bd',
          strokeDasharray: undefined,
          strokeWidth: 1,
          type: 'linear',
          width: 490,
          points,
        },
        expect.any(Object),
      );
    });

    it('should fire onMouseOver and onMouseOut events when hovering over the line', async () => {
      const user = userEventSetup();
      const handleMouseOver = vi.fn();
      const handleMouseOut = vi.fn();

      const { container } = render(
        <LineChart width={500} height={500} data={data}>
          <Line isAnimationActive={false} dataKey="y" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        </LineChart>,
      );

      const linePath = container.querySelector('.recharts-line-curve');
      assertNotNull(linePath);
      await user.hover(linePath);
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOver,
        {
          className: 'recharts-line-curve',
          clipPath: undefined,
          connectNulls: false,
          fill: 'none',
          height: 490,
          id: expect.stringMatching(/recharts-line-.*/),
          layout: 'horizontal',
          onMouseOut: handleMouseOut,
          onMouseOver: handleMouseOver,
          pathRef: expect.objectContaining({
            current: expect.any(Object),
          }),
          points,
          stroke: '#3182bd',
          strokeDasharray: undefined,
          strokeWidth: 1,
          type: 'linear',
          width: 490,
        },
        expect.any(Object),
      );

      await user.unhover(linePath);
      expect(handleMouseOut).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOut,
        {
          className: 'recharts-line-curve',
          clipPath: undefined,
          connectNulls: false,
          fill: 'none',
          height: 490,
          id: expect.stringMatching(/recharts-line-.*/),
          layout: 'horizontal',
          onMouseOut: handleMouseOut,
          onMouseOver: handleMouseOver,
          pathRef: expect.objectContaining({
            current: expect.any(Object),
          }),
          points,
          stroke: '#3182bd',
          strokeDasharray: undefined,
          strokeWidth: 1,
          type: 'linear',
          width: 490,
        },
        expect.any(Object),
      );
    });

    it('should fire onTouchMove and onTouchEnd events when touching the line', async () => {
      const handleTouchMove = vi.fn();
      const handleTouchEnd = vi.fn();

      const { container } = render(
        <LineChart width={500} height={500} data={data}>
          <Line isAnimationActive={false} dataKey="y" onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />
        </LineChart>,
      );

      const linePath = container.querySelector('.recharts-line-curve');
      assertNotNull(linePath);
      fireEvent.touchMove(linePath, { touches: [{ clientX: 200, clientY: 200 }] });
      expect(handleTouchMove).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleTouchMove,
        {
          className: 'recharts-line-curve',
          clipPath: undefined,
          connectNulls: false,
          fill: 'none',
          height: 490,
          id: expect.stringMatching(/recharts-line-.*/),
          layout: 'horizontal',
          onTouchEnd: handleTouchEnd,
          onTouchMove: handleTouchMove,
          pathRef: expect.objectContaining({
            current: expect.any(Object),
          }),
          points,
          stroke: '#3182bd',
          strokeDasharray: undefined,
          strokeWidth: 1,
          type: 'linear',
          width: 490,
        },
        expect.any(Object),
      );
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
      expectLastCalledWith(spy, [
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
