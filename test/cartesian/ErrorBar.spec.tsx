import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Bar, BarChart, Line, LineChart, ErrorBar, XAxis, YAxis, ScatterChart, Scatter, Customized } from '../../src';
import { mockAnimation, cleanupMockAnimation } from '../helper/animation-frame-helper';
import { expectXAxisTicks, expectYAxisTicks } from '../helper/expectAxisTicks';
import { AxisDomainType } from '../../src/util/types';
import { useAppSelector } from '../../src/state/hooks';
import {
  selectAllAppliedNumericalValuesIncludingErrorValues,
  selectAxisDomainIncludingNiceTicks,
} from '../../src/state/selectors/axisSelectors';

type ExpectedErrorBarLine = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
};

const expectErrorBars = (container: HTMLElement, linesExpected: ReadonlyArray<ExpectedErrorBarLine>) => {
  const errorBarLines = container.querySelectorAll('.recharts-errorBar line');

  const linesActual = Array.from(errorBarLines).map(line => {
    return {
      x1: line.getAttribute('x1'),
      x2: line.getAttribute('x2'),
      y1: line.getAttribute('y1'),
      y2: line.getAttribute('y2'),
    };
  });

  expect(linesActual).toEqual(linesExpected);
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
  const dataWithError = [
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
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
  });

  test('Renders Multiple Error Bars in Bar', () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500} layout="vertical">
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" direction="x" />
          <ErrorBar dataKey="pvError" direction="x" />
        </Bar>
        {/* Axes are needed in order to actually render anything useful in a vertical chart */}
        <XAxis dataKey="uv" type="number" />
        <YAxis dataKey="name" type="category" />
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '309.8611111111111',
        x2: '309.8611111111111',
        y1: '67.5',
        y2: '57.5',
      },
      {
        x1: '291.94444444444446',
        x2: '309.8611111111111',
        y1: '62.5',
        y2: '62.5',
      },
      {
        x1: '291.94444444444446',
        x2: '291.94444444444446',
        y1: '67.5',
        y2: '57.5',
      },
      {
        x1: '475.8888888888889',
        x2: '475.8888888888889',
        y1: '182.5',
        y2: '172.5',
      },
      {
        x1: '444.8333333333333',
        x2: '475.8888888888889',
        y1: '177.5',
        y2: '177.5',
      },
      {
        x1: '444.8333333333333',
        x2: '444.8333333333333',
        y1: '182.5',
        y2: '172.5',
      },
      {
        x1: '456.77777777777777',
        x2: '456.77777777777777',
        y1: '297.5',
        y2: '287.5',
      },
      {
        x1: '432.8888888888889',
        x2: '456.77777777777777',
        y1: '292.5',
        y2: '292.5',
      },
      {
        x1: '432.8888888888889',
        x2: '432.8888888888889',
        y1: '297.5',
        y2: '287.5',
      },
      {
        x1: '423.3333333333333',
        x2: '423.3333333333333',
        y1: '412.5',
        y2: '402.5',
      },
      {
        x1: '387.5',
        x2: '423.3333333333333',
        y1: '407.5',
        y2: '407.5',
      },
      {
        x1: '387.5',
        x2: '387.5',
        y1: '412.5',
        y2: '402.5',
      },
      {
        x1: '306.27777777777777',
        x2: '306.27777777777777',
        y1: '67.5',
        y2: '57.5',
      },
      {
        x1: '290.75',
        x2: '306.27777777777777',
        y1: '62.5',
        y2: '62.5',
      },
      {
        x1: '290.75',
        x2: '290.75',
        y1: '67.5',
        y2: '57.5',
      },
      {
        x1: '465.1388888888889',
        x2: '465.1388888888889',
        y1: '182.5',
        y2: '172.5',
      },
      {
        x1: '453.19444444444446',
        x2: '465.1388888888889',
        y1: '177.5',
        y2: '177.5',
      },
      {
        x1: '453.19444444444446',
        x2: '453.19444444444446',
        y1: '182.5',
        y2: '172.5',
      },
      {
        x1: '459.1666666666667',
        x2: '459.1666666666667',
        y1: '297.5',
        y2: '287.5',
      },
      {
        x1: '423.3333333333333',
        x2: '459.1666666666667',
        y1: '292.5',
        y2: '292.5',
      },
      {
        x1: '423.3333333333333',
        x2: '423.3333333333333',
        y1: '297.5',
        y2: '287.5',
      },
      {
        x1: '403.02777777777777',
        x2: '403.02777777777777',
        y1: '412.5',
        y2: '402.5',
      },
      {
        x1: '395.8611111111111',
        x2: '403.02777777777777',
        y1: '407.5',
        y2: '407.5',
      },
      {
        x1: '395.8611111111111',
        x2: '395.8611111111111',
        y1: '412.5',
        y2: '402.5',
      },
    ]);
  });

  test('Renders Error Bars in stacked Bar', () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv" stackId="1">
          <ErrorBar dataKey="uvError" />
        </Bar>
        <Bar isAnimationActive={false} dataKey="pv" stackId="1">
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '327.5833333333333',
        y2: '327.5833333333333',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '339.8333333333333',
        y2: '327.5833333333333',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '339.8333333333333',
        y2: '339.8333333333333',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '214.06666666666666',
        y2: '214.06666666666666',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '235.29999999999998',
        y2: '214.06666666666666',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '235.29999999999998',
        y2: '235.29999999999998',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '227.13333333333333',
        y2: '227.13333333333333',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '243.46666666666667',
        y2: '227.13333333333333',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '243.46666666666667',
        y2: '243.46666666666667',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '250',
        y2: '250',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '274.5',
        y2: '250',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '274.5',
        y2: '274.5',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '163.1883333333333',
        y2: '163.1883333333333',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '175.43833333333333',
        y2: '163.1883333333333',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '175.43833333333333',
        y2: '175.43833333333333',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '50.733333333333356',
        y2: '50.733333333333356',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '71.96666666666668',
        y2: '50.733333333333356',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '71.96666666666668',
        y2: '71.96666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '112.96333333333335',
        y2: '112.96333333333335',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '129.29666666666668',
        y2: '112.96333333333335',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '129.29666666666668',
        y2: '129.29666666666668',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '21.33333333333333',
        y2: '21.33333333333333',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '45.83333333333336',
        y2: '21.33333333333333',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '45.83333333333336',
        y2: '45.83333333333336',
      },
    ]);
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

    expectErrorBars(container, [
      {
        x1: '0',
        x2: '10',
        y1: '78.50000000000001',
        y2: '78.50000000000001',
      },
      {
        x1: '5',
        x2: '5',
        y1: '117.29166666666666',
        y2: '78.50000000000001',
      },
      {
        x1: '0',
        x2: '10',
        y1: '117.29166666666666',
        y2: '117.29166666666666',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '356.1666666666667',
        y2: '356.1666666666667',
      },
      {
        x1: '127.5',
        x2: '127.5',
        y1: '409.25',
        y2: '356.1666666666667',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '409.25',
        y2: '409.25',
      },
      {
        x1: '245',
        x2: '255',
        y1: '364.33333333333337',
        y2: '364.33333333333337',
      },
      {
        x1: '250',
        x2: '250',
        y1: '397',
        y2: '364.33333333333337',
      },
      {
        x1: '245',
        x2: '255',
        y1: '397',
        y2: '397',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '405.1666666666667',
        y2: '405.1666666666667',
      },
      {
        x1: '372.5',
        x2: '372.5',
        y1: '421.5',
        y2: '405.1666666666667',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '421.5',
        y2: '421.5',
      },
      {
        x1: '490',
        x2: '500',
        y1: '406.3916666666666',
        y2: '406.3916666666666',
      },
      {
        x1: '495',
        x2: '495',
        y1: '429.2583333333333',
        y2: '406.3916666666666',
      },
      {
        x1: '490',
        x2: '500',
        y1: '429.2583333333333',
        y2: '429.2583333333333',
      },
    ]);
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

    expectErrorBars(container, [
      {
        x1: '0',
        x2: '10',
        y1: '78.50000000000001',
        y2: '78.50000000000001',
      },
      {
        x1: '5',
        x2: '5',
        y1: '117.29166666666666',
        y2: '78.50000000000001',
      },
      {
        x1: '0',
        x2: '10',
        y1: '117.29166666666666',
        y2: '117.29166666666666',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '356.1666666666667',
        y2: '356.1666666666667',
      },
      {
        x1: '127.5',
        x2: '127.5',
        y1: '409.25',
        y2: '356.1666666666667',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '409.25',
        y2: '409.25',
      },
      {
        x1: '245',
        x2: '255',
        y1: '364.33333333333337',
        y2: '364.33333333333337',
      },
      {
        x1: '250',
        x2: '250',
        y1: '397',
        y2: '364.33333333333337',
      },
      {
        x1: '245',
        x2: '255',
        y1: '397',
        y2: '397',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '405.1666666666667',
        y2: '405.1666666666667',
      },
      {
        x1: '372.5',
        x2: '372.5',
        y1: '421.5',
        y2: '405.1666666666667',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '421.5',
        y2: '421.5',
      },
      {
        x1: '490',
        x2: '500',
        y1: '406.3916666666666',
        y2: '406.3916666666666',
      },
      {
        x1: '495',
        x2: '495',
        y1: '429.2583333333333',
        y2: '406.3916666666666',
      },
      {
        x1: '490',
        x2: '500',
        y1: '429.2583333333333',
        y2: '429.2583333333333',
      },
      {
        x1: '0',
        x2: '10',
        y1: '70.33333333333331',
        y2: '70.33333333333331',
      },
      {
        x1: '5',
        x2: '5',
        y1: '123.41666666666669',
        y2: '70.33333333333331',
      },
      {
        x1: '0',
        x2: '10',
        y1: '123.41666666666669',
        y2: '123.41666666666669',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '364.33333333333337',
        y2: '364.33333333333337',
      },
      {
        x1: '127.5',
        x2: '127.5',
        y1: '403.125',
        y2: '364.33333333333337',
      },
      {
        x1: '122.5',
        x2: '132.5',
        y1: '403.125',
        y2: '403.125',
      },
      {
        x1: '245',
        x2: '255',
        y1: '372.5',
        y2: '372.5',
      },
      {
        x1: '250',
        x2: '250',
        y1: '388.8333333333333',
        y2: '372.5',
      },
      {
        x1: '245',
        x2: '255',
        y1: '388.8333333333333',
        y2: '388.8333333333333',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '401.90000000000003',
        y2: '401.90000000000003',
      },
      {
        x1: '372.5',
        x2: '372.5',
        y1: '424.76666666666665',
        y2: '401.90000000000003',
      },
      {
        x1: '367.5',
        x2: '377.5',
        y1: '424.76666666666665',
        y2: '424.76666666666665',
      },
      {
        x1: '490',
        x2: '500',
        y1: '401.4916666666667',
        y2: '401.4916666666667',
      },
      {
        x1: '495',
        x2: '495',
        y1: '434.15833333333336',
        y2: '401.4916666666667',
      },
      {
        x1: '490',
        x2: '500',
        y1: '434.15833333333336',
        y2: '434.15833333333336',
      },
    ]);
  });

  test('Renders Error Bars with animation', async () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms ease-in-out,transform-origin 400ms ease-in-out',
      transform: 'scaleY(1)',
    });
  });

  test('Renders Error Bars without animation', () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive={false} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
    assertAnimationStyles(container, false);
  });

  test('Renders Error Bars with animation delay', () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive begin={200} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
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
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive animationDuration={400} dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms ease-in-out,transform-origin 400ms ease-in-out',
      transform: 'scaleY(1)',
    });
  });

  test('Renders Error Bars with animation easing', () => {
    const { container } = render(
      <BarChart data={dataWithError} width={500} height={500}>
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expectErrorBars(container, [
      {
        x1: '61.25',
        x2: '71.25',
        y1: '215.97222222222223',
        y2: '215.97222222222223',
      },
      {
        x1: '66.25',
        x2: '66.25',
        y1: '236.38888888888889',
        y2: '215.97222222222223',
      },
      {
        x1: '61.25',
        x2: '71.25',
        y1: '236.38888888888889',
        y2: '236.38888888888889',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '26.777777777777754',
        y2: '26.777777777777754',
      },
      {
        x1: '188.75',
        x2: '188.75',
        y1: '62.16666666666668',
        y2: '26.777777777777754',
      },
      {
        x1: '183.75',
        x2: '193.75',
        y1: '62.16666666666668',
        y2: '62.16666666666668',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '48.555555555555564',
        y2: '48.555555555555564',
      },
      {
        x1: '311.25',
        x2: '311.25',
        y1: '75.77777777777779',
        y2: '48.555555555555564',
      },
      {
        x1: '306.25',
        x2: '316.25',
        y1: '75.77777777777779',
        y2: '75.77777777777779',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '86.66666666666666',
        y2: '86.66666666666666',
      },
      {
        x1: '433.75',
        x2: '433.75',
        y1: '127.5',
        y2: '86.66666666666666',
      },
      {
        x1: '428.75',
        x2: '438.75',
        y1: '127.5',
        y2: '127.5',
      },
    ]);
    assertAnimationStyles(container, true, {
      transition: 'transform 400ms linear,transform-origin 400ms linear',
      transform: 'scaleY(1)',
    });
  });

  test('renders two ErrorBars in ScatterChart, one for XAxis another for YAxis', () => {
    const { container } = render(
      <ScatterChart width={500} height={500}>
        <Scatter isAnimationActive={false} data={dataWithError} dataKey="uv">
          <ErrorBar dataKey="uvError" direction="y" />
          <ErrorBar dataKey="pvError" direction="x" />
        </Scatter>
        <XAxis type="number" />
      </ScatterChart>,
    );
    expect(container.querySelectorAll('.recharts-errorBars')).toHaveLength(2);
    expectErrorBars(container, [
      {
        x1: '980000',
        x2: '980010',
        y1: '203.05555555555557',
        y2: '203.05555555555557',
      },
      {
        x1: '980005',
        x2: '980005',
        y1: '222.2222222222222',
        y2: '203.05555555555557',
      },
      {
        x1: '980000',
        x2: '980010',
        y1: '222.2222222222222',
        y2: '222.2222222222222',
      },
      {
        x1: '1617000',
        x2: '1617010',
        y1: '25.444444444444425',
        y2: '25.444444444444425',
      },
      {
        x1: '1617005',
        x2: '1617005',
        y1: '58.66666666666668',
        y2: '25.444444444444425',
      },
      {
        x1: '1617000',
        x2: '1617010',
        y1: '58.66666666666668',
        y2: '58.66666666666668',
      },
      {
        x1: '1568000',
        x2: '1568010',
        y1: '45.8888888888889',
        y2: '45.8888888888889',
      },
      {
        x1: '1568005',
        x2: '1568005',
        y1: '71.44444444444446',
        y2: '45.8888888888889',
      },
      {
        x1: '1568000',
        x2: '1568010',
        y1: '71.44444444444446',
        y2: '71.44444444444446',
      },
      {
        x1: '1372000',
        x2: '1372010',
        y1: '81.66666666666666',
        y2: '81.66666666666666',
      },
      {
        x1: '1372005',
        x2: '1372005',
        y1: '120',
        y2: '81.66666666666666',
      },
      {
        x1: '1372000',
        x2: '1372010',
        y1: '120',
        y2: '120',
      },
      {
        x1: '989805',
        x2: '989805',
        y1: '214.44444444444443',
        y2: '204.44444444444443',
      },
      {
        x1: '926105',
        x2: '989805',
        y1: '209.44444444444443',
        y2: '209.44444444444443',
      },
      {
        x1: '926105',
        x2: '926105',
        y1: '214.44444444444443',
        y2: '204.44444444444443',
      },
      {
        x1: '1641505',
        x2: '1641505',
        y1: '48.33333333333335',
        y2: '38.33333333333335',
      },
      {
        x1: '1592505',
        x2: '1641505',
        y1: '43.33333333333335',
        y2: '43.33333333333335',
      },
      {
        x1: '1592505',
        x2: '1592505',
        y1: '48.33333333333335',
        y2: '38.33333333333335',
      },
      {
        x1: '1617005',
        x2: '1617005',
        y1: '61.111111111111136',
        y2: '51.111111111111136',
      },
      {
        x1: '1470005',
        x2: '1617005',
        y1: '56.111111111111136',
        y2: '56.111111111111136',
      },
      {
        x1: '1470005',
        x2: '1470005',
        y1: '61.111111111111136',
        y2: '51.111111111111136',
      },
      {
        x1: '1386705',
        x2: '1386705',
        y1: '112.22222222222221',
        y2: '102.22222222222221',
      },
      {
        x1: '1357305',
        x2: '1386705',
        y1: '107.22222222222221',
        y2: '107.22222222222221',
      },
      {
        x1: '1357305',
        x2: '1357305',
        y1: '112.22222222222221',
        y2: '102.22222222222221',
      },
    ]);
  });

  test('renders two ErrorBars in vertical ScatterChart, one for XAxis another for YAxis', () => {
    const { container } = render(
      <ScatterChart width={500} height={500} layout="vertical">
        <Scatter isAnimationActive={false} data={dataWithError} dataKey="uv">
          <ErrorBar dataKey="uvError" direction="y" />
          <ErrorBar dataKey="pvError" direction="x" />
        </Scatter>
        <XAxis type="number" />
      </ScatterChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBars')).toHaveLength(2);

    const errorBars = container.querySelectorAll('.recharts-errorBar');
    errorBars.forEach(bar => {
      expect(bar.tagName).toEqual('g');
      expect(bar.getAttributeNames()).toEqual(['class', 'stroke', 'stroke-width', 'offset']);
      expect(bar.childElementCount).toEqual(3);
    });

    expectErrorBars(container, [
      {
        x1: '288.2352941176471',
        x2: '298.2352941176471',
        y1: '943005',
        y2: '943005',
      },
      {
        x1: '293.2352941176471',
        x2: '293.2352941176471',
        y1: '874005',
        y2: '943005',
      },
      {
        x1: '288.2352941176471',
        x2: '298.2352941176471',
        y1: '874005',
        y2: '874005',
      },
      {
        x1: '475.5882352941176',
        x2: '485.5882352941176',
        y1: '1582405',
        y2: '1582405',
      },
      {
        x1: '480.5882352941176',
        x2: '480.5882352941176',
        y1: '1462805',
        y2: '1582405',
      },
      {
        x1: '475.5882352941176',
        x2: '485.5882352941176',
        y1: '1462805',
        y2: '1462805',
      },
      {
        x1: '461.1764705882353',
        x2: '471.1764705882353',
        y1: '1508805',
        y2: '1508805',
      },
      {
        x1: '466.1764705882353',
        x2: '466.1764705882353',
        y1: '1416805',
        y2: '1508805',
      },
      {
        x1: '461.1764705882353',
        x2: '471.1764705882353',
        y1: '1416805',
        y2: '1416805',
      },
      {
        x1: '403.52941176470586',
        x2: '413.52941176470586',
        y1: '1380005',
        y2: '1380005',
      },
      {
        x1: '408.52941176470586',
        x2: '408.52941176470586',
        y1: '1242005',
        y2: '1380005',
      },
      {
        x1: '403.52941176470586',
        x2: '413.52941176470586',
        y1: '1242005',
        y2: '1242005',
      },
      {
        x1: '296.1176470588235',
        x2: '296.1176470588235',
        y1: '920010',
        y2: '920000',
      },
      {
        x1: '277.3823529411765',
        x2: '296.1176470588235',
        y1: '920005',
        y2: '920005',
      },
      {
        x1: '277.3823529411765',
        x2: '277.3823529411765',
        y1: '920010',
        y2: '920000',
      },
      {
        x1: '487.79411764705884',
        x2: '487.79411764705884',
        y1: '1518010',
        y2: '1518000',
      },
      {
        x1: '473.3823529411765',
        x2: '487.79411764705884',
        y1: '1518005',
        y2: '1518005',
      },
      {
        x1: '473.3823529411765',
        x2: '473.3823529411765',
        y1: '1518010',
        y2: '1518000',
      },
      {
        x1: '480.5882352941176',
        x2: '480.5882352941176',
        y1: '1472010',
        y2: '1472000',
      },
      {
        x1: '437.35294117647055',
        x2: '480.5882352941176',
        y1: '1472005',
        y2: '1472005',
      },
      {
        x1: '437.35294117647055',
        x2: '437.35294117647055',
        y1: '1472010',
        y2: '1472000',
      },
      {
        x1: '412.8529411764706',
        x2: '412.8529411764706',
        y1: '1288010',
        y2: '1288000',
      },
      {
        x1: '404.20588235294116',
        x2: '412.8529411764706',
        y1: '1288005',
        y2: '1288005',
      },
      {
        x1: '404.20588235294116',
        x2: '404.20588235294116',
        y1: '1288010',
        y2: '1288000',
      },
    ]);
  });

  test.each(['category', undefined])(
    'does not render anything when direction=x and XAxis id type=%s',
    (domainType: AxisDomainType) => {
      const { container } = render(
        <BarChart data={dataWithError} width={500} height={500}>
          <XAxis dataKey="name" type={domainType} />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" direction="x" />
          </Bar>
        </BarChart>,
      );
      expectErrorBars(container, []);
    },
  );

  describe('ErrorBar and axis domain interaction', () => {
    it('should extend YAxis domain', () => {
      const axisDomainSpy = vi.fn();
      const Comp = (): null => {
        axisDomainSpy(useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 0)));
        return null;
      };
      const { container, rerender } = render(
        <BarChart data={dataWithError} width={500} height={500}>
          <YAxis dataKey="uv" />
          <Bar isAnimationActive={false} dataKey="uv" />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expectErrorBars(container, []);
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
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 3400]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(3);
      rerender(
        <BarChart data={dataWithError} width={500} height={500}>
          <YAxis dataKey="uv" />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar dataKey="uvError" />
          </Bar>
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectErrorBars(container, [
        {
          x1: '113.75',
          x2: '123.75',
          y1: '215.97222222222223',
          y2: '215.97222222222223',
        },
        {
          x1: '118.75',
          x2: '118.75',
          y1: '236.38888888888889',
          y2: '215.97222222222223',
        },
        {
          x1: '113.75',
          x2: '123.75',
          y1: '236.38888888888889',
          y2: '236.38888888888889',
        },
        {
          x1: '221.25',
          x2: '231.25',
          y1: '26.777777777777754',
          y2: '26.777777777777754',
        },
        {
          x1: '226.25',
          x2: '226.25',
          y1: '62.16666666666668',
          y2: '26.777777777777754',
        },
        {
          x1: '221.25',
          x2: '231.25',
          y1: '62.16666666666668',
          y2: '62.16666666666668',
        },
        {
          x1: '328.75',
          x2: '338.75',
          y1: '48.555555555555564',
          y2: '48.555555555555564',
        },
        {
          x1: '333.75',
          x2: '333.75',
          y1: '75.77777777777779',
          y2: '48.555555555555564',
        },
        {
          x1: '328.75',
          x2: '338.75',
          y1: '75.77777777777779',
          y2: '75.77777777777779',
        },
        {
          x1: '436.25',
          x2: '446.25',
          y1: '86.66666666666666',
          y2: '86.66666666666666',
        },
        {
          x1: '441.25',
          x2: '441.25',
          y1: '127.5',
          y2: '86.66666666666666',
        },
        {
          x1: '436.25',
          x2: '446.25',
          y1: '127.5',
          y2: '127.5',
        },
      ]);
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
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 3600]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(6);
    });

    it('should extend YAxis domain when data is defined on the graphical item', () => {
      const axisDomainSpy = vi.fn();
      const Comp = (): null => {
        axisDomainSpy(useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 0)));
        return null;
      };
      const { container, rerender } = render(
        <LineChart width={500} height={500}>
          <YAxis dataKey="uv" />
          <Line isAnimationActive={false} dataKey="uv" data={dataWithError} />
          <Customized component={<Comp />} />
        </LineChart>,
      );

      expectErrorBars(container, []);
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
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 3400]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(3);

      rerender(
        <LineChart width={500} height={500}>
          <YAxis dataKey="uv" />
          <Line isAnimationActive={false} dataKey="uv" data={dataWithError}>
            <ErrorBar dataKey="uvError" />
          </Line>
          <Customized component={<Comp />} />
        </LineChart>,
      );

      expectErrorBars(container, [
        {
          x1: '60',
          x2: '70',
          y1: '215.97222222222223',
          y2: '215.97222222222223',
        },
        {
          x1: '65',
          x2: '65',
          y1: '236.38888888888889',
          y2: '215.97222222222223',
        },
        {
          x1: '60',
          x2: '70',
          y1: '236.38888888888889',
          y2: '236.38888888888889',
        },
        {
          x1: '203.33333333333334',
          x2: '213.33333333333334',
          y1: '26.777777777777754',
          y2: '26.777777777777754',
        },
        {
          x1: '208.33333333333334',
          x2: '208.33333333333334',
          y1: '62.16666666666668',
          y2: '26.777777777777754',
        },
        {
          x1: '203.33333333333334',
          x2: '213.33333333333334',
          y1: '62.16666666666668',
          y2: '62.16666666666668',
        },
        {
          x1: '346.6666666666667',
          x2: '356.6666666666667',
          y1: '48.555555555555564',
          y2: '48.555555555555564',
        },
        {
          x1: '351.6666666666667',
          x2: '351.6666666666667',
          y1: '75.77777777777779',
          y2: '48.555555555555564',
        },
        {
          x1: '346.6666666666667',
          x2: '356.6666666666667',
          y1: '75.77777777777779',
          y2: '75.77777777777779',
        },
        {
          x1: '490',
          x2: '500',
          y1: '86.66666666666666',
          y2: '86.66666666666666',
        },
        {
          x1: '495',
          x2: '495',
          y1: '127.5',
          y2: '86.66666666666666',
        },
        {
          x1: '490',
          x2: '500',
          y1: '127.5',
          y2: '127.5',
        },
      ]);
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
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 3600]);
      expect(axisDomainSpy).toHaveBeenCalledTimes(6);
    });

    it('should extend XAxis domain', () => {
      const xAxisSpy = vi.fn();
      const Comp = (): null => {
        xAxisSpy(useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'xAxis', 0)));
        return null;
      };
      const { container, rerender } = render(
        <BarChart data={dataWithError} width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Bar isAnimationActive={false} dataKey="uv" />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expectErrorBars(container, []);
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
      expect(xAxisSpy).toHaveBeenLastCalledWith([0, 3400]);
      expect(xAxisSpy).toHaveBeenCalledTimes(3);

      rerender(
        <BarChart data={dataWithError} width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Bar isAnimationActive={false} dataKey="uv">
            <ErrorBar isAnimationActive animationEasing="linear" dataKey="uvError" direction="x" />
          </Bar>
          <Customized component={<Comp />} />
        </BarChart>,
      );
      expectErrorBars(container, [
        {
          x1: '284.02777777777777',
          x2: '284.02777777777777',
          y1: '219.94444444444443',
          y2: '209.94444444444443',
        },
        {
          x1: '263.6111111111111',
          x2: '284.02777777777777',
          y1: '214.94444444444443',
          y2: '214.94444444444443',
        },
        {
          x1: '263.6111111111111',
          x2: '263.6111111111111',
          y1: '219.94444444444443',
          y2: '209.94444444444443',
        },
        {
          x1: '473.22222222222223',
          x2: '473.22222222222223',
          y1: '53.83333333333335',
          y2: '43.83333333333335',
        },
        {
          x1: '437.8333333333333',
          x2: '473.22222222222223',
          y1: '48.83333333333335',
          y2: '48.83333333333335',
        },
        {
          x1: '437.8333333333333',
          x2: '437.8333333333333',
          y1: '53.83333333333335',
          y2: '43.83333333333335',
        },
        {
          x1: '451.44444444444446',
          x2: '451.44444444444446',
          y1: '66.61111111111114',
          y2: '56.611111111111136',
        },
        {
          x1: '424.22222222222223',
          x2: '451.44444444444446',
          y1: '61.611111111111136',
          y2: '61.611111111111136',
        },
        {
          x1: '424.22222222222223',
          x2: '424.22222222222223',
          y1: '66.61111111111114',
          y2: '56.611111111111136',
        },
        {
          x1: '413.3333333333333',
          x2: '413.3333333333333',
          y1: '117.72222222222221',
          y2: '107.72222222222221',
        },
        {
          x1: '372.5',
          x2: '413.3333333333333',
          y1: '112.72222222222221',
          y2: '112.72222222222221',
        },
        {
          x1: '372.5',
          x2: '372.5',
          y1: '117.72222222222221',
          y2: '107.72222222222221',
        },
      ]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '473',
        },
        {
          textContent: '900',
          x: '127.5',
          y: '473',
        },
        {
          textContent: '1800',
          x: '250',
          y: '473',
        },
        {
          textContent: '2700',
          x: '372.5',
          y: '473',
        },
        {
          textContent: '3600',
          x: '495',
          y: '473',
        },
      ]);
      expect(xAxisSpy).toHaveBeenLastCalledWith([0, 3600]);
      expect(xAxisSpy).toHaveBeenCalledTimes(6);
    });

    it('should extend XAxis domain when data is defined on the graphical item', () => {
      const xAxisSpy = vi.fn();
      const Comp = (): null => {
        xAxisSpy(useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'xAxis', 0)));
        return null;
      };
      const { container, rerender } = render(
        <LineChart width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Line isAnimationActive={false} dataKey="uv" data={dataWithError} />
          <Customized component={<Comp />} />
        </LineChart>,
      );

      expectErrorBars(container, []);
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
      expect(xAxisSpy).toHaveBeenLastCalledWith([0, 3400]);
      expect(xAxisSpy).toHaveBeenCalledTimes(3);

      rerender(
        <LineChart width={500} height={500}>
          <XAxis dataKey="uv" type="number" />
          <Line isAnimationActive={false} dataKey="uv" data={dataWithError}>
            <ErrorBar dataKey="uvError" direction="x" />
          </Line>
          <Customized component={<Comp />} />
        </LineChart>,
      );
      expectErrorBars(container, [
        {
          x1: '284.02777777777777',
          x2: '284.02777777777777',
          y1: '199.41176470588235',
          y2: '189.41176470588235',
        },
        {
          x1: '263.6111111111111',
          x2: '284.02777777777777',
          y1: '194.41176470588235',
          y2: '194.41176470588235',
        },
        {
          x1: '263.6111111111111',
          x2: '263.6111111111111',
          y1: '199.41176470588235',
          y2: '189.41176470588235',
        },
        {
          x1: '473.22222222222223',
          x2: '473.22222222222223',
          y1: '23.529411764705884',
          y2: '13.529411764705884',
        },
        {
          x1: '437.8333333333333',
          x2: '473.22222222222223',
          y1: '18.529411764705884',
          y2: '18.529411764705884',
        },
        {
          x1: '437.8333333333333',
          x2: '437.8333333333333',
          y1: '23.529411764705884',
          y2: '13.529411764705884',
        },
        {
          x1: '451.44444444444446',
          x2: '451.44444444444446',
          y1: '37.05882352941177',
          y2: '27.058823529411768',
        },
        {
          x1: '424.22222222222223',
          x2: '451.44444444444446',
          y1: '32.05882352941177',
          y2: '32.05882352941177',
        },
        {
          x1: '424.22222222222223',
          x2: '424.22222222222223',
          y1: '37.05882352941177',
          y2: '27.058823529411768',
        },
        {
          x1: '413.3333333333333',
          x2: '413.3333333333333',
          y1: '91.1764705882353',
          y2: '81.1764705882353',
        },
        {
          x1: '372.5',
          x2: '413.3333333333333',
          y1: '86.1764705882353',
          y2: '86.1764705882353',
        },
        {
          x1: '372.5',
          x2: '372.5',
          y1: '91.1764705882353',
          y2: '81.1764705882353',
        },
      ]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '473',
        },
        {
          textContent: '900',
          x: '127.5',
          y: '473',
        },
        {
          textContent: '1800',
          x: '250',
          y: '473',
        },
        {
          textContent: '2700',
          x: '372.5',
          y: '473',
        },
        {
          textContent: '3600',
          x: '495',
          y: '473',
        },
      ]);
      expect(xAxisSpy).toHaveBeenLastCalledWith([0, 3600]);
    });

    it('should extend domains to negative values', () => {
      const data = [
        { x: 100, y: 200, errorY: 30, errorX: 30 },
        { x: 120, y: 100, errorY: [500, 30], errorX: [200, 30] },
        { x: 170, y: 300, errorY: [10, 20], errorX: 20 },
        { x: 140, y: 250, errorY: 30, errorX: 20 },
        { x: 150, y: 400, errorY: [20, 300], errorX: 30 },
        { x: 110, y: 280, errorY: 40, errorX: 40 },
      ];

      const xValuesSpy = vi.fn();
      const yValuesSpy = vi.fn();

      const Comp = (): null => {
        xValuesSpy(useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'xAxis', 0)));
        yValuesSpy(useAppSelector(state => selectAllAppliedNumericalValuesIncludingErrorValues(state, 'yAxis', 0)));
        return null;
      };
      const { container } = render(
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Scatter data={data}>
            <ErrorBar dataKey="errorX" direction="x" />
            <ErrorBar dataKey="errorY" direction="y" />
          </Scatter>

          <Customized component={<Comp />} />
        </ScatterChart>,
      );

      expect(xValuesSpy).toHaveBeenLastCalledWith([
        {
          errorDomain: [70, 130],
          value: 100,
        },
        {
          errorDomain: [-80, 150],
          value: 120,
        },
        {
          errorDomain: [150, 190],
          value: 170,
        },
        {
          errorDomain: [120, 160],
          value: 140,
        },
        {
          errorDomain: [120, 180],
          value: 150,
        },
        {
          errorDomain: [70, 150],
          value: 110,
        },
      ]);
      expect(yValuesSpy).toHaveBeenLastCalledWith([
        {
          errorDomain: [170, 230],
          value: 200,
        },
        {
          errorDomain: [-400, 130],
          value: 100,
        },
        {
          errorDomain: [290, 320],
          value: 300,
        },
        {
          errorDomain: [220, 280],
          value: 250,
        },
        {
          errorDomain: [380, 700],
          value: 400,
        },
        {
          errorDomain: [240, 320],
          value: 280,
        },
      ]);
      expectXAxisTicks(container, [
        {
          textContent: '-80',
          x: '80',
          y: '358',
        },
        {
          textContent: '0',
          x: '155',
          y: '358',
        },
        {
          textContent: '80',
          x: '230',
          y: '358',
        },
        {
          textContent: '160',
          x: '305',
          y: '358',
        },
        {
          textContent: '240',
          x: '380',
          y: '358',
        },
      ]);

      expectYAxisTicks(container, [
        {
          textContent: '-700',
          x: '72',
          y: '350',
        },
        {
          textContent: '-350',
          x: '72',
          y: '267.5',
        },
        {
          textContent: '0',
          x: '72',
          y: '185',
        },
        {
          textContent: '350',
          x: '72',
          y: '102.5',
        },
        {
          textContent: '700',
          x: '72',
          y: '20',
        },
      ]);
    });
  });
});
