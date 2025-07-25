import { AnimationEvent, AriaAttributes, ClipboardEvent, Component, CompositionEvent, DragEvent, FocusEvent, FormEvent, FunctionComponent, JSX, KeyboardEvent, MouseEvent, PointerEvent, ReactElement, ReactNode, SVGProps, SyntheticEvent, TouchEvent, TransitionEvent, UIEvent, WheelEvent } from 'react';
import type { Props as DotProps } from '../shape/Dot';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { RechartsScale } from './ChartUtils';
import { AxisRange } from '../state/selectors/axisSelectors';
import { ExternalMouseEvents } from '../chart/types';
import { SyncMethod } from '../synchronisation/types';
/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * Also see https://d3js.org/d3-shape/stack#stack-offsets
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
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
export type AxisDomainType = 'number' | 'category';
export type DataKey<T> = string | number | ((obj: T) => any);
export type PresentationAttributesWithProps<P, T> = AriaAttributes & DOMAttributesWithProps<P, T> & Omit<SVGProps<T>, keyof DOMAttributesWithProps<P, T>>;
export type PresentationAttributesAdaptChildEvent<P, T> = AriaAttributes & DOMAttributesAdaptChildEvent<P, T> & Omit<SVGProps<T>, keyof DOMAttributesAdaptChildEvent<P, T>>;
export type SymbolType = 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
export type LegendType = 'circle' | 'cross' | 'diamond' | 'line' | 'plainline' | 'rect' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
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
/**
 * @deprecated do not use: too many properties, mixing too many concepts, cartesian and polar together, everything optional.
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
export type PolarCoordinate = {
    cx: number;
    cy: number;
    radius: number;
    startAngle: number;
    endAngle: number;
};
export type ScaleType = 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'symlog' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' | 'threshold';
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
type MouseEventHandler<P, T = Element> = EventHandler<P, MouseEvent<T>>;
type TouchEventHandler<P, T = Element> = EventHandler<P, TouchEvent<T>>;
type PointerEventHandler<P, T = Element> = EventHandler<P, PointerEvent<T>>;
type UIEventHandler<P, T = Element> = EventHandler<P, UIEvent<T>>;
type WheelEventHandler<P, T = Element> = EventHandler<P, WheelEvent<T>>;
type AnimationEventHandler<P, T = Element> = EventHandler<P, AnimationEvent<T>>;
type TransitionEventHandler<P, T = Element> = EventHandler<P, TransitionEvent<T>>;
export interface DOMAttributesWithProps<P, T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: ClipboardEventHandler<P, T>;
    onCopyCapture?: ClipboardEventHandler<P, T>;
    onCut?: ClipboardEventHandler<P, T>;
    onCutCapture?: ClipboardEventHandler<P, T>;
    onPaste?: ClipboardEventHandler<P, T>;
    onPasteCapture?: ClipboardEventHandler<P, T>;
    onCompositionEnd?: CompositionEventHandler<P, T>;
    onCompositionEndCapture?: CompositionEventHandler<P, T>;
    onCompositionStart?: CompositionEventHandler<P, T>;
    onCompositionStartCapture?: CompositionEventHandler<P, T>;
    onCompositionUpdate?: CompositionEventHandler<P, T>;
    onCompositionUpdateCapture?: CompositionEventHandler<P, T>;
    onFocus?: FocusEventHandler<P, T>;
    onFocusCapture?: FocusEventHandler<P, T>;
    onBlur?: FocusEventHandler<P, T>;
    onBlurCapture?: FocusEventHandler<P, T>;
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
    onLoad?: ReactEventHandler<P, T>;
    onLoadCapture?: ReactEventHandler<P, T>;
    onError?: ReactEventHandler<P, T>;
    onErrorCapture?: ReactEventHandler<P, T>;
    onKeyDown?: KeyboardEventHandler<P, T>;
    onKeyDownCapture?: KeyboardEventHandler<P, T>;
    onKeyPress?: KeyboardEventHandler<P, T>;
    onKeyPressCapture?: KeyboardEventHandler<P, T>;
    onKeyUp?: KeyboardEventHandler<P, T>;
    onKeyUpCapture?: KeyboardEventHandler<P, T>;
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
    onSelect?: ReactEventHandler<P, T>;
    onSelectCapture?: ReactEventHandler<P, T>;
    onTouchCancel?: TouchEventHandler<P, T>;
    onTouchCancelCapture?: TouchEventHandler<P, T>;
    onTouchEnd?: TouchEventHandler<P, T>;
    onTouchEndCapture?: TouchEventHandler<P, T>;
    onTouchMove?: TouchEventHandler<P, T>;
    onTouchMoveCapture?: TouchEventHandler<P, T>;
    onTouchStart?: TouchEventHandler<P, T>;
    onTouchStartCapture?: TouchEventHandler<P, T>;
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
    onScroll?: UIEventHandler<P, T>;
    onScrollCapture?: UIEventHandler<P, T>;
    onWheel?: WheelEventHandler<P, T>;
    onWheelCapture?: WheelEventHandler<P, T>;
    onAnimationStart?: AnimationEventHandler<P, T>;
    onAnimationStartCapture?: AnimationEventHandler<P, T>;
    onAnimationEnd?: AnimationEventHandler<P, T>;
    onAnimationEndCapture?: AnimationEventHandler<P, T>;
    onAnimationIteration?: AnimationEventHandler<P, T>;
    onAnimationIterationCapture?: AnimationEventHandler<P, T>;
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
    onCopy?: AdaptChildClipboardEventHandler<P, T>;
    onCopyCapture?: AdaptChildClipboardEventHandler<P, T>;
    onCut?: AdaptChildClipboardEventHandler<P, T>;
    onCutCapture?: AdaptChildClipboardEventHandler<P, T>;
    onPaste?: AdaptChildClipboardEventHandler<P, T>;
    onPasteCapture?: AdaptChildClipboardEventHandler<P, T>;
    onCompositionEnd?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionEndCapture?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionStart?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionStartCapture?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionUpdate?: AdaptChildCompositionEventHandler<P, T>;
    onCompositionUpdateCapture?: AdaptChildCompositionEventHandler<P, T>;
    onFocus?: AdaptChildFocusEventHandler<P, T>;
    onFocusCapture?: AdaptChildFocusEventHandler<P, T>;
    onBlur?: AdaptChildFocusEventHandler<P, T>;
    onBlurCapture?: AdaptChildFocusEventHandler<P, T>;
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
    onLoad?: AdaptChildReactEventHandler<P, T>;
    onLoadCapture?: AdaptChildReactEventHandler<P, T>;
    onError?: AdaptChildReactEventHandler<P, T>;
    onErrorCapture?: AdaptChildReactEventHandler<P, T>;
    onKeyDown?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyDownCapture?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyPress?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyPressCapture?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyUp?: AdaptChildKeyboardEventHandler<P, T>;
    onKeyUpCapture?: AdaptChildKeyboardEventHandler<P, T>;
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
    onSelect?: AdaptChildReactEventHandler<P, T>;
    onSelectCapture?: AdaptChildReactEventHandler<P, T>;
    onTouchCancel?: AdaptChildTouchEventHandler<P, T>;
    onTouchCancelCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchEnd?: AdaptChildTouchEventHandler<P, T>;
    onTouchEndCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchMove?: AdaptChildTouchEventHandler<P, T>;
    onTouchMoveCapture?: AdaptChildTouchEventHandler<P, T>;
    onTouchStart?: AdaptChildTouchEventHandler<P, T>;
    onTouchStartCapture?: AdaptChildTouchEventHandler<P, T>;
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
    onScroll?: AdaptChildUIEventHandler<P, T>;
    onScrollCapture?: AdaptChildUIEventHandler<P, T>;
    onWheel?: AdaptChildWheelEventHandler<P, T>;
    onWheelCapture?: AdaptChildWheelEventHandler<P, T>;
    onAnimationStart?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationStartCapture?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationEnd?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationEndCapture?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationIteration?: AdaptChildAnimationEventHandler<P, T>;
    onAnimationIterationCapture?: AdaptChildAnimationEventHandler<P, T>;
    onTransitionEnd?: AdaptChildTransitionEventHandler<P, T>;
    onTransitionEndCapture?: AdaptChildTransitionEventHandler<P, T>;
};
export declare const SVGElementPropKeys: string[];
/** svg element types that have specific attribute filtration requirements */
export type FilteredSvgElementType = 'svg' | 'polyline' | 'polygon';
/** map of svg element types to unique svg attributes that belong to that element */
export declare const FilteredElementKeyMap: Record<FilteredSvgElementType, string[]>;
export declare const EventKeys: string[];
/** The type of easing function to use for animations */
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
export type AxisDomain = ReadonlyArray<string> | ReadonlyArray<number> | Readonly<[AxisDomainItem, AxisDomainItem]> | (([dataMin, dataMax]: [number, number], allowDataOverflow: boolean) => [number, number]);
/**
 * NumberDomain is an evaluated {@link AxisDomain}.
 * Unlike {@link AxisDomain}, it has no variety - it's a tuple of two number.
 * This is after all the keywords and functions were evaluated and what is left is [min, max].
 *
 * Know that the min, max values are not guaranteed to be nice numbers - values like -Infinity or NaN are possible.
 *
 * There are also `category` axes that have different things than numbers in their domain.
 */
