import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Scatter, Customized, ScatterChart, XAxis, YAxis, ScatterProps, ZAxis, Tooltip } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { useAppSelector } from '../../src/state/hooks';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';
import { expectScatterPoints } from '../helper/expectScatterPoints';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { selectTooltipPayload } from '../../src/state/selectors/selectors';
import { selectActiveTooltipPayload } from '../../src/state/selectors/tooltipSelectors';
import { dataWithSpecialNameAndFillProperties, PageData } from '../_data';
import { ScatterSettings } from '../../src/state/types/ScatterSettings';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { userEventSetup } from '../helper/userEventSetup';
import { mockTouchingElement } from '../helper/mockTouchingElement';

describe('<Scatter />', () => {
  const data = [
    { cx: 10, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 50, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 90, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 130, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 170, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
  ];

  test('Render symbols in a simple Scatter', () => {
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter data={data} dataKey="cx" />
      </ScatterChart>,
    );

    expectScatterPoints(container, [
      {
        cx: '54',
        cy: '467.77777777777777',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(54, 467.77777777777777)',
        width: '9.0270333367641',
      },
      {
        cx: '152',
        cy: '358.8888888888889',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(152, 358.8888888888889)',
        width: '9.0270333367641',
      },
      {
        cx: '250',
        cy: '250',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(250, 250)',
        width: '9.0270333367641',
      },
      {
        cx: '348',
        cy: '141.11111111111111',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(348, 141.11111111111111)',
        width: '9.0270333367641',
      },
      {
        cx: '446',
        cy: '32.222222222222236',
        d: 'M0,0',
        height: '9.0270333367641',
        transform: 'translate(446, 32.222222222222236)',
        width: '9.0270333367641',
      },
    ]);
  });

  test('Can render in custom component', () => {
    const CustomScatter = (props: ScatterProps) => {
      return <Scatter {...props} />;
    };

    const { container } = render(
      <ScatterChart width={500} height={500}>
        <CustomScatter data={[]} />
      </ScatterChart>,
    );

    expectScatterPoints(container, []);
  });

  test("Don't render any symbols when data is empty", () => {
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter data={[]} />
      </ScatterChart>,
    );

    expectScatterPoints(container, []);
  });

  test('Render customized symbols when shape is set to be a ReactElement', () => {
    const CustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} shape={<CustomizedShape cx={0} cy={0} />} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized symbols when shape is set to be a function', () => {
    const renderCustomizedShape = ({ cx, cy }: { cx: number; cy: number }) => (
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    );
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} shape={renderCustomizedShape} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-shape')).toHaveLength(data.length);
  });

  test('Render customized line when line is set to be a ReactElement', () => {
    const CustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} line={<CustomizedLine />} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('Render customized line when line is set to be a function', () => {
    const renderCustomizedLine = () => <path d="M0,0L200,200" className="customized-line" />;
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} line={renderCustomizedLine} data={data} dataKey="size" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.customized-line')).toHaveLength(1);
  });

  test('mouse enter or mouse leave a symbol', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();

    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          data={data}
          dataKey="cx"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </ScatterChart>,
    );
    const symbol = container.querySelectorAll('.recharts-symbols')[4];
    assertNotNull(symbol);
    fireEvent.mouseEnter(symbol);
    expect(onMouseEnter).toHaveBeenCalled();
    fireEvent.mouseLeave(symbol);
    expect(onMouseLeave).toHaveBeenCalled();
    fireEvent.click(symbol);
    expect(onClick).toHaveBeenCalled();
  });

  it('should implicitly read `fill` property from the data array but not `name`', () => {
    const { container, queryByText } = render(
      <ScatterChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
        <Scatter dataKey="value" />
      </ScatterChart>,
    );
    expect.soft(queryByText('name1')).not.toBeInTheDocument();
    expect.soft(queryByText('name2')).not.toBeInTheDocument();
    expect.soft(queryByText('name3')).not.toBeInTheDocument();
    expect.soft(queryByText('name4')).not.toBeInTheDocument();
    expect.soft(container.querySelector('[fill="fill1"]')).toBeInTheDocument();
    expect.soft(container.querySelector('[fill="fill2"]')).toBeInTheDocument();
    expect.soft(container.querySelector('[fill="fill3"]')).toBeInTheDocument();
    expect.soft(container.querySelector('[fill="fill4"]')).toBeInTheDocument();
  });

  describe('with explicit ID prop', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} data={data} dataKey="cx" id="test-scatter-id" />
        <XAxis allowDataOverflow />
        {children}
      </ScatterChart>
    ));

    it('should pass id prop to an element in the DOM', () => {
      const { container } = renderTestCase();

      const scatter = container.querySelector('#test-scatter-id');
      assertNotNull(scatter);
      expect(scatter.tagName).toBe('g');
      expect(scatter.classList.value).toBe('recharts-layer recharts-scatter');
    });

    it('should set the ID on the clipPath, if it needs clipping', () => {
      const { container } = renderTestCase();

      const clipPath = container.querySelector('#clipPath-test-scatter-id');
      assertNotNull(clipPath);
      expect(clipPath.tagName).toBe('clipPath');
    });
  });

  describe('state integration', () => {
    it('should publish its configuration to redux store, and update it when the props change', () => {
      const settingsSpy = vi.fn();
      const Comp = (): null => {
        settingsSpy(useAppSelector(selectUnfilteredCartesianItems));
        return null;
      };
      const { rerender } = render(
        <ScatterChart height={400} width={400}>
          <Scatter data={data} dataKey="cx" xAxisId="xaxis id" yAxisId="yaxis id" zAxisId="zaxis id" />
          <Customized component={<Comp />} />
        </ScatterChart>,
      );

      const expected: ScatterSettings = {
        name: undefined,
        tooltipType: undefined,
        id: expect.stringMatching('scatter-'),
        isPanorama: false,
        type: 'scatter',
        data,
        dataKey: 'cx',
        hide: false,
        xAxisId: 'xaxis id',
        yAxisId: 'yaxis id',
        zAxisId: 'zaxis id',
      };
      expect(settingsSpy).toHaveBeenLastCalledWith([expected]);
      expect(settingsSpy).toHaveBeenCalledTimes(2);

      rerender(
        <ScatterChart height={400} width={400}>
          <Scatter data={data} dataKey="cx" xAxisId="xaxis id" yAxisId="yaxis id" zAxisId="zaxis id" name="new name" />
          <Customized component={<Comp />} />
        </ScatterChart>,
      );

      const expectedWithName: ScatterSettings = {
        ...expected,
        name: 'new name',
      };
      expect(settingsSpy).toHaveBeenLastCalledWith([expectedWithName]);
      expect(settingsSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe('events', () => {
    it('should fire onClick event when clicking on a scatter point', async () => {
      const user = userEventSetup();
      const handleClick = vi.fn();
      const { container } = render(
        <ScatterChart width={500} height={500}>
          <Scatter data={data} dataKey="cx" onClick={handleClick} />
        </ScatterChart>,
      );

      const scatterPoints = container.querySelectorAll('.recharts-symbols');
      await user.click(scatterPoints[0]);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleClick,
        {
          cx: 54,
          cy: 467.77777777777777,
          height: 9.0270333367641,
          node: { x: 10, y: 10, z: '-' },
          payload: {
            cx: 10,
            cy: 50,
            payload: { x: 12, y: 23, z: 78 },
            size: 64,
          },
          size: 0,
          tooltipPayload: [
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
          ],
          tooltipPosition: { x: 54, y: 467.77777777777777 },
          width: 9.0270333367641,
          x: 49.48648333161795,
          y: 463.2642611093957,
        },
        0,
        expect.any(Object),
      );
    });

    it('should fire onMouseOver and onMouseOut events when hovering over a scatter point', async () => {
      const user = userEventSetup();
      const handleMouseOver = vi.fn();
      const handleMouseOut = vi.fn();

      const { container } = render(
        <ScatterChart width={500} height={500}>
          <Scatter data={data} dataKey="cx" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        </ScatterChart>,
      );

      const scatterPoints = container.querySelectorAll('.recharts-symbols');
      await user.hover(scatterPoints[0]);
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOver,
        {
          cx: 54,
          cy: 467.77777777777777,
          height: 9.0270333367641,
          node: { x: 10, y: 10, z: '-' },
          payload: {
            cx: 10,
            cy: 50,
            payload: { x: 12, y: 23, z: 78 },
            size: 64,
          },
          size: 0,
          tooltipPayload: [
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
          ],
          tooltipPosition: { x: 54, y: 467.77777777777777 },
          width: 9.0270333367641,
          x: 49.48648333161795,
          y: 463.2642611093957,
        },
        0,
        expect.any(Object),
      );

      await user.unhover(scatterPoints[0]);
      expect(handleMouseOut).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleMouseOut,
        {
          cx: 54,
          cy: 467.77777777777777,
          height: 9.0270333367641,
          node: { x: 10, y: 10, z: '-' },
          payload: {
            cx: 10,
            cy: 50,
            payload: { x: 12, y: 23, z: 78 },
            size: 64,
          },
          size: 0,
          tooltipPayload: [
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
          ],
          tooltipPosition: { x: 54, y: 467.77777777777777 },
          width: 9.0270333367641,
          x: 49.48648333161795,
          y: 463.2642611093957,
        },
        0,
        expect.any(Object),
      );
    });

    it('should fire onTouchMove and onTouchEnd events when touching a scatter point', async () => {
      mockTouchingElement('0', 'cx');
      const handleTouchMove = vi.fn();
      const handleTouchEnd = vi.fn();

      const { container } = render(
        <ScatterChart width={500} height={500}>
          <Scatter data={data} dataKey="cx" onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />
        </ScatterChart>,
      );

      const scatterPoints = container.querySelectorAll('.recharts-symbols');
      fireEvent.touchMove(scatterPoints[0], { touches: [{ clientX: 200, clientY: 200 }] });
      expect(handleTouchMove).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleTouchMove,
        {
          cx: 54,
          cy: 467.77777777777777,
          height: 9.0270333367641,
          node: { x: 10, y: 10, z: '-' },
          payload: {
            cx: 10,
            cy: 50,
            payload: { x: 12, y: 23, z: 78 },
            size: 64,
          },
          size: 0,
          tooltipPayload: [
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
          ],
          tooltipPosition: { x: 54, y: 467.77777777777777 },
          width: 9.0270333367641,
          x: 49.48648333161795,
          y: 463.2642611093957,
        },
        0,
        expect.any(Object),
      );

      fireEvent.touchEnd(scatterPoints[0], { changedTouches: [{ clientX: 200, clientY: 200 }] });
      expect(handleTouchEnd).toHaveBeenCalledTimes(1);
      expectLastCalledWith(
        handleTouchEnd,
        {
          cx: 54,
          cy: 467.77777777777777,
          height: 9.0270333367641,
          node: { x: 10, y: 10, z: '-' },
          payload: {
            cx: 10,
            cy: 50,
            payload: { x: 12, y: 23, z: 78 },
            size: 64,
          },
          size: 0,
          tooltipPayload: [
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
            {
              dataKey: 'cx',
              graphicalItemId: expect.any(String),
              name: undefined,
              payload: {
                cx: 10,
                cy: 50,
                payload: { x: 12, y: 23, z: 78 },
                size: 64,
              },
              type: undefined,
              unit: '',
              value: 10,
            },
          ],
          tooltipPosition: { x: 54, y: 467.77777777777777 },
          width: 9.0270333367641,
          x: 49.48648333161795,
          y: 463.2642611093957,
        },
        0,
        expect.any(Object),
      );
    });
  });

  describe('Tooltip integration', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={100} height={100}>
        <Scatter isAnimationActive={false} data={PageData} />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv" />
        {children}
      </ScatterChart>
    ));

    it('should return tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '0'));
      expectLastCalledWith(spy, [
        {
          color: undefined,
          dataKey: 'uv',
          graphicalItemId: expect.any(String),
          fill: undefined,
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 400,
        },
        {
          color: undefined,
          dataKey: 'pv',
          graphicalItemId: expect.any(String),
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        },
      ]);
    });
  });

  describe('Multiple Scatter components tooltip filtering', () => {
    it('should only show tooltip data from the hovered Scatter component', () => {
      const data01 = [
        { x: 10, y: 20, z: 30 },
        { x: 20, y: 30, z: 40 },
      ];
      const data02 = [
        { x: 15, y: 25, z: 35 },
        { x: 25, y: 35, z: 45 },
      ];

      const renderTooltipTestCase = createSelectorTestCase(({ children }) => (
        <ScatterChart width={400} height={400}>
          <XAxis dataKey="x" type="number" allowDecimals={false} />
          <YAxis dataKey="y" type="number" allowDecimals={false} />
          <ZAxis dataKey="z" type="number" range={[64, 144]} />
          <Tooltip cursor={false} />
          <Scatter name="A school" data={data01} fill="#8884d8" />
          <Scatter name="B school" data={data02} fill="#82ca9d" />
          {children}
        </ScatterChart>
      ));

      const { container, spy } = renderTooltipTestCase(selectActiveTooltipPayload);

      const scatterPoints = container.querySelectorAll('.recharts-symbols');
      fireEvent.mouseEnter(scatterPoints[0]);

      const payloadFromFirstScatter = spy.mock.calls.at(-1)?.[0];
      assertNotNull(payloadFromFirstScatter);
      expect(payloadFromFirstScatter).toEqual(
        expect.arrayContaining([expect.objectContaining({ payload: expect.objectContaining(data01[0]) })]),
      );
      expect(payloadFromFirstScatter).not.toEqual(
        expect.arrayContaining([expect.objectContaining({ payload: expect.objectContaining(data02[0]) })]),
      );

      fireEvent.mouseEnter(scatterPoints[2]);

      const payloadFromSecondScatter = spy.mock.calls.at(-1)?.[0];
      assertNotNull(payloadFromSecondScatter);
      expect(payloadFromSecondScatter).toEqual(
        expect.arrayContaining([expect.objectContaining({ payload: expect.objectContaining(data02[0]) })]),
      );
      expect(payloadFromSecondScatter).not.toEqual(
        expect.arrayContaining([expect.objectContaining({ payload: expect.objectContaining(data01[0]) })]),
      );
    });
  });
});
