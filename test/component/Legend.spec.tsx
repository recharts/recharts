import React, { CSSProperties, useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Customized,
  Legend,
  LegendProps,
  LegendType,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Surface,
} from '../../src';
import { testChartLayoutContext } from '../util/context';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { assertNotNull } from '../helper/assertNotNull';
import { expectBars } from '../helper/expectBars';
import { useAppSelector } from '../../src/state/hooks';
import { selectAxisRangeWithReverse } from '../../src/state/selectors/axisSelectors';
import { selectLegendPayload, selectLegendSize } from '../../src/state/selectors/legendSelectors';
import { LegendPortalContext } from '../../src/context/legendPortalContext';
import { dataWithSpecialNameAndFillProperties, numericalData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Size } from '../../src/util/types';
import { assertHasLegend, expectLegendLabels } from '../helper/expectLegendLabels';

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
 * @returns test cases ready for `test.each`
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
  expect(symbol).not.toBeNull();
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

  const numericalData2 = [
    { title: 'Luftbaloons', value: 99 },
    { title: 'Miles I would walk', value: 500 },
    { title: 'Days a week', value: 8 },
    { title: 'Mambo number', value: 5 },
    { title: 'Seas of Rhye', value: 7 },
  ];

  describe('outside of chart context', () => {
    it('should ignore payload prop', () => {
      // @ts-expect-error payload is now omitted from Legend types
      const { container } = render(<Legend width={500} height={30} payload={categoricalData} />);

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-default-legend .recharts-legend-item')).toHaveLength(0);
    });
  });

  describe('custom content as a react element', () => {
    it('should render result', () => {
      const CustomizedLegend = () => <div className="customized-legend">customized legend item</div>;

      function Example() {
        const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

        return (
          <>
            <LegendPortalContext.Provider value={portalRef}>
              {/* @ts-expect-error payload is now omitted from Legend types */}
              <Legend width={500} height={30} payload={categoricalData} content={<CustomizedLegend />} />,
            </LegendPortalContext.Provider>
            <div
              data-testid="my-custom-portal-target"
              ref={node => {
                if (portalRef == null && node != null) {
                  setPortalRef(node);
                }
              }}
            />
          </>
        );
      }

      const { container } = render(<Example />);

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      expect(container.querySelectorAll('.customized-legend')).toHaveLength(1);
    });

    it('should render a custom component wrapped legend', () => {
      const CustomLegend = (props: LegendProps) => <Legend {...props} />;
      const { container } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CustomLegend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);
    });

    it('should inject extra sneaky props - but none of them are actual HTML props so they get ignored by React', () => {
      const CustomizedLegend = () => <div className="customized-legend">customized legend item</div>;
      const { container } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend content={<CustomizedLegend />} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      const legendItem = container.querySelectorAll('.customized-legend')[0];
      expect(legendItem.getAttributeNames().sort()).toEqual(['class'].sort());
    });
  });

  describe('content as a function', () => {
    it('should render result', () => {
      const customizedLegend = () => {
        return 'custom return value';
      };
      const { container, getByText } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend content={customizedLegend} />
          <Line dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      expect(getByText('custom return value')).toBeInTheDocument();
      expect(getByText('custom return value')).toBeVisible();
    });

    it('should pass parameters to the function', () => {
      mockGetBoundingClientRect({ width: 70, height: 20 });
      const spy = vi.fn();
      const customContent = (params: unknown): null => {
        spy(params);
        return null;
      };
      render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend content={customContent} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith({
        align: 'center',
        chartHeight: 300,
        chartWidth: 600,
        content: customContent,
        iconSize: 14,
        itemSorter: 'value',
        layout: 'horizontal',
        margin: {
          bottom: 5,
          left: 20,
          right: 30,
          top: 5,
        },
        payload: [
          {
            color: '#8884d8',
            dataKey: 'pv',
            inactive: false,
            payload: {
              activeDot: {
                r: 8,
              },
              animateNewValues: true,
              animationBegin: 0,
              animationDuration: 1500,
              animationEasing: 'ease',
              connectNulls: false,
              dataKey: 'pv',
              dot: true,
              fill: '#fff',
              hide: false,
              isAnimationActive: true,
              label: false,
              legendType: 'line',
              stroke: '#8884d8',
              strokeDasharray: '5 5',
              strokeWidth: 1,
              type: 'monotone',
              xAxisId: 0,
              yAxisId: 0,
            },
            type: 'line',
            value: 'pv',
          },
          {
            color: '#82ca9d',
            dataKey: 'uv',
            inactive: false,
            payload: {
              activeDot: true,
              animateNewValues: true,
              animationBegin: 0,
              animationDuration: 1500,
              animationEasing: 'ease',
              connectNulls: false,
              dataKey: 'uv',
              dot: true,
              fill: '#fff',
              hide: false,
              isAnimationActive: true,
              label: false,
              legendType: 'line',
              stroke: '#82ca9d',
              strokeWidth: 1,
              type: 'monotone',
              xAxisId: 0,
              yAxisId: 0,
            },
            type: 'line',
            value: 'uv',
          },
        ],
        verticalAlign: 'bottom',
        width: 550,
      });
    });
  });

  describe('content as a React Component', () => {
    it('should render result', () => {
      const CustomizedLegend = () => {
        return <>custom return value</>;
      };
      const { container, getByText } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend content={CustomizedLegend} />
          <Line dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);
      expect(getByText('custom return value')).toBeInTheDocument();
      expect(getByText('custom return value')).toBeVisible();
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
      const { container } = render(
        <LineChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Line dataKey={row => row.value} name="My Line Data" />
          <Line dataKey={row => row.color} name="My Other Line Data" />
        </LineChart>,
      );

      expectLegendLabels(container, [
        { textContent: 'My Line Data', fill: 'none' },
        { textContent: 'My Other Line Data', fill: 'none' },
      ]);
    });

    test('Legend defaults are read correctly', () => {
      const { container } = render(
        <LineChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Line dataKey={row => row.value} name="My Line Data" />
          <Line dataKey={row => row.color} name="My Other Line Data" />
        </LineChart>,
      );

      const legendWrapper = container.getElementsByClassName('recharts-legend-wrapper')[0];
      expect(legendWrapper).not.toHaveStyle({ width: 'auto' });
      expect(legendWrapper).toHaveStyle({ height: 'auto' });
      const legendItem = container.getElementsByClassName('legend-item-0')[0];
      const surface = legendItem.getElementsByClassName('recharts-surface')[0];
      expect(surface.getAttribute('height')).toBe('14');
      expect(surface.getAttribute('width')).toBe('14');
      expect(surface.getAttribute('aria-label')).toBe('My Line Data legend icon');
    });

    it('should render one line legend item for each Line, with default class and style attributes', () => {
      const { container, getByText } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="percent" />
          <Line dataKey="value" />
        </LineChart>,
      );
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('percent')).toBeInTheDocument();

      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');
      expect.soft(legendItems[1].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[1].getAttribute('class')).toBe('recharts-legend-item legend-item-1');
      expect.soft(legendItems[1].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Line should default to line
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
        tc => tc.legendType === 'line',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container, getByText } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="unknown" />
        </LineChart>,
      );
      expect(getByText('unknown')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(1);
      expect(legendItems[0].textContent).toBe('unknown');
    });

    it('should change color and className of hidden Line', () => {
      const { container, getByText } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend inactiveColor="yellow" />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Line dataKey="percent" stroke="red" hide />
        </LineChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Line should default to line
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('yellow').find(
        tc => tc.legendType === 'line',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should have a default inactive Line legend color', () => {
      const { container, getByText } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Line dataKey="percent" stroke="red" hide />
        </LineChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Line should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#ccc').find(
        tc => tc.legendType === 'line',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render one empty legend item if Line has no dataKey', () => {
      const { container } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          {/* I wonder if dataKey should be required here, like it is in Radar? */}
          <Line />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: '' }]);
    });

    it('should set legend item from `name` prop on Line, and update it after rerender', () => {
      const { container, rerender } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="percent" name="%" />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: '%' }]);

      rerender(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="percent" name="Percent" />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'Percent' }]);
    });

    it('should not implicitly read `name` and `fill` properties from the data array', () => {
      const { container } = render(
        <LineChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Line dataKey="value" />
        </LineChart>,
      );

      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
    });

    it('should disappear after Line element is removed', () => {
      const { container, rerender } = render(
        <LineChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Line dataKey="name" />
          <Line dataKey="value" />
        </LineChart>,
      );
      expectLegendLabels(container, [
        { fill: 'none', textContent: 'name' },
        { fill: 'none', textContent: 'value' },
      ]);

      rerender(
        <LineChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Line dataKey="value" />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
    });

    it('should update legend if Line data changes', () => {
      const { container, rerender } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="value" />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);

      rerender(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend />
          <Line dataKey="percent" />
        </LineChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'percent' }]);
    });

    it('should pass parameters to the Component', () => {
      mockGetBoundingClientRect({ width: 80, height: 30 });
      const spy = vi.fn();
      const CustomContent = (props: unknown): null => {
        spy(props);
        return null;
      };
      render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend content={CustomContent} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );
      expect.soft(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith({
        align: 'center',
        chartHeight: 300,
        chartWidth: 600,
        content: expect.any(Function),
        iconSize: 14,
        itemSorter: 'value',
        layout: 'horizontal',
        margin: {
          bottom: 5,
          left: 20,
          right: 30,
          top: 5,
        },
        payload: [
          {
            color: '#8884d8',
            dataKey: 'pv',
            inactive: false,
            payload: {
              activeDot: {
                r: 8,
              },
              animateNewValues: true,
              animationBegin: 0,
              animationDuration: 1500,
              animationEasing: 'ease',
              connectNulls: false,
              dataKey: 'pv',
              dot: true,
              fill: '#fff',
              hide: false,
              isAnimationActive: true,
              label: false,
              legendType: 'line',
              stroke: '#8884d8',
              strokeDasharray: '5 5',
              strokeWidth: 1,
              type: 'monotone',
              xAxisId: 0,
              yAxisId: 0,
            },
            type: 'line',
            value: 'pv',
          },
          {
            color: '#82ca9d',
            dataKey: 'uv',
            inactive: false,
            payload: {
              activeDot: true,
              animateNewValues: true,
              animationBegin: 0,
              animationDuration: 1500,
              animationEasing: 'ease',
              connectNulls: false,
              dataKey: 'uv',
              dot: true,
              fill: '#fff',
              hide: false,
              isAnimationActive: true,
              label: false,
              legendType: 'line',
              stroke: '#82ca9d',
              strokeWidth: 1,
              type: 'monotone',
              xAxisId: 0,
              yAxisId: 0,
            },
            type: 'line',
            value: 'uv',
          },
        ],
        verticalAlign: 'bottom',
        width: 550,
      });
    });

    it('should render legend labels', () => {
      const { container } = render(
        <LineChart width={600} height={300} data={categoricalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend iconType="plainline" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expectLegendLabels(container, [
        { fill: 'none', textContent: 'pv' },
        { fill: 'none', textContent: 'uv' },
      ]);
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <LineChart width={500} height={500} data={categoricalData}>
              <Legend />
              <Line dataKey="value" legendType={legendType} />
            </LineChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    it('should prefer Legend.iconType over Line.legendType', () => {
      const { container } = render(
        <LineChart width={500} height={500} data={numericalData}>
          <Legend iconType="circle" />
          <Line dataKey="value" legendType="square" />
        </LineChart>,
      );
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
        li => li.legendType === 'circle',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });
  });

  describe('as a child of LineChart when data is passed to Line child instead of the root', () => {
    it('should render labels', () => {
      const { container } = render(
        <LineChart width={600} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Legend iconType="plainline" />
          <Line
            type="monotone"
            data={categoricalData}
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeDasharray="5 5"
          />
          <Line data={categoricalData} type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>,
      );

      expectLegendLabels(container, [
        { fill: 'none', textContent: 'pv' },
        { fill: 'none', textContent: 'uv' },
      ]);
    });
  });

  describe('as a child of BarChart', () => {
    it('should render one rect legend item for each Bar, with default class and style attributes', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="percent" />
          <Bar dataKey="value" />
        </BarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: 'percent' },
        { fill: null, textContent: 'value' },
      ]);

      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');
      expect.soft(legendItems[1].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[1].getAttribute('class')).toBe('recharts-legend-item legend-item-1');
      expect.soft(legendItems[1].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Bar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should not render items with a type of `none`', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Bar dataKey="value" legendType="star" />
          <Bar dataKey="color" legendType="none" />
        </BarChart>,
      );

      expectLegendLabels(container, [{ fill: undefined, textContent: 'value' }]);
    });

    it('should push away Bars to make space', () => {
      mockGetBoundingClientRect({ width: 0, height: 10 });
      const yAxisRangeSpy = vi.fn();
      const Comp = (): null => {
        yAxisRangeSpy(useAppSelector(state => selectAxisRangeWithReverse(state, 'yAxis', 0, false)));
        return null;
      };

      const { container, rerender } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar isAnimationActive={false} dataKey="percent" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(1);

      expect(yAxisRangeSpy).toHaveBeenLastCalledWith([485, 5]);
      expect(yAxisRangeSpy).toHaveBeenCalledTimes(3);

      expectBars(container, [
        {
          d: 'M 13.166666666666668,437 h 65 v 48 h -65 Z',
          height: '48',
          radius: '0',
          width: '65',
          x: '13.166666666666668',
          y: '437',
        },
        {
          d: 'M 94.83333333333334,389 h 65 v 96 h -65 Z',
          height: '96',
          radius: '0',
          width: '65',
          x: '94.83333333333334',
          y: '389',
        },
        {
          d: 'M 176.5,413 h 65 v 72 h -65 Z',
          height: '72',
          radius: '0',
          width: '65',
          x: '176.5',
          y: '413',
        },
        {
          d: 'M 258.1666666666667,245 h 65 v 240 h -65 Z',
          height: '240',
          radius: '0',
          width: '65',
          x: '258.1666666666667',
          y: '245',
        },
        {
          d: 'M 339.83333333333337,245 h 65 v 240 h -65 Z',
          height: '240',
          radius: '0',
          width: '65',
          x: '339.83333333333337',
          y: '245',
        },
        {
          d: 'M 421.50000000000006,5 h 65 v 480 h -65 Z',
          height: '480',
          radius: '0',
          width: '65',
          x: '421.50000000000006',
          y: '5',
        },
      ]);

      rerender(
        <BarChart width={500} height={500} data={numericalData}>
          <Bar isAnimationActive={false} dataKey="percent" />
          <Customized component={Comp} />
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-default-legend')).toHaveLength(0);

      expect(yAxisRangeSpy).toHaveBeenLastCalledWith([495, 5]);
      expect(yAxisRangeSpy).toHaveBeenCalledTimes(5);

      expectBars(container, [
        {
          d: 'M 13.166666666666668,446 h 65 v 49 h -65 Z',
          height: '49',
          radius: '0',
          width: '65',
          x: '13.166666666666668',
          y: '446',
        },
        {
          d: 'M 94.83333333333334,397 h 65 v 98 h -65 Z',
          height: '98',
          radius: '0',
          width: '65',
          x: '94.83333333333334',
          y: '397',
        },
        {
          d: 'M 176.5,421.5 h 65 v 73.5 h -65 Z',
          height: '73.5',
          radius: '0',
          width: '65',
          x: '176.5',
          y: '421.5',
        },
        {
          d: 'M 258.1666666666667,250 h 65 v 245 h -65 Z',
          height: '245',
          radius: '0',
          width: '65',
          x: '258.1666666666667',
          y: '250',
        },
        {
          d: 'M 339.83333333333337,250 h 65 v 245 h -65 Z',
          height: '245',
          radius: '0',
          width: '65',
          x: '339.83333333333337',
          y: '250',
        },
        {
          d: 'M 421.50000000000006,5 h 65 v 490 h -65 Z',
          height: '490',
          radius: '0',
          width: '65',
          x: '421.50000000000006',
          y: '5',
        },
      ]);
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="unknown" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'unknown' }]);
    });

    it('should change color and className of hidden Bar', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend inactiveColor="yellow" />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Bar dataKey="percent" stroke="red" hide />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: 'yellow', textContent: 'percent' }]);
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Bar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('yellow').find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should have a default inactive Bar legend color', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Bar dataKey="percent" stroke="red" hide />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: '#ccc', textContent: 'percent' }]);
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Bar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#ccc').find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render one empty legend item if Bar has no dataKey', () => {
      const { container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: '' }]);
    });

    it('should set legend item from `name` prop on Bar, and update it after rerender', () => {
      const { rerender, container } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="percent" name="%" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: '%' }]);

      rerender(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="percent" name="Percent" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'Percent' }]);
    });

    it('should not implicitly read `name` and `fill` properties from the data array', () => {
      const { container, queryByText } = render(
        <BarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Bar dataKey="color" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'color' }]);
      expect.soft(queryByText('name1')).not.toBeInTheDocument();
      expect.soft(queryByText('name2')).not.toBeInTheDocument();
      expect.soft(queryByText('name3')).not.toBeInTheDocument();
      expect.soft(queryByText('name4')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill1"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill2"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill3"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill4"]')).not.toBeInTheDocument();
    });

    it('should disappear after Bar element is removed', () => {
      const { container, rerender } = render(
        <BarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Bar dataKey="name" />
          <Bar dataKey="value" />
        </BarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: 'name' },
        { fill: null, textContent: 'value' },
      ]);

      rerender(
        <BarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Bar dataKey="value" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'value' }]);
    });

    it('should update legend if Bar data changes', () => {
      const { container, rerender } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="value" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'value' }]);

      rerender(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Bar dataKey="percent" />
        </BarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'percent' }]);
    });

    describe('wrapper props', () => {
      it('should provide default props', () => {
        const { container } = render(
          <BarChart width={500} height={500} data={numericalData}>
            <Legend />
            <Bar dataKey="value" />
          </BarChart>,
        );
        const wrapper = container.querySelector('.recharts-legend-wrapper');
        expect(wrapper).toBeInTheDocument();
        expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
        expect
          .soft(wrapper.getAttribute('style'))
          .toBe('position: absolute; width: 490px; height: auto; left: 5px; bottom: 5px;');
      });

      it('should change width and height based on chart width and height and margin and bounding box size', () => {
        mockGetBoundingClientRect({
          width: 3,
          height: 5,
        });
        const { container } = render(
          <BarChart width={300} height={200} margin={{ top: 11, right: 13, left: 17, bottom: 19 }} data={numericalData}>
            <Legend />
            <Bar dataKey="value" />
          </BarChart>,
        );
        const wrapper = container.querySelector('.recharts-legend-wrapper');
        expect(wrapper).toBeInTheDocument();
        expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
        expect
          .soft(wrapper.getAttribute('style'))
          .toBe('position: absolute; width: 270px; height: auto; left: 17px; bottom: 19px;');
      });

      it('should change width and height based on explicit Legend props', () => {
        const { container } = render(
          <BarChart width={500} height={500} margin={{ top: 11, right: 13, left: 17, bottom: 19 }} data={numericalData}>
            <Legend width={90} height={20} />
            <Bar dataKey="value" />
          </BarChart>,
        );
        const wrapper = container.querySelector('.recharts-legend-wrapper');
        expect(wrapper).toBeInTheDocument();
        expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
        expect
          .soft(wrapper.getAttribute('style'))
          .toBe('position: absolute; width: 90px; height: 20px; left: 17px; bottom: 19px;');
      });

      it('should append wrapperStyle', () => {
        const { container } = render(
          <BarChart width={500} height={500} data={numericalData}>
            <Legend wrapperStyle={{ backgroundColor: 'red' }} />
            <Bar dataKey="value" />
          </BarChart>,
        );
        const wrapper = container.querySelector('.recharts-legend-wrapper');
        expect(wrapper).toBeInTheDocument();
        expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
        expect
          .soft(wrapper.getAttribute('style'))
          .toBe('position: absolute; width: 490px; height: auto; left: 5px; bottom: 5px; background-color: red;');
      });

      const wrapperStyleTestCases: ReadonlyArray<{
        wrapperStyle: CSSProperties;
        align?: LegendProps['align'];
        name: string;
        expectedStyle: string;
      }> = [
        {
          wrapperStyle: { left: '31px', right: '33px', bottom: '37px', top: '41px' },
          name: 'all provided',
          expectedStyle:
            'position: absolute; width: 470px; height: auto; left: 31px; right: 33px; bottom: 37px; top: 41px;',
        },
        {
          wrapperStyle: { left: '31px', right: '33px', bottom: '37px' },
          name: 'missing top',
          expectedStyle: 'position: absolute; width: 470px; height: auto; left: 31px; right: 33px; bottom: 37px;',
        },
        {
          wrapperStyle: { left: '31px', right: '33px', top: '41px' },
          name: 'missing bottom',
          expectedStyle: 'position: absolute; width: 470px; height: auto; left: 31px; right: 33px; top: 41px;',
        },
        {
          wrapperStyle: { left: '31px', right: '33px' },
          name: 'missing top and bottom',
          expectedStyle: 'position: absolute; width: 470px; height: auto; bottom: 19px; left: 31px; right: 33px;',
        },
        {
          wrapperStyle: { left: '31px', bottom: '37px', top: '41px' },
          name: 'missing right',
          expectedStyle: 'position: absolute; width: 470px; height: auto; left: 31px; bottom: 37px; top: 41px;',
        },
        {
          wrapperStyle: { right: '33px', bottom: '37px', top: '41px' },
          name: 'missing left',
          expectedStyle: 'position: absolute; width: 470px; height: auto; right: 33px; bottom: 37px; top: 41px;',
        },
        {
          wrapperStyle: { left: '31px', bottom: '37px', top: '41px' },
          align: 'right',
          name: 'missing right, align right',
          expectedStyle: 'position: absolute; width: 470px; height: auto; left: 31px; bottom: 37px; top: 41px;',
        },
        {
          wrapperStyle: { bottom: '37px', top: '41px' },
          name: 'missing left and right',
          expectedStyle: 'position: absolute; width: 470px; height: auto; left: 17px; bottom: 37px; top: 41px;',
        },
      ];
      test.each(wrapperStyleTestCases)(
        'should calculate position if wrapperStyle is $name',
        ({ wrapperStyle, align, expectedStyle }) => {
          const { container } = render(
            <BarChart
              width={500}
              height={500}
              margin={{ top: 11, right: 13, left: 17, bottom: 19 }}
              data={numericalData}
            >
              <Legend wrapperStyle={wrapperStyle} align={align} />
              <Bar dataKey="value" />
            </BarChart>,
          );
          const wrapper = container.querySelector('.recharts-legend-wrapper');
          expect(wrapper).toBeInTheDocument();
          expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
          expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
          expect.soft(wrapper.getAttribute('style')).toBe(expectedStyle);
        },
      );

      type LegendPositionTextCase = {
        align: LegendProps['align'];
        verticalAlign: LegendProps['verticalAlign'];
        layout: LegendProps['layout'];
        expectedStyleOnSecondRender: string;
      };

      const layoutPositionCartesianTests: ReadonlyArray<LegendPositionTextCase> = [
        {
          align: 'center',
          verticalAlign: 'top',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; top: 11px;',
        },
        {
          align: 'left',
          verticalAlign: 'top',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; top: 11px;',
        },
        {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; right: 13px; top: 11px;',
        },
        {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; bottom: 19px;',
        },
        {
          align: 'left',
          verticalAlign: 'bottom',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; bottom: 19px;',
        },
        {
          align: 'right',
          verticalAlign: 'bottom',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; right: 13px; bottom: 19px;',
        },
        {
          align: 'center',
          verticalAlign: 'middle',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; top: 335.5px;',
        },
        {
          align: 'left',
          verticalAlign: 'middle',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; left: 17px; top: 335.5px;',
        },
        {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'horizontal',
          expectedStyleOnSecondRender: 'position: absolute; width: 470px; height: auto; right: 13px; top: 335.5px;',
        },
        {
          align: 'center',
          verticalAlign: 'top',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 238.5px; top: 11px;',
        },
        {
          align: 'left',
          verticalAlign: 'top',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 17px; top: 11px;',
        },
        {
          align: 'right',
          verticalAlign: 'top',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; right: 13px; top: 11px;',
        },
        {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 238.5px; bottom: 19px;',
        },
        {
          align: 'left',
          verticalAlign: 'bottom',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 17px; bottom: 19px;',
        },
        {
          align: 'right',
          verticalAlign: 'bottom',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; right: 13px; bottom: 19px;',
        },
        {
          align: 'center',
          verticalAlign: 'middle',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 238.5px; top: 335.5px;',
        },
        {
          align: 'left',
          verticalAlign: 'middle',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; left: 17px; top: 335.5px;',
        },
        {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          expectedStyleOnSecondRender: 'position: absolute; width: auto; height: auto; right: 13px; top: 335.5px;',
        },
      ];
      test('test cases should be complete and unique', () => {
        const horizontalAlignmentVariants = 3;
        const verticalAlignmentVariants = 3;
        const layoutVariants = 2; // polar variants do not make sense for cartesian chart
        expect
          .soft(layoutPositionCartesianTests)
          .toHaveLength(horizontalAlignmentVariants * verticalAlignmentVariants * layoutVariants);
        const set = new Set(
          layoutPositionCartesianTests.map(({ align, verticalAlign, layout }) => align + verticalAlign + layout),
        );
        expect(set.size).toEqual(layoutPositionCartesianTests.length);
      });

      test.each(layoutPositionCartesianTests)(
        'should calculate position for align=$align, verticalAlign=$verticalAlign, layout=$layout',
        ({ align, verticalAlign, layout, expectedStyleOnSecondRender }) => {
          mockGetBoundingClientRect({
            width: 23,
            height: 29,
          });
          const { container, rerender } = render(
            <BarChart
              width={500}
              height={700}
              margin={{ top: 11, right: 13, left: 17, bottom: 19 }}
              data={numericalData}
            >
              <Legend align={align} verticalAlign={verticalAlign} layout={layout} />
              <Bar dataKey="value" />
            </BarChart>,
          );
          const wrapper = container.querySelector('.recharts-legend-wrapper');
          expect(wrapper).toBeInTheDocument();
          expect.soft(wrapper.getAttributeNames()).toEqual(['class', 'style']);
          expect.soft(wrapper.getAttribute('class')).toBe('recharts-legend-wrapper');
          expect.soft(wrapper.getAttribute('style')).toBe(expectedStyleOnSecondRender);
          /*
           * Because the bounding box is set as a class property instead of a state,
           * reading the legend width and height does not trigger re-render!
           * Instead we have to trigger manually here.
           */
          rerender(
            <BarChart
              width={500}
              height={700}
              margin={{ top: 11, right: 13, left: 17, bottom: 19 }}
              data={numericalData}
            >
              <Legend align={align} verticalAlign={verticalAlign} layout={layout} />
              <Bar dataKey="value" />
            </BarChart>,
          );
          const wrapper2 = container.querySelector('.recharts-legend-wrapper');
          expect(wrapper2).toBeInTheDocument();
          expect.soft(wrapper2.getAttributeNames()).toEqual(['class', 'style']);
          expect.soft(wrapper2.getAttribute('class')).toBe('recharts-legend-wrapper');
          expect.soft(wrapper2.getAttribute('style')).toBe(expectedStyleOnSecondRender);
        },
      );
    });

    describe('offset calculation', () => {
      it('should reduce vertical offset by the height of legend', () => {
        mockGetBoundingClientRect({
          height: 13,
          width: 17,
        });
        const spy = vi.fn();
        testChartLayoutContext(
          props => (
            <BarChart width={500} height={500} data={categoricalData}>
              {props.children}
              <Legend layout="horizontal" width={200} />
              <Bar dataKey="value" />
            </BarChart>
          ),
          ({ offset }) => {
            spy(offset);
          },
        )();
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenLastCalledWith({
          brushBottom: 5,
          top: 5,
          bottom: 5 + 13,
          left: 5,
          right: 5,
          width: 490,
          height: 490 - 13,
        });
      });
      it('should ignore height of legend if it has verticalAlign == middle', () => {
        mockGetBoundingClientRect({
          height: 13,
          width: 17,
        });
        const spy = vi.fn();
        testChartLayoutContext(
          props => (
            <BarChart width={500} height={500} data={categoricalData}>
              {props.children}
              <Legend layout="horizontal" verticalAlign="middle" width={200} />
              <Bar dataKey="value" />
            </BarChart>
          ),
          ({ offset }) => {
            spy(offset);
          },
        )();
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenLastCalledWith({
          brushBottom: 5,
          top: 5,
          bottom: 5,
          left: 5,
          right: 5,
          width: 490,
          height: 490,
        });
      });
      it('should reduce vertical offset by the width of vertical legend', () => {
        mockGetBoundingClientRect({
          height: 13,
          width: 17,
        });
        const spy = vi.fn();
        testChartLayoutContext(
          props => (
            <BarChart width={500} height={500} data={categoricalData}>
              {props.children}
              <Legend layout="vertical" align="left" width={200} />
              <Bar dataKey="value" />
            </BarChart>
          ),
          ({ offset }) => {
            spy(offset);
          },
        )();
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenLastCalledWith({
          brushBottom: 5,
          top: 5,
          bottom: 5,
          left: 5 + 17,
          right: 5,
          width: 490 - 17,
          height: 490,
        });
      });
      it('should ignore width of vertical legend if it has align == center', () => {
        mockGetBoundingClientRect({
          height: 13,
          width: 17,
        });
        const spy = vi.fn();
        testChartLayoutContext(
          props => (
            <BarChart width={500} height={500} data={categoricalData}>
              {props.children}
              <Legend layout="vertical" align="center" width={200} />
              <Bar dataKey="value" />
            </BarChart>
          ),
          ({ offset }) => {
            spy(offset);
          },
        )();
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenLastCalledWith({
          brushBottom: 5,
          top: 5,
          bottom: 5 + 13,
          left: 5,
          right: 5,
          width: 490,
          height: 490 - 13,
        });
      });
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

      it('should prefer Legend.iconType over Bar.legendType', () => {
        const { container } = render(
          <BarChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Bar dataKey="value" legendType="square" />
          </BarChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });
  });

  describe('as a child of AreaChart', () => {
    describe('with two Areas', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="percent" />
          <Area dataKey="value" />
          {children}
        </AreaChart>
      ));

      it('should render one legend item for each Area', () => {
        const { container } = renderTestCase();
        expectLegendLabels(container, [
          {
            fill: 'none',
            textContent: 'percent',
          },
          {
            fill: 'none',
            textContent: 'value',
          },
        ]);
      });

      it('should add class and style attributes to each element', () => {
        const { container } = renderTestCase();

        const legendItems = assertHasLegend(container);
        expect(legendItems).toHaveLength(2);

        expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0');
        expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');
        expect.soft(legendItems[1].getAttributeNames()).toEqual(['class', 'style']);
        expect.soft(legendItems[1].getAttribute('class')).toBe('recharts-legend-item legend-item-1');
        expect.soft(legendItems[1].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');
      });

      it('should render Line symbols and colors in absence of explicit legendType', () => {
        const { container } = renderTestCase();
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
          tc => tc.legendType === 'line',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="unknown" />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'unknown' }]);
    });

    it('should change color and className of hidden Area', () => {
      const { container, getByText } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend inactiveColor="yellow" />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Area dataKey="percent" stroke="red" hide />
        </AreaChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Area should default to line
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('yellow').find(
        tc => tc.legendType === 'line',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should have a default inactive Area legend color', () => {
      const { container, getByText } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Area dataKey="percent" stroke="red" hide />
        </AreaChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Area should default to line
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#ccc').find(
        tc => tc.legendType === 'line',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render one empty legend item if Area has no dataKey', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey={undefined} />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: '' }]);
    });

    describe('with `name` prop on Area', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="percent" name="%" />
          {children}
        </AreaChart>
      ));

      it('should set legend item from `name` prop on Area, and update it after rerender', () => {
        const { container, rerender } = renderTestCase();
        expectLegendLabels(container, [{ fill: 'none', textContent: '%' }]);
        rerender(
          <AreaChart width={500} height={500} data={numericalData}>
            <Legend />
            <Area dataKey="percent" name="Percent" />
          </AreaChart>,
        );
        expectLegendLabels(container, [{ fill: 'none', textContent: 'Percent' }]);
      });

      it('should select legend payload', () => {
        const { spy } = renderTestCase(selectLegendPayload);
        expect(spy).toHaveBeenLastCalledWith([
          {
            inactive: false,
            dataKey: 'percent',
            type: 'line',
            color: '#3182bd',
            value: '%',
            payload: {
              dataKey: 'percent',
              name: '%',
              activeDot: true,
              animationBegin: 0,
              animationDuration: 1500,
              animationEasing: 'ease',
              connectNulls: false,
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
          },
        ]);
      });
    });

    it('should not implicitly read `name` and `fill` properties from the data array', () => {
      const { container, queryByText } = render(
        <AreaChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
      expect.soft(queryByText('name1')).not.toBeInTheDocument();
      expect.soft(queryByText('name2')).not.toBeInTheDocument();
      expect.soft(queryByText('name3')).not.toBeInTheDocument();
      expect.soft(queryByText('name4')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill1"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill2"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill3"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill4"]')).not.toBeInTheDocument();
    });

    it('should disappear after Area element is removed', () => {
      const { container, rerender } = render(
        <AreaChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Area dataKey="name" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expectLegendLabels(container, [
        { fill: 'none', textContent: 'name' },
        { fill: 'none', textContent: 'value' },
      ]);

      rerender(
        <AreaChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
    });

    it('should update legend if Area data changes', () => {
      const { container, rerender } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);

      rerender(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="percent" />
        </AreaChart>,
      );
      expectLegendLabels(container, [{ fill: 'none', textContent: 'percent' }]);
    });

    describe('legendType symbols', () => {
      describe('with default color', () => {
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

      describe('with explicit fill and undefined stroke, should still use default stroke', () => {
        test.each(expectedLegendTypeSymbolsWithColor('#3182bd'))(
          'should render legend colors for $selector for legendType $legendType',
          ({ legendType, selector, expectedAttributes }) => {
            const { container } = render(
              <AreaChart width={500} height={500} data={numericalData}>
                <Legend />
                <Area dataKey="percent" legendType={legendType} fill="red" />
              </AreaChart>,
            );
            assertExpectedAttributes(container, selector, expectedAttributes);
          },
        );
      });

      describe('with explicit stroke', () => {
        test.each(expectedLegendTypeSymbolsWithColor('yellow'))(
          'should render legend colors for $selector for legendType $legendType',
          ({ legendType, selector, expectedAttributes }) => {
            const { container } = render(
              <AreaChart width={500} height={500} data={numericalData}>
                <Legend />
                <Area dataKey="percent" legendType={legendType} stroke="yellow" />
              </AreaChart>,
            );
            assertExpectedAttributes(container, selector, expectedAttributes);
          },
        );
      });

      describe('with both fill and stroke', () => {
        test.each(expectedLegendTypeSymbolsWithColor('gold'))(
          'should render legend colors for $selector for legendType $legendType',
          ({ legendType, selector, expectedAttributes }) => {
            const { container } = render(
              <AreaChart width={500} height={500} data={numericalData}>
                <Legend />
                <Area dataKey="percent" legendType={legendType} stroke="gold" fill="green" />
              </AreaChart>,
            );
            assertExpectedAttributes(container, selector, expectedAttributes);
          },
        );
      });

      describe('with stroke = none', () => {
        test.each(expectedLegendTypeSymbolsWithColor('green'))(
          'should render legend colors for $selector for legendType $legendType',
          ({ legendType, selector, expectedAttributes }) => {
            const { container } = render(
              <AreaChart width={500} height={500} data={numericalData}>
                <Legend />
                <Area dataKey="percent" legendType={legendType} stroke="none" fill="green" />
              </AreaChart>,
            );
            assertExpectedAttributes(container, selector, expectedAttributes);
          },
        );
      });

      it('should prefer Legend.iconType over Area.legendType', () => {
        const { container } = render(
          <AreaChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Area dataKey="value" legendType="square" />
          </AreaChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });

    it('should render legend', () => {
      const { container } = render(
        <AreaChart width={500} height={500} data={numericalData}>
          <Legend />
          <Area dataKey="value" />
        </AreaChart>,
      );

      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
    });
  });

  describe('as a child of AreaChart when data is defined on graphical item', () => {
    it('should render legend', () => {
      const { container } = render(
        <AreaChart width={500} height={500}>
          <Legend />
          <Area dataKey="value" data={numericalData} />
        </AreaChart>,
      );

      expectLegendLabels(container, [{ fill: 'none', textContent: 'value' }]);
    });
  });

  describe('as a child of ComposedChart', () => {
    it('should render one legend item for each allowed graphical element, even if their dataKey does not match the data or is undefined', () => {
      const { container, queryByText } = render(
        <ComposedChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Area dataKey="value" />
          <Area dataKey="wrong" />
          <Area dataKey="wrong but invisible" name="Wrong 1" />
          <Bar dataKey="color" />
          <Bar dataKey="unknown" />
          <Bar dataKey="unknown but invisible" name="Wrong 2" />
          <Line dataKey="bad" />
          <Line dataKey="bad but invisible" name="Wrong 3" />
        </ComposedChart>,
      );
      expectLegendLabels(container, [
        { fill: 'none', textContent: 'Wrong 1' },
        { fill: null, textContent: 'Wrong 2' },
        { fill: 'none', textContent: 'Wrong 3' },
        { fill: 'none', textContent: 'bad' },
        { fill: null, textContent: 'color' },
        { fill: null, textContent: 'unknown' },
        { fill: 'none', textContent: 'value' },
        { fill: 'none', textContent: 'wrong' },
      ]);
      expect.soft(queryByText('wrong but invisible')).not.toBeInTheDocument();
      expect.soft(queryByText('unknown but invisible')).not.toBeInTheDocument();
      expect.soft(queryByText('bad but invisible')).not.toBeInTheDocument();
    });

    it('should not render legend of unsupported graphical element', () => {
      const { container } = render(
        <ComposedChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Pie dataKey="pie datakey" />
          <Radar dataKey="radar datakey" />
          <RadialBar dataKey="radialbar datakey" />
        </ComposedChart>,
      );
      expectLegendLabels(container, null);
    });

    it('should render legend of Scatter even though it is not a supported graphical element inside ComposedChart', () => {
      const { container } = render(
        <ComposedChart width={500} height={500} data={categoricalData}>
          <Legend />
          <Scatter dataKey="scatter datakey" />
        </ComposedChart>,
      );
      expectLegendLabels(container, [{ textContent: 'scatter datakey', fill: undefined }]);
    });

    it('should not implicitly read `name` and `fill` properties from the data array', () => {
      const { container, queryByText } = render(
        <ComposedChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Area dataKey="value" />
          <Bar dataKey="color" />
          <Line dataKey="color" />
        </ComposedChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: 'color' },
        { fill: 'none', textContent: 'color' },
        { fill: 'none', textContent: 'value' },
      ]);
      expect.soft(queryByText('name1')).not.toBeInTheDocument();
      expect.soft(queryByText('name2')).not.toBeInTheDocument();
      expect.soft(queryByText('name3')).not.toBeInTheDocument();
      expect.soft(queryByText('name4')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill1"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill2"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill3"]')).not.toBeInTheDocument();
      expect.soft(container.querySelector('[fill="fill4"]')).not.toBeInTheDocument();
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

      it('should prefer Legend.iconType over Area.legendType', () => {
        const { container } = render(
          <ComposedChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Area dataKey="value" legendType="square" />
          </ComposedChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
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

      it('should prefer Legend.iconType over Bar.legendType', () => {
        const { container } = render(
          <ComposedChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Bar dataKey="value" legendType="square" />
          </ComposedChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
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

      it('should prefer Legend.iconType over Line.legendType', () => {
        const { container } = render(
          <ComposedChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Line dataKey="value" legendType="square" />
          </ComposedChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#3182bd').find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });
  });

  describe('as a child of PieChart', () => {
    it('should render one legend item for each segment, and it should use nameKey as its label', () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" nameKey="value" />
        </PieChart>,
      );

      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Concentrated power of will' },
        { fill: '#808080', textContent: 'Luck' },
        { fill: '#808080', textContent: 'Pain' },
        { fill: '#808080', textContent: 'Pleasure' },
        { fill: '#808080', textContent: 'Reason to remember the name' },
        { fill: '#808080', textContent: 'Skill' },
      ]);
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="unknown" />
        </PieChart>,
      );

      // showing the dataKey is better than empty string I imagine - but without the user providing a nameKey, it's the best we can do
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'unknown' },
        { fill: '#808080', textContent: 'unknown' },
        { fill: '#808080', textContent: 'unknown' },
        { fill: '#808080', textContent: 'unknown' },
        { fill: '#808080', textContent: 'unknown' },
        { fill: '#808080', textContent: 'unknown' },
      ]);
    });

    it('should implicitly use special `name` and `fill` properties from data as legend labels and colors', () => {
      const { container } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={dataWithSpecialNameAndFillProperties} dataKey="value" />
        </PieChart>,
      );

      expectLegendLabels(container, [
        { fill: 'fill1', textContent: 'name1' },
        { fill: 'fill2', textContent: 'name2' },
        { fill: 'fill3', textContent: 'name3' },
        { fill: 'fill4', textContent: 'name4' },
      ]);
    });

    describe('itemSorter', () => {
      it('should sort items by the special name property by default', () => {
        const dataWithSpecialNameAndFillPropertiesInDifferentOrder = [
          { name: 'name2', fill: 'fill2', value: 34 },
          { name: 'name1', fill: 'fill1', value: 12 },
          { name: 'name4', fill: 'fill4', value: 78 },
          { name: 'name3', fill: 'fill3', value: 56 },
        ];

        const { container } = render(
          <PieChart width={500} height={500}>
            <Legend />
            <Pie data={dataWithSpecialNameAndFillPropertiesInDifferentOrder} dataKey="value" />
          </PieChart>,
        );

        expectLegendLabels(container, [
          { fill: 'fill1', textContent: 'name1' },
          { fill: 'fill2', textContent: 'name2' },
          { fill: 'fill3', textContent: 'name3' },
          { fill: 'fill4', textContent: 'name4' },
        ]);
      });

      it.each(['dataKey', null] as const)(
        'should leave items in the original data order when itemSorter=%s',
        itemSorter => {
          const { container } = render(
            <PieChart width={500} height={500}>
              <Legend itemSorter={itemSorter} />
              <Pie data={numericalData} dataKey="percent" nameKey="value" />
            </PieChart>,
          );

          expectLegendLabels(container, [
            { fill: '#808080', textContent: 'Luck' },
            { fill: '#808080', textContent: 'Skill' },
            { fill: '#808080', textContent: 'Concentrated power of will' },
            { fill: '#808080', textContent: 'Pleasure' },
            { fill: '#808080', textContent: 'Pain' },
            { fill: '#808080', textContent: 'Reason to remember the name' },
          ]);
        },
      );
    });

    it('should disappear after Pie data is removed', () => {
      const { container, rerender } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" />
          <Pie data={numericalData2} dataKey="value" nameKey="title" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Days a week' },
        { fill: '#808080', textContent: 'Luftbaloons' },
        { fill: '#808080', textContent: 'Mambo number' },
        { fill: '#808080', textContent: 'Miles I would walk' },
        { fill: '#808080', textContent: 'Seas of Rhye' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
      ]);

      rerender(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={[]} dataKey="percent" />
          <Pie data={numericalData2} dataKey="value" nameKey="title" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Days a week' },
        { fill: '#808080', textContent: 'Luftbaloons' },
        { fill: '#808080', textContent: 'Mambo number' },
        { fill: '#808080', textContent: 'Miles I would walk' },
        { fill: '#808080', textContent: 'Seas of Rhye' },
      ]);
    });

    it('should disappear after Pie itself is removed', () => {
      const { container, rerender } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" />
          <Pie data={numericalData2} dataKey="value" nameKey="title" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Days a week' },
        { fill: '#808080', textContent: 'Luftbaloons' },
        { fill: '#808080', textContent: 'Mambo number' },
        { fill: '#808080', textContent: 'Miles I would walk' },
        { fill: '#808080', textContent: 'Seas of Rhye' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
        { fill: '#808080', textContent: 'percent' },
      ]);

      rerender(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData2} dataKey="value" nameKey="title" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Days a week' },
        { fill: '#808080', textContent: 'Luftbaloons' },
        { fill: '#808080', textContent: 'Mambo number' },
        { fill: '#808080', textContent: 'Miles I would walk' },
        { fill: '#808080', textContent: 'Seas of Rhye' },
      ]);
    });

    it('should update legend if Pie data changes', () => {
      const { container, rerender } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" nameKey="value" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Concentrated power of will' },
        { fill: '#808080', textContent: 'Luck' },
        { fill: '#808080', textContent: 'Pain' },
        { fill: '#808080', textContent: 'Pleasure' },
        { fill: '#808080', textContent: 'Reason to remember the name' },
        { fill: '#808080', textContent: 'Skill' },
      ]);

      rerender(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData2} dataKey="value" nameKey="title" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Days a week' },
        { fill: '#808080', textContent: 'Luftbaloons' },
        { fill: '#808080', textContent: 'Mambo number' },
        { fill: '#808080', textContent: 'Miles I would walk' },
        { fill: '#808080', textContent: 'Seas of Rhye' },
      ]);
    });

    it('should update legend if nameKey changes', () => {
      const { container, rerender } = render(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" nameKey="value" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: 'Concentrated power of will' },
        { fill: '#808080', textContent: 'Luck' },
        { fill: '#808080', textContent: 'Pain' },
        { fill: '#808080', textContent: 'Pleasure' },
        { fill: '#808080', textContent: 'Reason to remember the name' },
        { fill: '#808080', textContent: 'Skill' },
      ]);

      rerender(
        <PieChart width={500} height={500}>
          <Legend />
          <Pie data={numericalData} dataKey="percent" nameKey="percent" />
        </PieChart>,
      );
      expectLegendLabels(container, [
        { fill: '#808080', textContent: '10' },
        { fill: '#808080', textContent: '100' },
        { fill: '#808080', textContent: '15' },
        { fill: '#808080', textContent: '20' },
        { fill: '#808080', textContent: '50' },
        { fill: '#808080', textContent: '50' },
      ]);
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

      it('should prefer Legend.iconType over Pie.legendType', () => {
        const { container } = render(
          <PieChart width={500} height={500}>
            <Legend iconType="circle" />
            <Pie data={numericalData} dataKey="percent" legendType="square" />
          </PieChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#808080').find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });
  });

  describe('as a child of RadarChart', () => {
    it('should render one rect legend item for each Radar, with default class and style attributes', () => {
      const { container, getByText } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="percent" />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expect(getByText('value')).toBeInTheDocument();
      expect(getByText('percent')).toBeInTheDocument();

      const legendItems = assertHasLegend(container);
      expect(legendItems).toHaveLength(2);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');
      expect.soft(legendItems[1].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[1].getAttribute('class')).toBe('recharts-legend-item legend-item-1');
      expect.soft(legendItems[1].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Radar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="unknown" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'unknown' }]);
    });

    it('should change color and className of hidden Radar', () => {
      const { container, getByText } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend inactiveColor="yellow" />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Radar dataKey="percent" stroke="red" hide />
        </RadarChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Radar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('yellow').find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should have a default inactive Radar legend color', () => {
      const { container, getByText } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          {/* this will ignore the stroke and use inactive color on legend */}
          <Radar dataKey="percent" stroke="red" hide />
        </RadarChart>,
      );
      expect(getByText('percent')).toBeInTheDocument();
      const legendItems = assertHasLegend(container);

      expect.soft(legendItems[0].getAttributeNames()).toEqual(['class', 'style']);
      expect.soft(legendItems[0].getAttribute('class')).toBe('recharts-legend-item legend-item-0 inactive');
      expect.soft(legendItems[0].getAttribute('style')).toBe('display: inline-block; margin-right: 10px;');

      // in absence of explicit `legendType`, Radar should default to rect
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithColor('#ccc').find(
        tc => tc.legendType === 'rect',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render one empty legend item if Radar has no dataKey', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar />
        </RadarChart>,
      );

      expectLegendLabels(container, [{ fill: null, textContent: '' }]);
    });

    it('should set legend item from `name` prop on Radar, and update it after rerender', () => {
      const { rerender, container } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="percent" name="%" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: '%' }]);

      rerender(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="percent" name="Percent" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'Percent' }]);
    });

    it('should not implicitly read `name` and `fill` properties from the data array', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'value' }]);
    });

    it('should disappear after Radar element is removed', () => {
      const { container, rerender } = render(
        <RadarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Radar dataKey="name" />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: 'name' },
        { fill: null, textContent: 'value' },
      ]);

      rerender(
        <RadarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'value' }]);
    });

    it('should update legend if Radar data changes', () => {
      const { container, rerender } = render(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="value" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'value' }]);

      rerender(
        <RadarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Radar dataKey="percent" />
        </RadarChart>,
      );
      expectLegendLabels(container, [{ fill: null, textContent: 'percent' }]);
    });

    describe('legendType symbols without color', () => {
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

      it('should prefer Legend.iconType over Radar.legendType', () => {
        const { container } = render(
          <RadarChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Radar dataKey="value" legendType="square" />
          </RadarChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
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

    describe('legendType symbols with explicit stroke', () => {
      test.each(expectedLegendTypeSymbolsWithColor('yellow'))(
        'should render legend colors for $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadarChart width={500} height={500} data={numericalData}>
              <Legend />
              <Radar dataKey="percent" legendType={legendType} stroke="yellow" />
            </RadarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    describe('legendType symbols with both fill and stroke', () => {
      test.each(expectedLegendTypeSymbolsWithColor('gold'))(
        'should render legend colors for $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadarChart width={500} height={500} data={numericalData}>
              <Legend />
              <Radar dataKey="percent" legendType={legendType} stroke="gold" fill="green" />
            </RadarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });

    describe('legendType symbols with stroke = none', () => {
      test.each(expectedLegendTypeSymbolsWithColor('green'))(
        'should render legend colors for $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <RadarChart width={500} height={500} data={numericalData}>
              <Legend />
              <Radar dataKey="percent" legendType={legendType} stroke="none" fill="green" />
            </RadarChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of RadialBarChart', () => {
    it('should render one legend item for each segment, with no label text, and rect icon with no color, by default', () => {
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
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(i => i.legendType === 'rect');
      assertExpectedAttributes(container, selector, expectedAttributes);
    });

    it('should render a legend item even if the dataKey does not match anything from the data', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend />
          <RadialBar dataKey="unknown" />
        </RadialBarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
      ]);
    });

    it('should use special `name` and `fill` properties from data as legend labels and colors', () => {
      // I think this is the only way to set legend labels for RadialBarChart?
      const { container } = render(
        <RadialBarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <RadialBar dataKey="percent" />
        </RadialBarChart>,
      );

      expectLegendLabels(container, [
        { fill: 'fill1', textContent: 'name1' },
        { fill: 'fill2', textContent: 'name2' },
        { fill: 'fill3', textContent: 'name3' },
        { fill: 'fill4', textContent: 'name4' },
      ]);
    });

    it('should use special `name` and `fill` properties from data as legend labels and colors, even if the dataKey does not match', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <RadialBar dataKey="unknown" />
        </RadialBarChart>,
      );
      expectLegendLabels(container, [
        { fill: 'fill1', textContent: 'name1' },
        { fill: 'fill2', textContent: 'name2' },
        { fill: 'fill3', textContent: 'name3' },
        { fill: 'fill4', textContent: 'name4' },
      ]);
    });

    it('should disappear after RadialBar itself is removed', () => {
      const { container, rerender } = render(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend />
          <RadialBar dataKey="percent" />
          <RadialBar dataKey="value" />
        </RadialBarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
      ]);

      rerender(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend />
          <RadialBar dataKey="value" />
        </RadialBarChart>,
      );
      expectLegendLabels(container, [
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
      ]);

      rerender(
        <RadialBarChart width={500} height={500}>
          <Legend />
        </RadialBarChart>,
      );
      expectLegendLabels(container, undefined);
    });

    it('should update legend if RadialBarChart data changes', () => {
      const { container, rerender } = render(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend />
          <RadialBar dataKey="percent" />
        </RadialBarChart>,
      );
      // all these are empty because numericalData does not have .name property
      expectLegendLabels(container, [
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
        { fill: null, textContent: '' },
      ]);

      rerender(
        <RadialBarChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <RadialBar dataKey="value" />
        </RadialBarChart>,
      );
      expectLegendLabels(container, [
        { fill: 'fill1', textContent: 'name1' },
        { fill: 'fill2', textContent: 'name2' },
        { fill: 'fill3', textContent: 'name3' },
        { fill: 'fill4', textContent: 'name4' },
      ]);
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

    it('should prefer Legend.iconType over RadialBar.legendType', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={numericalData}>
          <Legend iconType="circle" />
          <RadialBar dataKey="value" legendType="square" />
        </RadialBarChart>,
      );
      const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
        li => li.legendType === 'circle',
      );
      assertExpectedAttributes(container, selector, expectedAttributes);
    });
  });

  describe('as a child of ScatterChart', () => {
    it('should render one legend item for each Scatter', () => {
      const { container } = render(
        <ScatterChart width={500} height={500} data={numericalData}>
          <Legend />
          <Scatter dataKey="percent" />
          <Scatter dataKey="value" />
        </ScatterChart>,
      );
      expectLegendLabels(container, [
        { fill: undefined, textContent: 'percent' },
        { fill: undefined, textContent: 'value' },
      ]);
    });

    it('should not use `fill` from data for the legend fill', () => {
      const { container } = render(
        <ScatterChart width={500} height={500} data={dataWithSpecialNameAndFillProperties}>
          <Legend />
          <Scatter dataKey="value" />
        </ScatterChart>,
      );
      expectLegendLabels(container, [{ fill: undefined, textContent: 'value' }]);
    });

    describe('legendType symbols', () => {
      test.each(expectedLegendTypeSymbolsWithoutColor)(
        'should render element $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <ScatterChart width={500} height={500} data={numericalData}>
              <Legend />
              <Scatter dataKey="percent" legendType={legendType} />
            </ScatterChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );

      it('should prefer Legend.iconType over Scatter.legendType', () => {
        const { container } = render(
          <ScatterChart width={500} height={500} data={numericalData}>
            <Legend iconType="circle" />
            <Scatter dataKey="value" legendType="square" />
          </ScatterChart>,
        );
        const { selector, expectedAttributes } = expectedLegendTypeSymbolsWithoutColor.find(
          li => li.legendType === 'circle',
        );
        assertExpectedAttributes(container, selector, expectedAttributes);
      });
    });

    describe('legendType symbols with explicit fill', () => {
      test.each(expectedLegendTypeSymbolsWithColor('red'))(
        'should render legend colors for $selector for legendType $legendType',
        ({ legendType, selector, expectedAttributes }) => {
          const { container } = render(
            <ScatterChart width={500} height={500} data={numericalData}>
              <Legend />
              <Scatter dataKey="percent" legendType={legendType} fill="red" />
            </ScatterChart>,
          );
          assertExpectedAttributes(container, selector, expectedAttributes);
        },
      );
    });
  });

  describe('as a child of ScatterChart with data defined on graphical item', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={500} height={500}>
        <Legend />
        <Scatter dataKey="value" data={dataWithSpecialNameAndFillProperties} />
        {children}
      </ScatterChart>
    ));

    it('should render legend', () => {
      const { container } = renderTestCase();
      expectLegendLabels(container, [{ fill: undefined, textContent: 'value' }]);
    });
  });

  describe('click events', () => {
    it('should call onClick when clicked', () => {
      const onClick = vi.fn();
      const { container } = render(
        <ScatterChart width={500} height={500} data={numericalData}>
          <Legend onClick={onClick} />
          <Scatter dataKey="percent" />
        </ScatterChart>,
      );
      expect(onClick).toHaveBeenCalledTimes(0);
      const legend = container.querySelector('.recharts-legend-item');
      assertNotNull(legend);
      fireEvent.click(legend);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('legend portal', () => {
    it('nothing is rendered if legend portal is undefined and there is no chart context', () => {
      const { container } = render(
        <Surface height={100} width={100}>
          <Legend portal={undefined} />
          <Scatter data={numericalData} dataKey="percent" />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-legend-wrapper')).toHaveLength(0);
    });

    it('should render outside of SVG, as a direct child of recharts-wrapper by default', () => {
      const { container } = render(
        <ScatterChart width={500} height={500} data={numericalData}>
          <Legend />
          <Scatter dataKey="percent" />
        </ScatterChart>,
      );

      expect(container.querySelectorAll('.recharts-wrapper svg .recharts-legend-wrapper')).toHaveLength(0);
      expect(container.querySelector('.recharts-wrapper > .recharts-legend-wrapper')).toBeVisible();
    });

    it('should render in a custom portal if "portal" prop is set', () => {
      function Example() {
        const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

        return (
          <>
            <ScatterChart width={500} height={500} data={numericalData}>
              <Legend portal={portalRef} wrapperStyle={{ margin: '20px' }} />
              <Scatter dataKey="percent" />
            </ScatterChart>
            <div
              data-testid="my-custom-portal-target"
              ref={node => {
                if (portalRef == null && node != null) {
                  setPortalRef(node);
                }
              }}
            />
          </>
        );
      }
      const { container } = render(<Example />);

      const legendWrapper = container.querySelector('.recharts-legend-wrapper');

      expect(container.querySelector('.recharts-wrapper .recharts-legend-wrapper')).not.toBeInTheDocument();
      // assert we've removed internal recharts legend wrapper styles and those that the user adds are included
      expect(legendWrapper).not.toHaveStyle({ position: 'absolute' });
      expect(legendWrapper).toHaveStyle({ margin: '20px' });
      expect(
        container.querySelector('[data-testid="my-custom-portal-target"] > .recharts-legend-wrapper'),
      ).toBeVisible();
    });
  });

  describe('state integration', () => {
    it('should publish its size, and then update it when removed from DOM', () => {
      mockGetBoundingClientRect({ width: 3, height: 11 });
      const legendSpy = vi.fn();
      const Comp = (): null => {
        legendSpy(useAppSelector(selectLegendSize));
        return null;
      };

      const { rerender } = render(
        <BarChart width={500} height={500} data={numericalData}>
          <Legend />
          <Customized component={Comp} />
        </BarChart>,
      );

      const expectedAfterFirstRender: Size = {
        height: 11,
        width: 3,
      };
      expect(legendSpy).toHaveBeenLastCalledWith(expectedAfterFirstRender);
      expect(legendSpy).toHaveBeenCalledTimes(2);

      rerender(
        <BarChart width={500} height={500} data={numericalData}>
          <Customized component={Comp} />
        </BarChart>,
      );

      const expectedAfterSecondRender: Size = {
        height: 0,
        width: 0,
      };
      expect(legendSpy).toHaveBeenLastCalledWith(expectedAfterSecondRender);
      expect(legendSpy).toHaveBeenCalledTimes(4);
    });
  });
});
