import React, { ComponentType, ReactNode } from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import uniqueId from 'lodash/uniqueId';
import { Bar, Customized, Legend, LegendType, XAxis, YAxis } from '../../src';
import {
  allCategoricalsChartsExcept,
  BarChartCase,
  ComposedChartCase,
  includingCompact,
} from '../helper/parameterizedTestCases';
import { useAppSelector } from '../../src/state/hooks';
import { CartesianGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { expectBars } from '../helper/expectBars';

type TestCase = {
  ChartElement: ComponentType<{ children?: ReactNode; width?: number; height?: number; data?: any[] }>;
  testName: string;
};

const chartsThatSupportBar: ReadonlyArray<TestCase> = [ComposedChartCase, BarChartCase];

const chartsThatDoNotSupportBar: ReadonlyArray<TestCase> = includingCompact(
  allCategoricalsChartsExcept(chartsThatSupportBar),
);

const data = [
  { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test1' },
  { x: 50, y: 50, width: 20, height: 50, value: 200, label: 'test2' },
  { x: 90, y: 50, width: 20, height: 50, value: 300, label: 'test3' },
  { x: 130, y: 50, width: 20, height: 50, value: 400, label: 'test4' },
  { x: 170, y: 50, width: 20, height: 50, value: 500, label: 'test5' },
];

describe.each(includingCompact(chartsThatSupportBar))('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it(`should render rectangles in horizontal Bar`, () => {
    const { container } = render(
      <ChartElement layout="horizontal" data={data}>
        <Bar isAnimationActive={false} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, [
      {
        d: 'M 14.8,413.3333333333333 h 78 v 81.66666666666669 h -78 Z',
        height: '81.66666666666669',
        radius: '0',
        width: '78',
        x: '14.8',
        y: '413.3333333333333',
      },
      {
        d: 'M 112.8,331.66666666666674 h 78 v 163.33333333333326 h -78 Z',
        height: '163.33333333333326',
        radius: '0',
        width: '78',
        x: '112.8',
        y: '331.66666666666674',
      },
      {
        d: 'M 210.8,250 h 78 v 245 h -78 Z',
        height: '245',
        radius: '0',
        width: '78',
        x: '210.8',
        y: '250',
      },
      {
        d: 'M 308.8,168.33333333333337 h 78 v 326.66666666666663 h -78 Z',
        height: '326.66666666666663',
        radius: '0',
        width: '78',
        x: '308.8',
        y: '168.33333333333337',
      },
      {
        d: 'M 406.8,86.66666666666666 h 78 v 408.33333333333337 h -78 Z',
        height: '408.33333333333337',
        radius: '0',
        width: '78',
        x: '406.8',
        y: '86.66666666666666',
      },
    ]);
  });

  it(`should render rectangles in vertical Bar`, () => {
    const { container } = render(
      <ChartElement layout="vertical" data={data}>
        <YAxis type="category" />
        <XAxis type="number" />
        <Bar isAnimationActive={false} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, [
      {
        d: 'M 65,14.2 h 71.66666666666669 v 73 h -71.66666666666669 Z',
        height: '73',
        radius: '0',
        width: '71.66666666666669',
        x: '65',
        y: '14.2',
      },
      {
        d: 'M 65,106.2 h 143.33333333333334 v 73 h -143.33333333333334 Z',
        height: '73',
        radius: '0',
        width: '143.33333333333334',
        x: '65',
        y: '106.2',
      },
      {
        d: 'M 65,198.2 h 215 v 73 h -215 Z',
        height: '73',
        radius: '0',
        width: '215',
        x: '65',
        y: '198.2',
      },
      {
        d: 'M 65,290.2 h 286.6666666666667 v 73 h -286.6666666666667 Z',
        height: '73',
        radius: '0',
        width: '286.6666666666667',
        x: '65',
        y: '290.2',
      },
      {
        d: 'M 65,382.2 h 358.3333333333333 v 73 h -358.3333333333333 Z',
        height: '73',
        radius: '0',
        width: '358.3333333333333',
        x: '65',
        y: '382.2',
      },
    ]);
  });

  it("Don't render any rectangle when data is empty", () => {
    const { container } = render(
      <ChartElement>
        <Bar data={[]} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, []);
  });

  describe('barSize', () => {
    it('should make bars wider in horizontal chart', () => {
      const barSize = 79;
      const { container } = render(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 14,413.3333333333333 h 79 v 81.66666666666669 h -79 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '79',
          x: '14',
          y: '413.3333333333333',
        },
        {
          d: 'M 112,331.66666666666674 h 79 v 163.33333333333326 h -79 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '79',
          x: '112',
          y: '331.66666666666674',
        },
        {
          d: 'M 210,250 h 79 v 245 h -79 Z',
          height: '245',
          radius: '0',
          width: '79',
          x: '210',
          y: '250',
        },
        {
          d: 'M 308,168.33333333333337 h 79 v 326.66666666666663 h -79 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '79',
          x: '308',
          y: '168.33333333333337',
        },
        {
          d: 'M 406,86.66666666666666 h 79 v 408.33333333333337 h -79 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '79',
          x: '406',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should make bars narrower in horizontal chart', () => {
      const barSize = 77;
      const { container } = render(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 15,413.3333333333333 h 77 v 81.66666666666669 h -77 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '77',
          x: '15',
          y: '413.3333333333333',
        },
        {
          d: 'M 113,331.66666666666674 h 77 v 163.33333333333326 h -77 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '77',
          x: '113',
          y: '331.66666666666674',
        },
        {
          d: 'M 211,250 h 77 v 245 h -77 Z',
          height: '245',
          radius: '0',
          width: '77',
          x: '211',
          y: '250',
        },
        {
          d: 'M 309,168.33333333333337 h 77 v 326.66666666666663 h -77 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '77',
          x: '309',
          y: '168.33333333333337',
        },
        {
          d: 'M 407,86.66666666666666 h 77 v 408.33333333333337 h -77 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '77',
          x: '407',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should make bars taller in vertical chart', () => {
      const barSize = 74;
      const { container } = render(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14 h 71.66666666666669 v 74 h -71.66666666666669 Z',
          height: '74',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14',
        },
        {
          d: 'M 65,106 h 143.33333333333334 v 74 h -143.33333333333334 Z',
          height: '74',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106',
        },
        {
          d: 'M 65,198 h 215 v 74 h -215 Z',
          height: '74',
          radius: '0',
          width: '215',
          x: '65',
          y: '198',
        },
        {
          d: 'M 65,290 h 286.6666666666667 v 74 h -286.6666666666667 Z',
          height: '74',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290',
        },
        {
          d: 'M 65,382 h 358.3333333333333 v 74 h -358.3333333333333 Z',
          height: '74',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382',
        },
      ]);
    });

    it('should make bars shorter in vertical chart', () => {
      const barSize = 72;
      const { container } = render(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,15 h 71.66666666666669 v 72 h -71.66666666666669 Z',
          height: '72',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '15',
        },
        {
          d: 'M 65,107 h 143.33333333333334 v 72 h -143.33333333333334 Z',
          height: '72',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '107',
        },
        {
          d: 'M 65,199 h 215 v 72 h -215 Z',
          height: '72',
          radius: '0',
          width: '215',
          x: '65',
          y: '199',
        },
        {
          d: 'M 65,291 h 286.6666666666667 v 72 h -286.6666666666667 Z',
          height: '72',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '291',
        },
        {
          d: 'M 65,383 h 358.3333333333333 v 72 h -358.3333333333333 Z',
          height: '72',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '383',
        },
      ]);
    });
  });

  describe('maxBarSize', () => {
    it('should do nothing if bars are already smaller than the maxBarSize', () => {
      const { container } = render(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={79} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 14.8,413.3333333333333 h 78 v 81.66666666666669 h -78 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '78',
          x: '14.8',
          y: '413.3333333333333',
        },
        {
          d: 'M 112.8,331.66666666666674 h 78 v 163.33333333333326 h -78 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '78',
          x: '112.8',
          y: '331.66666666666674',
        },
        {
          d: 'M 210.8,250 h 78 v 245 h -78 Z',
          height: '245',
          radius: '0',
          width: '78',
          x: '210.8',
          y: '250',
        },
        {
          d: 'M 308.8,168.33333333333337 h 78 v 326.66666666666663 h -78 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '78',
          x: '308.8',
          y: '168.33333333333337',
        },
        {
          d: 'M 406.8,86.66666666666666 h 78 v 408.33333333333337 h -78 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '78',
          x: '406.8',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should change all bars width when bars are larger than the maxBarSize', () => {
      const maxBarSize = 77;
      const { container } = render(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 15.3,413.3333333333333 h 77 v 81.66666666666669 h -77 Z',
          height: '81.66666666666669',
          radius: '0',
          width: String(maxBarSize),
          x: '15.3',
          y: '413.3333333333333',
        },
        {
          d: 'M 113.3,331.66666666666674 h 77 v 163.33333333333326 h -77 Z',
          height: '163.33333333333326',
          radius: '0',
          width: String(maxBarSize),
          x: '113.3',
          y: '331.66666666666674',
        },
        {
          d: 'M 211.3,250 h 77 v 245 h -77 Z',
          height: '245',
          radius: '0',
          width: String(maxBarSize),
          x: '211.3',
          y: '250',
        },
        {
          d: 'M 309.3,168.33333333333337 h 77 v 326.66666666666663 h -77 Z',
          height: '326.66666666666663',
          radius: '0',
          width: String(maxBarSize),
          x: '309.3',
          y: '168.33333333333337',
        },
        {
          d: 'M 407.3,86.66666666666666 h 77 v 408.33333333333337 h -77 Z',
          height: '408.33333333333337',
          radius: '0',
          width: String(maxBarSize),
          x: '407.3',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should should do nothing if barSize is set', () => {
      const maxBarSize = 77;
      const { container } = render(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} barSize={maxBarSize + 5} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 13,413.3333333333333 h 82 v 81.66666666666669 h -82 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '82',
          x: '13',
          y: '413.3333333333333',
        },
        {
          d: 'M 111,331.66666666666674 h 82 v 163.33333333333326 h -82 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '82',
          x: '111',
          y: '331.66666666666674',
        },
        {
          d: 'M 209,250 h 82 v 245 h -82 Z',
          height: '245',
          radius: '0',
          width: '82',
          x: '209',
          y: '250',
        },
        {
          d: 'M 307,168.33333333333337 h 82 v 326.66666666666663 h -82 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '82',
          x: '307',
          y: '168.33333333333337',
        },
        {
          d: 'M 405,86.66666666666666 h 82 v 408.33333333333337 h -82 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '82',
          x: '405',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should do nothing in vertical chart if all bars are smaller than the maxBarSize', () => {
      const { container } = render(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={74} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14.2 h 71.66666666666669 v 73 h -71.66666666666669 Z',
          height: '73',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14.2',
        },
        {
          d: 'M 65,106.2 h 143.33333333333334 v 73 h -143.33333333333334 Z',
          height: '73',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106.2',
        },
        {
          d: 'M 65,198.2 h 215 v 73 h -215 Z',
          height: '73',
          radius: '0',
          width: '215',
          x: '65',
          y: '198.2',
        },
        {
          d: 'M 65,290.2 h 286.6666666666667 v 73 h -286.6666666666667 Z',
          height: '73',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290.2',
        },
        {
          d: 'M 65,382.2 h 358.3333333333333 v 73 h -358.3333333333333 Z',
          height: '73',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382.2',
        },
      ]);
    });

    it('should change all bars height in vertical chart if all bars are larger than the maxBarSize', () => {
      const maxBarSize = 72;
      const { container } = render(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14.7 h 71.66666666666669 v 72 h -71.66666666666669 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14.7',
        },
        {
          d: 'M 65,106.7 h 143.33333333333334 v 72 h -143.33333333333334 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106.7',
        },
        {
          d: 'M 65,198.7 h 215 v 72 h -215 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '215',
          x: '65',
          y: '198.7',
        },
        {
          d: 'M 65,290.7 h 286.6666666666667 v 72 h -286.6666666666667 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290.7',
        },
        {
          d: 'M 65,382.7 h 358.3333333333333 v 72 h -358.3333333333333 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382.7',
        },
      ]);
    });

    it('should do nothing if barSize is set in vertical chart', () => {
      const maxBarSize = 72;
      const { container } = render(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} barSize={maxBarSize + 7} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,11 h 71.66666666666669 v 79 h -71.66666666666669 Z',
          height: '79',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '11',
        },
        {
          d: 'M 65,103 h 143.33333333333334 v 79 h -143.33333333333334 Z',
          height: '79',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '103',
        },
        {
          d: 'M 65,195 h 215 v 79 h -215 Z',
          height: '79',
          radius: '0',
          width: '215',
          x: '65',
          y: '195',
        },
        {
          d: 'M 65,287 h 286.6666666666667 v 79 h -286.6666666666667 Z',
          height: '79',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '287',
        },
        {
          d: 'M 65,379 h 358.3333333333333 v 79 h -358.3333333333333 Z',
          height: '79',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '379',
        },
      ]);
    });
  });

  describe('With background', () => {
    const composedDataWithBackground = [
      {
        x: 10,
        y: 50,
        width: 20,
        height: 20,
        value: 40,
        label: 'test',
        background: { x: 10, y: 50, width: 20, height: 50 },
      },
      {
        x: 50,
        y: 50,
        width: 20,
        height: 50,
        value: 100,
        label: 'test',
        background: { x: 50, y: 50, width: 20, height: 50 },
      },
    ];

    it('Will create a background Rectangle with the passed in props', () => {
      const { container } = render(
        <ChartElement>
          <Bar data={composedDataWithBackground} background={{ fill: '#000' }} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-bar-background-rectangle')).toHaveLength(
        composedDataWithBackground.length,
      );
    });

    it('Will accept a function for the background prop', () => {
      const className = 'test-custom-background';
      const backgroundComponent = () => {
        return <div key={uniqueId()} className={className} />;
      };
      const { container } = render(
        <ChartElement>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll(`.${className}`)).toHaveLength(composedDataWithBackground.length);
    });

    it('should pass props to the custom background function', () => {
      const expectedProps = {
        className: 'recharts-bar-background-rectangle',
        dataKey: 'value',
        fill: '#eee',
        height: 50,
        index: expect.any(Number),
        label: 'test',
        onAnimationEnd: expect.any(Function),
        onAnimationStart: expect.any(Function),
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function),
        onClick: expect.any(Function),
        width: 20,
        x: expect.any(Number),
        y: 50,
      };
      const backgroundComponent = (props: unknown) => {
        expect.soft(props).toEqual(expectedProps);
        return <></>;
      };
      render(
        <ChartElement>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );
    });
  });

  describe('label', () => {
    describe('as boolean', () => {
      it('should draw default labels when label = true', () => {
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect(l).toHaveAttribute('x', expect.any(String));
          expect(l).toHaveAttribute('y', '75');
          expect(l).toHaveAttribute('height', '50');
          expect(l).toHaveAttribute('offset', '5');
          expect(l).toHaveAttribute('text-anchor', 'middle');
          expect(l).toHaveAttribute('width', '20');
          expect(l).toHaveAttribute('fill', '#808080');
        });
      });

      it('should not draw labels while animating', () => {
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive data={data} label dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });

      it('should not draw labels when label = false', () => {
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={false} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });
    });

    describe('as svg properties object', () => {
      it('should draw labels and add extra props from the object', () => {
        const { container } = render(
          <ChartElement>
            <Bar
              isAnimationActive={false}
              data={data}
              label={{
                fill: 'red',
                elevation: 9,
              }}
              dataKey="value"
            />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect(l).toHaveAttribute('x', expect.any(String));
          expect(l).toHaveAttribute('y', '75');
          expect(l).toHaveAttribute('height', '50');
          expect(l).toHaveAttribute('offset', '5');
          expect(l).toHaveAttribute('text-anchor', 'middle');
          expect(l).toHaveAttribute('width', '20');
          expect(l).toHaveAttribute('fill', 'red');
          expect(l).toHaveAttribute('elevation', '9');
        });
      });

      it('should overwrite the recharts-label className but keep recharts-text className', () => {
        const { container } = render(
          <ChartElement>
            <Bar
              isAnimationActive={false}
              data={data}
              label={{
                className: 'my-test-class',
              }}
              dataKey="value"
            />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
        const customLabels = container.querySelectorAll('.my-test-class');
        expect(customLabels).toHaveLength(data.length);
        customLabels.forEach(l => {
          expect(l).toHaveAttribute('class', 'recharts-text my-test-class');
        });
      });
    });

    describe('as function', () => {
      it('should pass props to the label function', () => {
        const spy = vi.fn().mockReturnValue(null);
        render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={spy} dataKey="value" />
          </ChartElement>,
        );
        expect(spy).toHaveBeenCalledTimes(data.length);
        expect(spy).toBeCalledWith(
          {
            content: spy,
            height: 50,
            index: expect.any(Number),
            offset: 5,
            parentViewBox: undefined,
            textBreakAll: undefined,
            value: expect.any(Number),
            viewBox: {
              height: 50,
              width: 20,
              x: expect.any(Number),
              y: 50,
            },
            width: 20,
            x: expect.any(Number),
            y: 50,
          },
          {}, // this object arrives as a second argument, I am not sure where that comes from
        );
      });

      it('should render what the label function returned', () => {
        const labelFn = () => <g className="my-mock-class" />;
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={labelFn} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.my-mock-class');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect.soft(l).not.toHaveAttribute('x');
          expect.soft(l).not.toHaveAttribute('y');
          expect.soft(l).not.toHaveAttribute('height');
          expect.soft(l).not.toHaveAttribute('offset');
          expect.soft(l).not.toHaveAttribute('text-anchor');
          expect.soft(l).not.toHaveAttribute('width');
          expect.soft(l).not.toHaveAttribute('fill');
        });
      });
    });

    describe('as a custom Element', () => {
      it(`should render what the function returned, and then inject extra sneaky props in it
                - but not all of them, and not the same as in the other ways of rendering labels`, () => {
        const MyLabel = <g className="my-mock-class" />;
        const { container } = render(
          <ChartElement>
            <Bar isAnimationActive={false} data={data} label={MyLabel} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.my-mock-class');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect.soft(l).toHaveAttribute('x', expect.any(String));
          expect.soft(l).toHaveAttribute('y', '50'); // this number is different from the other renders - not sure why
          expect.soft(l).toHaveAttribute('height', '50');
          expect.soft(l).toHaveAttribute('offset', '5');
          expect.soft(l).not.toHaveAttribute('text-anchor', 'middle');
          expect.soft(l).toHaveAttribute('width', '20');
          expect.soft(l).not.toHaveAttribute('fill', '#808080');
        });
      });
    });
  });

  describe('minPointSize', () => {
    const highLowData = [
      { name: 'test1', value: 10000 },
      { name: 'test2', value: 0 },
      { name: 'test3', value: 1 },
    ];

    it('should pass props to the minPointSize function', () => {
      const spy = vi.fn().mockImplementation(() => 5);
      render(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={spy} dataKey="value" />
        </ChartElement>,
      );
      expect(spy).toHaveBeenCalledTimes(highLowData.length);
      // expect it to be called with the value and the value's index
      expect(spy).toBeCalledWith(expect.any(Number), expect.any(Number));
    });

    it('should ignore 0 value bars when minPointSize is undefined, and render the small bars really really small', () => {
      const { container } = render(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <Bar isAnimationActive={false} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 21.333333333333336,5 h 130 v 460 h -130 Z',
          height: '460',
          radius: '0',
          width: '130',
          x: '21.333333333333336',
          y: '5',
        },
        {
          d: 'M 348,464.954 h 130 v 0.04599999999999227 h -130 Z',
          height: '0.04599999999999227',
          radius: '0',
          width: '130',
          x: '348',
          y: '464.954',
        },
      ]);
    });

    it('should assign minimum height to low value bars if minPointSize is a number', () => {
      const { container } = render(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={5} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 79.33333333333334,5 h 114 v 460 h -114 Z',
          height: '460',
          radius: '0',
          width: '114',
          x: '79.33333333333334',
          y: '5',
        },
        {
          d: 'M 222.66666666666669,460 h 114 v 5 h -114 Z',
          height: '5',
          radius: '0',
          width: '114',
          x: '222.66666666666669',
          y: '460',
        },
        {
          d: 'M 366,460 h 114 v 5 h -114 Z',
          height: '5',
          radius: '0',
          width: '114',
          x: '366',
          y: '460',
        },
      ]);
    });

    it('should assign minimum width, in a vertical chart', () => {
      const { container } = render(
        <ChartElement data={highLowData} layout="vertical">
          <XAxis dataKey="value" type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar isAnimationActive={false} minPointSize={5} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,20.333333333333336 h 430 v 122 h -430 Z',
          height: '122',
          radius: '0',
          width: '430',
          x: '65',
          y: '20.333333333333336',
        },
        {
          d: 'M 65,173.66666666666669 h 5 v 122 h -5 Z',
          height: '122',
          radius: '0',
          width: '5',
          x: '65',
          y: '173.66666666666669',
        },
        {
          d: 'M 65,327 h 5 v 122 h -5 Z',
          height: '122',
          radius: '0',
          width: '5',
          x: '65',
          y: '327',
        },
      ]);
    });

    it('should render with varying minPointSize as per function results', () => {
      const { container } = render(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={(value: number) => (value > 0 ? 2 : 0)} dataKey="value" />
        </ChartElement>,
      );
      /*
       expect only 2 rects, the one with 0 value does not render
       value of 100 should have height greater than 1
       value of 1 should have height greater than 0 due to minPointSize
      */
      expectBars(container, [
        {
          d: 'M 79.33333333333334,5 h 114 v 460 h -114 Z',
          height: '460',
          radius: '0',
          width: '114',
          x: '79.33333333333334',
          y: '5',
        },
        {
          d: 'M 366,463 h 114 v 2 h -114 Z',
          height: '2',
          radius: '0',
          width: '114',
          x: '366',
          y: '463',
        },
      ]);
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

      const { rerender } = render(
        <ChartElement data={data}>
          <Bar dataKey="value" xAxisId={7} yAxisId={9} stackId="q" hide />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          data: null,
          dataKey: 'value',
          xAxisId: 7,
          yAxisId: 9,
          zAxisId: 0,
          errorBars: [],
          stackId: 'q',
          hide: true,
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

      render(
        <ChartElement data={data}>
          <Bar dataKey="value" />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          data: null,
          dataKey: 'value',
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          errorBars: [],
          stackId: undefined,
          hide: false,
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });
});

describe.each(chartsThatSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  /**
   * legend does not render in the compact chart so that's why this excludes the compact cases
   */
  describe('legendType', () => {
    const allLegendTypesExceptNone: ReadonlyArray<LegendType> = [
      'circle',
      'cross',
      'diamond',
      'line',
      'plainline',
      'rect',
      'square',
      'star',
      'triangle',
      'wye',
    ];

    test.each(allLegendTypesExceptNone)('should render legendType %s', legendType => {
      const { container } = render(
        <ChartElement>
          <Bar data={data} dataKey="value" legendType={legendType} />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(1);
    });

    it('should not render any legend if legendType = none', () => {
      const { container } = render(
        <ChartElement>
          <Bar data={data} dataKey="value" legendType="none" />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(0);
    });
  });
});

describe.each(chartsThatDoNotSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it('should not render anything', () => {
    const { container } = render(
      <ChartElement>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" data-testid="customized-bar" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });
});
