import {
  AnimationEvent,
  AriaAttributes,
  ClipboardEvent,
  Component,
  CompositionEvent,
  CSSProperties,
  DragEvent,
  FocusEvent,
  FormEvent,
  FunctionComponent,
  isValidElement,
  JSX,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactElement,
  ReactNode,
  SVGProps,
  SyntheticEvent,
  TouchEvent,
  TransitionEvent,
  UIEvent,
  WheelEvent,
} from 'react';
import type { Props as DotProps } from '../shape/Dot';
import { AxisRange } from '../state/selectors/axisSelectors';
import { ExternalMouseEvents } from '../chart/types';
import { SyncMethod } from '../synchronisation/types';
import { isEventKey } from './excludeEventProps';
import { DotPoint } from '../component/Dots';
import { SVGPropsNoEvents } from './svgPropertiesNoEvents';
import { BaseValue } from '../cartesian/Area';
import { ImplicitLabelType } from '../component/Label';
import { CustomScaleDefinition } from './scale/CustomScaleDefinition';
import { ChartData } from '../state/chartDataSlice';

/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * @see {@link https://d3js.org/d3-shape/stack#stack-offsets}
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
 *
 * @inline
 */
export type StackOffsetType = 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette' | 'positive';
export type CartesianLayout = 'horizontal' | 'vertical';
export type PolarLayout = 'centric' | 'radial';
/**
 * @deprecated use either `CartesianLayout` or `PolarLayout` instead.
 * Mixing both charts families leads to ambiguity in the type system.
 * These two layouts share very few properties, so it is best to keep them separate.
 */
export type LayoutType = CartesianLayout | PolarLayout;
export type AxisType = 'xAxis' | 'yAxis' | 'zAxis' | 'angleAxis' | 'radiusAxis';

/**
 * The type of axis.
 *
 * `category`: Treats data as distinct values.
 * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
 *
 * `number`: Treats data as continuous range.
 * Values that are numerically closer are placed closer together on the axis.
 *
 * `auto`: the type is inferred based on the chart layout.
 *
 * This is external type - users will provide this type in props.
 * Internally we will evaluate it to either 'category' or 'number' based on the layout,
 * before sending it to the store.
 *
 * @inline
 */
export type AxisDomainTypeInput = 'number' | 'category' | 'auto';

/**
 * Individual axes are responsible for resolving the 'auto' type to either 'number' or 'category',
 * based on the chart layout and axis kind. Then they can start using this type.
 */
export type EvaluatedAxisDomainType = 'number' | 'category';

/**
 * Extracts values from data objects.
 *
 * @inline
 */
export type DataKey<T> = string | number | ((obj: T) => any);
export type PresentationAttributesWithProps<P, T> = AriaAttributes &
  DOMAttributesWithProps<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesWithProps<P, T>>;
export type PresentationAttributesAdaptChildEvent<P, T> = AriaAttributes &
  DOMAttributesAdaptChildEvent<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesAdaptChildEvent<P, T>>;

/**
 * @inline
 */
export type SymbolType = 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';

/**
 * @inline
 */
export type LegendType =
  | 'circle'
  | 'cross'
  | 'diamond'
  | 'line'
  | 'plainline'
  | 'rect'
  | 'square'
  | 'star'
  | 'triangle'
  | 'wye'
  | 'none';
export type TooltipType = 'none';

export type AllowInDimension = {
  x?: boolean;
  y?: boolean;
};

export interface Coordinate {
  x: number;
  y: number;
}

export interface NullableCoordinate {
  x: number | null;
  y: number | null;
}

export type RectangleCoordinate = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type RectanglePosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * @deprecated do not use: too many properties, mixing too many concepts, cartesian and polar together, everything optional.
 * Instead, use either `Coordinate` or `PolarCoordinate`.
 */
export interface ChartCoordinate extends Coordinate {
  xAxis?: any;
  yAxis?: any;
  width?: any;
  height?: any;
  offset?: ChartOffsetInternal;
  angle?: number;
  radius?: number;
  cx?: number;
  cy?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export type PolarCoordinate = Coordinate & {
  angle: number;
  startAngle: number;
  endAngle: number;
  clockWise: boolean;
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  radius: number;
};

export const isPolarCoordinate = (c: Coordinate | PolarCoordinate): c is PolarCoordinate => {
  return 'radius' in c && 'startAngle' in c && 'endAngle' in c;
};

export type D3ScaleType =
  | 'linear'
  | 'pow'
  | 'sqrt'
  | 'log'
  | 'symlog'
  | 'identity'
  | 'time'
  | 'band'
  | 'point'
  | 'ordinal'
  | 'quantile'
  | 'quantize'
  | 'utc'
  | 'sequential'
  | 'threshold';

/**
 * String shortcuts for scale types.
 * In case none of these does what you want you can also provide your own scale function
 * @see {@link CustomScaleDefinition}
 */
export type ScaleType = 'auto' | D3ScaleType;

//
// Event Handler Types -- Copied from @types/react/index.d.ts and adapted for Props.
//

type EventHandler<P, E extends SyntheticEvent<any>> = {
  bivarianceHack(props: P, event: E): void;
}['bivarianceHack'];

type ReactEventHandler<P, T = Element> = EventHandler<P, SyntheticEvent<T>>;
type ClipboardEventHandler<P, T = Element> = EventHandler<P, ClipboardEvent<T>>;
type CompositionEventHandler<P, T = Element> = EventHandler<P, CompositionEvent<T>>;
type DragEventHandler<P, T = Element> = EventHandler<P, DragEvent<T>>;
type FocusEventHandler<P, T = Element> = EventHandler<P, FocusEvent<T>>;
type FormEventHandler<P, T = Element> = EventHandler<P, FormEvent<T>>;
type KeyboardEventHandler<P, T = Element> = EventHandler<P, KeyboardEvent<T>>;
export type RechartsMouseEventHandler<P, T = Element> = EventHandler<P, MouseEvent<T>>;
type TouchEventHandler<P, T = Element> = EventHandler<P, TouchEvent<T>>;
type PointerEventHandler<P, T = Element> = EventHandler<P, PointerEvent<T>>;
type UIEventHandler<P, T = Element> = EventHandler<P, UIEvent<T>>;
type WheelEventHandler<P, T = Element> = EventHandler<P, WheelEvent<T>>;
type AnimationEventHandler<P, T = Element> = EventHandler<P, AnimationEvent<T>>;
type TransitionEventHandler<P, T = Element> = EventHandler<P, TransitionEvent<T>>;

export interface DOMAttributesWithProps<P, T> {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string | TrustedHTML;
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
  onAuxClick?: RechartsMouseEventHandler<P, T>;
  onAuxClickCapture?: RechartsMouseEventHandler<P, T>;
  onClick?: RechartsMouseEventHandler<P, T>;
  onClickCapture?: RechartsMouseEventHandler<P, T>;
  onContextMenu?: RechartsMouseEventHandler<P, T>;
  onContextMenuCapture?: RechartsMouseEventHandler<P, T>;
  onDoubleClick?: RechartsMouseEventHandler<P, T>;
  onDoubleClickCapture?: RechartsMouseEventHandler<P, T>;
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
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: RechartsMouseEventHandler<P, T>;
  onMouseDownCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: RechartsMouseEventHandler<P, T>;
  onMouseMoveCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: RechartsMouseEventHandler<P, T>;
  onMouseOutCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: RechartsMouseEventHandler<P, T>;
  onMouseOverCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: RechartsMouseEventHandler<P, T>;
  onMouseUpCapture?: RechartsMouseEventHandler<P, T>;

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

type AdaptChildEventHandler<P, E extends SyntheticEvent<any>> = {
  bivarianceHack(data: P, index: number, event: E): void;
}['bivarianceHack'];

type AdaptChildReactEventHandler<P, T = Element> = AdaptChildEventHandler<P, SyntheticEvent<T>>;
type AdaptChildClipboardEventHandler<P, T = Element> = AdaptChildEventHandler<P, ClipboardEvent<T>>;
type AdaptChildCompositionEventHandler<P, T = Element> = AdaptChildEventHandler<P, CompositionEvent<T>>;
type AdaptChildDragEventHandler<P, T = Element> = AdaptChildEventHandler<P, DragEvent<T>>;
type AdaptChildFocusEventHandler<P, T = Element> = AdaptChildEventHandler<P, FocusEvent<T>>;
type AdaptChildFormEventHandler<P, T = Element> = AdaptChildEventHandler<P, FormEvent<T>>;
type AdaptChildKeyboardEventHandler<P, T = Element> = AdaptChildEventHandler<P, KeyboardEvent<T>>;
type AdaptChildMouseEventHandler<P, T = Element> = AdaptChildEventHandler<P, MouseEvent<T>>;
type AdaptChildTouchEventHandler<P, T = Element> = AdaptChildEventHandler<P, TouchEvent<T>>;
type AdaptChildPointerEventHandler<P, T = Element> = AdaptChildEventHandler<P, PointerEvent<T>>;
type AdaptChildUIEventHandler<P, T = Element> = AdaptChildEventHandler<P, UIEvent<T>>;
type AdaptChildWheelEventHandler<P, T = Element> = AdaptChildEventHandler<P, WheelEvent<T>>;
type AdaptChildAnimationEventHandler<P, T = Element> = AdaptChildEventHandler<P, AnimationEvent<T>>;
type AdaptChildTransitionEventHandler<P, T = Element> = AdaptChildEventHandler<P, TransitionEvent<T>>;

export type DOMAttributesAdaptChildEvent<P, T> = {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };

  // Clipboard Events
  onCopy?: AdaptChildClipboardEventHandler<P, T>;
  onCopyCapture?: AdaptChildClipboardEventHandler<P, T>;
  onCut?: AdaptChildClipboardEventHandler<P, T>;
  onCutCapture?: AdaptChildClipboardEventHandler<P, T>;
  onPaste?: AdaptChildClipboardEventHandler<P, T>;
  onPasteCapture?: AdaptChildClipboardEventHandler<P, T>;

  // Composition Events
  onCompositionEnd?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionEndCapture?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionStart?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionStartCapture?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionUpdate?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionUpdateCapture?: AdaptChildCompositionEventHandler<P, T>;

  // Focus Events
  onFocus?: AdaptChildFocusEventHandler<P, T>;
  onFocusCapture?: AdaptChildFocusEventHandler<P, T>;
  onBlur?: AdaptChildFocusEventHandler<P, T>;
  onBlurCapture?: AdaptChildFocusEventHandler<P, T>;

  // Form Events
  onChange?: AdaptChildFormEventHandler<P, T>;
  onChangeCapture?: AdaptChildFormEventHandler<P, T>;
  onBeforeInput?: AdaptChildFormEventHandler<P, T>;
  onBeforeInputCapture?: AdaptChildFormEventHandler<P, T>;
  onInput?: AdaptChildFormEventHandler<P, T>;
  onInputCapture?: AdaptChildFormEventHandler<P, T>;
  onReset?: AdaptChildFormEventHandler<P, T>;
  onResetCapture?: AdaptChildFormEventHandler<P, T>;
  onSubmit?: AdaptChildFormEventHandler<P, T>;
  onSubmitCapture?: AdaptChildFormEventHandler<P, T>;
  onInvalid?: AdaptChildFormEventHandler<P, T>;
  onInvalidCapture?: AdaptChildFormEventHandler<P, T>;

  // Image Events
  onLoad?: AdaptChildReactEventHandler<P, T>;
  onLoadCapture?: AdaptChildReactEventHandler<P, T>;
  onError?: AdaptChildReactEventHandler<P, T>; // also a Media Event
  onErrorCapture?: AdaptChildReactEventHandler<P, T>; // also a Media Event

  // Keyboard Events
  onKeyDown?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyDownCapture?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyPress?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyPressCapture?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyUp?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyUpCapture?: AdaptChildKeyboardEventHandler<P, T>;

  // Media Events
  onAbort?: AdaptChildReactEventHandler<P, T>;
  onAbortCapture?: AdaptChildReactEventHandler<P, T>;
  onCanPlay?: AdaptChildReactEventHandler<P, T>;
  onCanPlayCapture?: AdaptChildReactEventHandler<P, T>;
  onCanPlayThrough?: AdaptChildReactEventHandler<P, T>;
  onCanPlayThroughCapture?: AdaptChildReactEventHandler<P, T>;
  onDurationChange?: AdaptChildReactEventHandler<P, T>;
  onDurationChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onEmptied?: AdaptChildReactEventHandler<P, T>;
  onEmptiedCapture?: AdaptChildReactEventHandler<P, T>;
  onEncrypted?: AdaptChildReactEventHandler<P, T>;
  onEncryptedCapture?: AdaptChildReactEventHandler<P, T>;
  onEnded?: AdaptChildReactEventHandler<P, T>;
  onEndedCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadedData?: AdaptChildReactEventHandler<P, T>;
  onLoadedDataCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadedMetadata?: AdaptChildReactEventHandler<P, T>;
  onLoadedMetadataCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadStart?: AdaptChildReactEventHandler<P, T>;
  onLoadStartCapture?: AdaptChildReactEventHandler<P, T>;
  onPause?: AdaptChildReactEventHandler<P, T>;
  onPauseCapture?: AdaptChildReactEventHandler<P, T>;
  onPlay?: AdaptChildReactEventHandler<P, T>;
  onPlayCapture?: AdaptChildReactEventHandler<P, T>;
  onPlaying?: AdaptChildReactEventHandler<P, T>;
  onPlayingCapture?: AdaptChildReactEventHandler<P, T>;
  onProgress?: AdaptChildReactEventHandler<P, T>;
  onProgressCapture?: AdaptChildReactEventHandler<P, T>;
  onRateChange?: AdaptChildReactEventHandler<P, T>;
  onRateChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onSeeked?: AdaptChildReactEventHandler<P, T>;
  onSeekedCapture?: AdaptChildReactEventHandler<P, T>;
  onSeeking?: AdaptChildReactEventHandler<P, T>;
  onSeekingCapture?: AdaptChildReactEventHandler<P, T>;
  onStalled?: AdaptChildReactEventHandler<P, T>;
  onStalledCapture?: AdaptChildReactEventHandler<P, T>;
  onSuspend?: AdaptChildReactEventHandler<P, T>;
  onSuspendCapture?: AdaptChildReactEventHandler<P, T>;
  onTimeUpdate?: AdaptChildReactEventHandler<P, T>;
  onTimeUpdateCapture?: AdaptChildReactEventHandler<P, T>;
  onVolumeChange?: AdaptChildReactEventHandler<P, T>;
  onVolumeChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onWaiting?: AdaptChildReactEventHandler<P, T>;
  onWaitingCapture?: AdaptChildReactEventHandler<P, T>;

  // MouseEvents
  onAuxClick?: AdaptChildMouseEventHandler<P, T>;
  onAuxClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onClick?: AdaptChildMouseEventHandler<P, T>;
  onClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onContextMenu?: AdaptChildMouseEventHandler<P, T>;
  onContextMenuCapture?: AdaptChildMouseEventHandler<P, T>;
  onDoubleClick?: AdaptChildMouseEventHandler<P, T>;
  onDoubleClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onDrag?: AdaptChildDragEventHandler<P, T>;
  onDragCapture?: AdaptChildDragEventHandler<P, T>;
  onDragEnd?: AdaptChildDragEventHandler<P, T>;
  onDragEndCapture?: AdaptChildDragEventHandler<P, T>;
  onDragEnter?: AdaptChildDragEventHandler<P, T>;
  onDragEnterCapture?: AdaptChildDragEventHandler<P, T>;
  onDragExit?: AdaptChildDragEventHandler<P, T>;
  onDragExitCapture?: AdaptChildDragEventHandler<P, T>;
  onDragLeave?: AdaptChildDragEventHandler<P, T>;
  onDragLeaveCapture?: AdaptChildDragEventHandler<P, T>;
  onDragOver?: AdaptChildDragEventHandler<P, T>;
  onDragOverCapture?: AdaptChildDragEventHandler<P, T>;
  onDragStart?: AdaptChildDragEventHandler<P, T>;
  onDragStartCapture?: AdaptChildDragEventHandler<P, T>;
  onDrop?: AdaptChildDragEventHandler<P, T>;
  onDropCapture?: AdaptChildDragEventHandler<P, T>;
  onMouseDown?: AdaptChildMouseEventHandler<P, T>;
  onMouseDownCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseEnter?: AdaptChildMouseEventHandler<P, T>;
  onMouseLeave?: AdaptChildMouseEventHandler<P, T>;
  onMouseMove?: AdaptChildMouseEventHandler<P, T>;
  onMouseMoveCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseOut?: AdaptChildMouseEventHandler<P, T>;
  onMouseOutCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseOver?: AdaptChildMouseEventHandler<P, T>;
  onMouseOverCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseUp?: AdaptChildMouseEventHandler<P, T>;
  onMouseUpCapture?: AdaptChildMouseEventHandler<P, T>;

  // Selection Events
  onSelect?: AdaptChildReactEventHandler<P, T>;
  onSelectCapture?: AdaptChildReactEventHandler<P, T>;

  // Touch Events
  onTouchCancel?: AdaptChildTouchEventHandler<P, T>;
  onTouchCancelCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchEnd?: AdaptChildTouchEventHandler<P, T>;
  onTouchEndCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchMove?: AdaptChildTouchEventHandler<P, T>;
  onTouchMoveCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchStart?: AdaptChildTouchEventHandler<P, T>;
  onTouchStartCapture?: AdaptChildTouchEventHandler<P, T>;

  // Pointer Events
  onPointerDown?: AdaptChildPointerEventHandler<P, T>;
  onPointerDownCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerMove?: AdaptChildPointerEventHandler<P, T>;
  onPointerMoveCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerUp?: AdaptChildPointerEventHandler<P, T>;
  onPointerUpCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerCancel?: AdaptChildPointerEventHandler<P, T>;
  onPointerCancelCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerEnter?: AdaptChildPointerEventHandler<P, T>;
  onPointerEnterCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerLeave?: AdaptChildPointerEventHandler<P, T>;
  onPointerLeaveCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerOver?: AdaptChildPointerEventHandler<P, T>;
  onPointerOverCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerOut?: AdaptChildPointerEventHandler<P, T>;
  onPointerOutCapture?: AdaptChildPointerEventHandler<P, T>;
  onGotPointerCapture?: AdaptChildPointerEventHandler<P, T>;
  onGotPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;
  onLostPointerCapture?: AdaptChildPointerEventHandler<P, T>;
  onLostPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;

  // UI Events
  onScroll?: AdaptChildUIEventHandler<P, T>;
  onScrollCapture?: AdaptChildUIEventHandler<P, T>;

  // Wheel Events
  onWheel?: AdaptChildWheelEventHandler<P, T>;
  onWheelCapture?: AdaptChildWheelEventHandler<P, T>;

  // Animation Events
  onAnimationStart?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationStartCapture?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationEnd?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationEndCapture?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationIteration?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationIterationCapture?: AdaptChildAnimationEventHandler<P, T>;

  // Transition Events
  onTransitionEnd?: AdaptChildTransitionEventHandler<P, T>;
  onTransitionEndCapture?: AdaptChildTransitionEventHandler<P, T>;
};

/**
 * The type of easing function to use for animations
 *
 * @inline
 */
export type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
/** Specifies the duration of animation, the unit of this option is ms. */
export type AnimationDuration = number;

export type OffsetVertical = {
  top: number;
  bottom: number;
};

export type OffsetHorizontal = {
  left: number;
  right: number;
};

/**
 * This object defines the offset of the chart area and width and height and brush and ... it's a bit too much information all in one.
 * We use it internally but let's not expose it to the outside world.
 * If you are looking for this information, instead import `ChartOffset` or `PlotArea` from `recharts`.
 */
export type ChartOffsetInternal = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
  brushBottom: number;
};

export interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface GeometrySector {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
}

export type GeometrySectorWithCornerRadius = GeometrySector & {
  cornerRadius: number;
  forceCornerRadius: boolean;
  cornerIsExternal: boolean;
};

export type AxisDomainItem = string | number | ((d: number) => string | number) | 'auto' | 'dataMin' | 'dataMax';

/**
 * The domain of axis.
 * This is the definition
 *
 * Numeric domain is always defined by an array of exactly two values, for the min and the max of the axis.
 * Categorical domain is defined as array of all possible values.
 *
 * Can be specified in many ways:
 * - array of numbers
 * - with special strings like 'dataMin' and 'dataMax'
 * - with special string math like 'dataMin - 100'
 * - with keyword 'auto'
 * - or a function
 * - array of functions
 * - or a combination of the above
 */
export type AxisDomain =
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | Readonly<[AxisDomainItem, AxisDomainItem]>
  | (([dataMin, dataMax]: NumberDomain, allowDataOverflow: boolean) => NumberDomain);

/**
 * NumberDomain is an evaluated {@link AxisDomain}.
 * Unlike {@link AxisDomain}, it has no variety - it's a tuple of two number.
 * This is after all the keywords and functions were evaluated and what is left is [min, max].
 *
 * Know that the min, max values are not guaranteed to be nice numbers - values like -Infinity or NaN are possible.
 *
 * There are also `category` axes that have different things than numbers in their domain.
 */
export type NumberDomain = readonly [min: number, max: number];

export type CategoricalDomainItem = number | string | Date;

export type CategoricalDomain = ReadonlyArray<CategoricalDomainItem>;

export type TickProp = SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactNode) | boolean;

