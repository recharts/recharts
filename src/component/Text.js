import React, { Component, PropTypes } from 'react';
import reduceCSSCalc from 'reduce-css-calc';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

class Text extends Component {

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    scaleToFit: PropTypes.bool,
    angle: PropTypes.number,
    textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    verticalAnchor: PropTypes.oneOf(['start', 'middle', 'end']),
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

  state = {
    wordsByLines: [],
  };

  componentWillMount() {
    this.updateWordsByLines(this.props, true);
  }

  componentWillReceiveProps(nextProps) {
    const calculateWordWidths = (
      this.props.children !== nextProps.children ||
      this.props.style !== nextProps.style
    );
    this.updateWordsByLines(nextProps, calculateWordWidths);
  }

  updateWordsByLines(props, calculateWordWidths) {
    // Only perform calculations if using features that require them (multiline, scaleToFit)
    if (props.width || props.scaleToFit) {
      if (calculateWordWidths) {
        const { wordsWithComputedWidth, spaceWidth } = this.calculateWordWidths(props);
        this.wordsWithComputedWidth = wordsWithComputedWidth;
        this.spaceWidth = spaceWidth;
      }

      const wordsByLines = this.calculateWordsByLines(
        this.wordsWithComputedWidth,
        this.spaceWidth,
        props.width
      );
      this.setState({ wordsByLines });
    } else {
      const words = props.children ? props.children.toString().split(/\s+/) : [];
      this.setState({ wordsByLines: [{ words }] });
    }
  }

  calculateWordWidths(props) {
    // Calculate length of each word to be used to determine number of words per line
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    _.assign(text.style, props.style);
    svg.appendChild(text);
    document.body.appendChild(svg);

    const words = props.children ? props.children.toString().split(/\s+/) : [];
    const wordsWithComputedWidth = words.map(word => {
      text.textContent = word;
      return { word, width: text.getComputedTextLength() };
    });

    text.textContent = '\u00A0'; // Unicode space
    const spaceWidth = text.getComputedTextLength();

    document.body.removeChild(svg);

    return { wordsWithComputedWidth, spaceWidth };
  }

  calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
    const { scaleToFit } = this.props;
    return wordsWithComputedWidth.reduce((result, { word, width }) => {
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
      textAnchor,
      verticalAnchor,
      scaleToFit,
      angle,
      lineHeight,
      capHeight,
      className,
      ...textProps,
    } = this.props;
    const { wordsByLines } = this.state;
    const { x, y } = textProps;

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
        className={classNames('recharts-text', className)}
        textAnchor={textAnchor}
      >
      {
        wordsByLines.map((line, index) => (
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
