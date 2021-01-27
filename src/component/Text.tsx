import React, { Component, CSSProperties, SVGProps } from 'react';
import reduceCSSCalc from 'reduce-css-calc';
import classNames from 'classnames';
import _ from 'lodash';
import { isNumber, isNumOrStr } from '../util/DataUtils';
import { Global } from '../util/Global';
import { filterProps } from '../util/types';
import { getStringSize } from '../util/DOMUtils';

const BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

interface WordWithComputedWidth {
  word: string;
  width: number;
}

interface CalculatedWordWidths {
  wordsWithComputedWidth: Array<WordWithComputedWidth>;
  spaceWidth: number;
}

const calculateWordWidths = (props: Props): CalculatedWordWidths => {
  try {
    let words: string[] = [];
    if (!_.isNil(props.children)) {
      if (props.breakAll) {
        words = props.children.toString().split('');
      } else {
        words = props.children.toString().split(BREAKING_SPACES);
      }
    }

    const wordsWithComputedWidth = words.map(word => ({ word, width: getStringSize(word, props.style).width }));

    const spaceWidth = props.breakAll ? 0 : getStringSize('\u00A0', props.style).width;

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

interface State {
  wordsByLines?: Array<Words>;
  prevWidth?: string | number;
  prevScaleToFit?: boolean;
  prevChildren?: string | number;
  prevStyle?: CSSProperties;
  prevBreakAll?: boolean;
}

const calculateWordsByLines = (
  props: Props,
  initialWordsWithComputedWith: Array<WordWithComputedWidth>,
  spaceWidth: number,
  lineWidth: number | string,
  scaleToFit?: boolean,
): Array<Words> => {
  const shouldLimitLines = isNumber(props.maxLines);
  const text = props.children as string;

  const calculate = (words: Array<WordWithComputedWidth> = []) =>
    words.reduce((result, { word, width }) => {
      const currentLine = result[result.length - 1];

      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
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
      ...props,
      children: tempText + suffix,
    }).wordsWithComputedWidth;

    const result = calculate(words);

    const doesOverflow = result.length > props.maxLines || findLongestLine(result).width > lineWidth;

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

const getWordsByLines = (props: Props, needCalculate: boolean) => {
  // Only perform calculations if using features that require them (multiline, scaleToFit)
  if ((props.width || props.scaleToFit) && !Global.isSsr) {
    let wordsWithComputedWidth: Array<WordWithComputedWidth>, spaceWidth: number;

    if (needCalculate) {
      const wordWidths = calculateWordWidths(props);

      if (wordWidths) {
        const { wordsWithComputedWidth: wcw, spaceWidth: sw } = wordWidths;

        wordsWithComputedWidth = wcw;
        spaceWidth = sw;
      } else {
        return getWordsWithoutCalculate(props.children);
      }

      return calculateWordsByLines(props, wordsWithComputedWidth, spaceWidth, props.width, props.scaleToFit);
    }
  }
  return getWordsWithoutCalculate(props.children);
};

export class Text extends Component<Props, State> {
  static defaultProps = {
    x: 0,
    y: 0,
    lineHeight: '1em',
    capHeight: '0.71em', // Magic number from d3
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'end', // Maintain compat with existing charts / default SVG behavior
  };

  state: State = {};

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    if (
      nextProps.width !== prevState.prevWidth ||
      nextProps.scaleToFit !== prevState.prevScaleToFit ||
      nextProps.children !== prevState.prevChildren ||
      nextProps.style !== prevState.prevStyle ||
      nextProps.breakAll !== prevState.prevBreakAll
    ) {
      const needCalculate =
        nextProps.children !== prevState.prevChildren ||
        nextProps.style !== prevState.prevStyle ||
        nextProps.breakAll !== prevState.prevBreakAll;

      return {
        prevWidth: nextProps.width,
        prevScaleToFit: nextProps.scaleToFit,
        prevChildren: nextProps.children,
        prevStyle: nextProps.style,
        wordsByLines: getWordsByLines(nextProps, needCalculate),
      };
    }

    return null;
  }

  render() {
    const {
      dx,
      dy,
      textAnchor,
      verticalAnchor,
      scaleToFit,
      angle,
      lineHeight,
      capHeight,
      className,
      breakAll,
      ...textProps
    } = this.props;
    const { wordsByLines } = this.state;

    if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) {
      return null;
    }
    const x = (textProps.x as number) + (isNumber(dx as number) ? (dx as number) : 0);
    const y = (textProps.y as number) + (isNumber(dy as number) ? (dy as number) : 0);

    let startDy: number;
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
      const { width } = this.props;
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
      >
        {wordsByLines.map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tspan x={x} dy={index === 0 ? startDy : lineHeight} key={index}>
            {line.words.join(breakAll ? '' : ' ')}
          </tspan>
        ))}
      </text>
    );
  }
}