export interface BaseAxisProps {
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   */
  type?: 'category' | 'number' | 'auto';
  /**
   * The name of data.
   * This option will be used in tooltip.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string;
  /**
   * Decides how to extract the value of this Axis from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this Axis.
   *
   * If undefined, it will reuse the dataKey of graphical items.
   */
  dataKey?: DataKey<any>;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <XAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <XAxis type="number" domain={[0, 'dataMax']} />
   * @example <XAxis type="number" domain={['auto', 'auto']} />
   * @example <XAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <XAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <XAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <XAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <XAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <XAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <YAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
}

/**
 * Props shared in all renderable axes - meaning the ones that are drawn on the chart,
 * can have ticks, axis line, etc.
 */
export interface RenderableAxisProps extends BaseAxisProps {
  /**
   * Tick text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * If set true, the axis do not display in the chart.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If false set, ticks will not be drawn. If true set, ticks will be drawn which have the props calculated internally.
   * If object set, ticks will be drawn which have the props merged by the internal calculated props and the option.
   * If ReactElement set, the option can be the custom tick element.
   * If set a function, the function will be called to render customized ticks.
   * @defaultValue true
   */
  tick?: TickProp;

  /**
   * The count of axis ticks. Not used if 'type' is 'category'.
   * @defaultValue 5
   */
  tickCount?: number;
  /**
   * Determines how the axis line is drawn. Options:
   * - `true`: the axis line is drawn with default props;
   * - `false`: the axis line is not visible;
   * - `object`: passed as props to SVG `<line>` element representing the axis line.
   *
   * @defaultValue true
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;

  /**
   * If false set, tick lines will not be drawn.
   * If true set, tick lines will be drawn which have the props calculated internally.
   * If object set, tick lines will be drawn which have the props merged
   * by the internal calculated props and the option.
   * @defaultValue true
   */
  tickLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * The length of tick line.
   * @defaultValue 6
   */
  tickSize?: number;
  /**
   * The formatter function of tick.
   */
  tickFormatter?: (value: any, index: number) => string;
  /**
   * When domain of the axis is specified and the type of the axis is 'number',
   * if allowDataOverflow is set to be false,
   * the domain will be adjusted when the minimum value of data is smaller than domain[0] or
   * the maximum value of data is greater than domain[1] so that the axis displays all data values.
   * If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
   *
   * @defaultValue false
   */
  allowDataOverflow?: boolean;
  /**
   * Allow the axis has duplicated categories or not when the type of axis is "category".
   * @defaultValue true
   */
  allowDuplicatedCategory?: boolean;
  /**
   * Allow the ticks of axis to be decimals or not.
   *
   * @defaultValue true
   */
  allowDecimals?: boolean;
  /**
   * Ensures that all datapoints within a chart contribute to its domain calculation, even when they are hidden
   * @defaultValue false
   */
  includeHidden?: boolean;
  /**
   * @deprecated Recharts computes the range automatically based on chart width or height
   *
   * Recharts ignores this prop since 3.0
   */
  range?: AxisRange;
  /**
   * Defines a single label for the whole axis.
   * This prop renders one label in the center of the axis line.
   * Useful for labeling the axis as a whole, like "Time (in seconds)" or "Distance (in meters)".
   *
   * This is not controlling tick labels.
   * If you want to customize tick labels, please see `tickFormatter` or `tick` props.
   *
   * - `false`: no label is rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   */
  label?: ImplicitLabelType;
  /** The HTML element's class name */
  className?: string;
  /**
   * If set to true, the ticks of this axis are reversed.
   * @defaultValue false
   */
  reversed?: boolean;
}

