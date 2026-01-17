import { ApiDoc } from './types';

export const BarAPI: ApiDoc = {
  name: 'Bar',
  props: [
    {
      name: 'activeBar',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The active bar is shown when a user enters a bar chart and this chart has tooltip. Options:</p>
            <ul>
              <li>
                <code>false</code>: all bars are passive, nothing happens on mouse events;
              </li>
              <li>
                <code>true</code>: active bar is rendered separately but the default props are the same as others: so
                mouse events do not change its appearance. className and zIndex are different though;
              </li>
              <li>
                <code>object</code>: the props of active bar;
              </li>
              <li>
                <code>function</code>: the render function of active bar;
              </li>
              <li>
                <code>ReactElement</code>: the active bar element.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
      format: ["<Bar activeBar={{ fill: 'red' }} />", '<Bar activeBar={CustomActiveBarFn} />'],
      examples: [
        { name: 'activeBar example', url: '/examples/SimpleBarChart/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
      ],
    },
    {
      name: 'animationBegin',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies when the animation should begin, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'animationDuration',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies the duration of animation, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 400,
    },
    {
      name: 'animationEasing',
      type: '(union of 9 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of easing function.</p>
          </section>
        ),
      },
      defaultVal: 'ease',
    },
    {
      name: 'background',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders a background for each bar. Options:</p>
            <ul>
              <li>
                <code>false</code>: no background;
              </li>
              <li>
                <code>true</code>: renders default background;
              </li>
              <li>
                <code>object</code>: the props of background rectangle;
              </li>
              <li>
                <code>ReactElement</code>: a custom background element;
              </li>
              <li>
                <code>function</code>: a render function of custom background.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
      examples: [
        { name: 'BarChart with background example', url: '/examples/BarChartHasBackground/', isExternal: false },
        { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
      ],
    },
    {
      name: 'barSize',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by
              the barCategoryGap, barGap and the quantity of bar groups.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Line Bar Area Composed Chart', url: '/examples/LineBarAreaComposedChart/', isExternal: false },
        { name: 'Same Data Composed Chart', url: '/examples/SameDataComposedChart/', isExternal: false },
        { name: 'Vertical Composed Chart', url: '/examples/VerticalComposedChart/', isExternal: false },
        { name: 'Composed Chart With Axis Labels', url: '/examples/ComposedChartWithAxisLabels/', isExternal: false },
        { name: 'Custom Content Of Tooltip', url: '/examples/CustomContentOfTooltip/', isExternal: false },
        { name: 'Composed Responsive Container', url: '/examples/ComposedResponsiveContainer/', isExternal: false },
        { name: 'Composed Chart Example', url: '/api/ComposedChart/', isExternal: false },
      ],
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      examples: [
        { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
        { name: 'Bar Chart With Customized Event', url: '/examples/BarChartWithCustomizedEvent/', isExternal: false },
        { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
        { name: 'Cell Bar Example', url: '/api/Cell/', isExternal: false },
        { name: 'Label Bar Chart Example', url: '/api/Label/', isExternal: false },
        { name: 'Label List Chart Example', url: '/api/LabelList/', isExternal: false },
      ],
    },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'dangerouslySetInnerHTML', type: 'Object', isOptional: true },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Bar from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Bar.
              </li>
            </ul>
          </section>
        ),
      },
      examples: [
        { name: 'Tiny Bar Chart', url: '/examples/TinyBarChart/', isExternal: false },
        { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
        { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
        { name: 'Mix Bar Chart', url: '/examples/MixBarChart/', isExternal: false },
        { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
        { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
        { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
        { name: 'Bar Chart With Customized Event', url: '/examples/BarChartWithCustomizedEvent/', isExternal: false },
        { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
        { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
      ],
    },
    {
      name: 'hide',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Hides the whole graphical element when true.</p>
            <p>
              Hiding an element is different from removing it from the chart: Hidden graphical elements are still
              visible in Legend, and can be included in axis domain calculations, depending on{' '}
              <code>includeHidden</code> props of your XAxis/YAxis.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'id',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The unique identifier of this component. Used as an HTML attribute <code>id</code>, and also to identify
              this element internally.
            </p>
            <p>If undefined, Recharts will generate a unique ID automatically.</p>
          </section>
        ),
      },
    },
    { name: 'index', type: 'bigint | number | string', isOptional: true },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of bar will be disabled. If set &quot;auto&quot;, the animation will be disabled
              in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      examples: [
        { name: 'Ranged Stacked Bar Chart', url: '/examples/RangedStackedBarChart/', isExternal: false },
        { name: 'Ranged Stacked Bar Chart', url: '/api/BarStack/', isExternal: false },
        { name: 'Custom Content Of Tooltip', url: '/examples/CustomContentOfTooltip/', isExternal: false },
        { name: 'Ranged Bar Chart Example', url: '/api/BarChart/', isExternal: false },
        { name: 'Composed Chart Example', url: '/api/ComposedChart/', isExternal: false },
        { name: 'Cell Bar Example', url: '/api/Cell/', isExternal: false },
        { name: 'Reference Line Position Example', url: '/api/ReferenceLine/', isExternal: false },
        { name: 'Label Bar Chart Example', url: '/api/Label/', isExternal: false },
        { name: 'Label List Chart Example', url: '/api/LabelList/', isExternal: false },
      ],
    },
    {
      name: 'label',
      type: 'Function | Props | ReactNode | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders one label for each bar. Options:</p>
            <ul>
              <li>
                <code>true</code>: renders default labels;
              </li>
              <li>
                <code>false</code>: no labels are rendered;
              </li>
              <li>
                <code>object</code>: the props of LabelList component;
              </li>
              <li>
                <code>ReactElement</code>: a custom label element;
              </li>
              <li>
                <code>function</code>: a render function of custom label.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: false,
      format: [
        '<Bar label />',
        "<Bar label={{ position: 'top', fontSize: 20 }} />",
        '<Bar label={CustomizedLabelFn} />',
      ],
      examples: [
        { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
      ],
    },
    {
      name: 'legendType',
      type: '"circle" | "cross" | "diamond" | "line" | "none" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of icon in legend. If set to &#39;none&#39;, no legend item will be rendered.</p>
          </section>
        ),
      },
      defaultVal: 'rect',
    },
    {
      name: 'maxBarSize',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The maximum width of bar in a horizontal chart, or maximum height in a vertical chart.</p>
          </section>
        ),
      },
      examples: [
        { name: 'Ranged Stacked Bar Chart', url: '/examples/RangedStackedBarChart/', isExternal: false },
        { name: 'Ranged Stacked Bar Chart', url: '/api/BarStack/', isExternal: false },
      ],
    },
    {
      name: 'minPointSize',
      type: 'Function | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The minimal height of a bar in a horizontal chart, or the minimal width of a bar in a vertical chart.</p>
            <p>
              By default, 0 values are not shown. To visualize a 0 (or close to zero) point, set the minimal point size
              to a pixel value like 3.
            </p>
            <p>
              In stacked bar charts, minPointSize might not be respected for tightly packed values. So we strongly
              recommend not using this props in stacked BarChart.
            </p>
            <p>You may provide a function to conditionally change this prop based on Bar value.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Chart with min bar height', url: '/examples/BarChartWithMinHeight', isExternal: false },
        { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
      ],
    },
    {
      name: 'name',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The name of data. This option will be used in tooltip and legend to represent a bar. If no value was set
              to this option, the value of dataKey will be used alternatively.
            </p>
          </section>
        ),
      },
      examples: [{ name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false }],
    },
    {
      name: 'radius',
      type: '[number, number, number, number] | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The radius of corners.</p>
            <p>
              If you provide a single number, it applies to all four corners. If you provide an array of four numbers,
              they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Guide: Rounded bar corners', url: '/guide/roundedBars/', isExternal: false },
        { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
      ],
    },
    {
      name: 'shape',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a ReactElement, the shape of bar can be customized. If set a function, the function will be called
              to render customized shape. By default, renders a rectangle.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Custom shape bar chart example', url: '/examples/CustomShapeBarChart/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
        { name: 'Candlestick', url: '/examples/Candlestick/', isExternal: false },
      ],
    },
    {
      name: 'stackId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.</p>
          </section>
        ),
      },
      examples: [
        { name: 'Stacked bar chart example', url: '/examples/StackedBarChart/', isExternal: false },
        { name: 'Chart with both stacked and non-stacked bars', url: '/examples/MixBarChart/', isExternal: false },
        { name: 'BarStack', url: '/api/BarStack', isExternal: false },
        { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
        { name: 'Population Pyramid', url: '/examples/PopulationPyramid/', isExternal: false },
        { name: 'Timeline', url: '/examples/TimelineExample/', isExternal: false },
      ],
    },
    { name: 'tooltipType', type: '"none"', isOptional: true },
    {
      name: 'unit',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The unit of data. This option will be used in tooltip.</p>
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
      examples: [{ name: 'Biaxial Bar Chart', url: '/examples/BiaxialBarChart/', isExternal: false }],
    },
    {
      name: 'zIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Z-Index of this component and its children. The higher the value, the more on top it will be rendered.
              Components with higher zIndex will appear in front of components with lower zIndex. If undefined or 0, the
              content is rendered in the default layer without portals.
            </p>
          </section>
        ),
      },
      defaultVal: 300,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/', isExternal: false }],
    },
    { name: 'onAbort', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationEnd',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation end</p>
          </section>
        ),
      },
    },
    { name: 'onAnimationEndCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationStart',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation start</p>
          </section>
        ),
      },
    },
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
    {
      name: 'onClick',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the bars in this group</p>
          </section>
        ),
      },
      examples: [
        {
          name: 'Chart with customized event example',
          url: '/examples/BarChartWithCustomizedEvent/',
          isExternal: false,
        },
      ],
    },
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
    {
      name: 'onMouseDown',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown on the bars in this group</p>
          </section>
        ),
      },
    },
    { name: 'onMouseDownCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseEnter',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter on the bars in this group</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave on the bars in this group</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove on the bars in this group</p>
          </section>
        ),
      },
    },
    { name: 'onMouseMoveCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOut',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout on the bars in this group</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOutCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOver',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover on the bars in this group</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOverCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseUp',
      type: 'BarMouseEvent',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup on the bars in this group</p>
          </section>
        ),
      },
    },
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
    { name: 'Tiny Bar Chart', url: '/examples/TinyBarChart/', isExternal: false },
    { name: 'Simple Bar Chart', url: '/examples/SimpleBarChart/', isExternal: false },
    { name: 'Stacked Bar Chart', url: '/examples/StackedBarChart/', isExternal: false },
    { name: 'Mix Bar Chart', url: '/examples/MixBarChart/', isExternal: false },
    { name: 'Custom Shape Bar Chart', url: '/examples/CustomShapeBarChart/', isExternal: false },
    { name: 'Positive and Negative Bar Chart', url: '/examples/PositiveAndNegativeBarChart/', isExternal: false },
    { name: 'Brush Bar Chart', url: '/examples/BrushBarChart/', isExternal: false },
    { name: 'Bar Chart With Customized Event', url: '/examples/BarChartWithCustomizedEvent/', isExternal: false },
    { name: 'Bar Chart With Min Height', url: '/examples/BarChartWithMinHeight/', isExternal: false },
    { name: 'Bar Chart Stacked By Sign', url: '/examples/BarChartStackedBySign/', isExternal: false },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'BarStack', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Cell', 'ErrorBar', 'LabelList'],
};
