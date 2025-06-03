import React, { FC } from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Area, Brush, Customized, Tooltip, XAxis, YAxis } from '../../src';
import { computeArea, getBaseValue, Props } from '../../src/cartesian/Area';
import {
  allCartesianChartsExcept,
  AreaChartCase,
  CartesianChartTestCase,
  ComposedChartCase,
  includingCompact,
} from '../helper/parameterizedTestCases';
import { useAppSelector } from '../../src/state/hooks';
import { CartesianGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { BaseAxisWithScale, implicitYAxis } from '../../src/state/selectors/axisSelectors';
import { mockXAxisWithScale, mockYAxisWithScale } from '../helper/mockAxes';
import { useLegendPayload } from '../../src/context/legendPayloadContext';
import { selectTooltipPayloadConfigurations } from '../../src/state/selectors/selectors';

type TestCase = CartesianChartTestCase;

const chartsThatSupportArea: ReadonlyArray<TestCase> = [ComposedChartCase, AreaChartCase];

const chartsThatDoNotSupportArea: ReadonlyArray<TestCase> = includingCompact(
  allCartesianChartsExcept(chartsThatSupportArea),
);

const data = [
  { x: 10, y: 50, value: 100 },
  { x: 50, y: 50, value: 100 },
  { x: 90, y: 50, value: 100 },
  { x: 130, y: 50, value: 100 },
  { x: 170, y: 50, value: 100 },
];

const emptyBaseValues: ReadonlyArray<Props['baseValue']> = [undefined, NaN];

type BaseValueTestCase = {
  domain: [number, number];
  expected: number;
  axisType: 'number' | 'category' | undefined;
};

describe.each(chartsThatSupportArea)('<Area /> as a child of $testName', ({ ChartElement }) => {
  describe('label', () => {
    test('Render customized label when label is set to be a function', () => {
      const renderLabel = (props: { index: number; x: number; y: number }) => {
        const { index, x, y } = props;

        return (
          <text key={index} x={x} y={y} className="customized-label">
            Customized Label
          </text>
        );
      };

      render(
        <ChartElement data={data}>
          <Area dataKey="value" isAnimationActive={false} baseLine={200} label={renderLabel} />
        </ChartElement>,
      );

      expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
    });

    test('Render customized label when label is set to be a react element', () => {
      const Label: FC<{ index: number; x: number; y: number }> = props => {
        const { index, x, y } = props;

        return (
          <text key={index} x={x} y={y} className="customized-label">
            Customized Label
          </text>
        );
      };

      render(
        <ChartElement data={data}>
          <Area
            dataKey="value"
            isAnimationActive={false}
            baseLine={200}
            label={({ index, x, y }: { index: number; x: number; y: number }) => <Label index={index} x={x} y={y} />}
          />
        </ChartElement>,
      );

      expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
    });
  });

  describe('dot', () => {
    test('Render customized dot when dot is set to be a function', () => {
      let areaDotProps;
      const renderDot = (props: { cx: number; cy: number }) => {
        const { cx, cy } = props;
        areaDotProps = props;

        return <circle role="cell" key={cx} x={cx} y={cy} r={5} className="customized-dot" />;
      };

      render(
        <ChartElement data={data}>
          <Area dataKey="value" isAnimationActive={false} baseLine={200} dot={renderDot} />
        </ChartElement>,
      );

      expect(screen.getAllByRole('cell')).toHaveLength(data.length);
      expect(areaDotProps).toHaveProperty('points');
    });

    test('Render customized dot when dot is set to be a react element', () => {
      const CustomizedDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
        <circle role="cell" cx={cx} cy={cy} r={5} className="customized-dot" />
      );

      render(
        <ChartElement data={data}>
          <Area
            dataKey="value"
            isAnimationActive={false}
            baseLine={200}
            dot={({ cx, cy }) => <CustomizedDot key={`${cx}-${cy}`} cx={cx} cy={cy} />}
          />
        </ChartElement>,
      );

      expect(screen.getAllByRole('cell')).toHaveLength(data.length);
    });

    test('Does not throw when dot is null', () => {
      const { container } = render(
        <ChartElement data={data}>
          {/* Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
          {/* TypeScript should flag this as an error, but we have strict null checks disabled in config */}
          <Area dataKey="value" dot={null} isAnimationActive={false} />
          <XAxis dataKey="x" allowDataOverflow />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
    });

    test('Does not clip dots when clipDot is false', () => {
      const { container } = render(
        <ChartElement width={500} height={500} data={data}>
          <Area dataKey="value" dot={{ clipDot: false }} isAnimationActive={false} />
          <XAxis dataKey="x" allowDataOverflow />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
      const dots = container.querySelectorAll('.recharts-area-dot');
      expect(dots).toHaveLength(5);
      const dotsWrapper = container.querySelector('.recharts-area-dots');
      // Well this is confusing. When clipDot is false the className contains 'dots'. AKA clip path name includes what is showing, rather than what is clipped.
      expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-dots-recharts-area');
    });

    test('Does clip dots when clipDot is true', () => {
      const { container } = render(
        <ChartElement width={500} height={500} data={data}>
          <Area dataKey="value" dot={{ clipDot: true }} isAnimationActive={false} />
          <XAxis dataKey="x" allowDataOverflow />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
      const dots = container.querySelectorAll('.recharts-area-dot');
      expect(dots).toHaveLength(5);

      const dotsWrapper = container.querySelector('.recharts-area-dots');
      // When clipDot is true the className does not contain 'dots'
      expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-recharts-area');
    });
  });

  describe('baseValue and curve paths', () => {
    describe('horizontal layout with numeric Y axis', () => {
      const layout = 'horizontal';
      it('should default baseValue to zero if no domain is defined in the axis', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <YAxis />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M65,5L172.5,5L280,5L387.5,5L495,5L495,495L387.5,495L280,495L172.5,495L65,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,5L172.5,5L280,5L387.5,5L495,5');
      });

      it('should default baseValue to the first number in domain', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M65,355L172.5,355L280,355L387.5,355L495,355L495,495L387.5,495L280,495L172.5,495L65,495Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });

      it('should set baseValue to dataMin', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMin" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M65,355L172.5,355L280,355L387.5,355L495,355L495,495L387.5,495L280,495L172.5,495L65,495Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });

      it('should set baseValue to dataMax', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMax" />
            <YAxis domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355L495,5L387.5,5L280,5L172.5,5L65,5Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M65,355L172.5,355L280,355L387.5,355L495,355');
      });
    });

    describe('vertical layout with numeric X axis requires dataKey on YAxis to be defined', () => {
      const layout = 'vertical';
      it('should default baseValue to zero if no domain is defined in the axis', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <XAxis type="number" />
            <YAxis dataKey="y" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M495,388.333L495,388.333L495,388.333L495,388.333L495,388.333L65,388.333L65,388.333L65,388.333L65,388.333L65,388.333Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M495,388.333L495,388.333L495,388.333L495,388.333L495,388.333');
      });

      it('should not set curve path if YAxis is not present', () => {
        /*
         * This feels like a bug - why render the curves at all?
         * But at this point I am only writing tests, not fixing bugs.
         */
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <XAxis type="number" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect.soft(curves[0]).not.toHaveAttribute('d');
        expect.soft(curves[1]).not.toHaveAttribute('d');
      });

      it('should set curve path to null if YAxis is present but it has no dataKey', () => {
        /*
         * This feels like a bug - why render the curves at all?
         * But at this point I am only writing tests, not fixing bugs.
         */
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <XAxis type="number" />
            <YAxis />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect.soft(curves[0]).not.toHaveAttribute('d');
        expect.soft(curves[1]).not.toHaveAttribute('d');
      });

      it('should default baseValue to the first number in domain', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" />
            <XAxis type="number" />
            <YAxis dataKey="y" domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L65,54.286L65,54.286L65,54.286L65,54.286L65,54.286Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286');
      });

      it('should set baseValue to dataMin', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMin" />
            <XAxis type="number" />
            <YAxis dataKey="y" domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L65,54.286L65,54.286L65,54.286L65,54.286L65,54.286Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286');
      });

      it('should set baseValue to dataMax', () => {
        const { container } = render(
          <ChartElement data={data} layout={layout}>
            <Area dataKey="value" baseValue="dataMax" />
            <XAxis type="number" />
            <YAxis dataKey="y" domain={[20, 300]} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L495,54.286L495,54.286Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M495,54.286L495,54.286L495,54.286L495,54.286L495,54.286');
      });
    });

    describe.todo('horizontal layout with categorical Y axis');
    describe.todo('vertical layout with categorical X axis');

    describe('with no axes', () => {
      it('should default baseValue to 0', () => {
        const { container } = render(
          <ChartElement data={data}>
            <Area dataKey="value" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,495L372.5,495L250,495L127.5,495L5,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to a number', () => {
        const { container } = render(
          <ChartElement data={data}>
            <Area dataKey="value" baseValue={9} />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute(
            'd',
            'M5,5L127.5,5L250,5L372.5,5L495,5L495,450.9L372.5,450.9L250,450.9L127.5,450.9L5,450.9Z',
          );
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to 0 when dataMin', () => {
        const { container } = render(
          <ChartElement data={data}>
            <Area dataKey="value" baseValue="dataMin" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,495L372.5,495L250,495L127.5,495L5,495Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });

      it('should set baseValue to dataMax', () => {
        const { container } = render(
          <ChartElement data={data}>
            <Area dataKey="value" baseValue="dataMax" />
          </ChartElement>,
        );
        const curves = container.querySelectorAll('.recharts-curve');
        expect(curves).toHaveLength(2);
        expect
          .soft(curves[0])
          .toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5L495,5L372.5,5L250,5L127.5,5L5,5Z');
        expect.soft(curves[1]).toHaveAttribute('d', 'M5,5L127.5,5L250,5L372.5,5L495,5');
      });
    });
  });

  describe('state integration', () => {
    it('should report its props to redux state, and remove them when removed from DOM', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
        spy(cartesianItems);
        return null;
      };
      const data2 = [1, 2, 3];

      const { rerender } = render(
        <ChartElement data={data}>
          <Area dataKey="value" data={data2} xAxisId={7} yAxisId={9} stackId="q" hide />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          isPanorama: false,
          type: 'area',
          data: data2,
          dataKey: 'value',
          xAxisId: 7,
          yAxisId: 9,
          zAxisId: 0,
          errorBars: [],
          stackId: 'q',
          hide: true,
          barSize: undefined,
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);

      rerender(
        <ChartElement data={data}>
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      expect(spy).toHaveBeenLastCalledWith([]);
    });

    it('should report default props to redux state', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
        spy(cartesianItems);
        return null;
      };
      const data2 = [1, 2, 3];

      render(
        <ChartElement data={data}>
          <Area dataKey="value" data={data2} />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          isPanorama: false,
          type: 'area',
          data: data2,
          dataKey: 'value',
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          errorBars: [],
          stackId: undefined,
          hide: false,
          barSize: undefined,
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should add a record to Legend payload, and remove it when the element is removed', () => {
      const legendSpy = vi.fn();
      const Comp = (): null => {
        legendSpy(useLegendPayload());
        return null;
      };

      const { rerender } = render(
        <ChartElement data={data}>
          <Area dataKey="value" />
          <Customized component={<Comp />} />
        </ChartElement>,
      );

      expect(legendSpy).toHaveBeenLastCalledWith([
        {
          color: '#3182bd',
          dataKey: 'value',
          inactive: false,
          payload: {
            activeDot: true,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: 'ease',
            connectNulls: false,
            dataKey: 'value',
            dot: false,
            fill: '#3182bd',
            fillOpacity: 0.6,
            hide: false,
            isAnimationActive: true,
            legendType: 'line',
            stroke: '#3182bd',
            xAxisId: 0,
            yAxisId: 0,
          },
          type: 'line',
          value: 'value',
        },
      ]);

      rerender(
        <ChartElement data={data}>
          <Customized component={<Comp />} />
        </ChartElement>,
      );

      expect(legendSpy).toHaveBeenLastCalledWith([]);
    });

    it('should add a record to Legend and Tooltip payloads', () => {
      const legendSpy = vi.fn();
      const tooltipSpy = vi.fn();

      const Comp = (): null => {
        legendSpy(useLegendPayload());
        tooltipSpy(useAppSelector(state => selectTooltipPayloadConfigurations(state, 'axis', 'hover', undefined)));
        return null;
      };

      render(
        <ChartElement data={data}>
          <Area dataKey="value" />
          <Tooltip />
          <Customized component={<Comp />} />
        </ChartElement>,
      );

      expect(legendSpy).toHaveBeenLastCalledWith([
        {
          color: '#3182bd',
          dataKey: 'value',
          inactive: false,
          payload: {
            activeDot: true,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: 'ease',
            connectNulls: false,
            dataKey: 'value',
            dot: false,
            fill: '#3182bd',
            fillOpacity: 0.6,
            hide: false,
            isAnimationActive: true,
            legendType: 'line',
            stroke: '#3182bd',
            xAxisId: 0,
            yAxisId: 0,
          },
          type: 'line',
          value: 'value',
        },
      ]);
      expect(tooltipSpy).toHaveBeenLastCalledWith([
        {
          dataDefinedOnItem: undefined,
          settings: {
            color: '#3182bd',
            dataKey: 'value',
            fill: '#3182bd',
            hide: false,
            name: 'value',
            nameKey: undefined,
            stroke: '#3182bd',
            strokeWidth: undefined,
            type: undefined,
            unit: undefined,
          },
        },
      ]);
    });

    it('should add no record to Legend and Tooltip payloads when inside Brush Panorama', () => {
      const legendSpy = vi.fn();
      const tooltipSpy = vi.fn();

      const Comp = (): null => {
        legendSpy(useLegendPayload());
        tooltipSpy(useAppSelector(state => selectTooltipPayloadConfigurations(state, 'axis', 'hover', undefined)));
        return null;
      };

      render(
        <ChartElement data={data} className="my-unique-classname">
          <Customized component={<Comp />} />
          <Brush>
            <ChartElement>
              <Area dataKey="value" />
            </ChartElement>
          </Brush>
        </ChartElement>,
      );

      expect(legendSpy).toHaveBeenLastCalledWith([]);
      expect(tooltipSpy).toHaveBeenLastCalledWith([]);
    });
  });

  test.each([{ myData: undefined }, { myData: [] }])("Don't render any path when data is $myData", ({ myData }) => {
    const { container } = render(
      <ChartElement data={myData}>
        <Area dataKey="value" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
  });

  test('renders the curve with the stroke on top (2nd) of the curve with the fill (1st)', () => {
    const { container } = render(
      <ChartElement data={data}>
        <Area dataKey="value" baseLine={200} stroke="teal" fill="teal" />
      </ChartElement>,
    );

    const curveCount = container.querySelectorAll('.recharts-curve').length;

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('stroke', 'none');
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('fill', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('stroke', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('fill', 'none');
  });
});

describe.each(chartsThatDoNotSupportArea)('<Area /> as a child of $testName', ({ ChartElement }) => {
  it('should not render any curves', () => {
    const { container } = render(
      <ChartElement data={data}>
        <Area dataKey="value" baseLine={200} stroke="teal" fill="teal" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(0);
  });
});

describe('getBaseValue', () => {
  describe('when defined explicitly in props', () => {
    it('should return number if baseValue is a number', () => {
      const actual = getBaseValue('horizontal', undefined, 8, mockXAxisWithScale, mockYAxisWithScale);
      expect(actual).toBe(8);
    });

    it('should read baseValue from chart props, if item.props.baseValue is undefined', () => {
      const actual = getBaseValue('horizontal', 9, undefined, mockXAxisWithScale, mockYAxisWithScale);
      expect(actual).toBe(9);
    });

    it('should prefer baseValue from Area props, if both are provided', () => {
      const actual = getBaseValue('horizontal', 9, 10, mockXAxisWithScale, mockYAxisWithScale);
      expect(actual).toBe(10);
    });

    it('should return number from domain when baseValue is NaN', () => {
      const yAxis: BaseAxisWithScale = {
        ...implicitYAxis,
        scale: {
          // @ts-expect-error incomplete mock
          domain: () => [30, 40],
        },
      };
      const actual = getBaseValue('horizontal', undefined, NaN, mockXAxisWithScale, yAxis);
      expect(actual).toBe(30);
    });
  });

  describe.each(emptyBaseValues)('when baseValue is %s', baseValue => {
    const testCases: ReadonlyArray<BaseValueTestCase> = [
      { domain: [4, 5], expected: 4, axisType: 'number' },
      { domain: [5, 4], expected: 4, axisType: 'number' },
      { domain: [5, 4], expected: 5, axisType: 'category' },
      { domain: [5, 4], expected: 5, axisType: undefined },
      {
        domain: [-10, -20],
        expected: -10,
        axisType: 'number',
      },
      {
        domain: [-20, -10],
        expected: -10,
        axisType: 'number',
      },
      {
        domain: [-10, -20],
        expected: -10,
        axisType: 'category',
      },
      {
        domain: [-20, -10],
        expected: -20,
        axisType: 'category',
      },
      {
        domain: [-10, -20],
        expected: -10,
        axisType: undefined,
      },
      {
        domain: [-20, -10],
        expected: -20,
        axisType: undefined,
      },
    ];

    describe('in horizontal layout uses Y axis', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const yAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('horizontal', baseValue, baseValue, mockXAxisWithScale, yAxis);
          expect(actual).toBe(expected);
        },
      );
    });

    describe('in vertical layout behaves the same but uses X axis instead of Y', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const xAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('vertical', baseValue, baseValue, xAxis, mockYAxisWithScale);
          expect(actual).toBe(expected);
        },
      );
    });
  });

  describe('when baseValue is "dataMin"', () => {
    const baseValue = 'dataMin';
    const testCases: ReadonlyArray<BaseValueTestCase> = [
      { domain: [4, 5], expected: 4, axisType: 'number' },
      { domain: [5, 4], expected: 4, axisType: 'number' },
      { domain: [5, 4], expected: 5, axisType: 'category' },
      { domain: [5, 4], expected: 5, axisType: undefined },
      {
        domain: [-10, -20],
        expected: -20, // this is different from the 'undefined' behaviour!
        axisType: 'number',
      },
      {
        domain: [-20, -10],
        expected: -20, // this is different from the 'undefined' behaviour!
        axisType: 'number',
      },
      {
        domain: [-10, -20],
        expected: -10,
        axisType: 'category',
      },
      {
        domain: [-20, -10],
        expected: -20,
        axisType: 'category',
      },
      {
        domain: [-10, -20],
        expected: -10,
        axisType: undefined,
      },
      {
        domain: [-20, -10],
        expected: -20,
        axisType: undefined,
      },
    ];
    describe('in horizontal layout uses Y axis', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const yAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('horizontal', baseValue, baseValue, mockXAxisWithScale, yAxis);
          expect(actual).toBe(expected);
        },
      );
    });
    describe('in vertical layout behaves the same but uses X axis instead of Y', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const xAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('vertical', baseValue, baseValue, xAxis, mockYAxisWithScale);
          expect(actual).toBe(expected);
        },
      );
    });
  });

  describe('when baseValue is "dataMax"', () => {
    const baseValue = 'dataMax';
    const testCases: ReadonlyArray<BaseValueTestCase> = [
      // "max" means mathematical maximum for numerical axis
      { domain: [4, 5], expected: 5, axisType: 'number' },
      { domain: [5, 4], expected: 5, axisType: 'number' },
      // but it means "second" in categorical axis
      { domain: [5, 4], expected: 4, axisType: 'category' },
      { domain: [5, 4], expected: 4, axisType: undefined },
      // and same for negative numbers
      {
        domain: [-10, -20],
        expected: -10,
        axisType: 'number',
      },
      {
        domain: [-20, -10],
        expected: -10,
        axisType: 'number',
      },
      {
        domain: [-10, -20],
        expected: -20,
        axisType: 'category',
      },
      {
        domain: [-20, -10],
        expected: -10,
        axisType: 'category',
      },
      {
        domain: [-10, -20],
        expected: -20,
        axisType: undefined,
      },
      {
        domain: [-20, -10],
        expected: -10,
        axisType: undefined,
      },
    ];
    describe('in horizontal layout uses Y axis', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const yAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('horizontal', baseValue, baseValue, mockXAxisWithScale, yAxis);
          expect(actual).toBe(expected);
        },
      );
    });
    describe('in vertical layout behaves the same but uses X axis instead of Y', () => {
      test.each(testCases)(
        'should return $expected when $axisType axis domain is $domain',
        ({ domain, axisType, expected }) => {
          const xAxis: BaseAxisWithScale = {
            scale: {
              // @ts-expect-error incomplete mock
              domain: () => domain,
            },
            type: axisType,
          };
          const actual = getBaseValue('vertical', baseValue, baseValue, xAxis, mockYAxisWithScale);
          expect(actual).toBe(expected);
        },
      );
    });
  });
});