/** Defines how ticks are placed and whether / how tick collisions are handled.
 * 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
 * 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
 * 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks always show.
 * 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
 * 'equidistantPreserveEnd' selects a number N such that every nTh tick will be shown, ensuring the last tick is always visible.
 */
export type AxisInterval =
  | number
  | 'preserveStart'
  | 'preserveEnd'
  | 'preserveStartEnd'
  | 'equidistantPreserveStart'
  | 'equidistantPreserveEnd';

/**
 * Ticks can be any type when the axis is the type of category.
 *
 * Ticks must be numbers when the axis is the type of number.
 */
export type AxisTick = number | string;

export interface TickItem {
  value: any;
  coordinate: number;
  index: number;
  /**
   * How far this tick is offset from the start of a category band.
   * On axes that do not have bands, this will always be zero.
   *
   * We never read offset internally in Recharts,
   * but it has been part of the external API so let's keep it here for people who do use it.
   */
  offset?: number;
}

export interface CartesianTickItem extends TickItem {
  tickCoord?: number;
  tickSize?: number;
  isShow?: boolean;
}

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * @inline
 */
export interface CartesianViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export type CartesianViewBoxRequired = Required<CartesianViewBox>;

interface PolarViewBox {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  clockWise?: boolean;
}

export type PolarViewBoxRequired = Required<PolarViewBox>;

