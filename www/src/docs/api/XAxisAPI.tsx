import { ApiDoc } from './types';

export const XAxisAPI: ApiDoc = {
  name: 'XAxis',
  props: [
    {
      name: 'allowDataOverflow',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              When domain of the axis is specified and the type of the axis is &#39;number&#39;, if allowDataOverflow is
              set to be false, the domain will be adjusted when the minimum value of data is smaller than domain[0] or
              the maximum value of data is greater than domain[1] so that the axis displays all data values. If set to
              true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'allowDecimals',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Allow the ticks of axis to be decimals or not.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'allowDuplicatedCategory',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Allow the axis has duplicated categories or not when the type of axis is &quot;category&quot;.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'angle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Tick text rotation angle in degrees. Positive values rotate clockwise, negative values rotate
              counterclockwise.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'axisLine',
      type: 'React.SVGProps<SVGLineElement> | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Determines how the axis line is drawn. Options:</p>
            <ul>
              <li>
                <code>true</code>: the axis line is drawn with default props;
              </li>
              <li>
                <code>false</code>: the axis line is not visible;
              </li>
              <li>
                <code>object</code>: passed as props to SVG <code>&lt;line&gt;</code> element representing the axis
                line.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: true,
      examples: [{ name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false }],
    },
    { name: 'children', type: 'ReactNode', isOptional: true },
    {
      name: 'className',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The HTML element&#39;s class name</p>
          </section>
        ),
      },
    },
    { name: 'dangerouslySetInnerHTML', type: 'Object', isOptional: true },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Axis from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Axis.
              </li>
            </ul>
            <p>If undefined, it will reuse the dataKey of graphical items.</p>
          </section>
        ),
      },
      examples: [
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
      ],
    },
    {
      name: 'domain',
      type: 'Array<readonly number> | Array<readonly string> | Function | readonly [AxisDomainItem, AxisDomainItem]',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specify the domain of axis when the axis is a number axis.</p>
            <p>If undefined, then the domain is calculated based on the data and dataKeys.</p>
            <p>The length of domain should be 2, and we will validate the values in domain.</p>
            <p>
              Each element in the array can be a number, &#39;auto&#39;, &#39;dataMin&#39;, &#39;dataMax&#39;, a string
              like &#39;dataMin - 20&#39;, &#39;dataMax + 100&#39;, or a function that accepts a single argument and
              returns a number.
            </p>
            <p>
              If any element of domain is set to be &#39;auto&#39;, comprehensible scale ticks will be calculated, and
              the final domain of axis is generated by the ticks. If a function, receives &#39;[dataMin, dataMax]&#39;,
              and must return a computed domain as &#39;[min, max]&#39;.
            </p>
          </section>
        ),
      },
      format: [
        "<XAxis type=\"number\" domain={['dataMin', 'dataMax']} />",
        '<XAxis type="number" domain={[0, \'dataMax\']} />',
        "<XAxis type=\"number\" domain={['auto', 'auto']} />",
        '<XAxis type="number" domain={[0, \'dataMax + 1000\']} />',
        "<XAxis type=\"number\" domain={['dataMin - 100', 'dataMax + 100']} />",
        '<XAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />',
        '<XAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />',
        '<XAxis type="number" domain={[0, 100]} allowDataOverflow />',
      ],
      examples: [
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        {
          name: 'Scatter Chart with many points (performance test)',
          url: '/examples/ScatterChartPerformance/',
          isExternal: false,
        },
      ],
    },
    {
      name: 'height',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Height of the axis in pixels.</p>
          </section>
        ),
      },
      defaultVal: 30,
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Multiple X Axes', url: '/examples/MultiXAxisExample/', isExternal: false },
      ],
    },
    {
      name: 'hide',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set true, the axis do not display in the chart.</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'includeHidden',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Ensures that all datapoints within a chart contribute to its domain calculation, even when they are hidden
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'interval',
      type: '(union of 6 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set 0, all the ticks will be shown. If set preserveStart&quot;, &quot;preserveEnd&quot; or
              &quot;preserveStartEnd&quot;, the ticks which is to be shown or hidden will be calculated automatically.
            </p>
          </section>
        ),
      },
      defaultVal: 'preserveEnd',
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
      ],
    },
    {
      name: 'label',
      type: '(union of 7 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Defines a single label for the whole axis. This prop renders one label in the center of the axis line.
              Useful for labeling the axis as a whole, like &quot;Time (in seconds)&quot; or &quot;Distance (in
              meters)&quot;.
            </p>
            <p>
              This is not controlling tick labels. If you want to customize tick labels, please see{' '}
              <code>tickFormatter</code> or <code>tick</code> props.
            </p>
            <ul>
              <li>
                <code>false</code>: no label is rendered
              </li>
              <li>
                <code>string</code> | <code>number</code>: the content of the label
              </li>
              <li>
                <code>object</code>: the props of LabelList component
              </li>
              <li>
                <code>ReactElement</code>: a custom label element
              </li>
              <li>
                <code>function</code>: a render function of custom label
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
      examples: [
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Composed Chart With Axis Labels', url: '/examples/ComposedChartWithAxisLabels/', isExternal: false },
        { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
      ],
    },
    {
      name: 'minTickGap',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The minimum gap between two adjacent tick labels</p>
          </section>
        ),
      },
      defaultVal: 5,
    },
    {
      name: 'mirror',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.
            </p>
          </section>
        ),
      },
      defaultVal: false,
      examples: [{ name: 'Multiple X Axes', url: '/examples/MultiXAxisExample/', isExternal: false }],
    },
    {
      name: 'name',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The name of data. This option will be used in tooltip. If no value was set to this option, the value of
              dataKey will be used alternatively.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
        { name: 'Multiple Y Axes Scatter Chart', url: '/examples/MultipleYAxesScatterChart/', isExternal: false },
        { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
      ],
    },
    {
      name: 'orientation',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The orientation of axis</p>
          </section>
        ),
      },
      defaultVal: 'bottom',
      examples: [{ name: 'Multiple X Axes', url: '/examples/MultiXAxisExample/', isExternal: false }],
    },
    {
      name: 'padding',
      type: '"gap" | "no-gap" | Object',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Axis padding is the distance between the edge of plot area and the first/last tick.</p>
          </section>
        ),
      },
      defaultVal: { left: 0, right: 0 },
    },
    {
      name: 'range',
      type: 'AxisRange',
      isOptional: true,
      deprecated:
        'Recharts computes the range automatically based on chart width or height\n\nRecharts ignores this prop since 3.0',
    },
    {
      name: 'reversed',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set to true, the ticks of this axis are reversed.</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'scale',
      type: '(union of 20 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Scale function determines how data values are mapped to visual values. In other words, decided the mapping
              between data domain and coordinate range.
            </p>
            <p>
              If undefined, or &#39;auto&#39;, the scale function is created internally according to the type of axis
              and data.
            </p>
            <p>
              You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale
              definition object.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      format: [
        '<XAxis scale="log" />',
        "import { scaleLog } from 'd3-scale';\nconst scale = scaleLog().base(Math.E);\n<XAxis scale={scale} />",
      ],
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Line Bar Area Composed Chart', url: '/examples/LineBarAreaComposedChart/', isExternal: false },
        { name: 'Same Data Composed Chart', url: '/examples/SameDataComposedChart/', isExternal: false },
        { name: 'Composed Chart With Axis Labels', url: '/examples/ComposedChartWithAxisLabels/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        { name: 'Composed Responsive Container', url: '/examples/ComposedResponsiveContainer/', isExternal: false },
      ],
    },
    {
      name: 'tick',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Defines how the individual label text is rendered. This controls the settings for individual ticks; on a
              typical axis, there are multiple ticks, depending on your data.
            </p>
            <p>
              If you want to customize the overall axis label, use the <code>label</code> prop instead.
            </p>
            <p>Options:</p>
            <ul>
              <li>
                <code>false</code>: Do not render any tick labels.
              </li>
              <li>
                <code>true</code>: Render tick labels with default settings.
              </li>
              <li>
                <code>object</code>: An object of props to be merged into the internally calculated tick props.
              </li>
              <li>
                <code>ReactElement</code>: A custom React element to be used as the tick label.
              </li>
              <li>
                <code>function</code>: A function that returns a React element for custom rendering of tick labels.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: true,
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
      ],
    },
    {
      name: 'tickCount',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The count of axis ticks. Not used if &#39;type&#39; is &#39;category&#39;.</p>
          </section>
        ),
      },
      defaultVal: 5,
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The formatter function of tick.</p>
          </section>
        ),
      },
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
      ],
    },
    {
      name: 'tickLine',
      type: 'React.SVGProps<SVGLineElement> | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, tick lines will not be drawn. If true set, tick lines will be drawn which have the props
              calculated internally. If object set, tick lines will be drawn which have the props merged by the internal
              calculated props and the option.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
      ],
    },
    {
      name: 'tickMargin',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The margin between tick line and tick.</p>
          </section>
        ),
      },
    },
    {
      name: 'ticks',
      type: 'Array<readonly AxisTick>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Ticks can be any type when the axis is the type of category Ticks must be numbers when the axis is the
              type of number
            </p>
          </section>
        ),
      },
    },
    {
      name: 'tickSize',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The length of tick line.</p>
          </section>
        ),
      },
      defaultVal: 6,
    },
    {
      name: 'type',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of axis.</p>
            <p>
              <code>category</code>: Treats data as distinct values. Each value is in the same distance from its
              neighbors, regardless of their actual numeric difference.
            </p>
            <p>
              <code>number</code>: Treats data as continuous range. Values that are numerically closer are placed closer
              together on the axis.
            </p>
            <p>
              <code>auto</code>: the type is inferred based on the chart layout.
            </p>
          </section>
        ),
      },
      defaultVal: 'category',
      examples: [
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Vertical Composed Chart', url: '/examples/VerticalComposedChart/', isExternal: false },
        { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
        { name: 'Target Price Chart with active Label', url: '/examples/TargetPriceChart/', isExternal: false },
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
      ],
    },
    {
      name: 'unit',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The unit of data. This option will be used in tooltip.</p>
          </section>
        ),
      },
      examples: [
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
      ],
    },
    {
      name: 'xAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Unique ID that represents this XAxis. Required when there are multiple XAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Bar Chart With Multi X Axis', url: '/examples/BarChartWithMultiXAxis/', isExternal: false },
        { name: 'Multiple X Axes', url: '/examples/MultiXAxisExample/', isExternal: false },
      ],
    },
    { name: 'onAbort', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEnd', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEndCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationStart', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationStartCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClick', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInput', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInputCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onBlur', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onBlurCapture', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlay', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThrough', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThroughCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onChange', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onChangeCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onClick', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEnd', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEndCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStart', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStartCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdate', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdateCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenu', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenuCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCopy', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCopyCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCut', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCutCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClick', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDrag', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnd', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEndCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnter', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnterCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExit', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExitCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeave', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeaveCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOver', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOverCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStart', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStartCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDrop', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDropCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptied', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptiedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncrypted', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncryptedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEnded', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEndedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onError', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onErrorCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onFocus', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onFocusCapture', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCaptureCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onInput', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInputCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalid', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalidCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDown', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDownCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPress', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPressCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUp', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUpCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onLoad', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedData', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedDataCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadata', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadataCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStart', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStartCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCaptureCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onMouseDown', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseDownCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseEnter', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseLeave', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseMove', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseMoveCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseOut', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseOutCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseOver', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseOverCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseUp', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onMouseUpCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onPaste', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPasteCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPause', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPauseCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlay', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlaying', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancel', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancelCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDown', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDownCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnter', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnterCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeave', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeaveCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMove', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMoveCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOut', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOutCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOver', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOverCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUp', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUpCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onProgress', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onProgressCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onReset', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onResetCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onScroll', type: 'AdaptChildUIEventHandler<P, T>', isOptional: true },
    { name: 'onScrollCapture', type: 'AdaptChildUIEventHandler<P, T>', isOptional: true },
    { name: 'onSeeked', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeeking', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelect', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelectCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalled', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalledCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSubmit', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onSubmitCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onSuspend', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSuspendCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdate', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdateCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancel', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancelCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEnd', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEndCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMove', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMoveCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStart', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStartCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEnd', type: 'AdaptChildTransitionEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEndCapture', type: 'AdaptChildTransitionEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaiting', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaitingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWheel', type: 'AdaptChildWheelEventHandler<P, T>', isOptional: true },
    { name: 'onWheelCapture', type: 'AdaptChildWheelEventHandler<P, T>', isOptional: true },
  ],
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
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
