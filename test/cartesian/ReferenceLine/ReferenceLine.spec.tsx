import React from 'react';
import { MockInstance, vi, beforeEach, describe, it, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import {
  BarChart,
  ReferenceLine,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Customized,
  Brush,
  ComposedChart,
} from '../../../src';
import { CartesianViewBox } from '../../../src/util/types';
import { useAppSelector } from '../../../src/state/hooks';
import { selectAxisRangeWithReverse, selectReferenceLinesByAxis } from '../../../src/state/selectors/axisSelectors';
import { pageData } from '../../../storybook/stories/data';
import { assertNotNull } from '../../helper/assertNotNull';
import { selectBrushDimensions, selectBrushSettings } from '../../../src/state/selectors/brushSelectors';

type ExpectedReferenceLine = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
};

function expectReferenceLines(container: Element, expectedLines: ReadonlyArray<ExpectedReferenceLine>) {
  assertNotNull(container);
  const referenceLines = container.querySelectorAll('.recharts-reference-line-line');
  assertNotNull(referenceLines);
  const referenceLinesContexts = Array.from(referenceLines).map(line => ({
    x1: line.getAttribute('x1'),
    x2: line.getAttribute('x2'),
    y1: line.getAttribute('y1'),
    y2: line.getAttribute('y2'),
  }));
  expect(referenceLinesContexts).toEqual(expectedLines);
}