export type TrapezoidViewBox = {
  /**
   * The x-coordinate of the upper left corner of the trapezoid.
   * If the upper side is shorter than the lower side, this will be the x-coordinate of the upper left corner,
   * meaning that the X does take into account the varying width of the trapezoid.
   */
  x: number;
  /**
   * The y-coordinate of the upper side of the trapezoid.
   * Nothing exciting happening here.
   */
  y: number;
  /**
   * The width of the upper side of the trapezoid.
   */
  upperWidth: number;
  /**
   * The width of the lower side of the trapezoid.
   */
  lowerWidth: number;
  /**
   * The overall width of the trapezoid: `Math.max(upperWidth, lowerWidth)`.
   */
  width: number;
  /**
   * The height of the trapezoid.
   */
  height: number;
};

/**
 * @inline
 */
export type ViewBox = CartesianViewBoxRequired | PolarViewBoxRequired;

type RecordString<T> = Record<string, T>;

type AdaptEventHandlersReturn = RecordString<(e?: Event) => any> | RecordString<(e: Event) => void> | null;

export const adaptEventHandlers = (
  props: RecordString<any> | Component | FunctionComponent | boolean,
  newHandler?: (e?: Event) => any,
): AdaptEventHandlersReturn => {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }

  let inputProps = props as RecordString<any>;

  if (isValidElement(props)) {
    inputProps = props.props as RecordString<any>;
  }

  if (typeof inputProps !== 'object' && typeof inputProps !== 'function') {
    return null;
  }

  const out: RecordString<(e: Event) => void> = {};

  Object.keys(inputProps).forEach(key => {
    if (isEventKey(key)) {
      out[key] = newHandler || ((e: Event) => inputProps[key](inputProps, e));
    }
  });

  return out;
};

