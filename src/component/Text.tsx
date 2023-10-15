import React, { CSSProperties, SVGProps, useMemo } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { isNumber, isNumOrStr } from '../util/DataUtils';
import { Global } from '../util/Global';
import { filterProps } from '../util/ReactUtils';
import { getStringSize } from '../util/DOMUtils';
import { reduceCSSCalc } from '../util/ReduceCSSCalc';

const BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

interface WordWithComputedWidth {
  word: string;
  width: number;
}

interface CalculatedWordWidths {
  wordsWithComputedWidth: Array<WordWithComputedWidth>;
  spaceWidth: number;
}

type CalculateWordWidthsParam = Pick<Props, 'children' | 'breakAll' | 'style'>;

const calculateWordWidths = ({ children, breakAll, style }: CalculateWordWidthsParam): CalculatedWordWidths => {
  try {
    let words: string[] = [];
    if (!_.isNil(children)) {
      if (breakAll) {
        words = children.toString().split('');
      } else {
        words = children.toString().split(BREAKING_SPACES);
      }
    }

    const wordsWithComputedWidth = words.map(word => ({ word, width: getStringSize(word, style).width }));

    const spaceWidth = breakAll ? 0 : getStringSize('\u00A0', style).width;

    return { wordsWithComputedWidth, spaceWidth };
  } catch (e) {
    return null;
  }
};

interface TextProps {
  scaleToFit?: boolean;
  angle?: number;
  textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
  verticalAnchor?: 'start' | 'middle' | 'end';
  style?: CSSProperties;
  lineHeight?: number | string;
  breakAll?: boolean;
  children?: string | number;
  maxLines?: number;
}

export type Props = Omit<SVGProps<SVGTextElement>, 'textAnchor' | 'verticalAnchor'> & TextProps;

interface Words {
  words: Array<string>;
  width?: number;
}

type CalculateWordsByLinesProps = Pick<Props, 'maxLines' | 'children' | 'style' | 'breakAll'>;

const calculateWordsByLines = (
  { maxLines, children, style, breakAll }: CalculateWordsByLinesProps,
  initialWordsWithComputedWith: Array<WordWithComputedWidth>,
  spaceWidth: number,
  lineWidth: number | string,
  scaleToFit?: boolean,
): Array<Words> => {
  const shouldLimitLines = isNumber(maxLines);
  const text = children as string;

  const calculate = (words: Array<WordWithComputedWidth> = []) =>
    words.reduce((result, { word, width }) => {
      const currentLine = result[result.length - 1];

      if (
        currentLine &&
        (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))
      ) {
        // Word can be added to an existing line
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        // Add first word to line or word is too long to scaleToFit on existing line
        const newLine = { words: [word], width };
        result.push(newLine);
      }

      return result;
    }, []);

  const originalResult = calculate(initialWordsWithComputedWith);

  const findLongestLine = (words: Array<Words>): Words =>
    words.reduce((a: Words, b: Words) => (a.width > b.width ? a : b));

  if (!shouldLimitLines) {
    return originalResult;
  }

  const suffix = '…';

  const checkOverflow = (index: number): [boolean, Words[]] => {
    const tempText = text.slice(0, index);

    const words = calculateWordWidths({
      breakAll,
      style,
      children: tempText + suffix,
    }).wordsWithComputedWidth;

    const result = calculate(words);

    const doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);

    return [doesOverflow, result];
  };

  let start = 0;
  let end = text.length - 1;

  let iterations = 0;
  let trimmedResult;

  while (start <= end && iterations <= text.length - 1) {
    const middle = Math.floor((start + end) / 2);
    const prev = middle - 1;

    const [doesPrevOverflow, result] = checkOverflow(prev);
    const [doesMiddleOverflow] = checkOverflow(middle);

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
  const words = !_.isNil(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{ words }];
};

type GetWordsByLinesProps = Pick<Props, 'width' | 'scaleToFit' | 'children' | 'style' | 'breakAll' | 'maxLines'>;

const getWordsByLines = ({ width, scaleToFit, children, style, breakAll, maxLines }: GetWordsByLinesProps) => {
  // Only perform calculations if using features that require them (multiline, scaleToFit)
  if ((width || scaleToFit) && !Global.isSsr) {
    let wordsWithComputedWidth: Array<WordWithComputedWidth>, spaceWidth: number;

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
      scaleToFit,
    );
  }
  return getWordsWithoutCalculate(children);
};

const DEFAULT_FILL = '#808080';

export const Text = ({
  x: propsX = 0,
  y: propsY = 0,
  lineHeight = '1em',
  // Magic number from d3
  capHeight = '0.71em',
  scaleToFit = false,
  textAnchor = 'start',
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor = 'end',
  fill = DEFAULT_FILL,
  ...props
}: Props) => {
  const wordsByLines: Array<Words> = useMemo(() => {
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

  if (!isNumOrStr(propsX) || !isNumOrStr(propsY)) {
    return null;
  }
  const x = (propsX as number) + (isNumber(dx as number) ? (dx as number) : 0);
  const y = (propsY as number) + (isNumber(dy as number) ? (dy as number) : 0);

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
    transforms.push(`scale(${(isNumber(width as number) ? (width as number) / lineWidth : 1) / lineWidth})`);
  }
  if (angle) {
    transforms.push(`rotate(${angle}, ${x}, ${y})`);
  }
  if (transforms.length) {
    textProps.transform = transforms.join(' ');
  }

  return (
    <text
      {...filterProps(textProps, true)}
      x={x}
      y={y}
      className={classNames('recharts-text', className)}
      textAnchor={textAnchor}
      fill={fill.includes('url') ? DEFAULT_FILL : fill}
    >
      {wordsByLines.map((line, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <tspan x={x} dy={index === 0 ? startDy : lineHeight} key={index}>
          {line.words.join(breakAll ? '' : ' ')}
        </tspan>
      ))}
    </text>
  );
};