describe('computeArea', () => {
  const mockScale = (n: number) => n * 2;
  mockScale.domain = () => [0, 'auto'];
  const mockScale2 = (n: number) => n * 3;
  mockScale2.domain = () => [0, 'auto'];

  it('should return empty points if displayedData is empty array', () => {
    const { points } = computeArea({
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: '',
        stackId: '',
        data: [],
      },
      displayedData: [],
      layout: 'horizontal',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale },
    });
    expect(points).toEqual([]);
  });

  it('should return displayedData mapped with getCateCoordinateOfLine in horizontal layout', () => {
    const { points } = computeArea({
      displayedData: [{ v: 1 }, { v: 2 }, { v: 3 }],
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: 'v',
        stackId: '',
        data: [],
      },
      layout: 'horizontal',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale },
      // @ts-expect-error incomplete mock
      xAxis: { scale: mockScale2, dataKey: 'v' },
    });
    expect(points).toEqual([
      {
        payload: {
          v: 1,
        },
        value: [0, 1],
        x: 3,
        y: 2,
      },
      {
        payload: {
          v: 2,
        },
        value: [0, 2],
        x: 6,
        y: 4,
      },
      {
        payload: {
          v: 3,
        },
        value: [0, 3],
        x: 9,
        y: 6,
      },
    ]);
  });

  it('should return displayedData mapped with getCateCoordinateOfLine in vertical layout', () => {
    const { points } = computeArea({
      displayedData: [{ v: 1 }, { v: 2 }, { v: 3 }],
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: 'v',
        stackId: '',
        data: [],
      },
      layout: 'vertical',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale, dataKey: 'v' },
      // @ts-expect-error incomplete mock
      xAxis: { scale: mockScale2 },
    });
    expect(points).toEqual([
      {
        payload: {
          v: 1,
        },
        value: [0, 1],
        x: 3,
        y: 2,
      },
      {
        payload: {
          v: 2,
        },
        value: [0, 2],
        x: 6,
        y: 4,
      },
      {
        payload: {
          v: 3,
        },
        value: [0, 3],
        x: 9,
        y: 6,
      },
    ]);
  });

  it('should return displayedData mapped to stackedData mapped to getCateCoordinateOfLine in horizontal chart', () => {
    const { points } = computeArea({
      displayedData: [{ v: 1 }, { v: 2 }, { v: 3 }],
      stackedData: [
        [1, 2],
        [2, 4],
        [3, 6],
        [4, 8],
        [5, 10],
        [6, 12],
      ],
      dataStartIndex: 0,
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: 'v',
        stackId: '',
        data: [],
      },
      layout: 'horizontal',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale },
      // @ts-expect-error incomplete mock
      xAxis: { scale: mockScale2, dataKey: 'v' },
    });
    expect(points).toEqual([
      {
        payload: {
          v: 1,
        },
        value: [1, 2],
        x: 3,
        y: 4,
      },
      {
        payload: {
          v: 2,
        },
        value: [2, 4],
        x: 6,
        y: 8,
      },
      {
        payload: {
          v: 3,
        },
        value: [3, 6],
        x: 9,
        y: 12,
      },
    ]);
  });

  it('should return displayedData mapped to stackedData mapped to getCateCoordinateOfLine in vertical chart', () => {
    const { points } = computeArea({
      displayedData: [{ v: 1 }, { v: 2 }, { v: 3 }],
      stackedData: [
        [1, 2],
        [2, 4],
        [3, 6],
        [4, 8],
        [5, 10],
        [6, 12],
      ],
      dataStartIndex: 0,
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: 'v',
        stackId: '',
        data: [],
      },
      layout: 'vertical',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale, dataKey: 'v' },
      // @ts-expect-error incomplete mock
      xAxis: { scale: mockScale2 },
    });
    expect(points).toEqual([
      {
        payload: {
          v: 1,
        },
        value: [1, 2],
        x: 6,
        y: 2,
      },
      {
        payload: {
          v: 2,
        },
        value: [2, 4],
        x: 12,
        y: 4,
      },
      {
        payload: {
          v: 3,
        },
        value: [3, 6],
        x: 18,
        y: 6,
      },
    ]);
  });

  it('should return .y coordinate set to null in vertical chart when YAxis dataKey is undefined', () => {
    const { points } = computeArea({
      displayedData: [{ v: 1 }, { v: 2 }, { v: 3 }],
      stackedData: [
        [1, 2],
        [2, 4],
        [3, 6],
        [4, 8],
        [5, 10],
        [6, 12],
      ],
      dataStartIndex: 0,
      areaSettings: {
        connectNulls: false,
        baseValue: 0,
        dataKey: 'v',
        stackId: '',
        data: [],
      },
      layout: 'vertical',
      // @ts-expect-error incomplete mock
      yAxis: { scale: mockScale },
      // @ts-expect-error incomplete mock
      xAxis: { scale: mockScale2 },
    });
    expect(points).toEqual([
      {
        payload: {
          v: 1,
        },
        value: [1, 2],
        x: 6,
        y: null,
      },
      {
        payload: {
          v: 2,
        },
        value: [2, 4],
        x: 12,
        y: null,
      },
      {
        payload: {
          v: 3,
        },
        value: [3, 6],
        x: 18,
        y: null,
      },
    ]);
  });
});