const getEventHandlerOfChild =
  (originalHandler: (data: any, index: number, e: Event) => void, data: any, index: number) =>
  (e: Event): null => {
    originalHandler(data, index, e);

    return null;
  };

export const adaptEventsOfChild = (
  props: RecordString<any>,
  data: any,
  index: number,
): RecordString<(e?: Event) => any> | null => {
  if (props === null || (typeof props !== 'object' && typeof props !== 'function')) {
    return null;
  }

  let out: RecordString<(e: Event) => void> | null = null;

  Object.keys(props).forEach((key: string) => {
    const item = (props as any)[key];

    if (isEventKey(key) && typeof item === 'function') {
      if (!out) out = {};

      out[key] = getEventHandlerOfChild(item, data, index);
    }
  });

  return out;
};

/**
 * 'axis' means that all graphical items belonging to this axis tick will be highlighted,
 * and all will be present in the tooltip.
 * Tooltip with 'axis' will display when hovering on the chart background.
 *
 * 'item' means only the one graphical item being hovered will show in the tooltip.
 * Tooltip with 'item' will display when hovering over individual graphical items.
 *
 * This is calculated internally;
 * charts have a `defaultTooltipEventType` and `validateTooltipEventTypes` options.
 *
 * Users then use <Tooltip shared={true} /> or <Tooltip shared={false} /> to control their preference,
 * and charts will then see what is allowed and what is not.
 */
