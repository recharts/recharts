import { ApiDoc } from './types';

export const PolarAngleAxisAPI: ApiDoc = {
  name: 'PolarAngleAxis',
  props: [
    {
      name: 'allowDataOverflow',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              When domain of the axis is specified and the type of the axis is &#39;number&#39;, if allowDataOverflow is
              set to be false, the domain will be adjusted when the minimum value of data is smaller than domain[0] or
              the maximum value of data is greater than domain[1] so that the axis displays all data values. If set to
              true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    { name: 'allowDecimals', type: 'boolean', isOptional: true, defaultVal: false },
    {
      name: 'allowDuplicatedCategory',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Allow the axis has duplicated categories or not when the type of axis is &quot;category&quot;.</p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'angle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Tick text rotation angle in degrees. Positive values rotate clockwise, negative values rotate
              counterclockwise.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    { name: 'angleAxisId', type: 'string | number', isOptional: true, defaultVal: 0 },
    {
      name: 'axisLine',
      type: 'false | true | React.SVGProps<SVGLineElement>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Controls axis line element. These are be passed as props to SVG <code>&lt;line&gt;</code> element
              representing the axis line. If <code>true</code> then the axis line is drawn using props of the
              PolarAngleAxis component. If <code>false</code> then the axis line is not drawn.
            </p>
            <p>
              Also see <code>axisLineType</code> prop to change the shape of the axis line.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      format: [
        "<PolarAngleAxis axisLine={{ stroke: 'red', strokeWidth: 2 }} />",
        '<PolarAngleAxis axisLine={false} />',
        "<PolarAngleAxis stroke='red' strokeWidth={2} strokeDasharray={4} />",
      ],
    },
    {
      name: 'axisLineType',
      type: '"circle" | "polygon"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of axis line.</p>
          </section>
        ),
      },
      defaultVal: 'polygon',
    },
    { name: 'children', type: 'ReactNode', isOptional: true },
    {
      name: 'className',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The HTML element&#39;s class name</p>
          </section>
        ),
      },
    },
    {
      name: 'cx',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of center. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'cy',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of center. When used inside a chart context, this prop is calculated based on the
              chart&#39;s dimensions, and this prop is ignored.
            </p>
            <p>This is only used when rendered outside a chart context.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'dataKey',
      type: 'string | number | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Axis from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Axis.
              </li>
            </ul>
            <p>If undefined, it will reuse the dataKey of graphical items.</p>
          </section>
        ),
      },
    },
    {
      name: 'domain',
      type: 'Array<readonly string> | Array<readonly number> | readonly [AxisDomainItem, AxisDomainItem] | Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specify the domain of axis when the axis is a number axis.</p>
            <p>If undefined, then the domain is calculated based on the data and dataKeys.</p>
            <p>The length of domain should be 2, and we will validate the values in domain.</p>
            <p>
              Each element in the array can be a number, &#39;auto&#39;, &#39;dataMin&#39;, &#39;dataMax&#39;, a string
              like &#39;dataMin - 20&#39;, &#39;dataMax + 100&#39;, or a function that accepts a single argument and
              returns a number.
            </p>
            <p>
              If any element of domain is set to be &#39;auto&#39;, comprehensible scale ticks will be calculated, and
              the final domain of axis is generated by the ticks. If a function, receives &#39;[dataMin, dataMax]&#39;,
              and must return a computed domain as &#39;[min, max]&#39;.
            </p>
          </section>
        ),
      },
      format: [
        "<PolarAngleAxis type=\"number\" domain={['dataMin', 'dataMax']} />",
        '<PolarAngleAxis type="number" domain={[0, \'dataMax\']} />',
        "<PolarAngleAxis type=\"number\" domain={['auto', 'auto']} />",
        '<PolarAngleAxis type="number" domain={[0, \'dataMax + 1000\']} />',
        "<PolarAngleAxis type=\"number\" domain={['dataMin - 100', 'dataMax + 100']} />",
        '<PolarAngleAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />',
        '<PolarAngleAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />',
        '<PolarAngleAxis type="number" domain={[0, 100]} allowDataOverflow />',
      ],
    },
    {
      name: 'hide',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set true, the axis do not display in the chart.</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'includeHidden',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Ensures that all datapoints within a chart contribute to its domain calculation, even when they are hidden
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'label',
      type: '(union of 7 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Defines a single label for the whole axis. This is not controlling tick labels. This prop renders one
              label in the center of the axis line. Useful for labeling the axis as a whole, like &quot;Time (in
              seconds)&quot; or &quot;Distance (in meters)&quot;.
            </p>
            <ul>
              <li>
                <code>true</code>: renders default label
              </li>
              <li>
                <code>false</code>: no labels are rendered
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
      name: 'name',
      type: 'string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The name of data. This option will be used in tooltip. If no value was set to this option, the value of
              dataKey will be used alternatively.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'orientation',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The orientation of axis text.</p>
          </section>
        ),
      },
      defaultVal: 'outer',
    },
    {
      name: 'radius',
      type: 'string | number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The outer radius of circle grid. If set a percentage, the final value is obtained by multiplying the
              percentage of maxRadius which is calculated by the width, height, cx, cy.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'range',
      type: 'AxisRange',
      isOptional: true,
      deprecated:
        'Recharts computes the range automatically based on chart width or height\n\nRecharts ignores this prop since 3.0',
    },
    {
      name: 'reversed',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>If set to true, the ticks of this axis are reversed.</p>
          </section>
        ),
      },
      defaultVal: false,
    },
    {
      name: 'scale',
      type: '(union of 20 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Scale function determines how data values are mapped to visual values. In other words, decided the mapping
              between data domain and coordinate range.
            </p>
            <p>
              If undefined, or &#39;auto&#39;, the scale function is created internally according to the type of axis
              and data.
            </p>
            <p>
              You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale
              definition object.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      format: [
        '<PolarAngleAxis scale="log" />',
        "import { scaleLog } from 'd3-scale';\nconst scale = scaleLog().base(Math.E);\n<PolarAngleAxis scale={scale} />",
      ],
    },
    {
      name: 'tick',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, ticks will not be drawn. If true set, ticks will be drawn which have the props calculated
              internally. If object set, ticks will be drawn which have the props merged by the internal calculated
              props and the option. If ReactElement set, the option can be the custom tick element. If set a function,
              the function will be called to render customized ticks.
            </p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'tickCount',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The count of axis ticks. Not used if &#39;type&#39; is &#39;category&#39;.</p>
          </section>
        ),
      },
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The formatter function of ticks.</p>
          </section>
        ),
      },
    },
    {
      name: 'tickLine',
      type: 'false | true | React.SVGProps<SVGLineElement>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, tick lines will not be drawn. If true set, tick lines will be drawn which have the props
              calculated internally. If object set, tick lines will be drawn which have the props merged by the internal
              calculated props and the option.
            </p>
          </section>
        ),
      },
      defaultVal: true,
    },
    {
      name: 'ticks',
      type: 'Array<readonly TickItem>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The array of every tick&#39;s value and angle.</p>
          </section>
        ),
      },
    },
    {
      name: 'tickSize',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The length of tick line.</p>
          </section>
        ),
      },
      defaultVal: 8,
    },
    {
      name: 'type',
      type: '"number" | "auto" | "category"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of axis.</p>
            <p>
              <code>category</code>: Treats data as distinct values. Each value is in the same distance from its
              neighbors, regardless of their actual numeric difference.
            </p>
            <p>
              <code>number</code>: Treats data as continuous range. Values that are numerically closer are placed closer
              together on the axis.
            </p>
            <p>
              <code>auto</code>: the type is inferred based on the chart layout.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
    },
    {
      name: 'unit',
      type: 'string',
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
      defaultVal: 500,
      examples: [{ name: 'Z-Index and layers guide', url: '/guide/zIndex/' }],
    },
    { name: 'onAbort', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEnd', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationEndCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationStart', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationStartCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClick', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onAuxClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInput', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onBeforeInputCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onBlur', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onBlurCapture', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlay', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThrough', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onCanPlayThroughCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onChange', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onChangeCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    {
      name: 'onClick',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of click on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEnd', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionEndCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStart', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionStartCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdate', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onCompositionUpdateCapture', type: 'AdaptChildCompositionEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenu', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onContextMenuCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onCopy', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCopyCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCut', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onCutCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClick', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDoubleClickCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onDrag', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnd', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEndCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnter', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragEnterCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExit', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragExitCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeave', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragLeaveCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOver', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragOverCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStart', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDragStartCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDrop', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDropCapture', type: 'AdaptChildDragEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onDurationChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptied', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEmptiedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncrypted', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEncryptedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEnded', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onEndedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onError', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onErrorCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onFocus', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onFocusCapture', type: 'AdaptChildFocusEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onGotPointerCaptureCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onInput', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInputCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalid', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onInvalidCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDown', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyDownCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPress', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyPressCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUp', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onKeyUpCapture', type: 'AdaptChildKeyboardEventHandler<P, T>', isOptional: true },
    { name: 'onLoad', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedData', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedDataCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadata', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadedMetadataCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStart', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLoadStartCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onLostPointerCaptureCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseDown',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousedown on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onMouseDownCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseEnter',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseenter on the ticks of this axis</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseLeave',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseleave on the ticks of this axis</p>
          </section>
        ),
      },
    },
    {
      name: 'onMouseMove',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mousemove on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onMouseMoveCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOut',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseout on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOutCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseOver',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseover on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onMouseOverCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    {
      name: 'onMouseUp',
      type: 'AdaptChildMouseEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of mouseup on the ticks of this axis</p>
          </section>
        ),
      },
    },
    { name: 'onMouseUpCapture', type: 'AdaptChildMouseEventHandler<P, T>', isOptional: true },
    { name: 'onPaste', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPasteCapture', type: 'AdaptChildClipboardEventHandler<P, T>', isOptional: true },
    { name: 'onPause', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPauseCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlay', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlaying', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPlayingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancel', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerCancelCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDown', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerDownCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnter', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerEnterCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeave', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerLeaveCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMove', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerMoveCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOut', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOutCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOver', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerOverCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUp', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onPointerUpCapture', type: 'AdaptChildPointerEventHandler<P, T>', isOptional: true },
    { name: 'onProgress', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onProgressCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onRateChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onReset', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onResetCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onScroll', type: 'AdaptChildUIEventHandler<P, T>', isOptional: true },
    { name: 'onScrollCapture', type: 'AdaptChildUIEventHandler<P, T>', isOptional: true },
    { name: 'onSeeked', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekedCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeeking', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSeekingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelect', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSelectCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalled', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onStalledCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSubmit', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onSubmitCapture', type: 'AdaptChildFormEventHandler<P, T>', isOptional: true },
    { name: 'onSuspend', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onSuspendCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdate', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTimeUpdateCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancel', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchCancelCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEnd', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchEndCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMove', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchMoveCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStart', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTouchStartCapture', type: 'AdaptChildTouchEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEnd', type: 'AdaptChildTransitionEventHandler<P, T>', isOptional: true },
    { name: 'onTransitionEndCapture', type: 'AdaptChildTransitionEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChange', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onVolumeChangeCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaiting', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWaitingCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onWheel', type: 'AdaptChildWheelEventHandler<P, T>', isOptional: true },
    { name: 'onWheelCapture', type: 'AdaptChildWheelEventHandler<P, T>', isOptional: true },
  ],
  parentComponents: ['PieChart', 'RadarChart', 'RadialBarChart'],
  childrenComponents: ['Label'],
};
