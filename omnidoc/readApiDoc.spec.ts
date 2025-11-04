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
    expect(reader.getPropsOf('ReferenceLine')).toMatchInlineSnapshot(`
      [
        "xAxisId",
        "yAxisId",
        "x",
        "y",
        "alwaysShow",
        "ifOverflow",
        "viewBox",
        "xAxis",
        "yAxis",
        "label",
        "isFront",
        "strokeWidth",
        "segment",
      ]
    `);
  });

  it('should return null when SVG parent info not available in API docs', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe(null);
  });

  it('should return empty array for unknown component props', () => {
    expect(reader.getPropsOf('UnknownComponent')).toEqual([]);
  });
});