export type TooltipEventType = 'axis' | 'item';

export interface SankeyNode {
  // node attributes
  dx: number;
  dy: number;
  name: string;
  value: any;
  x: number;
  y: number;
  // tree attributes
  depth: number;
  targetNodes: number[];
  targetLinks: number[];
  sourceNodes: number[];
  sourceLinks: number[];
}

export interface SankeyLink {
  target: number;
  source: number;
  value: number;
  sy: number;
  dy: number;
  ty: number;
}

export type Size = { width: number; height: number };

/**
 * These are the props we are going to pass to an `activeDot` or `dot` if it is a function or a custom Component
 */
export type ActiveDotProps = DotProps & {
  payload: any;
  index: number;
  dataKey: DataKey<any> | undefined;
  cx: number | undefined;
  cy: number | undefined;
  r: number | string | undefined;
  fill: string;
  strokeWidth: number;
  stroke: string;
  value: any;
};

/**
 * This is the type of `activeDot` prop on:
 * - Area
 * - Line
 * - Radar
 *
 * @inline
 */
export type ActiveDotType =
  /**
   * true | false will turn the default activeDot on and off, respectively
   */
  | boolean
  /**
   * activeDot can be a custom React Component.
   * It should return an SVG element because we are in SVG context - HTML won't work here.
   * Unfortunately, if you write a regular old functional component and have it return SVG element,
   * its default, inferred return type is `JSX.Element` and so if this return type was `SVGElement`
   * then it would look like a type error (even when doing the right thing).
   * So instead here we have ReactNode return type which is invalid in runtime
   * (remember, we are in SVG context so HTML elements won't work, we need SVGElement).
   * But better than forcing everyone to re-type their components I guess.
   */
  | ((props: ActiveDotProps) => ReactNode)
  /**
   * activeDot can be an object; props from here will be appended to the default active dot
   */
  | Partial<ActiveDotProps>
  /**
   * activeDot can be an element; it will get cloned and will receive new extra props.
   * I do not recommend this way! Use React component instead, that way you get more predictable props.
   */
  | ReactElement<SVGProps<SVGElement>>;

