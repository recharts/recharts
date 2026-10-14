/**
 * Reads the color keys of a data point, so that a graphical item can paint
 * that point with them, the same way Bar paints its rectangles.
 * The tooltip reads the same keys, so the chart and the tooltip show the same color.
 *
 * @param payload the data point
 * @returns the colors found in the data point; keys without a string value are left out
 */
export function getDataPointColors(payload: unknown): { fill?: string; stroke?: string } {
  if (payload == null || typeof payload !== 'object') {
    return {};
  }
  const colors: { fill?: string; stroke?: string } = {};
  if ('color' in payload && typeof payload.color === 'string') {
    colors.fill = payload.color;
  } else if ('fill' in payload && typeof payload.fill === 'string') {
    colors.fill = payload.fill;
  }
  if ('stroke' in payload && typeof payload.stroke === 'string') {
    colors.stroke = payload.stroke;
  }
  return colors;
}