export type NumberDomain = [min: number, max: number];
export type CategoricalDomain = ReadonlyArray<number | string | Date>;
export type TickProp = SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean;
/** The props definition of base axis */
export interface BaseAxisProps {
    /** The type of axis */
    type?: AxisDomainType;
    /** The key of data displayed in the axis */
    dataKey?: DataKey<any>;
    /** Whether display the axis */
    hide?: boolean;
    /** The scale type as a string, or scale function */
    scale?: ScaleType | RechartsScale;
    /** The option for tick */
    tick?: TickProp;
    /** The count of ticks */
    tickCount?: number;
    /** The option for axisLine */
    axisLine?: boolean | SVGProps<SVGLineElement>;
    /** The option for tickLine */
    tickLine?: boolean | SVGProps<SVGLineElement>;
    /** The size of tick line */
    tickSize?: number;
    /** The formatter function of tick */
    tickFormatter?: (value: any, index: number) => string;
    /**
     * When domain of the axis is specified and the type of the axis is 'number',
     * if allowDataOverflow is set to be false,
     * the domain will be adjusted when the minimum value of data is smaller than domain[0] or
     * the maximum value of data is greater than domain[1] so that the axis displays all data values.
     * If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
     */
    allowDataOverflow?: boolean;
    /**
     * Allow the axis has duplicated categories or not when the type of axis is "category".
     */
    allowDuplicatedCategory?: boolean;
    /**
     * Allow the ticks of axis to be decimals or not.
     */
    allowDecimals?: boolean;
    /** The domain of scale in this axis */
    domain?: AxisDomain;
    /** Consider hidden elements when computing the domain (defaults to false) */
    includeHidden?: boolean;
    /** The name of data displayed in the axis */
    name?: string;
    /** The unit of data displayed in the axis */
    unit?: string;
    range?: AxisRange;
    /** axis react component */
    AxisComp?: any;
    /** Needed to allow usage of the label prop on the X and Y axis */
    label?: string | number | ReactElement | object;
    /** The HTML element's class name */
    className?: string;
}
/** Defines how ticks are placed and whether / how tick collisions are handled.
 * 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
 * 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
 * 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks always show.
 * 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
 */
