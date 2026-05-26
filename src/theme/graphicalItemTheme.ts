import type { RechartsSeriesStyle, RechartsTheme } from './RechartsTheme';

type GraphicalItemIdentityProps = {
  dataKey?: unknown;
  name?: unknown;
};

export function isLegacyTheme(theme: RechartsTheme): boolean {
  return theme.meta?.name === 'legacy';
}

export function getGraphicalItemIdentity(props: GraphicalItemIdentityProps): string | undefined {
  const { dataKey, name } = props;

  if (typeof dataKey === 'string' || typeof dataKey === 'number') {
    return String(dataKey);
  }
  if (typeof name === 'string' || typeof name === 'number') {
    return String(name);
  }
  return undefined;
}

function hashSeriesIdentity(identity: string, paletteLength: number): number {
  let hash = 0;
  for (let index = 0; index < identity.length; index++) {
    hash = (hash << 5) - hash + identity.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash) % paletteLength;
}

export function getGraphicalItemSeriesStyle(
  theme: RechartsTheme,
  props: GraphicalItemIdentityProps,
  options?: {
    usePaletteFallback?: boolean;
  },
): RechartsSeriesStyle | undefined {
  const identity = getGraphicalItemIdentity(props);
  if (identity == null) {
    return undefined;
  }

  const keyedStyle = theme.series?.keyed?.[identity];
  if (keyedStyle != null) {
    return keyedStyle;
  }

  if (options?.usePaletteFallback === false) {
    return undefined;
  }

  const palette = theme.series?.palette;
  if (palette == null || palette.length === 0) {
    return undefined;
  }

  return {
    fill: palette[hashSeriesIdentity(identity, palette.length)],
  };
}
