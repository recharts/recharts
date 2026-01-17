import { describe, test, expect } from 'vitest';
import { ProjectDocReader } from './readProject';
import { ExampleReader } from './readExamples';

describe('Documentation Examples Coverage', () => {
  const projectReader = new ProjectDocReader();
  const exampleReader = new ExampleReader();

  // Get all exports
  const allExports = projectReader.getPublicSymbolNames();
  const components = new Set(projectReader.getPublicComponentNames());

  /*
   * List of exports that currently do not have example usages.
   * We should aim to remove items from this list over time by adding examples to the docs.
   */
  const exportsThatNeedExamples: ReadonlyArray<string> = [
    'ActiveDotProps',
    'ActiveLabel',
    'Area',
    'AreaChart',
    'AreaProps',
    'AxisDomainItem',
    'AxisId',
    'AxisInterval',
    'AxisRange',
    'Bar',
    'BarChart',
    'BarStack',
    'BarStackProps',
    'Brush',
    'BrushProps',
    'CartesianAxis',
    'CartesianAxisProps',
    'CartesianGrid',
    'CartesianGridProps',
    'CartesianViewBox',
    'CellProps',
    'ChartOffset',
    'ComposedChart',
    'Coordinate',
    'Cross',
    'CrossProps',
    'Curve',
    'CurveProps',
    'CustomScaleDefinition',
    'Customized',
    'CustomizedProps',
    'DefaultLegendContent',
    'DefaultTooltipContent',
    'DefaultTooltipContentProps',
    'Dot',
    'DotItemDotProps',
    'DotProps',
    'ErrorBar',
    'ErrorBarProps',
    'Funnel',
    'FunnelChart',
    'FunnelProps',
    'FunnelTrapezoidItem',
    'Global',
    'IfOverflow',
    'Label',
    'LabelList',
    'LabelListEntry',
    'LabelListProps',
    'LabelListPropsWithPosition',
    'Layer',
    'LayerProps',
    'Legend',
    'LegendProps',
    'LegendType',
    'Line',
    'LineChart',
    'LineProps',
    'Margin',
    'NumberDomain',
    'Padding',
    'Pie',
    'PieChart',
    'PieLabel',
    'PieSectorShapeProps',
    'PieShape',
    'PlotArea',
    'PolarAngleAxis',
    'PolarAngleAxisProps',
    'PolarCoordinate',
    'PolarGrid',
    'PolarGridProps',
    'PolarRadiusAxis',
    'PolarRadiusAxisProps',
    'Polygon',
    'PolygonProps',
    'Radar',
    'RadarChart',
    'RadarProps',
    'RadialBar',
    'RadialBarChart',
    'RadialBarProps',
    'Rectangle',
    'RectangleProps',
    'ReferenceArea',
    'ReferenceAreaProps',
    'ReferenceDot',
    'ReferenceDotProps',
    'ReferenceLine',
    'ReferenceLineProps',
    'ReferenceLineSegment',
    'ResponsiveContainer',
    'ResponsiveContainerProps',
    'Sankey',
    'SankeyData',
    'SankeyLinkProps',
    'SankeyNode',
    'SankeyNodeOptions',
    'SankeyNodeProps',
    'SankeyProps',
    'Scatter',
    'ScatterChart',
    'ScatterProps',
    'Sector',
    'SectorProps',
    'SunburstChart',
    'SunburstData',
    'SunburstChartProps',
    'Surface',
    'SurfaceProps',
    'Symbols',
    'SymbolsProps',
    'Text',
    'TextProps',
    'Tooltip',
    'TooltipPayloadEntry',
    'TooltipProps',
    'Trapezoid',
    'TrapezoidProps',
    'Treemap',
    'TreemapContentType',
    'TreemapProps',
    'XAxis',
    'XAxisProps',
    'YAxis',
    'YAxisProps',
    'ZAxis',
    'ZAxisProps',
    'getNiceTickValues',
  ];

  describe.each(allExports.filter(name => !exportsThatNeedExamples.includes(name)))('Export: %s', exportName => {
    test('has at least one example usage', () => {
      const examples = exampleReader.getExamples(exportName);
      expect(examples.length, `No examples found for ${exportName}`).toBeGreaterThan(0);
    });

    if (components.has(exportName)) {
      const props = projectReader.getRechartsPropsOf(exportName);

      if (props.length > 0) {
        describe('Props', () => {
          test.each(props)('prop: %s has example usage', propName => {
            // Skip event handlers as they are often not demonstrated in static examples
            if (propName.startsWith('on')) {
              return;
            }
            const propExamples = exampleReader.getExamples(exportName, propName);
            expect(
              propExamples.length,
              `No examples found for prop ${propName} of component ${exportName}`,
            ).toBeGreaterThan(0);
          });
        });
      }
    }
  });
});
