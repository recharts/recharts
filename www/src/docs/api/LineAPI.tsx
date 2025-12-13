import { ApiDoc } from './types.ts';

export const LineAPI: ApiDoc = {
  name: 'Line',
  props: [
    {
      name: 'activeDot',
      type: 'false | true | Function | Partial<ActiveDotProps> | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The dot is shown when user enter an area chart and this chart has tooltip. If false set, no active dot
              will not be drawn. If true set, active dot will be drawn which have the props calculated internally. If
              object set, active dot will be drawn which have the props merged by the internal calculated props and the
              option. If ReactElement set, the option can be the custom active dot element. If set a function, the
              function will be called to render customized active dot.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      format: [
        '<Line dataKey="value" activeDot={false} />',
        '<Line dataKey="value" activeDot={{ stroke: \'red\', strokeWidth: 2, r: 10 }} />',
        '<Line dataKey="value" activeDot={CustomizedActiveDot} />',
      ],
      examples: [{ name: 'A line chart with customized active dot', url: '/examples/SimpleLineChart/' }],
    },
    { name: 'animateNewValues', type: 'boolean', isOptional: true, defaultVal: true },
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
      defaultVal: 1500,
    },
    {
      name: 'animationEasing',
      type: '"linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"',
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
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'connectNulls',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Whether to connect the curve across null points.</p>
          </section>
        ),
      },
      defaultVal: false,
      examples: [
        { name: 'A lineChart connect nulls and a lineChart disconnect nulls', url: '/examples/LineChartConnectNulls/' },
      ],
    },
    { name: 'dangerouslySetInnerHTML', type: 'Object', isOptional: true },
    { name: 'data', type: 'Array<unknown>', isOptional: true },
    {
      name: 'dataKey',
      type: 'string | number | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Area from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Area.
              </li>
            </ul>
          </section>
        ),
      },
    },
    {
      name: 'dot',
      type: 'false | true | Function | Partial<Props> | ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, dots will not be drawn. If true set, dots will be drawn which have the props calculated
              internally. If object set, dots will be drawn which have the props merged by the internal calculated props
              and the option. If ReactElement set, the option can be the custom dot element. If set a function, the
              function will be called to render customized dot.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      format: [
        '<Line dataKey="value" dot={false} />',
        '<Line dataKey="value" dot={{ stroke: \'red\', strokeWidth: 2 }} />',
        '<Line dataKey="value" dot={CustomizedDot} />',
      ],
      examples: [{ name: 'A line chart with customized dot', url: '/examples/CustomizedDotLineChart/' }],
    },
    {
      name: 'hide',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Hides the whole line when true. Useful when toggling the visibility of the line in a chart, for example
              through a legend.
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
              Unique identifier of this component. Used as a HTML attribute <code>id</code>, and also to identify this
              element internally.
            </p>
            <p>If undefined, Recharts will generate a unique ID automatically.</p>
          </section>
        ),
      },
    },
    {
      name: 'isAnimationActive',
      type: 'false | true | "auto"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation of line will be disabled. If set &quot;auto&quot;, the animation will be disabled
              in SSR and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
    },
    {
      name: 'label',
      type: 'false | true | ReactNode | Function | Props',
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
      format: [
        '<Line dataKey="value" label />',
        '<Line dataKey="value" label={{ fill: \'red\', fontSize: 20 }} />',
        '<Line dataKey="value" label={CustomizedLabel} />',
      ],
      examples: [{ name: 'A line chart with customized label', url: '/examples/CustomizedLabelLineChart/' }],
    },
    {
      name: 'legendType',
      type: '"none" | "circle" | "cross" | "diamond" | "line" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of icon in legend. If set to &#39;none&#39;, no legend item will be rendered.</p>
          </section>
        ),
      },
      defaultVal: 'line',
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
    },
    { name: 'path', type: 'string', isOptional: true },
    {
      name: 'shape',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a ReactElement, the shape of line can be customized. If set a function, the function will be called
              to render customized shape.
            </p>
          </section>
        ),
      },
      format: [
        '<Line dataKey="value" shape={CustomizedShapeComponent}/>',
        '<Line dataKey="value" shape={renderShapeFunction}/>',
      ],
    },
    {
      name: 'stroke',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The stroke color. If <code>&quot;none&quot;</code>, no line will be drawn.
            </p>
          </section>
        ),
      },
      defaultVal: '#3182bd',
    },
    {
      name: 'strokeDasharray',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The pattern of dashes and gaps used to paint the line</p>
          </section>
        ),
      },
      format: ['<Line strokeDasharray="4" />', '<Line strokeDasharray="4 1" />', '<Line strokeDasharray="4 1 2" />'],
    },
    {
      name: 'strokeWidth',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The width of the stroke</p>
          </section>
        ),
      },
      defaultVal: 1,
    },
    { name: 'tooltipType', type: '"none"', isOptional: true },
    {
      name: 'type',
      type: '"step" | "basis" | "basisClosed" | "basisOpen" | "bumpX" | "bumpY" | "bump" | "linear" | "linearClosed" | "natural" | "monotoneX" | "monotoneY" | "monotone" | "stepBefore" | "stepAfter" | CurveFactory',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The interpolation type of curve. Allows custom interpolation function.</p>
          </section>
        ),
      },
      defaultVal: 'linear',
      examples: [
        { name: 'An AreaChart which has two area with different interpolation.', url: '/examples/CardinalAreaChart/' },
        {
          name: 'https://github.com/d3/d3-shape#curves',
          url: 'https://github.com/d3/d3-shape#curves',
          isExternal: true,
        },
      ],
    },
    {
      name: 'unit',
      type: 'null | string | number',
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
      type: 'string | number',
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
      type: 'string | number',
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
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: 400 },
    { name: 'onAbort', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationEnd',
      type: 'AnimationEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation end</p>
          </section>
        ),
      },
    },
    { name: 'onAnimationEndCapture', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AnimationEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationStart',
      type: 'AnimationEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation start</p>
          </section>
        ),
      },
    },
    { name: 'onAnimationStartCapture', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClick', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClickCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInput', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInputCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onBlur', type: 'FocusEventHandler<P, T>', isOptional: true },
    { name: 'onBlurCapture', type: 'FocusEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlay', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThrough', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThroughCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onChange', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onChangeCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    {
      name: 'onClick',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onClickCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEnd', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEndCapture', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStart', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStartCapture', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdate', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdateCapture', type: 'CompositionEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenu', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenuCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCopy', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCopyCapture', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCut', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCutCapture', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClick', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClickCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDrag', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnd', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEndCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnter', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnterCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExit', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExitCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeave', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeaveCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOver', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOverCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStart', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStartCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDrop', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDropCapture', type: 'DragEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChange', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChangeCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptied', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptiedCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncrypted', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncryptedCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEnded', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onEndedCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onError', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onErrorCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onFocus', type: 'FocusEventHandler<P, T>', isOptional: true },
    { name: 'onFocusCapture', type: 'FocusEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCaptureCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onInput', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onInputCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalid', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalidCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDown', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDownCapture', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPress', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPressCapture', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUp', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUpCapture', type: 'KeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onLoad', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedData', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedDataCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadata', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadataCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStart', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStartCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCaptureCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseDown',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onMouseDownCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseEnter',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter on the curve</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave on the curve</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onMouseMoveCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOut',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOutCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOver',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOverCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseUp',
      type: 'CurveMouseEventHandler',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup on the curve</p>
          </section>
        ),
      },
    },
    { name: 'onMouseUpCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    { name: 'onPaste', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPasteCapture', type: 'ClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPause', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPauseCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlay', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlaying', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayingCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancel', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancelCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDown', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDownCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnter', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnterCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeave', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeaveCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMove', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMoveCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOut', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOutCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOver', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOverCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUp', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUpCapture', type: 'PointerEventHandler<P, T>', isOptional: true },
    { name: 'onProgress', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onProgressCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChange', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChangeCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onReset', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onResetCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onScroll', type: 'UIEventHandler<P, T>', isOptional: true },
    { name: 'onScrollCapture', type: 'UIEventHandler<P, T>', isOptional: true },
    { name: 'onSeeked', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekedCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeeking', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekingCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelect', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelectCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalled', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalledCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSubmit', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onSubmitCapture', type: 'FormEventHandler<P, T>', isOptional: true },
    { name: 'onSuspend', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onSuspendCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdate', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdateCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancel', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancelCapture', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEnd', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEndCapture', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMove', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMoveCapture', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStart', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStartCapture', type: 'TouchEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEnd', type: 'TransitionEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEndCapture', type: 'TransitionEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChange', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChangeCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaiting', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaitingCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onWheel', type: 'WheelEventHandler<P, T>', isOptional: true },
    { name: 'onWheelCapture', type: 'WheelEventHandler<P, T>', isOptional: true },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['ErrorBar', 'LabelList'],
};
