import { ApiDoc } from './types';

export const ScatterAPI: ApiDoc = {
  name: 'Scatter',
  props: [
    {
      name: 'activeShape',
      type: '(union of 12 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              This component is rendered when this graphical item is activated (could be by mouse hover, touch,
              keyboard, programmatically).
            </p>
          </section>
        ),
      },
      format: ["<Scatter activeShape={{ fill: 'red' }} />"],
      examples: [
        {
          name: 'Scatter chart with custom active shape',
          url: 'http://recharts.github.io/en-US/examples/SimpleScatterChart/',
          isExternal: true,
        },
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
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
      type: '"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of easing function.</p>
          </section>
        ),
      },
      defaultVal: 'linear',
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      examples: [
        { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
        { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
      ],
    },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'data',
      type: 'ReadonlyArray<unknown>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The source data. Each element should be an object. The properties of each object represent the values of
              different data dimensions.
            </p>
            <p>
              Use the <code>dataKey</code> prop to specify which properties to use.
            </p>
          </section>
        ),
      },
      format: ["data={[{ name: 'a', value: 12 }]}", "data={[{ label: 'foo', measurements: [5, 12] }]}"],
      examples: [
        { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
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
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the numerical value of this Scatter from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Scatter.
              </li>
            </ul>
          </section>
        ),
      },
      examples: [
        { name: 'Line Bar Area Composed Chart', url: '/examples/LineBarAreaComposedChart/', isExternal: false },
        { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
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
              Unique identifier of this component. Used as an HTML attribute <code>id</code>, and also to identify this
              element internally.
            </p>
            <p>If undefined, Recharts will generate a unique ID automatically.</p>
          </section>
        ),
      },
    },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of Scatter points will be disabled. If set &quot;auto&quot;, the animation will be
              disabled in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      examples: [
        {
          name: 'Scatter Chart with many points (performance test)',
          url: '/examples/ScatterChartPerformance/',
          isExternal: false,
        },
      ],
    },
    {
      name: 'label',
      type: 'Function | Props | ReactNode | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders one label for each data point. Options:</p>
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
      defaultVal: 'circle',
      format: ['<Scatter legendType="diamond" />'],
    },
    {
      name: 'line',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders line connecting individual points. Options:</p>
            <ul>
              <li>
                <code>false</code>: no line is drawn.
              </li>
              <li>
                <code>true</code>: a default line is drawn.
              </li>
              <li>
                <code>ReactElement</code>: the option is the custom line element.
              </li>
              <li>
                <code>function</code>: the function will be called to render customized line.
              </li>
              <li>
                <code>object</code>: the option is the props of Curve element.
              </li>
            </ul>
            <p>
              Also see the <code>lineType</code> prop which controls how is this line calculated.
            </p>
          </section>
        ),
      },
      defaultVal: false,
      format: [
        '<Scatter line />',
        '<Scatter line={CustomizedLineComponent} />',
        "<Scatter line={{ strokeDasharray: '5 5' }} />",
      ],
      examples: [
        { name: 'Scatter chart with joint line', url: '/examples/JointLineScatterChart/', isExternal: false },
        {
          name: 'Scatter Chart with many points (performance test)',
          url: '/examples/ScatterChartPerformance/',
          isExternal: false,
        },
      ],
    },
    {
      name: 'lineJointType',
      type: '"basis" | "basisClosed" | "basisOpen" | "bump" | "bumpX" | "bumpY" | "linear" | "linearClosed" | "monotone" | "monotoneX" | "monotoneY" | "natural" | "step" | "stepAfter" | "stepBefore" | CurveFactory',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Determines the shape of joint line. Same as <code>type</code> prop on Curve, Line and Area components.
            </p>
            <p>
              Has no effect if <code>line</code> prop is not set or is false or if <code>lineType</code> is
              &#39;fitting&#39;.
            </p>
          </section>
        ),
      },
      defaultVal: 'linear',
      examples: [
        {
          name: 'Scatter chart with joint line',
          url: 'http://recharts.github.io/en-US/examples/JointLineScatterChart/',
          isExternal: true,
        },
        { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
      ],
    },
    {
      name: 'lineType',
      type: '"fitting" | "joint"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Determines calculation method of the line if the <code>line</code> prop is set. Options:
            </p>
            <ul>
              <li>
                <code>&#39;joint&#39;</code>: line will be generated by connecting all the points.
              </li>
              <li>
                <code>&#39;fitting&#39;</code>: line will be generated by fitting algorithm (linear regression).
              </li>
            </ul>
            <p>
              Has no effect if <code>line</code> prop is not set or is false.
            </p>
          </section>
        ),
      },
      defaultVal: 'joint',
      format: ['<Scatter line lineType="fitting" />'],
      examples: [
        {
          name: 'Scatter chart with joint line',
          url: 'http://recharts.github.io/en-US/examples/JointLineScatterChart/',
          isExternal: true,
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The name of data. This option will be used in tooltip and legend to represent this graphical item. If no
              value was set to this option, the value of dataKey will be used alternatively.
            </p>
          </section>
        ),
      },
      examples: [
        { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
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
      name: 'shape',
      type: '(union of 12 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Determines the shape of individual data points. Can be one of the predefined shapes as a string. If set a
              ReactElement, the shape of line can be customized. If set a function, the function will be called to
              render customized shape.
            </p>
          </section>
        ),
      },
      defaultVal: 'circle',
      format: ['<Scatter shape={CustomizedShapeComponent} />', '<Scatter shape="diamond" />'],
      examples: [
        { name: 'Scatter chart with custom shapes', url: '/examples/JointLineScatterChart/', isExternal: false },
        { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
      ],
    },
    { name: 'tooltipType', type: '"none"', isOptional: true },
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
      examples: [
        { name: 'Multiple Y Axes Scatter Chart', url: '/examples/MultipleYAxesScatterChart/', isExternal: false },
      ],
    },
    {
      name: 'zAxisId',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of ZAxis which is corresponding to the data. Required when there are multiple ZAxes.</p>
            <p>
              ZAxis does not render directly, has no ticks and no tick line. It is used to control the size of each
              scatter point.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [{ name: 'Scatter chart with Z axis', url: '/examples/ThreeDimScatterChart/', isExternal: false }],
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
      defaultVal: 600,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/', isExternal: false }],
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
    { name: 'Line Bar Area Composed Chart', url: '/examples/LineBarAreaComposedChart/', isExternal: false },
    { name: 'Scatter And Line Of Best Fit', url: '/examples/ScatterAndLineOfBestFit/', isExternal: false },
    { name: 'Simple Scatter Chart', url: '/examples/SimpleScatterChart/', isExternal: false },
    { name: 'Three Dim Scatter Chart', url: '/examples/ThreeDimScatterChart/', isExternal: false },
    { name: 'Joint Line Scatter Chart', url: '/examples/JointLineScatterChart/', isExternal: false },
    { name: 'Bubble Chart', url: '/examples/BubbleChart/', isExternal: false },
    { name: 'Scatter Chart With Labels', url: '/examples/ScatterChartWithLabels/', isExternal: false },
    { name: 'Multiple Y Axes Scatter Chart', url: '/examples/MultipleYAxesScatterChart/', isExternal: false },
    { name: 'Scatter Chart With Cells', url: '/examples/ScatterChartWithCells/', isExternal: false },
    {
      name: 'Scatter Chart with many points (performance test)',
      url: '/examples/ScatterChartPerformance/',
      isExternal: false,
    },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Cell', 'ErrorBar', 'LabelList'],
};
