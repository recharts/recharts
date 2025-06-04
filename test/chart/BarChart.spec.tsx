import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { beforeEach, describe, expect, it, test, vi } from 'vitest';
import { Bar, BarChart, BarProps, Brush, ComposedChart, Customized, Rectangle, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { expectTooltipPayload } from '../component/Tooltip/tooltipTestHelpers';
import { useChartHeight, useChartWidth, useMargin, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { expectBars } from '../helper/expectBars';
import {
  BarSettings,
  selectAllBarPositions,
  selectAllVisibleBars,
  selectBarCartesianAxisSize,
  selectBarPosition,
  selectBarRectangles,
  selectBarSizeList,
} from '../../src/state/selectors/barSelectors';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';
import { pageData } from '../../storybook/stories/data';
import { boxPlotData } from '../_data';
import { CartesianGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { BarRectangleItem } from '../../src/cartesian/Bar';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

import { useClipPathId } from '../../src/container/ClipPathProvider';
import { CartesianChartProps } from '../../src/util/types';

type DataType = {
  name: string;
  uv: number;
  pv: number;
};

function assertActiveBarInteractions(container: HTMLElement) {
  const chart = container.querySelector('.recharts-wrapper');
  assertNotNull(chart);

  fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });
  expect(container.querySelectorAll('.recharts-active-bar')).toHaveLength(1);

  fireEvent.mouseOut(chart);
  expect(container.querySelectorAll('.recharts-active-bar')).toHaveLength(0);
}

describe('<BarChart />', () => {
  const data: DataType[] = [
    { name: 'food', uv: 400, pv: 2400 },
    { name: 'cosmetic', uv: 300, pv: 4567 },
    { name: 'storage', uv: 300, pv: 1398 },
    { name: 'digital', uv: 200, pv: 9800 },
  ];

  type CustomLabelProps = Partial<{ x: number; y: number; index: number }>;

  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('labels', () => {
    test('Render 4 labels when label=true', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar isAnimationActive={false} dataKey="uv" label fill="#ff7300" />
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-label-list')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-label')).toHaveLength(4);
    });

    test('Renders 4 bar labels when label is set to be a react element', () => {
      const Label = (props: CustomLabelProps) => {
        const { x, y, index } = props;

        return (
          <text key={`label-${index}`} x={x} y={y} className="customized-label">
            test
          </text>
        );
      };

      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar isAnimationActive={false} dataKey="uv" fill="#ff7300" label={<Label />} />
        </BarChart>,
      );

      expect(container.querySelectorAll('.customized-label')).toHaveLength(4);
    });
  });

  describe('Tooltip', () => {
    test('Renders tooltip when Tooltip item is added', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" stackId="test" fill="#ff7300" />
          <Bar dataKey="pv" stackId="test" fill="#387908" />
          <Tooltip />
        </BarChart>,
      );
      // Both the default Tooltip as well as the Tooltip wrapper are rendered even if not visible
      expect(container.querySelectorAll('.recharts-default-tooltip')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-tooltip-wrapper')).toHaveLength(1);

      expectBars(container, []);
    });
  });

  describe('activeBar', () => {
    test('Does not render an active bar by default', () => {
      vi.useFakeTimers();

      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar dataKey="uv" stackId="test" fill="#ff7300" />
            <Tooltip />
          </BarChart>
          ,
        </div>,
      );

      const chart = container.querySelector('.recharts-wrapper');
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

      vi.advanceTimersByTime(100);
      const bar = container.querySelectorAll('.recharts-active-bar');
      expect(bar).toHaveLength(0);
    });

    test('Renders customized active bar when activeBar set to be a function', () => {
      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar
              dataKey="uv"
              stackId="test"
              fill="#ff7300"
              activeBar={(props: BarProps) => {
                // @ts-expect-error this should work but it doesn't because of the events injected into BarProps
                return <Rectangle {...props} name={String(props.name)} />;
              }}
            />
            <Tooltip />
          </BarChart>
          ,
        </div>,
      );

      assertActiveBarInteractions(container);
    });

    test('Renders customized active bar when activeBar set to be a ReactElement', () => {
      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={<Rectangle />} />
            <Tooltip />
          </BarChart>
          ,
        </div>,
      );

      assertActiveBarInteractions(container);
    });

    test('Renders customized active bar when activeBar is set to be a truthy boolean', () => {
      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar />
            <Tooltip />
          </BarChart>
          ,
        </div>,
      );

      assertActiveBarInteractions(container);
    });

    test('Does not render customized active bar when activeBar set to be a falsy boolean', () => {
      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={false} />
            <Tooltip />
          </BarChart>
        </div>,
      );

      const chart = container.querySelector('.recharts-wrapper');
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 100, clientY: 100 });

      vi.advanceTimersByTime(100);
      const bar = container.querySelectorAll('.recharts-active-bar');
      expect(bar).toHaveLength(0);
    });

    test('Renders customized active bar when activeBar set to be an object', () => {
      const { container } = render(
        <div style={{ height: 200, width: 700 }}>
          <BarChart width={700} height={200} data={data}>
            <Bar dataKey="uv" stackId="test" fill="#ff7300" activeBar={{ strokeWidth: 4, fill: 'green' }} />
            <Tooltip />
          </BarChart>
          ,
        </div>,
      );

      assertActiveBarInteractions(container);
    });
  });

  test('Render empty when data is empty', () => {
    const { container } = render(
      <BarChart width={100} height={50} data={[]}>
        <Bar dataKey="uv" label fill="#ff7300" />
      </BarChart>,
    );
    expect(container.querySelectorAll('path')).toHaveLength(0);
  });

  describe('shape', () => {
    test('Render customized shape when shape is set to be a react element', () => {
      const Shape = (props: any) => {
        const { x, y } = props;

        return <circle className="customized-shape" cx={x} cy={y} r={8} />;
      };
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" label fill="#ff7300" shape={<Shape />} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.customized-shape')).toHaveLength(4);
    });

    test('Render customized shape when shape is set to be a function', () => {
      const renderShape = (props: BarProps): React.ReactElement => {
        const { x, y } = props;

        return <circle className="customized-shape" cx={x} cy={y} r={8} />;
      };
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" label fill="#ff7300" shape={(props: BarProps) => renderShape(props)} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.customized-shape')).toHaveLength(4);
    });
  });

  describe('rendering bar rectangles', () => {
    const onePointData = [{ number: 1, name: 'food', uv: 400, pv: 2400 }];

    test('renders simple BarChart', () => {
      const barSettings: BarSettings = {
        barSize: undefined,
        data: undefined,
        dataKey: 'uv',
        maxBarSize: undefined,
        minPointSize: undefined,
        stackId: undefined,
      };
      const barSpy = vi.fn();
      const sizeListSpy = vi.fn();
      const Comp = (): null => {
        barSpy(useAppSelector(state => selectAllVisibleBars(state, 0, 0, false)));
        sizeListSpy(useAppSelector(state => selectBarSizeList(state, 0, 0, false, barSettings)));
        return null;
      };
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" isAnimationActive={false} />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      const expectedBar: CartesianGraphicalItemSettings = {
        isPanorama: false,
        barSize: undefined,
        data: null,
        dataKey: 'uv',
        errorBars: [],
        hide: false,
        stackId: undefined,
        type: 'bar',
        xAxisId: 0,
        yAxisId: 0,
        zAxisId: 0,
      };
      expect(barSpy).toHaveBeenLastCalledWith([expectedBar]);
      expect(barSpy).toHaveBeenCalledTimes(2);

      expect(sizeListSpy).toHaveBeenLastCalledWith([
        {
          barSize: undefined,
          dataKeys: ['uv'],
          stackId: undefined,
        },
      ]);
      expect(sizeListSpy).toHaveBeenCalledTimes(2);

      expectBars(container, [
        {
          d: 'M 7.25,5 h 18 v 40 h -18 Z',
          height: '40',
          radius: '0',
          width: '18',
          x: '7.25',
          y: '5',
        },
        {
          d: 'M 29.75,15 h 18 v 30 h -18 Z',
          height: '30',
          radius: '0',
          width: '18',
          x: '29.75',
          y: '15',
        },
        {
          d: 'M 52.25,15 h 18 v 30 h -18 Z',
          height: '30',
          radius: '0',
          width: '18',
          x: '52.25',
          y: '15',
        },
        {
          d: 'M 74.75,25 h 18 v 20 h -18 Z',
          height: '20',
          radius: '0',
          width: '18',
          x: '74.75',
          y: '25',
        },
      ]);
    });

    test('Renders BarChart with two Bars', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" isAnimationActive={false} />
          <Bar dataKey="pv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 7.25,43.4 h 7 v 1.6000000000000014 h -7 Z',
          height: '1.6000000000000014',
          radius: '0',
          width: '7',
          x: '7.25',
          y: '43.4',
        },
        {
          d: 'M 29.75,43.8 h 7 v 1.2000000000000028 h -7 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '7',
          x: '29.75',
          y: '43.8',
        },
        {
          d: 'M 52.25,43.8 h 7 v 1.2000000000000028 h -7 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '7',
          x: '52.25',
          y: '43.8',
        },
        {
          d: 'M 74.75,44.2 h 7 v 0.7999999999999972 h -7 Z',
          height: '0.7999999999999972',
          radius: '0',
          width: '7',
          x: '74.75',
          y: '44.2',
        },
        {
          d: 'M 18.25,35.400000000000006 h 7 v 9.599999999999994 h -7 Z',
          height: '9.599999999999994',
          radius: '0',
          width: '7',
          x: '18.25',
          y: '35.400000000000006',
        },
        {
          d: 'M 40.75,26.732 h 7 v 18.268 h -7 Z',
          height: '18.268',
          radius: '0',
          width: '7',
          x: '40.75',
          y: '26.732',
        },
        {
          d: 'M 63.25,39.407999999999994 h 7 v 5.592000000000006 h -7 Z',
          height: '5.592000000000006',
          radius: '0',
          width: '7',
          x: '63.25',
          y: '39.407999999999994',
        },
        {
          d: 'M 85.75,5.800000000000001 h 7 v 39.2 h -7 Z',
          height: '39.2',
          radius: '0',
          width: '7',
          x: '85.75',
          y: '5.800000000000001',
        },
      ]);
    });

    test("Don't renders any bars when no Bar item is added", () => {
      const { container } = render(<BarChart width={100} height={50} data={data} />);

      expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);
    });

    test('Renders 8 bars in a vertical BarChart', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 65,5.25 h 1.2000000000000028 v 1 h -1.2000000000000028 Z',
          height: '1',
          radius: '0',
          width: '1.2000000000000028',
          x: '65',
          y: '5.25',
        },
        {
          d: 'M 65,7.75 h 0.8999999999999915 v 1 h -0.8999999999999915 Z',
          height: '1',
          radius: '0',
          width: '0.8999999999999915',
          x: '65',
          y: '7.75',
        },
        {
          d: 'M 65,10.25 h 0.8999999999999915 v 1 h -0.8999999999999915 Z',
          height: '1',
          radius: '0',
          width: '0.8999999999999915',
          x: '65',
          y: '10.25',
        },
        {
          d: 'M 65,12.75 h 0.5999999999999943 v 1 h -0.5999999999999943 Z',
          height: '1',
          radius: '0',
          width: '0.5999999999999943',
          x: '65',
          y: '12.75',
        },
        {
          d: 'M 65,6.25 h 7.200000000000003 v 1 h -7.200000000000003 Z',
          height: '1',
          radius: '0',
          width: '7.200000000000003',
          x: '65',
          y: '6.25',
        },
        {
          d: 'M 65,8.75 h 13.700999999999993 v 1 h -13.700999999999993 Z',
          height: '1',
          radius: '0',
          width: '13.700999999999993',
          x: '65',
          y: '8.75',
        },
        {
          d: 'M 65,11.25 h 4.194000000000003 v 1 h -4.194000000000003 Z',
          height: '1',
          radius: '0',
          width: '4.194000000000003',
          x: '65',
          y: '11.25',
        },
        {
          d: 'M 65,13.75 h 29.39999999999999 v 1 h -29.39999999999999 Z',
          height: '1',
          radius: '0',
          width: '29.39999999999999',
          x: '65',
          y: '13.75',
        },
      ]);
    });

    test('Renders 8 bars in a stacked BarChart, Bars of the same category have the same name and same x pos', () => {
      const matchingStackConfig = [
        { name: 'food', firstBarIndex: 0, secondBarIndex: 4 },
        { name: 'cosmetic', firstBarIndex: 1, secondBarIndex: 5 },
        { name: 'storage', firstBarIndex: 2, secondBarIndex: 6 },
        { name: 'digital', firstBarIndex: 3, secondBarIndex: 7 },
      ];

      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <YAxis />
          <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" stackId="test" fill="#387908" isAnimationActive={false} />
        </BarChart>,
      );

      const rects = container.querySelectorAll('.recharts-rectangle');
      expect(rects).toHaveLength(8);

      matchingStackConfig.forEach(({ name, firstBarIndex, secondBarIndex }) => {
        // bar one and bar two should be the same category
        const barOne = rects[firstBarIndex];
        const barTwo = rects[secondBarIndex];
        expect(barOne.getAttribute('name')).toEqual(name);
        expect(barTwo.getAttribute('name')).toEqual(name);

        // these bars should have the same x (cannot compare y accurately as Y does not start from 0)
        expect(barOne.getAttribute('x')).toEqual(barTwo.getAttribute('x'));
      });

      expectBars(container, [
        {
          d: 'M 65.75,43.4 h 6 v 1.6000000000000014 h -6 Z',
          height: '1.6000000000000014',
          radius: '0',
          width: '6',
          x: '65.75',
          y: '43.4',
        },
        {
          d: 'M 73.25,43.8 h 6 v 1.2000000000000028 h -6 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '6',
          x: '73.25',
          y: '43.8',
        },
        {
          d: 'M 80.75,43.8 h 6 v 1.2000000000000028 h -6 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '6',
          x: '80.75',
          y: '43.8',
        },
        {
          d: 'M 88.25,44.2 h 6 v 0.7999999999999972 h -6 Z',
          height: '0.7999999999999972',
          radius: '0',
          width: '6',
          x: '88.25',
          y: '44.2',
        },
        {
          d: 'M 65.75,33.8 h 6 v 9.600000000000001 h -6 Z',
          height: '9.600000000000001',
          radius: '0',
          width: '6',
          x: '65.75',
          y: '33.8',
        },
        {
          d: 'M 73.25,25.531999999999996 h 6 v 18.268 h -6 Z',
          height: '18.268',
          radius: '0',
          width: '6',
          x: '73.25',
          y: '25.531999999999996',
        },
        {
          d: 'M 80.75,38.208 h 6 v 5.591999999999999 h -6 Z',
          height: '5.591999999999999',
          radius: '0',
          width: '6',
          x: '80.75',
          y: '38.208',
        },
        {
          d: 'M 88.25,5 h 6 v 39.2 h -6 Z',
          height: '39.2',
          radius: '0',
          width: '6',
          x: '88.25',
          y: '5',
        },
      ]);
    });

    describe('when stackId is a number', () => {
      const barSettings: BarSettings = {
        barSize: '',
        data,
        dataKey: 'pv',
        maxBarSize: 0,
        minPointSize: 0,
        stackId: '8',
      };
      const cells: never[] = [];

      const renderTestCase = createSelectorTestCase(({ children }) => (
        <BarChart width={100} height={50} data={data}>
          <YAxis />
          <Bar dataKey="uv" stackId={barSettings.stackId} fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" stackId={barSettings.stackId} fill="#387908" isAnimationActive={false} />
          {children}
        </BarChart>
      ));

      it('should select bars', () => {
        const { spy } = renderTestCase(state => selectBarRectangles(state, 0, 0, false, barSettings, cells));
        expect(spy).toHaveBeenLastCalledWith([
          {
            background: {
              height: 40,
              width: 0,
              x: 68.75,
              y: 5,
            },
            height: 9.600000000000001,
            name: 'food',
            payload: {
              name: 'food',
              pv: 2400,
              uv: 400,
            },
            pv: 2400,
            tooltipPosition: {
              x: 68.75,
              y: 38.599999999999994,
            },
            uv: 400,
            value: [400, 2800],
            width: 0,
            x: 68.75,
            y: 33.8,
          },
          {
            background: {
              height: 40,
              width: 0,
              x: 76.25,
              y: 5,
            },
            height: 18.268,
            name: 'cosmetic',
            payload: {
              name: 'cosmetic',
              pv: 4567,
              uv: 300,
            },
            pv: 4567,
            tooltipPosition: {
              x: 76.25,
              y: 34.666,
            },
            uv: 300,
            value: [300, 4867],
            width: 0,
            x: 76.25,
            y: 25.531999999999996,
          },
          {
            background: {
              height: 40,
              width: 0,
              x: 83.75,
              y: 5,
            },
            height: 5.591999999999999,
            name: 'storage',
            payload: {
              name: 'storage',
              pv: 1398,
              uv: 300,
            },
            pv: 1398,
            tooltipPosition: {
              x: 83.75,
              y: 41.004,
            },
            uv: 300,
            value: [300, 1698],
            width: 0,
            x: 83.75,
            y: 38.208,
          },
          {
            background: {
              height: 40,
              width: 0,
              x: 91.25,
              y: 5,
            },
            height: 39.2,
            name: 'digital',
            payload: {
              name: 'digital',
              pv: 9800,
              uv: 200,
            },
            pv: 9800,
            tooltipPosition: {
              x: 91.25,
              y: 24.6,
            },
            uv: 200,
            value: [200, 10000],
            width: 0,
            x: 91.25,
            y: 5,
          },
        ]);
      });

      it('should select bar size list', () => {
        const { spy } = renderTestCase(state => selectBarSizeList(state, 0, 0, false, barSettings));
        expect(spy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            dataKeys: ['uv', 'pv'],
            stackId: '8',
          },
        ]);
      });

      it('should select all bar positions', () => {
        const { spy } = renderTestCase(state => selectAllBarPositions(state, 0, 0, false, barSettings));
        expect(spy).toHaveBeenLastCalledWith([
          {
            dataKeys: ['uv', 'pv'],
            position: {
              offset: 3.75,
              size: 0,
            },
            stackId: '8',
          },
        ]);
      });

      it('should select bar position', () => {
        const { spy } = renderTestCase(state => selectBarPosition(state, 0, 0, false, barSettings));
        expect(spy).toHaveBeenLastCalledWith({
          offset: 3.75,
          size: 0,
        });
      });

      it('should render bars', () => {
        const matchingStackConfig = [
          { name: 'food', firstBarIndex: 0, secondBarIndex: 4 },
          { name: 'cosmetic', firstBarIndex: 1, secondBarIndex: 5 },
          { name: 'storage', firstBarIndex: 2, secondBarIndex: 6 },
          { name: 'digital', firstBarIndex: 3, secondBarIndex: 7 },
        ];

        const { container } = renderTestCase();

        const rects = container.querySelectorAll('.recharts-rectangle');
        expect(rects).toHaveLength(8);

        matchingStackConfig.forEach(({ name, firstBarIndex, secondBarIndex }) => {
          // bar one and bar two should be the same category
          const barOne = rects[firstBarIndex];
          const barTwo = rects[secondBarIndex];
          expect(barOne.getAttribute('name')).toEqual(name);
          expect(barTwo.getAttribute('name')).toEqual(name);

          // these bars should have the same x (cannot compare y accurately as Y does not start from 0)
          expect(barOne.getAttribute('x')).toEqual(barTwo.getAttribute('x'));
        });

        expectBars(container, [
          {
            d: 'M 65.75,43.4 h 6 v 1.6000000000000014 h -6 Z',
            height: '1.6000000000000014',
            radius: '0',
            width: '6',
            x: '65.75',
            y: '43.4',
          },
          {
            d: 'M 73.25,43.8 h 6 v 1.2000000000000028 h -6 Z',
            height: '1.2000000000000028',
            radius: '0',
            width: '6',
            x: '73.25',
            y: '43.8',
          },
          {
            d: 'M 80.75,43.8 h 6 v 1.2000000000000028 h -6 Z',
            height: '1.2000000000000028',
            radius: '0',
            width: '6',
            x: '80.75',
            y: '43.8',
          },
          {
            d: 'M 88.25,44.2 h 6 v 0.7999999999999972 h -6 Z',
            height: '0.7999999999999972',
            radius: '0',
            width: '6',
            x: '88.25',
            y: '44.2',
          },
          {
            d: 'M 65.75,33.8 h 6 v 9.600000000000001 h -6 Z',
            height: '9.600000000000001',
            radius: '0',
            width: '6',
            x: '65.75',
            y: '33.8',
          },
          {
            d: 'M 73.25,25.531999999999996 h 6 v 18.268 h -6 Z',
            height: '18.268',
            radius: '0',
            width: '6',
            x: '73.25',
            y: '25.531999999999996',
          },
          {
            d: 'M 80.75,38.208 h 6 v 5.591999999999999 h -6 Z',
            height: '5.591999999999999',
            radius: '0',
            width: '6',
            x: '80.75',
            y: '38.208',
          },
          {
            d: 'M 88.25,5 h 6 v 39.2 h -6 Z',
            height: '39.2',
            radius: '0',
            width: '6',
            x: '88.25',
            y: '5',
          },
        ]);
      });
    });

    test('Stacked bars are actually stacked', () => {
      let seriesOneBarOneEntry: BarRectangleItem, seriesTwoBarOneEntry: BarRectangleItem;
      const Spy = () => {
        const seriesOneResult = useAppSelector(state =>
          selectBarRectangles(
            state,
            0,
            0,
            false,
            {
              barSize: '',
              data,
              dataKey: 'uv',
              maxBarSize: 0,
              minPointSize: 0,
              stackId: 'test',
            },
            [],
          ),
        );
        const seriesTwoResult = useAppSelector(state =>
          selectBarRectangles(
            state,
            0,
            0,
            false,
            {
              barSize: '',
              data,
              dataKey: 'pv',
              maxBarSize: 0,
              minPointSize: 0,
              stackId: 'test',
            },
            [],
          ),
        );
        if (seriesOneResult != null) {
          [seriesOneBarOneEntry] = seriesOneResult;
        }
        if (seriesTwoResult != null) {
          [seriesTwoBarOneEntry] = seriesTwoResult;
        }
        return <></>;
      };

      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <YAxis />
          <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" stackId="test" fill="#387908" isAnimationActive={false}>
            <Spy />
          </Bar>
        </BarChart>,
      );

      // stacked bars should have values which are arrays, if they are not then they are not stacked
      expect(seriesOneBarOneEntry).toBeDefined();
      expect(seriesTwoBarOneEntry).toBeDefined();
      expect(seriesOneBarOneEntry.value).toEqual([0, 400]);
      expect(seriesTwoBarOneEntry.value).toEqual([400, 2800]);

      expectBars(container, [
        {
          d: 'M 65.75,43.4 h 6 v 1.6000000000000014 h -6 Z',
          height: '1.6000000000000014',
          radius: '0',
          width: '6',
          x: '65.75',
          y: '43.4',
        },
        {
          d: 'M 73.25,43.8 h 6 v 1.2000000000000028 h -6 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '6',
          x: '73.25',
          y: '43.8',
        },
        {
          d: 'M 80.75,43.8 h 6 v 1.2000000000000028 h -6 Z',
          height: '1.2000000000000028',
          radius: '0',
          width: '6',
          x: '80.75',
          y: '43.8',
        },
        {
          d: 'M 88.25,44.2 h 6 v 0.7999999999999972 h -6 Z',
          height: '0.7999999999999972',
          radius: '0',
          width: '6',
          x: '88.25',
          y: '44.2',
        },
        {
          d: 'M 65.75,33.8 h 6 v 9.600000000000001 h -6 Z',
          height: '9.600000000000001',
          radius: '0',
          width: '6',
          x: '65.75',
          y: '33.8',
        },
        {
          d: 'M 73.25,25.531999999999996 h 6 v 18.268 h -6 Z',
          height: '18.268',
          radius: '0',
          width: '6',
          x: '73.25',
          y: '25.531999999999996',
        },
        {
          d: 'M 80.75,38.208 h 6 v 5.591999999999999 h -6 Z',
          height: '5.591999999999999',
          radius: '0',
          width: '6',
          x: '80.75',
          y: '38.208',
        },
        {
          d: 'M 88.25,5 h 6 v 39.2 h -6 Z',
          height: '39.2',
          radius: '0',
          width: '6',
          x: '88.25',
          y: '5',
        },
      ]);
    });

    test('Renders 4 bars in a stacked BarChart which only have one Bar', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <YAxis />
          <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(4);
    });

    test('renders nothing if barSize is not specified in a numerical XAxis', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, []);
    });

    test('renders bars of default size if barSize is not set in categorical XAxis', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 14,5 h 72 v 10 h -72 Z',
          height: '10',
          radius: '0',
          width: '72',
          x: '14',
          y: '5',
        },
      ]);
    });

    test('renders a bar of custom width if size is specified', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 85,5 h 20 v 10 h -20 Z',
          height: '10',
          radius: '0',
          width: '20',
          x: '85',
          y: '5',
        },
      ]);
    });

    test('renders bar when barSize is set in %', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData} barSize="40%">
          <XAxis dataKey="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 32,5 h 36 v 10 h -36 Z',
          height: '10',
          radius: '0',
          width: '36',
          x: '32',
          y: '5',
        },
      ]);
    });

    test('prefers child item barSize if both child and global barSize are set', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} barSize={40} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 75,5 h 40 v 10 h -40 Z',
          height: '10',
          radius: '0',
          width: '40',
          x: '75',
          y: '5',
        },
      ]);
    });

    test('renders a smaller bar if maxBarSize is set, even in a numerical XAxis', () => {
      const barSizeListSpy = vi.fn();
      const barPositionsSpy = vi.fn();
      const totalAxisSizeSpy = vi.fn();

      const barSettings: BarSettings = {
        barSize: undefined,
        data: undefined,
        dataKey: 'uv',
        maxBarSize: 30,
        minPointSize: undefined,
        stackId: undefined,
      };

      const Comp = (): null => {
        barSizeListSpy(useAppSelector(state => selectBarSizeList(state, 0, 0, false, barSettings)));
        barPositionsSpy(useAppSelector(state => selectAllBarPositions(state, 0, 0, false, barSettings)));
        totalAxisSizeSpy(useAppSelector(state => selectBarCartesianAxisSize(state, 0, 0)));
        return null;
      };

      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey={barSettings.dataKey} name="uv" isAnimationActive={false} maxBarSize={barSettings.maxBarSize} />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expect(barSizeListSpy).toHaveBeenLastCalledWith([
        {
          barSize: undefined,
          dataKeys: ['uv'],
          stackId: undefined,
        },
      ]);

      expect(totalAxisSizeSpy).toHaveBeenLastCalledWith(90);

      expect(barPositionsSpy).toHaveBeenLastCalledWith([
        {
          position: {
            offset: -12,
            size: 24,
          },
          dataKeys: ['uv'],
          stackId: undefined,
        },
      ]);

      expectBars(container, [
        {
          d: 'M 83,5 h 24 v 10 h -24 Z',
          height: '10',
          radius: '0',
          // Why does maxBarSize 30 produce width 24 bar?
          width: '24',
          x: '83',
          y: '5',
        },
      ]);
    });

    test('renders a smaller bar if maxBarSize is set with categorical XAxis', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} maxBarSize={40} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 30,5 h 40 v 10 h -40 Z',
          height: '10',
          radius: '0',
          width: '40',
          x: '30',
          y: '5',
        },
      ]);
    });

    test('if graphical item barSize is larger than maxBarSize then the barSize should win', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} barSize={60} maxBarSize={40} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 20,5 h 60 v 10 h -60 Z',
          height: '10',
          radius: '0',
          width: '60',
          x: '20',
          y: '5',
        },
      ]);
    });

    test('if chart root barSize is larger than maxBarSize then the barSize should win', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData} barSize={60}>
          <XAxis dataKey="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} maxBarSize={40} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 20,5 h 60 v 10 h -60 Z',
          height: '10',
          radius: '0',
          width: '60',
          x: '20',
          y: '5',
        },
      ]);
    });

    /**
     * https://codesandbox.io/p/sandbox/barchart-with-multiple-bars-and-multiple-axes-hjfjdt
     */
    describe('in horizontal chart', () => {
      test('renders overlapping bars when there are multiple XAxes', () => {
        const allCartesianGraphicalItemsSpy = vi.fn();
        const axisOneBarsSpy = vi.fn();
        const axisTwoBarsSpy = vi.fn();

        const Comp = (): null => {
          allCartesianGraphicalItemsSpy(useAppSelector(selectUnfilteredCartesianItems));
          axisOneBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 'one', 0, false)));
          axisTwoBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 'two', 0, false)));
          return null;
        };

        const { container } = render(
          <BarChart width={800} height={400} data={data}>
            <Bar dataKey="uv" fill="green" xAxisId="one" barSize={50} isAnimationActive={false} />
            <XAxis xAxisId="one" />
            {/* The smaller bar must be rendered in front of the larger one to be visible. */}
            <Bar dataKey="pv" fill="red" xAxisId="two" barSize={30} isAnimationActive={false} />
            <XAxis xAxisId="two" hide />

            <Customized component={<Comp />} />
          </BarChart>,
        );

        const expectedItems: ReadonlyArray<CartesianGraphicalItemSettings> = [
          {
            isPanorama: false,
            barSize: 50,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 'one',
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 'two',
            yAxisId: 0,
            zAxisId: 0,
          },
        ];
        expect(allCartesianGraphicalItemsSpy).toHaveBeenLastCalledWith(expectedItems);
        expect(allCartesianGraphicalItemsSpy).toHaveBeenCalledTimes(2);

        expect(axisOneBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 50,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 'one',
            yAxisId: 0,
            zAxisId: 0,
          },
        ]);
        expect(axisOneBarsSpy).toHaveBeenCalledTimes(2);
        expect(axisTwoBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 'two',
            yAxisId: 0,
            zAxisId: 0,
          },
        ]);
        expect(axisTwoBarsSpy).toHaveBeenCalledTimes(2);

        expectBars(container, [
          {
            d: 'M 78,350.59999999999997 h 50 v 14.400000000000034 h -50 Z',
            height: '14.400000000000034',
            radius: '0',
            width: '50',
            x: '78',
            y: '350.59999999999997',
          },
          {
            d: 'M 275.5,354.2 h 50 v 10.800000000000011 h -50 Z',
            height: '10.800000000000011',
            radius: '0',
            width: '50',
            x: '275.5',
            y: '354.2',
          },
          {
            d: 'M 473,354.2 h 50 v 10.800000000000011 h -50 Z',
            height: '10.800000000000011',
            radius: '0',
            width: '50',
            x: '473',
            y: '354.2',
          },
          {
            d: 'M 670.5,357.8 h 50 v 7.199999999999989 h -50 Z',
            height: '7.199999999999989',
            radius: '0',
            width: '50',
            x: '670.5',
            y: '357.8',
          },
          {
            d: 'M 88,278.59999999999997 h 30 v 86.40000000000003 h -30 Z',
            height: '86.40000000000003',
            radius: '0',
            width: '30',
            x: '88',
            y: '278.59999999999997',
          },
          {
            d: 'M 285.5,200.588 h 30 v 164.412 h -30 Z',
            height: '164.412',
            radius: '0',
            width: '30',
            x: '285.5',
            y: '200.588',
          },
          {
            d: 'M 483,314.672 h 30 v 50.327999999999975 h -30 Z',
            height: '50.327999999999975',
            radius: '0',
            width: '30',
            x: '483',
            y: '314.672',
          },
          {
            d: 'M 680.5,12.200000000000006 h 30 v 352.8 h -30 Z',
            height: '352.8',
            radius: '0',
            width: '30',
            x: '680.5',
            y: '12.200000000000006',
          },
        ]);
      });

      test('renders bars as neighbours when there are multiple YAxes', () => {
        const allCartesianGraphicalItemsSpy = vi.fn();
        const axisLeftBarsSpy = vi.fn();
        const axisRightBarsSpy = vi.fn();
        const barSizeListLeftSpy = vi.fn();
        const barSizeListRightSpy = vi.fn();

        const barPositionsLeftSpy = vi.fn();
        const barPositionsRightSpy = vi.fn();

        const leftBarSettings: BarSettings = {
          barSize: undefined,
          data: undefined,
          dataKey: 'pv',
          maxBarSize: undefined,
          minPointSize: undefined,
          stackId: undefined,
        };

        const rightBarSettings: BarSettings = {
          barSize: undefined,
          data: undefined,
          dataKey: 'uv',
          maxBarSize: undefined,
          minPointSize: undefined,
          stackId: undefined,
        };

        const Comp = (): null => {
          allCartesianGraphicalItemsSpy(useAppSelector(selectUnfilteredCartesianItems));
          axisLeftBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 0, 'left', false)));
          axisRightBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 0, 'right', false)));
          barSizeListLeftSpy(useAppSelector(state => selectBarSizeList(state, 0, 'left', false, leftBarSettings)));
          barSizeListRightSpy(useAppSelector(state => selectBarSizeList(state, 0, 'right', false, rightBarSettings)));
          barPositionsLeftSpy(useAppSelector(state => selectAllBarPositions(state, 0, 'left', false, leftBarSettings)));
          barPositionsRightSpy(
            useAppSelector(state => selectAllBarPositions(state, 0, 'right', false, rightBarSettings)),
          );
          return null;
        };

        const { container } = render(
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Bar yAxisId="left" dataKey={leftBarSettings.dataKey} isAnimationActive={false} />
            <Bar yAxisId="right" dataKey={rightBarSettings.dataKey} isAnimationActive={false} />
            <Customized component={<Comp />} />
          </BarChart>,
        );

        const expectedItems: ReadonlyArray<CartesianGraphicalItemSettings> = [
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'left',
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'right',
            zAxisId: 0,
          },
        ];
        expect(allCartesianGraphicalItemsSpy).toHaveBeenLastCalledWith(expectedItems);
        expect(allCartesianGraphicalItemsSpy).toHaveBeenCalledTimes(2);

        expect(axisLeftBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'left',
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'right',
            zAxisId: 0,
          },
        ]);
        expect(axisLeftBarsSpy).toHaveBeenCalledTimes(2);

        expect(axisRightBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'left',
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: undefined,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'right',
            zAxisId: 0,
          },
        ]);
        expect(axisRightBarsSpy).toHaveBeenCalledTimes(2);

        expect(barSizeListLeftSpy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            dataKeys: ['pv'],
            stackId: undefined,
          },
          {
            barSize: undefined,
            dataKeys: ['uv'],
            stackId: undefined,
          },
        ]);
        expect(barSizeListLeftSpy).toHaveBeenCalledTimes(2);

        expect(barSizeListRightSpy).toHaveBeenLastCalledWith([
          {
            barSize: undefined,
            dataKeys: ['pv'],
            stackId: undefined,
          },
          {
            barSize: undefined,
            dataKeys: ['uv'],
            stackId: undefined,
          },
        ]);
        expect(barSizeListRightSpy).toHaveBeenCalledTimes(2);

        expect(barPositionsLeftSpy).toHaveBeenLastCalledWith([
          {
            dataKeys: ['pv'],
            position: {
              offset: 9.25,
              size: 35,
            },
            stackId: undefined,
          },
          {
            dataKeys: ['uv'],
            position: {
              offset: 48.25,
              size: 35,
            },
            stackId: undefined,
          },
        ]);
        expect(barPositionsLeftSpy).toHaveBeenCalledTimes(2);

        expect(barPositionsRightSpy).toHaveBeenLastCalledWith([
          {
            dataKeys: ['pv'],
            position: {
              offset: 9.25,
              size: 35,
            },
            stackId: undefined,
          },
          {
            dataKeys: ['uv'],
            position: {
              offset: 48.25,
              size: 35,
            },
            stackId: undefined,
          },
        ]);
        expect(barPositionsRightSpy).toHaveBeenCalledTimes(2);

        expectBars(container, [
          {
            d: 'M 74.25,202.6 h 35 v 62.400000000000006 h -35 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '35',
            x: '74.25',
            y: '202.6',
          },
          {
            d: 'M 166.75,146.258 h 35 v 118.74199999999999 h -35 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '35',
            x: '166.75',
            y: '146.258',
          },
          {
            d: 'M 259.25,228.65200000000002 h 35 v 36.347999999999985 h -35 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '35',
            x: '259.25',
            y: '228.65200000000002',
          },
          {
            d: 'M 351.75,10.200000000000005 h 35 v 254.79999999999998 h -35 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '35',
            x: '351.75',
            y: '10.200000000000005',
          },
          {
            d: 'M 113.25,5 h 35 v 260 h -35 Z',
            height: '260',
            radius: '0',
            width: '35',
            x: '113.25',
            y: '5',
          },
          {
            d: 'M 205.75,70 h 35 v 195 h -35 Z',
            height: '195',
            radius: '0',
            width: '35',
            x: '205.75',
            y: '70',
          },
          {
            d: 'M 298.25,70 h 35 v 195 h -35 Z',
            height: '195',
            radius: '0',
            width: '35',
            x: '298.25',
            y: '70',
          },
          {
            d: 'M 390.75,135 h 35 v 130 h -35 Z',
            height: '130',
            radius: '0',
            width: '35',
            x: '390.75',
            y: '135',
          },
        ]);
      });
    });

    /**
     * https://codesandbox.io/p/sandbox/barchart-with-multiple-bars-and-multiple-axes-hjfjdt
     */
    describe('in vertical chart', () => {
      test('renders bars as neighbours when there are multiple XAxes', () => {
        const allCartesianGraphicalItemsSpy = vi.fn();
        const axisOneBarsSpy = vi.fn();
        const axisTwoBarsSpy = vi.fn();

        const Comp = (): null => {
          allCartesianGraphicalItemsSpy(useAppSelector(selectUnfilteredCartesianItems));
          axisOneBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 'one', 0, false)));
          axisTwoBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 'two', 0, false)));
          return null;
        };

        const { container } = render(
          <BarChart width={300} height={300} data={data} layout="vertical">
            <Bar dataKey="uv" xAxisId={2} fill="blue" barSize={40} isAnimationActive={false} />
            <Bar dataKey="pv" xAxisId={1} fill="green" barSize={30} isAnimationActive={false} />
            <XAxis xAxisId={1} type="number" />
            <XAxis xAxisId={2} type="number" orientation="top" />
            <YAxis type="category" />
            <Customized component={<Comp />} />
          </BarChart>,
        );

        const expectedItems: ReadonlyArray<CartesianGraphicalItemSettings> = [
          {
            isPanorama: false,
            barSize: 40,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 2,
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 1,
            yAxisId: 0,
            zAxisId: 0,
          },
        ];
        expect(allCartesianGraphicalItemsSpy).toHaveBeenLastCalledWith(expectedItems);
        expect(allCartesianGraphicalItemsSpy).toHaveBeenCalledTimes(2);

        expect(axisOneBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 40,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 2,
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 1,
            yAxisId: 0,
            zAxisId: 0,
          },
        ]);
        expect(axisOneBarsSpy).toHaveBeenCalledTimes(2);

        expect(axisTwoBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 40,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 2,
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 1,
            yAxisId: 0,
            zAxisId: 0,
          },
        ]);
        expect(axisTwoBarsSpy).toHaveBeenCalledTimes(2);

        expectBars(container, [
          {
            d: 'M 65,37 h 230 v 25.875 h -230 Z',
            height: '25.875',
            radius: '0',
            width: '230',
            x: '65',
            y: '37',
          },
          {
            d: 'M 65,94.5 h 172.5 v 25.875 h -172.5 Z',
            height: '25.875',
            radius: '0',
            width: '172.5',
            x: '65',
            y: '94.5',
          },
          {
            d: 'M 65,152 h 172.5 v 25.875 h -172.5 Z',
            height: '25.875',
            radius: '0',
            width: '172.5',
            x: '65',
            y: '152',
          },
          {
            d: 'M 65,209.5 h 115 v 25.875 h -115 Z',
            height: '25.875',
            radius: '0',
            width: '115',
            x: '65',
            y: '209.5',
          },
          {
            d: 'M 65,62.875 h 55.19999999999999 v 25.875 h -55.19999999999999 Z',
            height: '25.875',
            radius: '0',
            width: '55.19999999999999',
            x: '65',
            y: '62.875',
          },
          {
            d: 'M 65,120.375 h 105.041 v 25.875 h -105.041 Z',
            height: '25.875',
            radius: '0',
            width: '105.041',
            x: '65',
            y: '120.375',
          },
          {
            d: 'M 65,177.875 h 32.153999999999996 v 25.875 h -32.153999999999996 Z',
            height: '25.875',
            radius: '0',
            width: '32.153999999999996',
            x: '65',
            y: '177.875',
          },
          {
            d: 'M 65,235.375 h 225.40000000000003 v 25.875 h -225.40000000000003 Z',
            height: '25.875',
            radius: '0',
            width: '225.40000000000003',
            x: '65',
            y: '235.375',
          },
        ]);
      });

      test('renders overlapping bars when there are multiple YAxes', () => {
        const allCartesianGraphicalItemsSpy = vi.fn();
        const axisLeftBarsSpy = vi.fn();
        const axisRightBarsSpy = vi.fn();
        const barSizeListLeftSpy = vi.fn();
        const barSizeListRightSpy = vi.fn();

        const barPositionsLeftSpy = vi.fn();
        const barPositionsRightSpy = vi.fn();

        const leftBarSettings: BarSettings = {
          barSize: undefined,
          data: undefined,
          dataKey: 'pv',
          maxBarSize: undefined,
          minPointSize: undefined,
          stackId: undefined,
        };

        const rightBarSettings: BarSettings = {
          barSize: undefined,
          data: undefined,
          dataKey: 'uv',
          maxBarSize: undefined,
          minPointSize: undefined,
          stackId: undefined,
        };

        const Comp = (): null => {
          allCartesianGraphicalItemsSpy(useAppSelector(selectUnfilteredCartesianItems));
          axisLeftBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 0, 'left', false)));
          axisRightBarsSpy(useAppSelector(state => selectAllVisibleBars(state, 0, 'right', false)));
          barSizeListLeftSpy(useAppSelector(state => selectBarSizeList(state, 0, 'left', false, leftBarSettings)));
          barSizeListRightSpy(useAppSelector(state => selectBarSizeList(state, 0, 'right', false, rightBarSettings)));
          barPositionsLeftSpy(useAppSelector(state => selectAllBarPositions(state, 0, 'left', false, leftBarSettings)));
          barPositionsRightSpy(
            useAppSelector(state => selectAllBarPositions(state, 0, 'right', false, rightBarSettings)),
          );
          return null;
        };

        const { container } = render(
          <BarChart width={300} height={300} data={data} layout="vertical">
            <Bar dataKey="uv" yAxisId="left" fill="blue" barSize={30} isAnimationActive={false} />
            <Bar dataKey="pv" yAxisId="right" fill="green" barSize={20} isAnimationActive={false} />
            <YAxis yAxisId="left" orientation="left" type="category" />
            <YAxis yAxisId="right" orientation="right" hide type="category" />
            <XAxis type="number" />
            <Customized component={<Comp />} />
          </BarChart>,
        );

        const expectedItems: ReadonlyArray<CartesianGraphicalItemSettings> = [
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'left',
            zAxisId: 0,
          },
          {
            isPanorama: false,
            barSize: 20,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'right',
            zAxisId: 0,
          },
        ];
        expect(allCartesianGraphicalItemsSpy).toHaveBeenLastCalledWith(expectedItems);
        expect(allCartesianGraphicalItemsSpy).toHaveBeenCalledTimes(2);

        expect(axisLeftBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 30,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'left',
            zAxisId: 0,
          },
        ]);
        expect(axisLeftBarsSpy).toHaveBeenCalledTimes(2);

        expect(axisRightBarsSpy).toHaveBeenLastCalledWith([
          {
            isPanorama: false,
            barSize: 20,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            stackId: undefined,
            type: 'bar',
            xAxisId: 0,
            yAxisId: 'right',
            zAxisId: 0,
          },
        ]);
        expect(axisRightBarsSpy).toHaveBeenCalledTimes(2);

        expect(barSizeListLeftSpy).toHaveBeenLastCalledWith([
          {
            barSize: 30,
            dataKeys: ['uv'],
            stackId: undefined,
          },
        ]);
        expect(barSizeListLeftSpy).toHaveBeenCalledTimes(2);

        expect(barSizeListRightSpy).toHaveBeenLastCalledWith([
          {
            barSize: 20,
            dataKeys: ['pv'],
            stackId: undefined,
          },
        ]);
        expect(barSizeListRightSpy).toHaveBeenCalledTimes(2);

        expect(barPositionsLeftSpy).toHaveBeenLastCalledWith([
          {
            dataKeys: ['uv'],
            position: {
              offset: 17,
              size: 30,
            },
            stackId: undefined,
          },
        ]);
        expect(barPositionsLeftSpy).toHaveBeenCalledTimes(2);

        expect(barPositionsRightSpy).toHaveBeenLastCalledWith([
          {
            dataKeys: ['pv'],
            position: {
              offset: 22,
              size: 20,
            },
            stackId: undefined,
          },
        ]);
        expect(barPositionsRightSpy).toHaveBeenCalledTimes(2);

        expectBars(container, [
          {
            d: 'M 65,22 h 9.200000000000003 v 30 h -9.200000000000003 Z',
            height: '30',
            radius: '0',
            width: '9.200000000000003',
            x: '65',
            y: '22',
          },
          {
            d: 'M 65,87 h 6.8999999999999915 v 30 h -6.8999999999999915 Z',
            height: '30',
            radius: '0',
            width: '6.8999999999999915',
            x: '65',
            y: '87',
          },
          {
            d: 'M 65,152 h 6.8999999999999915 v 30 h -6.8999999999999915 Z',
            height: '30',
            radius: '0',
            width: '6.8999999999999915',
            x: '65',
            y: '152',
          },
          {
            d: 'M 65,217 h 4.599999999999994 v 30 h -4.599999999999994 Z',
            height: '30',
            radius: '0',
            width: '4.599999999999994',
            x: '65',
            y: '217',
          },
          {
            d: 'M 65,27 h 55.19999999999999 v 20 h -55.19999999999999 Z',
            height: '20',
            radius: '0',
            width: '55.19999999999999',
            x: '65',
            y: '27',
          },
          {
            d: 'M 65,92 h 105.041 v 20 h -105.041 Z',
            height: '20',
            radius: '0',
            width: '105.041',
            x: '65',
            y: '92',
          },
          {
            d: 'M 65,157 h 32.153999999999996 v 20 h -32.153999999999996 Z',
            height: '20',
            radius: '0',
            width: '32.153999999999996',
            x: '65',
            y: '157',
          },
          {
            d: 'M 65,222 h 225.40000000000003 v 20 h -225.40000000000003 Z',
            height: '20',
            radius: '0',
            width: '225.40000000000003',
            x: '65',
            y: '222',
          },
        ]);
      });
    });

    test('renders bars in Brush panorama', () => {
      const barPositionsSpy = vi.fn();

      const barSettings: BarSettings = {
        barSize: undefined,
        data: undefined,
        dataKey: 'uv',
        maxBarSize: 0,
        minPointSize: undefined,
        stackId: undefined,
      };

      const Comp = (): null => {
        barPositionsSpy(useAppSelector(state => selectAllBarPositions(state, 0, 0, false, barSettings)));
        return null;
      };

      const { container } = render(
        <ComposedChart width={800} height={400} data={pageData}>
          <Bar dataKey={barSettings.dataKey} isAnimationActive={false} />
          <Customized component={<Comp />} />

          <Brush>
            <ComposedChart data={pageData}>
              <Bar dataKey={barSettings.dataKey} isAnimationActive={false} />
            </ComposedChart>
          </Brush>
        </ComposedChart>,
      );

      expect(barPositionsSpy).toHaveBeenLastCalledWith([
        {
          dataKeys: ['uv'],
          position: {
            offset: 56.285714285714285,
            size: 0,
          },
          stackId: undefined,
        },
      ]);
      expect(barPositionsSpy).toHaveBeenCalledTimes(3);

      expectBars(container, [
        {
          d: 'M 16.285714285714285,225.9375 h 90 v 129.0625 h -90 Z',
          height: '129.0625',
          radius: '0',
          width: '90',
          x: '16.285714285714285',
          y: '225.9375',
        },
        {
          d: 'M 129.14285714285714,225.9375 h 90 v 129.0625 h -90 Z',
          height: '129.0625',
          radius: '0',
          width: '90',
          x: '129.14285714285714',
          y: '225.9375',
        },
        {
          d: 'M 242,165.125 h 90 v 189.875 h -90 Z',
          height: '189.875',
          radius: '0',
          width: '90',
          x: '242',
          y: '165.125',
        },
        {
          d: 'M 354.85714285714283,49.406249999999986 h 90 v 305.59375 h -90 Z',
          height: '305.59375',
          radius: '0',
          width: '90',
          x: '354.85714285714283',
          y: '49.406249999999986',
        },
        {
          d: 'M 467.7142857142857,31.249999999999986 h 90 v 323.75 h -90 Z',
          height: '323.75',
          radius: '0',
          width: '90',
          x: '467.7142857142857',
          y: '31.249999999999986',
        },
        {
          d: 'M 580.5714285714287,22.500000000000014 h 90 v 332.5 h -90 Z',
          height: '332.5',
          radius: '0',
          width: '90',
          x: '580.5714285714287',
          y: '22.500000000000014',
        },
        {
          d: 'M 693.4285714285714,48.75 h 90 v 306.25 h -90 Z',
          height: '306.25',
          radius: '0',
          width: '90',
          x: '693.4285714285714',
          y: '48.75',
        },
        {
          d: 'M 12.257142857142858,24.987499999999997 h 90 v 14.012500000000003 h -90 Z',
          height: '14.012500000000003',
          radius: '0',
          width: '90',
          x: '12.257142857142858',
          y: '24.987499999999997',
        },
        {
          d: 'M 124.82857142857142,24.987499999999997 h 90 v 14.012500000000003 h -90 Z',
          height: '14.012500000000003',
          radius: '0',
          width: '90',
          x: '124.82857142857142',
          y: '24.987499999999997',
        },
        {
          d: 'M 237.4,18.385 h 90 v 20.615 h -90 Z',
          height: '20.615',
          radius: '0',
          width: '90',
          x: '237.4',
          y: '18.385',
        },
        {
          d: 'M 349.9714285714286,5.821249999999998 h 90 v 33.17875 h -90 Z',
          height: '33.17875',
          radius: '0',
          width: '90',
          x: '349.9714285714286',
          y: '5.821249999999998',
        },
        {
          d: 'M 462.54285714285714,3.849999999999998 h 90 v 35.150000000000006 h -90 Z',
          height: '35.150000000000006',
          radius: '0',
          width: '90',
          x: '462.54285714285714',
          y: '3.849999999999998',
        },
        {
          d: 'M 575.1142857142858,2.9000000000000017 h 90 v 36.1 h -90 Z',
          height: '36.1',
          radius: '0',
          width: '90',
          x: '575.1142857142858',
          y: '2.9000000000000017',
        },
        {
          d: 'M 687.6857142857143,5.75 h 90 v 33.25 h -90 Z',
          height: '33.25',
          radius: '0',
          width: '90',
          x: '687.6857142857143',
          y: '5.75',
        },
      ]);
    });
  });

  test('should render whiskers in boxplot simulation', () => {
    const barPositionsSpy = vi.fn();
    const barRectanglesSpy = vi.fn();

    const topWhiskerBarSettings: BarSettings = {
      barSize: undefined,
      data: undefined,
      dataKey: 'topWhisker',
      maxBarSize: undefined,
      minPointSize: 0,
      stackId: 'a',
    };

    const Comp = (): null => {
      barPositionsSpy(useAppSelector(state => selectAllBarPositions(state, 0, 0, false, topWhiskerBarSettings)));
      barRectanglesSpy(
        useAppSelector(state => selectBarRectangles(state, 0, 0, false, topWhiskerBarSettings, undefined)),
      );
      return null;
    };

    const { container } = render(
      <ComposedChart width={400} height={200} data={boxPlotData}>
        <Bar stackId="a" dataKey="min" isAnimationActive={false} />
        <Bar stackId="a" dataKey="bar-min" isAnimationActive={false} />
        <Bar stackId="a" dataKey="bottomWhisker" isAnimationActive={false} />
        <Bar stackId="a" dataKey="bottomBox" isAnimationActive={false} />
        <Bar stackId="a" dataKey="bar-avg" isAnimationActive={false} />
        <Bar stackId="a" dataKey="topBox" isAnimationActive={false} />
        <Bar stackId="a" dataKey="topWhisker" isAnimationActive={false} />
        <Bar stackId="a" dataKey="bar-max" isAnimationActive={false} />

        <XAxis />
        <YAxis />

        <Customized component={<Comp />} />
      </ComposedChart>,
    );

    expect(barPositionsSpy).toHaveBeenLastCalledWith([
      {
        dataKeys: ['min', 'bar-min', 'bottomWhisker', 'bottomBox', 'bar-avg', 'topBox', 'topWhisker', 'bar-max'],
        position: {
          offset: 11,
          size: 88,
        },
        stackId: 'a',
      },
    ]);
    expect(barRectanglesSpy).toHaveBeenLastCalledWith([
      {
        average: 150,
        background: {
          height: 160,
          width: 88,
          x: 76,
          y: 5,
        },
        bottomBox: 50,
        bottomWhisker: 100,
        height: 40,
        min: 100,
        payload: {
          average: 150,
          bottomBox: 50,
          bottomWhisker: 100,
          min: 100,
          size: 150,
          topBox: 200,
          topWhisker: 200,
        },
        size: 150,
        tooltipPosition: {
          x: 120,
          y: 55,
        },
        topBox: 200,
        topWhisker: 200,
        value: [450, 650],
        width: 88,
        x: 76,
        y: 35,
      },
      {
        average: 550,
        background: {
          height: 160,
          width: 88,
          x: 186,
          y: 5,
        },
        bottomBox: 200,
        bottomWhisker: 200,
        height: 20,
        min: 200,
        payload: {
          average: 550,
          bottomBox: 200,
          bottomWhisker: 200,
          min: 200,
          size: 250,
          topBox: 100,
          topWhisker: 100,
        },
        size: 250,
        tooltipPosition: {
          x: 230,
          y: 15,
        },
        topBox: 100,
        topWhisker: 100,
        value: [700, 800],
        width: 88,
        x: 186,
        y: 5,
      },
      {
        average: 400,
        background: {
          height: 160,
          width: 88,
          x: 296,
          y: 5,
        },
        bottomBox: 200,
        bottomWhisker: 200,
        height: 40,
        min: 0,
        payload: {
          average: 400,
          bottomBox: 200,
          bottomWhisker: 200,
          min: 0,
          size: 350,
          topBox: 200,
          topWhisker: 200,
        },
        size: 350,
        tooltipPosition: {
          x: 340,
          y: 25,
        },
        topBox: 200,
        topWhisker: 200,
        value: [600, 800],
        width: 88,
        x: 296,
        y: 5,
      },
    ]);

    expectBars(container, [
      {
        d: 'M 76,145 h 88 v 20 h -88 Z',
        height: '20',
        radius: '0',
        width: '88',
        x: '76',
        y: '145',
      },
      {
        d: 'M 186,125 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '186',
        y: '125',
      },
      {
        d: 'M 76,125 h 88 v 20 h -88 Z',
        height: '20',
        radius: '0',
        width: '88',
        x: '76',
        y: '125',
      },
      {
        d: 'M 186,85 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '186',
        y: '85',
      },
      {
        d: 'M 296,125 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '296',
        y: '125',
      },
      {
        d: 'M 76,115 h 88 v 10 h -88 Z',
        height: '10',
        radius: '0',
        width: '88',
        x: '76',
        y: '115',
      },
      {
        d: 'M 186,45 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '186',
        y: '45',
      },
      {
        d: 'M 296,85 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '296',
        y: '85',
      },
      {
        d: 'M 76,75 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '76',
        y: '75',
      },
      {
        d: 'M 186,25 h 88 v 20 h -88 Z',
        height: '20',
        radius: '0',
        width: '88',
        x: '186',
        y: '25',
      },
      {
        d: 'M 296,45 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '296',
        y: '45',
      },
      {
        d: 'M 76,35 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '76',
        y: '35',
      },
      {
        d: 'M 186,5 h 88 v 20 h -88 Z',
        height: '20',
        radius: '0',
        width: '88',
        x: '186',
        y: '5',
      },
      {
        d: 'M 296,5 h 88 v 40 h -88 Z',
        height: '40',
        radius: '0',
        width: '88',
        x: '296',
        y: '5',
      },
    ]);
  });

  describe('bar categories', () => {
    it('should render bars grouped in a category if they share the same xAxis tick', () => {
      const { container } = render(
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="uv" isAnimationActive={false} />
          <Bar dataKey="pv" isAnimationActive={false} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 17.25,254.59999999999997 h 47 v 10.400000000000034 h -47 Z',
          height: '10.400000000000034',
          radius: '0',
          width: '47',
          x: '17.25',
          y: '254.59999999999997',
        },
        {
          d: 'M 139.75,257.2 h 47 v 7.800000000000011 h -47 Z',
          height: '7.800000000000011',
          radius: '0',
          width: '47',
          x: '139.75',
          y: '257.2',
        },
        {
          d: 'M 262.25,257.2 h 47 v 7.800000000000011 h -47 Z',
          height: '7.800000000000011',
          radius: '0',
          width: '47',
          x: '262.25',
          y: '257.2',
        },
        {
          d: 'M 384.75,259.8 h 47 v 5.199999999999989 h -47 Z',
          height: '5.199999999999989',
          radius: '0',
          width: '47',
          x: '384.75',
          y: '259.8',
        },
        {
          d: 'M 68.25,202.6 h 47 v 62.400000000000006 h -47 Z',
          height: '62.400000000000006',
          radius: '0',
          width: '47',
          x: '68.25',
          y: '202.6',
        },
        {
          d: 'M 190.75,146.258 h 47 v 118.74199999999999 h -47 Z',
          height: '118.74199999999999',
          radius: '0',
          width: '47',
          x: '190.75',
          y: '146.258',
        },
        {
          d: 'M 313.25,228.65200000000002 h 47 v 36.347999999999985 h -47 Z',
          height: '36.347999999999985',
          radius: '0',
          width: '47',
          x: '313.25',
          y: '228.65200000000002',
        },
        {
          d: 'M 435.75,10.200000000000005 h 47 v 254.79999999999998 h -47 Z',
          height: '254.79999999999998',
          radius: '0',
          width: '47',
          x: '435.75',
          y: '10.200000000000005',
        },
      ]);
    });

    describe('barGap as a number', () => {
      it('should increase the gap between bars in a category', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barGap={9}>
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 17.25,254.59999999999997 h 44 v 10.400000000000034 h -44 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '44',
            x: '17.25',
            y: '254.59999999999997',
          },
          {
            d: 'M 139.75,257.2 h 44 v 7.800000000000011 h -44 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '44',
            x: '139.75',
            y: '257.2',
          },
          {
            d: 'M 262.25,257.2 h 44 v 7.800000000000011 h -44 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '44',
            x: '262.25',
            y: '257.2',
          },
          {
            d: 'M 384.75,259.8 h 44 v 5.199999999999989 h -44 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '44',
            x: '384.75',
            y: '259.8',
          },
          {
            d: 'M 70.25,202.6 h 44 v 62.400000000000006 h -44 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '44',
            x: '70.25',
            y: '202.6',
          },
          {
            d: 'M 192.75,146.258 h 44 v 118.74199999999999 h -44 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '44',
            x: '192.75',
            y: '146.258',
          },
          {
            d: 'M 315.25,228.65200000000002 h 44 v 36.347999999999985 h -44 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '44',
            x: '315.25',
            y: '228.65200000000002',
          },
          {
            d: 'M 437.75,10.200000000000005 h 44 v 254.79999999999998 h -44 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '44',
            x: '437.75',
            y: '10.200000000000005',
          },
        ]);
      });

      it('should decrease the gap between bars in a category', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barGap={2}>
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 17.25,254.59999999999997 h 48 v 10.400000000000034 h -48 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '48',
            x: '17.25',
            y: '254.59999999999997',
          },
          {
            d: 'M 139.75,257.2 h 48 v 7.800000000000011 h -48 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '48',
            x: '139.75',
            y: '257.2',
          },
          {
            d: 'M 262.25,257.2 h 48 v 7.800000000000011 h -48 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '48',
            x: '262.25',
            y: '257.2',
          },
          {
            d: 'M 384.75,259.8 h 48 v 5.199999999999989 h -48 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '48',
            x: '384.75',
            y: '259.8',
          },
          {
            d: 'M 67.25,202.6 h 48 v 62.400000000000006 h -48 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '48',
            x: '67.25',
            y: '202.6',
          },
          {
            d: 'M 189.75,146.258 h 48 v 118.74199999999999 h -48 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '48',
            x: '189.75',
            y: '146.258',
          },
          {
            d: 'M 312.25,228.65200000000002 h 48 v 36.347999999999985 h -48 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '48',
            x: '312.25',
            y: '228.65200000000002',
          },
          {
            d: 'M 434.75,10.200000000000005 h 48 v 254.79999999999998 h -48 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '48',
            x: '434.75',
            y: '10.200000000000005',
          },
        ]);
      });
    });

    describe('barGap as a percentage', () => {
      it('should set the gap between bars in a category', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barGap="15%">
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 17.25,254.59999999999997 h 39 v 10.400000000000034 h -39 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '39',
            x: '17.25',
            y: '254.59999999999997',
          },
          {
            d: 'M 139.75,257.2 h 39 v 7.800000000000011 h -39 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '39',
            x: '139.75',
            y: '257.2',
          },
          {
            d: 'M 262.25,257.2 h 39 v 7.800000000000011 h -39 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '39',
            x: '262.25',
            y: '257.2',
          },
          {
            d: 'M 384.75,259.8 h 39 v 5.199999999999989 h -39 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '39',
            x: '384.75',
            y: '259.8',
          },
          {
            d: 'M 74.625,202.6 h 39 v 62.400000000000006 h -39 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '39',
            x: '74.625',
            y: '202.6',
          },
          {
            d: 'M 197.125,146.258 h 39 v 118.74199999999999 h -39 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '39',
            x: '197.125',
            y: '146.258',
          },
          {
            d: 'M 319.625,228.65200000000002 h 39 v 36.347999999999985 h -39 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '39',
            x: '319.625',
            y: '228.65200000000002',
          },
          {
            d: 'M 442.125,10.200000000000005 h 39 v 254.79999999999998 h -39 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '39',
            x: '442.125',
            y: '10.200000000000005',
          },
        ]);
      });
    });

    describe('barCategoryGap as a number', () => {
      it('should set the gap between bar categories', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barCategoryGap={9}>
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 14,254.59999999999997 h 50 v 10.400000000000034 h -50 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '50',
            x: '14',
            y: '254.59999999999997',
          },
          {
            d: 'M 136.5,257.2 h 50 v 7.800000000000011 h -50 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '50',
            x: '136.5',
            y: '257.2',
          },
          {
            d: 'M 259,257.2 h 50 v 7.800000000000011 h -50 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '50',
            x: '259',
            y: '257.2',
          },
          {
            d: 'M 381.5,259.8 h 50 v 5.199999999999989 h -50 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '50',
            x: '381.5',
            y: '259.8',
          },
          {
            d: 'M 68,202.6 h 50 v 62.400000000000006 h -50 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '50',
            x: '68',
            y: '202.6',
          },
          {
            d: 'M 190.5,146.258 h 50 v 118.74199999999999 h -50 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '50',
            x: '190.5',
            y: '146.258',
          },
          {
            d: 'M 313,228.65200000000002 h 50 v 36.347999999999985 h -50 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '50',
            x: '313',
            y: '228.65200000000002',
          },
          {
            d: 'M 435.5,10.200000000000005 h 50 v 254.79999999999998 h -50 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '50',
            x: '435.5',
            y: '10.200000000000005',
          },
        ]);
      });
    });

    describe('barCategoryGap as a percentage', () => {
      it('should increase the gap between bar categories', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barCategoryGap="25%">
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 35.625,254.59999999999997 h 28 v 10.400000000000034 h -28 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '28',
            x: '35.625',
            y: '254.59999999999997',
          },
          {
            d: 'M 158.125,257.2 h 28 v 7.800000000000011 h -28 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '28',
            x: '158.125',
            y: '257.2',
          },
          {
            d: 'M 280.625,257.2 h 28 v 7.800000000000011 h -28 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '28',
            x: '280.625',
            y: '257.2',
          },
          {
            d: 'M 403.125,259.8 h 28 v 5.199999999999989 h -28 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '28',
            x: '403.125',
            y: '259.8',
          },
          {
            d: 'M 67.625,202.6 h 28 v 62.400000000000006 h -28 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '28',
            x: '67.625',
            y: '202.6',
          },
          {
            d: 'M 190.125,146.258 h 28 v 118.74199999999999 h -28 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '28',
            x: '190.125',
            y: '146.258',
          },
          {
            d: 'M 312.625,228.65200000000002 h 28 v 36.347999999999985 h -28 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '28',
            x: '312.625',
            y: '228.65200000000002',
          },
          {
            d: 'M 435.125,10.200000000000005 h 28 v 254.79999999999998 h -28 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '28',
            x: '435.125',
            y: '10.200000000000005',
          },
        ]);
      });

      it('should decrease the gap between bar categories', () => {
        const { container } = render(
          <BarChart width={500} height={300} data={data} barCategoryGap="3%">
            <XAxis dataKey="name" />
            <Bar dataKey="uv" isAnimationActive={false} />
            <Bar dataKey="pv" isAnimationActive={false} />
          </BarChart>,
        );

        expectBars(container, [
          {
            d: 'M 8.675,254.59999999999997 h 55 v 10.400000000000034 h -55 Z',
            height: '10.400000000000034',
            radius: '0',
            width: '55',
            x: '8.675',
            y: '254.59999999999997',
          },
          {
            d: 'M 131.175,257.2 h 55 v 7.800000000000011 h -55 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '55',
            x: '131.175',
            y: '257.2',
          },
          {
            d: 'M 253.675,257.2 h 55 v 7.800000000000011 h -55 Z',
            height: '7.800000000000011',
            radius: '0',
            width: '55',
            x: '253.675',
            y: '257.2',
          },
          {
            d: 'M 376.175,259.8 h 55 v 5.199999999999989 h -55 Z',
            height: '5.199999999999989',
            radius: '0',
            width: '55',
            x: '376.175',
            y: '259.8',
          },
          {
            d: 'M 67.675,202.6 h 55 v 62.400000000000006 h -55 Z',
            height: '62.400000000000006',
            radius: '0',
            width: '55',
            x: '67.675',
            y: '202.6',
          },
          {
            d: 'M 190.175,146.258 h 55 v 118.74199999999999 h -55 Z',
            height: '118.74199999999999',
            radius: '0',
            width: '55',
            x: '190.175',
            y: '146.258',
          },
          {
            d: 'M 312.675,228.65200000000002 h 55 v 36.347999999999985 h -55 Z',
            height: '36.347999999999985',
            radius: '0',
            width: '55',
            x: '312.675',
            y: '228.65200000000002',
          },
          {
            d: 'M 435.175,10.200000000000005 h 55 v 254.79999999999998 h -55 Z',
            height: '254.79999999999998',
            radius: '0',
            width: '55',
            x: '435.175',
            y: '10.200000000000005',
          },
        ]);
      });
    });
  });

  // guard against negative values in clipPath - ref https://github.com/recharts/recharts/issues/2009
  test('Renders a (Bar) chart with less width than left, right margin and less height than top, bottom margin', () => {
    const { container } = render(
      <BarChart
        width={50}
        height={80}
        data={data}
        margin={{
          top: 50,
          right: 100,
          left: 100,
          bottom: 50,
        }}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
      </BarChart>,
    );

    // expect nothing to render because height and width are 0
    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);

    const clipPath = container.querySelector('defs clipPath');
    assertNotNull(clipPath);
    expect(clipPath.children[0]).not.toBeNull();

    // expect clipPath rect to have a width and height of 0
    expect(clipPath.children[0]).toHaveAttribute('width', '0');
    expect(clipPath.children[0]).toHaveAttribute('height', '0');

    expectBars(container, []);
  });

  test('renders chart when wrapped in a custom component', () => {
    const MyBarChart = (props: CartesianChartProps) => {
      return <BarChart {...props} />;
    };

    const { container } = render(
      <MyBarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" isAnimationActive={false} />
      </MyBarChart>,
    );

    expectBars(container, [
      {
        d: 'M 75.75,5 h 86 v 260 h -86 Z',
        height: '260',
        radius: '0',
        width: '86',
        x: '75.75',
        y: '5',
      },
      {
        d: 'M 183.25,70 h 86 v 195 h -86 Z',
        height: '195',
        radius: '0',
        width: '86',
        x: '183.25',
        y: '70',
      },
      {
        d: 'M 290.75,70 h 86 v 195 h -86 Z',
        height: '195',
        radius: '0',
        width: '86',
        x: '290.75',
        y: '70',
      },
      {
        d: 'M 398.25,135 h 86 v 130 h -86 Z',
        height: '130',
        radius: '0',
        width: '86',
        x: '398.25',
        y: '135',
      },
    ]);
  });

  describe('bar width', () => {
    it('renders one bar with a width for each data entry', () => {
      const data2 = [
        { x: 10, y: 10 },
        { x: 20, y: 20 },
      ];
      const { container } = render(
        <BarChart width={100} height={50} data={data2}>
          <Bar dataKey="y" fill="#ff7300" isAnimationActive={false} />
          <XAxis dataKey="x" />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 9.5,10 h 36 v 5 h -36 Z',
          height: '5',
          radius: '0',
          width: '36',
          x: '9.5',
          y: '10',
        },
        {
          d: 'M 54.5,5 h 36 v 10 h -36 Z',
          height: '10',
          radius: '0',
          width: '36',
          x: '54.5',
          y: '5',
        },
      ]);
    });

    it('renders one bar with a width for each data entry where two entries have duplicate XAxis coordinate', () => {
      const data2 = [
        { x: 10, y: 10 },
        { x: 10, y: 20 },
      ];
      const { container } = render(
        <BarChart width={100} height={50} data={data2}>
          <Bar dataKey="y" fill="#ff7300" isAnimationActive={false} />
          <XAxis dataKey="x" />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 9.5,10 h 36 v 5 h -36 Z',
          height: '5',
          radius: '0',
          width: '36',
          x: '9.5',
          y: '10',
        },
        {
          d: 'M 54.5,5 h 36 v 10 h -36 Z',
          height: '10',
          radius: '0',
          width: '36',
          x: '54.5',
          y: '5',
        },
      ]);
    });

    it('renders bars where two entries right next to each other have duplicate XAxis coordinate and type=number', () => {
      const data2 = [
        { x: 10, y: 10 },
        { x: 10, y: 20 },
      ];
      const { container } = render(
        <BarChart width={100} height={50} data={data2}>
          <Bar dataKey="y" fill="#ff7300" isAnimationActive={false} />
          <XAxis dataKey="x" />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 9.5,10 h 36 v 5 h -36 Z',
          height: '5',
          radius: '0',
          width: '36',
          x: '9.5',
          y: '10',
        },
        {
          d: 'M 54.5,5 h 36 v 10 h -36 Z',
          height: '10',
          radius: '0',
          width: '36',
          x: '54.5',
          y: '5',
        },
      ]);
    });
  });

  describe('BarChart layout context', () => {
    it('should provide viewBox', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useViewBox());
        return null;
      };
      render(
        <BarChart width={100} height={50}>
          <Comp />
        </BarChart>,
      );

      expect(spy).toHaveBeenCalledWith({ x: 5, y: 5, width: 90, height: 40 });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide clipPathId', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useClipPathId());
        return null;
      };
      render(
        <BarChart width={100} height={50}>
          <Comp />
        </BarChart>,
      );

      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should provide width', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartWidth());
        return null;
      };
      render(
        <BarChart width={100} height={50}>
          <Comp />
        </BarChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(100);
    });

    it('should provide height', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        spy(useChartHeight());
        return null;
      };
      render(
        <BarChart width={100} height={50}>
          <Comp />
        </BarChart>,
      );

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(50);
    });
  });

  describe('chart synchronization', () => {
    it('should render two independent charts by default', () => {
      const { container } = render(
        <>
          <BarChart width={100} height={50} data={data}>
            <Bar dataKey="uv" />
            <Tooltip />
          </BarChart>
          <BarChart width={100} height={50} data={data}>
            <Bar dataKey="pv" />
            <Tooltip />
          </BarChart>
        </>,
      );

      const barCharts = container.querySelectorAll('.recharts-wrapper');
      expect(barCharts).toHaveLength(2);
      const tooltips0 = container.querySelectorAll('.recharts-tooltip-wrapper');
      // all tooltip wrapper are in the document at all times, they just happen to be hidden sometimes
      expect(tooltips0).toHaveLength(2);
      expect(tooltips0[0]).not.toBeVisible();
      expect(tooltips0[1]).not.toBeVisible();

      fireEvent.mouseOver(barCharts[0], { clientX: 20, clientY: 20 });
      const tooltips1 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips1[0]).toBeVisible();
      expect(tooltips1[1]).not.toBeVisible();

      fireEvent.mouseOver(barCharts[1], { clientX: 20, clientY: 20 });
      const tooltips2 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips2[0]).toBeVisible();
      expectTooltipPayload(barCharts[0], '0', ['uv : 400']);
      expect(tooltips2[1]).toBeVisible();
      expectTooltipPayload(barCharts[1], '0', ['pv : 2400']);

      fireEvent.mouseOut(barCharts[0]);
      const tooltips3 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips3[0]).not.toBeVisible();
      expect(tooltips3[1]).toBeVisible();

      fireEvent.mouseOut(barCharts[1]);
      const tooltips4 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips4[0]).not.toBeVisible();
      expect(tooltips4[1]).not.toBeVisible();
    });

    it('should render two connected charts when given same syncId', () => {
      const { container } = render(
        <>
          <BarChart syncId={1} width={100} height={50} data={data}>
            <Bar dataKey="uv" />
            <Tooltip />
          </BarChart>
          <BarChart syncId={1} width={100} height={50} data={data}>
            <Bar dataKey="pv" />
            <Tooltip />
          </BarChart>
        </>,
      );

      const barCharts = container.querySelectorAll('.recharts-wrapper');
      expect(barCharts).toHaveLength(2);
      const tooltips0 = container.querySelectorAll('.recharts-tooltip-wrapper');
      // all tooltip wrapper are in the document at all times, they just happen to be hidden sometimes
      expect(tooltips0).toHaveLength(2);
      expect(tooltips0[0]).not.toBeVisible();
      expect(tooltips0[1]).not.toBeVisible();

      fireEvent.mouseOver(barCharts[0], { clientX: 20, clientY: 20 });
      const tooltips1 = container.querySelectorAll('.recharts-tooltip-wrapper');
      // Tooltips are synchronized, but each chart still shows their own data
      expect(tooltips1[0]).toBeVisible();
      expectTooltipPayload(barCharts[0], '0', ['uv : 400']);
      expect(tooltips1[1]).toBeVisible();
      expectTooltipPayload(barCharts[1], '0', ['pv : 2400']);

      fireEvent.mouseOver(barCharts[1], { clientX: 20, clientY: 20 });
      const tooltips2 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips2[0]).toBeVisible();
      expect(tooltips2[1]).toBeVisible();

      fireEvent.mouseOut(barCharts[0]);
      const tooltips3 = container.querySelectorAll('.recharts-tooltip-wrapper');
      // TODO: remove these waits. Right now with both Context and Redux there are too many re-renders.
      waitFor(() => expect(tooltips3[0]).not.toBeVisible());
      waitFor(() => expect(tooltips3[1]).not.toBeVisible());

      fireEvent.mouseOut(barCharts[1]);
      const tooltips4 = container.querySelectorAll('.recharts-tooltip-wrapper');
      expect(tooltips4[0]).not.toBeVisible();
      expect(tooltips4[1]).not.toBeVisible();
    });
  });

  describe('state integration', () => {
    it('should report margin, and update after it changes', () => {
      const marginSpy = vi.fn();
      const Comp = (): null => {
        marginSpy(useMargin());
        return null;
      };
      const { rerender } = render(
        <BarChart width={100} height={100} margin={{ top: 1, right: 2, bottom: 3, left: 4 }}>
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expect(marginSpy).toHaveBeenLastCalledWith({
        bottom: 3,
        left: 4,
        right: 2,
        top: 1,
      });
      expect(marginSpy).toHaveBeenCalledTimes(1);

      rerender(
        <BarChart width={100} height={100} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expect(marginSpy).toHaveBeenLastCalledWith({
        bottom: 30,
        left: 40,
        right: 20,
        top: 10,
      });
      expect(marginSpy).toHaveBeenCalledTimes(3);
    });
  });
});
