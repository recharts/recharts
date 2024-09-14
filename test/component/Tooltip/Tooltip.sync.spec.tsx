import React, { ComponentType, ReactNode } from 'react';
import { describe, expect, it, test } from 'vitest';
import { fireEvent, queryByText, render } from '@testing-library/react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../_data';
import { getTooltip, showTooltip } from './tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  barChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
  MouseHoverTooltipTriggerSelector,
  radarChartMouseHoverTooltipSelector,
  radialBarChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';

type TooltipSyncTestCase = {
  // For identifying which test is running
  name: string;
  mouseHoverSelector: MouseHoverTooltipTriggerSelector;
  Wrapper: ComponentType<{ children: ReactNode; syncId: string; dataKey: string }>;
  tooltipContent: { chartOne: { name: string; value: string }; chartTwo: { name: string; value: string } };
};

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

const AreaChartTestCase: TooltipSyncTestCase = {
  name: 'AreaChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <AreaChart {...commonChartProps} syncId={syncId}>
      <Area dataKey={dataKey} />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: areaChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const BarChartTestCase: TooltipSyncTestCase = {
  name: 'BarChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <BarChart {...commonChartProps} syncId={syncId}>
      <Bar dataKey={dataKey} />
      {children}
    </BarChart>
  ),
  mouseHoverSelector: barChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const LineChartHorizontalTestCase: TooltipSyncTestCase = {
  name: 'horizontal LineChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <LineChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      {children}
      <Legend />
      <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
    </LineChart>
  ),
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const LineChartVerticalTestCase: TooltipSyncTestCase = {
  name: 'vertical LineChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <LineChart
      layout="vertical"
      {...commonChartProps}
      syncId={syncId}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      {children}
      <Legend />
      <Line dataKey={dataKey} stroke="#82ca9d" />
    </LineChart>
  ),
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '200' }, chartTwo: { name: 'pv', value: '9800' } },
};

const ComposedChartWithAreaTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Area',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Area dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const ComposedChartWithBarTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Bar',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Bar dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const ComposedChartWithLineTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Line',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="amt" />
      {children}
      <Line dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const RadarChartTestCase: TooltipSyncTestCase = {
  name: 'RadarChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <RadarChart height={600} width={600} data={PageData} syncId={syncId}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {children}
    </RadarChart>
  ),
  mouseHoverSelector: radarChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'Mike', value: '189' }, chartTwo: { name: 'Mike', value: '4800' } },
};

const RadialBarChartTestCase: TooltipSyncTestCase = {
  name: 'RadialBarChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <RadialBarChart height={600} width={600} data={PageData} syncId={syncId}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <RadialBar name="Mike" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {children}
    </RadialBarChart>
  ),
  mouseHoverSelector: radialBarChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'Mike', value: '300' }, chartTwo: { name: 'Mike', value: '4567' } },
};

// TODO: fix synchronization in Pie, Scatter, Funnel. These currently accept syncId as a prop but do not work.
// const PieChartTestCase: TooltipVisibilityTestCase = {
//   name: 'PieChart',
//   Wrapper: ({ children, syncId }) => (
//     <PieChart height={400} width={400} syncId={syncId}>
//       <Pie data={PageData} isAnimationActive={false} dataKey="uv" nameKey="name" cx={200} cy={200} />
//       {children}
//     </PieChart>
//   ),
//   mouseHoverSelector: pieChartMouseHoverTooltipSelector,
// };

// const ScatterChartTestCase: TooltipVisibilityTestCase = {
//   name: 'ScatterChart',
//   Wrapper: ({ children, syncId }) => (
//     <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} syncId={syncId}>
//       <XAxis dataKey="uv" name="stature" unit="cm" />
//       <YAxis dataKey="pv" name="weight" unit="kg" />
//       <Scatter line name="A school" data={PageData} fill="#ff7300" />
//       {children}
//     </ScatterChart>
//   ),
//   mouseHoverSelector: scatterChartMouseHoverTooltipSelector,
// };

// const FunnelChartTestCase: TooltipVisibilityTestCase = {
//   name: 'FunnelChart',
//   Wrapper: ({ children, syncId }) => (
//     <FunnelChart width={700} height={500} syncId={syncId}>
//       <Funnel isAnimationActive={false} dataKey="uv" nameKey="name" data={PageData} />
//       {children}
//     </FunnelChart>
//   ),
//   mouseHoverSelector: funnelChartMouseHoverTooltipSelector,
// };

// TODO: support synchronization in Sankey, Sunburst, Treemap
// const SankeyTestCase: TooltipVisibilityTestCase = {
//   name: 'Sankey',
//   Wrapper: ({ children }) => (
//     <Sankey width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={SankeyData}>
//       {children}
//     </Sankey>
//   ),
//   mouseHoverSelector: sankeyNodeChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(35px, 114.89236115144739px);',
// };

// const SunburstChartTestCase: TooltipVisibilityTestCase = {
//   name: 'SunburstChart',
//   Wrapper: ({ children }) => (
//     <SunburstChart width={400} height={400} data={exampleSunburstData}>
//       {children}
//     </SunburstChart>
//   ),
//   mouseHoverSelector: sunburstChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(285px, 210px);',
// };

// const TreemapTestCase: TooltipVisibilityTestCase = {
//   name: 'Treemap',
//   Wrapper: ({ children }) => (
//     <Treemap
//       width={400}
//       height={400}
//       data={exampleTreemapData}
//       isAnimationActive={false}
//       nameKey="name"
//       dataKey="value"
//     >
//       {children}
//     </Treemap>
//   ),
//   mouseHoverSelector: treemapNodeChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(94.5px, 58.5px);',
// };