export type AxisInterval = number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd' | 'equidistantPreserveStart';
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
    offset?: number;
}
export interface CartesianTickItem extends TickItem {
    tickCoord?: number;
    tickSize?: number;
    isShow?: boolean;
}
export interface Margin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export interface CartesianViewBox {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export type CartesianViewBoxRequired = Required<CartesianViewBox>;
export interface PolarViewBox {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    clockWise?: boolean;
}
export type PolarViewBoxRequired = Required<PolarViewBox>;
export type ViewBox = CartesianViewBox | PolarViewBox;
type RecordString<T> = Record<string, T>;
type AdaptEventHandlersReturn = RecordString<(e?: Event) => any> | RecordString<(e: Event) => void> | null;
export declare const adaptEventHandlers: (props: RecordString<any> | Component | FunctionComponent | boolean, newHandler?: (e?: Event) => any) => AdaptEventHandlersReturn;
export declare const adaptEventsOfChild: (props: RecordString<any>, data: any, index: number) => RecordString<(e?: Event) => any> | null;
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
export interface CategoricalChartOptions {
    chartName: string;
    defaultTooltipEventType?: TooltipEventType;
    validateTooltipEventTypes?: ReadonlyArray<TooltipEventType>;
    defaultProps?: any;
    tooltipPayloadSearcher: TooltipPayloadSearcher;
}
export interface SankeyNode {
    dx: number;
    dy: number;
    name: string;
    value: any;
    x: number;
    y: number;
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
    sy?: number;
    dy?: number;
    ty?: number;
}
export type Size = {
    width: number;
    height: number;
};
/**
 * These are the props we are going to pass to an `activeDot` if it is a function or a custom Component
 */
export type ActiveDotProps = DotProps & {
    payload: any;
    index: number;
    dataKey: DataKey<any>;
    cx: number;
    cy: number;
    r: number;
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
 */
export type ActiveDotType = 
/**
 * true | false will turn the default activeDot on and off, respectively
 */
boolean
/**
 * activeDot can be a custom React Component
 */
 | ((props: ActiveDotProps) => ReactElement<SVGElement>)
/**
 * activeDot can be an object; props from here will be appended to the default active dot
 */
 | Partial<ActiveDotProps>
/**
 * activeDot can be an element; it will get cloned and will receive new extra props.
 */
 | ReactElement<SVGElement>;
export type ActiveShape<PropsType = Record<string, any>, ElementType = SVGElement> = ReactElement<SVGProps<ElementType>> | ((props: PropsType) => ReactElement<SVGProps<ElementType>>) | ((props: unknown) => JSX.Element) | SVGProps<ElementType> | boolean;
export type RangeObj = {
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    angle?: number;
    radius?: number;
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
export interface CartesianChartProps extends Partial<ExternalMouseEvents> {
    accessibilityLayer?: boolean;
    barCategoryGap?: number | string;
    barGap?: number | string;
    barSize?: number | string;
    children?: any;
    className?: string;
    compact?: boolean;
    data?: any[];
    dataKey?: DataKey<any>;
    desc?: string;
    height?: number;
    id?: string;
    layout?: CartesianLayout;
    margin?: Margin;
    maxBarSize?: number;
    reverseStackOrder?: boolean;
    role?: string;
    stackOffset?: StackOffsetType;
    style?: any;
    syncId?: number | string;
    syncMethod?: SyncMethod;
    tabIndex?: number;
    throttleDelay?: number;
    title?: string;
    width?: number;
}
export interface PolarChartProps extends Partial<ExternalMouseEvents> {
    accessibilityLayer?: boolean;
    barCategoryGap?: number | string;
    barGap?: number | string;
    barSize?: number | string;
    children?: any;
    className?: string;
    cx?: number | string;
    cy?: number | string;
    data?: any[];
    dataKey?: DataKey<any>;
    desc?: string;
    endAngle?: number;
    height?: number;
    id?: string;
    innerRadius?: number | string;
    layout?: PolarLayout;
    margin?: Margin;
    maxBarSize?: number;
    outerRadius?: number | string;
    reverseStackOrder?: boolean;
    role?: string;
    stackOffset?: StackOffsetType;
    startAngle?: number;
    style?: any;
    syncId?: number | string;
    syncMethod?: SyncMethod;
    tabIndex?: number;
    throttleDelay?: number;
    title?: string;
    width?: number;
}
export {};
