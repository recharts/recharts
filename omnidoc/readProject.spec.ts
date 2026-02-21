import { describe, it, expect } from 'vitest';
import { SymbolFlags } from 'ts-morph';
import { getTagText, ProjectDocReader } from './readProject';
import { getLinksFromProp, processType } from './generateApiDoc';
import { ExampleReader } from './readExamples';
import { assertNotNull } from '../test/helper/assertNotNull';

describe('readProject', () => {
  const reader = new ProjectDocReader();
  const exampleReader = new ExampleReader();
  it('should identify all exported symbols', () => {
    /*
     * Let's assert a few known symbols to make sure the reader is working.
     * We don't need to list them all here, that just makes a brittle test
     */
    const expectedComponents = ['Area', 'AreaProps', 'Bar', 'BarProps', 'useChartWidth', 'getNiceTickValues'];
    expect(reader.getPublicSymbolNames()).toEqual(expect.arrayContaining(expectedComponents));
  });

  it('should identify all components', () => {
    const expectedComponents = ['Area', 'Bar', 'Brush', 'Customized', 'LineChart', 'ResponsiveContainer'];
    const unexpectedSymbols = ['useChartWidth', 'getNiceTickValues', 'Symbol', 'AreaProps', 'BarProps'];
    expect(reader.getPublicComponentNames()).toEqual(expect.arrayContaining(expectedComponents));
    unexpectedSymbols.forEach(unexpectedSymbol => {
      expect(reader.getPublicComponentNames()).not.toContain(unexpectedSymbol);
    });
  });

  it('should identify all runtime exports', () => {
    const expectedComponents = [
      'Area',
      'Bar',
      'Brush',
      'Customized',
      'LineChart',
      'ResponsiveContainer',
      'useChartWidth',
    ];
    const unexpectedSymbols = ['AreaProps', 'BarProps'];
    expect(reader.getAllRuntimeExportedNames()).toEqual(expect.arrayContaining(expectedComponents));
    unexpectedSymbols.forEach(unexpectedSymbol => {
      expect(reader.getAllRuntimeExportedNames()).not.toContain(unexpectedSymbol);
    });
  });

  it('should filter symbols by kind', () => {
    // this is a list of exported runtime objects, looks useful. Where is ZAxis though? Maybe ZAxis is a function.
    const variables = reader.getPublicSymbolNames(SymbolFlags.Variable);
    expect(variables).toContain('Area');
    expect(variables).toContain('Bar');
    expect(variables).not.toContain('AreaProps');
  });

  it('should return Recharts props of Bar', () => {
    expect(reader.getRechartsPropsOf('Bar')).toMatchInlineSnapshot(`
      [
        "activeBar",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "background",
        "barSize",
        "children",
        "className",
        "dangerouslySetInnerHTML",
        "dataKey",
        "hide",
        "id",
        "index",
        "isAnimationActive",
        "label",
        "legendType",
        "maxBarSize",
        "minPointSize",
        "name",
        "onAbort",
        "onAbortCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onBlur",
        "onBlurCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onChange",
        "onChangeCapture",
        "onClick",
        "onClickCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onError",
        "onErrorCapture",
        "onFocus",
        "onFocusCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onInput",
        "onInputCapture",
        "onInvalid",
        "onInvalidCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onLoad",
        "onLoadCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onPaste",
        "onPasteCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onReset",
        "onResetCapture",
        "onScroll",
        "onScrollCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onSelect",
        "onSelectCapture",
        "onStalled",
        "onStalledCapture",
        "onSubmit",
        "onSubmitCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onWheel",
        "onWheelCapture",
        "radius",
        "shape",
        "stackId",
        "tooltipType",
        "unit",
        "xAxisId",
        "yAxisId",
        "zIndex",
      ]
    `);
  });

  it('should return all props of Bar including SVG', () => {
    expect(reader.getAllPropsOf('Bar')).toMatchInlineSnapshot(`
      [
        "accentHeight",
        "accumulate",
        "activeBar",
        "additive",
        "alignmentBaseline",
        "allowReorder",
        "alphabetic",
        "amplitude",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "arabicForm",
        "aria-activedescendant",
        "aria-atomic",
        "aria-autocomplete",
        "aria-braillelabel",
        "aria-brailleroledescription",
        "aria-busy",
        "aria-checked",
        "aria-colcount",
        "aria-colindex",
        "aria-colindextext",
        "aria-colspan",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-description",
        "aria-details",
        "aria-disabled",
        "aria-dropeffect",
        "aria-errormessage",
        "aria-expanded",
        "aria-flowto",
        "aria-grabbed",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-level",
        "aria-live",
        "aria-modal",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-owns",
        "aria-placeholder",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-relevant",
        "aria-required",
        "aria-roledescription",
        "aria-rowcount",
        "aria-rowindex",
        "aria-rowindextext",
        "aria-rowspan",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext",
        "ascent",
        "attributeName",
        "attributeType",
        "autoReverse",
        "azimuth",
        "background",
        "barSize",
        "baseFrequency",
        "baselineShift",
        "baseProfile",
        "bbox",
        "begin",
        "bias",
        "by",
        "calcMode",
        "capHeight",
        "children",
        "className",
        "clip",
        "clipPath",
        "clipPathUnits",
        "clipRule",
        "color",
        "colorInterpolation",
        "colorInterpolationFilters",
        "colorProfile",
        "colorRendering",
        "contentScriptType",
        "contentStyleType",
        "crossOrigin",
        "cursor",
        "cx",
        "cy",
        "d",
        "dangerouslySetInnerHTML",
        "dataKey",
        "decelerate",
        "descent",
        "diffuseConstant",
        "direction",
        "display",
        "divisor",
        "dominantBaseline",
        "dur",
        "dx",
        "dy",
        "edgeMode",
        "elevation",
        "enableBackground",
        "end",
        "exponent",
        "externalResourcesRequired",
        "fill",
        "fillOpacity",
        "fillRule",
        "filter",
        "filterRes",
        "filterUnits",
        "floodColor",
        "floodOpacity",
        "focusable",
        "fontFamily",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "format",
        "fr",
        "from",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyphName",
        "glyphOrientationHorizontal",
        "glyphOrientationVertical",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "hanging",
        "height",
        "hide",
        "horizAdvX",
        "horizOriginX",
        "href",
        "id",
        "ideographic",
        "imageRendering",
        "in",
        "in2",
        "index",
        "intercept",
        "isAnimationActive",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kernelMatrix",
        "kernelUnitLength",
        "kerning",
        "key",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "label",
        "lang",
        "legendType",
        "lengthAdjust",
        "letterSpacing",
        "lightingColor",
        "limitingConeAngle",
        "local",
        "markerEnd",
        "markerHeight",
        "markerMid",
        "markerStart",
        "markerUnits",
        "markerWidth",
        "mask",
        "maskContentUnits",
        "maskUnits",
        "mathematical",
        "max",
        "maxBarSize",
        "media",
        "method",
        "min",
        "minPointSize",
        "mode",
        "name",
        "numOctaves",
        "offset",
        "onAbort",
        "onAbortCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onBlur",
        "onBlurCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onChange",
        "onChangeCapture",
        "onClick",
        "onClickCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onError",
        "onErrorCapture",
        "onFocus",
        "onFocusCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onInput",
        "onInputCapture",
        "onInvalid",
        "onInvalidCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onLoad",
        "onLoadCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onPaste",
        "onPasteCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onReset",
        "onResetCapture",
        "onResize",
        "onResizeCapture",
        "onScroll",
        "onScrollCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onSelect",
        "onSelectCapture",
        "onStalled",
        "onStalledCapture",
        "onSubmit",
        "onSubmitCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onWheel",
        "onWheelCapture",
        "opacity",
        "operator",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "overlinePosition",
        "overlineThickness",
        "paintOrder",
        "panose1",
        "path",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointerEvents",
        "points",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "r",
        "radius",
        "refX",
        "refY",
        "renderingIntent",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "restart",
        "result",
        "role",
        "rotate",
        "rx",
        "ry",
        "scale",
        "seed",
        "shape",
        "shapeRendering",
        "slope",
        "spacing",
        "specularConstant",
        "specularExponent",
        "speed",
        "spreadMethod",
        "stackId",
        "startOffset",
        "stdDeviation",
        "stemh",
        "stemv",
        "stitchTiles",
        "stopColor",
        "stopOpacity",
        "strikethroughPosition",
        "strikethroughThickness",
        "string",
        "stroke",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth",
        "style",
        "suppressHydrationWarning",
        "surfaceScale",
        "systemLanguage",
        "tabIndex",
        "tableValues",
        "target",
        "targetX",
        "targetY",
        "textAnchor",
        "textDecoration",
        "textLength",
        "textRendering",
        "to",
        "tooltipType",
        "transform",
        "type",
        "u1",
        "u2",
        "underlinePosition",
        "underlineThickness",
        "unicode",
        "unicodeBidi",
        "unicodeRange",
        "unit",
        "unitsPerEm",
        "vAlphabetic",
        "values",
        "vectorEffect",
        "version",
        "vertAdvY",
        "vertOriginX",
        "vertOriginY",
        "vHanging",
        "vIdeographic",
        "viewBox",
        "viewTarget",
        "visibility",
        "vMathematical",
        "width",
        "widths",
        "wordSpacing",
        "writingMode",
        "x",
        "x1",
        "x2",
        "xAxisId",
        "xChannelSelector",
        "xHeight",
        "xlinkActuate",
        "xlinkArcrole",
        "xlinkHref",
        "xlinkRole",
        "xlinkShow",
        "xlinkTitle",
        "xlinkType",
        "xmlBase",
        "xmlLang",
        "xmlns",
        "xmlnsXlink",
        "xmlSpace",
        "y",
        "y1",
        "y2",
        "yAxisId",
        "yChannelSelector",
        "z",
        "zIndex",
        "zoomAndPan",
      ]
    `);
  });

  it('should return props of ReferenceLine', () => {
    expect(reader.getRechartsPropsOf('ReferenceLine')).toMatchInlineSnapshot(`
      [
        "className",
        "ifOverflow",
        "label",
        "position",
        "segment",
        "shape",
        "strokeWidth",
        "x",
        "xAxisId",
        "y",
        "yAxisId",
        "zIndex",
      ]
    `);
  });

  it('should return prop meta when recharts overwrites DOM prop', () => {
    const propMeta = reader.getPropMeta('ReferenceLine', 'x');
    expect(propMeta).toEqual([
      {
        defaultValueFromJSDoc: { type: 'unreadable' },
        defaultValueFromObject: { type: 'unreadable' },
        normalizedPath: expect.stringContaining('node_modules/@types/react/index.d.ts'),
        name: 'x',
        origin: 'dom',
        jsDoc: {
          tags: [],
          text: undefined,
        },
        isRequired: false,
      },
      expect.objectContaining({
        defaultValueFromJSDoc: { type: 'unreadable' },
        defaultValueFromObject: { type: 'none' },
        normalizedPath: expect.stringContaining('src/cartesian/ReferenceLine.tsx'),
        name: 'x',
        origin: 'recharts',
        isRequired: false,
      }),
    ]);
  });

  it('should return prop meta where recharts has default value from JSDoc', () => {
    const propMeta = reader.getPropMeta('ReferenceLine', 'position');
    expect(propMeta).toEqual([
      {
        defaultValueFromJSDoc: { type: 'known', value: "'middle'" },
        defaultValueFromObject: { type: 'known', value: 'middle' },
        normalizedPath: expect.stringContaining('src/cartesian/ReferenceLine.tsx'),
        name: 'position',
        origin: 'recharts',
        jsDoc: {
          text: expect.stringContaining('The position of the reference line when the axis has bandwidth'),
          tags: [['defaultValue', "'middle'"]],
        },
        isRequired: false,
      },
    ]);
  });

  it('should read Area props', () => {
    const onAnimationStartMeta = reader.getPropMeta('Area', 'onAnimationStart');
    expect(onAnimationStartMeta).toEqual([
      {
        defaultValueFromJSDoc: { type: 'unreadable' },
        defaultValueFromObject: { type: 'none' },
        normalizedPath: expect.stringContaining('src/util/types.ts'),
        name: 'onAnimationStart',
        origin: 'recharts',
        jsDoc: {
          text: undefined,
          tags: [],
        },
        isRequired: false,
      },
      {
        defaultValueFromJSDoc: { type: 'unreadable' },
        defaultValueFromObject: { type: 'none' },
        normalizedPath: expect.stringContaining('src/cartesian/Area.tsx'),
        name: 'onAnimationStart',
        origin: 'recharts',
        jsDoc: {
          text: expect.stringContaining('The customized event handler of animation start'),
          tags: [],
        },
        isRequired: false,
      },
    ]);
  });

  it('should read Area onAnimationStart comment', () => {
    const onAnimationStartMeta = reader.getCommentOf('Area', 'onAnimationStart');
    expect(onAnimationStartMeta).toBe('The customized event handler of animation start');
  });

  it('should read BarStack.radius prop', () => {
    const radiusMeta = reader.getPropMeta('BarStack', 'radius');
    expect(radiusMeta).toEqual([
      {
        defaultValueFromJSDoc: { type: 'known', value: '0' },
        defaultValueFromObject: { type: 'known', value: 0 },
        normalizedPath: expect.stringContaining('src/cartesian/BarStack.tsx'),
        name: 'radius',
        origin: 'recharts',
        jsDoc: {
          text: expect.stringContaining('If you provide a single number, it applies to all four corners.'),
          tags: [['defaultValue', '0']],
        },
        isRequired: false,
      },
    ]);
  });

  it('should read BarStack.radius prop type', () => {
    const radiusMeta = reader.getTypeOf('BarStack', 'radius');
    /*
     * Currently returns the import path instead of the type text which is not what I want,
     * ideally it should return the type text like 'number | [number, number, number, number]'.
     */
    expect(radiusMeta).toEqual({
      names: ['number', '[number, number, number, number]'],
      isInline: true,
    });
  });

  it('should read Curve type prop as inline and expanded', () => {
    const typeMeta = reader.getTypeOf('Curve', 'type');
    expect(typeMeta).toEqual({
      names: expect.arrayContaining(['"basis"', '"basisClosed"']),
      isInline: true,
    });
    expect(typeMeta?.names).toContain('"natural"');
    expect(typeMeta?.names).toContain('"step"');
    // Should contain the CurveFactory part too, but that might be complex to assert exact string
  });

  it('should return SVG component that this component extends', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe('SVGLineElement');
  });

  it('should get default value of a prop', () => {
    expect(reader.getDefaultValueOf('ReferenceLine', 'position')).toEqual({ type: 'known', value: 'middle' });
  });

  it('should get integer default value', () => {
    expect(reader.getDefaultValueOf('Area', 'animationDuration')).toEqual({ type: 'known', value: 1500 });
  });

  it('should return none for default value of a prop without default', () => {
    expect(reader.getDefaultValueOf('AreaChart', 'id')).toEqual({ type: 'none' });
  });

  it('should get comment of a Recharts prop', () => {
    const comment = reader.getCommentOf('ReferenceLine', 'position');
    expect(comment).toMatchInlineSnapshot(`
      "The position of the reference line when the axis has bandwidth
      (e.g., a band scale). This determines where within the band
      the line is drawn."
    `);
  });

  it('should get comment of a function argument', () => {
    const comment = reader.getCommentOf('getRelativeCoordinate', 'event');
    expect(comment).toEqual(
      'The mouse or touch event from React event handlers (works with both HTML and SVG elements)',
    );
  });

  it('should return undefined for comment of unknown component', () => {
    expect(reader.getCommentOf('UnknownComponent', 'someProp')).toBe(undefined);
  });

  it('should return undefined for comment of unknown prop', () => {
    expect(reader.getCommentOf('ReferenceLine', 'unknownPropThatDoesNotExist')).toBe(undefined);
  });

  it('should return the Recharts description if the prop shadows a DOM prop', () => {
    // stroke has no JSDoc in React props, but it does in Recharts props
    const comment = reader.getCommentOf('Area', 'stroke');
    // In that case, we want to see the Recharts variant here
    expect(comment).toMatchInlineSnapshot(`"The stroke color. If "none", no line will be drawn."`);
  });

  it('should read @example tags', () => {
    const examples = reader.getExamplesOf('Label', 'content');
    expect(examples).toMatchInlineSnapshot(`
      [
        "<Label content={CustomizedLabel} />",
        "const renderCustomLabel = (props) => <text {...props}>Custom Label</text>;
      <Label content={renderCustomLabel} />",
      ]
    `);
  });

  it('should not add double pointy brackets in simplified type', () => {
    const originalTexts = reader.getTypeOf('Label', 'content')?.names;
    assertNotNull(originalTexts);
    const result = processType(originalTexts, false);
    expect(result).toEqual('Function | ReactNode');
  });

  it('should say that children type is ReactNode, and not attempt to explain the union', () => {
    const childrenType = reader.getTypeOf('BarChart', 'children');
    expect(childrenType).toEqual({
      names: ['ReactNode'],
      isInline: false,
    });
  });

  it('should say that boolean type is boolean, not true | false. Also it should exclude undefined', () => {
    const boolType = reader.getTypeOf('XAxis', 'mirror');
    expect(boolType).toEqual({
      names: ['boolean'],
      isInline: false,
    });
  });

  it('should return "readonly" modifier in props if they are defined in Readonly<>', () => {
    const typeOfProp = reader.getTypeOf('AreaChart', 'throttledEvents');
    assertNotNull(typeOfProp);
    expect(typeOfProp).toEqual({
      isInline: false,
      names: ['"all"', 'readonly (keyof GlobalEventHandlersEventMap)[]'],
    });
  });

  it('should return comment for component itself', () => {
    const comment = reader.getComponentJsDocMeta('Customized')?.text;
    assertNotNull(comment);
    expect(comment).toContain('Customized component used to be necessary to render custom elements in Recharts 2.x');
  });

  it('should read @deprecated tag from component', () => {
    const jsDoc = reader.getComponentJsDocMeta('Customized');
    const deprecated = jsDoc?.tags.find(t => t[0] === 'deprecated');
    expect(deprecated).toBeDefined();
    expect(deprecated?.[1]).toContain('Just render your components directly');
  });

  it('should read @deprecated tag from prop', () => {
    const propMeta = reader.getPropMeta('Customized', 'component');
    const deprecated = propMeta[0]?.jsDoc?.tags.find(t => t[0] === 'deprecated');
    assertNotNull(deprecated);
    // The prop deprecated tag has no text in the source code
    expect(deprecated[1]).toBeUndefined();
  });

  it('should read known primitive default value types as primitives without the string wrapper', () => {
    expect(reader.getDefaultValueOf('Label', 'angle')).toEqual({ type: 'known', value: 0 });
    expect(reader.getDefaultValueOf('LabelList', 'angle')).toEqual({ type: 'known', value: 0 });
  });

  it('should read ResponsiveContainer description', () => {
    const comment = reader.getComponentJsDocMeta('ResponsiveContainer')?.text;
    assertNotNull(comment);
    expect(comment).toContain('container that adjusts its width and height');
    expect(comment).not.toContain('/**');
  });

  it('should read ReferenceArea description', () => {
    const comment = reader.getComponentJsDocMeta('ReferenceArea')?.text;
    assertNotNull(comment);
    expect(comment).not.toContain('/**');
  });

  it('should read JSDoc tags of Scatter', () => {
    const tags = reader.getComponentJsDocMeta('Scatter');
    assertNotNull(tags);
    expect(tags.tags).toEqual([
      ['provides', 'LabelListContext'],
      ['provides', 'ErrorBarContext'],
      ['provides', 'CellReader'],
      ['consumes', 'CartesianChartContext'],
    ]);
  });

  it('should deduplicate links if both the child and parent components point to the same example', () => {
    const propMeta = reader.getPropMeta('Line', 'type');
    // both Line and Curve have examples for 'type' prop but we should not display duplicates
    expect(propMeta).toHaveLength(2);

    const examples = getLinksFromProp('Line', 'type', reader, exampleReader);

    // Verify deduplication: CardinalAreaChart should appear exactly once
    // (it is present in JSDoc and also likely found by ExampleReader)
    const cardinalExamples = examples.filter(e => e.url === '/examples/CardinalAreaChart/');
    expect(cardinalExamples).toHaveLength(1);

    expect(examples).toEqual(
      expect.arrayContaining([
        {
          isExternal: false,
          name: 'An AreaChart which has two area with different interpolation.',
          url: '/examples/CardinalAreaChart/',
        },
        {
          isExternal: true,
          name: 'https://d3js.org/d3-shape/curve',
          url: 'https://d3js.org/d3-shape/curve',
        },
      ]),
    );
  });

  it('should get links from jsdoc tags', () => {
    const [, propMeta] = reader.getPropMeta('Line', 'strokeDasharray');
    assertNotNull(propMeta);
    const tagText = getTagText(propMeta.jsDoc, 'see');
    assertNotNull(tagText);
    expect(tagText.text).toEqual(
      '{@link  https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray }',
    );
  });

  it('should consider props defined with Partial as optional', () => {
    const propMeta = reader.getPropMeta('Bar', 'onClick');
    assertNotNull(propMeta);
    expect(propMeta).toHaveLength(1);
    const first = propMeta[0];
    assertNotNull(first);
    expect(first.isRequired).toBe(false);
  });

  it('should get return type of useChartHeight', () => {
    const returnType = reader.getReturnTypeOf('useChartHeight');
    expect(returnType).toBeDefined();
    expect(returnType?.names).toHaveLength(2);
    expect(returnType?.names).toContain('number');
    expect(returnType?.names).toContain('undefined');
    expect(returnType?.isInline).toBe(false);
  });

  it('should get returns tag description of useChartHeight', () => {
    const jsDoc = reader.getComponentJsDocMeta('useChartHeight');
    const returnsTag = getTagText(jsDoc, 'returns');
    expect(returnsTag).toBeDefined();
    // The type {number | undefined} should be stripped by ts-morph if parsed correctly,
    // or we'll see if it remains.
    expect(returnsTag?.text).toContain('The height of the chart in pixels');
  });

  it('should read useXAxisDomain arguments as props', () => {
    const propMeta = reader.getPropMeta('useXAxisDomain', 'xAxisId');
    assertNotNull(propMeta);
    expect(propMeta).toHaveLength(1);
    const arg = propMeta[0];
    expect(arg.name).toBe('xAxisId');
    expect(arg.isRequired).toBe(false); // It has a default value
    expect(arg.defaultValueFromObject.value).toContain('defaultAxisId'); // or '0' depending on how it's resolved, usually text
    // JSDoc check
    expect(arg.jsDoc?.text).toContain('The `xAxisId` of the X-axis');
  });
});