/**
 * Inside the dot event handlers we provide extra information about the dot point
 * that the Dot component itself does not need but users might find useful.
 */
export type DotItemDotProps = SVGPropsNoEvents<Omit<DotProps, 'points' | 'ref'>> & {
  points: ReadonlyArray<DotPoint>;
  index: number;
  payload: any;
  dataKey: DataKey<any> | undefined;
  value: any;
};

/**
 * This is the type of `dot` prop on:
 * - Area
 * - Line
 * - Radar
 *
 * @inline
 */
export type DotType =
  /**
   * true | false will turn the default dot on and off, respectively
   */
  | boolean
  /**
   * dot can be a custom React Component.
   * It should return an SVG element because we are in SVG context - HTML won't work here.
   * Unfortunately, if you write a regular old functional component and have it return SVG element,
   * its default, inferred return type is `JSX.Element` and so if this return type was `SVGElement`
   * then it would look like a type error (even when doing the right thing).
   * So instead here we have ReactNode return type which is invalid in runtime
   * (remember, we are in SVG context so HTML elements won't work, we need SVGElement).
   * But better than forcing everyone to re-type their components I guess.
   *
   * Not that when a function, or a component is used, the props received are {@link DotItemDotProps}
   * which contain some extra information compared to {@link DotProps}.
   */
  | ((props: DotItemDotProps) => ReactNode)
  /**
   * dot can be an object; props from here will be appended to the default dot
   */
  | Partial<DotProps>
  /**
   * dot can be an element; it will get cloned and will receive new extra props.
   * I do not recommend this way! Use React component instead, that way you get more predictable props.
   */
  | ReactElement<SVGProps<SVGElement>>;

export type ActiveShape<PropsType = Record<string, any>, ElementType = SVGElement> =
  | ReactElement<SVGProps<ElementType>>
  | ((props: PropsType) => ReactElement<SVGProps<ElementType>>)
  | ((props: unknown) => JSX.Element)
  | SVGProps<ElementType>
  | boolean;

export type RangeObj = PolarViewBoxRequired & {
  angle: number;
  radius: number;
};

/**
 * Simplified version of the MouseEvent so that we don't have to mock the whole thing in tests.
 *
 * This is meant to represent the React.MouseEvent
 * which is a wrapper on top of https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
 */
export interface MousePointer {
  clientX: number;
  clientY: number;
  currentTarget: Pick<HTMLElement, 'getBoundingClientRect' | 'offsetWidth' | 'offsetHeight'>;
}

/**
 * Coordinates relative to the top-left corner of the chart.
 * Also include scale which means that a chart that's scaled will return the same coordinates as a chart that's not scaled.
 */
export interface ChartPointer {
  chartX: number;
  chartY: number;
}

