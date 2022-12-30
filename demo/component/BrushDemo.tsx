import React, { Component } from 'react';
import { Surface, Brush } from 'recharts';

export default class Demo extends Component<any, any> {
  static displayName = 'BrushDemo';

  data = [
    '2015-10-01',
    '2015-10-02',
    '2015-10-03',
    '2015-10-04',
    '2015-10-05',
    '2015-10-06',
    '2015-10-07',
    '2015-10-08',
    '2015-10-09',
    '2015-10-10',
    '2015-10-11',
    '2015-10-12',
    '2015-10-13',
    '2015-10-14',
    '2015-10-15',
    '2015-10-16',
    '2015-10-17',
    '2015-10-18',
    '2015-10-19',
    '2015-10-20',
    '2015-10-21',
    '2015-10-22',
    '2015-10-23',
    '2015-10-24',
    '2015-10-25',
    '2015-10-26',
    '2015-10-27',
    '2015-10-28',
    '2015-10-29',
    '2015-10-30',
  ];

  state = {
    simple: {
      startIndex: 0,
      endIndex: this.data.length - 1,
    },
    gap: {
      startIndex: 0,
      endIndex: this.data.length - 1,
    },
  };

  handleChange = (res: any) => {
    this.setState({
      simple: res,
    });
  };

  handleGapChange = (res: any) => {
    this.setState({
      gap: res,
    });
  };

  renderTraveller = (props: any) => {
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
            data={this.data}
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
            data={this.data}
            gap={5}
            onChange={this.handleGapChange}
          />
        </Surface>
      </div>
    );
  }
}
