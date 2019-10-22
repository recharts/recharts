import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reduceCSSCalc from 'reduce-css-calc';
import classNames from 'classnames';
import _ from 'lodash';
import { isNumber, isNumOrStr } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, isSsr, filterEventAttributes } from '../util/ReactUtils';
import { getStringSize } from '../util/DOMUtils';

const BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

const calculateWordWidths = (props) => {
  try {
    const words = !_.isNil(props.children) ? props.children.toString().split(BREAKING_SPACES) : [];
    const wordsWithComputedWidth = words.map(word => (
      { word, width: getStringSize(word, props.style).width }
    ));

    const spaceWidth = getStringSize('\u00A0', props.style).width;

    return { wordsWithComputedWidth, spaceWidth };
  } catch (e) {
    return null;
  }
};


class Text extends Component {

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    scaleToFit: PropTypes.bool,
    angle: PropTypes.number,
    textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    verticalAnchor: PropTypes.oneOf(['start', 'middle', 'end']),
    style: PropTypes.object,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    lineHeight: '1em',
    capHeight: '0.71em', // Magic number from d3
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'end', // Maintain compat with existing charts / default SVG behavior
  };

  constructor(props) {
    super(props);
    this.state = {
      wordsByLines: this.getWordsByLines(props, true),
    };
  }

  componentDidMount() {
    this.updateWordsByLines(this.props, true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width || prevProps.scaleToFit !== this.props.scaleToFit || 
      prevProps.children !== this.props.children || prevProps.style !== this.props.style) {
      const needCalculate = (
        this.props.children !== prevProps.children ||
        this.props.style !== prevProps.style
      );
      this.updateWordsByLines(this.props, needCalculate);
    }
  }

  updateWordsByLines(props, needCalculate) {
    this.setState({
      wordsByLines: this.getWordsByLines(props, needCalculate),
    });
  }

  getWordsByLines(props, needCalculate) {
    // Only perform calculations if using features that require them (multiline, scaleToFit)
    if ((props.width || props.scaleToFit) && !isSsr()) {
      if (needCalculate) {
        const wordWidths = calculateWordWidths(props);

        if (wordWidths) {
          const { wordsWithComputedWidth, spaceWidth } = wordWidths;

          this.wordsWithComputedWidth = wordsWithComputedWidth;
          this.spaceWidth = spaceWidth;
        } else {
          return this.getWordsWithoutCalculate(props);
        }
      }

      return this.calculateWordsByLines(
        this.wordsWithComputedWidth,
        this.spaceWidth,
        props.width
      );
    }
    return this.getWordsWithoutCalculate(props);
  }

  getWordsWithoutCalculate = (props) => {
    const words = !_.isNil(props.children) ?
      props.children.toString().split(BREAKING_SPACES) :
      [];
    return [{ words }];
  }

  calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
    const { scaleToFit } = this.props;
    return (wordsWithComputedWidth || []).reduce((result, { word, width }) => {
      const currentLine = result[result.length - 1];

      if (currentLine && (lineWidth == null || scaleToFit ||
        (currentLine.width + width + spaceWidth) < lineWidth)) {
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
      ...textProps
    } = this.props;
    const { wordsByLines } = this.state;

    if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) { return null; }
    const x = textProps.x + (isNumber(dx) ? dx : 0);
    const y = textProps.y + (isNumber(dy) ? dy : 0);

    let startDy;
    switch (verticalAnchor) {
      case 'start':
        startDy = reduceCSSCalc(`calc(${capHeight})`);
        break;
      case 'middle':
        startDy = reduceCSSCalc(
          `calc(${(wordsByLines.length - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`
        );
        break;
      default:
        startDy = reduceCSSCalc(`calc(${wordsByLines.length - 1} * -${lineHeight})`);
        break;
    }

    const transforms = [];
    if (scaleToFit) {
      const lineWidth = wordsByLines[0].width;
      transforms.push(`scale(${this.props.width / lineWidth})`);
    }
    if (angle) {
      transforms.push(`rotate(${angle}, ${x}, ${y})`);
    }
    if (transforms.length) {
      textProps.transform = transforms.join(' ');
    }

    return (
      <text
        {...getPresentationAttributes(textProps)}
        {...filterEventAttributes(textProps)}
        x={x}
        y={y}
        className={classNames('recharts-text', className)}
        textAnchor={textAnchor}
      >
        {
        wordsByLines.map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tspan x={x} dy={index === 0 ? startDy : lineHeight} key={index}>
            {line.words.join(' ')}
          </tspan>
        ))
      }
      </text>
    );
  }
}

export default Text;
