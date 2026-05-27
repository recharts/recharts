import type { RechartsTheme } from '../RechartsTheme';

type ColorValue = string;
type NumericOrString = number | string;

export interface AntdThemeTokenLike {
  colorBgBase?: ColorValue;
  colorBgContainer: ColorValue;
  colorBgElevated?: ColorValue;
  colorBgLayout?: ColorValue;
  colorText: ColorValue;
  colorTextSecondary?: ColorValue;
  colorTextTertiary?: ColorValue;
  colorBorder: ColorValue;
  colorBorderSecondary?: ColorValue;
  colorFillSecondary?: ColorValue;
  colorPrimary: ColorValue;
  colorSuccess?: ColorValue;
  colorWarning?: ColorValue;
  colorError?: ColorValue;
  colorInfo?: ColorValue;
  fontFamily?: string;
  fontSize?: NumericOrString;
  fontWeightStrong?: NumericOrString;
  lineHeight?: NumericOrString;
  lineWidth?: NumericOrString;
  borderRadius?: NumericOrString;
  borderRadiusLG?: NumericOrString;
  boxShadow?: string;
  boxShadowSecondary?: string;
}

export interface RechartsFromAntdOptions {
  name?: string;
  mode?: string;
  palette?: ReadonlyArray<string>;
}

function parseHexColor(color: string): [number, number, number] | undefined {
  const normalized = color.trim().replace('#', '');

  if (normalized.length === 3) {
    const red = Number.parseInt(normalized.slice(0, 1).repeat(2), 16);
    const green = Number.parseInt(normalized.slice(1, 2).repeat(2), 16);
    const blue = Number.parseInt(normalized.slice(2, 3).repeat(2), 16);

    return [red, green, blue];
  }

  if (normalized.length === 6 || normalized.length === 8) {
    const red = Number.parseInt(normalized.slice(0, 2), 16);
    const green = Number.parseInt(normalized.slice(2, 4), 16);
    const blue = Number.parseInt(normalized.slice(4, 6), 16);

    return [red, green, blue];
  }

  return undefined;
}

function parseRgbColor(color: string): [number, number, number] | undefined {
  const match = color.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+\s*)?\)$/i);

  if (match == null) {
    return undefined;
  }

  const [, redChannel, greenChannel, blueChannel] = match;
  if (redChannel == null || greenChannel == null || blueChannel == null) {
    return undefined;
  }

  const red = Number.parseFloat(redChannel);
  const green = Number.parseFloat(greenChannel);
  const blue = Number.parseFloat(blueChannel);

  return [red, green, blue];
}

function parseColorChannels(color: string | undefined): [number, number, number] | undefined {
  if (color == null) {
    return undefined;
  }

  if (color.startsWith('#')) {
    return parseHexColor(color);
  }

  if (color.startsWith('rgb')) {
    return parseRgbColor(color);
  }

  return undefined;
}

function getColorLuminance(color: string | undefined): number | undefined {
  const channels = parseColorChannels(color);
  if (channels == null) {
    return undefined;
  }

  const redChannel = channels[0];
  const greenChannel = channels[1];
  const blueChannel = channels[2];
  if (redChannel == null || greenChannel == null || blueChannel == null) {
    return undefined;
  }

  const red = (() => {
    const normalized = redChannel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  })();
  const green = (() => {
    const normalized = greenChannel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  })();
  const blue = (() => {
    const normalized = blueChannel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  })();

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function inferModeFromBackground(token: AntdThemeTokenLike): string | undefined {
  const luminance = getColorLuminance(token.colorBgBase ?? token.colorBgLayout ?? token.colorBgContainer);
  if (luminance == null) {
    return undefined;
  }

  return luminance < 0.5 ? 'dark' : 'light';
}

function buildPalette(
  token: AntdThemeTokenLike,
  paletteOverride: ReadonlyArray<string> | undefined,
): ReadonlyArray<string> {
  if (paletteOverride != null && paletteOverride.length > 0) {
    return paletteOverride;
  }

  const palette = [
    token.colorPrimary,
    token.colorSuccess,
    token.colorWarning,
    token.colorError,
    token.colorInfo,
  ].filter((color): color is string => typeof color === 'string' && color.length > 0);

  return Array.from(new Set(palette));
}

export function rechartsFromAntd(token: AntdThemeTokenLike, options?: RechartsFromAntdOptions): RechartsTheme {
  const palette = buildPalette(token, options?.palette);

  return {
    meta: {
      name: options?.name ?? 'antd',
      mode: options?.mode ?? inferModeFromBackground(token),
    },
    colors: {
      canvas: token.colorBgLayout,
      surface: token.colorBgContainer ?? token.colorBgElevated,
      text: token.colorText,
      mutedText: token.colorTextSecondary ?? token.colorTextTertiary,
      border: token.colorBorder,
      grid: token.colorBorderSecondary ?? token.colorFillSecondary ?? token.colorBorder,
      axis: token.colorTextSecondary ?? token.colorText,
      tooltipCursor: token.colorBorder,
    },
    typography: {
      fontFamily: token.fontFamily,
      fontSize: token.fontSize,
      fontWeight: token.fontWeightStrong,
      lineHeight: token.lineHeight,
    },
    strokeWidths: {
      axis: token.lineWidth,
      grid: token.lineWidth,
      line: token.lineWidth,
      area: token.lineWidth,
      reference: token.lineWidth,
      polarGrid: token.lineWidth,
    },
    radii: {
      tooltip: token.borderRadiusLG ?? token.borderRadius,
    },
    shadows: {
      tooltip: token.boxShadowSecondary ?? token.boxShadow,
    },
    series: {
      palette,
    },
  };
}
