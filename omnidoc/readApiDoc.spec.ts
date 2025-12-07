import { describe, it, expect } from 'vitest';
import { ApiDocReader } from './readApiDoc';

describe('readApiDoc', () => {
  const reader = new ApiDocReader();
  it('should identify all exported symbols', () => {
    expect(reader.getPublicSymbolNames()).toMatchInlineSnapshot(`
      [
        "AreaChart",
        "BarChart",
        "LineChart",
        "ComposedChart",
        "PieChart",
        "RadarChart",
        "ScatterChart",
        "RadialBarChart",
        "FunnelChart",
        "Sankey",
        "Treemap",
        "Area",
        "Bar",
        "BarStack",
        "Line",
        "Scatter",
        "XAxis",
        "YAxis",
        "ZAxis",
        "Brush",
        "CartesianAxis",
        "CartesianGrid",
        "Funnel",
        "ResponsiveContainer",
        "Legend",
        "Tooltip",
        "Cell",
        "Text",
        "Label",
        "LabelList",
        "Customized",
        "Pie",
        "RadialBar",
        "Radar",
        "PolarAngleAxis",
        "PolarGrid",
        "PolarRadiusAxis",
        "ReferenceLine",
        "ReferenceDot",
        "ReferenceArea",
        "ErrorBar",
        "Cross",
        "Curve",
        "Dot",
        "Polygon",
        "Rectangle",
        "Sector",
        "Trapezoid",
      ]
    `);
  });

  it('should return props', () => {
    expect(reader.getRechartsPropsOf('ReferenceLine')).toMatchInlineSnapshot(`
      [
        "xAxisId",
        "yAxisId",
        "x",
        "y",
        "ifOverflow",
        "label",
        "strokeWidth",
        "segment",
      ]
    `);
  });

  it('should return null when SVG parent info not available in API docs', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe(null);
  });

  it('should return empty array for unknown component props', () => {
    expect(reader.getRechartsPropsOf('UnknownComponent')).toEqual([]);
  });

  it('should get default value of a prop', () => {
    expect(reader.getDefaultValueOf('ReferenceLine', 'strokeWidth')).toEqual({ type: 'known', value: 1 });
  });

  it('should get comment of known prop', () => {
    const comment = reader.getCommentOf('ReferenceLine', 'ifOverflow');
    expect(comment).toBeTruthy();
    expect(typeof comment).toBe('string');
    expect(comment).toMatchInlineSnapshot(`
      "Defines how to draw the reference line if it falls partly outside the canvas.
                If set to 'discard', the reference line will not be drawn at all.
                If set to 'hidden', the reference line will be clipped to the canvas.
                If set to 'visible', the reference line will be drawn completely.
                If set to 'extendDomain', the domain of the overflown axis will be extended such that the reference line fits into the canvas."
    `);
  });

  it('should read Area onAnimationStart comment', () => {
    const onAnimationStartMeta = reader.getCommentOf('Area', 'onAnimationStart');
    expect(onAnimationStartMeta).toBe('The customized event handler of animation start');
  });

  it('should return undefined for comment of unknown component', () => {
    expect(reader.getCommentOf('UnknownComponent', 'someProp')).toBe(undefined);
  });

  it('should return undefined for comment of unknown prop', () => {
    expect(reader.getCommentOf('ReferenceLine', 'unknownProp')).toBe(undefined);
  });
});
