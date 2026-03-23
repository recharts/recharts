import { isValidElement } from 'react';

const COMMON_SVG_PROPS = [
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
  'id',
  'lang',
  'media',
  'method',
  'name',
  'style',
  'target',
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
  'decelerate',
  'descent',
  'diffuseConstant',
  'direction',
  'display',
  'divisor',
  'dominantBaseline',
  'dur',
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
  'g1',
  'g2',
  'glyphName',
  'glyphOrientationHorizontal',
  'glyphOrientationVertical',
  'glyphRef',
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
  'markerMid',
  'markerStart',
  'markerUnits',
  'mask',
  'maskContentUnits',
  'maskUnits',
  'mathematical',
  'mode',
  'numOctaves',
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
  'renderingIntent',
  'repeatCount',
  'repeatDur',
  'requiredExtensions',
  'requiredFeatures',
  'restart',
  'result',
  'rotate',
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
  'zoomAndPan',
  'ref',
  'key',
  'angle',
];

const RECT_PROPS = ['x', 'y', 'width', 'height', 'rx', 'ry'];
const CIRCLE_PROPS = ['cx', 'cy', 'r'];
const ELLIPSE_PROPS = ['cx', 'cy', 'rx', 'ry'];
const LINE_PROPS = ['x1', 'y1', 'x2', 'y2'];
const TEXT_PROPS = ['x', 'y', 'dx', 'dy', 'rotate', 'textLength', 'lengthAdjust'];
const IMAGE_PROPS = ['x', 'y', 'width', 'height', 'preserveAspectRatio', 'href'];
const SVG_PROPS = ['x', 'y', 'width', 'height', 'viewBox', 'preserveAspectRatio', 'xmlns'];
const POLYGON_PROPS = ['points'];
const POLYLINE_PROPS = ['points'];
const PATH_PROPS = ['d'];
const STOP_PROPS = ['offset', 'stopColor', 'stopOpacity'];
const LINEAR_GRADIENT_PROPS = ['x1', 'y1', 'x2', 'y2', 'gradientUnits', 'gradientTransform', 'spreadMethod', 'href'];
const RADIAL_GRADIENT_PROPS = [
  'cx',
  'cy',
  'r',
  'fx',
  'fy',
  'fr',
  'gradientUnits',
  'gradientTransform',
  'spreadMethod',
  'href',
];
const MASK_PROPS = ['x', 'y', 'width', 'height', 'maskUnits', 'maskContentUnits'];
const CLIP_PATH_PROPS = ['clipPathUnits'];
const FOREIGN_OBJECT_PROPS = ['x', 'y', 'width', 'height'];

const ELEMENT_SPECIFIC_PROPS: Record<string, string[]> = {
  rect: RECT_PROPS,
  circle: CIRCLE_PROPS,
  ellipse: ELLIPSE_PROPS,
  line: LINE_PROPS,
  text: TEXT_PROPS,
  image: IMAGE_PROPS,
  svg: SVG_PROPS,
  g: [],
  polygon: POLYGON_PROPS,
  polyline: POLYLINE_PROPS,
  path: PATH_PROPS,
  stop: STOP_PROPS,
  linearGradient: LINEAR_GRADIENT_PROPS,
  radialGradient: RADIAL_GRADIENT_PROPS,
  mask: MASK_PROPS,
  clipPath: CLIP_PATH_PROPS,
  foreignObject: FOREIGN_OBJECT_PROPS,
};

export const SVGElementPropKeys = [
  ...COMMON_SVG_PROPS,
  ...RECT_PROPS,
  ...CIRCLE_PROPS,
  ...ELLIPSE_PROPS,
  ...LINE_PROPS,
  ...TEXT_PROPS,
  ...IMAGE_PROPS,
  ...SVG_PROPS,
  ...POLYGON_PROPS,
  ...POLYLINE_PROPS,
  ...PATH_PROPS,
  ...STOP_PROPS,
  ...LINEAR_GRADIENT_PROPS,
  ...RADIAL_GRADIENT_PROPS,
  ...MASK_PROPS,
  ...CLIP_PATH_PROPS,
  ...FOREIGN_OBJECT_PROPS,
  // Props not yet categorized into element-specific arrays
  'max',
  'min',
  'refX',
  'refY',
  'markerHeight',
  'markerUnits',
  'markerWidth',
] as const;

export type SVGElementPropKeysType = (typeof SVGElementPropKeys)[number];

const ELEMENT_SPECIFIC_PROP_SET = new Set<string>();
for (const props of Object.values(ELEMENT_SPECIFIC_PROPS)) {
  for (const prop of props) {
    ELEMENT_SPECIFIC_PROP_SET.add(prop);
  }
}

const COMMON_SVG_PROP_SET = new Set<string>(COMMON_SVG_PROPS.filter(prop => !ELEMENT_SPECIFIC_PROP_SET.has(prop)));

export function isSvgElementPropKey(key: PropertyKey, tagName?: string): boolean {
  if (typeof key !== 'string') {
    return false;
  }
  if (tagName) {
    const specificProps = ELEMENT_SPECIFIC_PROPS[tagName];
    return COMMON_SVG_PROP_SET.has(key) || (specificProps != null && specificProps.includes(key));
  }
  return COMMON_SVG_PROP_SET.has(key);
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
 * @param tagName - Optional SVG element tag name to filter by specific attributes
 * @returns A new object containing only valid SVG properties, excluding event handlers.
 */
export function svgPropertiesNoEvents<T extends Record<PropertyKey, unknown>>(
  obj: T | boolean,
  tagName?: string,
): SVGPropsNoEvents<T> {
  if (typeof obj !== 'object' || obj === null) {
    return {} as SVGPropsNoEvents<T>;
  }
  const result: Record<PropertyKey, unknown> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (isSvgElementPropKey(key, tagName) || isDataAttribute(key)) {
        result[key] = obj[key];
      }
    }
  }
  return result as SVGPropsNoEvents<T>;
}

/**
 * Function to filter SVG properties from various input types.
 * The input types can be:
 * - A record of string keys to any values, in which case it returns a record of only SVG properties
 * - A React element, in which case it returns the props of the element filtered to only SVG properties
 * - Anything else, in which case it returns null
 *
 * This function has a wide-open return type, because it will read and filter the props of an arbitrary React element.
 * This can be SVG, HTML, whatnot, with arbitrary values, so we can't type it more specifically.
 *
 * If you wish to have a type-safe version, use svgPropertiesNoEvents directly with a typed object.
 *
 * @param input - The input to filter, which can be a record, a React element, or other types.
 * @param tagName - Optional SVG element tag name to filter by specific attributes
 * @returns A record of SVG properties if the input is a record or React element, otherwise null.
 */
export function svgPropertiesNoEventsFromUnknown(
  input: unknown,
  tagName?: string,
): Partial<Record<SVGElementPropKeysType, unknown>> | null {
  if (input == null) {
    return null;
  }

  if (isValidElement(input) && typeof input.props === 'object' && input.props !== null) {
    const p: Partial<Record<PropertyKey, unknown>> = input.props;
    const resolvedTagName = tagName || (typeof input.type === 'string' ? input.type : undefined);
    return svgPropertiesNoEvents(p, resolvedTagName);
  }

  if (typeof input === 'object' && !Array.isArray(input)) {
    return svgPropertiesNoEvents(input as Record<PropertyKey, unknown>, tagName);
  }

  return null;
}
