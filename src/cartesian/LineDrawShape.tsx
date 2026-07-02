import * as React from 'react';
import { RefObject } from 'react';
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
 * and reparsed by the SVG renderer, their sum can differ from the actual path length by a ULP,
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
 * Normalizes a dash pattern to the even-length sequence used by SVG renderers.
 * Odd-length stroke-dasharray values repeat once, so "5" behaves like "5 5".
 *
 * @param lines Array of dash/gap lengths to repeat
 * @returns An even-length dash pattern
 */
function normalizeDashPattern(lines: number[]): number[] {
  return lines.length % 2 !== 0 ? [...lines, ...lines] : lines;
}

/**
 * Repeats a dash pattern array a given number of times.
 *
 * @param lines Array of dash/gap lengths to repeat
 * @param count Number of times to repeat the pattern
 * @returns A new array with the pattern repeated `count` times
 */
function repeat(lines: number[], count: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < count; ++i) {
    result.push(...lines);
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
  const normalizedLines = normalizeDashPattern(lines);
  const lineLength = normalizedLines.reduce((pre, next) => pre + next, 0);

  // if lineLength is 0 return the default when no strokeDasharray is provided
  if (!lineLength) {
    return generateSimpleStrokeDasharray(totalLength, length);
  }

  const count = Math.floor(length / lineLength);
  const remainLength = length % lineLength;
  let remainLines: number[] = [];
  for (let i = 0, sum = 0; i < normalizedLines.length; sum += normalizedLines[i] ?? 0, ++i) {
    const lineValue = normalizedLines[i];
    if (lineValue != null && sum + lineValue > remainLength) {
      remainLines = [...normalizedLines.slice(0, i), remainLength - sum];
      break;
    }
  }

  const emptyLines = remainLines.length % 2 === 0 ? [0, totalLength] : [totalLength];

  return [...repeat(normalizedLines, count), ...remainLines, ...emptyLines].map(line => `${line}px`).join(', ');
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

export type LineDrawShapeProps = Omit<CurveProps, 'pathRef'> &
  ShapeAnimationProps & {
    /**
     * CurveProps use Ref which includes the object plus callback.
     * Here in LineDrawShape we have to read from it so we only allow the object - but we keep `Curve.ref` the same
     * for backwards compatibility.
     * LineDrawShape is new since 3.9 so there's no backwards to go.
     */
    pathRef: RefObject<SVGPathElement>;
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
 * 0 to the full path length as `animationElapsedTime` progresses from 0 to 1.
 *
 * This is the built-in shape for Line. It is automatically used when no custom `shape` prop
 * is provided. You can import and reuse it as a starting point for custom shapes,
 * or use it as a reference for building your own.
 *
 * The animation progress props (`animationElapsedTime`, `isAnimating`, `isEntrance`) are available
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
    animationElapsedTime: _animationElapsedTime,
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
    const { pathRef } = curveProps;
    const totalLength = getTotalLength(pathRef?.current ?? null);
    strokeDasharray = computeAnimatedStrokeDasharray(userStrokeDasharray, totalLength, visibleLength);
  } else if (userStrokeDasharray != null) {
    strokeDasharray = String(userStrokeDasharray);
  }

  return <Curve {...curveProps} connectNulls={finalConnectNulls} strokeDasharray={strokeDasharray} />;
}
