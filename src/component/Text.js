import React, { Component, PropTypes } from 'react';
import reduceCSSCalc from 'reduce-css-calc';
import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import _ from 'lodash';

class Text extends Component {

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    fit: PropTypes.bool,
    angle: PropTypes.number,
    textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    verticalAnchor: PropTypes.oneOf(['start', 'middle', 'end']),
  };

  static defaultProps = {
    x: 0,
    y: 0,
    lineHeight: '1em',
    capHeight: '0.71em', // Magic number from d3
    fit: false,
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
    this.updateWordsByLines(nextProps, this.props.children !== nextProps.children);
  }

  updateWordsByLines(props, calculateWordWidths) {
    // Only perform calculations if using features that require them (multiline, fit)
    if (props.width || props.fit) {
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
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
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
    const { fit } = this.props;
    return wordsWithComputedWidth.reduce((result, { word, width }) => {
      const currentLine = result[result.length - 1] || { words: [], width: 0 };

      if (currentLine.words.length === 0) {
        // First word on line
        const newLine = { words: [word], width };
        result.push(newLine);
      } else if (lineWidth == null || fit || (currentLine.width + width + spaceWidth) < lineWidth) {
        // Word can be added to an existing line
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        // Word is too long to fit on existing line
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
      fit,
      angle,
      lineHeight,
      capHeight,
      ...textProps,
    } = this.props;
    const { wordsByLines } = this.state;
    const { x, y } = textProps;

    let dy;
    switch (verticalAnchor) {
      case 'start':
        dy = reduceCSSCalc(`calc(${capHeight})`);
        break;
      case 'middle':
        dy = reduceCSSCalc(`calc(${capHeight} / 2)`);
        break;
      default:
        dy = 0;
        break;
    }

    const transforms = [];
    if (fit) {
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
      <text dy={dy} textAnchor={textAnchor} {...textProps}>
      {
        wordsByLines.length === 1 ?
        wordsByLines[0].words.join(' ') :
        wordsByLines.map((line, index) => (
          <tspan x={x} dy={index ? lineHeight : undefined} key={index}>
            {line.words.join(' ')}
          </tspan>
        ))
      }
      </text>
    );
  }
}

export default Text;
