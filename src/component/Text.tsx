import * as React from 'react';
import { CSSProperties, SVGProps, useMemo, forwardRef } from 'react';

import { clsx } from 'clsx';
import { isNullish, isNumber, isNumOrStr } from '../util/DataUtils';
import { Global } from '../util/Global';
import { getStringSize } from '../util/DOMUtils';
import { reduceCSSCalc } from '../util/ReduceCSSCalc';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { useId } from '../util/useId';

import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { TextStyles } from '../theme/RechartsTheme';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { cssStylesToSvgStyles } from '../theme/cssStylesToSvgStyles';

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

/**
 * @inline
 */
export type TextAnchor = 'start' | 'middle' | 'end' | 'inherit';

export function isValidTextAnchor(value: string | undefined): value is TextAnchor {
  return value === 'start' || value === 'middle' || value === 'end' || value === 'inherit';
}

/**
 * @inline
 */
export type TextVerticalAnchor = 'start' | 'middle' | 'end';

/**
 * @inline
 */
export type RenderableText = string | number | boolean | null | undefined;

export function isRenderableText(val: unknown): val is RenderableText {
  return isNullish(val) || typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean';
}

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
   * @defaultValue false
   */
  scaleToFit?: boolean;

  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
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
   * This prop is also used when `textPath` is set.
   * @defaultValue 'start'
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
   * Ignored when `textPath` is set because the path controls the text's positioning.
   *
   * @defaultValue 'end'
   */
  verticalAnchor?: TextVerticalAnchor;

  /**
   * CSS styles to apply to the text element.
   * These styles are used for text measurement calculations when width constraints or scaleToFit are used.
   * Font-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.
   * When `textPath` is set, styles still apply to the rendered text, but only `scaleToFit` uses them for measurement.
   */
  style?: CSSProperties;

  /**
   * Line height for multi-line text.
   * Can be a number (height in pixels) or a string with CSS units.
   * Used to calculate spacing between lines when text wraps to multiple lines.
   * Also used in verticalAnchor calculations for positioning the text block.
   * Ignored when `textPath` is set because the text is rendered along a single path.
   * @defaultValue '1em'
   */
  lineHeight?: number | string;

  /**
   * When true, enables character-level breaking instead of word-level breaking.
   * - false: Text breaks at word boundaries (spaces, tabs, etc.)
   * - true: Text can break between any characters, useful for languages without spaces
   *
   * **Note:** Only effective when `width` is defined to enable line breaking.
   * Ignored when `textPath` is set because path text is not split into lines.
   * @defaultValue false
   */
  breakAll?: boolean;

  /**
   * The text content to render.
   * Can be a string or number. Numbers will be converted to strings.
   * undefined or null values will result in no text being rendered.
   * When `textPath` is set, the content is rendered directly inside the SVG `textPath` element.
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
   * - Ignored when `textPath` is set because path text is rendered directly without truncation
   */
  maxLines?: number;
  /**
   * When width is specified, the text will automatically wrap by calculating the width of text.
   * When `textPath` is set, this prop does not wrap or constrain the path text; it only affects scaling when `scaleToFit` is enabled.
   */
  width?: number | string;
  /**
   * When set, renders the text along the SVG path described by this `d` attribute.
   * In path mode, `breakAll`, `lineHeight`, `maxLines`, and `verticalAnchor` are ignored.
   *
   * @since 3.11
   */
  textPath?: string;
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

const defaultLegacyThemeProps: TextStyles = {
  fill: DEFAULT_FILL,
};

export const textDefaultProps = {
  angle: 0,
  breakAll: false,
  // Magic number from d3
  capHeight: '0.71em',
  lineHeight: '1em',
  scaleToFit: false,
  textAnchor: 'start',
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: 'end',
  x: 0,
  y: 0,
} as const satisfies Partial<Props>;

