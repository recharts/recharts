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

  it('should return null when SVG parent info not available', () => {
    expect(reader.getSVGParentOf('ReferenceLine')).toBe(null);
  });

  it('should return empty array for unknown component props', () => {
    expect(reader.getRechartsPropsOf('UnknownComponent')).toEqual([]);
  });

  it('should return props for known components', () => {
    const referenceLineProps = reader.getRechartsPropsOf('ReferenceLine');
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
    expect(reader.getRechartsPropsOf('AreaChart').length).toBeGreaterThan(0);
    expect(reader.getRechartsPropsOf('BarChart').length).toBeGreaterThan(0);
    expect(reader.getRechartsPropsOf('LineChart').length).toBeGreaterThan(0);
  });

  it('should return props for Area component', () => {
    const areaProps = reader.getRechartsPropsOf('Area');
    expect(areaProps.length).toBeGreaterThan(0);
    expect(areaProps).toContain('activeDot');
    expect(areaProps).toContain('animationBegin');
    expect(areaProps).toContain('data');
    expect(areaProps).toContain('dataKey');
    expect(areaProps).toContain('stackId');
    expect(areaProps).toContain('xAxisId');
  });

  it('should return props for Bar component', () => {
    const barProps = reader.getRechartsPropsOf('Bar');
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
    const props = reader.getRechartsPropsOf('ReferenceLine');
    const sorted = [...props].sort();
    expect(props).toEqual(sorted);
  });

  it('should handle ResponsiveContainer - which has no argTypes', () => {
    const props = reader.getRechartsPropsOf('ResponsiveContainer');
    expect(props.length).toBe(0);
  });

  it('should get default value of a prop', () => {
    expect(reader.getDefaultValueOf('ReferenceLine', 'strokeWidth')).toEqual({ type: 'known', value: 1 });
  });

  it('should get integer default value', () => {
    expect(reader.getDefaultValueOf('Area', 'animationBegin')).toEqual({ type: 'known', value: 0 });
  });

  it('should return undefined for comment of unknown component', () => {
    expect(reader.getCommentOf('UnknownComponent', 'someProp')).toBe(undefined);
  });

  it('should return undefined for comment of unknown prop', () => {
    expect(reader.getCommentOf('ReferenceLine', 'unknownProp')).toBe(undefined);
  });
});