const cartesianTestCases: ReadonlyArray<TooltipSyncTestCase> = [
  AreaChartTestCase,
  BarChartTestCase,
  LineChartHorizontalTestCase,
  LineChartVerticalTestCase,
  ComposedChartWithAreaTestCase,
  ComposedChartWithBarTestCase,
  ComposedChartWithLineTestCase,
  // FunnelChartTestCase,
  // ScatterChartTestCase,
];

const radialTestCases: ReadonlyArray<TooltipSyncTestCase> = [
  // PieChartTestCase,
  RadarChartTestCase,
  RadialBarChartTestCase,
];

// Tooltip sync does not work for PieChart, ScatterChart, FunnelChart, SunburstChart, SankeyChart, Treemap
describe('Tooltip synchronization', () => {
  describe.each([...cartesianTestCases, ...radialTestCases])(
    'as a child of $name',
    ({ name, Wrapper, mouseHoverSelector, tooltipContent }) => {
      test(`${name} shows tooltip when synchronized with ${name}`, () => {
        const { chartOne: chartOneContent, chartTwo: chartTwoContent } = tooltipContent;
        const { container, debug } = render(
          <>
            <div id="chartOne">
              <Wrapper syncId="tooltipSync" dataKey="uv">
                <Tooltip />
              </Wrapper>
            </div>
            <div id="chartTwo">
              <Wrapper syncId="tooltipSync" dataKey="pv">
                <Tooltip />
              </Wrapper>
            </div>
          </>,
        );
        // use ids to separate the charts so the `.recharts-wrapper` class can be used to activate the tooltip
        const wrapperOne = container.querySelector('#chartOne');
        const wrapperTwo = container.querySelector('#chartTwo');

        // target the first chart to show the tooltip
        showTooltip(wrapperOne, mouseHoverSelector, debug);

        // target the second chart to see if it has the synchronized tooltip showing
        const tooltip = getTooltip(wrapperTwo);
        expect(tooltip).toBeVisible();

        [
          { wrapper: wrapperOne, content: chartOneContent },
          { wrapper: wrapperTwo, content: chartTwoContent },
        ].forEach(({ wrapper, content }) => {
          const tooltipContentName = wrapper.querySelector('.recharts-tooltip-item-name');
          const tooltipContentValue = wrapper.querySelector('.recharts-tooltip-item-value');
          expect(tooltipContentName).not.toBeNull();
          expect(tooltipContentValue).not.toBeNull();
          expect(tooltipContentName).toBeInTheDocument();
          expect(tooltipContentValue).toBeInTheDocument();
          expect(tooltipContentName.textContent).toEqual(content.name);
          expect(tooltipContentValue.textContent).toEqual(content.value);
        });
      });
    },
  );
});

describe('brush synchronization', () => {
  // This test will continue failing until tooltip synchronisation is in Redux. TODO add this to Redux then enable this test again
  it.fails('Should synchronize the data selected by (a single) Brush', async () => {
    const { container } = render(
      <>
        <LineChart width={600} height={300} data={PageData} syncId="brushSync">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Brush dataKey="name" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <AreaChart width={600} height={300} data={PageData} syncId="brushSync">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" />
        </AreaChart>
      </>,
    );

    const wrappers = container.querySelectorAll<HTMLElement>('.recharts-wrapper');
    const firstChart = wrappers[0];
    expect(firstChart).toBeDefined();
    const secondChart = wrappers[1];
    expect(secondChart).toBeDefined();

    const brushTravellerOne = container.querySelectorAll<SVGRectElement>('.recharts-brush-traveller')[0];
    fireEvent.mouseDown(brushTravellerOne);
    fireEvent.mouseMove(brushTravellerOne, { clientX: 250 });
    fireEvent.mouseUp(brushTravellerOne);

    expect(queryByText(firstChart, 'Page A')).not.toBeInTheDocument();
    expect(queryByText(secondChart, 'Page A')).not.toBeInTheDocument();
  });
});

describe('Cursor synchronization', () => {
  // Cursor sync does not work for RadialBarChart, PieChart, ScatterChart?
  describe.each([
    AreaChartTestCase,
    BarChartTestCase,
    LineChartHorizontalTestCase,
    LineChartVerticalTestCase,
    ComposedChartWithAreaTestCase,
    ComposedChartWithLineTestCase,
    RadarChartTestCase,
  ])('as a child of $name with syncId', ({ Wrapper, mouseHoverSelector }) => {
    it('should display cursor inside of the synchronized SVG', async () => {
      const { container, debug } = render(
        <>
          <Wrapper syncId="cursorSync" dataKey="uv">
            <Tooltip />
          </Wrapper>
          <Wrapper syncId="cursorSync" dataKey="amt">
            <Tooltip />
          </Wrapper>
        </>,
      );
      const wrappers = container.querySelectorAll('.recharts-wrapper');
      const wrapperOne = wrappers[0];
      const wrapperTwo = wrappers[1];

      expect(container.querySelector('.recharts-tooltip-cursor')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(wrapperOne.querySelector('.recharts-wrapper svg .recharts-tooltip-cursor')).toBeVisible();
      expect(wrapperTwo.querySelector('.recharts-tooltip-cursor')).not.toBeNull();
      expect(wrapperTwo.querySelector('.recharts-tooltip-cursor')).toBeVisible();
    });
  });
});
