import {
  AriaAttributes,
  DOMAttributes,
  SVGProps,
  SyntheticEvent,
  ClipboardEvent,
  CompositionEvent,
  DragEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
  PointerEvent,
  UIEvent,
  WheelEvent,
  AnimationEvent,
  TransitionEvent,
  ReactNode
} from 'react';

export type LayoutType = 'horizontal' | 'vertical';
export type PresentationAttributes<T> = AriaAttributes &
  DOMAttributes<T> &
  SVGProps<T>;
export type PresentationAttributesWithProps<P, T> = AriaAttributes &
  DOMAttributesWithProps<P, T> &
  SVGProps<T>;

export type SymbolType = 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye'
export type LegendType = 'plainline' | 'line' | 'square' | 'rect' | 'circle' | 'cross' |
  'diamond' | 'star' | 'triangle' | 'wye' | 'none'

//
// Event Handler Types -- Copied from @types/react/index.d.ts and adapted for Props.
//

type EventHandler<P, E extends SyntheticEvent<any>> = {
  bivarianceHack(props: P, event: E): void;
}['bivarianceHack'];

type ReactEventHandler<P, T = Element> = EventHandler<P, SyntheticEvent<T>>;

type ClipboardEventHandler<P, T = Element> = EventHandler<P, ClipboardEvent<T>>;
type CompositionEventHandler<P, T = Element> = EventHandler<
  P,
  CompositionEvent<T>
>;
type DragEventHandler<P, T = Element> = EventHandler<P, DragEvent<T>>;
type FocusEventHandler<P, T = Element> = EventHandler<P, FocusEvent<T>>;
type FormEventHandler<P, T = Element> = EventHandler<P, FormEvent<T>>;
type KeyboardEventHandler<P, T = Element> = EventHandler<P, KeyboardEvent<T>>;
type MouseEventHandler<P, T = Element> = EventHandler<P, MouseEvent<T>>;
type TouchEventHandler<P, T = Element> = EventHandler<P, TouchEvent<T>>;
type PointerEventHandler<P, T = Element> = EventHandler<P, PointerEvent<T>>;
type UIEventHandler<P, T = Element> = EventHandler<P, UIEvent<T>>;
type WheelEventHandler<P, T = Element> = EventHandler<P, WheelEvent<T>>;
type AnimationEventHandler<P, T = Element> = EventHandler<P, AnimationEvent<T>>;
type TransitionEventHandler<P, T = Element> = EventHandler<
  P,
  TransitionEvent<T>
>;

