import * as React from 'react';
import { CSSProperties, SVGProps, useMemo, forwardRef } from 'react';

import { clsx } from 'clsx';
import { isNullish, isNumber, isNumOrStr } from '../util/DataUtils';
import { Global } from '../util/Global';
import { getStringSize } from '../util/DOMUtils';
import { reduceCSSCalc } from '../util/ReduceCSSCalc';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

interface Words {
  words: Array<string>;
  width: number | undefined;
}

interface WordsWithWidth {
  words: Array<string>;
  width: number;
}

interface WordWithComputedWidth {
  word: string;
  width: number;
}

interface CalculatedWordWidths {
  wordsWithComputedWidth: Array<WordWithComputedWidth>;
  spaceWidth: number;
}

type CalculateWordWidthsParam = Pick<Props, 'children' | 'breakAll' | 'style'>;

const calculateWordWidths = ({ children, breakAll, style }: CalculateWordWidthsParam): CalculatedWordWidths | null => {
  try {
    let words: string[] = [];
    if (!isNullish(children)) {
      if (breakAll) {
        words = children.toString().split('');
      } else {
        words = children.toString().split(BREAKING_SPACES);
      }
    }

    const wordsWithComputedWidth = words.map(word => ({ word, width: getStringSize(word, style).width }));

    const spaceWidth = breakAll ? 0 : getStringSize('\u00A0', style).width;

    return { wordsWithComputedWidth, spaceWidth };
  } catch {
    return null;
  }
};

export type TextAnchor = 'start' | 'middle' | 'end' | 'inherit';

export type TextVerticalAnchor = 'start' | 'middle' | 'end';

export type RenderableText = string | number | boolean | null | undefined;

interface TextProps {
  /**
   * When true, scales the text to fit within the specified width.
   * The text will be scaled down proportionally to fit the available space.
   *
   * **Important interactions:**
   * - Requires `width` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
   * - When enabled, `maxLines` restrictions are bypassed and ellipsis truncation is disabled.
   * - Uses the first line's width to calculate the scale factor.
   * - The scaling transform is applied as `scale(width / lineWidth)`.
   *
   * @default false
   */
  scaleToFit?: boolean;

  /**
   * Rotation angle in degrees for the text element.
   * The text will be rotated around the (x, y) coordinates as the pivot point.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   * The rotation transform is applied as `rotate(angle, x, y)`.
   */
  angle?: number;

  /**
   * Horizontal text alignment within the text element.
   * - 'start': Text starts at the x coordinate (left-aligned for LTR text)
   * - 'middle': Text is centered on the x coordinate
   * - 'end': Text ends at the x coordinate (right-aligned for LTR text)
   * - 'inherit': Inherits the text-anchor from parent element
   *
   * **Note:** This controls horizontal alignment only and does not affect RTL text behavior.
   * @default 'start'
   */
  textAnchor?: TextAnchor;

  /**
   * Vertical text alignment relative to the y coordinate.
   * - 'start': Text baseline starts at y coordinate (text appears below the y position)
   * - 'middle': Text is vertically centered on the y coordinate
   * - 'end': Text baseline ends at y coordinate (text appears above the y position)
   *
   * **Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
   * The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
   * @default 'end'
   */
  verticalAnchor?: TextVerticalAnchor;

  /**
   * CSS styles to apply to the text element.
   * These styles are used for text measurement calculations when width constraints or scaleToFit are used.
   * Font-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.
   */
  style?: CSSProperties;

  /**
   * Line height for multi-line text.
   * Can be a number (height in pixels) or a string with CSS units.
   * Used to calculate spacing between lines when text wraps to multiple lines.
   * Also used in verticalAnchor calculations for positioning the text block.
   * @default '1em'
   */
  lineHeight?: number | string;

  /**
   * When true, enables character-level breaking instead of word-level breaking.
   * - false: Text breaks at word boundaries (spaces, tabs, etc.)
   * - true: Text can break between any characters, useful for languages without spaces
   *
   * **Note:** Only effective when `width` is defined to enable line breaking.
   * @default false
   */
  breakAll?: boolean;

  /**
   * The text content to render.
   * Can be a string or number. Numbers will be converted to strings.
   * undefined or null values will result in no text being rendered.
   */
  children?: RenderableText;

