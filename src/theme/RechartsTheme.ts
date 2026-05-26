import type { CSSProperties, SVGProps } from 'react';
import type { Props as AreaProps } from '../cartesian/Area';
import type { Props as BarProps } from '../cartesian/Bar';
import type { Props as BrushProps } from '../cartesian/Brush';
import type { Props as CartesianGridProps } from '../cartesian/CartesianGrid';
import type { Props as ErrorBarProps } from '../cartesian/ErrorBar';
import type { Props as FunnelProps } from '../cartesian/Funnel';
import type { Props as LineProps } from '../cartesian/Line';
import type { Props as ReferenceAreaProps } from '../cartesian/ReferenceArea';
import type { Props as ReferenceDotProps } from '../cartesian/ReferenceDot';
import type { Props as ReferenceLineProps } from '../cartesian/ReferenceLine';
import type { Props as ScatterProps } from '../cartesian/Scatter';
import type { Props as XAxisProps } from '../cartesian/XAxis';
import type { Props as YAxisProps } from '../cartesian/YAxis';
import type { Props as ZAxisProps } from '../cartesian/ZAxis';
import type { SunburstChartProps } from '../chart/SunburstChart';
import type { Props as SankeyProps } from '../chart/Sankey';
import type { Props as TreemapProps } from '../chart/Treemap';
import type { Props as DefaultLegendContentProps } from '../component/DefaultLegendContent';
import type { Props as DefaultTooltipContentProps } from '../component/DefaultTooltipContent';
import type { Props as LabelProps } from '../component/Label';
import type { Props as LabelListProps } from '../component/LabelList';
import type { Props as LegendProps } from '../component/Legend';
import type { Props as ResponsiveContainerProps } from '../component/ResponsiveContainer';
import type { Props as TextProps } from '../component/Text';
import type { TooltipProps } from '../component/Tooltip';
import type { Props as LayerProps } from '../container/Layer';
import type { Props as SurfaceProps } from '../container/Surface';
import type { Props as PieProps } from '../polar/Pie';
import type { Props as PolarAngleAxisProps } from '../polar/PolarAngleAxis';
import type { Props as PolarGridProps } from '../polar/PolarGrid';
import type { Props as PolarRadiusAxisProps } from '../polar/PolarRadiusAxis';
import type { Props as RadarProps } from '../polar/Radar';
import type { RadialBarProps } from '../polar/RadialBar';
import type { Props as CrossProps } from '../shape/Cross';
import type { Props as CurveProps } from '../shape/Curve';
import type { Props as DotProps } from '../shape/Dot';
import type { Props as PolygonProps } from '../shape/Polygon';
import type { Props as RectangleProps } from '../shape/Rectangle';
import type { Props as SectorProps } from '../shape/Sector';
import type { SymbolsProps } from '../shape/Symbols';
import type { Props as TrapezoidProps } from '../shape/Trapezoid';
import type { SVGPropsNoEvents } from '../util/svgPropertiesNoEvents';

type ThemePropKeys<TProps, TKeys extends PropertyKey> = Partial<Pick<TProps, Extract<keyof TProps, TKeys>>>;

type ThemePropBase<TProps> = Omit<TProps, 'ref' | 'children' | 'dangerouslySetInnerHTML'>;

/**
 * Many Recharts public props inherit SVG presentation attributes through
 * PresentationAttributesWithProps / PresentationAttributesAdaptChildEvent.
 *
 * Theme component overrides intentionally keep those inherited SVG props available,
 * even when the component does not re-declare them explicitly in its own interface.
 * This lets themes set properties like fill, stroke, fontSize, fontFamily,
 * pointerEvents, paintOrder, strokeDasharray, and data-* attributes without
 * maintaining a second SVG-specific whitelist.
 */
export type RechartsImplicitSvgTheme<TProps> = Partial<SVGPropsNoEvents<ThemePropBase<TProps>>>;

export type RechartsSvgComponentTheme<
  TProps,
  TExplicitKeys extends PropertyKey = never,
> = RechartsImplicitSvgTheme<TProps> & ThemePropKeys<TProps, TExplicitKeys>;

export type RechartsHtmlComponentTheme<TProps, TKeys extends PropertyKey = never> = ThemePropKeys<TProps, TKeys>;

