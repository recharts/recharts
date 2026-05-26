import * as React from 'react';
import { ReactNode, createContext, useContext, useMemo } from 'react';
import type { RechartsSeriesStyle, RechartsTheme, RechartsThemeComponents } from './RechartsTheme';
import { legacyTheme } from './builtinThemes';
import { mergeThemeProps } from './mergeThemeProps';

export const legacyRechartsTheme: RechartsTheme = legacyTheme;

const RechartsThemeContext = createContext<RechartsTheme>(legacyTheme);

function mergeComponentThemes(
  base: RechartsThemeComponents | undefined,
  override: RechartsThemeComponents | undefined,
): RechartsThemeComponents | undefined {
  if (base == null) {
    return override;
  }
  if (override == null) {
    return base;
  }

  return {
    Surface: mergeThemeProps(base.Surface, override.Surface),
    Layer: mergeThemeProps(base.Layer, override.Layer),
    ResponsiveContainer: mergeThemeProps(base.ResponsiveContainer, override.ResponsiveContainer),
    Tooltip: mergeThemeProps(base.Tooltip, override.Tooltip),
    DefaultTooltipContent: mergeThemeProps(base.DefaultTooltipContent, override.DefaultTooltipContent),
    Legend: mergeThemeProps(base.Legend, override.Legend),
    DefaultLegendContent: mergeThemeProps(base.DefaultLegendContent, override.DefaultLegendContent),
    Text: mergeThemeProps(base.Text, override.Text),
    Label: mergeThemeProps(base.Label, override.Label),
    LabelList: mergeThemeProps(base.LabelList, override.LabelList),
    Sector: mergeThemeProps(base.Sector, override.Sector),
    Curve: mergeThemeProps(base.Curve, override.Curve),
    Rectangle: mergeThemeProps(base.Rectangle, override.Rectangle),
    Polygon: mergeThemeProps(base.Polygon, override.Polygon),
    Dot: mergeThemeProps(base.Dot, override.Dot),
    Cross: mergeThemeProps(base.Cross, override.Cross),
    Symbols: mergeThemeProps(base.Symbols, override.Symbols),
    Trapezoid: mergeThemeProps(base.Trapezoid, override.Trapezoid),
    XAxis: mergeThemeProps(base.XAxis, override.XAxis),
    YAxis: mergeThemeProps(base.YAxis, override.YAxis),
    ZAxis: mergeThemeProps(base.ZAxis, override.ZAxis),
    CartesianGrid: mergeThemeProps(base.CartesianGrid, override.CartesianGrid),
    Brush: mergeThemeProps(base.Brush, override.Brush),
    ReferenceLine: mergeThemeProps(base.ReferenceLine, override.ReferenceLine),
    ReferenceDot: mergeThemeProps(base.ReferenceDot, override.ReferenceDot),
    ReferenceArea: mergeThemeProps(base.ReferenceArea, override.ReferenceArea),
    ErrorBar: mergeThemeProps(base.ErrorBar, override.ErrorBar),
    Line: mergeThemeProps(base.Line, override.Line),
    Area: mergeThemeProps(base.Area, override.Area),
    Bar: mergeThemeProps(base.Bar, override.Bar),
    Scatter: mergeThemeProps(base.Scatter, override.Scatter),
    Funnel: mergeThemeProps(base.Funnel, override.Funnel),
    PolarGrid: mergeThemeProps(base.PolarGrid, override.PolarGrid),
    PolarAngleAxis: mergeThemeProps(base.PolarAngleAxis, override.PolarAngleAxis),
    PolarRadiusAxis: mergeThemeProps(base.PolarRadiusAxis, override.PolarRadiusAxis),
    Pie: mergeThemeProps(base.Pie, override.Pie),
    Radar: mergeThemeProps(base.Radar, override.Radar),
    RadialBar: mergeThemeProps(base.RadialBar, override.RadialBar),
    Treemap: mergeThemeProps(base.Treemap, override.Treemap),
    Sankey: mergeThemeProps(base.Sankey, override.Sankey),
    SunburstChart: mergeThemeProps(base.SunburstChart, override.SunburstChart),
  };
}

function mergeSeriesStyles(
  base: Readonly<Record<string, RechartsSeriesStyle>> | undefined,
  override: Readonly<Record<string, RechartsSeriesStyle>> | undefined,
): Readonly<Record<string, RechartsSeriesStyle>> | undefined {
  if (base == null) {
    return override;
  }
  if (override == null) {
    return base;
  }

  const result: Record<string, RechartsSeriesStyle> = { ...base };
  Object.keys(override).forEach(key => {
    const baseStyle = base[key];
    const overrideStyle = override[key];

    if (overrideStyle == null) {
      return;
    }
    if (baseStyle == null) {
      result[key] = overrideStyle;
      return;
    }

    const mergedStyle = mergeThemeProps(baseStyle, overrideStyle);
    if (mergedStyle != null) {
      result[key] = mergedStyle;
    }
  });

  return result;
}

function mergeRechartsTheme(baseTheme: RechartsTheme, overrideTheme: RechartsTheme | undefined): RechartsTheme {
  if (overrideTheme == null) {
    return baseTheme;
  }

  return {
    ...baseTheme,
    ...overrideTheme,
    meta: mergeThemeProps(baseTheme.meta, overrideTheme.meta),
    colors: mergeThemeProps(baseTheme.colors, overrideTheme.colors),
    typography: mergeThemeProps(baseTheme.typography, overrideTheme.typography),
    strokeWidths: mergeThemeProps(baseTheme.strokeWidths, overrideTheme.strokeWidths),
    radii: mergeThemeProps(baseTheme.radii, overrideTheme.radii),
    shadows: mergeThemeProps(baseTheme.shadows, overrideTheme.shadows),
    series:
      baseTheme.series == null && overrideTheme.series == null
        ? undefined
        : {
            ...baseTheme.series,
            ...overrideTheme.series,
            keyed: mergeSeriesStyles(baseTheme.series?.keyed, overrideTheme.series?.keyed),
          },
    components: mergeComponentThemes(baseTheme.components, overrideTheme.components),
    custom: mergeThemeProps(baseTheme.custom, overrideTheme.custom),
  };
}

export type RechartsThemeProviderProps = {
  children: ReactNode;
  theme?: RechartsTheme;
};

export function RechartsThemeProvider({ children, theme }: RechartsThemeProviderProps) {
  const parentTheme = useContext(RechartsThemeContext);
  const mergedTheme = useMemo(() => mergeRechartsTheme(parentTheme, theme), [parentTheme, theme]);

  return <RechartsThemeContext.Provider value={mergedTheme}>{children}</RechartsThemeContext.Provider>;
}

export function useRechartsTheme(): RechartsTheme {
  return useContext(RechartsThemeContext);
}
