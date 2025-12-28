import { ApiDoc } from './types';

export const ReferenceDotAPI: ApiDoc = {
  name: 'ReferenceDot',
  props: [
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'ifOverflow',
      type: '"hidden" | "visible" | "discard" | "extendDomain"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Defines how to draw this component if it falls partly outside the canvas:</p>
            <ul>
              <li>
                <code>discard</code>: the whole component will not be drawn at all
              </li>
              <li>
                <code>hidden</code>: the component will be clipped to the chart plot area
              </li>
              <li>
                <code>visible</code>: the component will be drawn completely
              </li>
              <li>
                <code>extendDomain</code>: the domain of the overflown axis will be extended such that the whole
                component fits into the plot area
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'discard',
    },
    {
      name: 'label',
      type: '(union of 7 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders a single label.</p>
            <ul>
              <li>
                <code>false</code>: no labels are rendered
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
    },
    {
      name: 'r',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The radius of dot.</p>
          </section>
        ),
      },
      defaultVal: 10,
    },
    {
      name: 'shape',
      type: 'ReactNode | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set a ReactElement, the shape of dot can be customized. If set a function, the function will be called
              to render customized shape.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'x',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of the center of the dot.</p>
            <p>
              This value is using your chart&#39;s domain, so you will provide a data value instead of a pixel value.
              ReferenceDot will internally calculate the correct pixel position.
            </p>
          </section>
        ),
      },
      format: ['<ReferenceDot x="January" y="2026" />'],
    },
    {
      name: 'xAxisId',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of x-axis which is corresponding to the data. Required when there are multiple XAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'y',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of the center of the dot.</p>
            <p>
              This value is using your chart&#39;s domain, so you will provide a data value instead of a pixel value.
              ReferenceDot will internally calculate the correct pixel position.
            </p>
          </section>
        ),
      },
      format: ['<ReferenceDot x="January" y="2026" />'],
    },
    {
      name: 'yAxisId',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The id of y-axis which is corresponding to the data. Required when there are multiple YAxes.</p>
          </section>
        ),
      },
      defaultVal: 0,
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
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/' }],
    },
    { name: 'onAbort', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'ReactEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEnd', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEndCapture', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationStart', type: 'AnimationEventHandler<P, T>', isOptional: true },
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
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click in this chart.</p>
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
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown in this chart.</p>
          </section>
        ),
      },
    },
    { name: 'onMouseDownCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseEnter',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave in this chart.</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove in this chart.</p>
          </section>
        ),
      },
    },
    { name: 'onMouseMoveCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOut',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout in this chart.</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOutCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOver',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover in this chart.</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOverCapture', type: 'RechartsMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseUp',
      type: 'RechartsMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup in this chart.</p>
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
  desc: {
    'en-US': (
      <section>
        <p>Draws a circle on the chart to highlight a specific range.</p>
        <p>
          This component, unlike Dot or circle, is aware of the cartesian coordinate system, so you specify its center
          by using data coordinates instead of pixels.
        </p>
        <p>ReferenceDot will calculate the pixels based on the provided data coordinates.</p>
        <p>
          If you prefer to render dots using pixels rather than data coordinates, consider using the{' '}
          <code>&lt;Dot&gt;</code> component instead.
        </p>
      </section>
    ),
  },
  parentComponents: ['AreaChart', 'BarChart', 'ComposedChart', 'FunnelChart', 'LineChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
