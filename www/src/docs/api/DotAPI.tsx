import { Link } from 'react-router';
import { ApiDoc } from './types';

export const DotAPI: ApiDoc = {
  name: 'Dot',
  props: [
    { name: 'children', type: 'ReactNode', isOptional: true },
    { name: 'className', type: 'string', isOptional: true },
    { name: 'clipDot', type: 'boolean', isOptional: true },
    {
      name: 'cx',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of center in pixels.</p>
          </section>
        ),
      },
    },
    {
      name: 'cy',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of center in pixels.</p>
          </section>
        ),
      },
    },
    { name: 'dangerouslySetInnerHTML', type: 'Object', isOptional: true },
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
        <p>Renders a dot in the chart.</p>
        <p>
          This component accepts X and Y coordinates in pixels. If you need to position the rectangle based on your
          chart&#39;s data, consider using the <Link to="/api/ReferenceDot/">ReferenceDot</Link> component instead.
        </p>
      </section>
    ),
  },
};