type ColorValue = string;

export interface RechartsThemeColors {
  canvas?: ColorValue;
  surface?: ColorValue;
  text?: ColorValue;
  mutedText?: ColorValue;
  border?: ColorValue;
  grid?: ColorValue;
  axis?: ColorValue;
  tooltipCursor?: ColorValue;
}

export interface RechartsThemeTypography {
  fontFamily?: CSSProperties['fontFamily'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
}

export interface RechartsThemeStrokeWidths {
  axis?: number | string;
  grid?: number | string;
  line?: number | string;
  area?: number | string;
  bar?: number | string;
  scatter?: number | string;
  reference?: number | string;
  polarGrid?: number | string;
}

export interface RechartsThemeRadii {
  bar?: number | string | ReadonlyArray<number>;
  rectangle?: number | string | ReadonlyArray<number>;
  tooltip?: number | string;
  legend?: number | string;
  surface?: number | string;
}

export interface RechartsThemeShadows {
  tooltip?: CSSProperties['boxShadow'];
  legend?: CSSProperties['boxShadow'];
  surface?: CSSProperties['boxShadow'];
}

export type RechartsSeriesStyle = RechartsImplicitSvgTheme<SVGProps<SVGElement>>;

export interface RechartsThemeSeries {
  /**
   * Default palette for series that do not have an explicit keyed override.
   */
  palette?: ReadonlyArray<string>;
  /**
   * Stable identity-based series overrides. Keys should match the identity that
   * Recharts derives from coalesce(dataKey, name).
   */
  keyed?: Readonly<Record<string, RechartsSeriesStyle>>;
}

/**
 * Component overrides for public exports that expose distinct theming surfaces.
 *
 * Components such as LineChart, BarChart, AreaChart, ComposedChart, PieChart,
 * RadarChart, RadialBarChart, ScatterChart, and FunnelChart are intentionally
 * not listed here because their visual styling is driven by Surface,
 * ResponsiveContainer, axes, grid, tooltip, legend, and their graphical children.
 *
 * Likewise, utility exports such as Customized, Global, hooks, and scale helpers
 * do not currently define themeable visual props of their own.
 */
export interface RechartsThemeComponents {
  Surface?: RechartsSvgComponentTheme<SurfaceProps, 'className' | 'style'>;
  Layer?: RechartsSvgComponentTheme<LayerProps, 'className'>;
  ResponsiveContainer?: RechartsHtmlComponentTheme<ResponsiveContainerProps, 'className' | 'style'>;

  Tooltip?: RechartsHtmlComponentTheme<
    TooltipProps,
    'contentStyle' | 'itemStyle' | 'labelStyle' | 'wrapperStyle' | 'cursor'
  >;
  DefaultTooltipContent?: RechartsHtmlComponentTheme<
    DefaultTooltipContentProps,
    'contentStyle' | 'itemStyle' | 'labelStyle'
  >;
  Legend?: RechartsHtmlComponentTheme<LegendProps, 'wrapperStyle' | 'labelStyle' | 'inactiveColor' | 'iconSize'>;
  DefaultLegendContent?: RechartsHtmlComponentTheme<
    DefaultLegendContentProps,
    'className' | 'labelStyle' | 'inactiveColor' | 'iconSize'
  >;

  Text?: RechartsSvgComponentTheme<TextProps, 'className' | 'style'>;
  Label?: RechartsSvgComponentTheme<LabelProps, 'className' | 'label'>;
  LabelList?: RechartsSvgComponentTheme<LabelListProps, 'className' | 'label'>;
  // intentionally omitted because this component is deprecated and will be removed in next major version
  // Cell?: RechartsSvgComponentTheme<CellProps>;

  Sector?: RechartsSvgComponentTheme<SectorProps>;
  Curve?: RechartsSvgComponentTheme<CurveProps, 'className'>;
  Rectangle?: RechartsSvgComponentTheme<RectangleProps, 'className' | 'radius'>;
  Polygon?: RechartsSvgComponentTheme<PolygonProps, 'className'>;
  Dot?: RechartsSvgComponentTheme<DotProps, 'className'>;
  Cross?: RechartsSvgComponentTheme<CrossProps, 'className'>;
  Symbols?: RechartsSvgComponentTheme<SymbolsProps, 'className'>;
  Trapezoid?: RechartsSvgComponentTheme<TrapezoidProps, 'className'>;

