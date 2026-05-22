import * as React from 'react';
import { Curve, Props as CurveProps } from '../shape/Curve';
import { ShapeAnimationProps } from '../util/types';

/**
 * Reads the total length of an SVG path element, returning 0 if the element
 * is null or the measurement fails (e.g. in JSDOM).
 */
function getTotalLength(path: SVGPathElement | null): number {
  try {
    return (path && path.getTotalLength && path.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}

/**
 * Generates a simple stroke-dasharray string for animating a line draw effect.
 *
 * Uses `totalLength` as the gap (instead of `totalLength - length`) to prevent a floating-point
 * precision artifact: when fractional dash and gap values are serialized to a string attribute
 * and re-parsed by the SVG renderer, their sum can differ from the actual path length by a ULP,
 * causing the dasharray pattern to repeat and render a phantom dot at the path endpoint
 * with round or square strokeLinecap.
 *
 * @param totalLength The total length of the SVG path
 * @param length The currently visible portion of the path
 * @returns A stroke-dasharray string like "50px 200px"
 */
function generateSimpleStrokeDasharray(totalLength: number, length: number): string {
  return `${length}px ${totalLength}px`;
}

/**
 * Repeats a dash pattern array a given number of times.
 *
 * If the input array has an odd length, a trailing `0` is appended to make it even
 * before repeating, because SVG stroke-dasharray patterns must have an even number
 * of values to cycle correctly between dash and gap segments.
 *
 * @param lines Array of dash/gap lengths to repeat
 * @param count Number of times to repeat the pattern
 * @returns A new array with the pattern repeated `count` times
 */
function repeat(lines: number[], count: number): number[] {
  const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
  const result: number[] = [];
  for (let i = 0; i < count; ++i) {
    result.push(...linesUnit);
  }
  return result;
}

/**
 * Computes a stroke-dasharray string for animating a custom-dashed line draw effect.
 *
 * Given a user-specified dash pattern (e.g. `"7,3"`), this function builds a dasharray
 * that reveals exactly `length` pixels of that pattern, followed by a gap of `totalLength`
 * to hide the remainder of the path.
 *
 * Like {@link generateSimpleStrokeDasharray}, the trailing gap uses `totalLength` rather than
 * `totalLength - length` to avoid floating-point precision artifacts with round/square strokeLinecap.
 *
 * @param length The currently visible portion of the path
 * @param totalLength The total length of the SVG path
 * @param lines The user-specified dash pattern as an array of numbers (e.g. [7, 3])
 * @returns A stroke-dasharray string incorporating the custom dash pattern
 */
function getStrokeDasharray(length: number, totalLength: number, lines: number[]): string {
  const lineLength = lines.reduce((pre, next) => pre + next, 0);

  // if lineLength is 0 return the default when no strokeDasharray is provided
  if (!lineLength) {
    return generateSimpleStrokeDasharray(totalLength, length);
  }

  const count = Math.floor(length / lineLength);
  const remainLength = length % lineLength;
  let remainLines: number[] = [];
  for (let i = 0, sum = 0; i < lines.length; sum += lines[i] ?? 0, ++i) {
    const lineValue = lines[i];
    if (lineValue != null && sum + lineValue > remainLength) {
      remainLines = [...lines.slice(0, i), remainLength - sum];
      break;
    }
  }

  const emptyLines = remainLines.length % 2 === 0 ? [0, totalLength] : [totalLength];

  return [...repeat(lines, count), ...remainLines, ...emptyLines].map(line => `${line}px`).join(', ');
}

/**
 * Computes the animated stroke-dasharray for a line's entrance animation.
 *
 * @param userStrokeDasharray The user-specified stroke-dasharray (e.g. "5,3"), if any
 * @param totalLength Total SVG path length
 * @param visibleLength How much of the path should be visible
 * @returns A stroke-dasharray string for the current animation frame
 */
function computeAnimatedStrokeDasharray(
  userStrokeDasharray: string | number | undefined,
  totalLength: number,
  visibleLength: number,
): string {
  if (userStrokeDasharray) {
    const lines = `${userStrokeDasharray}`.split(/[,\s]+/gim).map(num => parseFloat(num));
    return getStrokeDasharray(visibleLength, totalLength, lines);
  }
  return generateSimpleStrokeDasharray(totalLength, visibleLength);
}

export type LineDrawShapeProps = CurveProps &
  ShapeAnimationProps & {
    /**
     * The computed visible length of the SVG path during entrance animation, in pixels.
     * - When a number: the shape should apply stroke-dasharray to reveal exactly this many pixels.
     * - When null or undefined: no entrance-driven stroke-dasharray should be applied.
     *
     * This value is computed by `useAnimatedLineLength` in the parent component.
     */
    visibleLength?: number | null;
  };

/**
 * The default shape for Line. During the entrance animation, the line is progressively
 * revealed using the `strokeDasharray` SVG attribute: the visible portion grows from
 * 0 to the full path length as `t` progresses from 0 to 1.
 *
 * This is the built-in shape for Line. It is automatically used when no custom `shape` prop
 * is provided. You can import and reuse it as a starting point for custom shapes,
 * or use it as a reference for building your own.
 *
 * The animation progress props (`t`, `isAnimating`, `isEntrance`) are available
 * for custom shapes that want to add their own effects on top.
 *
 * @example
 * ```tsx
 * import { Line, LineDrawShape } from 'recharts';
 *
 * // Use the default shape explicitly (same as providing no shape prop)
 * <Line dataKey="value" shape={LineDrawShape} />
 * ```
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 *
 * @since 3.9
 */
export function LineDrawShape(props: LineDrawShapeProps): React.ReactElement | null {
  const {
    t,
    isAnimating,
    isEntrance,
    visibleLength,
    strokeDasharray: userStrokeDasharray,
    connectNulls,
    ...curveProps
  } = props;
  const finalConnectNulls = connectNulls ?? false;

  let strokeDasharray: string | undefined;

  if (visibleLength != null) {
    const pathRef = curveProps.pathRef as React.RefObject<SVGPathElement | null> | undefined;
    const totalLength = getTotalLength(pathRef?.current ?? null);
    strokeDasharray = computeAnimatedStrokeDasharray(userStrokeDasharray, totalLength, visibleLength);
  } else if (userStrokeDasharray != null) {
    strokeDasharray = String(userStrokeDasharray);
  }

  return <Curve {...curveProps} connectNulls={finalConnectNulls} strokeDasharray={strokeDasharray} />;
}
