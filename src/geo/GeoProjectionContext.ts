import { createContext, useContext } from 'react';
import type { GeoProjection } from 'd3-geo';

export interface GeoProjectionContextValue {
  projection: GeoProjection;
  width: number;
  height: number;
}

export const GeoProjectionContext = createContext<GeoProjectionContextValue | null>(null);

export function useGeoProjection(): GeoProjectionContextValue {
  const ctx = useContext(GeoProjectionContext);
  if (ctx == null) {
    throw new Error('useGeoProjection must be used inside a CartographyChart');
  }
  return ctx;
}
