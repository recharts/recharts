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
        "DefaultLegendContent",
        "Tooltip",
        "DefaultTooltipContent",
        "Cell",
        "Text",
        "Label",
        "LabelList",
        "Customized",
        "Layer",
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
        "ZIndexLayer",
      ]
    `);
  });

  it('should return props', () => {
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
    const comment = reader.getCommentOf('ReferenceLine', 'xAxisId');
    expect(comment).toBeTruthy();
    expect(typeof comment).toBe('object');
  });

  it('should return undefined for comment of unknown component', () => {
    expect(reader.getCommentOf('UnknownComponent', 'someProp')).toBe(undefined);
  });

  it('should return undefined for comment of unknown prop', () => {
    expect(reader.getCommentOf('ReferenceLine', 'unknownProp')).toBe(undefined);
  });
});
