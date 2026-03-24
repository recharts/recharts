import * as React from 'react';
import { geoPath } from 'd3-geo';
import type { Feature, Geometry, GeoJsonProperties } from 'geojson';
import { useGeoProjection } from './GeoProjectionContext';

export interface GeoPathProps {
  /**
   * A GeoJSON Feature to render as an SVG path.
   */
  feature: Feature<Geometry, GeoJsonProperties>;
  /** Fill color of the region. Defaults to '#d1d5db'. */
  fill?: string;
  /** Stroke (border) color. Defaults to '#ffffff'. */
  stroke?: string;
  /** Stroke width. Defaults to 0.5. */
  strokeWidth?: number;
  /** Fill opacity. Defaults to 1. */
  fillOpacity?: number;
  /** Called when user clicks on a region. */
  onClick?: (feature: Feature<Geometry, GeoJsonProperties>, e: React.MouseEvent<SVGPathElement>) => void;
  /** Called when user's mouse enters a region. */
  onMouseEnter?: (feature: Feature<Geometry, GeoJsonProperties>, e: React.MouseEvent<SVGPathElement>) => void;
  /** Called when user's mouse leaves a region. */
  onMouseLeave?: (feature: Feature<Geometry, GeoJsonProperties>, e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a single GeoJSON Feature as an SVG `<path>` element using the parent
 * CartographyChart's projection.
 *
 * Must be used as a child of `<CartographyChart>`.
 *
 * @example
 * ```tsx
 * <CartographyChart width={800} height={500}>
 *   {geoJSON.features.map(feature => (
 *     <GeoPath key={feature.id} feature={feature} fill="#4f46e5" stroke="#fff" />
 *   ))}
 * </CartographyChart>
 * ```
 */
export const GeoPath = ({
  feature,
  fill = '#d1d5db',
  stroke = '#ffffff',
  strokeWidth = 0.5,
  fillOpacity = 1,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  style,
}: GeoPathProps) => {
  const { projection } = useGeoProjection();
  const pathGenerator = geoPath(projection);
  const d = pathGenerator(feature as any);

  if (!d) return null;

  return (
    <path
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fillOpacity={fillOpacity}
      className={className}
      style={style}
      onClick={onClick ? e => onClick(feature, e) : undefined}
      onMouseEnter={onMouseEnter ? e => onMouseEnter(feature, e) : undefined}
      onMouseLeave={onMouseLeave ? e => onMouseLeave(feature, e) : undefined}
    />
  );
};

GeoPath.displayName = 'GeoPath';
