import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, test, expect, vi } from 'vitest';
import {
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  LegendType,
  Area,
  AreaChart,
  ComposedChart,
  PieChart,
  Pie,
  Radar,
  RadarChart,
  RadialBarChart,
  RadialBar,
} from '../../src';

function assertHasLegend(container: HTMLElement) {
  expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
  return container.querySelectorAll('.recharts-default-legend .recharts-legend-item');
}

type LegendTypeTestCases = ReadonlyArray<{
  legendType: LegendType;
  selector: string;
  expectedAttributes: Record<string, string>;
}>;

/**
 * Bar legend for some reason has no default color at all.
 * I think that's because Bar has no default fill nor stroke.
 */
const expectedLegendTypeSymbolsWithoutColor: LegendTypeTestCases = [
  {
    legendType: 'circle',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'cross',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M-16,-5.333L-5.333,-5.333L-5.333,-16L5.333,-16L5.333,-5.333L16,-5.333L16,5.333L5.333,5.333L5.333,16L-5.333,16L-5.333,5.333L-16,5.333Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'diamond',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-16L9.238,0L0,16L-9.238,0Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'line',
    selector: 'path.recharts-legend-icon',
    expectedAttributes: {
      // d attribute path is sensitive to whitespace!
      d: `M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16`,
      fill: 'none',
      'stroke-width': '4',
      class: 'recharts-legend-icon',
    },
  },
  {
    legendType: 'plainline',
    selector: 'line.recharts-legend-icon',
    expectedAttributes: {
      class: 'recharts-legend-icon',
      x1: '0',
      x2: '32',
      y1: '16',
      y2: '16',
      fill: 'none',
      'stroke-width': '4',
    },
  },
  {
    legendType: 'rect',
    selector: 'path.recharts-legend-icon',
    expectedAttributes: {
      d: 'M0,4h32v24h-32z',
      class: 'recharts-legend-icon',
      stroke: 'none',
    },
  },
  {
    legendType: 'square',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M-16,-16h32v32h-32Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'star',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-16.823L3.777,-5.199L16,-5.199L6.111,1.986L9.889,13.61L0,6.426L-9.889,13.61L-6.111,1.986L-16,-5.199L-3.777,-5.199Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'triangle',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-18.475L16,9.238L-16,9.238Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
  {
    legendType: 'wye',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M5.856,3.381L5.856,15.094L-5.856,15.094L-5.856,3.381L-16,-2.475L-10.144,-12.619L0,-6.762L10.144,-12.619L16,-2.475Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
    },
  },
];

/**
 * Different chart elements have different default colors (don't ask me why)
 * so this accepts the color as an argument.
 *
 * @param color expected color of individual elements
 * @returns test cases ready for test.each
 */
