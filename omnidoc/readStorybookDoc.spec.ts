import { describe, it, expect } from 'vitest';
import { StorybookDocReader } from './readStorybookDoc';

describe('readStorybookDoc', () => {
  const reader = new StorybookDocReader();

  it('should identify all exported symbols', () => {
    const symbols = reader.getPublicSymbolNames();
    expect(symbols.length).toBeGreaterThan(0);
    expect(symbols).toMatchInlineSnapshot(`
      [
        "Area",
        "AreaChart",
        "Bar",
        "BarChart",
        "Brush",
        "CartesianAxis",
        "CartesianGrid",
        "Cell",
        "ComposedChart",
        "Cross",
        "Curve",
        "Dot",
        "ErrorBar",
        "Funnel",
        "FunnelChart",
        "Label",
        "LabelList",
        "Legend",
        "Line",
        "LineChart",
        "Pie",
        "PieChart",
        "PolarAngleAxis",
        "PolarGrid",
        "PolarRadiusAxis",
        "Polygon",
        "Radar",
        "RadarChart",
        "RadialBar",
        "RadialBarChart",
        "Rectangle",
        "ReferenceArea",
        "ReferenceDot",
        "ReferenceLine",
        "Sankey",
        "Scatter",
        "ScatterChart",
        "Sector",
        "SunburstChart",
        "Text",
        "Tooltip",
        "Trapezoid",
        "Treemap",
        "XAxis",
        "YAxis",
        "ZAxis",
        "useActiveTooltipDataPoints",
      ]
    `);
  });

  it('should return props for ReferenceLine', () => {
    expect(reader.getPropsOf('ReferenceLine')).toMatchInlineSnapshot(`
      [
        "clipPathId",
        "dangerouslySetInnerHTML",
        "ifOverflow",
        "label",
        "position",
        "segment",
        "shape",
        "stroke",
        "strokeDasharray",
        "strokeWidth",
        "viewBox",
        "x",
        "xAxis",
        "xAxisId",
        "y",
        "yAxis",
        "yAxisId",
      ]
    `);
  });

  it('should return null when SVG parent info not available', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe(null);
  });

  it('should return empty array for unknown component props', () => {
    expect(reader.getPropsOf('UnknownComponent')).toEqual([]);
  });

  it('should return props for known components', () => {
    const referenceLineProps = reader.getPropsOf('ReferenceLine');
    expect(referenceLineProps.length).toBeGreaterThan(0);
    expect(referenceLineProps).toContain('x');
    expect(referenceLineProps).toContain('y');
    expect(referenceLineProps).toContain('label');
  });

  it('should return all chart components', () => {
    const names = reader.getPublicSymbolNames();
    expect(names).toContain('AreaChart');
    expect(names).toContain('BarChart');
    expect(names).toContain('LineChart');
    expect(names).toContain('PieChart');
    expect(names).toContain('RadarChart');
  });

  it('should return props for different components', () => {
    expect(reader.getPropsOf('AreaChart').length).toBeGreaterThan(0);
    expect(reader.getPropsOf('BarChart').length).toBeGreaterThan(0);
    expect(reader.getPropsOf('LineChart').length).toBeGreaterThan(0);
  });

  it('should return props for Area component', () => {
    const areaProps = reader.getPropsOf('Area');
    expect(areaProps.length).toBeGreaterThan(0);
    expect(areaProps).toMatchInlineSnapshot(`
      [
        "activeDot",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "baseLine",
        "baseValue",
        "connectNulls",
        "data",
        "dataKey",
        "dot",
        "fill",
        "hide",
        "id",
        "isAnimationActive",
        "isRange",
        "label",
        "legendType",
        "name",
        "stackId",
        "stroke",
        "strokeDasharray",
        "strokeOpacity",
        "strokeWidth",
        "tooltipType",
        "type",
        "unit",
        "xAxisId",
        "yAxisId",
      ]
    `);
  });

  it('should return props for Bar component', () => {
    const barProps = reader.getPropsOf('Bar');
    expect(barProps.length).toBeGreaterThan(0);
  });

  it('should return null for SVG parent of any component', () => {
    expect(reader.getSVGParentOf('AreaChart')).toBe(null);
    expect(reader.getSVGParentOf('Bar')).toBe(null);
    expect(reader.getSVGParentOf('UnknownComponent')).toBe(null);
  });

  it('should handle components in subdirectories', () => {
    const names = reader.getPublicSymbolNames();
    // Components in cartesian/
    expect(names).toContain('XAxis');
    expect(names).toContain('YAxis');
    // Components in polar/
    expect(names).toContain('Pie');
    expect(names).toContain('Radar');
    // Components in shapes/
    expect(names).toContain('Rectangle');
    expect(names).toContain('Sector');
  });

  it('should return sorted component names', () => {
    const names = reader.getPublicSymbolNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

  it('should return sorted prop names', () => {
    const props = reader.getPropsOf('ReferenceLine');
    const sorted = [...props].sort();
    expect(props).toEqual(sorted);
  });

  it('should handle ResponsiveContainer - which has no argTypes', () => {
    const props = reader.getPropsOf('ResponsiveContainer');
    expect(props.length).toBe(0);
  });
});
