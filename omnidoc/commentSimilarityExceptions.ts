/**
 * Some props are legit different across components due to their unique context/use case.
 * We can list those exceptions here to group them together and run similarity checks only within the group.
 */
export type CommentSimilarityGroup = {
  /**
   * All components in this array are grouped together for prop comment similarity checks.
   * The test will only compare comments among these components for the specified props.
   * Use '*' to indicate all components.
   */
  components: ReadonlyArray<string>;
  props: ReadonlyArray<string>;
  /**
   * Explain why these components/props should have different JSDoc comments than the rest.
   */
  reason: string;
};

/**
 * List of known exceptions where prop comments are intentionally different.
 * This list is permanent.
 * Only add new items here if there is a semantically valid reason to have different comments.
 * Do not use this as a workaround for inconsistent documentation!
 */
export const commentSimilarityExceptions: ReadonlyArray<CommentSimilarityGroup> = [
  {
    components: ['*'],
    props: ['children'],
    reason: 'Children comments vary widely based on component purpose',
  },
  {
    components: ['Area', 'Bar', 'Line', 'Scatter', 'Radar', 'RadialBar', 'Pie', 'Funnel'],
    props: ['hide'],
    reason: 'Graphical elements hide has extra details on domain calculation',
  },
  {
    components: ['Area', 'Bar', 'Line', 'Scatter', 'Radar', 'RadialBar'],
    props: ['label'],
    reason:
      'label in graphical elements describes multiple labels, unlike axes and reference elements which describe a single label.',
  },
  {
    components: ['Pie'],
    props: ['label'],
    reason: 'Pie has a custom label implementation independent from other graphical elements',
  },
  {
    components: ['CartesianGrid'],
    props: ['width', 'height'],
    reason: 'CartesianGrid dimensions default to chart dimensions, unlike other components',
  },
  {
    components: ['YAxis'],
    props: ['width'],
    reason: 'YAxis width allows "auto" value, unlike other components',
  },
  {
    components: ['Brush'],
    props: ['width'],
    reason: 'Brush width defaults to chart width, unlike other components',
  },
  {
    components: ['ErrorBar'],
    props: ['width'],
    reason: 'ErrorBar width describes the width of the serifs, not the whole component',
  },
  {
    components: ['Legend'],
    props: ['width', 'height'],
    reason: 'Legend accepts arbitrary CSS size values, unlike other components',
  },
  {
    components: ['Brush', 'CartesianGrid', 'Cross', 'XAxis', 'YAxis', 'Rectangle', 'ErrorBar', 'Trapezoid'],
    props: ['width', 'height'],
    reason: 'These components only allow number pixel values for width/height',
  },
  {
    components: ['Dot', 'Cross'],
    props: ['x', 'y'],
    reason: `This coordinate defines the center,
      which is different from other components where x/y coordinates define the top-left corner.
      This prop should better be named "cx", "cy" instead.`,
  },
  {
    components: ['ReferenceDot', 'ReferenceLine'],
    props: ['x', 'y'],
    reason: `Reference positions are defined using domain values,
      unlike most other components where x/y are pixel coordinates.`,
  },
  {
    components: ['Rectangle', 'Trapezoid'],
    props: ['x', 'y'],
    reason: 'x and y in Rectangle are required, unlike Brush where they are calculated internally.',
  },
  {
    components: ['Curve'],
    props: ['layout'],
    reason: 'Curve layout means something else than the chart layout.',
  },
  {
    components: ['DefaultLegendContent', 'Legend'],
    props: ['layout'],
    reason: 'Legend layout means something else than the chart layout.',
  },
  {
    components: ['BarStack'],
    props: ['stackId'],
    reason: 'This sets stackId for all Bars inside the BarStack and so it has different description.',
  },
  {
    components: ['BarStack'],
    props: ['radius'],
    reason: 'Applies radius to all Bars inside the BarStack, different context than usual',
  },
  {
    components: ['Label', 'LabelList', 'ResponsiveContainer'],
    props: ['id'],
    reason: 'These ids are not generated automatically, unlike most other components',
  },
  {
    components: ['LabelList'],
    props: ['dataKey'],
    reason: 'LabelList dataKey has special complications compared to other components',
  },
  {
    components: ['Text'],
    props: ['width'],
    reason: 'has extra details on automated wrapping',
  },
  {
    components: ['ErrorBar'],
    props: ['dataKey'],
    reason: 'has extra information about error bar data structure',
  },
  {
    components: ['Scatter'],
    props: ['shape'],
    // https://github.com/recharts/recharts/issues/1753
    reason: 'unlike other graphical items, Scatter shape allows a string option for predefined shapes',
  },
  {
    components: ['Dot', 'SunburstChart', 'Sector'],
    props: ['cx', 'cy'],
    reason: 'These components do not support percentages unlike other components',
  },
  {
    components: ['PolarAngleAxis', 'PolarGrid'],
    props: ['cx', 'cy'],
    reason: 'In these components, cx/cy are optional and calculated from the chart context',
  },
  {
    components: ['Pie'],
    props: ['shape'],
    reason: 'Pie shape receives activeIndex prop but other components do not',
  },
  {
    components: ['Label'],
    props: ['content'],
    reason: 'In LabelList, content is called N times. In Label, content is called once.',
  },
  {
    components: ['Tooltip', 'Legend'],
    props: ['content'],
    reason: 'Tooltip and Legend have HTML content, unlike other components which have SVG content.',
  },
  {
    components: ['Tooltip'],
    props: ['formatter'],
    reason: 'Tooltip formatter allows returning arrays',
  },
  {
    components: ['Tooltip'],
    props: ['itemSorter'],
    reason:
      'Tooltip itemSorter has different default behavior than Legend itemSorter (like why? these should be consistent omg)',
  },
  {
    components: ['Tooltip'],
    props: ['includeHidden'],
    reason: 'Tooltip includeHidden is doing something different than includeHidden on the axes',
  },
  {
    components: ['Tooltip'],
    props: ['offset', 'position'],
    reason: 'Tooltip position uses the same prop names but works differently than other components',
  },
  {
    components: ['Legend', 'DefaultLegendContent'],
    props: ['formatter'],
    reason: 'DefaultLegendContent formatter requires HTML context, unlike other components which use SVG',
  },
  {
    components: ['XAxis', 'YAxis', 'ZAxis', 'PolarAngleAxis', 'PolarRadiusAxis'],
    props: ['type'],
    reason: '"type" in axes means categorical/numerical, unlike curves where it means line shape',
  },
  {
    components: ['Curve', 'Area', 'Line'],
    props: ['type'],
    reason: '"type" in curves means shape of the line, unlike axes where it means categorical/numerical',
  },
  {
    components: ['PolarAngleAxis', 'PolarRadiusAxis'],
    props: ['radius'],
    reason:
      'Radius in polar charts means radius from center, unlike cartesian context where it means radius of the corner',
  },
  {
    components: ['PolarGrid'],
    props: ['innerRadius', 'outerRadius'],
    reason: 'Unlike other components, this can not be a percentage string',
  },
  {
    components: ['PolarRadiusAxis'],
    props: ['angle'],
    reason:
      'PolarRadiusAxis angle means rotation of the whole axis, unlike other components where it means rotation of text',
  },
  {
    components: ['PolarAngleAxis'],
    props: ['ticks'],
    reason: 'PolarAngleAxis ticks are different type for some reason, unlike other axis components',
  },
  {
    components: ['PolarRadiusAxis', 'PolarAngleAxis', 'XAxis', 'YAxis', 'ZAxis'],
    props: ['label'],
    reason: 'Axis label renders one element, graphical items label render one per data point',
  },
  {
    components: ['PolarRadiusAxis', 'PolarAngleAxis', 'XAxis', 'YAxis', 'ZAxis'],
    props: ['name'],
    reason: 'name does similar thing but from different point of view in axes vs graphical items',
  },
  {
    components: ['XAxis'],
    props: ['xAxisId'],
    reason: 'Axis ID describes the axis itself, not a relation to other components',
  },
  {
    components: ['YAxis'],
    props: ['yAxisId'],
    reason: 'Axis ID describes the axis itself, not a relation to other components',
  },
  {
    components: ['ZAxis'],
    props: ['zAxisId'],
    reason: 'Axis ID describes the axis itself, not a relation to other components',
  },
  {
    components: ['PolarAngleAxis'],
    props: ['axisLine'],
    reason: 'Unlike other axes, PolarAngleAxis.axisLine does not accept a boolean value',
  },
  {
    components: ['ReferenceLine'],
    props: ['position'],
    reason: `ReferenceLine.position describes position relative to the band category,
      unlike other components where position describes placement in the chart's coordinate system.`,
  },
  { components: ['Text'], props: ['style'], reason: 'Text has special instruction for text wrapping' },
  {
    components: ['Sankey'],
    props: ['data', 'dataKey', 'align', 'verticalAlign'],
    reason: 'Sankey is doing its own thing',
  },
  {
    components: ['Sector'],
    props: ['startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
    reason:
      'Sector props describe one shape, unlike chart components and Pie where the same prop describes multiple sectors',
  },
];
