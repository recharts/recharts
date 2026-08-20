import { CSSProperties } from 'react';

/**
 * in RechartsTheme we apply the same styles to both SVG elements and HTML elements.
 * Which are mostly compatible except when they are not and this function is fixing these problems.
 * @param style
 */
export function cssStylesToSvgStyles(style: CSSProperties): CSSProperties {
  if (style.fill != null || style.color == null) {
    return style;
  }

  return {
    ...style,
    fill: style.color,
  };
}
