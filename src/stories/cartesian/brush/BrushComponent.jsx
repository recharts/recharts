/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-default-export */
import React, { Component } from 'react';
import { Surface, Brush } from '../../..';

export default class BrushComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    simple: {
      startIndex: 0,
      endIndex: this.props.data.length - 1,
    },
    gap: {
      startIndex: 0,
      endIndex: this.props.data.length - 1,
    },
  };

  handleChange = res => {
    this.setState({
      simple: res,
    });
  };

  handleGapChange = res => {
    this.setState({
      gap: res,
    });
  };

  renderTraveller = props => {
    const { x, y, width, height } = props;

    return (
      <path
        d={`M${x + width / 2},${y}L${x + width},${y + height / 2}L${x + width / 2},${y + height}L${x},${
          y + height / 2
        }Z`}
        fill="red"
        stroke="none"
      />
    );
  };

  render() {
    const { simple, gap } = this.state;
    return (
      <div>
        <p>Simple Brush</p>
        <Surface width={800} height={200}>
          <Brush
            startIndex={simple.startIndex}
            endIndex={simple.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            data={this.props.data}
            onChange={this.handleChange}
            traveller={this.renderTraveller}
          />
        </Surface>
        <p>Brush has specified gap</p>
        <Surface width={800} height={200}>
          <Brush
            startIndex={gap.startIndex}
            endIndex={gap.endIndex}
            x={100}
            y={50}
            width={400}
            height={40}
            data={this.props.data}
            gap={5}
            onChange={this.handleGapChange}
          />
        </Surface>
      </div>
    );
  }
}
