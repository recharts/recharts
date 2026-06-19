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
    'AxisDomainItem',
    'AxisId',
    'AxisRange',
    'BarProps',
    'BarStackProps',
    'BaseTickContentProps',
    'BrushProps',
    'CartesianAxis',
    'CartesianAxisProps',
    'CartesianGridProps',
    'CartesianViewBox',
    'Cell',
    'CellProps',
    'ChartOffset',
    'Coordinate',
    'Cross',
    'CrossProps',
    'CurveProps',
    'CustomScaleDefinition',
    'Customized',
    'CustomizedProps',
    'DefaultTooltipContentProps',
    'Dot',
    'DotProps',
    'ErrorBarProps',
    'Funnel',
    'FunnelChart',
    'FunnelProps',
    'FunnelTrapezoidItem',
    'Global',
    'IfOverflow',
    'LabelListEntry',
    'LabelListProps',
    'LabelListPropsWithPosition',
    'Layer',
    'LayerProps',
    'LegendProps',
    'LegendType',
    'LineProps',
    'Margin',
    'NumberDomain',
    'Padding',
    'PieLabel',
    'PieShape',
    'PlotArea',
    'PolarAngleAxisProps',
    'PolarCoordinate',
    'PolarGridProps',
    'PolarRadiusAxisProps',
    'Polygon',
    'PolygonProps',
    'RadarProps',
    'InternalRadarProps',
    'RadialBarDataItem',
    'RadialBarProps',
    'RectangleProps',
    'ReferenceAreaProps',
    'ReferenceDot',
    'ReferenceDotProps',
    'ReferenceLineProps',
    'ReferenceLineSegment',
    'ResponsiveContainerProps',
    'Sankey',
    'SankeyData',
    'SankeyElementType',
    'SankeyLinkProps',
    'SankeyNode',
    'SankeyNodeOptions',
    'SankeyNodeProps',
    'SankeyProps',
    'ScatterProps',
    'ScatterPointNode',
    'SectorProps',
    'SunburstChartProps',
    'Surface',
    'SurfaceProps',
    'SymbolsProps',
    'TextProps',
    'TickItem',
    'TooltipPayloadEntry',
    'TooltipProps',
    'Trapezoid',
    'TrapezoidProps',
    'TreemapContentType',
    'TreemapProps',
    'XAxisProps',
    'YAxisProps',
    'ZAxisProps',
    'getNiceTickValues',
    'TextVerticalAnchor',
    'XAxisOrientation',
    'YAxisOrientation',
    'XAxisPadding',
    'YAxisPadding',
    'NiceTicks',
    'CartesianTickItem',
    'TextAnchor',
    'TooltipItemSorter',
    'TooltipPayload',
    'MousePointer',
    'TouchPointer',
    'SVGMousePointer',
    'SVGTouchPointer',
    'HTMLMousePointer',
    'HTMLTouchPointer',
    'BandPosition',
    'CartesianDataPoint',
    'ScaleFunction',
    'useCartesianScale',
    'useXAxisInverseScale',
    'useYAxisInverseScale',
    'useXAxisScale',
    'createHorizontalChart',
    'createVerticalChart',
    'createCentricChart',
    'createRadialChart',
    'TypedHorizontalChartContext',
    'TypedVerticalChartContext',
    'TypedCentricChartContext',
    'TypedRadialChartContext',
    'NoRadial',
    'NoFunnel',
    'NoCentric',
    'NiceTicksAlgorithm',
    'EasingInput',
    'InverseScaleFunction',
    'LayoutType',
    'useXAxisInverseDataSnapScale',
    'useXAxisInverseTickSnapScale',
    'useYAxisInverseDataSnapScale',
    'useYAxisInverseTickSnapScale',
    'ZIndexLayer',
    'AnimationMatchByProp',
    'AnimationStatus',
    'LineDrawShape',
    'LinePointItem',
    'matchAppend',
  ];

  /*
   * Set of exports that do have at least one example, but some of its props do not.
   */
  const exportsThatNeedPropExamples: ReadonlySet<string> = new Set([
    'Area',
    'AreaRevealShape',
    'AreaChart',
    'Bar',
    'BarChart',
    'BarStack',
    'Brush',
    'CartesianGrid',
    'ComposedChart',
    'Curve',
    'DefaultLegendContent',
    'DefaultTooltipContent',
    'ErrorBar',
    'Label',
    'LabelList',
    'Legend',
    'Line',
    'LineChart',
    'Pie',
    'PieChart',
    'PolarAngleAxis',
    'PolarGrid',
    'PolarRadiusAxis',
    'Radar',
    'RadarChart',
    'RadialBar',
    'RadialBarChart',
    'Rectangle',
    'ReferenceArea',
    'ReferenceLine',
    'ResponsiveContainer',
    'Scatter',
    'ScatterChart',
    'Sector',
    'SunburstChart',
    'Symbols',
    'Text',
    'Tooltip',
    'Treemap',
    'XAxis',
    'YAxis',
    'ZAxis',
  ]);

  describe.each(exportsThatNeedExamples)('Excluded export: %s', exportName => {
    test('still has no example usage', () => {
      const examples = exampleReader.getExamples(exportName);
      expect(examples.length, `${exportName} is excluded but already has examples`).toBe(0);
    });
  });

  describe.each(Array.from(exportsThatNeedPropExamples))('Excluded prop example: %s', exportName => {
    test('has a component example', () => {
      const examples = exampleReader.getExamples(exportName);
      expect(examples.length, `No examples found for ${exportName}`).toBeGreaterThan(0);
    });

    test('still has no prop example usage', () => {
      if (components.has(exportName)) {
        const props = projectReader.getRechartsPropsOf(exportName);

        if (props.length <= 0) {
          throw new Error(
            `Export ${exportName} has no props, so it should not be in the exportsThatNeedPropExamples list`,
          );
        }

        const uncoveredProps = props.filter(propName => {
          // Skip event handlers as they are often not demonstrated in static examples
          if (propName.startsWith('on')) {
            return false;
          }
          const propExamples = exampleReader.getExamples(exportName, propName);
          if (propExamples.length === 0) {
            // no examples found for this prop, so this exclusion is still fresh
            return true;
          }
          // this prop has an example therefore is not uncovered
          return false;
        });
        expect(
          uncoveredProps,
          `All props of component ${exportName} have examples available, you should remove this from the exclusion list`,
          // if you want to see which props are not covered - then remove the `.not` and the test suite will tell you
        ).not.toEqual([]);
      }
    });
  });

  describe.each(allExports.filter(name => !exportsThatNeedExamples.includes(name)))('Export: %s', exportName => {
    test('has at least one example usage', () => {
      const examples = exampleReader.getExamples(exportName);
      expect(examples.length, `No examples found for ${exportName}`).toBeGreaterThan(0);
    });

    if (components.has(exportName)) {
      const props = projectReader.getRechartsPropsOf(exportName);

      if (props.length > 0 && !exportsThatNeedPropExamples.has(exportName)) {
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