  /**
   * Maximum number of lines to display when text wrapping is enabled.
   * When text exceeds this limit, it will be truncated with an ellipsis (…).
   *
   * **Important requirements for ellipsis truncation:**
   * - `width` must be defined (no effect when width is undefined)
   * - `scaleToFit` must be false (when scaleToFit is true, maxLines is bypassed)
   * - Text must actually overflow the specified maxLines or width constraints
   *
   * **Truncation behavior:**
   * - Uses binary search to find the optimal truncation point
   * - Adds ellipsis (…) at the end of the truncated text
   * - Ensures the truncated text + ellipsis fits within the constraints
   *
   * **Interaction with other props:**
   * - When `scaleToFit` is true, this property is ignored
   * - Requires `width` to be set for line breaking to occur
   */
  maxLines?: number;
}

export type Props = Omit<SVGProps<SVGTextElement>, 'textAnchor' | 'verticalAnchor'> & TextProps;

type CalculateWordsByLinesProps = Pick<Props, 'maxLines' | 'children' | 'style' | 'breakAll'>;

const calculate = (
  words: ReadonlyArray<WordWithComputedWidth>,
  lineWidth: number | string | undefined,
  spaceWidth: number,
  scaleToFit: boolean,
): ReadonlyArray<WordsWithWidth> =>
  words.reduce((result: Array<WordsWithWidth>, { word, width }) => {
    const currentLine = result[result.length - 1];

    if (
      currentLine &&
      width != null &&
      (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))
    ) {
      // Word can be added to an existing line
      currentLine.words.push(word);
      currentLine.width += width + spaceWidth;
    } else {
      // Add first word to line or word is too long to scaleToFit on existing line
      const newLine: WordsWithWidth = { words: [word], width };
      result.push(newLine);
    }

    return result;
  }, []);

const findLongestLine = (words: ReadonlyArray<WordsWithWidth>): WordsWithWidth =>
  words.reduce((a: WordsWithWidth, b: WordsWithWidth) => (a.width > b.width ? a : b));

const suffix = '…';

const checkOverflow = (
  text: string,
  index: number,
  breakAll: TextProps['breakAll'],
  style: TextProps['style'],
  maxLines: number,
  lineWidth: number | string | undefined,
  spaceWidth: number,
  scaleToFit: boolean,
): [boolean, ReadonlyArray<Words>] => {
  const tempText = text.slice(0, index);

  const words = calculateWordWidths({
    breakAll,
    style,
    children: tempText + suffix,
  });

  if (!words) {
    return [false, []];
  }

  const result: ReadonlyArray<WordsWithWidth> = calculate(
    words.wordsWithComputedWidth,
    lineWidth,
    spaceWidth,
    scaleToFit,
  );

  const doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);

  return [doesOverflow, result];
};

const calculateWordsByLines = (
  { maxLines, children, style, breakAll }: CalculateWordsByLinesProps,
  initialWordsWithComputedWith: ReadonlyArray<WordWithComputedWidth>,
  spaceWidth: number,
  lineWidth: number | string | undefined,
  scaleToFit: boolean,
): ReadonlyArray<Words> => {
  const shouldLimitLines = isNumber(maxLines);
  const text = String(children);

  const originalResult: ReadonlyArray<WordsWithWidth> = calculate(
    initialWordsWithComputedWith,
    lineWidth,
    spaceWidth,
    scaleToFit,
  );

  if (!shouldLimitLines || scaleToFit) {
    return originalResult;
  }

  const overflows = originalResult.length > maxLines || findLongestLine(originalResult).width > Number(lineWidth);
  if (!overflows) {
    return originalResult;
  }

  let start = 0;
  let end = text.length - 1;

  let iterations = 0;
  let trimmedResult;

  while (start <= end && iterations <= text.length - 1) {
    const middle = Math.floor((start + end) / 2);
    const prev = middle - 1;

    const [doesPrevOverflow, result] = checkOverflow(
      text,
      prev,
      breakAll,
      style,
      maxLines,
      lineWidth,
      spaceWidth,
      scaleToFit,
    );
    const [doesMiddleOverflow] = checkOverflow(
      text,
      middle,
      breakAll,
      style,
      maxLines,
      lineWidth,
      spaceWidth,
      scaleToFit,
    );

    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }

    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }

    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }

    iterations++;
  }

  // Fallback to originalResult (result without trimming) if we cannot find the
  // where to trim.  This should not happen :tm:
  return trimmedResult || originalResult;
};

