import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { describe, expect, it, test, vi } from 'vitest';
import { Bar, BarChart, BarProps, Customized, Rectangle, Tooltip, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { testChartLayoutContext } from '../util/context';
import { expectTooltipPayload } from '../component/Tooltip/tooltipTestHelpers';
import { useClipPathId, useMargin, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { expectBars } from '../helper/expectBars';

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

  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('labels', () => {
    test('Render 4 labels when label is setted to be true', () => {
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

    test('Renders 8 bars in simple BarChart', () => {
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
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

    test('Stacked bars are actually stacked', () => {
      let seriesOneBarOneValue, seriesTwoBarOneValue;
      const Spy = (props: { formattedGraphicalItems?: any }) => {
        const { formattedGraphicalItems } = props;
        const [seriesOneBarOne, seriesTwoBarOne] = formattedGraphicalItems;
        seriesOneBarOneValue = seriesOneBarOne.props.data[0].value;
        seriesTwoBarOneValue = seriesTwoBarOne.props.data[0].value;
        return <></>;
      };
      const { container } = render(
        <BarChart width={100} height={50} data={data}>
          <YAxis />
          <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
          <Bar dataKey="pv" stackId="test" fill="#387908" isAnimationActive={false} />
          <Customized component={Spy} />
        </BarChart>,
      );

      // stacked bars should have values which are arrays, if they are not then they are not stacked
      expect(seriesOneBarOneValue).toEqual([0, 400]);
      expect(seriesTwoBarOneValue).toEqual([400, 2800]);

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
      const { container } = render(
        <BarChart width={100} height={50} data={onePointData}>
          <XAxis dataKey="number" type="number" />
          <Bar dataKey="uv" name="uv" isAnimationActive={false} maxBarSize={40} />
        </BarChart>,
      );

      expectBars(container, [
        {
          d: 'M 79,5 h 32 v 10 h -32 Z',
          height: '10',
          radius: '0',
          // the maxBarSize is 40 but here it only renders 32, why?
          width: '32',
          x: '79',
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
    it(
      'should provide viewBox and clipPathId if there are no axes',
      testChartLayoutContext(
        props => (
          <BarChart width={100} height={50} barSize={20}>
            {props.children}
          </BarChart>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toMatch(/recharts\d+-clip/);
          expect(viewBox).toEqual({ height: 40, width: 90, x: 5, y: 5 });
          expect(xAxisMap).toEqual({});
          expect(yAxisMap).toEqual({});
        },
      ),
    );

    it('should provide axisMaps if axes are specified', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const xAxisMapSpy = vi.fn();
      const yAxisMapSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        xAxisMapSpy(useAppSelector(state => state.axis.xAxisMap));
        yAxisMapSpy(useAppSelector(state => state.axis.yAxisMap));
        return null;
      };

      render(
        <BarChart width={100} height={50} barSize={20}>
          <XAxis dataKey="number" type="number" />
          <YAxis type="category" dataKey="name" />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expect(clipPathSpy).toHaveBeenLastCalledWith(expect.stringMatching(/recharts\d+-clip/));
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ height: 10, width: 30, x: 65, y: 5 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(3);
      expect(xAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'xAxis',
          bandSize: 0,
          categoricalDomain: [],
          dataKey: 'number',
          domain: [0, -Infinity],
          duplicateDomain: undefined,
          height: 30,
          hide: false,
          isCategorical: true,
          layout: 'horizontal',
          mirror: false,
          niceTicks: [0, -Infinity, -Infinity, -Infinity, -Infinity],
          orientation: 'bottom',
          originalDomain: [0, 'auto'],
          padding: {
            left: 0,
            right: 0,
          },
          realScaleType: 'linear',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'number',
          width: 30,
          x: 65,
          xAxisId: 0,
          y: 15,
        },
      });
      expect(yAxisMapSpy).toHaveBeenLastCalledWith({
        '0': {
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          axisType: 'yAxis',
          bandSize: 10,
          categoricalDomain: undefined,
          dataKey: 'name',
          domain: [],
          duplicateDomain: undefined,
          height: 10,
          hide: false,
          isCategorical: false,
          layout: 'horizontal',
          mirror: false,
          orientation: 'left',
          originalDomain: undefined,
          padding: {
            bottom: 0,
            top: 0,
          },
          realScaleType: 'band',
          reversed: false,
          scale: expect.any(Function),
          tickCount: 5,
          type: 'category',
          width: 60,
          x: 5,
          y: 5,
          yAxisId: 0,
        },
      });
    });

    it(
      'should set width and height in context',
      testChartLayoutContext(
        props => (
          <BarChart width={100} height={50} barSize={20}>
            {props.children}
          </BarChart>
        ),
        ({ width, height }) => {
          expect(width).toBe(100);
          expect(height).toBe(50);
        },
      ),
    );
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
      expect(marginSpy).toHaveBeenCalledTimes(2);

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
      expect(marginSpy).toHaveBeenCalledTimes(4);
    });
  });
});