describe('<ReferenceLine />', () => {
  let consoleSpy: MockInstance<(...args: any[]) => void>;
  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);
  });

  const data = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
  ];

  test('Renders 1 line in each ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expectReferenceLines(container, [
      {
        x1: '412.72727272727275',
        x2: '412.72727272727275',
        y1: '50',
        y2: '250',
      },
      {
        x1: '980',
        x2: '20',
        y1: '150',
        y2: '150',
      },
    ]);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Renders 1 line in ReferenceLine in vertical barchart', () => {
    const { container } = render(
      <BarChart
        layout="vertical"
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis type="number" orientation="top" />
        <YAxis type="category" dataKey="name" tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y="201106" stroke="#666" label="201106" />
        <ReferenceLine x={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expectReferenceLines(container, [
      {
        x1: '980',
        x2: '20',
        y1: '131.8181818181818',
        y2: '131.8181818181818',
      },
      {
        x1: '500',
        x2: '500',
        y1: '50',
        y2: '250',
      },
    ]);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Renders line segment in ReferenceLine when segment is set', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine x="201106" stroke="#666" label="201106" />
        <ReferenceLine y={0} stroke="#666" label="0" />
      </BarChart>,
    );
    expectReferenceLines(container, [
      {
        x1: '412.72727272727275',
        x2: '412.72727272727275',
        y1: '50',
        y2: '250',
      },
      {
        x1: '980',
        x2: '20',
        y1: '150',
        y2: '150',
      },
    ]);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test("Don't renders 1 line in ReferenceLine when no x or y is set", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="top" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine stroke="#666" label="0" />
      </BarChart>,
    );
    expectReferenceLines(container, []);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test("Don't render any line or label when reference line is outside domain in ReferenceLine", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" orientation="bottom" />
        <YAxis tickCount={7} orientation="right" />
        <Bar dataKey="uv" />
        <ReferenceLine y={200} stroke="#666" />
        <ReferenceLine x="20150201" stroke="#666" />
      </BarChart>,
    );
    expectReferenceLines(container, []);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render line and label when ifOverflow is extendDomain in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expectReferenceLines(container, [
      {
        x1: '123.63636363636368',
        x2: '123.63636363636368',
        y1: '220',
        y2: '20',
      },
      {
        x1: '80',
        x2: '1040',
        y1: '20',
        y2: '20',
      },
    ]);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
  });

  test('Render line and label when ifOverflow is "extendDomain" in ReferenceLine', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine x="201102" label="test" stroke="#666" />
        <ReferenceLine y={20} stroke="#666" label="20" ifOverflow="extendDomain" />
      </BarChart>,
    );
    expectReferenceLines(container, [
      {
        x1: '123.63636363636368',
        x2: '123.63636363636368',
        y1: '220',
        y2: '20',
      },
      {
        x1: '80',
        x2: '1040',
        y1: '20',
        y2: '20',
      },
    ]);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(2);
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('Render 1 line and 1 label when label is set to be a function in ReferenceLine', () => {
    const renderLabel = (props: any) => {
      const { x, y } = props;

      return (
        <text className="customized-reference-line-label" x={x} y={y}>
          any
        </text>
      );
    };
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" label={renderLabel} ifOverflow="visible" />
      </BarChart>,
    );

    expectReferenceLines(container, [
      {
        x1: '80',
        x2: '1040',
        y1: '-102.22222222222223',
        y2: '-102.22222222222223',
      },
    ]);
    expect(container.querySelectorAll('.customized-reference-line-label')).toHaveLength(1);
  });

  test("Don't Render 1 label when label=true", () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" label />
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-label')).toHaveLength(0);
  });

  test('Render custom label when label is set to react element', () => {
    const Label = ({ text, ...props }: { text: any }) => <text {...props}>{text}</text>;
    render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Bar dataKey="uv" />
        <ReferenceLine y={20} stroke="#666" ifOverflow="visible" label={<Label text="Custom Text" />} />
      </BarChart>,
    );
    expect(screen.findByText('Custom Text')).toBeTruthy();
  });

  test('viewBox is a string in SVG but object in recharts, but recharts filters the viewBox prop away', () => {
    const spy = vi.fn();
    const viewBox: CartesianViewBox = { x: 1, y: 2 };
    render(
      <BarChart width={1100} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <ReferenceLine y={20} ifOverflow="visible" shape={spy} viewBox={viewBox} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      clipPath: undefined,
      fill: 'none',
      fillOpacity: 1,
      stroke: '#ccc',
      strokeWidth: 1,
      x1: 65,
      x2: 1095,
      y: 20,
      y1: -152.5,
      y2: -152.5,
    });
  });

  it('should not render anything when used without any axes', () => {
    const { container } = render(
      <BarChart width={1100} height={250}>
        <ReferenceLine />
      </BarChart>,
    );
    expectReferenceLines(container, []);
  });

  it('should not render anything when rendered without YAxis', () => {
    const { container } = render(
      <BarChart width={1100} height={250}>
        <XAxis />
        <ReferenceLine x={20} />
      </BarChart>,
    );
    expectReferenceLines(container, []);
  });

  it('should not render anything when rendered without XAxis', () => {
    const { container } = render(
      <BarChart width={1100} height={250}>
        <YAxis />
        <ReferenceLine y={20} />
      </BarChart>,
    );
    expectReferenceLines(container, []);
  });

  it('should not render anything when passed in invalid xAxisId', () => {
    const { container } = render(
      <BarChart width={1100} height={250}>
        <XAxis />
        <YAxis />
        <ReferenceLine xAxisId="this ID definitely does not exist anywhere" />
      </BarChart>,
    );
    expectReferenceLines(container, []);
  });

  it('should not render anything when passed in invalid yAxisId', () => {
    const { container } = render(
      <BarChart
        width={1100}
        height={250}
        barGap={2}
        barSize={6}
        data={data}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis />
        <YAxis />
        <ReferenceLine yAxisId="this ID definitely does not exist anywhere" />
      </BarChart>,
    );

    expectReferenceLines(container, []);
  });

  it('should not render anything when rendered alone, outside of context', () => {
    const { container } = render(<ReferenceLine x={20} />);
    expectReferenceLines(container, []);
  });

  it('should not return anything when rendered as a nested child', () => {
    const { container } = render(
      <BarChart width={1100} height={250}>
        <XAxis />
        <YAxis />
        <p>
          <ReferenceLine y={20} ifOverflow="visible" />
        </p>
      </BarChart>,
    );
    expectReferenceLines(container, []);
  });

  it('should render one line when there is a duplicated category', () => {
    const firstDataItem = data[0];
    const dataWithDupe = [...data, firstDataItem];
    const { container } = render(
      <BarChart width={1100} height={250} data={dataWithDupe}>
        <XAxis dataKey="name" />
        <YAxis />
        <ReferenceLine y={firstDataItem.name} ifOverflow="extendDomain" />
      </BarChart>,
    );
    const allLines = container.querySelectorAll('.recharts-reference-line-line');
    expect(allLines).toHaveLength(1);
    // Is this correct? That looks like a category, not pixel coordinate.
    expect(allLines[0]).toHaveAttribute('y', '201102');
    expect(allLines[0]).not.toHaveAttribute('x');

    expectReferenceLines(container, [
      {
        x1: '65',
        x2: '1095',
        y1: '23.038999999999994',
        y2: '23.038999999999994',
      },
    ]);
  });

  /**
   * Note: this test will fail if we remove defaultProps without proper refactoring
   * https://github.com/recharts/recharts/issues/3615
   */
  test('extends the domain when ifOverflow="extendDomain" and y value is out of normal bounds', () => {
    const dataMax = Math.max(...data.map(d => d.uv));
    const { container } = render(
      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" />
        {/* extend the domain by ~100 */}
        <ReferenceLine y={dataMax + 100} ifOverflow="extendDomain" />
      </LineChart>,
    );
    const refLine = container.querySelectorAll('.recharts-reference-line-line');
    const yAxis = container.querySelector('.recharts-yAxis');
    const ticks = yAxis.querySelectorAll('.recharts-cartesian-axis-tick-value');
    const topTick = ticks[ticks.length - 1];
    expect(refLine).toHaveLength(1);

    expect(refLine[0]).toHaveAttribute('y', '104.3');
    expect(topTick.textContent).toEqual('105');
  });

  describe('state integration', () => {
    it('should report its settings to Redux state, and remove it after removing from DOM', () => {
      const lineSpy = vi.fn();
      const Comp = (): null => {
        lineSpy(useAppSelector(state => selectReferenceLinesByAxis(state, 'yAxis', 0)));
        return null;
      };
      const { rerender } = render(
        <BarChart width={1100} height={250}>
          <XAxis />
          <YAxis />
          <ReferenceLine y={20} ifOverflow="extendDomain" />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expect(lineSpy).toHaveBeenLastCalledWith([
        {
          ifOverflow: 'extendDomain',
          x: undefined,
          xAxisId: 0,
          y: 20,
          yAxisId: 0,
        },
      ]);
      expect(lineSpy).toHaveBeenCalledTimes(2);

      rerender(
        <BarChart width={1100} height={250}>
          <XAxis />
          <YAxis />
          <Customized component={<Comp />} />
        </BarChart>,
      );

      expect(lineSpy).toHaveBeenLastCalledWith([]);
      expect(lineSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe('panorama', () => {
    it('should render two ReferenceLines in a Brush panorama', () => {
      const brushDimensionsSpy = vi.fn();
      const brushPaddingSpy = vi.fn();
      const rootYAxisRangeSpy = vi.fn();
      const panoramaYAxisRangeSpy = vi.fn();
      const rootXAxisRangeSpy = vi.fn();
      const panoramaXAxisRangeSpy = vi.fn();
      const RootComp = (): null => {
        brushDimensionsSpy(useAppSelector(selectBrushDimensions));
        brushPaddingSpy(useAppSelector(selectBrushSettings)?.padding);
        rootYAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, false)));
        rootXAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', 0, false)));
        return null;
      };

      const PanoramaComp = (): null => {
        panoramaYAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, true)));
        panoramaXAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', 0, true)));
        return null;
      };

      const { container } = render(
        <ComposedChart width={600} height={300} data={pageData} margin={{ top: 11, right: 13, left: 17, bottom: 19 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <ReferenceLine y={1000} />
          <ReferenceLine x="Page C" />
          <Line dataKey="pv" />
          <Line dataKey="uv" />
          <Brush dataKey="name" padding={{ bottom: 1, left: 3, right: 5, top: 9 }}>
            <LineChart>
              <ReferenceLine y={1000} />
              <ReferenceLine x="Page C" />
              <Line dataKey="pv" />
              <Line dataKey="uv" />
              <Customized component={<PanoramaComp />} />
            </LineChart>
          </Brush>
          <Customized component={<RootComp />} />
        </ComposedChart>,
      );

      expect(rootYAxisRangeSpy).toHaveBeenLastCalledWith([211, 11]);
      expect(panoramaYAxisRangeSpy).toHaveBeenLastCalledWith([39, 9]);

      expect(rootXAxisRangeSpy).toHaveBeenLastCalledWith([77, 587]);
      expect(panoramaXAxisRangeSpy).toHaveBeenLastCalledWith([3, 505]);

      expect(brushDimensionsSpy).toHaveBeenLastCalledWith({
        height: 40,
        width: 510,
        x: 77,
        y: 241,
      });

      expect(brushPaddingSpy).toHaveBeenLastCalledWith({
        bottom: 1,
        left: 3,
        right: 5,
        top: 9,
      });

      expectReferenceLines(container, [
        {
          x1: '77',
          x2: '587',
          y1: '86',
          y2: '86',
        },
        {
          x1: '247',
          x2: '247',
          y1: '211',
          y2: '11',
        },
        {
          x1: '3',
          x2: '505',
          y1: '20.25',
          y2: '20.25',
        },
        {
          x1: '170.33333333333334',
          x2: '170.33333333333334',
          y1: '39',
          y2: '9',
        },
      ]);
    });
  });
});
