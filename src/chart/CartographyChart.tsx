import * as React from 'react';
import { useState, useMemo } from 'react';
import {
  geoMercator,
  geoNaturalEarth1,
  geoAlbersUsa,
  geoEqualEarth,
  geoOrthographic,
  geoEquirectangular,
  geoConicEqualArea,
  geoAzimuthalEqualArea,
} from 'd3-geo';
import type { GeoProjection, ExtendedFeature } from 'd3-geo';
import type { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { GeoProjectionContext } from '../geo/GeoProjectionContext';
import { Margin, Percent } from '../util/types';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { payloadSearcher } from './SunburstChart';

/**
 * Names of the built-in d3-geo projections supported by CartographyChart.
 */
export type GeoProjectionType =
  | 'mercator'
  | 'naturalEarth1'
  | 'albersUsa'
  | 'equalEarth'
  | 'orthographic'
  | 'equirectangular'
  | 'conicEqualArea'
  | 'azimuthalEqualArea';

const projectionFactories: Record<GeoProjectionType, () => GeoProjection> = {
  mercator: geoMercator,
  naturalEarth1: geoNaturalEarth1,
  albersUsa: geoAlbersUsa,
  equalEarth: geoEqualEarth,
  orthographic: geoOrthographic,
  equirectangular: geoEquirectangular,
  conicEqualArea: geoConicEqualArea,
  azimuthalEqualArea: geoAzimuthalEqualArea,
};

export interface CartographyChartProps {
  /**
   * The width of chart container in pixels, or a percent string like "100%".
   */
  width?: number | Percent;
  /**
   * The height of chart container in pixels, or a percent string like "100%".
   */
  height?: number | Percent;
  /**
   * If true, the chart adapts to its container size.
   */
  responsive?: boolean;
  /**
   * One of the built-in d3-geo projection names.
   * @default 'mercator'
   */
  projection?: GeoProjectionType;
  /**
   * A custom d3-geo projection instance.
   * When provided, the `projection` string is ignored.
   */
  customProjection?: GeoProjection;
  /**
   * GeoJSON object to automatically fit the projection bounds to.
   * When provided, the projection is automatically scaled and centred.
   */
  fitExtent?: FeatureCollection<Geometry, GeoJsonProperties> | ExtendedFeature;
  /**
   * Margin (in pixels) around the chart area. Used when auto-fitting the projection.
   * @default { top: 0, right: 0, bottom: 0, left: 0 }
   */
  margin?: Margin;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
  throttleDelay?: number;
}

const defaultMargin: Margin = { top: 0, right: 0, bottom: 0, left: 0 };

const preloadedState = {
  options: {
    validateTooltipEventTypes: ['item'] as const,
    defaultTooltipEventType: 'item' as const,
    chartName: 'CartographyChart',
    tooltipPayloadSearcher: payloadSearcher,
    eventEmitter: undefined,
  },
};

/**
 * Inner implementation that consumes chart dimensions from context.
 */
const CartographyChartImpl = ({
  projection: projectionName = 'mercator',
  customProjection,
  fitExtent,
  margin = defaultMargin,
  children,
  width,
  height,
}: Pick<CartographyChartProps, 'projection' | 'customProjection' | 'fitExtent' | 'margin' | 'children'> & {
  width: number;
  height: number;
}) => {
  const projection = useMemo<GeoProjection>(() => {
    const proj = customProjection ?? projectionFactories[projectionName]();

    if (fitExtent) {
      const top = margin.top ?? 0;
      const left = margin.left ?? 0;
      const right = margin.right ?? 0;
      const bottom = margin.bottom ?? 0;
      proj.fitExtent(
        [
          [left, top],
          [width - right, height - bottom],
        ],
        fitExtent as Parameters<GeoProjection['fitExtent']>[1],
      );
    } else {
      const scale = Math.min(width, height) / Math.PI;
      proj.scale(scale).translate([width / 2, height / 2]);
    }

    return proj;
  }, [customProjection, projectionName, fitExtent, width, height, margin]);

  const contextValue = useMemo(() => ({ projection, width, height }), [projection, width, height]);

  return (
    <GeoProjectionContext.Provider value={contextValue}>
      <Surface width={width} height={height}>
        <Layer className="recharts-cartography">{children}</Layer>
      </Surface>
    </GeoProjectionContext.Provider>
  );
};

/**
 * A wrapper that reads chart dimensions from context, then delegates to CartographyChartImpl.
 */
const CartographyChartWithContext = (props: CartographyChartProps) => {
  const width = useChartWidth();
  const height = useChartHeight();

  if (width == null || height == null) {
    return null;
  }

  return <CartographyChartImpl {...props} width={width} height={height} />;
};

/**
 * A top-level chart component for rendering geographic / cartographic data.
 *
 * Supports choropleth maps, dot/bubble maps over geographic regions, and any SVG
 * overlay compatible with the Recharts component system.
 *
 * All rendering is **pure SVG** via **d3-geo** projections — no external map tile
 * library is required.
 *
 * ## Supported projections
 * `mercator` (default), `naturalEarth1`, `albersUsa`, `equalEarth`,
 * `orthographic`, `equirectangular`, `conicEqualArea`, `azimuthalEqualArea`.
 *
 * @example
 * ```tsx
 * import worldGeoJSON from './world.geo.json';
 * import populationData from './population.json';
 *
 * <CartographyChart width={960} height={500} projection="naturalEarth1" fitExtent={worldGeoJSON}>
 *   <ChoroplethSeries
 *     geoData={worldGeoJSON}
 *     data={populationData}
 *     dataKey="country"
 *     featureKey="name"
 *     valueKey="population"
 *   />
 *   <Tooltip />
 * </CartographyChart>
 * ```
 */
export const CartographyChart = ({
  width,
  height,
  responsive = false,
  margin = defaultMargin,
  className,
  style,
  children,
  throttleDelay,
  ...rest
}: CartographyChartProps) => {
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={preloadedState} reduxStoreName={className ?? 'CartographyChart'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={margin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={[]} />
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <RechartsWrapper
          className={className}
          width={width}
          height={height}
          responsive={responsive}
          style={style}
          ref={(node: HTMLDivElement) => {
            if (tooltipPortal == null && node != null) {
              setTooltipPortal(node);
            }
          }}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
          onClick={undefined}
          onMouseMove={undefined}
          onMouseDown={undefined}
          onMouseUp={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onTouchStart={undefined}
          onTouchMove={undefined}
          onTouchEnd={undefined}
        >
          <CartographyChartWithContext margin={margin} {...rest}>
            {children}
          </CartographyChartWithContext>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
};

CartographyChart.displayName = 'CartographyChart';