interface DOMAttributesWithProps<P, T> {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };

  // Clipboard Events
  onCopy?: ClipboardEventHandler<P, T>;
  onCopyCapture?: ClipboardEventHandler<P, T>;
  onCut?: ClipboardEventHandler<P, T>;
  onCutCapture?: ClipboardEventHandler<P, T>;
  onPaste?: ClipboardEventHandler<P, T>;
  onPasteCapture?: ClipboardEventHandler<P, T>;

  // Composition Events
  onCompositionEnd?: CompositionEventHandler<P, T>;
  onCompositionEndCapture?: CompositionEventHandler<P, T>;
  onCompositionStart?: CompositionEventHandler<P, T>;
  onCompositionStartCapture?: CompositionEventHandler<P, T>;
  onCompositionUpdate?: CompositionEventHandler<P, T>;
  onCompositionUpdateCapture?: CompositionEventHandler<P, T>;

  // Focus Events
  onFocus?: FocusEventHandler<P, T>;
  onFocusCapture?: FocusEventHandler<P, T>;
  onBlur?: FocusEventHandler<P, T>;
  onBlurCapture?: FocusEventHandler<P, T>;

  // Form Events
  onChange?: FormEventHandler<P, T>;
  onChangeCapture?: FormEventHandler<P, T>;
  onBeforeInput?: FormEventHandler<P, T>;
  onBeforeInputCapture?: FormEventHandler<P, T>;
  onInput?: FormEventHandler<P, T>;
  onInputCapture?: FormEventHandler<P, T>;
  onReset?: FormEventHandler<P, T>;
  onResetCapture?: FormEventHandler<P, T>;
  onSubmit?: FormEventHandler<P, T>;
  onSubmitCapture?: FormEventHandler<P, T>;
  onInvalid?: FormEventHandler<P, T>;
  onInvalidCapture?: FormEventHandler<P, T>;

  // Image Events
  onLoad?: ReactEventHandler<P, T>;
  onLoadCapture?: ReactEventHandler<P, T>;
  onError?: ReactEventHandler<P, T>; // also a Media Event
  onErrorCapture?: ReactEventHandler<P, T>; // also a Media Event

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<P, T>;
  onKeyDownCapture?: KeyboardEventHandler<P, T>;
  onKeyPress?: KeyboardEventHandler<P, T>;
  onKeyPressCapture?: KeyboardEventHandler<P, T>;
  onKeyUp?: KeyboardEventHandler<P, T>;
  onKeyUpCapture?: KeyboardEventHandler<P, T>;

  // Media Events
  onAbort?: ReactEventHandler<P, T>;
  onAbortCapture?: ReactEventHandler<P, T>;
  onCanPlay?: ReactEventHandler<P, T>;
  onCanPlayCapture?: ReactEventHandler<P, T>;
  onCanPlayThrough?: ReactEventHandler<P, T>;
  onCanPlayThroughCapture?: ReactEventHandler<P, T>;
  onDurationChange?: ReactEventHandler<P, T>;
  onDurationChangeCapture?: ReactEventHandler<P, T>;
  onEmptied?: ReactEventHandler<P, T>;
  onEmptiedCapture?: ReactEventHandler<P, T>;
  onEncrypted?: ReactEventHandler<P, T>;
  onEncryptedCapture?: ReactEventHandler<P, T>;
  onEnded?: ReactEventHandler<P, T>;
  onEndedCapture?: ReactEventHandler<P, T>;
  onLoadedData?: ReactEventHandler<P, T>;
  onLoadedDataCapture?: ReactEventHandler<P, T>;
  onLoadedMetadata?: ReactEventHandler<P, T>;
  onLoadedMetadataCapture?: ReactEventHandler<P, T>;
  onLoadStart?: ReactEventHandler<P, T>;
  onLoadStartCapture?: ReactEventHandler<P, T>;
  onPause?: ReactEventHandler<P, T>;
  onPauseCapture?: ReactEventHandler<P, T>;
  onPlay?: ReactEventHandler<P, T>;
  onPlayCapture?: ReactEventHandler<P, T>;
  onPlaying?: ReactEventHandler<P, T>;
  onPlayingCapture?: ReactEventHandler<P, T>;
  onProgress?: ReactEventHandler<P, T>;
  onProgressCapture?: ReactEventHandler<P, T>;
  onRateChange?: ReactEventHandler<P, T>;
  onRateChangeCapture?: ReactEventHandler<P, T>;
  onSeeked?: ReactEventHandler<P, T>;
  onSeekedCapture?: ReactEventHandler<P, T>;
  onSeeking?: ReactEventHandler<P, T>;
  onSeekingCapture?: ReactEventHandler<P, T>;
  onStalled?: ReactEventHandler<P, T>;
  onStalledCapture?: ReactEventHandler<P, T>;
  onSuspend?: ReactEventHandler<P, T>;
  onSuspendCapture?: ReactEventHandler<P, T>;
  onTimeUpdate?: ReactEventHandler<P, T>;
  onTimeUpdateCapture?: ReactEventHandler<P, T>;
  onVolumeChange?: ReactEventHandler<P, T>;
  onVolumeChangeCapture?: ReactEventHandler<P, T>;
  onWaiting?: ReactEventHandler<P, T>;
  onWaitingCapture?: ReactEventHandler<P, T>;

  // MouseEvents
  onAuxClick?: MouseEventHandler<P, T>;
  onAuxClickCapture?: MouseEventHandler<P, T>;
  onClick?: MouseEventHandler<P, T>;
  onClickCapture?: MouseEventHandler<P, T>;
  onContextMenu?: MouseEventHandler<P, T>;
  onContextMenuCapture?: MouseEventHandler<P, T>;
  onDoubleClick?: MouseEventHandler<P, T>;
  onDoubleClickCapture?: MouseEventHandler<P, T>;
  onDrag?: DragEventHandler<P, T>;
  onDragCapture?: DragEventHandler<P, T>;
  onDragEnd?: DragEventHandler<P, T>;
  onDragEndCapture?: DragEventHandler<P, T>;
  onDragEnter?: DragEventHandler<P, T>;
  onDragEnterCapture?: DragEventHandler<P, T>;
  onDragExit?: DragEventHandler<P, T>;
  onDragExitCapture?: DragEventHandler<P, T>;
  onDragLeave?: DragEventHandler<P, T>;
  onDragLeaveCapture?: DragEventHandler<P, T>;
  onDragOver?: DragEventHandler<P, T>;
  onDragOverCapture?: DragEventHandler<P, T>;
  onDragStart?: DragEventHandler<P, T>;
  onDragStartCapture?: DragEventHandler<P, T>;
  onDrop?: DragEventHandler<P, T>;
  onDropCapture?: DragEventHandler<P, T>;
  onMouseDown?: MouseEventHandler<P, T>;
  onMouseDownCapture?: MouseEventHandler<P, T>;
  onMouseEnter?: MouseEventHandler<P, T>;
  onMouseLeave?: MouseEventHandler<P, T>;
  onMouseMove?: MouseEventHandler<P, T>;
  onMouseMoveCapture?: MouseEventHandler<P, T>;
  onMouseOut?: MouseEventHandler<P, T>;
  onMouseOutCapture?: MouseEventHandler<P, T>;
  onMouseOver?: MouseEventHandler<P, T>;
  onMouseOverCapture?: MouseEventHandler<P, T>;
  onMouseUp?: MouseEventHandler<P, T>;
  onMouseUpCapture?: MouseEventHandler<P, T>;

  // Selection Events
  onSelect?: ReactEventHandler<P, T>;
  onSelectCapture?: ReactEventHandler<P, T>;

  // Touch Events
  onTouchCancel?: TouchEventHandler<P, T>;
  onTouchCancelCapture?: TouchEventHandler<P, T>;
  onTouchEnd?: TouchEventHandler<P, T>;
  onTouchEndCapture?: TouchEventHandler<P, T>;
  onTouchMove?: TouchEventHandler<P, T>;
  onTouchMoveCapture?: TouchEventHandler<P, T>;
  onTouchStart?: TouchEventHandler<P, T>;
  onTouchStartCapture?: TouchEventHandler<P, T>;

  // Pointer Events
  onPointerDown?: PointerEventHandler<P, T>;
  onPointerDownCapture?: PointerEventHandler<P, T>;
  onPointerMove?: PointerEventHandler<P, T>;
  onPointerMoveCapture?: PointerEventHandler<P, T>;
  onPointerUp?: PointerEventHandler<P, T>;
  onPointerUpCapture?: PointerEventHandler<P, T>;
  onPointerCancel?: PointerEventHandler<P, T>;
  onPointerCancelCapture?: PointerEventHandler<P, T>;
  onPointerEnter?: PointerEventHandler<P, T>;
  onPointerEnterCapture?: PointerEventHandler<P, T>;
  onPointerLeave?: PointerEventHandler<P, T>;
  onPointerLeaveCapture?: PointerEventHandler<P, T>;
  onPointerOver?: PointerEventHandler<P, T>;
  onPointerOverCapture?: PointerEventHandler<P, T>;
  onPointerOut?: PointerEventHandler<P, T>;
  onPointerOutCapture?: PointerEventHandler<P, T>;
  onGotPointerCapture?: PointerEventHandler<P, T>;
  onGotPointerCaptureCapture?: PointerEventHandler<P, T>;
  onLostPointerCapture?: PointerEventHandler<P, T>;
  onLostPointerCaptureCapture?: PointerEventHandler<P, T>;

  // UI Events
  onScroll?: UIEventHandler<P, T>;
  onScrollCapture?: UIEventHandler<P, T>;

  // Wheel Events
  onWheel?: WheelEventHandler<P, T>;
  onWheelCapture?: WheelEventHandler<P, T>;

  // Animation Events
  onAnimationStart?: AnimationEventHandler<P, T>;
  onAnimationStartCapture?: AnimationEventHandler<P, T>;
  onAnimationEnd?: AnimationEventHandler<P, T>;
  onAnimationEndCapture?: AnimationEventHandler<P, T>;
  onAnimationIteration?: AnimationEventHandler<P, T>;
  onAnimationIterationCapture?: AnimationEventHandler<P, T>;

  // Transition Events
  onTransitionEnd?: TransitionEventHandler<P, T>;
  onTransitionEndCapture?: TransitionEventHandler<P, T>;
}

export const adaptEventHandlers = (props: Record<string, any>) => {
  const out: Record<string, (e: Event) => void> = {};

  for (const i in props) {
    if (i.startsWith('on') && i[2] === i[2].toUpperCase()) {
      out[i] = (e: Event) => props[i](props, e);
    }
  }

  return out;
}

// Animation Types => TODO: Should be moved when react-smooth is typescriptified.
export type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