  // intentionally omitted because this component is deprecated and will be removed in next major version
  // CartesianAxis?: RechartsSvgComponentTheme<
  //   CartesianAxisProps,
  //   'className' | 'axisLine' | 'tickLine' | 'tick' | 'tickTextProps' | 'label' | 'fontSize' | 'letterSpacing'
  // >;
  XAxis?: RechartsSvgComponentTheme<
    XAxisProps,
    'className' | 'axisLine' | 'tickLine' | 'tick' | 'tickTextProps' | 'label' | 'fontSize' | 'letterSpacing'
  >;
  YAxis?: RechartsSvgComponentTheme<
    YAxisProps,
    'className' | 'axisLine' | 'tickLine' | 'tick' | 'tickTextProps' | 'label' | 'fontSize' | 'letterSpacing'
  >;
  ZAxis?: RechartsHtmlComponentTheme<ZAxisProps, 'className'>;
  CartesianGrid?: RechartsSvgComponentTheme<CartesianGridProps, 'className' | 'horizontalFill' | 'verticalFill'>;
  Brush?: RechartsSvgComponentTheme<BrushProps, 'className'>;
  ReferenceLine?: RechartsSvgComponentTheme<ReferenceLineProps, 'className' | 'label' | 'shape'>;
  ReferenceDot?: RechartsSvgComponentTheme<ReferenceDotProps, 'className' | 'label' | 'shape'>;
  ReferenceArea?: RechartsSvgComponentTheme<ReferenceAreaProps, 'className' | 'label'>;
  ErrorBar?: RechartsSvgComponentTheme<ErrorBarProps, 'className'>;

  Line?: RechartsSvgComponentTheme<
    LineProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  Area?: RechartsSvgComponentTheme<
    AreaProps<any, any>,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  Bar?: RechartsSvgComponentTheme<
    BarProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  Scatter?: RechartsSvgComponentTheme<
    ScatterProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  Funnel?: RechartsSvgComponentTheme<
    FunnelProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;

  PolarGrid?: RechartsSvgComponentTheme<PolarGridProps, 'className'>;
  PolarAngleAxis?: RechartsSvgComponentTheme<
    PolarAngleAxisProps,
    'className' | 'axisLine' | 'tickLine' | 'tick' | 'tickTextProps' | 'label' | 'fontSize' | 'letterSpacing'
  >;
  PolarRadiusAxis?: RechartsSvgComponentTheme<
    PolarRadiusAxisProps,
    'className' | 'axisLine' | 'tickLine' | 'tick' | 'tickTextProps' | 'label' | 'fontSize' | 'letterSpacing'
  >;
  Pie?: RechartsSvgComponentTheme<
    PieProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  Radar?: RechartsSvgComponentTheme<
    RadarProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;
  RadialBar?: RechartsSvgComponentTheme<
    RadialBarProps,
    | 'className'
    | 'label'
    | 'shape'
    | 'activeShape'
    | 'activeDot'
    | 'dot'
    | 'background'
    | 'radius'
    | 'line'
    | 'lineType'
    | 'legendType'
  >;

  Treemap?: RechartsHtmlComponentTheme<TreemapProps, 'className' | 'style' | 'fill' | 'stroke' | 'colorPanel'>;
  Sankey?: RechartsSvgComponentTheme<SankeyProps, 'className' | 'style' | 'node' | 'link'>;
  SunburstChart?: RechartsHtmlComponentTheme<SunburstChartProps, 'style' | 'fill' | 'stroke' | 'textOptions'>;
}

export interface RechartsTheme {
  meta?: {
    name?: string;
    mode?: string;
  };
  colors?: RechartsThemeColors;
  typography?: RechartsThemeTypography;
  strokeWidths?: RechartsThemeStrokeWidths;
  radii?: RechartsThemeRadii;
  shadows?: RechartsThemeShadows;
  series?: RechartsThemeSeries;
  components?: RechartsThemeComponents;
  custom?: Readonly<Record<string, unknown>>;
}
