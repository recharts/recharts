import { ApiDoc } from './types';

export const CartesianGridAPI: ApiDoc = {
  name: 'CartesianGrid',
  props: [
    {
      name: 'fill',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The background color used to fill the space between grid lines</p>
          </section>
        ),
      },
      defaultVal: 'none',
      format: ['<CartesianGrid fill="red" />', '<CartesianGrid fill="#ccc" />'],
    },
    {
      name: 'fillOpacity',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The opacity of the background used to fill the space between grid lines</p>
          </section>
        ),
      },
      format: ['<CartesianGrid fill="red" fillOpacity={0.6} />'],
    },
    {
      name: 'height',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The height of grid. If undefined, covers the full height of the chart plot area.</p>
          </section>
        ),
      },
    },
    {
      name: 'horizontal',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set false, no horizontal grid lines will be drawn.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'horizontalCoordinatesGenerator',
      type: 'HorizontalCoordinatesGenerator',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>A function that generates the y-coordinates of all horizontal lines.</p>
          </section>
        ),
      },
      examples: [
        {
          name: 'Cartesian grid with coordinate generators',
          url: 'https://codesandbox.io/p/sandbox/cartesian-grid-with-coordinate-generators-my38cg?file=%2Fsrc%2FApp.tsx',
          isExternal: true,
        },
      ],
    },
    {
      name: 'horizontalFill',
      type: 'Array<string>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Defines background color of stripes.</p>
            <p>
              The values from this array will be passed in as the <code>fill</code> property in a <code>rect</code> SVG
              element. For possible values see:{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect">
                https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
              </a>
            </p>
            <p>
              In case there are more stripes than colors, the colors will start from beginning. So for example:
              horizontalFill[&#39;yellow&#39;, &#39;black&#39;] produces a pattern of yellow|black|yellow|black
            </p>
            <p>
              If this is undefined, or an empty array, then there is no background fill. Note: Grid lines will be
              rendered above these background stripes.
            </p>
          </section>
        ),
      },
      defaultVal: [],
    },
    {
      name: 'horizontalPoints',
      type: 'Array<number>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Array of coordinates in pixels where to draw horizontal grid lines. Has priority over syncWithTicks and
              horizontalValues.
            </p>
          </section>
        ),
      },
      defaultVal: [],
    },
    {
      name: 'horizontalValues',
      type: 'Array<number> | Array<string>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type. Has
              priority over syncWithTicks but not over horizontalPoints.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'strokeDasharray',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The pattern of dashes and gaps used to paint the lines of the grid</p>
          </section>
        ),
      },
      format: [
        '<CartesianGrid strokeDasharray="3 3" />',
        '<CartesianGrid strokeDasharray={[5, 5, 1, 5]} />',
        '<CartesianGrid strokeDasharray="5 5 1 5" />',
      ],
      examples: [
        {
          name: 'stroke-dasharray on MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray',
          isExternal: true,
        },
        { name: 'Simple Area Chart', url: '/examples/SimpleAreaChart/', isExternal: false },
        { name: 'Stacked Area Chart', url: '/examples/StackedAreaChart/', isExternal: false },
        { name: 'Area Chart Connect Nulls', url: '/examples/AreaChartConnectNulls/', isExternal: false },
        { name: 'Cardinal Area Chart', url: '/examples/CardinalAreaChart/', isExternal: false },
        { name: 'Percent Area Chart', url: '/examples/PercentAreaChart/', isExternal: false },
        { name: 'Synchronized Area Chart', url: '/examples/SynchronizedAreaChart/', isExternal: false },
        { name: 'Area Chart Fill By Value', url: '/examples/AreaChartFillByValue/', isExternal: false },
        { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
        { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
        { name: 'Mix Bar Chart', url: '/examples/MixBarChart/', isExternal: false },
        { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
        { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
        { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
        { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
        { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
        { name: 'Biaxial Bar Chart', url: '/examples/BiaxialBarChart/', isExternal: false },
        { name: 'Bar Chart with background', url: '/examples/BarChartHasBackground/', isExternal: false },
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Banded Chart', url: '/examples/BandedChart/', isExternal: false },
        { name: 'Custom Content Of Tooltip', url: '/examples/CustomContentOfTooltip/', isExternal: false },
        { name: 'Legend with Opacity', url: '/examples/LegendEffectOpacity/', isExternal: false },
        { name: 'Area Responsive Container', url: '/examples/AreaResponsiveContainer/', isExternal: false },
        { name: 'Simple Area Chart Example', url: '/api/AreaChart/', isExternal: false },
        { name: 'Simple Bar Chart Example', url: '/api/BarChart/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/LineChart/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useIsTooltipActive/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipCoordinate/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipDataPoints/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipLabel/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useMargin/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useOffset/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/usePlotArea/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useChartWidth/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useChartHeight/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useXAxisDomain/', isExternal: false },
        { name: 'Simple Line Chart Example', url: '/api/useYAxisDomain/', isExternal: false },
        { name: 'Scatter Chart Example', url: '/api/ScatterChart/', isExternal: false },
        { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
        { name: 'Legend Example', url: '/api/Legend/', isExternal: false },
        { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
        { name: 'Reference Area Example', url: '/api/ReferenceArea/', isExternal: false },
        { name: 'Label Bar Chart Example', url: '/api/Label/', isExternal: false },
        { name: 'Label List Chart Example', url: '/api/LabelList/', isExternal: false },
      ],
    },
    {
      name: 'syncWithTicks',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If true, only the lines that correspond to the axes ticks values will be drawn. If false, extra lines
              could be added for each axis (at min and max coordinates), if there will not such ticks. horizontalPoints,
              verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'vertical',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set false, no vertical grid lines will be drawn.</p>
          </section>
        ),
      },
      defaultVal: true,
      examples: [
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
      ],
    },
    {
      name: 'verticalCoordinatesGenerator',
      type: 'VerticalCoordinatesGenerator',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>A function that generates the x-coordinates of all vertical lines.</p>
          </section>
        ),
      },
      examples: [
        {
          name: 'Cartesian grid with coordinate generators',
          url: 'https://codesandbox.io/p/sandbox/cartesian-grid-with-coordinate-generators-my38cg?file=%2Fsrc%2FApp.tsx',
          isExternal: true,
        },
      ],
    },
    {
      name: 'verticalFill',
      type: 'Array<string>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Defines background color of stripes.</p>
            <p>
              The values from this array will be passed in as the <code>fill</code> property in a <code>rect</code> SVG
              element. For possible values see:{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect">
                https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
              </a>
            </p>
            <p>
              In case there are more stripes than colors, the colors will start from beginning. So for example:
              verticalFill[&#39;yellow&#39;, &#39;black&#39;] produces a pattern of yellow|black|yellow|black
            </p>
            <p>
              If this is undefined, or an empty array, then there is no background fill. Note: Grid lines will be
              rendered above these background stripes.
            </p>
          </section>
        ),
      },
      defaultVal: [],
    },
    {
      name: 'verticalPoints',
      type: 'Array<number>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Array of coordinates in pixels where to draw vertical grid lines. Has priority over syncWithTicks and
              verticalValues.
            </p>
          </section>
        ),
      },
      defaultVal: [],
    },
    {
      name: 'verticalValues',
      type: 'Array<number> | Array<string>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type. Has
              priority over syncWithTicks but not over verticalPoints.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'width',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of grid. If undefined, covers the full width of the chart plot area.</p>
          </section>
        ),
      },
    },
    {
      name: 'x',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of grid. If left undefined, it will be computed from the chart&#39;s offset and margins.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'xAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of grid. If left undefined, it will be computed from the chart&#39;s offset and margins.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'yAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: -100 },
  ],
  desc: {
    'en-US': (
      <section>
        <p>Renders background grid with lines and fill colors in a Cartesian chart.</p>
      </section>
    ),
  },
  links: [
    { name: 'Simple Area Chart', url: '/examples/SimpleAreaChart/', isExternal: false },
    { name: 'Stacked Area Chart', url: '/examples/StackedAreaChart/', isExternal: false },
    { name: 'Area Chart Connect Nulls', url: '/examples/AreaChartConnectNulls/', isExternal: false },
    { name: 'Cardinal Area Chart', url: '/examples/CardinalAreaChart/', isExternal: false },
    { name: 'Percent Area Chart', url: '/examples/PercentAreaChart/', isExternal: false },
    { name: 'Synchronized Area Chart', url: '/examples/SynchronizedAreaChart/', isExternal: false },
    { name: 'Area Chart Fill By Value', url: '/examples/AreaChartFillByValue/', isExternal: false },
    { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
    { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
    { name: 'Mix Bar Chart', url: '/examples/MixBarChart/', isExternal: false },
    { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
    { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
    { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
    { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
    { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
    { name: 'Biaxial Bar Chart', url: '/examples/BiaxialBarChart/', isExternal: false },
    { name: 'Bar Chart with background', url: '/examples/BarChartHasBackground/', isExternal: false },
    { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
    { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
    { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
    { name: 'Line Bar Area Composed Chart', url: '/examples/LineBarAreaComposedChart/', isExternal: false },
    { name: 'Same Data Composed Chart', url: '/examples/SameDataComposedChart/', isExternal: false },
    { name: 'Vertical Composed Chart', url: '/examples/VerticalComposedChart/', isExternal: false },
    { name: 'Composed Chart With Axis Labels', url: '/examples/ComposedChartWithAxisLabels/', isExternal: false },
    { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
    { name: 'Banded Chart', url: '/examples/BandedChart/', isExternal: false },
    { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
    { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
    { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
    { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
    { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
    { name: 'Multiple Y Axes Scatter Chart', url: '/examples/MultipleYAxesScatterChart/', isExternal: false },
    { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
    {
      name: 'Scatter Chart with many points (performance test)',
      url: '/examples/ScatterChartPerformance/',
      isExternal: false,
    },
    { name: 'Custom Content Of Tooltip', url: '/examples/CustomContentOfTooltip/', isExternal: false },
    { name: 'Legend with Opacity', url: '/examples/LegendEffectOpacity/', isExternal: false },
    { name: 'Area Responsive Container', url: '/examples/AreaResponsiveContainer/', isExternal: false },
    { name: 'Composed Responsive Container', url: '/examples/ComposedResponsiveContainer/', isExternal: false },
    { name: 'Simple Area Chart Example', url: '/api/AreaChart/', isExternal: false },
    { name: 'Simple Bar Chart Example', url: '/api/BarChart/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/LineChart/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useIsTooltipActive/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipCoordinate/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipDataPoints/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useActiveTooltipLabel/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useMargin/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useOffset/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/usePlotArea/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useChartWidth/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useChartHeight/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useXAxisDomain/', isExternal: false },
    { name: 'Simple Line Chart Example', url: '/api/useYAxisDomain/', isExternal: false },
    { name: 'Composed Chart Example', url: '/api/ComposedChart/', isExternal: false },
    { name: 'Scatter Chart Example', url: '/api/ScatterChart/', isExternal: false },
    { name: 'Responsive Container Example', url: '/api/ResponsiveContainer/', isExternal: false },
    { name: 'Legend Example', url: '/api/Legend/', isExternal: false },
    { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
    { name: 'Reference Dot Example', url: '/api/ReferenceDot/', isExternal: false },
    { name: 'Reference Area Example', url: '/api/ReferenceArea/', isExternal: false },
    { name: 'Error Bar Example', url: '/api/ErrorBar/', isExternal: false },
    { name: 'Label Bar Chart Example', url: '/api/Label/', isExternal: false },
    { name: 'Label List Chart Example', url: '/api/LabelList/', isExternal: false },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
};
