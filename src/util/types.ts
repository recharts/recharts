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
  ReactNode,
  Component,
  isValidElement,
  FunctionComponent,
  ReactElement
} from 'react';
import _ from 'lodash';
import { ScaleContinuousNumeric as D3ScaleContinuousNumeric } from 'd3-scale';

export type LayoutType = 'horizontal' | 'vertical' | 'centric' | 'radial';
export type PolarLayoutType = 'radial' | 'centric';
export type AxisType = 'xAxis' | 'yAxis' | 'angleAxis' | 'radiusAxis';
export type DataKey<T> = string | number | ((obj: T) => any);
export type PresentationAttributes<T> = AriaAttributes &
  DOMAttributes<T> &
  SVGProps<T>;
export type PresentationAttributesWithProps<P, T> = AriaAttributes &
  DOMAttributesWithProps<P, T> &
  SVGProps<T>;

export type SymbolType = 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
export type LegendType = 'plainline' | 'line' | 'square' | 'rect' | 'circle' | 'cross' |
  'diamond' | 'star' | 'triangle' | 'wye' | 'none';
export type TooltipType = 'none';
export interface Coordinate {
  x: number;
  y: number;
};

export interface ChartCoordinate extends Coordinate {
  xAxis?: any;
  yAxis?: any;
  width?: any;
  height?: any;
  offset?: ChartOffset;
  angle?: number;
  radius?: number;
  cx?: number;
  cy?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export type ScaleType = 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' |
  'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' | 'threshold';

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

export interface DOMAttributesWithProps<P, T> {
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

const SVGPropKeys = ['className', 'color', 'height', 'id', 'lang', 'max', 'media', 'method', 'min', 'name', 'style', 'target' ,
'type', 'width', 'role', 'tabIndex', 'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder' ,
'alphabetic', 'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse' ,
'azimuth', 'baseFrequency', 'baselineShift', 'baseProfile', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'capHeight' ,
'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation', 'colorInterpolationFilters', 'colorProfile' ,
'colorRendering', 'contentScriptType', 'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant' ,
'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode', 'elevation', 'enableBackground' ,
'end', 'exponent', 'externalResourcesRequired', 'fill', 'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits' ,
'floodColor', 'floodOpacity', 'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant' ,
'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName', 'glyphOrientationHorizontal', 'glyphOrientationVertical' ,
'glyphRef', 'gradientTransform', 'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'href', 'ideographic', 'imageRendering' ,
'in2', 'in', 'intercept', 'k1', 'k2', 'k3', 'k4', 'k', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines' ,
'keyTimes', 'lengthAdjust', 'letterSpacing', 'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid' ,
'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'mode', 'numOctaves' ,
'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness' ,
'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'pointerEvents', 'points' ,
'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY', 'renderingIntent' ,
'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'result', 'rotate', 'rx', 'ry', 'seed' ,
'shapeRendering', 'slope', 'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset', 'stdDeviation', 'stemh', 'stemv' ,
'stitchTiles', 'stopColor', 'stopOpacity', 'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray', 'strokeDashoffset' ,
'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX' ,
'targetY', 'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform', 'u1', 'u2' ,
'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi', 'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'values', 'vectorEffect' ,
'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'vHanging', 'vIdeographic', 'viewBox', 'viewTarget', 'visibility', 'vMathematical' ,
'widths', 'wordSpacing', 'writingMode', 'x1', 'x2', 'x', 'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole' ,
'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlns', 'xmlnsXlink', 'xmlSpace', 'y1', 'y2', 'y', 'yChannelSelector' ,
'z', 'zoomAndPan', 'ref', 'key'];

const EventKeys = ['children', 'dangerouslySetInnerHTML', 'onCopy', 'onCopyCapture', 'onCut', 'onCutCapture', 'onPaste', 'onPasteCapture',
'onCompositionEnd', 'onCompositionEndCapture', 'onCompositionStart', 'onCompositionStartCapture', 'onCompositionUpdate', 'onCompositionUpdateCapture',
'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onChangeCapture', 'onBeforeInput',
'onBeforeInputCapture', 'onInput', 'onInputCapture', 'onReset', 'onResetCapture', 'onSubmit', 'onSubmitCapture', 'onInvalid',
'onInvalidCapture', 'onLoad', 'onLoadCapture', 'onError', 'onErrorCapture', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress',
'onKeyPressCapture', 'onKeyUp', 'onKeyUpCapture', 'onAbort', 'onAbortCapture', 'onCanPlay', 'onCanPlayCapture', 'onCanPlayThrough',
'onCanPlayThroughCapture', 'onDurationChange', 'onDurationChangeCapture', 'onEmptied', 'onEmptiedCapture', 'onEncrypted', 'onEncryptedCapture',
'onEnded', 'onEndedCapture', 'onLoadedData', 'onLoadedDataCapture', 'onLoadedMetadata', 'onLoadedMetadataCapture',
'onLoadStart', 'onLoadStartCapture', 'onPause', 'onPauseCapture', 'onPlay', 'onPlayCapture', 'onPlaying', 'onPlayingCapture', 'onProgress', 'onProgressCapture',
'onRateChange', 'onRateChangeCapture', 'onSeeked', 'onSeekedCapture', 'onSeeking', 'onSeekingCapture', 'onStalled', 'onStalledCapture',
'onSuspend', 'onSuspendCapture', 'onTimeUpdate', 'onTimeUpdateCapture', 'onVolumeChange', 'onVolumeChangeCapture', 'onWaiting', 'onWaitingCapture',
'onAuxClick', 'onAuxClickCapture', 'onClick', 'onClickCapture', 'onContextMenu', 'onContextMenuCapture', 'onDoubleClick', 'onDoubleClickCapture', 'onDrag',
'onDragCapture', 'onDragEnd', 'onDragEndCapture', 'onDragEnter', 'onDragEnterCapture', 'onDragExit', 'onDragExitCapture', 'onDragLeave', 'onDragLeaveCapture',
'onDragOver', 'onDragOverCapture', 'onDragStart', 'onDragStartCapture', 'onDrop', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture',
'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseMoveCapture', 'onMouseOut', 'onMouseOutCapture', 'onMouseOver', 'onMouseOverCapture',
'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onSelectCapture', 'onTouchCancel', 'onTouchCancelCapture', 'onTouchEnd', 'onTouchEndCapture', 'onTouchMove',
'onTouchMoveCapture', 'onTouchStart', 'onTouchStartCapture', 'onPointerDown', 'onPointerDownCapture', 'onPointerMove', 'onPointerMoveCapture',
'onPointerUp', 'onPointerUpCapture', 'onPointerCancel', 'onPointerCancelCapture', 'onPointerEnter', 'onPointerEnterCapture', 'onPointerLeave',
'onPointerLeaveCapture', 'onPointerOver', 'onPointerOverCapture', 'onPointerOut', 'onPointerOutCapture', 'onGotPointerCapture', 'onGotPointerCaptureCapture',
'onLostPointerCapture', 'onLostPointerCaptureCapture', 'onScroll', 'onScrollCapture', 'onWheel', 'onWheelCapture', 'onAnimationStart', 'onAnimationStartCapture',
'onAnimationEnd', 'onAnimationEndCapture', 'onAnimationIteration', 'onAnimationIterationCapture', 'onTransitionEnd', 'onTransitionEndCapture', ];

// Animation Types => TODO: Should be moved when react-smooth is typescriptified.
export type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

/** the offset of a chart, which define the blank space all around */
export interface ChartOffset {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  brushBottom?: number;
}

export interface Padding {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface GeometrySector {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  cornerRadius?: number;
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
}

export interface ViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export type D3Scale<T> = D3ScaleContinuousNumeric<T, number>;

export type AxisDomainItem = string | number | Function | 'auto' | 'dataMin' | 'dataMax';
/** The domain of axis */
export type AxisDomain = [AxisDomainItem, AxisDomainItem];

/** The props definition of base axis */
export interface BaseAxisProps {
  /** The type of axis */
  type?: 'number' | 'category';
  /** The key of data displayed in the axis */ 
  dataKey?: DataKey<any>;
  /** Whether or not display the axis */
  hide?: boolean;
  /** The scale type or functor of scale */
  scale?: ScaleType | Function;
  /** The option for tick */
  tick?: PresentationAttributes<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;
  /** The count of ticks */
  tickCount?: number;
  /** The option for axisLine */
  axisLine?: boolean | PresentationAttributes<SVGLineElement>;
  /** The option for tickLine */
  tickLine?: boolean | PresentationAttributes<SVGTextElement>;
  /** The size of tick line */
  tickSize?: number;
  /** The formatter function of tick */ 
  tickFormatter?: (value: any) => string;
  /**
   * When domain of the axis is specified and the type of the axis is 'number', 
   * if allowDataOverflow is set to be false, 
   * the domain will be adjusted when the minimum value of data is smaller than domain[0] or 
   * the maximum value of data is greater than domain[1] so that the axis displays all data values. 
   * If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
   */
  allowDataOverflow?: boolean;
  /**
   * Allow the axis has duplicated categorys or not when the type of axis is "category".
   */
  allowDuplicatedCategory?: boolean;
  /**
   * Allow the ticks of axis to be decimals or not.
   */
  allowDecimals?: boolean;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
  /** The name of data displayed in the axis */ 
  name?: string | number;
  /** The unit of data displayed in the axis */ 
  unit?: string | number;
  /** The type of axis */
  axisType?: AxisType;
  range?: Array<number>;
  /** axis react component */
  AxisComp?: any;
};

export type AxisInterval = number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';

export interface TickItem {
  value?: any;
  coordinate: number;
  index: number;
}

export interface Margin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}



export const filterProps = (props: Record<string, any> | Component | FunctionComponent | boolean, includeEvents?: boolean) => {
  if (!props || typeof props === 'function' || typeof props === 'boolean') { return null; }

  let inputProps = props as Record<string, any>;

  if (isValidElement(props)) {
    inputProps = props.props as Record<string, any>;
  }

  if (!_.isObject(inputProps)) { return null; }

  const out: Record<string, any> = {};

  for (const i in inputProps) {
    if (SVGPropKeys.includes(i) || (includeEvents && EventKeys.includes(i))) {
      out[i] = (inputProps as any)[i];
    }
  }

  return out;
};

export const adaptEventHandlers = (props: Record<string, any> | Component | FunctionComponent | boolean, newHandler?: ((e?: Event) => any)): Record<string, (e?: Event) => any> => {
  if (!props || typeof props === 'function' || typeof props === 'boolean') { return null; }

  let inputProps = props as Record<string, any>;

  if (isValidElement(props)) {
    inputProps = props.props as Record<string, any>;
  }

  if (!_.isObject(inputProps)) { return null; }

  const out: Record<string, (e: Event) => void> = {};

  for (const i in inputProps) {
    if (EventKeys.includes(i)) {
      out[i] = newHandler || ((e: Event) => inputProps[i](inputProps, e));
    }
  }

  return out;
};


const getEventHandlerOfChild = (originalHandler: Function, data: any, index: number) => (
  (e: Event): void => {
    originalHandler(data, index, e);

    return null;
  }
);

export const adaptEventsOfChild = (props: Record<string, any>, data: any, index: number): Record<string, (e?: Event) => any> => {
  if (!_.isObject(props) || typeof props !== 'object') { return null; }

  let out: Record<string, (e: Event) => void> = null;

  for (const i in props) {
    // @ts-ignore
    const item = props[i];
    if (EventKeys.includes(i) && typeof item === 'function') {
      if (!out) out = {};
      out[i] = getEventHandlerOfChild(item, data, index);
    }
  }
  return out;
};