const expectedLegendTypeSymbolsWithColor = (color: string): LegendTypeTestCases => [
  {
    legendType: 'circle',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'cross',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M-16,-5.333L-5.333,-5.333L-5.333,-16L5.333,-16L5.333,-5.333L16,-5.333L16,5.333L5.333,5.333L5.333,16L-5.333,16L-5.333,5.333L-16,5.333Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'diamond',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-16L9.238,0L0,16L-9.238,0Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'line',
    selector: 'path.recharts-legend-icon',
    expectedAttributes: {
      // d attribute path is sensitive to whitespace!
      d: `M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16`,
      fill: 'none',
      'stroke-width': '4',
      class: 'recharts-legend-icon',
      stroke: color,
    },
  },
  {
    legendType: 'plainline',
    selector: 'line.recharts-legend-icon',
    expectedAttributes: {
      class: 'recharts-legend-icon',
      x1: '0',
      x2: '32',
      y1: '16',
      y2: '16',
      fill: 'none',
      stroke: color,
      'stroke-width': '4',
    },
  },
  {
    legendType: 'rect',
    selector: 'path.recharts-legend-icon',
    expectedAttributes: {
      d: 'M0,4h32v24h-32z',
      class: 'recharts-legend-icon',
      stroke: 'none',
      fill: color,
    },
  },
  {
    legendType: 'square',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M-16,-16h32v32h-32Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'star',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-16.823L3.777,-5.199L16,-5.199L6.111,1.986L9.889,13.61L0,6.426L-9.889,13.61L-6.111,1.986L-16,-5.199L-3.777,-5.199Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'triangle',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M0,-18.475L16,9.238L-16,9.238Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
  {
    legendType: 'wye',
    selector: 'path.recharts-symbols',
    expectedAttributes: {
      d: 'M5.856,3.381L5.856,15.094L-5.856,15.094L-5.856,3.381L-16,-2.475L-10.144,-12.619L0,-6.762L10.144,-12.619L16,-2.475Z',
      class: 'recharts-symbols',
      cx: '16',
      cy: '16',
      transform: 'translate(16, 16)',
      fill: color,
    },
  },
];

function assertExpectedAttributes(
  container: HTMLElement,
  selector: string,
  expectedAttributes: Record<string, string>,
) {
  const [legendItem] = assertHasLegend(container);
  const symbol = legendItem.querySelector(selector);
  expect(symbol).toBeInTheDocument();
  const expectedAttributeNames = Object.keys(expectedAttributes);
  expect.soft(symbol?.getAttributeNames().sort()).toEqual(expectedAttributeNames.sort());
  expectedAttributeNames.forEach(attributeName => {
    expect.soft(symbol).toHaveAttribute(attributeName, expectedAttributes[attributeName]);
  });
}

describe('<Legend />', () => {
  const categoricalData = [
    { value: 'Apple', color: '#ff7300' },
    { value: 'Samsung', color: '#bb7300' },
    { value: 'Huawei', color: '#887300' },
    { value: 'Sony', color: '#667300' },
  ];

  const numericalData = [
    { value: 'Luck', percent: 10 },
    { value: 'Skill', percent: 20 },
    { value: 'Concentrated power of will', percent: 15 },
    { value: 'Pleasure', percent: 50 },
    { value: 'Pain', percent: 50 },
    { value: 'Reason to remember the name', percent: 100 },
  ];

  /**
   * PieChart, and RadialBarChar, have this specialty where they read properties `name` and `fill`
   * and use them to set labels, and to set legend colors.
   *
   * Other charts use `nameKey` and `fill` or `stroke` properties.
   */
  const dataWithSpecialNameAndFillProperties = [
    { name: 'name1', fill: 'fill1', value: 12 },
    { name: 'name2', fill: 'fill2', value: 34 },
    { name: 'name3', fill: 'fill3', value: 56 },
    { name: 'name4', fill: 'fill4', value: 78 },
  ];

  describe('outside of chart context', () => {
    test('Render 4 legend items in simple Legend', () => {
      const { container } = render(<Legend width={500} height={30} payload={categoricalData} />);

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(4);
    });

    test('Render customized legend when content is set to be a react element', () => {
      const CustomizedLegend = () => <div className="customized-legend">test</div>;
      const { container } = render(
        <Legend width={500} height={30} payload={categoricalData} content={<CustomizedLegend />} />,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      expect(container.querySelectorAll('.customized-legend')).toHaveLength(1);
    });

    test('Does not render items with a type of `none`', () => {
      const dataWithNone = [
        { value: 'Apple', color: '#ff7300' },
        { value: 'Samsung', color: '#bb7300' },
        { value: 'Huawei', color: '#887300' },
        { value: 'Sony', type: 'none' },
      ];
      const { container } = render(<Legend width={500} height={30} payload={dataWithNone as any} />);

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(3);
    });

    test('Renders payload value correctly when passed as a static value', () => {
      render(<Legend payload={[{ value: 'item name' }]} />);
      screen.getByText(/item name/i);
    });
  });

  describe('as a child of LineChart', () => {
    test('Renders `strokeDasharray` (if present) in Legend when iconType is set to `plainline`', () => {
      const { container } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend iconType="plainline" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(2);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item path')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item line')).toHaveLength(2);
    });

    test('Does not render `strokeDasharray` (if not present) when iconType is not set to `plainline`', () => {
      const { container } = render(
        <LineChart width={600} height={300} data={categoricalData}>
          <Legend iconType="line" />
          <Line dataKey="pv" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(2);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item path')).toHaveLength(2);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item line')).toHaveLength(0);
    });
    test('Renders name value of siblings when dataKey is a function', () => {
      render(
        <LineChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Line dataKey={row => row.value} name="My Line Data" />
          <Line dataKey={row => row.color} name="My Other Line Data" />
        </LineChart>,
      );

      // Select the text that was passed into the siblings as a name prop, but rendered in the Legend component.
      screen.getByText(/My Line Data/i);
      screen.getByText(/My Other Line Data/i);
    });

    test(`Renders '' if sibling's dataKey is a function and name is not provided`, () => {
      // Warning should be logged. Spy on it so we can confirm it was called.
      const consoleWarn = vi.spyOn(console, 'warn');

      render(
        <LineChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Line dataKey={row => row.value} />
          <Line dataKey={row => row.color} />
        </LineChart>,
      );

      const legendItems = screen.getAllByRole(/listitem/i);
      legendItems.forEach(item => {
        expect(item).toHaveTextContent('');
      });

      expect(consoleWarn).toHaveBeenCalledWith(
        'The name property is also required when using ' +
          "a function for the dataKey of a chart's cartesian components. " +
          'Ex: <Bar name="Name of my Data"/>',
      );
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container, debug } = render(
            <LineChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Line dataKey="value" legendType={legendType} />
            </LineChart>,
          );
          const [legendItem] = assertHasLegend(container);
          const symbol = legendItem.querySelector(selector);
          if (symbol == null) {
            debug();
          }
          expect(symbol).toBeInTheDocument();
          const expectedAttributeNames = Object.keys(expectedAttributes);
          expect.soft(symbol?.getAttributeNames().sort()).toEqual(expectedAttributeNames.sort());
          expectedAttributeNames.forEach(attributeName => {
            expect.soft(symbol).toHaveAttribute(attributeName, expectedAttributes[attributeName]);
          });
        },
      );
    });
  });

  describe('as a child of BarChart', () => {
    it('should render one legend item for each bar', () => {
      const { container, getByText } = render(
        <BarChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Bar dataKey="value" />
          <Bar dataKey="color" />
        </BarChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('color')).toBeInTheDocument();
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithoutColor)(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <BarChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Bar dataKey="value" legendType={legendType} />
            </BarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of AreaChart', () => {
    it('should render one legend item for each bar', () => {
      const { container, getByText } = render(
        <AreaChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Area dataKey="value" />
          <Area dataKey="color" />
        </AreaChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('color')).toBeInTheDocument();
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <AreaChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Area dataKey="value" legendType={legendType} />
            </AreaChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of ComposedChart', () => {
    it('should render one legend item for each bar', () => {
      const { container, getByText } = render(
        <ComposedChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Area dataKey="value" />
          <Bar dataKey="color" />
        </ComposedChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('color')).toBeInTheDocument();
    });

    describe('legendType symbols for Area', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <ComposedChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Area dataKey="value" legendType={legendType} />
            </ComposedChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    describe('legendType symbols for Bar', () => {
      test.each(expectedLegendTypeSymbolsWithoutColor)(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <ComposedChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Bar dataKey="value" legendType={legendType} />
            </ComposedChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    describe('legendType symbols for Line', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <ComposedChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Line dataKey="value" legendType={legendType} />
            </ComposedChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of PieChart', () => {
    it('should render one legend item for each segment, and it should use nameKey as its label', () => {
      const { container, getByText } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" nameKey="value" />
        </PieChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(numericalData.length);
      numericalData.forEach(({ value }) => expect(getByText(value)).toBeInTheDocument());
    });

    it('should use special `name` and `fill` properties from data as legend labels and colors', () => {
      const { container, getByText } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={dataWithSpecialNameAndFillProperties} dataKey="percent" />
        </PieChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(dataWithSpecialNameAndFillProperties.length);
      dataWithSpecialNameAndFillProperties.forEach(({ name }) => expect.soft(getByText(name)).toBeInTheDocument());
      legendItems.forEach((legendItem, index) => {
        const icon = legendItem.querySelector('.recharts-legend-icon');
        expect.soft(icon).toHaveAttribute('fill', dataWithSpecialNameAndFillProperties[index].fill);
      });
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#808080'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <PieChart width={500} height={500}>
              <Legend />
              <Pie data={numericalData} dataKey="percent" legendType={legendType} />
            </PieChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of RadarChart', () => {
    it('should render one legend item for each Radar', () => {
      const { container, getByText } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="percent" />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('percent')).toBeInTheDocument();
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithoutColor)(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadarChart width={500} height={500} data={numericalData}>
              <Legend />
              <Radar dataKey="percent" legendType={legendType} />
            </RadarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    describe('legendType symbols with explicit fill', () => {
      test.each(expectedLegendTypeSymbolsWithColor('red'))(
        'should render legend colors for $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadarChart width={500} height={500} data={numericalData}>
              <Legend />
              <Radar dataKey="percent" legendType={legendType} fill="red" />
            </RadarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of RadialBarChart', () => {
    it('should render one legend item for each segment, but with no label text by default', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend />
          <RadialBar dataKey="percent" label />
        </RadialBarChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(numericalData.length);
      legendItems.forEach(legendItem => {
        const legendItemText = legendItem.querySelector('.recharts-legend-item-text');
        expect(legendItemText).toBeInTheDocument();
        expect(legendItemText).toBeEmptyDOMElement();
      });
    });

    it('should use special `name` and `fill` properties from data as legend labels and colors', () => {
      const { container, getByText } = render(
        <RadialBarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <RadialBar dataKey="percent" />
        </RadialBarChart>,
      );
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(dataWithSpecialNameAndFillProperties.length);
      dataWithSpecialNameAndFillProperties.forEach(({ name }) => expect.soft(getByText(name)).toBeInTheDocument());
      legendItems.forEach((legendItem, index) => {
        const icon = legendItem.querySelector('.recharts-legend-icon');
        expect.soft(icon).toHaveAttribute('fill', dataWithSpecialNameAndFillProperties[index].fill);
      });
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithoutColor)(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadialBarChart width={500} height={500} data={numericalData}>
              <Legend />
              <RadialBar dataKey="percent" legendType={legendType} />
            </RadialBarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });
});