export interface DataProvider<DataPointType> {
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * @example data={[{ name: 'a', value: 12 }]}
   * @example data={[{ label: 'foo', measurements: [5, 12] }]}
   */
  data?: ChartData<DataPointType>;
}

/**
 * Props shared with all charts.
 */
interface BaseChartProps<DataPointType> extends DataProvider<DataPointType>, ExternalMouseEvents {
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  id?: string;
  children?: ReactNode;
  className?: string;
  /**
   * Turn on accessibility support for keyboard-only and screen reader users.
   *
   * @defaultValue true
   */
  accessibilityLayer?: boolean;
  desc?: string;
  /**
   * Empty space around the container.
   *
   * @defaultValue {"top":5,"right":5,"bottom":5,"left":5}
   */
  margin?: Partial<Margin>;
  style?: CSSProperties;
  /**
   * Charts with the same syncId will synchronize Tooltip and Brush events.
   *
   * @see {@link https://recharts.github.io/en-US/examples/SynchronizedAreaChart/ Synchronized Charts Example}
   */
  syncId?: number | string;
  /**
   * Customize how the charts will synchronize tooltips and brushes.
   * `index`: synchronize using the data index in the data array. Index expects that all data has the same length.
   * `value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).
   * function: a custom sync method which receives tick and data as argument and returns an index.
   *
   * @defaultValue index
   */
  syncMethod?: SyncMethod;
  /**
   * If and where the chart should appear in the tab order
   */
  tabIndex?: number;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   * @default false
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  responsive?: boolean;
}

export interface CartesianChartProps<DataPointType = unknown> extends BaseChartProps<DataPointType> {
  /**
   * The gap between two bar categories, which can be a percent value or a fixed value.
   *
   * @defaultValue 10%
   *
   * @see {@link https://recharts.github.io/en-US/guide/barAlignment/ Bar Alignment Guide}
   */
  barCategoryGap?: number | string;
  /**
   * The gap between two bars in the same category.
   *
   * @defaultValue 4
   *
   * @see {@link https://recharts.github.io/en-US/guide/barAlignment/ Bar Alignment Guide}
   */
  barGap?: number | string;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the
   * bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number | string;
  /**
   * The base value of area.
   */
  baseValue?: BaseValue;
  compact?: boolean;
  dataKey?: DataKey<any>;
  /**
   * The layout of chart defines the orientation of axes, graphical items, and tooltip.
   *
   * @defaultValue horizontal
   */
  layout?: CartesianLayout;
  /**
   * The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.
   */
  maxBarSize?: number;
  /**
   * If `false`, stacked items will be rendered left to right.
   * If `true`, stacked items will be rendered right to left.
   *
   * Render direction affects SVG layering, not x position.
   *
   * @defaultValue false
   */
  reverseStackOrder?: boolean;
  /**
   * The ARIA role for the chart, which provides semantic information for screen reader users.
   */
  role?: string;
  /**
   * The type of offset function used to generate the lower and upper values in the series array.
   * The types are built-in offsets in d3-shape.
   * Only applicable for stacked Area or Bar charts.
   * Has no effect when the stackId prop is not set on Area or Bar components.
   *
   * @link https://d3js.org/d3-shape/stack#stack_offset
   * @see {@link https://recharts.github.io/en-US/examples/BarChartStackedBySign/ Chart with stackOffset=sign example}
   *
   * @defaultValue none
   */
  stackOffset?: StackOffsetType;
  throttleDelay?: number;
  title?: string;
}

export interface PolarChartProps<DataPointType = unknown> extends BaseChartProps<DataPointType> {
  /**
   * The gap between two bar categories, which can be a percent value or a fixed value.
   *
   * @defaultValue 10%
   */
  barCategoryGap?: number | string;
  /**
   * The gap between two bars in the same category.
   *
   * @defaultValue 4
   */
  barGap?: number | string;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the
   * bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number | string;
  /**
   * The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.
   * @defaultValue 50%
   */
  cx?: number | string;
  /**
   * The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.
   * @defaultValue 50%
   */
  cy?: number | string;
  dataKey?: DataKey<any>;
  /**
   * Angle, in degrees, at which the chart should end.
   */
  endAngle?: number;
  /**
   * The inner radius of the chart.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * @defaultValue 0
   */
  innerRadius?: number | string;
  /**
   * The layout of chart defines the orientation of axes, graphical items, and tooltip.
   */
  layout?: PolarLayout;
  maxBarSize?: number;
  /**
   * The outer radius of the chart.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * @defaultValue 80%
   */
  outerRadius?: number | string;
  reverseStackOrder?: boolean;
  role?: string;
  stackOffset?: StackOffsetType;
  /**
   * Angle in degrees from which the chart should start.
   */
  startAngle?: number;
  throttleDelay?: number;
  title?: string;
}

export type Percent = `${number}%`;

export type NonEmptyArray<T> = readonly [T, ...T[]];

export const isNonEmptyArray = <T>(arr: ReadonlyArray<T> | null | undefined): arr is NonEmptyArray<T> => {
  return Array.isArray(arr) && arr.length > 0;
};
