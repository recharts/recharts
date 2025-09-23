import { isValidElement, ReactElement } from 'react';

const SVGElementPropKeys = [
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-modal',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
  'className',
  'color',
  'height',
  'id',
  'lang',
  'max',
  'media',
  'method',
  'min',
  'name',
  'style',
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  'target',
  'width',
  'role',
  'tabIndex',
  'accentHeight',
  'accumulate',
  'additive',
  'alignmentBaseline',
  'allowReorder',
  'alphabetic',
  'amplitude',
  'arabicForm',
  'ascent',
  'attributeName',
  'attributeType',
  'autoReverse',
  'azimuth',
  'baseFrequency',
  'baselineShift',
  'baseProfile',
  'bbox',
  'begin',
  'bias',
  'by',
  'calcMode',
  'capHeight',
  'clip',
  'clipPath',
  'clipPathUnits',
  'clipRule',
  'colorInterpolation',
  'colorInterpolationFilters',
  'colorProfile',
  'colorRendering',
  'contentScriptType',
  'contentStyleType',
  'cursor',
  'cx',
  'cy',
  'd',
  'decelerate',
  'descent',
  'diffuseConstant',
  'direction',
  'display',
  'divisor',
  'dominantBaseline',
  'dur',
  'dx',
  'dy',
  'edgeMode',
  'elevation',
  'enableBackground',
  'end',
  'exponent',
  'externalResourcesRequired',
  'fill',
  'fillOpacity',
  'fillRule',
  'filter',
  'filterRes',
  'filterUnits',
  'floodColor',
  'floodOpacity',
  'focusable',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStretch',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'format',
  'from',
  'fx',
  'fy',
  'g1',
  'g2',
  'glyphName',
  'glyphOrientationHorizontal',
  'glyphOrientationVertical',
  'glyphRef',
  'gradientTransform',
  'gradientUnits',
  'hanging',
  'horizAdvX',
  'horizOriginX',
  'href',
  'ideographic',
  'imageRendering',
  'in2',
  'in',
  'intercept',
  'k1',
  'k2',
  'k3',
  'k4',
  'k',
  'kernelMatrix',
  'kernelUnitLength',
  'kerning',
  'keyPoints',
  'keySplines',
  'keyTimes',
  'lengthAdjust',
  'letterSpacing',
  'lightingColor',
  'limitingConeAngle',
  'local',
  'markerEnd',
  'markerHeight',
  'markerMid',
  'markerStart',
  'markerUnits',
  'markerWidth',
  'mask',
  'maskContentUnits',
  'maskUnits',
  'mathematical',
  'mode',
  'numOctaves',
  'offset',
  'opacity',
  'operator',
  'order',
  'orient',
  'orientation',
  'origin',
  'overflow',
  'overlinePosition',
  'overlineThickness',
  'paintOrder',
  'panose1',
  'pathLength',
  'patternContentUnits',
  'patternTransform',
  'patternUnits',
  'pointerEvents',
  'pointsAtX',
  'pointsAtY',
  'pointsAtZ',
  'preserveAlpha',
  'preserveAspectRatio',
  'primitiveUnits',
  'r',
  'radius',
  'refX',
  'refY',
  'renderingIntent',
  'repeatCount',
  'repeatDur',
  'requiredExtensions',
  'requiredFeatures',
  'restart',
  'result',
  'rotate',
  'rx',
  'ry',
  'seed',
  'shapeRendering',
  'slope',
  'spacing',
  'specularConstant',
  'specularExponent',
  'speed',
  'spreadMethod',
  'startOffset',
  'stdDeviation',
  'stemh',
  'stemv',
  'stitchTiles',
  'stopColor',
  'stopOpacity',
  'strikethroughPosition',
  'strikethroughThickness',
  'string',
  'stroke',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'surfaceScale',
  'systemLanguage',
  'tableValues',
  'targetX',
  'targetY',
  'textAnchor',
  'textDecoration',
  'textLength',
  'textRendering',
  'to',
  'transform',
  'u1',
  'u2',
  'underlinePosition',
  'underlineThickness',
  'unicode',
  'unicodeBidi',
  'unicodeRange',
  'unitsPerEm',
  'vAlphabetic',
  'values',
  'vectorEffect',
  'version',
  'vertAdvY',
  'vertOriginX',
  'vertOriginY',
  'vHanging',
  'vIdeographic',
  'viewTarget',
  'visibility',
  'vMathematical',
  'widths',
  'wordSpacing',
  'writingMode',
  'x1',
  'x2',
  'x',
  'xChannelSelector',
  'xHeight',
  'xlinkActuate',
  'xlinkArcrole',
  'xlinkHref',
  'xlinkRole',
  'xlinkShow',
  'xlinkTitle',
  'xlinkType',
  'xmlBase',
  'xmlLang',
  'xmlns',
  'xmlnsXlink',
  'xmlSpace',
  'y1',
  'y2',
  'y',
  'yChannelSelector',
  'z',
  'zoomAndPan',
  'ref',
  'key',
  'angle',
] as const;

export type SVGElementPropKeysType = (typeof SVGElementPropKeys)[number];

export function isSvgElementPropKey(key: PropertyKey): boolean {
  if (typeof key !== 'string') {
    return false;
  }
  const allowedSvgKeys: ReadonlyArray<string> = SVGElementPropKeys;
  return allowedSvgKeys.includes(key);
}

export type DataAttributeKeyType = `data-${string}`;

export type SVGPropsNoEvents<T> = Pick<T, Extract<keyof T, SVGElementPropKeysType | DataAttributeKeyType>>;

/**
 * Checks if the property is a data attribute.
 * @param key The property key.
 * @returns True if the key starts with 'data-', false otherwise.
 */
export function isDataAttribute(key: PropertyKey): key is DataAttributeKeyType {
  return typeof key === 'string' && key.startsWith('data-');
}

/**
 * Filters an object to only include SVG properties. Removes all event handlers too.
 * @param obj - The object to filter
 * @returns A new object containing only valid SVG properties, excluding event handlers.
 */
function svgPropertiesNoEventsFilter<T extends Record<string, any>>(obj: T): SVGPropsNoEvents<T> {
  const filteredEntries = Object.entries(obj).filter(([key]) => isSvgElementPropKey(key) || isDataAttribute(key));
  return Object.fromEntries(filteredEntries) as SVGPropsNoEvents<T>;
}

type UnknownButNotObject =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | ((...args: any[]) => any)
  | Array<any>;

/**
 * Overloaded function to filter SVG properties from various input types.
 * The input types can be:
 * - A record of string keys to any values, in which case it returns a record of only SVG properties
 * - A React element, in which case it returns the props of the element filtered to only SVG properties
 * - Anything else, in which case it returns null
 */
export function svgPropertiesNoEvents<P extends Record<string, any>>(input: ReactElement<P>): SVGPropsNoEvents<P>;
export function svgPropertiesNoEvents<T extends Record<string, any>>(input: T): SVGPropsNoEvents<T>;
export function svgPropertiesNoEvents(input: unknown): null;
export function svgPropertiesNoEvents<T extends Record<string, any>>(
  input: ReactElement<T> | T | UnknownButNotObject,
): SVGPropsNoEvents<T> | null {
  if (input == null) {
    return null;
  }

  if (isValidElement(input)) {
    return svgPropertiesNoEventsFilter(input.props);
  }

  if (typeof input === 'object' && !Array.isArray(input)) {
    return svgPropertiesNoEventsFilter(input);
  }

  return null;
}