export const Text = forwardRef<SVGTextElement, Props>((outsideProps, ref) => {
  const typography: TextStyles = useBackwardsCompatibleTheme<TextStyles>(
    theme => theme.typography,
    {
      fill: outsideProps.fill,
    },
    defaultLegacyThemeProps,
  );
  const propsWithDefaults = resolveDefaultProps(outsideProps, textDefaultProps);
  const textPathId = useId();
  const {
    x: propsX,
    y: propsY,
    lineHeight,
    capHeight,
    scaleToFit,
    textAnchor,
    verticalAnchor,
    style: propsStyle,
    textPath,
    ...props
  } = propsWithDefaults;
  // Here it is important to actually remove these three props, and not put them to DOM
  const { angle, dx, dy, className, breakAll, ...textProps } = props;
  const { width } = textProps;

  const x = Number(propsX) + (isNumber(dx) ? dx : 0);
  const y = Number(propsY) + (isNumber(dy) ? dy : 0);

  const styleTemp: CSSProperties = useMemo(() => {
    return cssStylesToSvgStyles({
      ...typography,
      ...propsStyle,
    });
  }, [propsStyle, typography]);

  const wordsByLines: ReadonlyArray<Words> = useMemo(() => {
    return getWordsByLines({
      breakAll: props.breakAll,
      children: props.children,
      maxLines: props.maxLines,
      scaleToFit,
      style: styleTemp,
      width: props.width,
    });
  }, [props.breakAll, props.children, props.maxLines, scaleToFit, styleTemp, props.width]);

  const svgTransforms: string[] = useMemo(() => {
    const transformsMemo = [];
    const firstLine = wordsByLines[0];
    if (scaleToFit && firstLine != null) {
      const lineWidth = firstLine.width;
      transformsMemo.push(`scale(${isNumber(width) && isNumber(lineWidth) ? width / lineWidth : 1})`);
    }
    if (angle && textPath == null) {
      /*
       * textPath-driven labels are rotated using CSS transforms
       * to keep previous behavior unchanged.
       */
      transformsMemo.push(`rotate(${angle}, ${x}, ${y})`);
    }
    return transformsMemo;
  }, [scaleToFit, wordsByLines, width, angle, x, y, textPath]);

  const styleFinal: CSSProperties = useMemo(() => {
    /*
     * If the Text is driven by a textPath then we apply CSS rotations
     * where we can set transform-box: 'fill-box'
     */
    const cssTransforms = angle && textPath != null ? `rotate(${angle}deg)` : undefined;

    const temp: CSSProperties =
      cssTransforms != null
        ? {
            transform: cssTransforms,
            transformOrigin: 'center',
            transformBox: 'fill-box',
          }
        : {};
    return {
      ...temp,
      ...styleTemp,
    };
  }, [styleTemp, angle, textPath]);

  if (!isNumOrStr(propsX) || !isNumOrStr(propsY) || wordsByLines.length === 0) {
    return null;
  }

  if (!isWellBehavedNumber(x) || !isWellBehavedNumber(y)) {
    return null;
  }

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

  return (
    <text
      transform={svgTransforms.length > 0 ? svgTransforms.join(' ') : undefined}
      {...svgPropertiesAndEvents(textProps)}
      style={styleFinal}
      ref={ref}
      x={x}
      y={y}
      className={clsx('recharts-text', className)}
      textAnchor={textAnchor}
    >
      {textPath == null ? (
        wordsByLines.map((line, index) => {
          const words = line.words.join(breakAll ? '' : ' ');
          return (
            // duplicate words will cause duplicate keys which is why we add the array index here
            <tspan x={x} dy={index === 0 ? startDy : lineHeight} key={`${words}-${index}`}>
              {words}
            </tspan>
          );
        })
      ) : (
        <>
          <defs>
            <path id={textPathId} d={textPath} />
          </defs>
          <textPath xlinkHref={`#${textPathId}`}>{props.children}</textPath>
        </>
      )}
    </text>
  );
});

Text.displayName = 'Text';
