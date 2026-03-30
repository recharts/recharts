import * as React from 'react';
import { scaleSequential } from 'victory-vendor/d3-scale';
import { interpolateBlues } from 'd3-scale-chromatic';
import type { FeatureCollection, Geometry, GeoJsonProperties, Feature } from 'geojson';
import { GeoPath } from './GeoPath';

type ColorScale = (t: number) => string;

export interface ChoroplethSeriesProps {
  /**
   * A GeoJSON FeatureCollection with the regions to display.
   */
  geoData: FeatureCollection<Geometry, GeoJsonProperties>;
  /**
   * The source data array. Each item corresponds to a geographic region.
   */
  data: Record<string, unknown>[];
  /**
   * The key in each data item that identifies the region (used to join data with features).
   */
  dataKey: string;
  /**
   * The key in each GeoJSON feature's `properties` to match against `dataKey`.
   *
   * @defaultValue 'name'
   */
  featureKey?: string;
  /**
   * The key in each data item holding the numeric value used for colouring.
   */
  valueKey: string;
  /**
   * A d3-interpolator function for mapping [0,1] → colour string.
   * Defaults to `interpolateBlues`.
   */
  colorScale?: ColorScale;
  /**
   * Called when user clicks on a region.
   */
  onClick?: (
    feature: Feature<Geometry, GeoJsonProperties>,
    datum: Record<string, unknown> | undefined,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * Called when user's mouse enters a region.
   */
  onMouseEnter?: (
    feature: Feature<Geometry, GeoJsonProperties>,
    datum: Record<string, unknown> | undefined,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * Called when user's mouse leaves a region.
   */
  onMouseLeave?: (
    feature: Feature<Geometry, GeoJsonProperties>,
    datum: Record<string, unknown> | undefined,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * Fill color shown for regions that have no matching data value.
   *
   * @defaultValue '#e5e7eb'
   */
  noDataFill?: string;
  stroke?: string;
  strokeWidth?: number;
  fillOpacity?: number;
}

/**
 * Renders a choropleth — each geographic region coloured by a data value.
 * Must be used inside a `<CartographyChart>`.
 *
 * @example
 * ```tsx
 * <CartographyChart width={800} height={500} projection="mercator">
 *   <ChoroplethSeries
 *     geoData={worldGeoJSON}
 *     data={populationData}
 *     dataKey="country"
 *     featureKey="name"
 *     valueKey="population"
 *   />
 * </CartographyChart>
 * ```
 */
export const ChoroplethSeries = ({
  geoData,
  data,
  dataKey,
  featureKey = 'name',
  valueKey,
  colorScale = interpolateBlues,
  onClick,
  onMouseEnter,
  onMouseLeave,
  noDataFill = '#e5e7eb',
  stroke = '#ffffff',
  strokeWidth = 0.5,
  fillOpacity = 1,
}: ChoroplethSeriesProps) => {
  // Build a lookup map from identifier → datum
  const dataMap = React.useMemo(() => {
    const map = new Map<string, Record<string, unknown>>();
    for (const item of data) {
      const key = item[dataKey];
      if (typeof key === 'string' || typeof key === 'number') {
        map.set(String(key), item);
      }
    }
    return map;
  }, [data, dataKey]);

  // Compute the domain for the colour scale
  const values = React.useMemo(() => {
    return data.map(d => d[valueKey]).filter((v): v is number => typeof v === 'number');
  }, [data, valueKey]);

  const [minVal, maxVal] = React.useMemo(() => {
    if (values.length === 0) return [0, 1];
    return [Math.min(...values), Math.max(...values)];
  }, [values]);

  const colourFn = React.useMemo(() => {
    return scaleSequential(colorScale).domain([minVal, maxVal]);
  }, [colorScale, minVal, maxVal]);

  return (
    <g className="recharts-choropleth-series">
      {geoData.features.map((feature, index) => {
        const featureName = feature.properties?.[featureKey];
        const datum = featureName != null ? dataMap.get(String(featureName)) : undefined;
        const rawValue = datum != null ? datum[valueKey] : undefined;
        const value = typeof rawValue === 'number' ? rawValue : undefined;
        const fill = value != null ? colourFn(value) : noDataFill;

        return (
          <GeoPath
            key={featureName ?? index}
            feature={feature}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fillOpacity={fillOpacity}
            onClick={onClick ? (f, e) => onClick(f, datum, e) : undefined}
            onMouseEnter={onMouseEnter ? (f, e) => onMouseEnter(f, datum, e) : undefined}
            onMouseLeave={onMouseLeave ? (f, e) => onMouseLeave(f, datum, e) : undefined}
          />
        );
      })}
    </g>
  );
};

ChoroplethSeries.displayName = 'ChoroplethSeries';
