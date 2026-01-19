import { ApiDoc } from './types';

export const PieAPI: ApiDoc = {
  name: 'Pie',
  props: [
    {
      name: 'activeShape',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              This component is rendered when this graphical item is activated (could be by mouse hover, touch,
              keyboard, programmatically).
            </p>
          </section>
        ),
      },
      format: [
        '<Pie activeShape={<CustomActiveShape />} />',
        'https://recharts.github.io/examples/CustomActiveShapePieChart',
      ],
      examples: [
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
      ],
      deprecated: 'Use the `shape` prop to create each sector. `isActive` designates the "active" shape.',
    },
    {
      name: 'animationBegin',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies when the animation should begin, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 400,
    },
    {
      name: 'animationDuration',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Specifies the duration of animation, the unit of this option is ms.</p>
          </section>
        ),
      },
      defaultVal: 1500,
    },
    {
      name: 'animationEasing',
      type: '"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of easing function.</p>
          </section>
        ),
      },
      defaultVal: 'ease',
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      examples: [
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
      ],
    },
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'cornerRadius',
      type: 'number | string',
      isOptional: true,
      examples: [
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
      ],
    },
    {
      name: 'cx',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage
              of container width.
            </p>
          </section>
        ),
      },
      defaultVal: '50%',
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
      ],
    },
    {
      name: 'cy',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage
              of container height.
            </p>
          </section>
        ),
      },
      defaultVal: '50%',
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
      ],
    },
    { name: 'dangerouslySetInnerHTML', type: 'Object', isOptional: true },
    {
      name: 'data',
      type: 'ReadonlyArray<unknown>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The source data. Each element should be an object. The properties of each object represent the values of
              different data dimensions.
            </p>
            <p>
              Use the <code>dataKey</code> prop to specify which properties to use.
            </p>
          </section>
        ),
      },
      format: ["data={[{ name: 'a', value: 12 }]}", "data={[{ label: 'foo', measurements: [5, 12] }]}"],
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
        { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
        { name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false },
        { name: 'Pie Responsive Container', url: '/examples/PieResponsiveContainer/', isExternal: false },
      ],
    },
    {
      name: 'dataKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Decides how to extract the value of this Pie from the data:</p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the value of this Pie.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'value',
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
        { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
        { name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false },
        { name: 'Pie Responsive Container', url: '/examples/PieResponsiveContainer/', isExternal: false },
      ],
    },
    {
      name: 'endAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle, in degrees, at which the chart should end.</p>
          </section>
        ),
      },
      defaultVal: 360,
      examples: [
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
      ],
    },
    {
      name: 'hide',
      type: 'boolean',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Hides the whole graphical element when true.</p>
            <p>
              Hiding an element is different from removing it from the chart: Hidden graphical elements are still
              visible in Legend, and can be included in axis domain calculations, depending on{' '}
              <code>includeHidden</code> props of your XAxis/YAxis.
            </p>
          </section>
        ),
      },
      defaultVal: false,
    },
    { name: 'id', type: 'string', isOptional: true },
    {
      name: 'inactiveShape',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The shape of inactive sector.</p>
          </section>
        ),
      },
      deprecated: 'Use the `shape` prop to modify each sector.',
    },
    {
      name: 'innerRadius',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The inner radius of the sectors. If set a percentage, the final value is obtained by multiplying the
              percentage of maxRadius which is calculated by the width, height, cx, cy.
            </p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
        { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
        { name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false },
      ],
    },
    {
      name: 'isAnimationActive',
      type: '"auto" | false | true',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If set false, animation will be disabled. If set &quot;auto&quot;, the animation will be disabled in SSR
              and enabled in browser.
            </p>
          </section>
        ),
      },
      defaultVal: 'auto',
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
        { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
        { name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false },
      ],
    },
    {
      name: 'label',
      type: '(union of 6 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Renders one label for each pie sector. Options:</p>
            <ul>
              <li>
                <code>true</code>: renders default labels;
              </li>
              <li>
                <code>false</code>: no labels are rendered;
              </li>
              <li>
                <code>object</code> that has <code>position</code> prop: the props of LabelList component;
              </li>
              <li>
                <code>object</code> that does not have <code>position</code> prop: the props of a custom Pie label
                (similar to Label with position &quot;outside&quot;); this variant supports <code>labelLine</code>
              </li>
              <li>
                <code>ReactElement</code>: a custom label element;
              </li>
              <li>
                <code>function</code>: a render function of custom label.
              </li>
            </ul>
            <p>
              Also see the <code>labelLine</code> prop that draws a line connecting each label to the corresponding
              sector.
            </p>
          </section>
        ),
      },
      defaultVal: false,
      format: [
        '<Pie label={<CustomizedLabel />} />',
        'https://recharts.github.io/examples/PieChartWithCustomizedLabel',
      ],
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
        { name: 'Pie Responsive Container', url: '/examples/PieResponsiveContainer/', isExternal: false },
      ],
    },
    {
      name: 'labelLine',
      type: '(union of 5 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              If false set, label lines will not be drawn. If true set, label lines will be drawn which have the props
              calculated internally. If object set, label lines will be drawn which have the props merged by the
              internal calculated props and the option. If ReactElement set, the option can be the custom label line
              element. If set a function, the function will be called to render customized label line.
            </p>
          </section>
        ),
      },
      defaultVal: true,
      format: [
        '<Pie labelLine={<CustomizedLabelLine />} />',
        'https://recharts.github.io/examples/PieChartWithCustomizedLabel',
      ],
      examples: [
        { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
      ],
    },
    {
      name: 'legendType',
      type: '"circle" | "cross" | "diamond" | "line" | "none" | "plainline" | "rect" | "square" | "star" | "triangle" | "wye"',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The type of icon in legend. If set to &#39;none&#39;, no legend item will be rendered.</p>
          </section>
        ),
      },
      defaultVal: 'rect',
    },
    {
      name: 'maxRadius',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>the max radius of pie</p>
          </section>
        ),
      },
    },
    {
      name: 'minAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The minimum angle of each unzero data.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'nameKey',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              Name represents each sector in the tooltip, and legend. This allows you to extract the name from the data:
            </p>
            <ul>
              <li>
                <code>string</code>: the name of the field in the data object;
              </li>
              <li>
                <code>number</code>: the index of the field in the data;
              </li>
              <li>
                <code>function</code>: a function that receives the data object and returns the name.
              </li>
            </ul>
          </section>
        ),
      },
      defaultVal: 'name',
      examples: [{ name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false }],
    },
    {
      name: 'outerRadius',
      type: 'Function | number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The outer radius of the sectors. If set a percentage, the final value is obtained by multiplying the
              percentage of maxRadius which is calculated by the width, height, cx, cy. Function should return a string
              percentage or number.
            </p>
          </section>
        ),
      },
      defaultVal: '80%',
      examples: [
        { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
        { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
      ],
    },
    {
      name: 'paddingAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The angle between two sectors.</p>
          </section>
        ),
      },
      defaultVal: 0,
      format: ['<Pie paddingAngle={5} />', 'https://recharts.github.io/examples/PieChartWithPaddingAngle'],
      examples: [
        {
          name: 'Pie Chart with gap and rounded corners',
          url: '/examples/PieChartWithPaddingAngle/',
          isExternal: false,
        },
      ],
    },
    {
      name: 'rootTabIndex',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The tabindex of wrapper surrounding the cells.</p>
          </section>
        ),
      },
      defaultVal: 0,
    },
    {
      name: 'shape',
      type: '(union of 8 variants)',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The custom shape of a Pie Sector. Can also be used to render active sector by checking isActive.</p>
          </section>
        ),
      },
      examples: [{ name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false }],
    },
    {
      name: 'startAngle',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Angle in degrees from which the chart should start.</p>
          </section>
        ),
      },
      defaultVal: 0,
      examples: [
        { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
        { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
      ],
    },
    { name: 'tooltipType', type: '"none"', isOptional: true },
    { name: 'zIndex', type: 'number', isOptional: true, defaultVal: 100 },
    { name: 'onAbort', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    { name: 'onAbortCapture', type: 'AdaptChildReactEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationEnd',
      type: 'AdaptChildAnimationEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation end.</p>
          </section>
        ),
      },
    },
    { name: 'onAnimationEndCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIteration', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    { name: 'onAnimationIterationCapture', type: 'AdaptChildAnimationEventHandler<P, T>', isOptional: true },
    {
      name: 'onAnimationStart',
      type: 'AdaptChildAnimationEventHandler<P, T>',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The customized event handler of animation start.</p>
          </section>
        ),
      },
    },
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
            <p>The customized event handler of click on the sectors in this group.</p>
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
            <p>The customized event handler of mousedown on the sectors in this group.</p>
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
            <p>The customized event handler of mouseenter on the sectors in this group.</p>
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
            <p>The customized event handler of mouseleave on the sectors in this group.</p>
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
            <p>The customized event handler of mousemove on the sectors in this group.</p>
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
            <p>The customized event handler of mouseout on the sectors in this group.</p>
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
            <p>The customized event handler of mouseover on the sectors in this group.</p>
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
            <p>The customized event handler of mouseup on the sectors in this group.</p>
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
  links: [
    { name: 'Two Level Pie Chart', url: '/examples/TwoLevelPieChart/', isExternal: false },
    { name: 'Straight Angle Pie Chart', url: '/examples/StraightAnglePieChart/', isExternal: false },
    { name: 'Custom Active Shape Pie Chart', url: '/examples/CustomActiveShapePieChart/', isExternal: false },
    { name: 'Pie Chart With Customized Label', url: '/examples/PieChartWithCustomizedLabel/', isExternal: false },
    { name: 'Pie Chart with gap and rounded corners', url: '/examples/PieChartWithPaddingAngle/', isExternal: false },
    { name: 'Pie Chart With Needle', url: '/examples/PieChartWithNeedle/', isExternal: false },
    { name: 'Pie Chart in Grid', url: '/examples/PieChartInGrid/', isExternal: false },
    { name: 'Pie Chart with Gradient', url: '/examples/PieWithGradient/', isExternal: false },
    { name: 'Pie Responsive Container', url: '/examples/PieResponsiveContainer/', isExternal: false },
  ],
  parentComponents: ['PieChart', 'RadarChart', 'RadialBarChart'],
  childrenComponents: ['Cell', 'LabelList'],
};