const getWordsWithoutCalculate = (children: React.ReactNode): Array<Words> => {
  const words = !isNullish(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{ words, width: undefined }];
};

type GetWordsByLinesProps = Pick<Props, 'width' | 'scaleToFit' | 'children' | 'style' | 'breakAll' | 'maxLines'>;

export const getWordsByLines = ({ width, scaleToFit, children, style, breakAll, maxLines }: GetWordsByLinesProps) => {
  // Only perform calculations if using features that require them (multiline, scaleToFit)
  if ((width || scaleToFit) && !Global.isSsr) {
    let wordsWithComputedWidth: ReadonlyArray<WordWithComputedWidth>, spaceWidth: number;

    const wordWidths = calculateWordWidths({ breakAll, children, style });

    if (wordWidths) {
      const { wordsWithComputedWidth: wcw, spaceWidth: sw } = wordWidths;

      wordsWithComputedWidth = wcw;
      spaceWidth = sw;
    } else {
      return getWordsWithoutCalculate(children);
    }

    return calculateWordsByLines(
      { breakAll, children, maxLines, style },
      wordsWithComputedWidth,
      spaceWidth,
      width,
      Boolean(scaleToFit),
    );
  }
  return getWordsWithoutCalculate(children);
};

const DEFAULT_FILL = '#808080';

const textDefaultProps = {
  breakAll: false,
  // Magic number from d3
  capHeight: '0.71em',
  fill: DEFAULT_FILL,
  lineHeight: '1em',
  scaleToFit: false,
  textAnchor: 'start',
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: 'end',
  x: 0,
  y: 0,
} as const satisfies Partial<Props>;

export const Text = forwardRef<SVGTextElement, Props>((outsideProps, ref) => {
  const {
    x: propsX,
    y: propsY,
    lineHeight,
    capHeight,
    fill,
    scaleToFit,
    textAnchor,
    verticalAnchor,
    ...props
  } = resolveDefaultProps(outsideProps, textDefaultProps);
  const wordsByLines: ReadonlyArray<Words> = useMemo(() => {
    return getWordsByLines({
      breakAll: props.breakAll,
      children: props.children,
      maxLines: props.maxLines,
      scaleToFit,
      style: props.style,
      width: props.width,
    });
  }, [props.breakAll, props.children, props.maxLines, scaleToFit, props.style, props.width]);

  const { dx, dy, angle, className, breakAll, ...textProps } = props;

  if (!isNumOrStr(propsX) || !isNumOrStr(propsY) || wordsByLines.length === 0) {
    return null;
  }
  const x = Number(propsX) + (isNumber(dx) ? dx : 0);
  const y = Number(propsY) + (isNumber(dy) ? dy : 0);

  let startDy: string;
  switch (verticalAnchor) {
    case 'start':
      startDy = reduceCSSCalc(`calc(${capHeight})`);
      break;
    case 'middle':
      startDy = reduceCSSCalc(`calc(${(wordsByLines.length - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`);
      break;
    default:
      startDy = reduceCSSCalc(`calc(${wordsByLines.length - 1} * -${lineHeight})`);
      break;
  }

  const transforms = [];
  if (scaleToFit) {
    const lineWidth = wordsByLines[0].width;
    const { width } = props;
    transforms.push(`scale(${isNumber(width) && isNumber(lineWidth) ? width / lineWidth : 1})`);
  }
  if (angle) {
    transforms.push(`rotate(${angle}, ${x}, ${y})`);
  }
  if (transforms.length) {
    textProps.transform = transforms.join(' ');
  }

  return (
    <text
      {...svgPropertiesAndEvents(textProps)}
      ref={ref}
      x={x}
      y={y}
      className={clsx('recharts-text', className)}
      textAnchor={textAnchor}
      fill={fill.includes('url') ? DEFAULT_FILL : fill}
    >
      {wordsByLines.map((line, index) => {
        const words = line.words.join(breakAll ? '' : ' ');
        return (
          // duplicate words will cause duplicate keys
          // eslint-disable-next-line react/no-array-index-key
          <tspan x={x} dy={index === 0 ? startDy : lineHeight} key={`${words}-${index}`}>
            {words}
          </tspan>
        );
      })}
    </text>
  );
});

Text.displayName = 'Text';
